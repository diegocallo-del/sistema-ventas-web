'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Plus, Search } from 'lucide-react';

export default function ProductosPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ----------------------- ENCABEZADO ----------------------- */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-secondary-900">
            Productos
          </h1>
          <p className="text-secondary-600">
            Gestión completa de productos, inventario y precios del sistema.
          </p>
        </div>

        <Button className="gap-2 shadow-md shadow-secondary-200 hover:shadow-lg hover:shadow-secondary-300 transition-all">
          <Plus className="w-4 h-4" />
          Nuevo producto
        </Button>
      </header>

      {/* ----------------------- FILTROS ----------------------- */}
      <Card className="border-secondary-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-secondary-900">Filtros</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* BUSCADOR */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
            <Input
              placeholder="Buscar producto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 focus:ring-secondary-400"
            />
          </div>

          {/* CATEGORÍA */}
          <Select
            defaultValue=""
            aria-label="Categoría"
            className="focus:ring-secondary-400"
          >
            <option value="" disabled>
              Categoría
            </option>
            <option value="bebidas">Bebidas</option>
            <option value="snacks">Snacks</option>
            <option value="postres">Postres</option>
            <option value="menu">Menú</option>
          </Select>

          {/* ESTADO */}
          <Select
            defaultValue=""
            aria-label="Estado"
            className="focus:ring-secondary-400"
          >
            <option value="" disabled>
              Estado
            </option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
            <option value="agotado">Agotado</option>
          </Select>
        </CardContent>
      </Card>

      {/* ----------------------- TABLA DE PRODUCTOS ----------------------- */}
      <Card className="border-secondary-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-secondary-900">Listado de productos</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="border-t border-secondary-200 pt-4">
            <p className="text-secondary-500 text-sm">
              Aquí irá la tabla de productos.  
              Esta tarjeta ya está preparada para integrar una tabla dinámica (DataTable) con acciones como editar, eliminar, stock y precios.
            </p>

            <div className="mt-4 p-4 bg-secondary-50 rounded-xl text-secondary-700">
              <span className="font-semibold">Sugerencia:</span> puedes integrar aquí tu componente de tabla o un DataTable de Shadcn para una experiencia más profesional.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
