/**
 * Componente para proteger rutas que requieren autenticacion
 */

'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermission?: string;
}

export function ProtectedRoute({ children, requiredPermission }: ProtectedRouteProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading, user, hasPermission } = useAuth();
  
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);
  
  // Mostrar loading mientras se verifica la autenticacion
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto" />
          <p className="mt-4 text-secondary-600">Cargando...</p>
        </div>
      </div>
    );
  }
  
  // Si no esta autenticado, no mostrar nada (se redirigira)
  if (!isAuthenticated || !user) {
    return null;
  }
  
  // Verificar permisos si se especificaron
  if (requiredPermission && !hasPermission(requiredPermission)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary-900">Acceso Denegado</h2>
          <p className="mt-2 text-secondary-600">
            No tienes permisos para acceder a esta seccion
          </p>
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
}