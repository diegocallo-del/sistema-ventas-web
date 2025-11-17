'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { User, LoginCredentials } from '../lib/types/usuario';
import { useAuthStore } from '@/store/auth-store';
import { Permission } from '@/lib/roles/role-types';
import { hasPermission as checkPermission } from '@/lib/roles/role-checker';
import { loginTestUser, debugUsers } from '@/lib/config/test-users';
import { userEndpoints } from '@/lib/config/endpoints';

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

    try {
      const loggedUser = loginTestUser(credentials);

      if (!loggedUser) {
        console.warn('❌ Credenciales incorrectas');
        clearLoading();
        return {
          success: false,
          error: 'Usuario o contraseña incorrectos',
        };
      }

      console.log('✅ Usuario autenticado:', loggedUser.username);

      const updatedUser: User = {
        ...loggedUser,
        ultimo_acceso: new Date().toISOString(),
      };

      // Tokens fake para pruebas
      const token = `fake-token-${updatedUser.id}-${Date.now()}`;
      const refreshToken = `fake-refresh-${updatedUser.id}-${Date.now()}`;

      storeLogin(updatedUser, token, refreshToken);

      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('💥 Error en login:', error);
      return {
        success: false,
        error: 'Error interno del sistema',
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
    register,
    logout,
    hasPermission,
  };
}
