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
   * Supervisor: puede gestionar productos, clientes y ventas, y ver reportes globales de vendedores y sus clientes
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

    Permission.USUARIOS_VER,
  ],

  /**
   * Vendedor: gestiona productos con proveedores, atiende a sus clientes y puede ver reportes de su propia gestión
   */
  [UserRole.VENDEDOR]: [
    Permission.PRODUCTOS_VER,
    Permission.PRODUCTOS_CREAR,
    Permission.PRODUCTOS_EDITAR,

    Permission.CLIENTES_VER,
    Permission.CLIENTES_CREAR,
    Permission.CLIENTES_EDITAR,

    Permission.VENTAS_VER,
    Permission.VENTAS_CREAR,

    Permission.REPORTES_VER,
    Permission.REPORTES_EXPORTAR,
  ],

  /**
   * Cajero: enfocado en registrar y cobrar ventas en caja (actualmente no se utiliza)
   */
  [UserRole.CAJERO]: [
    Permission.VENTAS_VER,
    Permission.VENTAS_CREAR,
    Permission.VENTAS_CANCELAR,
    Permission.CLIENTES_VER,
  ],

  /**
   * Cliente: compra y vende dentro del sistema (solo ve sus propias operaciones)
   */
  [UserRole.CLIENTE]: [
    Permission.PRODUCTOS_VER,
    Permission.PRODUCTOS_CREAR,
    Permission.PRODUCTOS_EDITAR,

    Permission.VENTAS_VER,
    Permission.VENTAS_CREAR, // crea compras/ventas para sí mismo
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
  [UserRole.SUPERVISOR]: 'Puede gestionar productos, clientes y ventas, y ver reportes globales de vendedores y sus clientes',
  [UserRole.VENDEDOR]: 'Orientado a proveedores: gestiona productos, atiende a sus clientes y puede ver reportes de su propia gestión',
  [UserRole.CAJERO]: 'Puede registrar y cobrar ventas en caja, gestionando clientes básicos',
  [UserRole.CLIENTE]: 'Cliente tipo Mercado Libre: puede ver productos, comprar/vender y consultar solo sus propias operaciones',
};
