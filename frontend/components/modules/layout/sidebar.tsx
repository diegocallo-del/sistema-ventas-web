'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  BarChart3,
  LogOut,
} from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { canAccessSection } from '@/lib/roles/role-checker';
import { UserRole } from '@/lib/types/usuario';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  section: string;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" />, section: 'dashboard' },
  { label: 'Productos', href: '/dashboard/productos', icon: <Package className="w-5 h-5" />, section: 'productos' },
  { label: 'Clientes', href: '/dashboard/clientes', icon: <Users className="w-5 h-5" />, section: 'clientes' },
  { label: 'Ventas', href: '/dashboard/ventas', icon: <ShoppingCart className="w-5 h-5" />, section: 'ventas' },
  { label: 'Reportes', href: '/dashboard/reportes', icon: <BarChart3 className="w-5 h-5" />, section: 'reportes' },
  { label: 'Usuarios', href: '/dashboard/usuarios', icon: <Users className="w-5 h-5" />, section: 'usuarios' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside className="w-60 lg:w-64 bg-slate-950/95 backdrop-blur-2xl border-r border-blue-400/30 flex flex-col shadow-[0_0_20px_rgba(59,130,246,0.15)]">
      {/* Logo / POS System */}
      <div className="h-16 flex items-center justify-center border-b border-blue-400/30 bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-purple-900/50 shadow-[0_0_15px_rgba(59,130,246,0.12)]">
        <h1 className="text-lg font-semibold text-white tracking-wide px-4 py-1.5 rounded-xl border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm shadow-[0_0_10px_rgba(59,130,246,0.2)]">
          POS System
        </h1>
      </div>

      {/* Navegacion */}
      <nav className="flex-1 px-4 py-6 space-y-2 border-b border-blue-400/20">
        {navItems.map((item) => {
          if (!canAccessSection(user, item.section)) return null;

          const isActive = pathname === item.href;

          let label = item.label;
          if (user?.rol === UserRole.CLIENTE && item.section === 'productos') {
            label = 'Comprar / vender';
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group',
                isActive
                  ? 'bg-gradient-to-r from-blue-600/40 to-indigo-600/40 text-white border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] scale-105'
                  : 'text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border hover:border-blue-400/20 hover:scale-102'
              )}
            >
              <span className={clsx('transition-transform duration-300', isActive && 'scale-110')}>
                {item.icon}
              </span>
              <span className="truncate font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer con boton de logout */}
      <div className="px-4 py-4 border-t border-blue-400/30 pt-4">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-300 hover:bg-red-500/15 hover:text-red-400 hover:border hover:border-red-400/30 transition-all duration-300 hover:scale-102"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}
Sidebar.displayName = 'Sidebar';