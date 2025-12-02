/**
 * Servicio de categorias
 * Maneja todas las operaciones CRUD de categorias
 */

import { api } from '../api';
import { categoryEndpoints } from '../config/endpoints';

/**
 * Interfaz para categoria del backend
 */
export interface CategoriaDTO {
  id: number;
  nombre: string;
  categoriaPadre?: number;
  activo?: boolean;
  fechaCreacion?: string;
  fechaModificacion?: string;
}

/**
 * Interfaz para crear categoria
 */
export interface CreateCategoriaData {
  nombre: string;
  categoriaPadre?: number;
}

/**
 * Interfaz para actualizar categoria
 */
export interface UpdateCategoriaData {
  nombre?: string;
  categoriaPadre?: number;
}

/**
 * Obtiene todas las categorias
 */
export async function getCategorias(): Promise<CategoriaDTO[]> {
  const response = await api.get<CategoriaDTO[]>(categoryEndpoints.base);
  return response;
}

/**
 * Obtiene una categoria por ID
 */
export async function getCategoriaById(id: number): Promise<CategoriaDTO> {
  const response = await api.get<CategoriaDTO>(categoryEndpoints.byId(id));
  return response;
}

/**
 * Crea una nueva categoria
 */
export async function createCategoria(data: CreateCategoriaData): Promise<CategoriaDTO> {
  const response = await api.post<CategoriaDTO>(categoryEndpoints.create, data);
  return response;
}

/**
 * Actualiza una categoria existente
 */
export async function updateCategoria(
  id: number,
  data: UpdateCategoriaData
): Promise<CategoriaDTO> {
  const response = await api.put<CategoriaDTO>(categoryEndpoints.update(id), data);
  return response;
}

/**
 * Elimina una categoria
 */
export async function deleteCategoria(id: number): Promise<void> {
  await api.delete(categoryEndpoints.delete(id));
}
