'use client';

import React from 'react';
import { Product } from '@/lib/types';
import { formatCurrency } from '@/lib/formatters';
import { Plus, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductoItemProps {
  producto: Product;
  onSelect: (producto: Product) => void;
}

export function ProductoItem({ producto, onSelect }: ProductoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all">
      <div className="flex items-center gap-3 flex-1">
        <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
          <Package className="w-6 h-6 text-secondary-600" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-medium text-secondary-900 truncate">{producto.nombre}</p>
            <span className="text-xs text-secondary-500">({producto.codigo})</span>
          </div>
          
          <div className="flex items-center gap-3 mt-1">
            <span className="text-sm font-semibold text-primary-600">
              {formatCurrency(producto.precio)}
            </span>
            <span
              className={`text-xs ${
                producto.stock === 0
                  ? 'text-red-600'
                  : producto.stock < 10
                  ? 'text-yellow-600'
                  : 'text-secondary-600'
              }`}
            >
              Stock: {producto.stock}
            </span>
            {producto.categoria && (
              <span className="text-xs text-secondary-500">{producto.categoria}</span>
            )}
          </div>
        </div>
      </div>
      
      <Button
        size="sm"
        variant="primary"
        onClick={() => onSelect(producto)}
        disabled={producto.stock === 0 || !producto.activo}
      >
        <Plus className="w-4 h-4 mr-1" />
        Agregar
      </Button>
    </div>
  );
}
ProductoItem.displayName = 'ProductoItem';