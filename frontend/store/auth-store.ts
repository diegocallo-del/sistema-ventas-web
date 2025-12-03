/**
 * Store global de autenticacion usando Zustand CON PERSISTENCIA
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/lib/types/usuario';
import { rolePermissions } from '@/lib/roles/role-config';

interface AuthState {
  // Estado
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isInitialized: boolean;

  // Acciones
  login: (user: User, token: string, refreshToken: string) => void;
  logout: () => void;
  initialize: () => void;
  clearLoading: () => void;
}

/**
 * Store de autenticacion con persistencia
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Estado inicial
      user: null,
      token: null,
      refreshToken: null,
      isLoading: true,
      isAuthenticated: false,
      isInitialized: false,

      /**
       * Inicia sesion con usuario y tokens
       */
      login: (user: User, token: string, refreshToken: string) => {
        console.log('🔄 Store.login():', { 
          user: user.username, 
          token: token.substring(0, 10) + '...',
          refreshToken: refreshToken.substring(0, 10) + '...'
        });
        
        // Hidratar permisos basados en el rol
        if (user.rol && rolePermissions[user.rol]) {
          user.permisos = rolePermissions[user.rol];
          console.log(`🔐 Store: Permisos hidratados para rol ${user.rol}: ${user.permisos.length} permisos`);
        }

        // Guardar en localStorage y cookie para que proxy.ts pueda leer el token
        if (typeof window !== 'undefined') {
          localStorage.setItem('user_data', JSON.stringify(user));
          localStorage.setItem('auth_token', token);
          localStorage.setItem('refresh_token', refreshToken);
          document.cookie = `auth_token=${token}; path=/; max-age=86400`;
          console.log('💾 Store: Datos guardados en localStorage y cookie');
        }

        // Actualizar estado
        set({
          user,
          token,
          refreshToken,
          isAuthenticated: true,
          isLoading: false,
        });
        
        console.log('✅ Store: Login completado - Estado actualizado');
      },

      /**
       * Cierra sesion y limpia datos
       */
      logout: () => {
        console.log('🔄 Store: Iniciando logout...');
        
        // Limpiar localStorage y cookies
        if (typeof window !== 'undefined') {
          localStorage.removeItem('user_data');
          localStorage.removeItem('auth_token');
          localStorage.removeItem('refresh_token');
          // Borrar cookie usada por el proxy
          document.cookie = 'auth_token=; path=/; max-age=0';
          console.log('🧹 Store: localStorage y cookies limpiados');
        }

        // Actualizar estado
        set({
          user: null,
          token: null,
          refreshToken: null,
          isAuthenticated: false,
          isLoading: false,
        });
        
        console.log('✅ Store: Logout completado');
        
        // Redirigir al login con un microtask para evitar condiciones de render
        if (typeof window !== 'undefined') {
          setTimeout(() => {
            console.log('➡️ Redirigiendo a /login...');
            window.location.replace('/login');
          }, 0);
        }
      },

      /**
       * Inicializa el store desde localStorage
       */
      initialize: () => {
        console.log('🔄 Store: Inicializando desde localStorage...');
        
        if (typeof window === 'undefined') {
          set({ isLoading: false, isInitialized: true });
          return;
        }

        try {
          const userData = localStorage.getItem('user_data');
          const token = localStorage.getItem('auth_token');
          const refreshToken = localStorage.getItem('refresh_token');

          console.log('📦 Store.initialize(): Datos encontrados:', {
            userData: userData ? '✅' : '❌',
            token: token ? '✅' : '❌',
            refreshToken: refreshToken ? '✅' : '❌'
          });

          if (userData && token) {
            const user = JSON.parse(userData) as User;

            // Re-hidratar permisos al cargar de disco por si acaso
            if (user.rol && (!user.permisos || user.permisos.length === 0) && rolePermissions[user.rol]) {
              user.permisos = rolePermissions[user.rol];
            }

            set({
              user,
              token,
              refreshToken,
              isAuthenticated: true,
              isLoading: false,
              isInitialized: true,
            });
            console.log('✅ Store: Usuario autenticado cargado:', user.username);
          } else {
            set({
              isLoading: false,
              isAuthenticated: false,
              isInitialized: true,
            });
            console.log('❌ Store: No hay usuario autenticado en localStorage');
          }
        } catch (error) {
          console.error('💥 Store: Error en initialize():', error);
          set({
            isLoading: false,
            isAuthenticated: false,
            isInitialized: true,
          });
        }
      },

      /**
       * Limpia el estado de loading
       */
      clearLoading: () => {
        set({ isLoading: false });
      },
    }),
    {
      name: 'auth-storage',
      // Solo persistir estos campos
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated,
        isInitialized: true, // Reset to true on hydration
      }),
    }
  )
);
