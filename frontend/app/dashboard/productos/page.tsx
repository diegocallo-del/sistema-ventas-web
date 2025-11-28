"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, ShoppingCart } from "lucide-react";
import ProductModalForm from "@/components/modules/productos/ProductModalForm";
import { ProductoForm } from "@/components/modules/productos/producto-form";
import { Dialog } from "@/components/ui/dialog";
import { useAuth } from "@/hooks/use-auth";
import { UserRole } from "@/lib/types/usuario";
import { CreateProductData, UpdateProductData } from "@/lib/types";
import { createProduct } from "@/lib/services/producto-service";
import { useAuthStore } from "@/store/auth-store";

export default function ProductosPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { token } = useAuthStore();
  const isClient = user?.rol === UserRole.CLIENTE;

  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* ----------------------- ENCABEZADO ----------------------- */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-slide-down">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {isClient ? "Comprar y vender productos" : "Productos"}
          </h1>
          <p className="text-slate-300">
            {isClient
              ? "Explora los productos disponibles y arma tu compra o venta de forma sencilla."
              : "Gestión completa de productos, inventario y precios del sistema."}
          </p>
        </div>

        {isClient ? (
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              className="gap-2 bg-blue-600/40 hover:bg-blue-600/50 border border-blue-400/30 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300"
              onClick={() => setIsCreateModalOpen(true)}
            >
              <Plus className="w-4 h-4" />
              Crear mi producto
            </Button>
            <Button
              className="gap-2 bg-blue-600/40 hover:bg-blue-600/50 border border-blue-400/30 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300"
              onClick={() => router.push("/dashboard/ventas")}
            >
              <ShoppingCart className="w-4 h-4" />
              Ir a mis compras y ventas
            </Button>
          </div>
        ) : (
          <Button 
            className="gap-2 bg-blue-600/40 hover:bg-blue-600/50 border border-blue-400/30 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300"
            onClick={() => setIsAdminModalOpen(true)}
          >
            <Plus className="w-4 h-4" />
            Nuevo producto
          </Button>
        )}
      </header>

      {/* ----------------------- FILTROS ----------------------- */}
      <Card className="border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-slate-900/60 backdrop-blur-xl animate-slide-up delay-100">
        <CardHeader>
          <CardTitle className="text-white">Filtros</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* BUSCADOR */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Buscar producto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-slate-800/50 border-blue-400/30 text-white focus:ring-blue-400/50 focus:border-blue-400/50"
            />
          </div>

          {/* CATEGORÍA */}
          <Select value={categoria} onValueChange={setCategoria}>
            <SelectTrigger className="bg-slate-800/50 border-blue-400/30 text-white focus:ring-blue-400/50">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-blue-400/30">
              <SelectItem value="bebidas">Bebidas</SelectItem>
              <SelectItem value="snacks">Snacks</SelectItem>
              <SelectItem value="postres">Postres</SelectItem>
              <SelectItem value="menu">Menú</SelectItem>
            </SelectContent>
          </Select>

          {/* ESTADO */}
          <Select value={estado} onValueChange={setEstado}>
            <SelectTrigger className="bg-slate-800/50 border-blue-400/30 text-white focus:ring-blue-400/50">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-blue-400/30">
              <SelectItem value="activo">Activo</SelectItem>
              <SelectItem value="inactivo">Inactivo</SelectItem>
              <SelectItem value="agotado">Agotado</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* ----------------------- TABLA DE PRODUCTOS ----------------------- */}
      <Card className="border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-slate-900/60 backdrop-blur-xl animate-slide-up delay-200">
        <CardHeader>
          <CardTitle className="text-white">Listado de productos</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="border-t border-blue-400/30 pt-4">
            <p className="text-slate-300 text-sm">
              Aquí irá la tabla de productos.  
              Esta tarjeta ya está preparada para integrar una tabla dinámica (DataTable) con acciones como editar, eliminar, stock y precios.
            </p>

            <div className="mt-4 p-4 bg-blue-900/20 rounded-xl text-slate-300 border border-blue-400/20">
              <span className="font-semibold text-blue-300">Sugerencia:</span> puedes integrar aquí tu componente de tabla o un DataTable de Shadcn para una experiencia más profesional.
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal para clientes - formulario simplificado */}
      {isClient && (
        <Dialog
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          title="Crear mi producto"
        >
          <ProductModalForm
            onSaved={() => {
              setIsCreateModalOpen(false);
            }}
          />
        </Dialog>
      )}

      {/* Modal para admin/supervisor/vendedor - formulario completo */}
      {!isClient && (
        <Dialog
          isOpen={isAdminModalOpen}
          onClose={() => setIsAdminModalOpen(false)}
          title="Nuevo producto"
          size="lg"
        >
          <ProductoForm
            producto={null}
            onSubmit={async (data: CreateProductData | UpdateProductData) => {
              if (!token) {
                console.error('No hay token de autenticación');
                return;
              }
              
              setIsSaving(true);
              try {
                await createProduct(data as CreateProductData, token);
                setIsAdminModalOpen(false);
                // Aquí podrías recargar la lista de productos si es necesario
              } catch (error) {
                console.error('Error al crear producto:', error);
                throw error;
              } finally {
                setIsSaving(false);
              }
            }}
            onCancel={() => setIsAdminModalOpen(false)}
            isLoading={isSaving}
          />
        </Dialog>
      )}
    </div>
  );
}
