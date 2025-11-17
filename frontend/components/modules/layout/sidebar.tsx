/**
 * Barra lateral de navegacion
 */

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

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  section: string;
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    section: 'dashboard',
  },
  {
    label: 'Productos',
    href: '/dashboard/productos',
    icon: <Package className="w-5 h-5" />,
    section: 'productos',
  },
  {
    label: 'Clientes',
    href: '/dashboard/clientes',
    icon: <Users className="w-5 h-5" />,
    section: 'clientes',
  },
  {
    label: 'Ventas',
    href: '/dashboard/ventas',
    icon: <ShoppingCart className="w-5 h-5" />,
    section: 'ventas',
  },
  {
    label: 'Reportes',
    href: '/dashboard/reportes',
    icon: <BarChart3 className="w-5 h-5" />,
    section: 'reportes',
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  
  return (
    <aside className="w-64 bg-white border-r border-secondary-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-secondary-200">
        <h1 className="text-xl font-bold text-primary-600">POS System</h1>
      </div>
      
      {/* Navegacion */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => {
          // Verificar si el usuario tiene acceso a esta seccion
          if (!canAccessSection(user, item.section)) {
            return null;
          }
          
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-primary-50 text-primary-700 font-medium'
                  : 'text-secondary-700 hover:bg-secondary-50'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      {/* Footer con boton de logout */}
      <div className="px-4 py-4 border-t border-secondary-200">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-secondary-700 hover:bg-secondary-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Cerrar Sesion</span>
        </button>
      </div>
    </aside>
  );
}