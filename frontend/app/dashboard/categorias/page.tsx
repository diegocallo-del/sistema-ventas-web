'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Layers, Plus, Edit, Trash2 } from 'lucide-react';
import { getCategorias, CategoriaDTO } from '@/lib/services/categoria-service';

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState<CategoriaDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCategorias();
  }, []);

  const loadCategorias = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getCategorias();
      setCategorias(data);
    } catch (err) {
      setError('Error al cargar las categorías');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
        <span className="ml-2 text-slate-300">Cargando categorías...</span>
      </div>
    );
  }

  if (error) {
    return (
      <Alert className="border-red-400/30 bg-red-900/20 text-red-300">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* ENCABEZADO */}
      <header className="animate-slide-down">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white flex items-center gap-3">
              <Layers className="w-8 h-8" />
              Categorías de Productos
            </h1>
            <p className="text-slate-300">
              Gestión de categorías para organizar los productos del sistema.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Categoría
          </Button>
        </div>
      </header>

      {/* ESTADÍSTICAS RÁPIDAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-slate-900/60 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-300">{categorias.length}</p>
                <p className="text-slate-300 text-sm">Total Categorías</p>
              </div>
              <Layers className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-400/30 shadow-[0_0_15px_rgba(34,197,94,0.1)] bg-slate-900/60 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-300">
                  {categorias.filter(c => c.activo !== false).length}
                </p>
                <p className="text-slate-300 text-sm">Categorías Activas</p>
              </div>
              <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-400/30 shadow-[0_0_15px_rgba(147,51,234,0.1)] bg-slate-900/60 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-purple-300">
                  {categorias.filter(c => c.categoriaPadre).length}
                </p>
                <p className="text-slate-300 text-sm">Subcategorías</p>
              </div>
              <div className="w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center">
                <Layers className="w-4 h-4 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* TABLA DE CATEGORÍAS */}
      <Card className="border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-slate-900/60 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Layers className="w-5 h-5" />
            Lista de Categorías
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700 hover:bg-slate-800/50">
                  <TableHead className="text-slate-300">ID</TableHead>
                  <TableHead className="text-slate-300">Nombre</TableHead>
                  <TableHead className="text-slate-300">Categoría Padre</TableHead>
                  <TableHead className="text-slate-300">Estado</TableHead>
                  <TableHead className="text-slate-300">Fecha Creación</TableHead>
                  <TableHead className="text-slate-300">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categorias.map((categoria) => (
                  <TableRow key={categoria.id} className="border-slate-700 hover:bg-slate-800/30">
                    <TableCell className="text-slate-300">#{categoria.id}</TableCell>
                    <TableCell className="font-medium text-white">{categoria.nombre}</TableCell>
                    <TableCell className="text-slate-400">
                      {categoria.categoriaPadre ? `Categoría #${categoria.categoriaPadre}` : 'Ninguna'}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={categoria.activo !== false ? 'default' : 'secondary'}
                        className={
                          categoria.activo !== false
                            ? 'bg-green-500/20 text-green-300 border-green-400/30'
                            : 'bg-red-500/20 text-red-300 border-red-400/30'
                        }
                      >
                        {categoria.activo !== false ? 'Activa' : 'Inactiva'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-400 text-sm">
                      {categoria.fechaCreacion
                        ? new Date(categoria.fechaCreacion).toLocaleDateString('es-ES')
                        : 'N/A'
                      }
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {categorias.length === 0 && (
            <div className="text-center py-8">
              <Layers className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-400">No hay categorías registradas en el sistema.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
