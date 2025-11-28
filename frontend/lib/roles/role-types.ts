/**
 * Definicion de tipos y constantes relacionadas con roles y permisos
 */

import { UserRole } from '../types/usuario';

/**
 * Acciones que se pueden realizar en el sistema
 */
export enum Permission {
  // Productos
  PRODUCTOS_VER = 'productos:ver',
  PRODUCTOS_CREAR = 'productos:crear',
  PRODUCTOS_EDITAR = 'productos:editar',
  PRODUCTOS_ELIMINAR = 'productos:eliminar',
  
  // Clientes
  CLIENTES_VER = 'clientes:ver',
  CLIENTES_CREAR = 'clientes:crear',
  CLIENTES_EDITAR = 'clientes:editar',
  CLIENTES_ELIMINAR = 'clientes:eliminar',
  
  // Ventas
  VENTAS_VER = 'ventas:ver',
  VENTAS_CREAR = 'ventas:crear',
  VENTAS_CANCELAR = 'ventas:cancelar',
  VENTAS_VER_TODAS = 'ventas:ver_todas',
  
  // Reportes
  REPORTES_VER = 'reportes:ver',
  REPORTES_EXPORTAR = 'reportes:exportar',
  
  // Usuarios
  USUARIOS_VER = 'usuarios:ver',
  USUARIOS_CREAR = 'usuarios:crear',
  USUARIOS_EDITAR = 'usuarios:editar',
  USUARIOS_ELIMINAR = 'usuarios:eliminar',
  
  // Configuracion
  CONFIG_VER = 'config:ver',
  CONFIG_EDITAR = 'config:editar',
}

/**
 * Tipo para mapa de permisos por rol
 */
export type RolePermissions = {
  [key in UserRole]: Permission[];
};