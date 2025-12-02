'use client';

/**
 * Componente LoginForm - login-form.tsx
 *
 * Formulario completo de login en React + TypeScript.
 * Usa el servicio de autenticación para conectarse al backend Spring Boot.
 * Incluye validaciones, manejo de errores y estados de carga.
 */

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/store/auth-store';

// Importar el servicio de autenticación que creamos
import { login, validateCredentials } from '@/lib/services/auth-service';

// Importar directamente el servicio de login
import { login as authServiceLogin } from '@/lib/services/auth-service';

// Componentes UI (usando tu sistema existente)
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * Interfaz para el estado del formulario
 * Contiene los valores de los campos del form
 */
interface LoginFormData {
  username: string;  // Puede ser username o email según @JsonAlias del backend
  password: string;
}

/**
 * Componente principal de LoginForm
 * Maneja el formulario completo de autenticación
 */
export function LoginForm() {
  const router = useRouter();
  const { login: storeLogin } = useAuthStore();

  // Estado del formulario
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });

  // Estados simples
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Maneja cambios en los inputs del formulario
   * Actualiza el estado del formulario cuando el usuario escribe
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario empieza a escribir
    setError(null);
  };

  /**
   * Maneja el envío del formulario
   * Valida campos y usa el hook useAuth para hacer la autenticación
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Usuario y contraseña son obligatorios');
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      // Login directo al backend
      const result = await authServiceLogin(formData);

      console.log('Resultado login:', result);

      if (result.success && result.user && result.token) {
        console.log('Login exitoso, actualizando estado global...');
        
        // Actualizar store global (persiste en localStorage y cookies)
        storeLogin(result.user, result.token, '');

        // Redirección INFALIBLE: forzar recarga completa para asegurar que
        // todos los componentes (incluyendo layouts de servidor/cliente) vean el nuevo estado.
        console.log('Navegando a dashboard...');
        window.location.href = '/dashboard';
      } else {
        console.log('Login fallido:', result.error);
        setError(result.error || 'Credenciales inválidas');
      }
    } catch (err: any) {
      console.error('Error de login:', err);
      setError('Error de conexión. Verifica que el backend esté corriendo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4
      bg-gradient-to-br from-slate-900 via-slate-800 to-black
      relative overflow-hidden">

      {/* Efectos visuales decorativos */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] top-10 left-10 animate-pulse-slow"></div>
      <div className="absolute w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[130px] bottom-10 right-10 animate-pulse-slow"></div>

      {/* Contenedor principal del formulario */}
      <div className="w-full max-w-md rounded-3xl border border-blue-400/30
        backdrop-blur-2xl bg-slate-900/60 shadow-[0_0_20px_rgba(59,130,246,0.15)]
        transition-all">

        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">Sistema de Ventas</h1>
            <p className="text-slate-300 text-sm">Ingresa tus credenciales</p>
          </div>

          {/* Formulario de login */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Mensaje de error si existe */}
            {error && (
              <div className="p-3 rounded-xl bg-red-900/20 border border-red-400/30 text-red-300 text-sm">
                {error}
              </div>
            )}

            {/* Campo de usuario (acepta username o email) */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-slate-200">
                Email
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="usuario@ejemplo.com"
                className="bg-slate-800/50 text-white placeholder-slate-400 border-slate-600 focus:border-blue-400"
                disabled={isLoading}
                autoFocus
              />
              <p className="text-xs text-slate-400">
                Ingresa tu correo electrónico registrado
              </p>
            </div>

            {/* Campo de contraseña */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-200">
                Contraseña
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Tu contraseña"
                  className="bg-slate-800/50 text-white placeholder-slate-400 border-slate-600 focus:border-blue-400 pr-10"
                  disabled={isLoading}
                />
                {/* Botón para mostrar/ocultar contraseña */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                  disabled={isLoading}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Botón de envío */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Iniciando sesión...
                </span>
              ) : (
                'Iniciar Sesión'
              )}
            </Button>
          </form>

          {/* Link a registro (opcional) */}
          <p className="text-center text-slate-400 text-sm mt-6">
            ¿No tienes cuenta?{' '}
            <Link href="/registro" className="text-blue-300 hover:text-blue-200 underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
