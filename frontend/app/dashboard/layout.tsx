"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/modules/layout/header';
import { Sidebar } from '@/components/modules/layout/sidebar';
import { ProtectedRoute } from '@/components/modules/layout/protected-route';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  return (
    <ProtectedRoute>
      <div className="min-h-screen app-background">
        <div className="flex min-h-screen">
          {/* SIDEBAR DESLIZABLE FIJO */}
          <div
            className={cn(
              'fixed left-0 top-0 bottom-0 z-30 w-64 shrink-0 transform transition-transform duration-500 ease-in-out',
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            )}
          >
            <Sidebar />
          </div>

          {/* CONTENIDO PRINCIPAL ESTÁTICO */}
          <div
            className={cn(
              'flex min-h-screen w-full flex-col transition-[margin-left] duration-500 ease-in-out',
              isMenuOpen ? 'ml-64' : 'ml-0'
            )}
          >
            <Header onMenuToggle={() => setIsMenuOpen((open) => !open)} />
            <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
              <div className="mx-auto max-w-6xl space-y-6">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
