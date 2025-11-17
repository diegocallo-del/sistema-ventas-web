/**
 * Formulario principal para realizar una venta
 */

'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
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
  
  /**
   * Maneja la busqueda de productos
   */
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchProducto(query);
  };
  
  /**
   * Agrega un producto al carrito
   */
  const handleAddProduct = (producto: Product) => {
    addItem(producto, 1);
  };
  
  /**
   * Verifica si el formulario es valido
   */
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
                value={clienteId ?? ''}
                onChange={(e) => onClienteSelect(Number(e.target.value))}
                disabled={isLoading}
                className="flex-1"
              >
                <option value="">Seleccionar cliente</option>
                {clientes.map((cliente) => (
                  <option key={cliente.id} value={cliente.id}>
                    {cliente.nombre} {cliente.apellido} - {cliente.numero_documento}
                  </option>
                ))}
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
              placeholder="Buscar productos por nombre o codigo..."
              value={searchQuery}
              onChange={handleSearchChange}
              leftIcon={<Search className="w-5 h-5 text-secondary-400" />}
              disabled={isLoading}
            />
            
            <div className="mt-4 space-y-2 max-h-96 overflow-y-auto">
              {productos.length === 0 ? (
                <p className="text-center text-secondary-500 py-8">
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
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Metodo de Pago
              </label>
              <Select
                value={metodoPago}
                onChange={(e) => setMetodoPago(e.target.value as any)}
                disabled={isLoading}
              >
                {PAYMENT_METHOD_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>
            
            {/* Observaciones */}
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Observaciones
              </label>
              <textarea
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
                rows={2}
                className="block w-full rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Observaciones opcionales"
                disabled={isLoading}
              />
            </div>
            
            {/* Totales */}
            <div className="border-t border-secondary-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-secondary-600">Subtotal:</span>
                <span className="font-medium">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-secondary-600">IGV (18%):</span>
                <span className="font-medium">{formatCurrency(igv)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-secondary-200 pt-2">
                <span>Total:</span>
                <span className="text-primary-600">{formatCurrency(total)}</span>
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