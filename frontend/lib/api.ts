/**
 * Configuracion y utilidades para llamadas a la API usando fetch nativo
 */

import { env, timeouts } from './config/env';
import { ApiError } from './types';

// Configuración base
export const API_CONFIG = {
  baseURL: env.apiUrl,
  timeout: timeouts.api,
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
};

/**
 * Utilidad para convertir URLs de imagen a URLs absolutas del backend
 */
export function getImageUrl(imagen: string | null): string | null {
  if (!imagen) return null;

  // Si ya es una URL completa, devolverla
  if (imagen.startsWith('http://') || imagen.startsWith('https://') || imagen.startsWith('data:')) {
    return imagen;
  }

  // Si es un endpoint API relativo (contiene /api/), construir URL completa
  if (imagen.includes('/api/')) {
    // Si contiene el full URL ya, verificar
    if (imagen.startsWith('http')) {
      return imagen; // Ya es completo
    }
    return `${API_CONFIG.baseURL}${imagen}`;
  }

  // Casos restantes: filenames, UUIDs, rutas relativas - todos van al backend
  // Si es ruta relativa (no começa con /), agregar /
  const path = imagen.startsWith('/') ? imagen : `/${imagen}`;
  return `${API_CONFIG.baseURL}/api/imagenes${path}`;
}

// Funciones helper para manejo de URL y headers
function buildUrl(url: string): string {
  if (url.startsWith('http')) {
    return url;
  }

  // En el navegador, usar rutas relativas para evitar CORS
  if (typeof window !== 'undefined') {
    return url.startsWith('/') ? url : `/${url}`;
  }

  // En el servidor, usar URL completa
  return `${API_CONFIG.baseURL}${url.startsWith('/') ? url : `/${url}`}`;
}

function getAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = { ...API_CONFIG.defaultHeaders };

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('auth_token');
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }
  return headers;
}

// Interfaz para requests con retry
interface RetryableRequest {
  method: string;
  headers: Record<string, string>;
  body?: any;
  _retry?: boolean;
}

// Función principal de HTTP con funcionalidad similar a axios
async function httpRequest<T>(
  method: string,
  url: string,
  data?: any,
  customHeaders?: Record<string, string>
): Promise<T> {
  const isFormData = typeof FormData !== 'undefined' && data instanceof FormData;
  const headers = { ...getAuthHeaders(), ...customHeaders };
  if (isFormData) {
    delete headers['Content-Type'];
  }
  const request: RetryableRequest = {
    method,
    headers
  };

  if (data) {
    request.body = isFormData ? data : JSON.stringify(data);
  }

  // Interceptor de petición (equivalente al axios interceptor)
  return await makeRequest(buildUrl(url), request);
}

// Función que maneja la petición real con fetch
async function makeRequest<T>(fullUrl: string, request: RetryableRequest): Promise<T> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

    const fetchOptions: RequestInit = {
      method: request.method,
      headers: request.headers,
      signal: controller.signal,
    };

    if (request.body) {
      fetchOptions.body = request.body;
    }

    const response = await fetch(fullUrl, fetchOptions);

    clearTimeout(timeoutId);

    // Interceptor de respuesta - manejo de 401 y refresh token
    if (response.status === 401 && !request._retry) {
      request._retry = true;

      try {
        const refreshed = await tryRefreshToken();
        if (refreshed) {
          // Reintentar la petición original con el nuevo token
          request.headers.Authorization = `Bearer ${localStorage.getItem('auth_token')}`;
          return await makeRequest(fullUrl, request);
        }
      } catch (refreshError) {
        handleUnauthorized();
        throw refreshError;
      }
    }

    if (response.ok) {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return data;
      }
      return null as T;
    } else {
      // Parsear error y lanzar como ApiError
      const apiError = await parseFetchError(response);
      throw apiError;
    }
  } catch (error) {
    const maybeApiError = error as ApiError;
    if (maybeApiError && typeof maybeApiError.status === 'number') {
      // Propagar errores HTTP parseados para no perder el mensaje
      throw maybeApiError;
    }
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw { message: 'Request timeout', status: 0 } as ApiError;
      }
    }
    throw { message: 'Network error', status: 0 } as ApiError;
  }
}

// Parsear errores de fetch
async function parseFetchError(response: Response): Promise<ApiError> {
  try {
    const data = await response.json().catch(() => ({})) as any;
    return {
      message: data.message || data.detail || `HTTP ${response.status}: ${response.statusText}`,
      status: response.status,
      errors: data.errors
    };
  } catch {
    return {
      message: `HTTP ${response.status}: ${response.statusText}`,
      status: response.status
    };
  }
}

// --- FUNCIONES HELPERS DE AUTENTICACIÓN ---

function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
}

async function tryRefreshToken(): Promise<boolean> {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) return false;

    // Usar fetch directamente para evitar el interceptor
    const response = await fetch(`${env.apiUrl}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });

    if (!response.ok) return false;

    const data = await response.json();
    const { access_token, refresh_token: newRefreshToken } = data;
    localStorage.setItem('auth_token', access_token);
    if (newRefreshToken) {
        localStorage.setItem('refresh_token', newRefreshToken);
    }

    return true;
  } catch {
    return false;
  }
}

function handleUnauthorized(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('auth_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user_data');
  window.location.replace('/login');
}

// --- FUNCIONES DE PETICIÓN PÚBLICAS (GET, POST, etc.) ---

export interface FetchConfig {
  headers?: Record<string, string>;
}

// Expone la función httpRequest para uso directo si es necesario
export const api = {
  request: httpRequest,
  get<T>(url: string, config?: FetchConfig): Promise<T> {
    return httpRequest<T>('GET', url, undefined, config?.headers);
  },
  post<T>(url: string, data?: any, config?: FetchConfig): Promise<T> {
    return httpRequest<T>('POST', url, data, config?.headers);
  },
  put<T>(url: string, data?: any, config?: FetchConfig): Promise<T> {
    return httpRequest<T>('PUT', url, data, config?.headers);
  },
  delete<T>(url: string, config?: FetchConfig): Promise<T> {
    return httpRequest<T>('DELETE', url, undefined, config?.headers);
  }
};

export async function get<T>(url: string, config?: FetchConfig): Promise<T> {
  return httpRequest<T>('GET', url, undefined, config?.headers);
}

export async function post<T>(url: string, data?: any, config?: FetchConfig): Promise<T> {
  return httpRequest<T>('POST', url, data, config?.headers);
}

export async function put<T>(url: string, data?: any, config?: FetchConfig): Promise<T> {
  return httpRequest<T>('PUT', url, data, config?.headers);
}

export async function del<T>(url: string, config?: FetchConfig): Promise<T> {
  return httpRequest<T>('DELETE', url, undefined, config?.headers);
}

/**
 * Llama al endpoint de análisis de la IA.
 */
export async function analizarConIA(pregunta: string, contexto: string): Promise<{ respuesta: string }> {
  return post('/api/ia/procesar', { pregunta, contexto });
}
