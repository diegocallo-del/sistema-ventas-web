/**
 * Componente del carrito de compras
 */

'use client';

import React from 'react';
import { useVentaStore } from '@/store/venta-store';
import { formatCurrency } from '@/lib/formatters';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';

export function Carrito() {
  const { items, updateItemQuantity, removeItem, clearCart } = useVentaStore();
  
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <ShoppingCart className="w-12 h-12 text-secondary-400 mx-auto mb-3" />
        <p className="text-secondary-600">El carrito esta vacio</p>
        <p className="text-sm text-secondary-500 mt-1">
          Agrega productos para comenzar una venta
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-3">
      {/* Lista de items */}
      <div className="space-y-2 max-h-80 overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.producto.id}
            className="flex items-center gap-3 p-3 border border-secondary-200 rounded-lg"
          >
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{item.producto.nombre}</p>
              <p className="text-xs text-secondary-500">{item.producto.codigo}</p>
              <p className="text-sm font-semibold text-primary-600 mt-1">
                {formatCurrency(item.precio_unitario)}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Control de cantidad */}
              <div className="flex items-center gap-1 bg-secondary-100 rounded-lg">
                <button
                  onClick={() => updateItemQuantity(item.producto.id, item.cantidad - 1)}
                  className="p-1 hover:bg-secondary-200 rounded-l-lg transition-colors"
                  disabled={item.cantidad <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-3 py-1 font-medium text-sm min-w-[2rem] text-center">
                  {item.cantidad}
                </span>
                <button
                  onClick={() => updateItemQuantity(item.producto.id, item.cantidad + 1)}
                  className="p-1 hover:bg-secondary-200 rounded-r-lg transition-colors"
                  disabled={item.cantidad >= item.producto.stock}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              {/* Boton eliminar */}
              <button
                onClick={() => removeItem(item.producto.id)}
                className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                title="Eliminar del carrito"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            
            {/* Subtotal del item */}
            <div className="text-right min-w-[5rem]">
              <p className="font-semibold text-sm">{formatCurrency(item.subtotal)}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Boton vaciar carrito */}
      {items.length > 0 && (
        <Button
          variant="ghost"
          size="sm"
          fullWidth
          onClick={() => {
            if (confirm('¿Estas seguro de vaciar el carrito?')) {
              clearCart();
            }
          }}
          className="text-red-600 hover:bg-red-50"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Vaciar Carrito
        </Button>
      )}
    </div>
  );
}