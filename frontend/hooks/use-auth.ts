'use client';

import { useState, useEffect } from 'react';
import { User, LoginCredentials, UserRole } from '../lib/types/usuario';
import { login, register } from '@/lib/services/auth-service';

type AuthResponse = {
  success: boolean;
  error?: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Inicializar: cargar usuario desde localStorage si existe
  useEffect(() => {
    const savedUser = localStorage.getItem('user_data');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (e) {
        localStorage.removeItem('user_data');
      }
    }
  }, []);

  // Login simple con el backend
  async function handleLogin(credentials: LoginCredentials | { username: string; password: string }): Promise<AuthResponse> {
    setIsLoading(true);

    try {
      // Enviar las credenciales directamente (backend maneja username/email con @JsonAlias)
      const result = await login(credentials as any);

      if (result.success && result.user) {
        // Guardar usuario en estado y localStorage (cast a User)
        const userData = result.user as User;
        setUser(userData);
        localStorage.setItem('user_data', JSON.stringify(userData));

        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error: any) {
      return { success: false, error: error.message || 'Error desconocido' };
    } finally {
      setIsLoading(false);
    }
  }

  // Logout simple
  function handleLogout() {
    setUser(null);
    localStorage.removeItem('user_data');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('refresh_token');
  }

  // Verificar si está autenticado
  const isAuthenticated = user !== null;

  // Obtener el rol actual
  const currentRole = user?.rol || UserRole.CLIENTE;

  // Login con Google (implementación pendiente)
  async function loginWithGoogle(): Promise<AuthResponse> {
    console.log("Google login pendiente");
    return { success: false, error: "Google login no implementado aún" };
  }

  // Register con el backend
  async function handleRegister(data: {
    username: string;
    nombre: string;
    email: string;
    password: string;
    rol: string;
  }): Promise<AuthResponse> {
    setIsLoading(true);

    try {
      const result = await register(data);

      if (result.success && result.user) {
        // Guardar usuario en estado y localStorage
        const userData = result.user as User;
        setUser(userData);
        localStorage.setItem('user_data', JSON.stringify(userData));

        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error: any) {
      return { success: false, error: error.message || 'Error desconocido en el registro' };
    } finally {
      setIsLoading(false);
    }
  }

  // Verificar permisos (implementación simple)
  function hasPermission(permiso: string): boolean {
    return true;
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    currentRole,
    login: handleLogin,
    logout: handleLogout,
    loginWithGoogle,
    register: handleRegister,
    hasPermission,
  };
}
