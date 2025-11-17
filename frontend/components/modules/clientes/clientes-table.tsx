/**
 * Tabla de clientes con acciones
 */

'use client';

import React from 'react';
import { Client } from '@/lib/types';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Users, Mail, Phone } from 'lucide-react';

interface ClientesTableProps {
  clientes: Client[];
  onEdit: (cliente: Client) => void;
  onDelete: (cliente: Client) => void;
  isLoading?: boolean;
}

export function ClientesTable({
  clientes,
  onEdit,
  onDelete,
  isLoading = false,
}: ClientesTableProps) {
  /**
   * Loader animado (moderado y consistente con login)
   */
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 rounded-full border-4 border-gray-300 border-t-purple-600 animate-spin" />
      </div>
    );
  }

  /**
   * Vista sin datos
   */
  if (clientes.length === 0) {
    return (
      <div className="text-center py-12 opacity-80">
        <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-600">No hay clientes registrados</p>
      </div>
    );
  }

  return (
    <Table className="rounded-xl border bg-white shadow-sm">
      <TableHeader>
        <TableRow className="bg-gray-100/70">
          <TableHead className="font-semibold text-gray-700">Documento</TableHead>
          <TableHead className="font-semibold text-gray-700">Nombre</TableHead>
          <TableHead className="font-semibold text-gray-700">Contacto</TableHead>
          <TableHead className="font-semibold text-gray-700">Dirección</TableHead>
          <TableHead className="font-semibold text-gray-700">Estado</TableHead>
          <TableHead className="text-right font-semibold text-gray-700">
            Acciones
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {clientes.map((cliente) => (
          <TableRow
            key={cliente.id}
            className="hover:bg-purple-50/50 transition-colors"
          >
            {/* DOCUMENTO */}
            <TableCell>
              <p className="font-medium text-gray-800">{cliente.numero_documento}</p>
              <p className="text-xs text-gray-500">{cliente.tipo_documento}</p>
            </TableCell>

            {/* NOMBRE */}
            <TableCell>
              <p className="font-medium text-gray-800">
                {cliente.apellido
                  ? `${cliente.nombre} ${cliente.apellido}`
                  : cliente.nombre}
              </p>
            </TableCell>

            {/* CONTACTO */}
            <TableCell>
              <div className="space-y-1">
                {cliente.email && (
                  <div className="flex items-center gap-1 text-sm text-gray-700">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="truncate max-w-xs">{cliente.email}</span>
                  </div>
                )}

                {cliente.telefono && (
                  <div className="flex items-center gap-1 text-sm text-gray-700">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>{cliente.telefono}</span>
                  </div>
                )}

                {!cliente.email && !cliente.telefono && (
                  <span className="text-xs text-gray-400">Sin contacto</span>
                )}
              </div>
            </TableCell>

            {/* DIRECCIÓN */}
            <TableCell>
              {cliente.direccion ? (
                <p className="text-sm text-gray-700 truncate max-w-xs">
                  {cliente.direccion}
                </p>
              ) : (
                <span className="text-xs text-gray-400">Sin dirección</span>
              )}
            </TableCell>

            {/* ESTADO */}
            <TableCell>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  cliente.activo
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {cliente.activo ? 'Activo' : 'Inactivo'}
              </span>
            </TableCell>

            {/* ACCIONES */}
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onEdit(cliente)}
                  className="hover:bg-purple-100"
                >
                  <Edit className="w-4 h-4 text-gray-700" />
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onDelete(cliente)}
                  className="hover:bg-red-100"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
