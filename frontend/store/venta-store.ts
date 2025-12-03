/**
 * Store global de ventas y carrito usando Zustand
 */

import { create } from 'zustand';
import { CartItem, Product, PaymentMethod } from '@/lib/types';
import { IGV_PERCENTAGE } from '@/lib/constants';

interface VentaState {
  // Estado del carrito
  items: CartItem[];
  clienteId: number | null;
  metodoPago: PaymentMethod;
  observaciones: string;
  
  // Calculos
  subtotal: number;
  igv: number;
  total: number;
  
  // Acciones
  addItem: (producto: Product, cantidad: number) => void;
  removeItem: (productoId: number) => void;
  updateItemQuantity: (productoId: number, cantidad: number) => void;
  clearCart: () => void;
  setCliente: (clienteId: number) => void;
  setMetodoPago: (metodo: PaymentMethod) => void;
  setObservaciones: (obs: string) => void;
  calculateTotals: () => void;
}

/**
 * Store de ventas
 */
export const useVentaStore = create<VentaState>((set, get) => ({
  // Estado inicial
  items: [],
  clienteId: null,
  metodoPago: PaymentMethod.EFECTIVO,
  observaciones: '',
  subtotal: 0,
  igv: 0,
  total: 0,
  
  /**
   * Agrega un item al carrito o incrementa su cantidad
   */
  addItem: (producto, cantidad) => {
    const { items } = get();
    const existingItem = items.find((item) => item.producto.id === producto.id);
    
    let newItems: CartItem[];
    
    if (existingItem) {
      // Incrementar cantidad del item existente
      newItems = items.map((item) =>
        item.producto.id === producto.id
          ? {
              ...item,
              cantidad: item.cantidad + cantidad,
              subtotal: (item.cantidad + cantidad) * item.precio_unitario,
            }
          : item
      );
    } else {
      // Agregar nuevo item
      const newItem: CartItem = {
        producto,
        cantidad,
        precio_unitario: producto.precio,
        subtotal: producto.precio * cantidad,
      };
      newItems = [...items, newItem];
    }
    
    set({ items: newItems });
    get().calculateTotals();
  },
  
  /**
   * Elimina un item del carrito
   */
  removeItem: (productoId) => {
    const { items } = get();
    const newItems = items.filter((item) => item.producto.id !== productoId);
    
    set({ items: newItems });
    get().calculateTotals();
  },
  
  /**
   * Actualiza la cantidad de un item
   */
  updateItemQuantity: (productoId, cantidad) => {
    const { items } = get();
    
    if (cantidad <= 0) {
      get().removeItem(productoId);
      return;
    }
    
    const newItems = items.map((item) =>
      item.producto.id === productoId
        ? {
            ...item,
            cantidad,
            subtotal: cantidad * item.precio_unitario,
          }
        : item
    );
    
    set({ items: newItems });
    get().calculateTotals();
  },
  
  /**
   * Vacia el carrito completamente
   */
  clearCart: () => {
    set({
      items: [],
      clienteId: null,
      metodoPago: PaymentMethod.EFECTIVO,
      observaciones: '',
      subtotal: 0,
      igv: 0,
      total: 0,
    });
  },
  
  /**
   * Establece el cliente para la venta
   */
  setCliente: (clienteId) => {
    set({ clienteId });
  },
  
  /**
   * Establece el metodo de pago
   */
  setMetodoPago: (metodo) => {
    set({ metodoPago: metodo });
  },
  
  /**
   * Establece observaciones de la venta
   */
  setObservaciones: (obs) => {
    set({ observaciones: obs });
  },
  
  /**
   * Calcula subtotal, IGV y total
   */
  calculateTotals: () => {
    const { items } = get();

    const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
    const igv = subtotal * IGV_PERCENTAGE;
    const total = subtotal + igv;

    set({ subtotal, igv, total });
  },
}));
