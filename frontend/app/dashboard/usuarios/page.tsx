"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UsuariosPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* ENCABEZADO */}
      <header className="animate-slide-down">
        <h1 className="text-3xl font-bold mb-2 text-white">Usuarios</h1>
        <p className="text-slate-300 mb-6">
          Gestión de usuarios del sistema. Aquí el administrador y el supervisor podrán
          controlar a los vendedores y otros roles cuando el backend esté conectado.
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <Card className="border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-slate-900/60 backdrop-blur-xl animate-slide-up delay-100">
        <CardHeader>
          <CardTitle className="text-white">Listado de usuarios</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 text-sm">
            Esta sección está preparada para listar y filtrar usuarios (por ejemplo, vendedores,
            supervisores y clientes). Cuando implementes el backend, aquí se podrá conectar la
            API de usuarios para gestionar el equipo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}