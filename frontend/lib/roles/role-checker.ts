/**
 * Funciones utilitarias para verificar permisos y roles
 */

import { User, UserRole } from '../types/usuario';
import { Permission } from './role-types';
import { rolePermissions } from './role-config';

/**
 * Verifica si un usuario tiene un permiso especifico
 */
export function hasPermission(user: User | null, permission: Permission): boolean {
  if (!user || !user.rol) return false;

  const rol = user.rol;
  const rolePerms = rolePermissions[rol];
  if (!rolePerms || rolePerms.length === 0) return false;

  return rolePerms.includes(permission);
}

/**
 * Verifica si un usuario tiene al menos uno de los permisos especificados
 */
export function hasAnyPermission(user: User | null, permissions: Permission[]): boolean {
  if (!user) return false;
  
  return permissions.some(permission => hasPermission(user, permission));
}

/**
 * Verifica si un usuario tiene todos los permisos especificados
 */
export function hasAllPermissions(user: User | null, permissions: Permission[]): boolean {
  if (!user) return false;
  
  return permissions.every(permission => hasPermission(user, permission));
}

/**
 * Verifica si un usuario tiene un rol especifico
 */
export function hasRole(user: User | null, role: UserRole): boolean {
  if (!user) return false;
  
  return user.rol === role;
}

/**
 * Verifica si un usuario tiene al menos uno de los roles especificados
 */
export function hasAnyRole(user: User | null, roles: UserRole[]): boolean {
  if (!user) return false;
  
  return roles.includes(user.rol);
}

/**
 * Obtiene todos los permisos de un usuario
 */
export function getUserPermissions(user: User | null): Permission[] {
  if (!user || !user.rol) return [];

  const rol = user.rol;
  const permissions = rolePermissions[rol];
  return permissions || [];
}

/**
 * Verifica si un usuario puede ver una seccion especifica
 */
export function canAccessSection(user: User | null, section: string): boolean {
  if (!user) return false;
  
  // El dashboard es visible para cualquier usuario autenticado
  if (section === 'dashboard') {
    return true;
  }

  const sectionPermissions: Record<string, Permission> = {
    productos: Permission.PRODUCTOS_VER,
    clientes: Permission.CLIENTES_VER,
    ventas: Permission.VENTAS_VER,
    reportes: Permission.REPORTES_VER,
    usuarios: Permission.USUARIOS_VER,
    configuracion: Permission.CONFIG_VER,
  };
  
  const requiredPermission = sectionPermissions[section];
  if (!requiredPermission) return false;
  
  return hasPermission(user, requiredPermission);
}

/**
 * Verifica si un usuario es administrador
 */
export function isAdmin(user: User | null): boolean {
  return hasRole(user, UserRole.ADMIN);
}

/**
 * Verifica si un usuario es supervisor o superior
 */
export function isSupervisorOrAbove(user: User | null): boolean {
  return hasAnyRole(user, [UserRole.ADMIN, UserRole.SUPERVISOR]);
}
