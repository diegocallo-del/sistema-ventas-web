/**
 * lib/ventas.ts
 *
 * Helper de alto nivel para operaciones de ventas.
 * Envuelve al servicio de ventas (`lib/services/venta-service`) y expone
 * funciones tipadas para usar en el frontend.
 */

import {
  Sale,
  CreateSaleData,
  SaleFilters,
  SaleSummary,
  PaginatedResponse,
  QueryOptions,
} from './types';
import {
  getSales,
  getSaleById,
  createSale,
  cancelSale,
  getSalesByDateRange,
  getSalesByClient,
  getSalesSummary,
} from './services/venta-service';

/**
 * Obtiene lista paginada de ventas.
 */
export async function fetchVentas(
  options: QueryOptions = {},
  token: string,
): Promise<PaginatedResponse<Sale>> {
  return getSales(options, token);
}

/**
 * Obtiene una venta por ID (incluyendo sus detalles).
 */
export async function fetchVentaById(id: number, token: string): Promise<Sale> {
  return getSaleById(id, token);
}

/**
 * Crea una nueva venta a partir de los datos proporcionados.
 */
export async function createNuevaVenta(
  data: CreateSaleData,
  token: string,
): Promise<Sale> {
  return createSale(data, token);
}

/**
 * Cancela una venta existente.
 */
export async function cancelarVenta(
  id: number,
  motivo: string,
  token: string,
): Promise<Sale> {
  return cancelSale(id, motivo, token);
}

/**
 * Obtiene ventas en un rango de fechas.
 */
export async function fetchVentasPorRangoFechas(
  fechaInicio: string,
  fechaFin: string,
  token: string,
): Promise<Sale[]> {
  return getSalesByDateRange(fechaInicio, fechaFin, token);
}

/**
 * Obtiene ventas asociadas a un cliente.
 */
export async function fetchVentasPorCliente(
  clientId: number,
  token: string,
): Promise<Sale[]> {
  return getSalesByClient(clientId, token);
}

/**
 * Obtiene un resumen agregado de ventas segun filtros.
 */
export async function fetchResumenVentas(
  filters: SaleFilters = {},
  token: string,
): Promise<SaleSummary> {
  return getSalesSummary(filters, token);
}
