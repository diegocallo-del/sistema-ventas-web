'use client';

import React, { useEffect, useState } from 'react';
import { VentaForm } from '@/components/modules/ventas/venta-form';
import { useVentas } from '@/hooks/use-ventas';
import { useProductos } from '@/hooks/use-productos';
import { useAuthStore } from '@/store/auth-store';
import { useVentaStore } from '@/store/venta-store';
import { Client, Product } from '@/lib/types';
import { getClients } from '@/lib/services/cliente-service';

export default function VentasPage() {
  const { token } = useAuthStore();
  const { createSale, isLoading: ventasCargando, error: ventasError } = useVentas();
  const { products, loadProducts } = useProductos();
  const { setCliente } = useVentaStore();

  const [clientes, setClientes] = useState<Client[]>([]);
  const [productosVisibles, setProductosVisibles] = useState<Product[]>([]);
  const [inicializando, setInicializando] = useState(true);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    async function inicializar() {
      if (!token) {
        setInicializando(false);
        return;
      }

      try {
        const respuestaClientes = await getClients({}, token);
        setClientes(respuestaClientes.items);
        await loadProducts();
      } catch (error) {
        console.warn('Error cargando datos de ventas (clientes):', error);
      } finally {
        setInicializando(false);
      }
    }

    inicializar();
  }, [token, loadProducts]);

  useEffect(() => {
    setProductosVisibles(products);
  }, [products]);

  function handleClienteSelect(clienteId: number) {
    setCliente(clienteId);
  }

  function handleSearchProducto(query: string) {
    if (!query) {
      setProductosVisibles(products);
      return;
    }

    const lower = query.toLowerCase();
    const filtrados = products.filter((producto) =>
      producto.nombre.toLowerCase().includes(lower) ||
      String(producto.codigo ?? '').toLowerCase().includes(lower)
    );

    setProductosVisibles(filtrados);
  }

  async function handleSubmit() {
    setEnviando(true);
    try {
      await createSale();
    } finally {
      setEnviando(false);
    }
  }

  const cargando = inicializando || ventasCargando || enviando;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold mb-2">Ventas</h1>
        <p className="text-gray-600 mb-6">Realizar y gestionar ventas</p>
      </header>

      {ventasError && (
        <div className="mb-4 rounded border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
          {ventasError}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow">
        <VentaForm
          clientes={clientes}
          productos={productosVisibles}
          onClienteSelect={handleClienteSelect}
          onCreateCliente={() => {
            // Pendiente: integrar formulario de creación de clientes desde ventas
            console.log('Crear cliente desde ventas aún no implementado');
          }}
          onSearchProducto={handleSearchProducto}
          onSubmit={handleSubmit}
          isLoading={cargando}
        />
      </div>
    </div>
  );
}