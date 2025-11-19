'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LayoutWrapperProps {
  children: ReactNode;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function LayoutWrapper({
  children,
  className = '',
  showHeader = true,
  showFooter = true,
}: LayoutWrapperProps) {
  const pathname = usePathname();

  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {/* Header */}
      {showHeader && (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Mi App</h1>
            <nav className="space-x-4">
              <Link
                href="/dashboard"
                className={`hover:underline ${
                  pathname === '/dashboard' ? 'font-semibold underline' : ''
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/login"
                className={`hover:underline ${
                  pathname === '/login' ? 'font-semibold underline' : ''
                }`}
              >
                Login
              </Link>
            </nav>
          </div>
        </header>
      )}

      {/* Main */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">{children}</main>

      {/* Footer */}
      {showFooter && (
        <footer className="bg-gray-100 text-gray-600 py-4 text-center mt-auto border-t">
          &copy; {new Date().getFullYear()} Mi App. Todos los derechos reservados.
        </footer>
      )}
    </div>
  );
}
