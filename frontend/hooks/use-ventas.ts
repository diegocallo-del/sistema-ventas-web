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

/**
 * Transformado para AISLAMIENTO DE DATOS POR ROL
 *
 * ✅ FASE 2: Frontend - Filtros UX según rol
 * - CLIENTE: Solo ver estadísticas propias (no globales)
 * - VENDEDOR/ADMIN: Ver estadísticas globales
 * - Indicadores visuales de filtrado activo
 * - Logs de auditoría frontend
 */
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
  const [dataFiltered, setDataFiltered] = useState(false);
  const [filterReason, setFilterReason] = useState<string>('');
  
  /**
   * Carga la lista de ventas con indicadores de filtrado
   */
  const loadSales = useCallback(
    async (options: QueryOptions = {}) => {
      setIsLoading(true);
      setError(null);

      try {
        // Log frontend de auditoría
        console.log(`📊 CARGANDO VENTAS - Usuario: ${user?.nombre} (ID: ${user?.id}, Rol: ${user?.rol})`);

        const response = await getSales(options);
        const totalReceived = response.items?.length || 0;

        // Determinar si los datos están filtrados por rol
        let filtered = false;
        let reason = '';

        if (user?.rol === 'cliente') {
          filtered = true;
          reason = 'Mostrando solo sus compras personales';
        } else if (user?.rol === 'vendedor') {
          filtered = true;
          reason = 'Mostrando solo ventas de sus productos';
        } else if (user?.rol === 'admin' || user?.rol === 'supervisor') {
          filtered = false;
          reason = 'Vista global del sistema';
        }

        setSales(response.items);
        setDataFiltered(filtered);
        setFilterReason(reason);
        setPagination({
          total: response.total,
          page: response.page,
          page_size: response.page_size,
          total_pages: response.total_pages,
        });

        console.log(`✅ VENTAS CARGADAS: ${totalReceived} items ${filtered ? `[FILTRADO] ${reason}` : '[SIN FILTRAR]'}`);

      } catch (err: any) {
        setError(err.message || 'Error al cargar ventas');
        console.error('❌ Error cargando ventas:', err);
      } finally {
        setIsLoading(false);
      }
    },
    [user]
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
    dataFiltered,
    filterReason,
    loadSales,
    getSale,
    createSale: createNewSale,
    cancelSale: cancelExistingSale,
    getSummary,
  };
}
