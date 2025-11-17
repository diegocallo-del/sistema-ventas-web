/**
 * Servicio de productos
 * Maneja todas las operaciones CRUD de productos
 */

import axios from 'axios';
import { productEndpoints } from '../config/endpoints';
import {
  Product,
  CreateProductData,
  UpdateProductData,
  ProductFilters,
  ProductCategory,
  PaginatedResponse,
  QueryOptions,
} from '../types';

/**
 * Obtiene lista paginada de productos
 */
export async function getProducts(
  options: QueryOptions = {},
  token: string
): Promise<PaginatedResponse<Product>> {
  const params = {
    page: options.page || 1,
    page_size: options.page_size || 10,
    sort_by: options.sort_by,
    sort_order: options.sort_order,
    ...options.filters,
  };

  const response = await axios.get<PaginatedResponse<Product>>(productEndpoints.base, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Obtiene un producto por ID
 */
export async function getProductById(id: number, token: string): Promise<Product> {
  const response = await axios.get<Product>(productEndpoints.byId(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Crea un nuevo producto
 */
export async function createProduct(data: CreateProductData, token: string): Promise<Product> {
  const response = await axios.post<Product>(productEndpoints.create, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Actualiza un producto existente
 */
export async function updateProduct(
  id: number,
  data: UpdateProductData,
  token: string
): Promise<Product> {
  const response = await axios.put<Product>(productEndpoints.update(id), data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Elimina un producto
 */
export async function deleteProduct(id: number, token: string): Promise<void> {
  await axios.delete(productEndpoints.delete(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * Busca productos por termino de busqueda
 */
export async function searchProducts(
  query: string,
  filters: ProductFilters = {},
  token: string
): Promise<Product[]> {
  const response = await axios.get<Product[]>(productEndpoints.search, {
    params: {
      q: query,
      ...filters,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Obtiene las categorias de productos disponibles
 */
export async function getCategories(token: string): Promise<ProductCategory[]> {
  const response = await axios.get<ProductCategory[]>(productEndpoints.categories, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Verifica si un codigo de producto ya existe
 */
export async function checkProductCodeExists(
  codigo: string,
  excludeId?: number,
  token?: string
): Promise<boolean> {
  try {
    const response = await axios.get<{ exists: boolean }>(
      `${productEndpoints.base}/check-codigo`,
      {
        params: {
          codigo,
          exclude_id: excludeId,
        },
        headers: token ? {
          Authorization: `Bearer ${token}`,
        } : undefined,
      }
    );

    return response.data.exists;
  } catch {
    return false;
  }
}