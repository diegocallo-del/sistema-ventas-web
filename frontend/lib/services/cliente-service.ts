/**
 * Servicio de clientes
 * Maneja todas las operaciones CRUD de clientes
 */

import axios from 'axios';
import { clientEndpoints } from '../config/endpoints';
import {
  Client,
  CreateClientData,
  UpdateClientData,
  ClientFilters,
  PaginatedResponse,
  QueryOptions,
} from '../types';

/**
 * Obtiene lista paginada de clientes
 */
export async function getClients(
  options: QueryOptions = {},
  token: string
): Promise<PaginatedResponse<Client>> {
  const params = {
    page: options.page || 1,
    page_size: options.page_size || 10,
    sort_by: options.sort_by,
    sort_order: options.sort_order,
    ...options.filters,
  };

  const response = await axios.get<PaginatedResponse<Client>>(clientEndpoints.base, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Obtiene un cliente por ID
 */
export async function getClientById(id: number, token: string): Promise<Client> {
  const response = await axios.get<Client>(clientEndpoints.byId(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Crea un nuevo cliente
 */
export async function createClient(data: CreateClientData, token: string): Promise<Client> {
  const response = await axios.post<Client>(clientEndpoints.create, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Actualiza un cliente existente
 */
export async function updateClient(
  id: number,
  data: UpdateClientData,
  token: string
): Promise<Client> {
  const response = await axios.put<Client>(clientEndpoints.update(id), data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

/**
 * Elimina un cliente
 */
export async function deleteClient(id: number, token: string): Promise<void> {
  await axios.delete(clientEndpoints.delete(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * Busca clientes por termino de busqueda
 */
export async function searchClients(
  query: string,
  filters: ClientFilters = {},
  token: string
): Promise<Client[]> {
  const response = await axios.get<Client[]>(clientEndpoints.search, {
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
 * Busca un cliente por numero de documento
 */
export async function getClientByDocument(
  numeroDocumento: string,
  token: string
): Promise<Client | null> {
  try {
    const response = await axios.get<Client>(`${clientEndpoints.base}/by-document`, {
      params: {
        numero_documento: numeroDocumento,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
}