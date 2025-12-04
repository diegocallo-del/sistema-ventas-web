/**
 * Servicio de productos
 * Maneja todas las operaciones CRUD de productos
 */

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
  marca: string | null;
  modelo: string | null;
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
    marca: dto.marca,
    modelo: dto.modelo,
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
  const response = await api.get<ProductoDTOBackend[]>(productEndpoints.base);

  // Mapear productos del backend al formato del frontend
  const items = response.map(mapProductoFromBackend);

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
  const response = await api.get<ProductoDTOBackend>(productEndpoints.byId(id));
  return mapProductoFromBackend(response);
}

/**
 * Obtiene el ID de una categoría por su nombre
 */
async function getCategoriaIdByName(nombre: string): Promise<number | null> {
  try {
    const response = await api.get<any[]>(`${env.apiUrl}/api/categorias`);
    const categoria = response.find((c: any) => c.nombre === nombre);
    return categoria ? categoria.id : null;
  } catch {
    return null;
  }
}

/**
 * Crea un nuevo producto
 */
export async function createProduct(data: CreateProductData): Promise<Product> {
  // PRIORIDAD: URL > Archivo > Sin imagen

  // Si hay imagenUrl, usar endpoint específico para URLs
  if ((data as any).imagenUrl && typeof (data as any).imagenUrl === 'string' && (data as any).imagenUrl.trim() !== '') {
    const backendData = {
      nombre: data.nombre,
      codigo: (data as any).codigo || null,
      descripcion: data.descripcion || null,
      marca: data.marca || null,
      modelo: data.modelo || null,
      precio: data.precio,
      stock: data.stock,
      categoriaId: data.categoriaId,
      imagenUrl: (data as any).imagenUrl.trim(),
    };

    console.log('=== Creando producto con URL ===', backendData);
    const response = await api.post<ProductoDTOBackend>('/api/productos/conimagenurl', backendData);
    return mapProductoFromBackend(response);
  }

  // Si hay imagen como File, usar endpoint específico para archivos
  if (typeof FormData !== 'undefined' && data.imagen instanceof File) {
    const formData = new FormData();
    formData.append('nombre', data.nombre);
    if (data.descripcion !== undefined) formData.append('descripcion', data.descripcion);
    if (data.marca !== undefined) formData.append('marca', data.marca);
    if (data.modelo !== undefined) formData.append('modelo', data.modelo);
    formData.append('precio', String(data.precio));
    formData.append('stock', String(data.stock));
    formData.append('categoriaId', String(data.categoriaId));
    if ((data as any).codigo !== undefined) formData.append('codigo', (data as any).codigo);
    formData.append('imagen', data.imagen);

    console.log('=== Creando producto con archivo ===');
    // Usar endpoint específico para creación con imagen
    const response = await api.post<ProductoDTOBackend>('/api/productos/conimagen', formData);
    return mapProductoFromBackend(response);
  }

  // Para productos sin imagen, usar endpoint normal
  const backendData = {
    nombre: data.nombre,
    descripcion: data.descripcion || null,
    marca: data.marca || null,
    modelo: data.modelo || null,
    precio: data.precio,
    stock: data.stock,
    categoriaId: data.categoriaId,
    codigo: (data as any).codigo || null,
  };

  console.log('=== Creando producto básico ===', backendData);
  const response = await api.post<ProductoDTOBackend>(productEndpoints.create, backendData);
  return mapProductoFromBackend(response);
}

/**
 * Actualiza un producto existente
 * Convierte el nombre de categoría a ID si es necesario
 */
