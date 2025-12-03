"use client";

import React, { useEffect, useState } from "react";
import { VentaForm } from "@/components/modules/ventas/venta-form";
import { useVentas } from "@/hooks/use-ventas";
import { useProductos } from "@/hooks/use-productos";
import { useAuth } from "@/hooks/use-auth";
import { useVentaStore } from "@/store/venta-store";
import { Client, Product } from "@/lib/types";
import { getClients } from "@/lib/services/cliente-service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, TrendingUp, Users, DollarSign, Eye, History, Search } from "lucide-react";
import { formatCurrency } from "@/lib/formatters";
import { IGV_PERCENTAGE } from "@/lib/constants";
export default function VentasPage() {
  const { user } = useAuth();
  const { sales, createSale, isLoading: ventasCargando, error: ventasError, loadSales } = useVentas();
  const { products, loadProducts } = useProductos();
  const { setCliente, items } = useVentaStore();

  const [clientes, setClientes] = useState<Client[]>([]);
  const [productosVisibles, setProductosVisibles] = useState<Product[]>([]);
  const [inicializando, setInicializando] = useState(true);
  const [enviando, setEnviando] = useState(false);

  // Carga inicial: clientes y productos
  useEffect(() => {
    async function inicializar() {
      try {
        const respuestaClientes = await getClients({});
        setClientes(respuestaClientes.items);
        await loadProducts();
        await loadSales({ page_size: 50 }); // Cargar ventas para estadísticas
      } catch (error) {
        console.warn('Error cargando datos de ventas:', error);
      } finally {
        setInicializando(false);
      }
    }

    inicializar();
  }, [loadProducts, loadSales]);

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

  // Calcular estadísticas de ventas
  const totalVentas = sales?.length || 0;
  const totalIngresos = sales?.reduce((sum, venta) => sum + (venta.total || 0), 0) || 0;
  const clientesUnicos = new Set(sales?.map(v => v.cliente_id).filter(Boolean)).size || 0;
  const ventasDelDia = sales?.filter(v =>
    new Date(v.fecha_creacion || '').toDateString() === new Date().toDateString()
  ).length || 0;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* HEADER */}
      <header className="animate-slide-down">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white flex items-center gap-3">
              <ShoppingCart className="w-8 h-8" />
              {isClientUser ? "Mis Compras y Ventas" : "Sistema de Ventas"}
            </h1>
            <p className="text-slate-300">
              {isClientUser
                ? "Revisa tu carrito, realiza compras y consulta tu historial."
                : "Gestión completa de ventas, clientes y operaciones."}
            </p>
          </div>
        </div>
      </header>

      {/* TIENDA DE PRODUCTOS */}
      <Card className="border-green-400/30 shadow-[0_0_15px_rgba(34,197,94,0.1)] bg-slate-900/60 backdrop-blur-xl animate-slide-up">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-green-400" />
            Tienda de Productos
          </CardTitle>
          <p className="text-slate-400 text-sm">
            Selecciona productos para agregar al carrito de venta
          </p>
        </CardHeader>
        <CardContent>
          {/* Barra de búsqueda para tienda */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Buscar productos..."
                className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400"
                onChange={(e) => handleSearchProducto(e.target.value)}
              />
            </div>
            <Button onClick={() => setProductosVisibles(products)} variant="outline">
              Mostrar Todos
            </Button>
          </div>

          {/* Grid de productos */}
          {inicializando ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <Card key={i} className="border-slate-700 bg-slate-800/50">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-slate-700 rounded mb-3 animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-700 rounded animate-pulse" />
                      <div className="h-3 bg-slate-700 rounded animate-pulse w-3/4" />
                      <div className="flex justify-between">
                        <div className="h-6 bg-slate-700 rounded animate-pulse w-16" />
                        <div className="h-6 bg-slate-700 rounded animate-pulse w-12" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : productosVisibles.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-400">No se encontraron productos.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {productosVisibles.map((product) => (
                <Card
                  key={product.id}
                  className="group border-slate-600 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-800/70 transition-colors cursor-pointer"
                  onClick={() => {
                    const { addItem } = useVentaStore.getState();
                    addItem(product, 1);
                  }}
                >
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-3 bg-slate-700 rounded overflow-hidden">
                      {product.imagen ? (
                        <img
                          src={product.imagen}
                          alt={product.nombre}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          Sin imagen
                        </div>
                      )}
                      {product.stock === 0 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                          <span className="text-white text-sm font-medium px-2 py-1 bg-red-600 rounded">
                            Agotado
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1">
                        {product.nombre}
                      </h3>
                      <p className="text-green-400 font-bold text-lg">
                        {formatCurrency(product.precio * (1 + IGV_PERCENTAGE))}
                      </p>
                      <p className="text-slate-400 text-xs">
                        Incluye IGV • Stock: {product.stock}
                      </p>
                    </div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation(); // Evita que se active el onClick del Card
                        const { addItem } = useVentaStore.getState();
                        addItem(product, 1);
                      }}
                      disabled={product.stock === 0}
                      className="w-full text-sm"
                      size="sm"
                    >
                      {product.stock === 0 ? 'Agotado' : 'Agregar al carrito'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* ESTADÍSTICAS RÁPIDAS */}
      {!isClientUser && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-slate-900/60 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-blue-300">{totalVentas}</p>
                  <p className="text-slate-300 text-sm">Total Ventas</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-400/30 shadow-[0_0_15px_rgba(34,197,94,0.1)] bg-slate-900/60 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-green-300">
                    {formatCurrency(totalIngresos)}
                  </p>
                  <p className="text-slate-300 text-sm">Ingresos Totales</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-400/30 shadow-[0_0_15px_rgba(147,51,234,0.1)] bg-slate-900/60 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-purple-300">
                    {clientesUnicos}
                  </p>
                  <p className="text-slate-300 text-sm">Clientes Atendidos</p>
                </div>
                <Users className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-400/30 shadow-[0_0_15px_rgba(249,115,22,0.1)] bg-slate-900/60 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-orange-300">
                    {ventasDelDia}
                  </p>
                  <p className="text-slate-300 text-sm">Ventas del Día</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

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

      {/* HISTORIAL DE VENTAS (Para todos los usuarios) */}
      <Card className="border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-slate-900/60 backdrop-blur-xl animate-slide-up delay-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <History className="w-5 h-5 text-blue-400" />
              <CardTitle className="text-white">
                {isClientUser ? "Mi Historial de Compras" : "Historial de Ventas"}
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => loadSales({ page_size: 50 })}
              disabled={ventasCargando}
            >
              <Eye className="w-4 h-4 mr-2" />
              Actualizar
            </Button>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Mostrando {sales?.length || 0} {isClientUser ? 'compras' : 'ventas'} recientes
          </p>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700 hover:bg-slate-800/50">
                  <TableHead className="text-slate-300">ID</TableHead>
                  <TableHead className="text-slate-300">Cliente</TableHead>
                  <TableHead className="text-slate-300">Total</TableHead>
                  <TableHead className="text-slate-300">Estado</TableHead>
                  <TableHead className="text-slate-300">Fecha</TableHead>
                  {!isClientUser && <TableHead className="text-slate-300">Acciones</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {sales?.slice(0, 10).map((venta) => {
                  // Encontrar nombre del cliente
                  const clienteNombre = clientes.find(c => c.id === venta.cliente_id)?.nombre || 'Cliente';
                  const clienteApellido = clientes.find(c => c.id === venta.cliente_id)?.apellido || '';
                  const nombreCompleto = clienteApellido ? `${clienteNombre} ${clienteApellido}` : clienteNombre;

                  return (
                    <TableRow key={venta.id} className="border-slate-700 hover:bg-slate-800/30">
                      <TableCell className="text-slate-300">#{venta.id}</TableCell>
                      <TableCell className="font-medium text-white">{nombreCompleto}</TableCell>
                      <TableCell className="font-medium text-green-400">
                        {formatCurrency(venta.total || 0)}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="default"
                          className="bg-green-500/20 text-green-300 border-green-400/30"
                        >
                          PAGADA
                        </Badge>
                      </TableCell>
                      <TableCell className="text-slate-400 text-sm">
                        {venta.fecha_creacion
                          ? new Date(venta.fecha_creacion).toLocaleDateString('es-ES')
                          : 'N/A'
                        }
                      </TableCell>
                      {!isClientUser && (
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="w-4 h-4 text-blue-400" />
                            </Button>
                          </div>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          {(!sales || sales.length === 0) && (
            <div className="text-center py-8">
              <History className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-400">
                {isClientUser ? "No tienes compras registradas aún." : "No hay ventas registradas."}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
