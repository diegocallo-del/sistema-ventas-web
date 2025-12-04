/**
 * Constantes de la aplicacion
 */

import { DocumentType, PaymentMethod, SaleStatus, UserRole } from './types';

/**
 * Opciones de tipos de documento
 */
export const DOCUMENT_TYPE_OPTIONS = [
  { value: DocumentType.DNI, label: 'DNI' },
  { value: DocumentType.RUC, label: 'RUC' },
  { value: DocumentType.PASAPORTE, label: 'Pasaporte' },
  { value: DocumentType.CARNET_EXTRANJERIA, label: 'Carnet de Extranjeria' },
];

/**
 * Opciones de metodos de pago
 */
export const PAYMENT_METHOD_OPTIONS = [
  { value: PaymentMethod.EFECTIVO, label: 'Efectivo' },
  { value: PaymentMethod.TARJETA, label: 'Tarjeta' },
  { value: PaymentMethod.TRANSFERENCIA, label: 'Transferencia' },
  { value: PaymentMethod.YAPE, label: 'Yape' },
  { value: PaymentMethod.PLIN, label: 'Plin' },
];

/**
 * Opciones de estados de venta
 */
export const SALE_STATUS_OPTIONS = [
  { value: SaleStatus.PENDIENTE, label: 'Pendiente' },
  { value: SaleStatus.PAGADA, label: 'Pagada' },
  { value: SaleStatus.ENVIADA, label: 'Enviada' },
  { value: SaleStatus.ENTREGADA, label: 'Entregada' },
  { value: SaleStatus.CANCELADA, label: 'Cancelada' },
];

/**
 * Opciones de roles de usuario
 */
export const USER_ROLE_OPTIONS = [
  { value: UserRole.ADMIN, label: 'Administrador' },
  { value: UserRole.SUPERVISOR, label: 'Supervisor' },
  { value: UserRole.VENDEDOR, label: 'Vendedor' },
  { value: UserRole.CAJERO, label: 'Cajero' },
];

/**
 * Colores para estados de venta
 */
export const SALE_STATUS_COLORS: Record<SaleStatus, string> = {
  [SaleStatus.PENDIENTE]: 'text-yellow-600 bg-yellow-50',
  [SaleStatus.PAGADA]: 'text-green-600 bg-green-50',
  [SaleStatus.ENVIADA]: 'text-blue-600 bg-blue-50',
  [SaleStatus.ENTREGADA]: 'text-purple-600 bg-purple-50',
  [SaleStatus.CANCELADA]: 'text-red-600 bg-red-50',
};

/**
 * Colores para roles de usuario
 */
export const USER_ROLE_COLORS: Record<UserRole, string> = {
  [UserRole.ADMIN]: 'text-purple-600 bg-purple-50',
  [UserRole.SUPERVISOR]: 'text-blue-600 bg-blue-50',
  [UserRole.VENDEDOR]: 'text-gray-600 bg-gray-50',
  [UserRole.CAJERO]: 'text-emerald-600 bg-emerald-50',
  [UserRole.CLIENTE]: 'text-teal-600 bg-teal-50',
};

/**
 * IGV por defecto (18%)
 */
export const IGV_PERCENTAGE = 0.18;

/**
 * Timeout para debounce en busquedas (ms)
 */
export const SEARCH_DEBOUNCE_MS = 300;

/**
 * Numero maximo de items en el carrito
 */
export const MAX_CART_ITEMS = 50;

/**
 * Opciones de ordenamiento
 */
export const SORT_OPTIONS = [
  { value: 'fecha_creacion:desc', label: 'Mas recientes' },
  { value: 'fecha_creacion:asc', label: 'Mas antiguos' },
  { value: 'nombre:asc', label: 'Nombre A-Z' },
  { value: 'nombre:desc', label: 'Nombre Z-A' },
  { value: 'precio:asc', label: 'Precio menor a mayor' },
  { value: 'precio:desc', label: 'Precio mayor a menor' },
];

/**
 * Mensajes de confirmacion
 */
export const CONFIRM_MESSAGES = {
  deleteProduct: '¿Estas seguro de eliminar este producto?',
  deleteClient: '¿Estas seguro de eliminar este cliente?',
  cancelSale: '¿Estas seguro de cancelar esta venta?',
  clearCart: '¿Estas seguro de vaciar el carrito?',
  logout: '¿Estas seguro de cerrar sesion?',
};

/**
 * Rutas de navegacion
 */
export const ROUTES = {
  login: '/login',
  dashboard: '/dashboard',
  products: '/dashboard/productos',
  clients: '/dashboard/clientes',
  sales: '/dashboard/ventas',
  reports: '/dashboard/reportes',
};
