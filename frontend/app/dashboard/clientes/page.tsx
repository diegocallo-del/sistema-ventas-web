'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClientesTable } from '@/components/modules/clientes/clientes-table';
import { ClienteForm } from '@/components/modules/clientes/cliente-form';
import { Client, CreateClientData, UpdateClientData } from '@/lib/types';
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from '@/lib/services/cliente-service';
import { Search, Users, UserPlus, Eye, Edit3 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Client[]>([]);
  const [clientesFiltrados, setClientesFiltrados] = useState<Client[]>([]);
  const [loadingLista, setLoadingLista] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [clienteEditando, setClienteEditando] = useState<Client | null>(null);
  const [search, setSearch] = useState("");
  const [estado, setEstado] = useState("all");

  const isBusy = loadingLista || saving;

  // Aplicar filtros cuando cambian los datos
  useEffect(() => {
    let filtrados = clientes;

    if (search) {
      filtrados = filtrados.filter(cliente =>
        cliente.nombre.toLowerCase().includes(search.toLowerCase()) ||
        cliente.apellido?.toLowerCase().includes(search.toLowerCase()) ||
        cliente.numero_documento.includes(search) ||
        cliente.email?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (estado === 'activo') {
      filtrados = filtrados.filter(cliente => cliente.activo);
    } else if (estado === 'inactivo') {
      filtrados = filtrados.filter(cliente => !cliente.activo);
    }

    setClientesFiltrados(filtrados);
  }, [clientes, search, estado]);

  // ----------------------- Carga la lista de clientes -----------------------
  async function cargarClientes() {
    setLoadingLista(true);
    setError(null);

    try {
      const response = await getClients({});
      setClientes(response.items);
    } catch (err: any) {
      console.warn('Error al cargar clientes', err);
      setError(err?.message || 'Error al cargar clientes');
    } finally {
      setLoadingLista(false);
    }
  }

  useEffect(() => {
    void cargarClientes();
  }, []);

  // ----------------------- Acciones de formulario -----------------------
  function handleNuevoCliente() {
    setClienteEditando(null);
    setShowForm(true);
  }

  function handleEditarCliente(cliente: Client) {
    setClienteEditando(cliente);
    setShowForm(true);
  }

  async function handleEliminarCliente(cliente: Client) {
    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar al cliente "${cliente.nombre} ${cliente.apellido ?? ''}"?`
    );
    if (!confirmar) return;

    setSaving(true);
    setError(null);

    try {
      await deleteClient(cliente.id);
      await cargarClientes();
    } catch (err: any) {
      console.warn('Error al eliminar cliente', err);
      setError(err?.message || 'Error al eliminar cliente');
    } finally {
      setSaving(false);
    }
  }

  async function handleSubmitFormulario(
    data: CreateClientData | UpdateClientData
  ): Promise<void> {
    setSaving(true);
    setError(null);

    try {
      if (clienteEditando) {
        await updateClient(clienteEditando.id, data as UpdateClientData);
      } else {
        await createClient(data as CreateClientData);
      }

      setShowForm(false);
      setClienteEditando(null);
      await cargarClientes();
    } catch (err: any) {
      console.warn('Error al guardar cliente', err);
      setError(err?.message || 'Error al guardar cliente');
    } finally {
      setSaving(false);
    }
  }

  function handleCancelarFormulario() {
    setShowForm(false);
    setClienteEditando(null);
  }

  // ----------------------- Render principal -----------------------
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <header className="animate-slide-down">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white flex items-center gap-3">
              <Users className="w-8 h-8" />
              Clientes del Sistema
            </h1>
            <p className="text-slate-300">
              Gestión completa de clientes, contactos y datos de facturación.
            </p>
          </div>
        </div>
      </header>

      {/* ESTADÍSTICAS RÁPIDAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-slate-900/60 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-300">{clientes.length}</p>
                <p className="text-slate-300 text-sm">Total Clientes</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-400/30 shadow-[0_0_15px_rgba(34,197,94,0.1)] bg-slate-900/60 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-300">
                  {clientes.filter(c => c.activo).length}
                </p>
                <p className="text-slate-300 text-sm">Clientes Activos</p>
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
                  {clientes.filter(c => c.telefono && c.email).length}
                </p>
                <p className="text-slate-300 text-sm">Con Contacto Completo</p>
              </div>
              <Edit3 className="w-6 h-6 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mensaje de error */}
      {error && (
        <div className="mb-4 rounded-xl border border-red-400/30 bg-red-900/20 px-4 py-2 text-sm text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.2)] animate-slide-up">
          {error}
        </div>
      )}

      {/* CONTENEDOR PRINCIPAL */}
      <Card className="border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-slate-900/60 backdrop-blur-xl">
        <CardHeader>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="w-5 h-5" />
                Lista de Clientes
              </CardTitle>
              <p className="text-slate-400 text-sm mt-1">
                Mostrando {clientesFiltrados.length} de {clientes.length} clientes
              </p>
            </div>
            <Button
              onClick={handleNuevoCliente}
              disabled={isBusy}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Nuevo Cliente
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* FILTROS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* BUSCADOR */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Buscar por nombre, documento o email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-slate-800/50 border-blue-400/30 text-white focus:ring-blue-400/50 focus:border-blue-400/50"
              />
            </div>

            {/* ESTADO */}
            <Select value={estado} onValueChange={setEstado}>
              <SelectTrigger className="bg-slate-800/50 border-blue-400/30 text-white focus:ring-blue-400/50">
                <SelectValue placeholder="Todos los estados" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-blue-400/30">
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="activo">Activos</SelectItem>
                <SelectItem value="inactivo">Inactivos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* FORMULARIO */}
          {showForm && (
            <div className="border border-blue-400/30 rounded-xl p-4 bg-slate-800/40 backdrop-blur-sm animate-slide-up">
              <ClienteForm
                cliente={clienteEditando}
                onSubmit={handleSubmitFormulario}
                onCancel={handleCancelarFormulario}
                isLoading={saving}
              />
            </div>
          )}

          {/* TABLA DE CLIENTES */}
          <ClientesTable
            clientes={clientesFiltrados}
            onEdit={handleEditarCliente}
            onDelete={handleEliminarCliente}
            isLoading={loadingLista}
          />
        </CardContent>
      </Card>
    </div>
  );
}
