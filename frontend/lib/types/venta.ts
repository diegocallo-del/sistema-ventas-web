import { Client } from './cliente';
import { Product } from './producto';
import { User } from './usuario';

/**
 * Tipos y interfaces relacionadas con ventas
 */

/**
 * Estados de una venta
 * Deben coincidir con los valores del enum EstadoVenta del backend
 */
export enum SaleStatus {
  PENDIENTE = 'PENDIENTE',
  PAGADA = 'PAGADA',
  ENVIADA = 'ENVIADA',
  ENTREGADA = 'ENTREGADA',
  CANCELADA = 'CANCELADA',
}

/**
 * Metodos de pago - Deben coincidir con TipoPago del backend
 */
export enum PaymentMethod {
  EFECTIVO = 'EFECTIVO',
  TARJETA = 'TARJETA',
  TRANSFERENCIA = 'TRANSFERENCIA',
  YAPE = 'YAPE',
  PLIN = 'PLIN',
}

/**
 * Interface para detalle de venta
 */
export interface SaleDetail {
  id: number;
  venta_id: number;
  producto_id: number;
  producto?: Product;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
  producto_nombre: string;
}

/**
 * Interface para venta
 */
export interface Sale {
  id: number;
  fecha: string;
  cliente_id: number | null;
  cliente_nombre: string;
  cliente_documento: string | null;
  cliente?: Client;
  usuario_id: number;
  usuario_nombre: string;
  usuario?: User;
  subtotal: number;
  igv: number;
  total: number;
  metodo_pago: PaymentMethod;
  estado: SaleStatus;
  activo: boolean;
  observaciones: string | null;
  detalles: SaleDetail[];
  fecha_creacion: string;
  fecha_actualizacion: string;
}

/**
 * Item del carrito de compras
 */
export interface CartItem {
  producto: Product;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
}

/**
 * Datos para crear una nueva venta
 * Formato que espera el backend
 */
export interface CreateSaleData {
  clienteId?: number | null;
  tipoPago: string;
  detalles: {
    productoId: number;
    cantidad: number;
  }[];
}

/**
 * Filtros de busqueda de ventas
 */
export interface SaleFilters {
  fecha_inicio?: string;
  fecha_fin?: string;
  cliente_id?: number;
  usuario_id?: number;
  metodo_pago?: PaymentMethod;
  estado?: SaleStatus;
  total_min?: number;
  total_max?: number;
}

/**
 * Resumen de venta
 */
export interface SaleSummary {
  total_ventas: number;
  total_ingresos: number;
  promedio_venta: number;
  ventas_por_metodo: Record<PaymentMethod, number>;
}
