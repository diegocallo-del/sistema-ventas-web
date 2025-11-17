/**
 * Servicio de ventas
 * Maneja todas las operaciones relacionadas con ventas
 */

import axios from 'axios';
import { saleEndpoints } from '../config/endpoints';
import {
  Sale,
  CreateSaleData,
  SaleFilters,
  SaleSummary,
  PaginatedResponse,
  QueryOptions,
} from '../types';

/**
 * Obtiene lista paginada de ventas
 */
export async function getSales(
  options: QueryOptions = {},
  token: string
): Promise<PaginatedResponse<Sale>> {
  const params = {
    page: options.page || 1,
    page_size: options.page_size || 10,
    sort_by: options.sort_by,
    sort_order: options.sort_order,
    ...options.filters,
  };

  const response = await axios.get<PaginatedResponse<Sale>>(saleEndpoints.base, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Obtiene una venta por ID con sus detalles
 */
export async function getSaleById(id: number, token: string): Promise<Sale> {
  const response = await axios.get<Sale>(saleEndpoints.byId(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Crea una nueva venta
 */
export async function createSale(data: CreateSaleData, token: string): Promise<Sale> {
  const response = await axios.post<Sale>(saleEndpoints.create, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Cancela una venta existente
 */
export async function cancelSale(id: number, motivo: string, token: string): Promise<Sale> {
  const response = await axios.post<Sale>(
    saleEndpoints.cancel(id),
    { motivo },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

/**
 * Obtiene ventas por rango de fechas
 */
export async function getSalesByDateRange(
  fechaInicio: string,
  fechaFin: string,
  token: string
): Promise<Sale[]> {
  const response = await axios.get<Sale[]>(saleEndpoints.byDate, {
    params: {
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Obtiene ventas de un cliente especifico
 */
export async function getSalesByClient(clientId: number, token: string): Promise<Sale[]> {
  const response = await axios.get<Sale[]>(saleEndpoints.byClient(clientId), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Obtiene resumen de ventas segun filtros
 */
export async function getSalesSummary(
  filters: SaleFilters = {},
  token: string
): Promise<SaleSummary> {
  const response = await axios.get<SaleSummary>(`${saleEndpoints.base}/summary`, {
    params: filters,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}