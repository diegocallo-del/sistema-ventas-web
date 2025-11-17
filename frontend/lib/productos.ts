/**
 * lib/productos.ts
 *
 * Cliente HTTP para operaciones CRUD de productos.
 * Usa `api` (Axios) centralizado definido en lib/api.ts
 *
 * Tipos:
 *  - ProductoDto: tipo que representa al producto en frontend
 */

import { api } from "./api";

export type ProductoDto = {
  id?: number;
  nombre: string;
  precio: number;
  stock?: number | null;
  descripcion?: string | null;
  activo?: boolean;
  categoriaId?: number | null;
};

/**
 * Obtener lista de productos
 */
export async function fetchProductos(): Promise<ProductoDto[]> {
  const r = await api.get<ProductoDto[]>("/productos");
  return r.data;
}

/**
 * Obtener un producto por id
 */
export async function fetchProductoById(id: number): Promise<ProductoDto> {
  const r = await api.get<ProductoDto>(`/productos/${id}`);
  return r.data;
}

/**
 * Crear producto
 */
export async function createProducto(payload: Omit<ProductoDto, "id">) {
  const r = await api.post<ProductoDto>("/productos", payload);
  return r.data;
}

/**
 * Actualizar producto
 */
export async function updateProducto(id: number, payload: Partial<ProductoDto>) {
  const r = await api.put<ProductoDto>(`/productos/${id}`, payload);
  return r.data;
}

/**
 * Eliminar producto
 */
export async function deleteProducto(id: number) {
  const r = await api.delete<void>(`/productos/${id}`);
  return r.data;
}
