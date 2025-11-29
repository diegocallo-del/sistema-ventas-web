/**
 * Configuracion y utilidades para llamadas a la API
 */

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { env, timeouts } from './config/env';
import { ApiError } from './types';

/**
 * Instancia configurada de axios
 */
export const api = axios.create({
  baseURL: env.apiUrl,
  timeout: timeouts.api,
  headers: {
    'Content-Type': 'application/json',
  },
});

// --- INTERCEPTORES DE AXIOS ---

// Definimos una interfaz para poder añadir una propiedad custom `_retry`
type RetryableRequest = InternalAxiosRequestConfig & { _retry?: boolean };

/**
 * 1. Interceptor de Petición (REQUEST)
 * Se ejecuta ANTES de que cada petición sea enviada.
 */
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAuthToken();
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error: any) => {
    // Maneja errores que ocurren al configurar la petición
    return Promise.reject(error);
  }
);

/**
 * 2. Interceptor de Respuesta (RESPONSE)
 * Se ejecuta DESPUÉS de recibir una respuesta (exitosa o con error).
 */
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Para respuestas exitosas (status 2xx), simplemente las devuelve.
    return response;
  },
  async (error: AxiosError) => {
    // Aseguramos que el error es de axios
    if (!axios.isAxiosError(error)) {
      return Promise.reject(error);
    }

    const originalRequest = error.config as RetryableRequest | undefined;

    // Si el error es 401 (No Autorizado) y es una petición que no hemos reintentado ya...
    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true; // Marcamos para no reintentar infinitamente

      try {
        const refreshed = await tryRefreshToken();
        if (refreshed) {
          // Si el token se refrescó, reintentamos la petición original.
          // Usamos `as any` aquí como un 'escape hatch' necesario. Esta es la solución
          // estándar y pragmática para un problema de tipos conocido en axios.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return api(originalRequest as any);
        }
      } catch (refreshError) {
        // Si el refresco del token falla, la sesión es inválida.
        handleUnauthorized();
        return Promise.reject(refreshError);
      }
    }

    // Para todos los demás errores, los parseamos a nuestro formato y los devolvemos.
    const apiError = parseApiError(error);
    return Promise.reject(apiError);
  }
);

// --- FUNCIONES HELPERS DE AUTENTICACIÓN ---

function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
}

async function tryRefreshToken(): Promise<boolean> {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) return false;

    const response = await axios.post(`${env.apiUrl}/auth/refresh`, { refresh_token: refreshToken });

    const { access_token, refresh_token: newRefreshToken } = response.data;
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

function parseApiError(error: AxiosError): ApiError {
  if (error.response) {
    const data = error.response.data as any;
    return { message: data.message || data.detail || 'Error en la petición', errors: data.errors, status: error.response.status };
  }
  if (error.request) {
    return { message: 'No se pudo conectar con el servidor', status: 0 };
  }
  return { message: error.message || 'Error desconocido' };
}

// --- FUNCIONES DE PETICIÓN PÚBLICAS (GET, POST, etc.) ---

export async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.get<T>(url, config);
  return response.data;
}

export async function post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.post<T>(url, data, config);
  return response.data;
}

export async function put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.put<T>(url, data, config);
  return response.data;
}

export async function del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.delete<T>(url, config);
  return response.data;
}

/**
 * Llama al endpoint de análisis de la IA.
 */
export async function analizarConIA(pregunta: string, contexto: string): Promise<{ respuesta: string }> {
  return post('/api/ia/procesar', { pregunta, contexto });
}
