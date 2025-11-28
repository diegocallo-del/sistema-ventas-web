/**
 * Tipos y interfaces relacionadas con clientes
 */

/**
 * Tipos de documento de identidad
 */
export enum DocumentType {
  DNI = 'DNI',
  RUC = 'RUC',
  PASAPORTE = 'PASAPORTE',
  CARNET_EXTRANJERIA = 'CARNET_EXTRANJERIA',
}

/**
 * Interface para cliente
 */
export interface Client {
  id: number;
  tipo_documento: DocumentType;
  numero_documento: string;
  nombre: string;
  apellido: string | null;
  email: string | null;
  telefono: string | null;
  direccion: string | null;
  activo: boolean;
  fecha_creacion: string;
  fecha_actualizacion: string;
}

/**
 * Datos para crear un nuevo cliente
 */
export interface CreateClientData {
  tipo_documento: DocumentType;
  numero_documento: string;
  nombre: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  direccion?: string;
}

/**
 * Datos para actualizar un cliente
 */
export interface UpdateClientData {
  tipo_documento?: DocumentType;
  numero_documento?: string;
  nombre?: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  direccion?: string;
  activo?: boolean;
}

/**
 * Filtros de busqueda de clientes
 */
export interface ClientFilters {
  search?: string;
  tipo_documento?: DocumentType;
  activo?: boolean;
}