import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rutas públicas que no requieren autenticación (URLs reales)
const PUBLIC_ROUTES = ['/login', '/registro'];

// ✅ EXPORT POR DEFECTO
export default function proxy(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  const isPublic = PUBLIC_ROUTES.some((route) => pathname.startsWith(route));

  // Si no hay token y la ruta no es pública → redirect a login
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Si hay token y está en ruta pública → redirect a dashboard
  if (token && isPublic) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Permitir continuar
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};