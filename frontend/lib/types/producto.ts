/**
 * Tipos y interfaces relacionadas con productos
 */

/**
 * Interface para producto
 */
export interface Product {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string | null;
  precio: number;
  stock: number;
  categoria: string | null;
  activo: boolean;
  fecha_creacion: string;
  fecha_actualizacion: string;
}

/**
 * Datos para crear un nuevo producto
 */
export interface CreateProductData {
  codigo: string;
  nombre: string;
  descripcion?: string;
  precio: number;
  stock: number;
  categoria?: string;
}

/**
 * Datos para actualizar un producto
 */
export interface UpdateProductData {
  codigo?: string;
  nombre?: string;
  descripcion?: string;
  precio?: number;
  stock?: number;
  categoria?: string;
  activo?: boolean;
}

/**
 * Filtros de busqueda de productos
 */
export interface ProductFilters {
  search?: string;
  categoria?: string;
  activo?: boolean;
  precioMin?: number;
  precioMax?: number;
  stockMin?: number;
  stockMax?: number;
}

/**
 * Interface para categorias de productos
 */
export interface ProductCategory {
  nombre: string;
  count: number;
}