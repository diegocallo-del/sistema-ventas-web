﻿'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingCart, Users, Wallet } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-8 rounded-3xl border border-blue-400/30 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-[0_0_20px_rgba(59,130,246,0.15)] ring-1 ring-blue-400/20 p-6 md:p-8 animate-fade-in">
      {/* HEADER */}
      <header className="flex flex-col gap-1 animate-slide-down">
        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-slate-300">
          Bienvenido al sistema de punto de venta. Aquí verás un resumen rápido de tu negocio.
        </p>
      </header>

      {/* CARDS RESUMEN */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card
          variant="default"
          className="group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-indigo-900/40 text-white border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.12)] animate-slide-up delay-100"
        >
          <CardContent className="flex items-center justify-between py-4">
            <div className="animate-fade-in">
              <p className="text-sm text-slate-300 font-medium">Ventas hoy</p>
              <p className="mt-2 text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">0</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6 border border-blue-400/30">
              <ShoppingCart className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>

        <Card
          variant="default"
          className="group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-emerald-900/40 via-green-800/30 to-teal-900/40 text-white border border-emerald-400/30 shadow-[0_0_15px_rgba(16,185,129,0.12)] animate-slide-up delay-200"
        >
          <CardContent className="flex items-center justify-between py-4">
            <div className="animate-fade-in">
              <p className="text-sm text-slate-300 font-medium">Productos</p>
              <p className="mt-2 text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">0</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6 border border-emerald-400/30">
              <Package className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>

        <Card
          variant="default"
          className="group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-purple-900/40 via-violet-800/30 to-fuchsia-900/40 text-white border border-purple-400/30 shadow-[0_0_15px_rgba(168,85,247,0.12)] animate-slide-up delay-300"
        >
          <CardContent className="flex items-center justify-between py-4">
            <div className="animate-fade-in">
              <p className="text-sm text-slate-300 font-medium">Clientes</p>
              <p className="mt-2 text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">0</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6 border border-purple-400/30">
              <Users className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>

        <Card
          variant="default"
          className="group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-amber-900/40 via-yellow-800/30 to-orange-900/40 text-white border border-amber-400/30 shadow-[0_0_15px_rgba(245,158,11,0.12)] animate-slide-up delay-400"
        >
          <CardContent className="flex items-center justify-between py-4">
            <div className="animate-fade-in">
              <p className="text-sm text-slate-300 font-medium">Ingresos</p>
              <p className="mt-2 text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">S/ 0.00</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6 border border-amber-400/30">
              <Wallet className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ACTIVIDAD RECIENTE */}
      <section className="animate-slide-up delay-500">
        <Card
          variant="outline"
          className="border-blue-400/30 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300"
        >
          <CardHeader>
            <CardTitle className="text-white">Actividad reciente</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-3 py-10 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 animate-pulse-slow border border-blue-400/30">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <p className="font-medium text-slate-200">Todavía no hay actividad reciente</p>
            <p className="text-sm text-slate-400">
              Cuando registres ventas, clientes o productos, verás aquí un resumen de tus últimos movimientos.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
