/**
 * Hook personalizado para manejo de ventas
 */

import { useState, useCallback } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { UserRole } from '@/lib/types/usuario';
import { useVentaStore } from '@/store/venta-store';
import {
  getSales,
  getSaleById,
  createSale,
  cancelSale,
  getSalesSummary,
} from '@/lib/services/venta-service';
import {
  Sale,
  CreateSaleData,
  SaleFilters,
  SaleSummary,
  QueryOptions,
  PaginatedResponse,
} from '@/lib/types';

export function useVentas() {
  const { user } = useAuth();
  const { items, clienteId, metodoPago, observaciones, clearCart } = useVentaStore();
  const [sales, setSales] = useState<Sale[]>([]);
  const [pagination, setPagination] = useState<Omit<PaginatedResponse<Sale>, 'items'>>({
    total: 0,
    page: 1,
    page_size: 10,
    total_pages: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  /**
   * Carga la lista de ventas
   */
  const loadSales = useCallback(
    async (options: QueryOptions = {}) => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await getSales(options);
        setSales(response.items);
        setPagination({
          total: response.total,
          page: response.page,
          page_size: response.page_size,
          total_pages: response.total_pages,
        });
      } catch (err: any) {
        setError(err.message || 'Error al cargar ventas');
      } finally {
        setIsLoading(false);
      }
    },
    []
  );
  
  /**
   * Obtiene una venta por ID
   */
  const getSale = useCallback(
    async (id: number) => {
      try {
        return await getSaleById(id);
      } catch (err: any) {
        setError(err.message || 'Error al obtener venta');
        return null;
      }
    },
    []
  );
  
  /**
   * Crea una nueva venta desde el carrito actual
   */
  const createNewSale = useCallback(
    async () => {
      if (items.length === 0) {
        setError('Faltan datos para completar la venta');
        return null;
      }

      let finalClienteId = clienteId;

      if (!finalClienteId && user?.rol === UserRole.CLIENTE) {
        finalClienteId = user.id;
      }

      if (!finalClienteId) {
        setError('Debes seleccionar un cliente para completar la venta');
        return null;
      }
      
      try {
        const saleData: CreateSaleData = {
          clienteId: finalClienteId,
          tipoPago: metodoPago,
          detalles: items.map((item) => ({
            productoId: item.producto.id,
            cantidad: item.cantidad,
          })),
        };
        
        const newSale = await createSale(saleData);
        clearCart();
        await loadSales();
        return newSale;
      } catch (err: any) {
        setError(err.message || 'Error al crear venta');
        return null;
      }
    },
    [clienteId, metodoPago, observaciones, items, clearCart, loadSales, user]
  );
  
  /**
   * Cancela una venta existente
   */
  const cancelExistingSale = useCallback(
    async (id: number, motivo: string) => {
      try {
        const canceledSale = await cancelSale(id, motivo);
        await loadSales();
        return canceledSale;
      } catch (err: any) {
        setError(err.message || 'Error al cancelar venta');
        return null;
      }
    },
    [loadSales]
  );
  
  /**
   * Obtiene resumen de ventas
   */
  const getSummary = useCallback(
    async (filters: SaleFilters = {}) => {
      try {
        return await getSalesSummary(filters);
      } catch (err: any) {
        setError(err.message || 'Error al obtener resumen');
        return null;
      }
    },
    []
  );
  
  return {
    sales,
    pagination,
    isLoading,
    error,
    loadSales,
    getSale,
    createSale: createNewSale,
    cancelSale: cancelExistingSale,
    getSummary,
  };
}