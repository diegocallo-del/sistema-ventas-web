/**
 * Hook personalizado para manejo de productos
 */

import { useState, useEffect, useCallback } from 'react';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
} from '@/lib/services/producto-service';
import {
  Product,
  CreateProductData,
  UpdateProductData,
  ProductFilters,
  QueryOptions,
  PaginatedResponse,
} from '@/lib/types';

export function useProductos() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Omit<PaginatedResponse<Product>, 'items'>>({
    total: 0,
    page: 1,
    page_size: 10,
    total_pages: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  /**
   * Carga la lista de productos
   */
  const loadProducts = useCallback(
    async (options: QueryOptions = {}) => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await getProducts(options);
        setProducts(response.items);
        setPagination({
          total: response.total,
          page: response.page,
          page_size: response.page_size,
          total_pages: response.total_pages,
        });
      } catch (err: any) {
        setError(err.message || 'Error al cargar productos');
      } finally {
        setIsLoading(false);
      }
    },
    []
  );
  
  /**
   * Busca productos por termino
   */
  const searchProductsByTerm = useCallback(
    async (query: string, filters: ProductFilters = {}) => {
      try {
        return await searchProducts(query, filters);
      } catch (err: any) {
        setError(err.message || 'Error al buscar productos');
        return [];
      }
    },
    []
  );
  
  /**
   * Obtiene un producto por ID
   */
  const getProduct = useCallback(
    async (id: number) => {
      try {
        return await getProductById(id);
      } catch (err: any) {
        setError(err.message || 'Error al obtener producto');
        return null;
      }
    },
    []
  );
  
  /**
   * Crea un nuevo producto
   */
  const createNewProduct = useCallback(
    async (data: CreateProductData) => {
      try {
        const newProduct = await createProduct(data);
        await loadProducts();
        return newProduct;
      } catch (err: any) {
        setError(err.message || 'Error al crear producto');
        return null;
      }
    },
    [loadProducts]
  );
  
  /**
   * Actualiza un producto existente
   */
  const updateExistingProduct = useCallback(
    async (id: number, data: UpdateProductData) => {
      try {
        const updatedProduct = await updateProduct(id, data);
        await loadProducts();
        return updatedProduct;
      } catch (err: any) {
        setError(err.message || 'Error al actualizar producto');
        return null;
      }
    },
    [loadProducts]
  );
  
  /**
   * Elimina un producto
   */
  const deleteExistingProduct = useCallback(
    async (id: number) => {
      try {
        await deleteProduct(id);
        await loadProducts();
        return true;
      } catch (err: any) {
        setError(err.message || 'Error al eliminar producto');
        return false;
      }
    },
    [loadProducts]
  );
  
  return {
    products,
    pagination,
    isLoading,
    error,
    loadProducts,
    searchProducts: searchProductsByTerm,
    getProduct,
    createProduct: createNewProduct,
    updateProduct: updateExistingProduct,
    deleteProduct: deleteExistingProduct,
  };
}