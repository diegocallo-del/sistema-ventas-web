'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Client,
  CreateClientData,
  UpdateClientData,
  DocumentType,
} from '@/lib/types';
import { DOCUMENT_TYPE_OPTIONS } from '@/lib/constants';

import {
  isValidClientName,
  isValidDocument,
  isValidEmail,
  isValidPhone,
} from '@/lib/validators';

interface ClienteFormProps {
  cliente?: Client | null;
  onSubmit: (data: CreateClientData | UpdateClientData) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export function ClienteForm({
  cliente,
  onSubmit,
  onCancel,
  isLoading = false,
}: ClienteFormProps) {
  const [formData, setFormData] = useState({
    tipo_documento: DocumentType.DNI,
    numero_documento: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (cliente) {
      setFormData({
        tipo_documento: cliente.tipo_documento,
        numero_documento: cliente.numero_documento,
        nombre: cliente.nombre,
        apellido: cliente.apellido || '',
        email: cliente.email || '',
        telefono: cliente.telefono || '',
        direccion: cliente.direccion || '',
      });
    }
  }, [cliente]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.numero_documento.trim()) {
      newErrors.numero_documento = 'El número de documento es requerido';
    } else if (
      !isValidDocument(formData.tipo_documento, formData.numero_documento)
    ) {
      newErrors.numero_documento = 'Número de documento inválido';
    }

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (!isValidClientName(formData.nombre)) {
      newErrors.nombre = 'Debe tener entre 2 y 200 caracteres';
    }

    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (formData.telefono && !isValidPhone(formData.telefono)) {
      newErrors.telefono = 'Debe tener 9 dígitos y empezar con 9';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const data: CreateClientData | UpdateClientData = {
      tipo_documento: formData.tipo_documento,
      numero_documento: formData.numero_documento.trim(),
      nombre: formData.nombre.trim(),
      apellido: formData.apellido.trim() || undefined,
      email: formData.email.trim() || undefined,
      telefono: formData.telefono.trim() || undefined,
      direccion: formData.direccion.trim() || undefined,
    };

    await onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* DOCUMENTO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Tipo de Documento <span className="text-red-500">*</span>
          </label>

          <select
            name="tipo_documento"
            value={formData.tipo_documento}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            {DOCUMENT_TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Número de Documento <span className="text-red-500">*</span>
          </label>

          <Input
            name="numero_documento"
            value={formData.numero_documento}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="12345678"
          />

          {errors.numero_documento && (
            <p className="text-red-500 text-xs mt-1">
              {errors.numero_documento}
            </p>
          )}
        </div>
      </div>

      {/* NOMBRE - APELLIDO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Nombre <span className="text-red-500">*</span>
          </label>

          <Input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Juan"
          />

          {errors.nombre && (
            <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Apellido</label>

          <Input
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Pérez"
          />
        </div>
      </div>

      {/* EMAIL - TELEFONO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="correo@ejemplo.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Teléfono</label>
          <Input
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="987654321"
          />
          {errors.telefono && (
            <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>
          )}
        </div>
      </div>

      {/* DIRECCION */}
      <div>
        <label className="block text-sm font-medium mb-1">Dirección</label>
        <textarea
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          disabled={isLoading}
          rows={2}
          className="w-full rounded-lg border border-neutral-300 px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          placeholder="Dirección opcional"
        />
      </div>

      {/* BOTONES */}
      <div className="flex justify-end gap-3 pt-4">
  <Button
    type="button"
    variant="ghost"
    onClick={onCancel}
    disabled={isLoading}
    className="border border-secondary-300 hover:bg-secondary-100"
  >
    Cancelar
  </Button>

  <Button type="submit" disabled={isLoading}>
    {isLoading ? 'Guardando...' : cliente ? 'Actualizar' : 'Crear'}
  </Button>
</div>
    </form>
  );
}
