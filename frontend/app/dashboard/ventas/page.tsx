"use client";

import React, { useEffect, useState } from "react";
import { VentaForm } from "@/components/modules/ventas/venta-form";
import { useVentas } from "@/hooks/use-ventas";
import { useProductos } from "@/hooks/use-productos";
import { useAuthStore } from "@/store/auth-store";
import { useVentaStore } from "@/store/venta-store";
import { Client, Product } from "@/lib/types";
import { getClients } from "@/lib/services/cliente-service";
export default function VentasPage() {
  const { token, user } = useAuthStore();
  const { createSale, isLoading: ventasCargando, error: ventasError } = useVentas();
  const { products, loadProducts } = useProductos();
  const { setCliente } = useVentaStore();

  const [clientes, setClientes] = useState<Client[]>([]);
  const [productosVisibles, setProductosVisibles] = useState<Product[]>([]);
  const [inicializando, setInicializando] = useState(true);
  const [enviando, setEnviando] = useState(false);

  // Carga inicial: clientes y productos
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

  // Actualiza productos visibles cuando cambian los productos cargados
  useEffect(() => {
    setProductosVisibles(products);
  }, [products]);

  // Selección de cliente
  function handleClienteSelect(clienteId: number) {
    setCliente(clienteId);
  }

  // Filtrado de productos por búsqueda
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

  // Enviar venta
  async function handleSubmit() {
    setEnviando(true);
    try {
      await createSale();
    } finally {
      setEnviando(false);
    }
  }

  const cargando = inicializando || ventasCargando || enviando;
  const isClientUser = user?.rol === "cliente";

  return (
    <div className="space-y-6 animate-fade-in">
      {/* HEADER */}
      <header className="animate-slide-down">
        <h1 className="text-3xl font-bold mb-2 text-white">
          {isClientUser ? "Mis compras y ventas" : "Ventas"}
        </h1>
        <p className="text-slate-300 mb-6">
          {isClientUser
            ? "Revisa tu carrito y consulta todas tus compras y ventas."
            : "Realizar y gestionar ventas"}
        </p>
      </header>

      {/* ERROR */}
      {ventasError && (
        <div className="mb-4 rounded-xl border border-red-400/30 bg-red-900/20 px-4 py-2 text-sm text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.2)] animate-slide-up">
          {ventasError}
        </div>
      )}

      {/* FORMULARIO DE VENTA */}
      <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] animate-slide-up delay-100">
        <VentaForm
          clientes={clientes}
          productos={productosVisibles}
          onClienteSelect={handleClienteSelect}
          onCreateCliente={() => {
            // Pendiente: integrar formulario de creación de clientes desde ventas
            console.log("Crear cliente desde ventas aún no implementado");
          }}
          onSearchProducto={handleSearchProducto}
          onSubmit={handleSubmit}
          isLoading={cargando}
          isClientUser={isClientUser}
        />
      </div>
    </div>
  );
}
