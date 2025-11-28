/**
 * lib/clientes.ts
 *
 * Helper de alto nivel para operaciones de clientes.
 * Envuelve al servicio de clientes (`lib/services/cliente-service`) y expone
 * funciones tipadas para usar en el frontend.
 */

import {
  Client,
  CreateClientData,
  UpdateClientData,
  ClientFilters,
  PaginatedResponse,
  QueryOptions,
} from './types';
import {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  searchClients,
  getClientByDocument,
} from './services/cliente-service';

/**
 * Obtiene lista paginada de clientes.
 */
export async function fetchClientes(
  options: QueryOptions = {},
  token: string,
): Promise<PaginatedResponse<Client>> {
  return getClients(options, token);
}

/**
 * Obtiene un cliente por ID.
 */
export async function fetchClienteById(id: number, token: string): Promise<Client> {
  return getClientById(id, token);
}

/**
 * Crea un nuevo cliente.
 */
export async function crearCliente(
  data: CreateClientData,
  token: string,
): Promise<Client> {
  return createClient(data, token);
}

/**
 * Actualiza un cliente existente.
 */
export async function actualizarCliente(
  id: number,
  data: UpdateClientData,
  token: string,
): Promise<Client> {
  return updateClient(id, data, token);
}

/**
 * Elimina un cliente.
 */
export async function eliminarCliente(id: number, token: string): Promise<void> {
  return deleteClient(id, token);
}

/**
 * Busca clientes por término de búsqueda y filtros opcionales.
 */
export async function buscarClientes(
  query: string,
  filters: ClientFilters = {},
  token: string,
): Promise<Client[]> {
  return searchClients(query, filters, token);
}

/**
 * Busca un cliente por número de documento.
 */
export async function fetchClientePorDocumento(
  numeroDocumento: string,
  token: string,
): Promise<Client | null> {
  return getClientByDocument(numeroDocumento, token);
}
