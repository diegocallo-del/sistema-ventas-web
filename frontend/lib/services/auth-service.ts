/**
 * Servicio de autenticacion
 * Maneja todas las operaciones relacionadas con autenticacion de usuarios
 */

import axios from 'axios';
import { authEndpoints } from '../config/endpoints';
import { LoginCredentials, AuthResponse, User } from '../types/usuario';

/**
 * Inicia sesion con credenciales
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const response = await axios.post<AuthResponse>(authEndpoints.login, credentials);
  return response.data;
}

/**
 * Cierra sesion del usuario actual
 */
export async function logout(token: string): Promise<void> {
  await axios.post(
    authEndpoints.logout,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

/**
 * Obtiene los datos del usuario autenticado actual
 */
export async function getCurrentUser(token: string): Promise<User> {
  const response = await axios.get<User>(authEndpoints.me, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

/**
 * Refresca el token de acceso usando el refresh token
 */
export async function refreshToken(refreshToken: string): Promise<AuthResponse> {
  const response = await axios.post<AuthResponse>(authEndpoints.refresh, {
    refresh_token: refreshToken,
  });
  return response.data;
}

/**
 * Verifica si un token es valido
 */
export async function verifyToken(token: string): Promise<boolean> {
  try {
    await axios.get(authEndpoints.verify, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch {
    return false;
  }
}