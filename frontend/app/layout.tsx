import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sistema de Ventas Empresarial',
  description: 'Sistema completo de punto de venta moderno con IA integrada',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sistema de Ventas',
  },
  openGraph: {
    title: 'Sistema de Ventas Empresarial',
    description: 'Sistema completo de punto de venta moderno con IA integrada',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased app-background font-sans">
        {children}
      </body>
    </html>
  );
}
