﻿
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingCart, Users, Wallet } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-secondary-900">Dashboard</h1>
        <p className="text-secondary-600">
          Bienvenido al sistema de punto de venta. Aquí verás un resumen rápido de tu negocio.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card variant="elevated" className="hover:shadow-xl transition-shadow">
          <CardContent className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm text-secondary-600">Ventas hoy</p>
              <p className="mt-2 text-3xl font-bold text-secondary-900">0</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <ShoppingCart className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated" className="hover:shadow-xl transition-shadow">
          <CardContent className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm text-secondary-600">Productos</p>
              <p className="mt-2 text-3xl font-bold text-secondary-900">0</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <Package className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated" className="hover:shadow-xl transition-shadow">
          <CardContent className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm text-secondary-600">Clientes</p>
              <p className="mt-2 text-3xl font-bold text-secondary-900">0</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <Users className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated" className="hover:shadow-xl transition-shadow">
          <CardContent className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm text-secondary-600">Ingresos</p>
              <p className="mt-2 text-3xl font-bold text-secondary-900">S/ 0.00</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <Wallet className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Actividad reciente</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-3 py-10 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-500">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <p className="font-medium text-secondary-700">Todavía no hay actividad reciente</p>
            <p className="text-sm text-secondary-500">
              Cuando registres ventas, clientes o productos, verás aquí un resumen de tus últimos movimientos.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
