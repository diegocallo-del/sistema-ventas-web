'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ClientesTable } from '@/components/modules/clientes/clientes-table';
import { ClienteForm } from '@/components/modules/clientes/cliente-form';
import { useAuthStore } from '@/store/auth-store';
import { Client, CreateClientData, UpdateClientData } from '@/lib/types';
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from '@/lib/services/cliente-service';

export default function ClientesPage() {
  const { token } = useAuthStore();

  const [clientes, setClientes] = useState<Client[]>([]);
  const [loadingLista, setLoadingLista] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [clienteEditando, setClienteEditando] = useState<Client | null>(null);

  const isBusy = loadingLista || saving;

  async function cargarClientes() {
    if (!token) return;

    setLoadingLista(true);
    setError(null);

    try {
      const response = await getClients({}, token);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  function handleNuevoCliente() {
    setClienteEditando(null);
    setShowForm(true);
  }

  function handleEditarCliente(cliente: Client) {
    setClienteEditando(cliente);
    setShowForm(true);
  }

  async function handleEliminarCliente(cliente: Client) {
    if (!token) return;
    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar al cliente "${cliente.nombre} ${cliente.apellido ?? ''}"?`,
    );
    if (!confirmar) return;

    setSaving(true);
    setError(null);

    try {
      await deleteClient(cliente.id, token);
      await cargarClientes();
    } catch (err: any) {
      console.warn('Error al eliminar cliente', err);
      setError(err?.message || 'Error al eliminar cliente');
    } finally {
      setSaving(false);
    }
  }

  async function handleSubmitFormulario(
    data: CreateClientData | UpdateClientData,
  ): Promise<void> {
    if (!token) return;

    setSaving(true);
    setError(null);

    try {
      if (clienteEditando) {
        await updateClient(clienteEditando.id, data as UpdateClientData, token);
      } else {
        await createClient(data as CreateClientData, token);
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

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold mb-2">Clientes</h1>
        <p className="text-gray-600 mb-6">Gestión de clientes</p>
      </header>

      {error && (
        <div className="mb-4 rounded border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Listado de clientes</h2>
          <Button onClick={handleNuevoCliente} disabled={isBusy}>
            Nuevo cliente
          </Button>
        </div>

        {showForm && (
          <div className="border border-secondary-200 rounded-lg p-4 bg-secondary-50">
            <ClienteForm
              cliente={clienteEditando}
              onSubmit={handleSubmitFormulario}
              onCancel={handleCancelarFormulario}
              isLoading={saving}
            />
          </div>
        )}

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
