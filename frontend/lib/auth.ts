/**
 * Utilidades para manejo de autenticacion
 */

import { User } from './types/usuario';

/**
 * Guarda los datos del usuario en localStorage
 */
export function saveUserData(user: User): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('user_data', JSON.stringify(user));
}

/**
 * Obtiene los datos del usuario de localStorage
 */
export function getUserData(): User | null {
  if (typeof window === 'undefined') return null;
  
  const userData = localStorage.getItem('user_data');
  
  if (!userData) return null;
  
  try {
    return JSON.parse(userData) as User;
  } catch {
    return null;
  }
}

/**
 * Elimina los datos del usuario de localStorage
 */
export function clearUserData(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('user_data');
  localStorage.removeItem('auth_token');
  localStorage.removeItem('refresh_token');
}

/**
 * Verifica si hay un usuario autenticado
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  
  const token = localStorage.getItem('auth_token');
  const userData = localStorage.getItem('user_data');
  
  return !!(token && userData);
}

/**
 * Obtiene el token de autenticacion
 */
export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  
  return localStorage.getItem('auth_token');
}

/**
 * Verifica si el token ha expirado
 */
export function isTokenExpired(token: string): boolean {
  try {
    // Decodificar JWT
    const payload = JSON.parse(atob(token.split('.')[1]));
    
    // Verificar exp
    if (!payload.exp) return true;
    
    // Comparar con tiempo actual (agregar buffer de 5 minutos)
    const expirationTime = payload.exp * 1000;
    const currentTime = Date.now();
    const bufferTime = 5 * 60 * 1000; // 5 minutos
    
    return currentTime >= expirationTime - bufferTime;
  } catch {
    return true;
  }
}