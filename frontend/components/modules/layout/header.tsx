'use client';

import React from 'react';
import { useAuth } from '@/hooks/use-auth';
import { formatFullName } from '@/lib/formatters';
import { roleLabels } from '@/lib/roles/role-config';
import { Bell, Settings, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const { user } = useAuth();
  
  if (!user) return null;

  return (
    <header className="h-16 w-full bg-slate-900/60 backdrop-blur-xl border-b border-blue-400/30 flex items-center justify-between px-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
      
      {/* Botón menú y título */}
      <div className="flex items-center gap-4 animate-fade-in">
        {onMenuToggle && (
          <button
            type="button"
            onClick={onMenuToggle}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-600/40 backdrop-blur-sm text-white shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:scale-110 transition-all duration-300 hover:bg-blue-600/50"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        <div>
          <h2 className="text-lg md:text-xl font-bold text-white">
            Bienvenido, {user.nombre}
          </h2>
          <p className="text-sm text-slate-300">{roleLabels[user.rol]}</p>
        </div>
      </div>
      
      {/* Acciones */}
      <div className="flex items-center gap-3">
        {/* Notificaciones */}
        <button className="relative p-2 rounded-xl hover:bg-blue-500/20 hover:border hover:border-blue-400/30 transition-all duration-300 text-slate-300 hover:text-blue-400 hover:scale-110">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse-slow border border-red-400/50" />
        </button>

        {/* Configuración */}
        <button className="p-2 rounded-xl hover:bg-blue-500/20 hover:border hover:border-blue-400/30 transition-all duration-300 text-slate-300 hover:text-blue-400 hover:scale-110">
          <Settings className="w-5 h-5" />
        </button>

        {/* Avatar y nombre */}
        <div className="flex items-center gap-3 pl-3 border-l border-blue-400/30">
          <div className="w-10 h-10 bg-blue-600/40 text-blue-300 rounded-full flex items-center justify-center font-bold border border-blue-400/30 shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:scale-110 transition-transform duration-300">
            {user.nombre.charAt(0).toUpperCase()}
          </div>
          <div className="hidden md:flex flex-col">
            <p className="text-sm font-medium text-white">
              {formatFullName(user.nombre, user.apellido)}
            </p>
            <p className="text-xs text-slate-400 truncate max-w-[150px]">
              {user.email}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
Header.displayName = 'Header';