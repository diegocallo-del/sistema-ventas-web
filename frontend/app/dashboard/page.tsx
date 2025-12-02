﻿'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingCart, Users, Wallet, TrendingUp, AlertTriangle, Loader2 } from 'lucide-react';
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
import { Product, Client, Sale } from '@/lib/types';

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

      {/* CARDS RESUMEN */}
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

      {/* GRÁFICOS Y REPORTES */}
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 animate-slide-up delay-200">
        <div className="lg:col-span-2 xl:col-span-2">
          <VentasChart tipo="line" />
        </div>
        <div className="lg:col-span-2 xl:col-span-1">
          <CategoriasChart />
        </div>
      </section>


      {/* IA INSIGHTS Y ALERTAS */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up delay-300">
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
    </div>
  );
}
