/**
 * Servicio de ventas
 * Maneja todas las operaciones relacionadas con ventas
 */

import { api } from '../api';
import { saleEndpoints } from '../config/endpoints';
import {
  Sale,
  CreateSaleData,
  SaleFilters,
  SaleSummary,
  PaginatedResponse,
  QueryOptions,
  PaymentMethod,
  SaleStatus,
} from '../types';

/**
 * Interfaz temporal para la respuesta del backend
 */
interface VentaDTOBackend {
  id: number;
  clienteId: number | null;
  clienteNombre: string;
  clienteDocumento: string | null;
  usuarioId: number;
  usuarioNombre: string;
  total: number;
  estadoVenta: string;
  tipoPago: string;
  fechaCreacion: string;
  fechaActualizacion: string;
  activo: boolean;
  detalles: Array<{
    id: number;
    productoId: number;
    productoNombre: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
  }>;
}

/**
 * Mapea VentaDTO del backend a Sale del frontend
 */
function mapVentaFromBackend(dto: VentaDTOBackend): Sale {
  const subtotal = dto.detalles.reduce((sum, d) => sum + Number(d.subtotal), 0);
  const igv = Number(dto.total) - subtotal;

  return {
    id: dto.id,
    fecha: dto.fechaCreacion,
    cliente_id: dto.clienteId !== null ? Number(dto.clienteId) : null,
    cliente_nombre: dto.clienteNombre,
    cliente_documento: dto.clienteDocumento,
    usuario_id: dto.usuarioId,
    usuario_nombre: dto.usuarioNombre,
    subtotal: subtotal,
    igv: igv,
    total: Number(dto.total),
    metodo_pago: dto.tipoPago as PaymentMethod,
    estado: dto.estadoVenta as SaleStatus,
    observaciones: null,
    activo: dto.activo,
    fecha_creacion: dto.fechaCreacion,
    fecha_actualizacion: dto.fechaActualizacion,
    detalles: dto.detalles.map(d => ({
      id: d.id,
      venta_id: dto.id,
      producto_id: d.productoId,
      producto_nombre: d.productoNombre,
      cantidad: d.cantidad,
      precio_unitario: Number(d.precioUnitario),
      subtotal: Number(d.subtotal),
    })),
  };
}

/**
 * Obtiene lista de ventas
 * El backend devuelve una lista directa, no paginada
 */
export async function getSales(
  options: QueryOptions = {}
): Promise<PaginatedResponse<Sale>> {
  const response = await api.get<VentaDTOBackend[]>(saleEndpoints.base);

  // Mapear ventas del backend al formato del frontend
  const items = response.map(mapVentaFromBackend);
  
  // Convertir lista a formato paginado para compatibilidad
  const page = options.page || 1;
  const pageSize = options.page_size || 10;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedItems = items.slice(start, end);

  return {
    items: paginatedItems,
    total: items.length,
    page: page,
    page_size: pageSize,
    total_pages: Math.ceil(items.length / pageSize),
  };
}

/**
 * Obtiene una venta por ID con sus detalles
 */
export async function getSaleById(id: number): Promise<Sale> {
  const response = await api.get<VentaDTOBackend>(saleEndpoints.byId(id));
  return mapVentaFromBackend(response);
}

/**
 * Crea una nueva venta
 */
export async function createSale(data: CreateSaleData): Promise<Sale> {
  const response = await api.post<VentaDTOBackend>(saleEndpoints.create, data);
  return mapVentaFromBackend(response);
}

/**
 * Cancela una venta existente
 */
export async function cancelSale(id: number, motivo: string): Promise<Sale> {
  const response = await api.post<VentaDTOBackend>(
    saleEndpoints.cancel(id),
    { motivo }
  );
  return mapVentaFromBackend(response);
}

/**
 * Obtiene ventas por rango de fechas
 */
export async function getSalesByDateRange(
  fechaInicio: string,
  fechaFin: string
): Promise<Sale[]> {
  const response = await api.get<VentaDTOBackend[]>(
    `${saleEndpoints.byDate}?fecha_inicio=${encodeURIComponent(fechaInicio)}&fecha_fin=${encodeURIComponent(fechaFin)}`
  );
  return response.map(mapVentaFromBackend);
}

/**
 * Obtiene ventas de un cliente especifico
 */
export async function getSalesByClient(clientId: number): Promise<Sale[]> {
  const response = await api.get<VentaDTOBackend[]>(saleEndpoints.byClient(clientId));
  return response.map(mapVentaFromBackend);
}

/**
 * Obtiene resumen de ventas segun filtros
 */
export async function getSalesSummary(
  filters: SaleFilters = {}
): Promise<SaleSummary> {
  try {
    const queryParams = Object.keys(filters)
      .filter(key => filters[key as keyof SaleFilters] !== undefined && filters[key as keyof SaleFilters] !== null)
      .map(key => `${key}=${encodeURIComponent(String(filters[key as keyof SaleFilters]))}`)
      .join('&');

    const url = queryParams ? `${saleEndpoints.base}/summary?${queryParams}` : `${saleEndpoints.base}/summary`;
    const response = await api.get<SaleSummary>(url);
    return response;
  } catch {
    // Si no existe el endpoint, calcular desde todas las ventas
    const ventas = await getSales();
    const total = ventas.items.reduce((sum, v) => sum + v.total, 0);
    const cantidad = ventas.items.length;
    const ventasPorMetodo: Record<PaymentMethod, number> = ventas.items.reduce((acc, v) => {
      const metodo = v.metodo_pago as PaymentMethod;
      acc[metodo] = (acc[metodo] || 0) + v.total;
      return acc;
    }, {} as Record<PaymentMethod, number>);

    return {
      total_ventas: cantidad,
      total_ingresos: total,
      promedio_venta: cantidad > 0 ? total / cantidad : 0,
      ventas_por_metodo: ventasPorMetodo,
    };
  }
}
