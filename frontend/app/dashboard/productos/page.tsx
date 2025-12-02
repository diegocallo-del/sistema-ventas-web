"use client";

import { useState, useEffect } from "react";
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
import { ProductosTable } from "@/components/modules/productos/productos-table";
import { Dialog } from "@/components/ui/dialog";
import { useAuth } from "@/hooks/use-auth";
import { UserRole } from "@/lib/types/usuario";
import { CreateProductData, UpdateProductData, Product } from "@/lib/types";
import { createProduct, getProducts, updateProduct, deleteProduct } from "@/lib/services/producto-service";

export default function ProductosPage() {
  const router = useRouter();
  const { user } = useAuth();
  const isClient = user?.rol === UserRole.CLIENTE;

  const [productos, setProductos] = useState<Product[]>([]);
  const [loadingLista, setLoadingLista] = useState(false);
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("all");
  const [estado, setEstado] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [productoEditando, setProductoEditando] = useState<Product | null>(null);

  // Cargar productos del backend
  async function cargarProductos() {
    setLoadingLista(true);
    setError(null);

    try {
      const response = await getProducts({});
      setProductos(response.items);
    } catch (err: any) {
      console.warn('Error al cargar productos', err);
      setError(err?.message || 'Error al cargar productos');
    } finally {
      setLoadingLista(false);
    }
  }

  useEffect(() => {
    void cargarProductos();
  }, []);

  // Filtrar productos localmente
  const productosFiltrados = productos.filter((p) => {
    const matchSearch = !search || p.nombre.toLowerCase().includes(search.toLowerCase()) || p.codigo.toLowerCase().includes(search.toLowerCase());
    const matchCategoria = categoria === "all" || !categoria || p.categoria === categoria;
    const matchEstado = !estado || (estado === 'activo' && p.activo) || (estado === 'inactivo' && !p.activo) || (estado === 'agotado' && p.stock === 0);
    return matchSearch && matchCategoria && matchEstado;
  });

  async function handleEditarProducto(producto: Product) {
    setProductoEditando(producto);
    setIsAdminModalOpen(true);
  }

  async function handleEliminarProducto(producto: Product) {
    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar el producto "${producto.nombre}"?`
    );
    if (!confirmar) return;

    setIsSaving(true);
    setError(null);

    try {
      await deleteProduct(producto.id);
      await cargarProductos();
    } catch (err: any) {
      console.warn('Error al eliminar producto', err);
      setError(err?.message || 'Error al eliminar producto');
    } finally {
      setIsSaving(false);
    }
  }

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
              <SelectValue placeholder="Todas las categorías" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-blue-400/30">
              <SelectItem value="all">Todas las categorías</SelectItem>
              {/* Aquí se cargarían dinámicamente desde el backend */}
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

      {/* Mensaje de error */}
      {error && (
        <div className="mb-4 rounded-xl border border-red-400/30 bg-red-900/20 px-4 py-2 text-sm text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.2)] animate-slide-up">
          {error}
        </div>
      )}

      {/* ----------------------- TABLA DE PRODUCTOS ----------------------- */}
      <Card className="border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-slate-900/60 backdrop-blur-xl animate-slide-up delay-200">
        <CardHeader>
          <CardTitle className="text-white">Listado de productos</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="border-t border-blue-400/30 pt-4">
            {!isClient && (
              <ProductosTable
                productos={productosFiltrados}
                onEdit={handleEditarProducto}
                onDelete={handleEliminarProducto}
                isLoading={loadingLista}
              />
            )}
            {isClient && (
              <div className="text-center py-12">
                <p className="text-slate-300 text-sm">
                  Vista de productos para clientes - en desarrollo
                </p>
              </div>
            )}
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
          onClose={() => {
            setIsAdminModalOpen(false);
            setProductoEditando(null);
          }}
          title={productoEditando ? "Editar producto" : "Nuevo producto"}
          size="lg"
        >
          <ProductoForm
            producto={productoEditando}
            onSubmit={async (data: CreateProductData | UpdateProductData) => {
              setIsSaving(true);
              setError(null);
              try {
                if (productoEditando) {
                  await updateProduct(productoEditando.id, data as UpdateProductData);
                } else {
                  await createProduct(data as CreateProductData);
                }
                setIsAdminModalOpen(false);
                setProductoEditando(null);
                await cargarProductos();
              } catch (error: any) {
                console.error('Error al guardar producto:', error);
                setError(error?.message || 'Error al guardar producto');
                throw error;
              } finally {
                setIsSaving(false);
              }
            }}
            onCancel={() => {
              setIsAdminModalOpen(false);
              setProductoEditando(null);
            }}
            isLoading={isSaving}
          />
        </Dialog>
      )}
    </div>
  );
}
