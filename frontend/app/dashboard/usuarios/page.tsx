'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Users, UserPlus, Trash2 } from 'lucide-react';
import { getUsuarios, cambiarRolUsuario, eliminarUsuario as eliminarUsuarioService } from '@/lib/services/user-service';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  numeroDocumento?: string;
  rol: string;
  activo: boolean;
}

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cargandoRol, setCargandoRol] = useState<number | null>(null);
  useEffect(() => {
    loadUsuarios();
  }, []);

  const loadUsuarios = async () => {
    try {
      setIsLoading(true);
      const data = await getUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error('Error cargando usuarios:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const cambiarRol = async (usuarioId: number, nuevoRol: string) => {
    try {
      setCargandoRol(usuarioId);
      await cambiarRolUsuario(usuarioId, nuevoRol);
      await loadUsuarios();
    } catch (error) {
      console.error('Error cambiando rol:', error);
      alert('Error cambiando rol del usuario');
    } finally {
      setCargandoRol(null);
    }
  };

  const handleEliminarUsuario = async (usuarioId: number) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este usuario?')) return;

    try {
      await eliminarUsuarioService(usuarioId);
      await loadUsuarios();
    } catch (error) {
      console.error('Error eliminando usuario:', error);
      alert('Error eliminando usuario');
    }
  };

  const getRolContrario = (rolActual: string) => {
    return rolActual === 'VENDEDOR' ? 'CLIENTE' : 'VENDEDOR';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* HEADER */}
      <header className="animate-slide-down">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white flex items-center gap-3">
            <Users className="w-8 h-8" />
            Gestión de Usuarios
          </h1>
          <p className="text-slate-300">
            Administra usuarios con roles Vendedor y Cliente
          </p>
        </div>
      </header>

      {/* GRID DE USUARIOS */}
      <div className="border border-slate-700/70 rounded-2xl bg-slate-950/80 backdrop-blur-xl shadow-[0_12px_35px_rgba(15,23,42,0.85)] overflow-hidden animate-slide-up">
        <div className="px-6 py-4 border-b border-slate-700/70">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-semibold text-white">Usuarios Registrados</h2>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Mostrando {usuarios.length} usuarios registrados
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {usuarios.map((usuario, index) => (
              <div
                key={usuario.id}
                className="bg-white/5 rounded-lg border border-slate-700/70 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                {/* Header del card */}
                <div className="px-4 py-3 border-b border-slate-700/50 bg-slate-900/50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white text-sm truncate" title={usuario.nombre}>
                      {usuario.nombre}
                    </h3>
                    <Badge
                      className={`text-xs ${
                        usuario.activo
                          ? 'bg-green-500/20 text-green-300 border-green-400/30'
                          : 'bg-gray-500/20 text-gray-300 border-gray-400/30'
                      }`}
                    >
                      {usuario.activo ? 'ACTIVO' : 'INACTIVO'}
                    </Badge>
                  </div>
                </div>

                {/* Contenido del card */}
                <div className="px-4 py-4 space-y-3">
                  {/* Email */}
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-slate-300 text-sm truncate" title={usuario.email}>
                      {usuario.email}
                    </p>
                  </div>

                  {/* Rol actual */}
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-2">Rol Actual</p>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={`flex-1 ${
                          usuario.rol === 'VENDEDOR'
                            ? 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                            : 'bg-purple-500/20 text-purple-300 border-purple-400/30'
                        }`}
                      >
                        {usuario.rol}
                      </Badge>
                      <Button
                        size="sm"
                        onClick={() => cambiarRol(usuario.id, getRolContrario(usuario.rol))}
                        disabled={cargandoRol === usuario.id}
                        className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 flex-shrink-0"
                      >
                        {cargandoRol === usuario.id ? (
                          <Loader2 className="w-3 h-3 animate-spin" />
                        ) : (
                          'Cambiar'
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Footer con botón eliminar */}
                <div className="px-4 py-3 border-t border-slate-700/50 bg-slate-900/30">
                  <div className="flex justify-end">
                    <Button
                      size="sm"
                      onClick={() => handleEliminarUsuario(usuario.id)}
                      className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
                    >
                      <Trash2 className="w-3 h-3 mr-1" />
                      Eliminar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {usuarios.length === 0 && (
          <div className="px-6 py-12 text-center">
            <Users className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="mt-2 text-lg font-semibold text-slate-200">No hay usuarios registrados</h3>
            <p className="mt-1 text-sm text-slate-400">
              Comience creando usuarios con roles Vendedor o Cliente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
