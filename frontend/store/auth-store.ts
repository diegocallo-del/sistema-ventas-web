/**
 * Store global de autenticacion usando Zustand CON PERSISTENCIA
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/lib/types/usuario';

interface AuthState {
  // Estado
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
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

      /**
       * Inicia sesion con usuario y tokens
       */
      login: (user: User, token: string, refreshToken: string) => {
        console.log('🔄 Store.login():', { 
          user: user.username, 
          token: token.substring(0, 10) + '...',
          refreshToken: refreshToken.substring(0, 10) + '...'
        });
        
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
        
        // Limpiar localStorage
        if (typeof window !== 'undefined') {
          localStorage.removeItem('user_data');
          localStorage.removeItem('auth_token');
          localStorage.removeItem('refresh_token');
          console.log('🧹 Store: localStorage limpiado');
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
      },

      /**
       * Inicializa el store desde localStorage
       */
      initialize: () => {
        console.log('🔄 Store: Inicializando desde localStorage...');
        
        if (typeof window === 'undefined') {
          set({ isLoading: false });
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
            set({
              user,
              token,
              refreshToken,
              isAuthenticated: true,
              isLoading: false,
            });
            console.log('✅ Store: Usuario autenticado cargado:', user.username);
          } else {
            set({ 
              isLoading: false,
              isAuthenticated: false 
            });
            console.log('❌ Store: No hay usuario autenticado en localStorage');
          }
        } catch (error) {
          console.error('💥 Store: Error en initialize():', error);
          set({ 
            isLoading: false,
            isAuthenticated: false 
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
      }),
    }
  )
);