export async function updateProduct(
  id: number,
  data: UpdateProductData
): Promise<Product> {
  // Determinar categoriaId a enviar
  let categoriaId: number | null | undefined = (data as any).categoriaId;

  if (categoriaId === undefined) {
    if (data.categoria !== undefined) {
      if (data.categoria === null) {
        categoriaId = null;
      } else {
        const parsedId = parseInt(data.categoria);
        if (!isNaN(parsedId)) {
          categoriaId = parsedId;
        } else {
          categoriaId = await getCategoriaIdByName(data.categoria);
          if (categoriaId === null) {
            throw new Error(`Categoría "${data.categoria}" no encontrada`);
          }
        }
      }
    } else {
      // Si no se envió nada de categoría, obtener el producto actual y usar su categoriaId
      try {
        const currentDto = await api.get<ProductoDTOBackend>(productEndpoints.byId(id));
        categoriaId = currentDto.categoriaId ?? null;
      } catch {
        categoriaId = null;
      }
    }
  }

  // Preparar datos para el backend
  const backendData: any = {};
  if (data.nombre !== undefined) backendData.nombre = data.nombre;
  if (data.descripcion !== undefined) backendData.descripcion = data.descripcion || null;
  if (data.marca !== undefined) backendData.marca = data.marca || null;
  if (data.modelo !== undefined) backendData.modelo = data.modelo || null;
  if (data.precio !== undefined) backendData.precio = data.precio;
  if (data.stock !== undefined) backendData.stock = data.stock;
  if (categoriaId !== undefined) backendData.categoriaId = categoriaId;
  if ((data as any).codigo !== undefined) backendData.codigo = (data as any).codigo || null;

  // Si hay imagenUrl, eliminar imagen, o archivo, usar endpoint especial para imágenes
  const tieneImagenUrl = (data as any).imagenUrl && typeof (data as any).imagenUrl === 'string' && (data as any).imagenUrl.trim() !== '';
  const tieneImagenFile = data.imagen instanceof File;
  const debeEliminarImagen = (data as any).imagenEliminar;

  if (typeof FormData !== 'undefined' && (
      tieneImagenUrl ||
      tieneImagenFile ||
      debeEliminarImagen
    )) {
    const formData = new FormData();
    if (backendData.nombre !== undefined) formData.append('nombre', backendData.nombre);
    if (backendData.descripcion !== undefined && backendData.descripcion !== null) formData.append('descripcion', String(backendData.descripcion));
    if (backendData.marca !== undefined && backendData.marca !== null) formData.append('marca', String(backendData.marca));
    if (backendData.modelo !== undefined && backendData.modelo !== null) formData.append('modelo', String(backendData.modelo));
    if (backendData.precio !== undefined) formData.append('precio', String(backendData.precio));
    if (backendData.stock !== undefined) formData.append('stock', String(backendData.stock));
    if (backendData.categoriaId !== undefined && backendData.categoriaId !== null) formData.append('categoriaId', String(backendData.categoriaId));

    // Agregar flag de eliminar imagen si es necesario
    if (debeEliminarImagen) {
      formData.append('imagenEliminar', 'true');
      formData.append('imagen', ''); // Campo vacío pero required en backend
    }

    // Agregar imagenUrl si existe (tiene prioridad)
    if (tieneImagenUrl && typeof (data as any).imagenUrl === 'string') {
      formData.append('imagenUrl', (data as any).imagenUrl.trim());
      console.log('=== Actualizando producto con URL nueva ===', (data as any).imagenUrl.trim());
    }
    // Agregar imagen SOLO si hay una nueva (no si se está eliminando)
    else if (tieneImagenFile && data.imagen instanceof File) {
      formData.append('imagen', data.imagen);
      console.log('=== Actualizando producto con archivo nuevo ===');
    }

    console.log('=== Enviando FormData para actualizar ===');
    console.log('imagenEliminar:', debeEliminarImagen);
    console.log('tiene imagenURL:', tieneImagenUrl);
    console.log('tiene imagenFile:', tieneImagenFile);

    // Usar endpoint específico para actualización con imagen
    const response = await api.put<ProductoDTOBackend>(`/api/productos/${id}/imagen`, formData);
    return mapProductoFromBackend(response);
  }

  // Para actualizaciones sin imagen, usar endpoint normal
  const response = await api.put<ProductoDTOBackend>(productEndpoints.update(id), backendData);
  return mapProductoFromBackend(response);
}

/**
 * Elimina un producto
 */
export async function deleteProduct(id: number): Promise<void> {
  await api.delete(productEndpoints.delete(id));
}

/**
 * Busca productos por termino de busqueda
 * El backend usa /buscar con parámetro 'nombre'
 */
export async function searchProducts(
  query: string,
  filters: ProductFilters = {}
): Promise<Product[]> {
  const response = await api.get<ProductoDTOBackend[]>(`${productEndpoints.base}/buscar?nombre=${encodeURIComponent(query)}`);

  return response.map(mapProductoFromBackend);
}

/**
 * Obtiene las categorias de productos disponibles
 */
export async function getCategories(): Promise<ProductCategory[]> {
  const response = await api.get<ProductCategory[]>(productEndpoints.categories);
  return response;
}

/**
 * Verifica si un codigo de producto ya existe
 */
export async function checkProductCodeExists(
  codigo: string,
  excludeId?: number
): Promise<boolean> {
  try {
    const params = `codigo=${encodeURIComponent(codigo)}${excludeId ? `&exclude_id=${excludeId}` : ''}`;
    const response = await api.get<{ exists: boolean }>(`${productEndpoints.base}/check-codigo?${params}`);

    return response.exists;
  } catch {
    return false;
  }
}

/**
 * Obtiene todos los productos de forma directa (sin paginación)
 */
export async function fetchProductos(): Promise<ProductoDTOBackend[]> {
  const r = await api.get<ProductoDTOBackend[]>("/productos");
  return r;
}
