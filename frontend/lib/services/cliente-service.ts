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
 * Interfaz temporal para la respuesta del backend
 */
interface ClienteDTOBackend {
  id: number;
  nombre: string;
  email: string | null;
  telefono: string | null;
  direccion: string | null;
  numeroDocumento: string | null;
}

/**
 * Mapea ClienteDTO del backend a Client del frontend
 */
function mapClienteFromBackend(dto: ClienteDTOBackend): Client {
  // Dividir nombre en nombre y apellido si es posible
  const nombreParts = dto.nombre.split(' ');
  const nombre = nombreParts[0] || '';
  const apellido = nombreParts.slice(1).join(' ') || null;

  return {
    id: dto.id,
    tipo_documento: 'DNI' as any, // Valor por defecto, el backend no lo proporciona
    numero_documento: dto.numeroDocumento || '',
    nombre: nombre,
    apellido: apellido,
    email: dto.email,
    telefono: dto.telefono,
    direccion: dto.direccion,
    activo: true, // El backend solo devuelve clientes activos
    fecha_creacion: new Date().toISOString(), // Valor por defecto
    fecha_actualizacion: new Date().toISOString(), // Valor por defecto
  };
}

/**
 * Obtiene lista de clientes
 * El backend devuelve una lista directa, no paginada
 */
export async function getClients(
  options: QueryOptions = {},
  token: string
): Promise<PaginatedResponse<Client>> {
  const response = await axios.get<ClienteDTOBackend[]>(clientEndpoints.base, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Mapear clientes del backend al formato del frontend
  const items = response.data.map(mapClienteFromBackend);
  
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
 * Obtiene un cliente por ID
 */
export async function getClientById(id: number, token: string): Promise<Client> {
  const response = await axios.get<ClienteDTOBackend>(clientEndpoints.byId(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return mapClienteFromBackend(response.data);
}

/**
 * Crea un nuevo cliente
 * Convierte los datos del frontend al formato del backend
 */
export async function createClient(data: CreateClientData, token: string): Promise<Client> {
  // Combinar nombre y apellido para el backend
  const nombreCompleto = data.apellido ? `${data.nombre} ${data.apellido}` : data.nombre;

  const backendData = {
    nombre: nombreCompleto,
    email: data.email || '',
    telefono: data.telefono || null,
    direccion: data.direccion || null,
    numeroDocumento: data.numero_documento || null,
  };

  const response = await axios.post<ClienteDTOBackend>(clientEndpoints.create, backendData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return mapClienteFromBackend(response.data);
}

/**
 * Actualiza un cliente existente
 * Convierte los datos del frontend al formato del backend
 */
export async function updateClient(
  id: number,
  data: UpdateClientData,
  token: string
): Promise<Client> {
  const backendData: any = {};
  
  // Combinar nombre y apellido si están presentes
  if (data.nombre !== undefined || data.apellido !== undefined) {
    const nombre = data.nombre || '';
    const apellido = data.apellido || '';
    backendData.nombre = apellido ? `${nombre} ${apellido}`.trim() : nombre;
  }
  
  if (data.email !== undefined) backendData.email = data.email || '';
  if (data.telefono !== undefined) backendData.telefono = data.telefono || null;
  if (data.direccion !== undefined) backendData.direccion = data.direccion || null;
  if (data.numero_documento !== undefined) backendData.numeroDocumento = data.numero_documento || null;

  const response = await axios.put<ClienteDTOBackend>(clientEndpoints.update(id), backendData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return mapClienteFromBackend(response.data);
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
 * El backend usa /buscar con parámetro 'nombre'
 */
export async function searchClients(
  query: string,
  filters: ClientFilters = {},
  token: string
): Promise<Client[]> {
  const response = await axios.get<ClienteDTOBackend[]>(`${clientEndpoints.base}/buscar`, {
    params: {
      nombre: query,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.map(mapClienteFromBackend);
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