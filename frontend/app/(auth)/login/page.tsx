'use client';

/**
 * Página de Login - page.tsx
 *
 * Ejemplo de implementación de login en Next.js que usa el LoginForm.
 * Esta página muestra cómo integrar el componente de login en una ruta de Next.js.
 *
 * URL: /login
 * Acceso: Público (no requiere autenticación)
 */

import { LoginForm } from '@/components/modules/auth/login-form';

export default function LoginPage() {
  return (
    /**
     * La página simplemente renderiza el LoginForm.
     * Todo el manejo de estado, validaciones y llamadas al backend
     * se hace dentro del componente LoginForm.
     */
    <LoginForm />
  );
}

/**
 * EJEMPLO DE USO MÁS Avanzado (opcional):
 *
 * Si necesitas personalizar el comportamiento de la página,
 * puedes crear un wrapper personalizado:
 */

/*
// Alternativa con más control - login-page-wrapper.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoginForm } from '@/components/modules/auth/login-form';
import { useAuth } from '@/hooks/use-auth';

export function LoginPageWrapper() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  // Si ya está autenticado, redirigir al dashboard
  useEffect(() => {
    if (isAuthenticated) {
      console.log('Usuario ya autenticado, redirigiendo...');
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  // Mostrar info del usuario si está autenticado
  if (user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-green-600 mb-4">
            ¡Ya estás autenticado!
          </h1>
          <p className="text-gray-700 mb-4">
            Bienvenido, {user.nombre}
          </p>
          <button
            onClick={() => router.push('/dashboard')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Ir al Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Si no está autenticado, mostrar el formulario de login
  return <LoginForm />;
}

// Luego en page.tsx:
// export default function LoginPage() {
//   return <LoginPageWrapper />;
// }
*/
