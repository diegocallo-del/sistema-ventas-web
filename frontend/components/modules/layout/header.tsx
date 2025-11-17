/**
 * Barra superior del dashboard
 */

'use client';

import React from 'react';
import { useAuth } from '@/hooks/use-auth';
import { formatFullName } from '@/lib/formatters';
import { roleLabels } from '@/lib/roles/role-config';
import { Bell, Settings } from 'lucide-react';

export function Header() {
  const { user } = useAuth();
  
  if (!user) return null;
  
  return (
    <header className="h-16 bg-white border-b border-secondary-200 flex items-center justify-between px-6">
      {/* Titulo de la pagina actual */}
      <div>
        <h2 className="text-xl font-semibold text-secondary-900">
          Bienvenido, {user.nombre}
        </h2>
        <p className="text-sm text-secondary-600">{roleLabels[user.rol]}</p>
      </div>
      
      {/* Acciones */}
      <div className="flex items-center gap-4">
        {/* Notificaciones */}
        <button className="p-2 text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded-lg transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        
        {/* Configuracion */}
        <button className="p-2 text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded-lg transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        
        {/* Avatar y nombre */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-medium">
            {user.nombre.charAt(0).toUpperCase()}
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-secondary-900">
              {formatFullName(user.nombre, user.apellido)}
            </p>
            <p className="text-xs text-secondary-600">{user.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
}