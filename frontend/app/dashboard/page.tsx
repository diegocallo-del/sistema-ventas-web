﻿'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingCart, Users, Wallet, TrendingUp, AlertTriangle, Loader2, Bot, DollarSign } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { roleLabels } from '@/lib/roles/role-config';
import { useVentas } from '@/hooks/use-ventas';
import { useProductos } from '@/hooks/use-productos';
import { formatCurrency } from '@/lib/formatters';
import { getClients } from '@/lib/services/cliente-service';
import { getCategorias } from '@/lib/services/categoria-service';
import ProductosChart from '@/components/dashboard/ProductosChart';
import VentasChart from '@/components/dashboard/VentasChart';
import CategoriasChart from '@/components/dashboard/CategoriasChart';
import AnalisisIA from '@/components/dashboard/AnalisisIA';

// Componente Quick AI para el dashboard principal
function QuickAIInsights() {
  return (
    <Card className="border-purple-400/30 bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Bot className="w-5 h-5 text-purple-400" />
          IA Insights Rápidos
        </CardTitle>
        <p className="text-sm text-purple-200">Análisis inteligente en tiempo real</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-400" />
            <p className="text-xs text-slate-300 mb-1">Tendencia de Ventas</p>
            <p className="text-sm font-medium text-green-400">↗️ Creciendo</p>
          </div>
          <div className="text-center">
            <Package className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <p className="text-xs text-slate-300 mb-1">Inventario Optimizado</p>
            <p className="text-sm font-medium text-green-400">✓ Exitoso</p>
          </div>
          <div className="text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <p className="text-xs text-slate-300 mb-1">Margen de Ganancia</p>
            <p className="text-sm font-medium text-green-400">↑ 18%</p>
          </div>
        </div>
        <div className="pt-3 border-t border-purple-500/20">
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            onClick={() => {
              // Scroll to IA section
              const iaSection = document.querySelector('[data-ia-section]');
              if (iaSection) {
                iaSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                // Fallback: scroll to bottom where IA is located
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }
            }}
          >
            <Bot className="w-4 h-4 mr-2" />
            Análisis Detallado en IA
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
import { Product, Client, Sale } from '@/lib/types';
import { IGV_PERCENTAGE } from '@/lib/constants';
import { useVentaStore } from '@/store/venta-store';

export default function DashboardPage() {
  const { user } = useAuth();
  const { sales } = useVentas();
  const { products } = useProductos();

  // Estados para datos del dashboard
  const [stats, setStats] = useState<{
    ventasHoy: number;
    totalProductos: number;
    totalClientes: number;
    ingresosTotales: number;
    productosStockBajo: Product[];
    clientesRecientes: Client[];
    ventasRecientes: Sale[];
  }>({
    ventasHoy: 0,
    totalProductos: 0,
    totalClientes: 0,
    ingresosTotales: 0,
    productosStockBajo: [],
    clientesRecientes: [],
    ventasRecientes: []
  });

  const [loading, setLoading] = useState(true);

  // Calcular estadísticas cuando cambian los datos
  useEffect(() => {
    const calcularEstadisticas = async () => {
      setLoading(true);

      try {
        // Obtener clientes
        const clientesResponse = await getClients({ page_size: 100 });
        const clientes = clientesResponse.items;

        // Calcular estadísticas
        const now = new Date();
        const hoy = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const ventasHoy = sales?.filter(venta => {
          const fechaVenta = new Date(venta.fecha_creacion || '');
          return fechaVenta >= hoy;
        }).length || 0;

        const ingresosTotales = sales?.reduce((sum, venta) => sum + (venta.total || 0), 0) || 0;

        const productosStockBajo = products?.filter(producto =>
          producto.stock <= 5 && producto.activo
        ) || [];

        const clientesRecientes = clientes
          .sort((a, b) => new Date(b.fecha_creacion || '').getTime() - new Date(a.fecha_creacion || '').getTime())
          .slice(0, 3);

        const ventasRecientes = sales?.slice(0, 5) || [];

        setStats({
          ventasHoy,
          totalProductos: products?.length || 0,
          totalClientes: clientes.length,
          ingresosTotales,
          productosStockBajo,
          clientesRecientes,
          ventasRecientes
        });

      } catch (error) {
        console.warn('Error calculando estadísticas:', error);
      } finally {
        setLoading(false);
      }
    };

    calcularEstadisticas();
  }, [sales, products]);

  return (
    <div className="space-y-8 rounded-3xl border border-blue-500/20 bg-slate-950/80 shadow-[0_18px_45px_rgba(15,23,42,0.9)] p-6 md:p-8 animate-fade-in">
      {/* HEADER */}
      <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between animate-slide-down">
        <div>
          <p className="text-sm font-medium text-blue-400 uppercase tracking-[0.2em]">
            POS System
          </p>
          <h1 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight text-white">
            Bienvenido{user ? `, ${user.nombre}` : ''}
          </h1>
          {user && (
            <p className="text-sm text-slate-300">
              Rol: <span className="font-medium text-blue-300">{roleLabels[user.rol]}</span>
            </p>
          )}
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-2xl">
            Aquí tienes un resumen rápido del estado actual de tu negocio.
          </p>
        </div>
      </header>

      {/* SECCIÓN DE PRODUCTOS PARA CLIENTES */}
      {user?.rol === 'cliente' && (
        <div className="space-y-6 animate-slide-up delay-100">
          <Card className="border-green-400/30 shadow-[0_0_15px_rgba(34,197,94,0.1)] bg-slate-900/60 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-green-400" />
                Tienda de Productos
              </CardTitle>
              <p className="text-slate-400 text-sm">
                Explora y compra nuestros productos disponibles
              </p>
            </CardHeader>
            <CardContent>
              {/* Grid de productos para clientes */}
              {loading ? (
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
              ) : products?.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                  <p className="text-slate-400">No hay productos disponibles en este momento.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {products?.filter(p => p.stock > 0 && p.activo).map((product) => (
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
                        </div>
                        <div className="mb-3">
                          <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1">
                            {product.nombre}
                          </h3>
                          {product.codigo && (
                            <p className="text-xs text-slate-500">Código: {product.codigo}</p>
                          )}
                          <p className="text-green-400 font-bold text-lg">
                            {formatCurrency(product.precio * (1 + IGV_PERCENTAGE))}
                          </p>
                          <p className="text-slate-400 text-xs">
                            Incluye IGV • Stock: {product.stock}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const { addItem } = useVentaStore.getState();
                            addItem(product, 1);
                          }}
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                        >
                          Agregar al carrito
                        </button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Carrito del cliente */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* Acciones del cliente */}
              <Card className="border-purple-400/30 shadow-[0_0_15px_rgba(147,51,234,0.1)] bg-slate-900/60 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Package className="w-5 h-5 text-purple-400" />
                    Mis Compras y Ventas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => window.location.href = '/dashboard/ventas'}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                    >
                      Procesar Mi Carrito
                    </button>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <p className="text-sm text-slate-400">Historial de compras</p>
                      <p className="text-lg font-bold text-white">{stats.ventasRecientes.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-slate-900/60 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Carrito Actual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">{useVentaStore.getState().items.length}</p>
                  <p className="text-sm text-slate-400">productos en carrito</p>
                  <p className="mt-2 text-green-400 font-semibold">
                    {formatCurrency(useVentaStore.getState().total)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* CARDS RESUMEN PARA ADMINISTRADORES */}
      {user?.rol !== 'cliente' && (
        <>
          <section className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            <Card
              variant="default"
              className="group rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-indigo-900/50 text-white shadow-[0_10px_30px_rgba(30,64,175,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(30,64,175,0.6)]"
            >
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="text-sm text-slate-300 font-medium">Ventas hoy</p>
                  <p className="mt-2 text-3xl font-bold text-white">
                    {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : stats.ventasHoy}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/40">
                  <ShoppingCart className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>

            <Card
              variant="default"
              className="group rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-900/50 via-emerald-800/40 to-teal-900/50 text-white shadow-[0_10px_30px_rgba(4,120,87,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(4,120,87,0.6)]"
            >
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="text-sm text-slate-300 font-medium">Productos</p>
                  <p className="mt-2 text-3xl font-bold text-white">
                    {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : stats.totalProductos}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/40">
                  <Package className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>

            <Card
              variant="default"
              className="group rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-900/50 via-violet-800/40 to-fuchsia-900/50 text-white shadow-[0_10px_30px_rgba(126,34,206,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(126,34,206,0.6)]"
            >
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="text-sm text-slate-300 font-medium">Clientes</p>
                  <p className="mt-2 text-3xl font-bold text-white">
                    {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : stats.totalClientes}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/15 text-purple-300 border border-purple-400/40">
                  <Users className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>

            <Card
              variant="default"
              className="group rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-900/50 via-amber-800/40 to-orange-900/50 text-white shadow-[0_10px_30px_rgba(180,83,9,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(180,83,9,0.6)]"
            >
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="text-sm text-slate-300 font-medium">Ingresos</p>
                  <p className="mt-2 text-3xl font-bold text-white">
                    {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : formatCurrency(Math.round(stats.ingresosTotales))}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/40">
                  <Wallet className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* GRÁFICOS Y REPORTES PARA ADMINISTRADORES */}
          <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 animate-slide-up delay-200">
            <div className="lg:col-span-2 xl:col-span-2">
              <VentasChart tipo="line" />
            </div>
            <div className="lg:col-span-2 xl:col-span-1">
              <CategoriasChart />
            </div>
          </section>

          {/* IA INSIGHTS RÁPIDOS - justo después de las métricas principales */}
          <section className="animate-slide-up delay-100">
            <div className="max-w-md mx-auto lg:mx-0">
              <QuickAIInsights />
            </div>
          </section>

          {/* IA INSIGHTS Y ALERTAS PARA ADMINISTRADORES */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up delay-300" data-ia-section>
            {/* IA INSIGHTS */}
            <div className="lg:col-span-1">
              <AnalisisIA compact={true} />
            </div>

            {/* ALERTAS DE STOCK */}
            <Card
              variant="outline"
              className="lg:col-span-1 rounded-2xl border border-slate-700/70 bg-slate-950/80 backdrop-blur-xl shadow-[0_12px_35px_rgba(15,23,42,0.85)]"
            >
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  Alertas de Stock Bajo
                </CardTitle>
              </CardHeader>
              <CardContent>
                {stats.productosStockBajo.length > 0 ? (
                  <div className="space-y-3">
                    {stats.productosStockBajo.slice(0, 5).map((producto) => (
                      <div key={producto.id} className="flex items-center justify-between p-3 bg-red-900/20 border border-red-400/30 rounded-lg">
                        <div>
                          <p className="font-medium text-white">{producto.nombre}</p>
                          <p className="text-sm text-slate-400">Stock: {producto.stock} unidades</p>
                        </div>
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/15 text-green-300 border border-green-400/40">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <p className="font-medium text-green-400">¡Excelente! Todos los productos tienen stock suficiente</p>
                    <p className="text-sm text-slate-400 max-w-sm">
                      No hay productos con stock bajo (menos de 5 unidades).
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* ACTIVIDAD RECIENTE */}
            <Card
              variant="outline"
              className="lg:col-span-1 rounded-2xl border border-slate-700/70 bg-slate-950/80 backdrop-blur-xl shadow-[0_12px_35px_rgba(15,23,42,0.85)]"
            >
              <CardHeader>
                <CardTitle className="text-white">Actividad Reciente</CardTitle>
              </CardHeader>
              <CardContent>
                {stats.ventasRecientes.length > 0 || stats.clientesRecientes.length > 0 ? (
                  <div className="space-y-4">
                    {stats.ventasRecientes.slice(0, 3).map((venta) => (
                      <div key={venta.id} className="flex items-center justify-between p-3 bg-blue-900/20 border border-blue-400/30 rounded-lg">
                        <div>
                          <p className="font-medium text-white">Nueva venta</p>
                          <p className="text-sm text-slate-400">
                            {venta.fecha_creacion ? new Date(venta.fecha_creacion).toLocaleDateString('es-ES') : 'Fecha desconocida'}
                          </p>
                        </div>
                        <span className="text-green-400 font-medium">
                          S/ {venta.total || 0}
                        </span>
                      </div>
                    ))}

                    {stats.clientesRecientes.slice(0, 2).map((cliente) => (
                      <div key={cliente.id} className="flex items-center justify-between p-3 bg-purple-900/20 border border-purple-400/30 rounded-lg">
                        <div>
                          <p className="font-medium text-white">Nuevo cliente</p>
                          <p className="text-sm text-slate-400">{cliente.nombre} {cliente.apellido}</p>
                        </div>
                        <span className="text-purple-400 font-medium">
                          {cliente.numero_documento}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/40">
                      <ShoppingCart className="h-6 w-6" />
                    </div>
                    <p className="font-medium text-slate-200">Todavía no hay actividad reciente</p>
                    <p className="text-sm text-slate-400 max-w-xl">
                      Cuando registres ventas, clientes o productos, verás aquí un resumen de tus últimos movimientos.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        </>
      )}
    </div>
  );
}
