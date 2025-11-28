'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { AlertCircle } from 'lucide-react';

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black animate-gradient-slow">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-t-purple-600 border-white/20 rounded-full animate-spin" />
          <p className="text-white/80 text-lg">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black animate-gradient-slow px-4">
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg text-center max-w-sm">
          <AlertCircle className="mx-auto w-12 h-12 text-red-500 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Acceso Denegado</h2>
          <p className="text-white/80">
            No tienes permisos para acceder a esta sección
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
ProtectedRoute.displayName = 'ProtectedRoute';