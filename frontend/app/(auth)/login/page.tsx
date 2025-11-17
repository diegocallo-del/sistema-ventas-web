'use client';

import { LoginForm } from '@/components/modules/auth/login-form';

/**
 * Página de login
 *
 * Esta versión delega toda la lógica de autenticación al componente LoginForm,
 * que usa el hook useAuth y los usuarios de prueba definidos en lib/config/test-users.
 * De esta forma ya no hay credenciales hardcodeadas (admin/admin) aquí.
 */

export default function LoginPage() {
  return <LoginForm />;
}
