'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AlertCircle } from 'lucide-react';
import { useAuthStore } from '@/store/auth-store';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermission?: string;
}

export function ProtectedRoute({ children, requiredPermission }: ProtectedRouteProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading, user, initialize, isInitialized } = useAuthStore();

  React.useEffect(() => {
    initialize();
  }, []);

  React.useEffect(() => {
    if (isInitialized && !isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isInitialized, isLoading, isAuthenticated]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black animate-gradient-slow">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-t-purple-600 border-white/20 rounded-full animate-spin" />
          <p className="text-white/80 text-lg">Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  // Si se requiere permiso, verificarlo aquí (puedes expandir la lógica)
  if (requiredPermission && user && !(user.permisos?.includes(requiredPermission))) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black animate-gradient-slow">
        <div className="flex flex-col items-center gap-4">
          <AlertCircle className="h-12 w-12 text-red-500" />
          <p className="text-white/80 text-lg">No tienes permiso para acceder a esta sección.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
ProtectedRoute.displayName = 'ProtectedRoute';
