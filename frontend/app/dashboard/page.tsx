﻿'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingCart, Users, Wallet } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { roleLabels } from '@/lib/roles/role-config';

export default function DashboardPage() {
  const { user } = useAuth();

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
              <p className="mt-2 text-3xl font-bold text-white">0</p>
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
              <p className="mt-2 text-3xl font-bold text-white">0</p>
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
              <p className="mt-2 text-3xl font-bold text-white">0</p>
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
              <p className="mt-2 text-3xl font-bold text-white">S/ 0.00</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/40">
              <Wallet className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ACTIVIDAD RECIENTE */}
      <section className="animate-slide-up delay-200">
        <Card
          variant="outline"
          className="rounded-2xl border border-slate-700/70 bg-slate-950/80 backdrop-blur-xl shadow-[0_12px_35px_rgba(15,23,42,0.85)]"
        >
          <CardHeader>
            <CardTitle className="text-white">Actividad reciente</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-3 py-10 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/40">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <p className="font-medium text-slate-200">Todavía no hay actividad reciente</p>
            <p className="text-sm text-slate-400 max-w-xl">
              Cuando registres ventas, clientes o productos, verás aquí un resumen de tus últimos movimientos.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
