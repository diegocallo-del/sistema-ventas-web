import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sistema POS',
  description: 'Sistema de punto de venta',
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
