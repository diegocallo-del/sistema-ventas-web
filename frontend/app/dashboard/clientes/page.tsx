'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ClientesTable } from '@/components/modules/clientes/clientes-table';
import { ClienteForm } from '@/components/modules/clientes/cliente-form';
import { Client, CreateClientData, UpdateClientData } from '@/lib/types';
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from '@/lib/services/cliente-service';

export default function ClientesPage() {

  const [clientes, setClientes] = useState<Client[]>([]);
  const [loadingLista, setLoadingLista] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [clienteEditando, setClienteEditando] = useState<Client | null>(null);

  const isBusy = loadingLista || saving;

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
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <header className="animate-slide-down">
        <h1 className="text-3xl font-bold mb-2 text-white">Clientes</h1>
        <p className="text-slate-300 mb-6">Gestión de clientes</p>
      </header>

      {/* Mensaje de error */}
      {error && (
        <div className="mb-4 rounded-xl border border-red-400/30 bg-red-900/20 px-4 py-2 text-sm text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.2)] animate-slide-up">
          {error}
        </div>
      )}

      {/* Contenedor principal */}
      <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] space-y-6 animate-slide-up delay-100">
        {/* Encabezado de tabla */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-white">Listado de clientes</h2>
          <Button 
            onClick={handleNuevoCliente} 
            disabled={isBusy}
            className="bg-blue-600/40 hover:bg-blue-600/50 border border-blue-400/30 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300"
          >
            Nuevo cliente
          </Button>
        </div>

        {/* Formulario */}
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

        {/* Tabla de clientes */}
        <ClientesTable
          clientes={clientes}
          onEdit={handleEditarCliente}
          onDelete={handleEliminarCliente}
          isLoading={loadingLista}
        />
      </div>
    </div>
  );
}
