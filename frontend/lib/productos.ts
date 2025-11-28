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
 * Si el payload contiene una imagen (File), se envía como FormData
 * De lo contrario, se envía como JSON normal
 */
export async function createProducto(payload: Omit<ProductoDto, "id"> & { imagen?: File | string | null }) {
  let response;

  // Si hay una imagen (File), usar FormData
  if (payload.imagen instanceof File) {
    const formData = new FormData();
    formData.append('nombre', payload.nombre);
    formData.append('precio', payload.precio.toString());
    if (payload.stock !== undefined && payload.stock !== null) {
      formData.append('stock', payload.stock.toString());
    }
    if (payload.descripcion) {
      formData.append('descripcion', payload.descripcion);
    }
    if (payload.categoriaId !== undefined && payload.categoriaId !== null) {
      formData.append('categoriaId', payload.categoriaId.toString());
    }
    formData.append('imagen', payload.imagen);

    response = await api.post<ProductoDto>("/productos", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } else {
    // Envío normal como JSON (sin imagen o imagen como string/URL)
    const { imagen, ...jsonPayload } = payload;
    response = await api.post<ProductoDto>("/productos", jsonPayload);
  }

  return response.data;
}

/**
 * Actualizar producto
 * Si el payload contiene una imagen (File), se envía como FormData
 * De lo contrario, se envía como JSON normal
 */
export async function updateProducto(id: number, payload: Partial<ProductoDto> & { imagen?: File | string | null }) {
  let response;

  // Si hay una imagen (File), usar FormData
  if (payload.imagen instanceof File) {
    const formData = new FormData();
    if (payload.nombre) formData.append('nombre', payload.nombre);
    if (payload.precio !== undefined) {
      formData.append('precio', payload.precio.toString());
    }
    if (payload.stock !== undefined && payload.stock !== null) {
      formData.append('stock', payload.stock.toString());
    }
    if (payload.descripcion) {
      formData.append('descripcion', payload.descripcion);
    }
    if (payload.categoriaId !== undefined && payload.categoriaId !== null) {
      formData.append('categoriaId', payload.categoriaId.toString());
    }
    if (payload.activo !== undefined) {
      formData.append('activo', payload.activo.toString());
    }
    formData.append('imagen', payload.imagen);

    response = await api.put<ProductoDto>(`/productos/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } else {
    // Envío normal como JSON (sin imagen o imagen como string/URL)
    const { imagen, ...jsonPayload } = payload;
    response = await api.put<ProductoDto>(`/productos/${id}`, jsonPayload);
  }

  return response.data;
}

/**
 * Eliminar producto
 */
export async function deleteProducto(id: number) {
  const r = await api.delete<void>(`/productos/${id}`);
  return r.data;
}
