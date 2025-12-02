/**
 * Servicio de usuarios
 * Maneja todas las operaciones relacionadas con usuarios
 */

import { api } from '../api';
import { userEndpoints } from '../config/endpoints';

/**
 * Interfaz para usuario del backend
 */
export interface UsuarioDTO {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  numeroDocumento?: string;
  rol?: string;
  activo: boolean;
  fechaCreacion?: string;
  fechaModificacion?: string;
}

/**
 * Interfaz para crear usuario
 */
export interface CreateUsuarioData {
  nombre: string;
  email: string;
  password: string;
  telefono?: string;
  numeroDocumento?: string;
  rol?: string;
}

/**
 * Interfaz para actualizar usuario
 */
export interface UpdateUsuarioData {
  nombre?: string;
  email?: string;
  password?: string;
  telefono?: string;
  numeroDocumento?: string;
  rol?: string;
  activo?: boolean;
}

/**
 * Obtiene todos los usuarios
 */
export async function getUsuarios(): Promise<UsuarioDTO[]> {
  const response = await api.get<UsuarioDTO[]>(userEndpoints.base);
  return response;
}

/**
 * Obtiene un usuario por ID
 */
export async function getUsuarioById(id: number): Promise<UsuarioDTO> {
  const response = await api.get<UsuarioDTO>(userEndpoints.byId(id));
  return response;
}

/**
 * Crea un nuevo usuario
 */
export async function createUsuario(data: CreateUsuarioData): Promise<UsuarioDTO> {
  const response = await api.post<UsuarioDTO>(userEndpoints.create, data);
  return response;
}

/**
 * Actualiza un usuario existente
 */
export async function updateUsuario(
  id: number,
  data: UpdateUsuarioData
): Promise<UsuarioDTO> {
  const response = await api.put<UsuarioDTO>(userEndpoints.update(id), data);
  return response;
}

/**
 * Elimina un usuario
 */
export async function deleteUsuario(id: number): Promise<void> {
  await api.delete(userEndpoints.delete(id));
}
