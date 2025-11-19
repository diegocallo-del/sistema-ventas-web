'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useVentaStore } from '@/store/venta-store';
import { Client, Product } from '@/lib/types';
import { PAYMENT_METHOD_OPTIONS } from '@/lib/constants';
import { formatCurrency } from '@/lib/formatters';
import { ProductoItem } from '../productos/producto-item';
import { Carrito } from './carrito';
import { Search, UserPlus } from 'lucide-react';

interface VentaFormProps {
  clientes: Client[];
  productos: Product[];
  onClienteSelect: (clienteId: number) => void;
  onCreateCliente: () => void;
  onSearchProducto: (query: string) => void;
  onSubmit: () => Promise<void>;
  isLoading?: boolean;
}

export function VentaForm({
  clientes,
  productos,
  onClienteSelect,
  onCreateCliente,
  onSearchProducto,
  onSubmit,
  isLoading = false,
}: VentaFormProps) {
  const {
    items,
    clienteId,
    metodoPago,
    observaciones,
    subtotal,
    igv,
    total,
    addItem,
    setMetodoPago,
    setObservaciones,
  } = useVentaStore();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchProducto(query);
  };

  const handleAddProduct = (producto: Product) => {
    addItem(producto, 1);
  };

  const isFormValid = (): boolean => {
    return items.length > 0 && clienteId !== null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Columna izquierda: Seleccion de productos */}
      <div className="lg:col-span-2 space-y-6">
        {/* Seleccion de cliente */}
        <Card>
          <CardHeader>
            <CardTitle>Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Select
                value={clienteId?.toString() ?? ''}
                onValueChange={(value) => onClienteSelect(Number(value))}
                disabled={isLoading}
              >
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Seleccionar cliente" />
                </SelectTrigger>
                <SelectContent>
                  {clientes.map((cliente) => (
                    <SelectItem key={cliente.id} value={cliente.id.toString()}>
                      {cliente.nombre} {cliente.apellido} - {cliente.numero_documento}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={onCreateCliente} disabled={isLoading}>
                <UserPlus className="w-4 h-4 mr-2" />
                Nuevo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Busqueda de productos */}
        <Card>
          <CardHeader>
            <CardTitle>Productos</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Buscar productos por nombre o código..."
              value={searchQuery}
              onChange={handleSearchChange}
              disabled={isLoading}
              className="pl-10"
            />
            <div className="mt-4 space-y-2 max-h-96 overflow-y-auto">
              {productos.length === 0 ? (
                <p className="text-center text-slate-400 py-8">
                  {searchQuery
                    ? 'No se encontraron productos'
                    : 'Busca un producto para agregarlo a la venta'}
                </p>
              ) : (
                productos.map((producto) => (
                  <ProductoItem
                    key={producto.id}
                    producto={producto}
                    onSelect={handleAddProduct}
                  />
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Columna derecha: Carrito y resumen */}
      <div className="space-y-6">
        {/* Carrito de compras */}
        <Card>
          <CardHeader>
            <CardTitle>Carrito ({items.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Carrito />
          </CardContent>
        </Card>

        {/* Resumen de venta */}
        <Card>
          <CardHeader>
            <CardTitle>Resumen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Metodo de pago */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Metodo de Pago
              </label>
              <Select
                value={metodoPago}
                onValueChange={(value) => setMetodoPago(value as any)}
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar método de pago" />
                </SelectTrigger>
                <SelectContent>
                  {PAYMENT_METHOD_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Observaciones */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Observaciones
              </label>
              <textarea
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
                rows={2}
                className="block w-full rounded-xl border border-blue-400/30 bg-slate-800/50 text-white placeholder-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200"
                placeholder="Observaciones opcionales"
                disabled={isLoading}
              />
            </div>

            {/* Totales */}
            <div className="border-t border-blue-400/30 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Subtotal:</span>
                <span className="font-medium text-white">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">IGV (18%):</span>
                <span className="font-medium text-white">{formatCurrency(igv)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-blue-400/30 pt-2">
                <span className="text-white">Total:</span>
                <span className="text-blue-400">{formatCurrency(total)}</span>
              </div>
            </div>

            {/* Boton de completar venta */}
            <Button
              fullWidth
              onClick={onSubmit}
              disabled={!isFormValid() || isLoading}
              isLoading={isLoading}
              size="lg"
            >
              Completar Venta
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
