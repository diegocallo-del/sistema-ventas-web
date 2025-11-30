/**
 * Servicio de productos
 * Maneja todas las operaciones CRUD de productos
 */

import axios from 'axios';
import { api } from '../api';
import { productEndpoints } from '../config/endpoints';
import { env } from '../config/env';
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
 * Interfaz temporal para la respuesta del backend
 */
interface ProductoDTOBackend {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string | null;
  precio: number;
  stock: number;
  categoriaId: number | null;
  categoriaNombre: string | null;
  imagen: string | null;
  activo: boolean;
  fechaCreacion: string;
  fechaActualizacion: string;
}

/**
 * Mapea ProductoDTO del backend a Product del frontend
 */
function mapProductoFromBackend(dto: ProductoDTOBackend): Product {
  return {
    id: dto.id,
    codigo: dto.codigo,
    nombre: dto.nombre,
    descripcion: dto.descripcion,
    precio: Number(dto.precio),
    stock: dto.stock,
    categoria: dto.categoriaNombre,
    imagen: dto.imagen,
    activo: dto.activo,
    fecha_creacion: dto.fechaCreacion,
    fecha_actualizacion: dto.fechaActualizacion,
  };
}

/**
 * Obtiene lista de productos
 * El backend devuelve una lista directa, no paginada
 */
export async function getProducts(
  options: QueryOptions = {}
): Promise<PaginatedResponse<Product>> {
  const response = await axios.get<ProductoDTOBackend[]>(productEndpoints.base);

  // Mapear productos del backend al formato del frontend
  const items = response.data.map(mapProductoFromBackend);
  
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
 * Obtiene un producto por ID
 */
export async function getProductById(id: number): Promise<Product> {
  const response = await axios.get<ProductoDTOBackend>(productEndpoints.byId(id));
  return mapProductoFromBackend(response.data);
}

/**
 * Obtiene el ID de una categoría por su nombre
 */
async function getCategoriaIdByName(nombre: string): Promise<number | null> {
  try {
    const response = await axios.get<any[]>(`${env.apiUrl}/api/categorias`);
    const categoria = response.data.find((c: any) => c.nombre === nombre);
    return categoria ? categoria.id : null;
  } catch {
    return null;
  }
}

/**
 * Crea un nuevo producto
 * Convierte el nombre de categoría a ID si es necesario
 */
export async function createProduct(data: CreateProductData): Promise<Product> {
  // Convertir nombre de categoría a ID si es necesario
  let categoriaId: number | null = null;
  if (data.categoria) {
    // Si categoria es un número, usarlo directamente
    const parsedId = parseInt(data.categoria);
    if (!isNaN(parsedId)) {
      categoriaId = parsedId;
    } else {
      // Si es un string (nombre), buscar el ID
      categoriaId = await getCategoriaIdByName(data.categoria);
      if (!categoriaId) {
        throw new Error(`Categoría "${data.categoria}" no encontrada`);
      }
    }
  }

  // Preparar datos para el backend
  const backendData = {
    nombre: data.nombre,
    descripcion: data.descripcion || null,
    precio: data.precio,
    stock: data.stock,
    categoriaId: categoriaId,
  };

  const response = await axios.post<ProductoDTOBackend>(productEndpoints.create, backendData);

  return mapProductoFromBackend(response.data);
}

/**
 * Actualiza un producto existente
 * Convierte el nombre de categoría a ID si es necesario
 */
export async function updateProduct(
  id: number,
  data: UpdateProductData
): Promise<Product> {
  // Convertir nombre de categoría a ID si es necesario
  let categoriaId: number | null | undefined = undefined;
  if (data.categoria !== undefined) {
    if (data.categoria === null) {
      categoriaId = null;
    } else {
      // Si categoria es un número, usarlo directamente
      const parsedId = parseInt(data.categoria);
      if (!isNaN(parsedId)) {
        categoriaId = parsedId;
      } else {
        // Si es un string (nombre), buscar el ID
        categoriaId = await getCategoriaIdByName(data.categoria);
        if (categoriaId === null) {
          throw new Error(`Categoría "${data.categoria}" no encontrada`);
        }
      }
    }
  }

  // Preparar datos para el backend
  const backendData: any = {};
  if (data.nombre !== undefined) backendData.nombre = data.nombre;
  if (data.descripcion !== undefined) backendData.descripcion = data.descripcion || null;
  if (data.precio !== undefined) backendData.precio = data.precio;
  if (data.stock !== undefined) backendData.stock = data.stock;
  if (categoriaId !== undefined) backendData.categoriaId = categoriaId;

  const response = await axios.put<ProductoDTOBackend>(productEndpoints.update(id), backendData);

  return mapProductoFromBackend(response.data);
}

/**
 * Elimina un producto
 */
export async function deleteProduct(id: number): Promise<void> {
  await axios.delete(productEndpoints.delete(id));
}

/**
 * Busca productos por termino de busqueda
 * El backend usa /buscar con parámetro 'nombre'
 */
export async function searchProducts(
  query: string,
  filters: ProductFilters = {}
): Promise<Product[]> {
  const response = await axios.get<ProductoDTOBackend[]>(`${productEndpoints.base}/buscar`, {
    params: {
      nombre: query,
    },
  });

  return response.data.map(mapProductoFromBackend);
}

/**
 * Obtiene las categorias de productos disponibles
 */
export async function getCategories(): Promise<ProductCategory[]> {
  const response = await axios.get<ProductCategory[]>(productEndpoints.categories);
  return response.data;
}

/**
 * Verifica si un codigo de producto ya existe
 */
export async function checkProductCodeExists(
  codigo: string,
  excludeId?: number
): Promise<boolean> {
  try {
    const response = await axios.get<{ exists: boolean }>(
      `${productEndpoints.base}/check-codigo`,
      {
        params: {
          codigo,
          exclude_id: excludeId,
        },
      }
    );

    return response.data.exists;
  } catch {
    return false;
  }
}
