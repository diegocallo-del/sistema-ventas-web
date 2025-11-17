/**
 * Tabla de productos con acciones
 */

'use client';

import React from 'react';
import { Product } from '@/lib/types';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/formatters';
import { Edit, Trash2, Package } from 'lucide-react';

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
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600" />
      </div>
    );
  }
  
  if (productos.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="w-12 h-12 text-secondary-400 mx-auto mb-3" />
        <p className="text-secondary-600">No hay productos registrados</p>
      </div>
    );
  }
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Codigo</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead className="text-right">Precio</TableHead>
          <TableHead className="text-right">Stock</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productos.map((producto) => (
          <TableRow key={producto.id}>
            <TableCell className="font-medium">{producto.codigo}</TableCell>
            <TableCell>
              <div>
                <p className="font-medium">{producto.nombre}</p>
                {producto.descripcion && (
                  <p className="text-xs text-secondary-500 truncate max-w-xs">
                    {producto.descripcion}
                  </p>
                )}
              </div>
            </TableCell>
            <TableCell>
              {producto.categoria ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {producto.categoria}
                </span>
              ) : (
                <span className="text-secondary-400">Sin categoria</span>
              )}
            </TableCell>
            <TableCell className="text-right font-medium">
              {formatCurrency(producto.precio)}
            </TableCell>
            <TableCell className="text-right">
              <span
                className={
                  producto.stock === 0
                    ? 'text-red-600 font-medium'
                    : producto.stock < 10
                    ? 'text-yellow-600 font-medium'
                    : 'text-secondary-900'
                }
              >
                {producto.stock}
              </span>
            </TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  producto.activo
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {producto.activo ? 'Activo' : 'Inactivo'}
              </span>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onEdit(producto)}
                  title="Editar producto"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onDelete(producto)}
                  title="Eliminar producto"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}