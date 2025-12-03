/**
 * Grid de productos estilo Mercado Libre
 */

'use client';

import React, { useState } from 'react';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog } from '@/components/ui/dialog';
import { formatCurrency } from '@/lib/formatters';
import { cn } from '@/lib/utils';
import {
  Edit,
  Trash2,
  ImageIcon,
  Tag,
  AlertTriangle,
  Store,
  Package
} from 'lucide-react';

interface ProductosTableProps {
  productos: Product[];
  onEdit: (producto: Product) => void;
  onDelete: (producto: Product) => void;
  isLoading?: boolean;
}

export function ProductosTable({
  productos,
  onEdit,
  onDelete,
  isLoading = false,
}: ProductosTableProps) {
  const [previewImagen, setPreviewImagen] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
        <p className="text-gray-600 mt-4 font-medium">Cargando productos...</p>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No hay productos registrados</h3>
        <p className="text-gray-500">Comienza agregando productos para vender</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden"
        >
          {/* Imagen principal estilo Mercado Libre */}
          <div className="aspect-video bg-gray-100 relative overflow-hidden">
            {producto.imagen ? (
              <>
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setPreviewImagen(producto.imagen || null)}
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <ImageIcon className="w-12 h-12" />
              </div>
            )}

            {/* Badge de estado */}
            <div className="absolute top-3 right-3">
              <Badge
                variant={producto.activo ? "default" : "destructive"}
                className={cn(
                  "text-xs font-semibold px-2 py-1 shadow-lg",
                  producto.activo
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                )}
              >
                {producto.activo ? 'ACTIVO' : 'INACTIVO'}
              </Badge>
            </div>
          </div>

          {/* Contenido estilo Marketplace */}
          <div className="p-4">
            {/* Código e ID */}
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-gray-900 font-medium">
                {producto.codigo || `ID-${producto.id}`}
              </Badge>
              {producto.marca && (
                <Badge variant="secondary" className="text-xs bg-purple-50 text-gray-900 font-medium">
                  {producto.marca}
                </Badge>
              )}
            </div>

            {/* Nombre del producto */}
            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-lg leading-tight" title={producto.nombre}>
              {producto.nombre}
            </h3>

            {/* Descripción breve */}
            {producto.descripcion && (
              <p className="text-sm text-gray-600 mb-3 line-clamp-2" title={producto.descripcion}>
                {producto.descripcion}
              </p>
            )}

            {/* Categoría */}
            {producto.categoria && (
              <div className="mb-3">
                <Badge variant="outline" className="text-xs bg-green-50 border-green-200 text-gray-900 font-medium">
                  <Tag className="w-3 h-3 mr-1" />
                  {producto.categoria}
                </Badge>
              </div>
            )}

            {/* Precio destacado estilo Mercado Libre */}
            <div className="mb-4">
              <span className="text-2xl font-black text-green-600">
                {formatCurrency(producto.precio)}
              </span>
            </div>

            {/* Stock con indicador visual */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Stock:</span>
                <span className={cn(
                  "px-2 py-1 rounded-full text-xs font-semibold",
                  producto.stock === 0
                    ? "bg-red-100 text-red-800"
                    : producto.stock < 10
                    ? "bg-orange-100 text-orange-800"
                    : "bg-green-100 text-green-800"
                )}>
                  {producto.stock}
                </span>
                {producto.stock <= 5 && producto.stock > 0 && (
                  <AlertTriangle className="w-4 h-4 text-orange-500 animate-pulse" />
                )}
              </div>
            </div>

            {/* Vendedor (si viene del backend) */}
            {producto.modelo && (
              <div className="text-xs text-gray-500 mb-3">
                <Store className="w-3 h-3 inline mr-1" />
                Modelo: {producto.modelo}
              </div>
            )}

            {/* Acciones estilo Marketplace */}
            <div className="flex gap-2 pt-3 border-t border-gray-100">
              <Button
                size="sm"
                onClick={() => onEdit(producto)}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/50 hover:shadow-blue-400/50 border border-blue-400 hover:border-blue-300 transition-all duration-300 relative"
                style={{
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <Edit className="w-4 h-4 mr-2" />
                Editar
              </Button>
              <Button
                size="sm"
                onClick={() => onDelete(producto)}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-red-500/50 hover:shadow-red-400/50 border border-red-400 hover:border-red-300 transition-all duration-300 relative"
                style={{
                  boxShadow: '0 0 15px rgba(239, 68, 68, 0.5), 0 0 30px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Eliminar
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal de preview de imagen */}
      {previewImagen && (
        <Dialog
          isOpen={!!previewImagen}
          onClose={() => setPreviewImagen(null)}
          title="Vista previa de imagen"
        >
          <div className="flex justify-center p-4 bg-black rounded-lg">
            <img
              src={previewImagen || ""}
              alt="Vista previa"
              className="max-w-full max-h-96 rounded-lg shadow-2xl object-contain"
            />
          </div>
        </Dialog>
      )}
    </div>
  );
}

ProductosTable.displayName = 'ProductosTable';
