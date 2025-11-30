'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { api } from '@/lib/api';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/config/firebase';
import { User, LoginCredentials, UserRole } from '../lib/types/usuario';
import { useAuthStore } from '@/store/auth-store';
import { Permission } from '@/lib/roles/role-types';
import { hasPermission as checkPermission } from '@/lib/roles/role-checker';
import { debugUsers } from '@/lib/config/test-users';
import { authEndpoints, userEndpoints } from '@/lib/config/endpoints';
import { env } from '@/lib/config/env';

type RegisterPayload = {
  username: string;
  nombre: string;
  email: string;
  password: string;
  rol: UserRole;
};

type RegisterResult = {
  success: boolean;
  error?: string;
};

export function useAuth() {
  const {
    user,
    isAuthenticated,
    isLoading,
    login: storeLogin,
    logout: storeLogout,
    initialize,
    clearLoading,
  } = useAuthStore();

  // Inicializar al montar el hook
  useEffect(() => {
    console.log('🎯 useAuth inicializando...');
    initialize();
    debugUsers();
  }, [initialize]);

  // =============================
  // 🚀 LOGIN
  // =============================
  async function login(credentials: LoginCredentials | { email: string; password: string }) {
    console.log('🔐 Intentando login con backend...', credentials);

    try {
      // Preparar datos para enviar al backend
      const loginData = {
        username: 'email' in credentials ? credentials.email : credentials.username,
        password: credentials.password,
      };

      console.log('📤 Enviando al backend:', loginData);

      // Enviar credenciales de login al backend SIN INTERCEPTOR (evita 403)
      const response = await axios.post(authEndpoints.login, loginData, {
        baseURL: undefined, // Reset baseURL para usar URL completa
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // NO incluir Authorization header para endpoint público
        },
        withCredentials: false, // Importante: deshabilitar credenciales para CORS
        timeout: 15000, // 15 segundos timeout
      });
      console.log('📡 Respuesta del backend:', response);

      if (response.data) {
        console.log('✅ Usuario autenticado:', response.data.username);

      // Crear objeto de usuario desde respuesta del backend
        const usernameUsed = 'email' in credentials ? credentials.email : credentials.username;
        const user = {
          id: response.data.id,
          username: usernameUsed, // El username original usado para login
          email: response.data.username, // El backend retorna username pero es el email
          nombre: response.data.nombre,
          apellido: '', // No viene del backend, dejar vacío
          rol: response.data.rol.toLowerCase() as UserRole, // Convertir a minúsculas para coincidir con enum
          activo: true,
          fecha_creacion: new Date().toISOString(),
          ultimo_acceso: new Date().toISOString(),
        };

        // Usar tokens reales del backend
        const token = response.data.token || response.data.access_token || "";
        const refreshToken = response.data.refresh_token || token; // Usar token como refresh si no hay refresh token

        storeLogin(user, token, refreshToken);

        return { success: true, user };
      } else {
        console.warn('❌ Respuesta inválida del backend');
        clearLoading();
        return {
          success: false,
          error: 'Respuesta inválida del servidor',
        };
      }
    } catch (error) {
      console.error('💥 Error en login:', error);

      let message = 'Error interno del sistema';

      if (axios.isAxiosError(error)) {
        const responseData = error.response?.data as any;
        const responseMessage =
          responseData?.message ?? responseData?.error ?? responseData?.detail;

        if (typeof responseMessage === 'string') {
          message = responseMessage;
        }

        // Si es error 401/403, credenciales incorrectas
        if (error.response?.status === 401 || error.response?.status === 403) {
          message = 'Usuario o contraseña incorrectos';
        }
      }

      return {
        success: false,
        error: message,
      };
    }
  }

  // =============================
  // 🔵 LOGIN CON GOOGLE
  // =============================
  async function loginWithGoogle() {
    console.log('🔵 Intentando login con Google...');

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      console.log('Usuario autenticado con Google:', firebaseUser.displayName);

      // Crear usuario compatible con el sistema
      const user: User = {
        id: Date.now(), // Temporal, podrías usar firebaseUser.uid
        username: firebaseUser.email || firebaseUser.displayName || 'google_user',
        email: firebaseUser.email || '',
        nombre: firebaseUser.displayName?.split(' ')[0] || 'Google',
        apellido: firebaseUser.displayName?.split(' ').slice(1).join(' ') || 'User',
        rol: UserRole.CLIENTE, // Por defecto cliente para usuarios de Google
        activo: true,
        fecha_creacion: new Date().toISOString(),
        ultimo_acceso: new Date().toISOString(),
      };

      // Tokens fake para compatibilidad con el sistema actual
      const token = `firebase-token-${firebaseUser.uid}-${Date.now()}`;
      const refreshToken = `firebase-refresh-${firebaseUser.uid}-${Date.now()}`;

      storeLogin(user, token, refreshToken);

      return { success: true, user };
    } catch (error) {
      console.error('💥 Error en login con Google:', error);
      return {
        success: false,
        error: 'Error al iniciar sesión con Google',
      };
    }
  }

  // =============================
  // 📝 REGISTRO
  // =============================
  async function register(data: RegisterPayload): Promise<RegisterResult> {
    console.log('📝 Intentando registro...', data);

    try {
      // Para registro público, usar configuración específica sin interceptores
      const response = await axios.post(authEndpoints.register, data, {
        baseURL: undefined, // Reset baseURL para usar URL completa
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // NO incluir Authorization header para endpoint público
        },
        withCredentials: false, // Importante: deshabilitar credenciales para CORS
        timeout: 15000, // 15 segundos timeout
      });

      console.log('✅ Registro exitoso:', response.data);
      return { success: true };
    } catch (error) {
      console.error('💥 Error en registro:', error);

      let message = 'Error al registrarse';
      let statusCode = 0;

      if (axios.isAxiosError(error)) {
        statusCode = error.response?.status || 0;
        const responseData = error.response?.data as any;

        console.error('📋 Detalles del error:', {
          status: statusCode,
          statusText: error.response?.statusText,
          data: responseData,
          headers: error.response?.headers,
        });

        // Determinar mensaje específico por código de error
        switch (statusCode) {
          case 400:
            message = responseData?.message || 'Datos inválidos. Verifica la información.';
            break;
          case 403:
            message = 'Acceso denegado. Verifica la configuración de seguridad.';
            break;
          case 409:
            message = responseData?.message || 'Ya existe un usuario con estos datos.';
            break;
          case 500:
            message = 'Error del servidor. Inténtalo más tarde.';
            break;
          case 0:
            message = 'No se pudo conectar con el servidor. Verifica tu conexión.';
            break;
          default:
            const responseMessage =
              responseData?.message ?? responseData?.error ?? responseData?.detail;
            message = typeof responseMessage === 'string' ? responseMessage : 'Error desconocido';
        }
      } else if (error instanceof Error) {
        message = error.message;
      }

      return {
        success: false,
        error: `${message} (Código: ${statusCode})`,
      };
    }
  }

  // =============================
  // 🚪 LOGOUT
  // =============================
  function logout() {
    console.log('🚪 Cerrando sesión...');
    storeLogout();
    document.cookie =
      'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }

  // =============================
  // 🔒 ROLES Y PERMISOS
  // =============================
  function hasPermission(permission: Permission | string): boolean {
    if (!user) return false;
    return checkPermission(user, permission as Permission);
  }

  // =============================
  // 📦 RETORNO DEL HOOK
  // =============================
  // =============================
  // 🧪 FUNCTION DE TEST PARA VERIFICAR COMUNICACIÓN
  // =============================
  async function testConnection(): Promise<RegisterResult> {
    console.log('🧪 Probando comunicación con backend...');
    const testData = { test: true, timestamp: Date.now() };

    try {
      // Para registro público, usar configuración específica sin interceptores
      const response = await axios.post(`${env.apiUrl}/auth/test`, testData, {
        baseURL: undefined, // Reset baseURL para usar URL completa
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // NO incluir Authorization header para endpoint público
        },
        withCredentials: false, // Importante: deshabilitar credenciales para CORS
        timeout: 10000, // 10 segundos timeout
      });

      console.log('✅ Test exitoso:', response.data);
      return { success: true, error: JSON.stringify(response.data) };
    } catch (error) {
      console.error('💥 Error en test de conexión:', error);

      let message = 'Error de conexión';
      let statusCode = 0;

      if (axios.isAxiosError(error)) {
        statusCode = error.response?.status || 0;
        const responseData = error.response?.data as any;

        console.error('📋 Detalles del error de test:', {
          status: statusCode,
          statusText: error.response?.statusText,
          data: responseData,
          headers: error.response?.headers,
        });

        // Determinar mensaje específico por código de error
        switch (statusCode) {
          case 403:
            message = '🚫 CORS/Security blocking - Axios setup needed';
            break;
          case 0:
            message = '💔 No network connection to backend';
            break;
          default:
            const responseMessage =
              responseData?.message ?? responseData?.error ?? responseData?.detail;
            message = typeof responseMessage === 'string' ? responseMessage : 'Backend communication error';
        }
      } else if (error instanceof Error) {
        message = error.message;
      }

      return {
        success: false,
        error: `${message} (HTTP ${statusCode})`,
      };
    }
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    loginWithGoogle,
    register,
    logout,
    hasPermission,
    // Función de debug para verificar comunicación
    testConnection,
  };
}
