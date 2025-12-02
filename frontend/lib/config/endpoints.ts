import { env } from './env';

/**
 * Rutas centralizadas del backend
 * Mantiene todas las URLs de API en un solo lugar
 */

const API_BASE = `${env.apiUrl}/api`;

/**
 * Endpoints de autenticacion
 */
export const authEndpoints = {
  login: `${API_BASE}/auth/login`,
  register: `${API_BASE}/auth/register`,
  logout: `${API_BASE}/auth/logout`,
  refresh: `${API_BASE}/auth/refresh`,
  me: `${API_BASE}/auth/me`,
  verify: `${API_BASE}/auth/verify`,
  test: `${API_BASE}/auth/test`,
  bootstrap: `${API_BASE}/auth/bootstrap`,
} as const;

/**
 * Endpoints de usuarios
 */
export const userEndpoints = {
  base: `${API_BASE}/usuarios`,
  byId: (id: number) => `${API_BASE}/usuarios/${id}`,
  create: `${API_BASE}/usuarios`,
  update: (id: number) => `${API_BASE}/usuarios/${id}`,
  delete: (id: number) => `${API_BASE}/usuarios/${id}`,
} as const;

/**
 * Endpoints de productos
 */
export const productEndpoints = {
  base: `${API_BASE}/productos`,
  byId: (id: number) => `${API_BASE}/productos/${id}`,
  create: `${API_BASE}/productos`,
  update: (id: number) => `${API_BASE}/productos/${id}`,
  delete: (id: number) => `${API_BASE}/productos/${id}`,
  search: `${API_BASE}/productos/search`,
  categories: `${API_BASE}/productos/categorias`,
} as const;

/**
 * Endpoints de clientes
 */
export const clientEndpoints = {
  base: `${API_BASE}/clientes`,
  byId: (id: number) => `${API_BASE}/clientes/${id}`,
  create: `${API_BASE}/clientes`,
  update: (id: number) => `${API_BASE}/clientes/${id}`,
  delete: (id: number) => `${API_BASE}/clientes/${id}`,
  search: `${API_BASE}/clientes/search`,
} as const;

/**
 * Endpoints de ventas
 */
export const saleEndpoints = {
  base: `${API_BASE}/ventas`,
  byId: (id: number) => `${API_BASE}/ventas/${id}`,
  create: `${API_BASE}/ventas`,
  cancel: (id: number) => `${API_BASE}/ventas/${id}/cancel`,
  details: (id: number) => `${API_BASE}/ventas/${id}/detalles`,
  byDate: `${API_BASE}/ventas/por-fecha`,
  byClient: (clientId: number) => `${API_BASE}/ventas/cliente/${clientId}`,
} as const;

/**
 * Endpoints de categorias
 */
export const categoryEndpoints = {
  base: `${API_BASE}/categorias`,
  byId: (id: number) => `${API_BASE}/categorias/${id}`,
  create: `${API_BASE}/categorias`,
  update: (id: number) => `${API_BASE}/categorias/${id}`,
  delete: (id: number) => `${API_BASE}/categorias/${id}`,
} as const;

/**
 * Endpoints de análisis IA
 */
export const analysisEndpoints = {
  process: `${API_BASE}/ia/procesar`,
  insights: `${API_BASE}/ia/insights`,
} as const;

/**
 * Endpoints de reportes
 */
export const reportEndpoints = {
  sales: `${API_BASE}/reportes/ventas`,
  products: `${API_BASE}/reportes/productos`,
  clients: `${API_BASE}/reportes/clientes`,
  dashboard: `${API_BASE}/reportes/dashboard`,
  export: `${API_BASE}/reportes/export`,
} as const;
