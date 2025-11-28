export enum UserRole {
  ADMIN = 'admin',
  SUPERVISOR = 'supervisor',
  VENDEDOR = 'vendedor',
  CAJERO = 'cajero',
  CLIENTE = 'cliente',
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  nombre: string;
  apellido: string;
  rol: UserRole;
  activo: boolean;
  fecha_creacion: string;
  ultimo_acceso: string | null;
  password?: string; // Solo para desarrollo
}