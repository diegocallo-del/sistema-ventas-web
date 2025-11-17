/**
 * Hook personalizado para manejo de ventas
 */

import { useState, useCallback } from 'react';
import { useAuthStore } from '@/store/auth-store';
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
  const { token, user } = useAuthStore();
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
      if (!token) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await getSales(options, token);
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
    [token]
  );
  
  /**
   * Obtiene una venta por ID
   */
  const getSale = useCallback(
    async (id: number) => {
      if (!token) return null;
      
      try {
        return await getSaleById(id, token);
      } catch (err: any) {
        setError(err.message || 'Error al obtener venta');
        return null;
      }
    },
    [token]
  );
  
  /**
   * Crea una nueva venta desde el carrito actual
   */
  const createNewSale = useCallback(
    async () => {
      if (!token || !clienteId || items.length === 0) {
        setError('Faltan datos para completar la venta');
        return null;
      }
      
      try {
        const saleData: CreateSaleData = {
          cliente_id: clienteId,
          metodo_pago: metodoPago,
          observaciones: observaciones || undefined,
          detalles: items.map((item) => ({
            producto_id: item.producto.id,
            cantidad: item.cantidad,
            precio_unitario: item.precio_unitario,
          })),
        };
        
        const newSale = await createSale(saleData, token);
        clearCart();
        await loadSales();
        return newSale;
      } catch (err: any) {
        setError(err.message || 'Error al crear venta');
        return null;
      }
    },
    [token, clienteId, metodoPago, observaciones, items, clearCart, loadSales]
  );
  
  /**
   * Cancela una venta existente
   */
  const cancelExistingSale = useCallback(
    async (id: number, motivo: string) => {
      if (!token) return null;
      
      try {
        const canceledSale = await cancelSale(id, motivo, token);
        await loadSales();
        return canceledSale;
      } catch (err: any) {
        setError(err.message || 'Error al cancelar venta');
        return null;
      }
    },
    [token, loadSales]
  );
  
  /**
   * Obtiene resumen de ventas
   */
  const getSummary = useCallback(
    async (filters: SaleFilters = {}) => {
      if (!token) return null;
      
      try {
        return await getSalesSummary(filters, token);
      } catch (err: any) {
        setError(err.message || 'Error al obtener resumen');
        return null;
      }
    },
    [token]
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