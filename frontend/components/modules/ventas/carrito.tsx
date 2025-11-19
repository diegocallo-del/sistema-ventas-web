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
        <ShoppingCart className="w-12 h-12 text-slate-500 mx-auto mb-3" />
        <p className="text-slate-300">El carrito está vacío</p>
        <p className="text-sm text-slate-400 mt-1">
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
            className="flex items-center gap-3 p-3 border border-blue-400/30 rounded-xl bg-slate-800/40"
          >
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate text-white">{item.producto.nombre}</p>
              <p className="text-xs text-slate-400">{item.producto.codigo}</p>
              <p className="text-sm font-semibold text-blue-400 mt-1">
                {formatCurrency(item.precio_unitario)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Control de cantidad */}
              <div className="flex items-center gap-1 bg-slate-700/50 rounded-lg border border-blue-400/20">
                <Button
                  size="sm"
                  variant="ghost"
                  className="rounded-l-lg p-1"
                  onClick={() => updateItemQuantity(item.producto.id, item.cantidad - 1)}
                  disabled={item.cantidad <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-3 py-1 font-medium text-sm min-w-[2rem] text-center text-white">
                  {item.cantidad}
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  className="rounded-r-lg p-1"
                  onClick={() => updateItemQuantity(item.producto.id, item.cantidad + 1)}
                  disabled={item.cantidad >= item.producto.stock}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {/* Botón eliminar */}
              <Button
                size="sm"
                variant="ghost"
                className="text-red-600 p-1"
                onClick={() => removeItem(item.producto.id)}
                title="Eliminar del carrito"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Subtotal del item */}
            <div className="text-right min-w-[5rem]">
              <p className="font-semibold text-sm text-white">{formatCurrency(item.subtotal)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón vaciar carrito */}
      <Button
        variant="ghost"
        size="sm"
        fullWidth
        onClick={() => {
          if (confirm('¿Estás seguro de vaciar el carrito?')) {
            clearCart();
          }
        }}
        className="text-red-400 hover:bg-red-500/10 border border-red-400/30"
      >
        <Trash2 className="w-4 h-4 mr-2" />
        Vaciar Carrito
      </Button>
    </div>
  );
}
