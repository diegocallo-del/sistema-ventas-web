/**
 * Exportacion centralizada de todos los tipos
 */

export * from './usuario';
export * from './producto';
export * from './cliente';
export * from './venta';

/**
 * Tipos genericos y utilitarios
 */

/**
 * Respuesta paginada de la API
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

/**
 * Respuesta generica de la API
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

/**
 * Error de la API
 */
export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}

/**
 * Parametros de paginacion
 */
export interface PaginationParams {
  page?: number;
  page_size?: number;
}

/**
 * Parametros de ordenamiento
 */
export interface SortParams {
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
}

/**
 * Opciones de consulta completas
 */
export interface QueryOptions extends PaginationParams, SortParams {
  filters?: Record<string, any>;
}