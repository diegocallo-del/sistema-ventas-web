/**
 * Servicio de autenticacion
 * Maneja todas las operaciones relacionadas con autenticacion de usuarios
 */

import { authEndpoints } from '../config/endpoints';
import { LoginCredentials, AuthResponse, User } from '../types/usuario';
import { API_CONFIG } from '../api';
import { ApiError } from '../types';

/**
 * Función helper para hacer peticiones con fetch sin interceptores
 */
async function directRequest<T>(
  method: string,
  url: string,
  data?: any,
  headers: Record<string, string> = {}
): Promise<T> {
  const fullUrl = url.startsWith('http') ? url : `${API_CONFIG.baseURL}${url.startsWith('/') ? url : `/${url}`}`;

  const response = await fetch(fullUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw { message: errorData.message || 'Error en la petición', status: response.status } as ApiError;
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  return null as T;
}

/**
 * Inicia sesion con credenciales
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  return directRequest<AuthResponse>('POST', authEndpoints.login, credentials);
}

/**
 * Cierra sesion del usuario actual
 */
export async function logout(token: string): Promise<void> {
  await directRequest(
    'POST',
    authEndpoints.logout,
    {},
    {
      Authorization: `Bearer ${token}`,
    }
  );
}

/**
 * Obtiene los datos del usuario autenticado actual
 */
export async function getCurrentUser(token: string): Promise<User> {
  return directRequest<User>(
    'GET',
    authEndpoints.me,
    undefined,
    {
      Authorization: `Bearer ${token}`,
    }
  );
}

/**
 * Refresca el token de acceso usando el refresh token
 */
export async function refreshToken(refreshToken: string): Promise<AuthResponse> {
  return directRequest<AuthResponse>('POST', authEndpoints.refresh, {
    refresh_token: refreshToken,
  });
}

/**
 * Verifica si un token es valido
 */
export async function verifyToken(token: string): Promise<boolean> {
  try {
    await directRequest(
      'GET',
      authEndpoints.verify,
      undefined,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return true;
  } catch {
    return false;
  }
}
