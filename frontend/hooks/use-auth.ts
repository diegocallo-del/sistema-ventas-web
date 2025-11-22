'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/config/firebase';
import { User, LoginCredentials, UserRole } from '../lib/types/usuario';
import { useAuthStore } from '@/store/auth-store';
import { Permission } from '@/lib/roles/role-types';
import { hasPermission as checkPermission } from '@/lib/roles/role-checker';
import { loginTestUser, debugUsers } from '@/lib/config/test-users';
import { authEndpoints, userEndpoints } from '@/lib/config/endpoints';

type RegisterPayload = {
  username: string;
  email: string;
  password: string;
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
  async function login(credentials: LoginCredentials) {
    console.log('🔐 Intentando login...', credentials);

    // Primero intentar con usuarios de test
    const testUser = loginTestUser(credentials);
    if (testUser) {
      console.log('✅ Usuario de test encontrado:', testUser.username);

      // Crear tokens fake para compatibilidad
      const token = `test-token-${testUser.id}-${Date.now()}`;
      const refreshToken = `test-refresh-${testUser.id}-${Date.now()}`;

      storeLogin(testUser, token, refreshToken);

      return { success: true, user: testUser };
    }

    // Si no es usuario de test, intentar con backend
    console.log('🔄 No es usuario de test, intentando con backend...');
    try {
      const response = await axios.post(authEndpoints.login, credentials);

      if (response.data.success) {
        console.log(' Usuario autenticado:', response.data.user.username);

        const token = response.data.token;
        const refreshToken = response.data.refreshToken || '';

        storeLogin(response.data.user, token, refreshToken);

        return { success: true, user: response.data.user };
      } else {
        console.warn('❌ Credenciales incorrectas');
        clearLoading();
        return {
          success: false,
          error: response.data.message || 'Usuario o contraseña incorrectos',
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
      await axios.post(userEndpoints.create, data);

      return { success: true };
    } catch (error) {
      console.error('💥 Error en registro:', error);

      let message = 'Error al registrarse';

      if (axios.isAxiosError(error)) {
        const responseData = error.response?.data as any;
        const responseMessage =
          responseData?.message ?? responseData?.error ?? responseData?.detail;

        if (typeof responseMessage === 'string') {
          message = responseMessage;
        }
      }

      return {
        success: false,
        error: message,
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
  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    loginWithGoogle,
    register,
    logout,
    hasPermission,
  };
}
