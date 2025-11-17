/**
 * Configuración de permisos por rol
 */

import { UserRole } from '../types/usuario';
import { Permission, RolePermissions } from './role-types';

/**
 * Mapa de permisos asignados a cada rol
 */
export const rolePermissions: RolePermissions = {
  /**
   * Administrador: acceso completo a todas las funcionalidades
   */
  [UserRole.ADMIN]: [
    Permission.PRODUCTOS_VER,
    Permission.PRODUCTOS_CREAR,
    Permission.PRODUCTOS_EDITAR,
    Permission.PRODUCTOS_ELIMINAR,

    Permission.CLIENTES_VER,
    Permission.CLIENTES_CREAR,
    Permission.CLIENTES_EDITAR,
    Permission.CLIENTES_ELIMINAR,

    Permission.VENTAS_VER,
    Permission.VENTAS_CREAR,
    Permission.VENTAS_CANCELAR,
    Permission.VENTAS_VER_TODAS,

    Permission.REPORTES_VER,
    Permission.REPORTES_EXPORTAR,

    Permission.USUARIOS_VER,
    Permission.USUARIOS_CREAR,
    Permission.USUARIOS_EDITAR,
    Permission.USUARIOS_ELIMINAR,

    Permission.CONFIG_VER,
    Permission.CONFIG_EDITAR,
  ],

  /**
   * Supervisor: puede gestionar productos, clientes, ventas y ver reportes
   */
  [UserRole.SUPERVISOR]: [
    Permission.PRODUCTOS_VER,
    Permission.PRODUCTOS_CREAR,
    Permission.PRODUCTOS_EDITAR,

    Permission.CLIENTES_VER,
    Permission.CLIENTES_CREAR,
    Permission.CLIENTES_EDITAR,

    Permission.VENTAS_VER,
    Permission.VENTAS_CREAR,
    Permission.VENTAS_CANCELAR,
    Permission.VENTAS_VER_TODAS,

    Permission.REPORTES_VER,
    Permission.REPORTES_EXPORTAR,
  ],

  /**
   * Vendedor: puede realizar ventas y ver productos y clientes
   */
  [UserRole.VENDEDOR]: [
    Permission.PRODUCTOS_VER,

    Permission.CLIENTES_VER,
    Permission.CLIENTES_CREAR,

    Permission.VENTAS_VER,
    Permission.VENTAS_CREAR,
  ],

  /**
   * Cajero: enfocado en registrar y cobrar ventas en caja
   */
  [UserRole.CAJERO]: [
    Permission.VENTAS_VER,
    Permission.VENTAS_CREAR,
    Permission.VENTAS_CANCELAR,
    Permission.CLIENTES_VER,
  ],

  /**
   * Cliente: si lo quieres agregar
   */
  [UserRole.CLIENTE]: [
    Permission.VENTAS_VER, // solo ver sus propias ventas
  ],
};

/**
 * Nombres descriptivos de los roles
 */
export const roleLabels: Record<UserRole, string> = {
  [UserRole.ADMIN]: 'Administrador',
  [UserRole.SUPERVISOR]: 'Supervisor',
  [UserRole.VENDEDOR]: 'Vendedor',
  [UserRole.CAJERO]: 'Cajero',
  [UserRole.CLIENTE]: 'Cliente',
};

/**
 * Descripciones de los roles
 */
export const roleDescriptions: Record<UserRole, string> = {
  [UserRole.ADMIN]: 'Acceso completo al sistema, puede gestionar usuarios y configuración',
  [UserRole.SUPERVISOR]: 'Puede gestionar productos, clientes, ventas y ver reportes',
  [UserRole.VENDEDOR]: 'Puede realizar ventas y consultar productos y clientes',
  [UserRole.CAJERO]: 'Puede registrar y cobrar ventas en caja, gestionando clientes básicos',
  [UserRole.CLIENTE]: 'Solo puede consultar sus propias ventas',
};
