/**
 * Configuracion y utilidades para llamadas a la API
 */

import axios, { AxiosError, AxiosRequestConfig } from 'axios';
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

/**
 * Interceptor para agregar token a las peticiones
 */
api.interceptors.request.use(
  (config) => {
    // Obtener token del localStorage o cookies
    const token = getAuthToken();
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor para manejar respuestas y errores
 */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const apiError = parseApiError(error);
    
    // Si es error 401, intentar refrescar token
    if (error.response?.status === 401) {
      const refreshed = await tryRefreshToken();
      
      if (refreshed && error.config) {
        // Reintentar la peticion original
        return api.request(error.config);
      } else {
        // Si no se puede refrescar, redirigir a login
        handleUnauthorized();
      }
    }
    
    return Promise.reject(apiError);
  }
);

/**
 * Obtiene el token de autenticacion
 */
function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  
  return localStorage.getItem('auth_token');
}

/**
 * Guarda el token de autenticacion
 */
export function setAuthToken(token: string): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('auth_token', token);
}

/**
 * Elimina el token de autenticacion
 */
export function removeAuthToken(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('auth_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user_data');
}

/**
 * Intenta refrescar el token de acceso
 */
async function tryRefreshToken(): Promise<boolean> {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    
    if (!refreshToken) return false;
    
    const response = await axios.post(`${env.apiUrl}/api/v1/auth/refresh`, {
      refresh_token: refreshToken,
    });
    
    const { access_token, refresh_token: newRefreshToken } = response.data;
    
    localStorage.setItem('auth_token', access_token);
    localStorage.setItem('refresh_token', newRefreshToken);
    
    return true;
  } catch {
    return false;
  }
}

/**
 * Maneja errores de autorizacion
 */
function handleUnauthorized(): void {
  removeAuthToken();
  
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
}

/**
 * Parsea errores de axios a formato ApiError
 */
function parseApiError(error: AxiosError): ApiError {
  if (error.response) {
    const data = error.response.data as any;
    
    return {
      message: data.message || data.detail || 'Error en la peticion',
      errors: data.errors,
      status: error.response.status,
    };
  }
  
  if (error.request) {
    return {
      message: 'No se pudo conectar con el servidor',
      status: 0,
    };
  }
  
  return {
    message: error.message || 'Error desconocido',
  };
}

/**
 * Utilidad para hacer peticiones GET
 */
export async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.get<T>(url, config);
  return response.data;
}

/**
 * Utilidad para hacer peticiones POST
 */
export async function post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.post<T>(url, data, config);
  return response.data;
}

/**
 * Utilidad para hacer peticiones PUT
 */
export async function put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.put<T>(url, data, config);
  return response.data;
}

/**
 * Utilidad para hacer peticiones DELETE
 */
export async function del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.delete<T>(url, config);
  return response.data;
}