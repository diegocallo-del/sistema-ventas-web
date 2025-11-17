'use client';

/**
 * ProductModalForm.tsx
 *
 * Formulario para crear o editar un producto dentro de un modal.
 * Implementado con estado controlado y validadores internos del proyecto,
 * sin dependencias externas como react-hook-form, zod o react-hot-toast.
 */

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createProducto, updateProducto } from '@/lib/productos';
import { isValidProductName, isValidPrice, isValidStock } from '@/lib/validators';

// Datos mínimos que necesitamos para editar/crear un producto
interface ProductModalInitialData {
  id?: number;
  nombre?: string;
  precio?: number;
  stock?: number;
  descripcion?: string | null;
}

type ProductModalFormProps = {
  initialData?: ProductModalInitialData | null;
  onSaved?: () => void;
};

interface FormState {
  nombre: string;
  precio: string; // mantenemos como string para el input, convertimos a number al enviar
  stock: string;  // idem
  descripcion: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ProductModalForm({ initialData, onSaved }: ProductModalFormProps) {
  const [form, setForm] = useState<FormState>(() => ({
    nombre: initialData?.nombre ?? '',
    precio: initialData?.precio != null ? String(initialData.precio) : '',
    stock: initialData?.stock != null ? String(initialData.stock) : '',
    descripcion: initialData?.descripcion ?? '',
  }));

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Si cambian las props de entrada (editar otro producto), sincronizamos el estado
  useEffect(() => {
    if (initialData) {
      setForm({
        nombre: initialData.nombre ?? '',
        precio: initialData.precio != null ? String(initialData.precio) : '',
        stock: initialData.stock != null ? String(initialData.stock) : '',
        descripcion: initialData.descripcion ?? '',
      });
      setErrors({});
      setSubmitError(null);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    // limpiar error del campo
    if (errors[name as keyof FormState]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name as keyof FormState];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const nextErrors: FormErrors = {};

    const nombreTrim = form.nombre.trim();
    if (!nombreTrim) {
      nextErrors.nombre = 'El nombre es requerido';
    } else if (!isValidProductName(nombreTrim)) {
      nextErrors.nombre = 'El nombre del producto no es válido';
    }

    const precioNumber = Number(form.precio.replace(',', '.'));
    if (Number.isNaN(precioNumber)) {
      nextErrors.precio = 'El precio debe ser un número válido';
    } else if (!isValidPrice(precioNumber)) {
      nextErrors.precio = 'El precio está fuera del rango permitido';
    }

    const stockNumber = Number(form.stock);
    if (!form.stock.trim()) {
      nextErrors.stock = 'El stock es requerido';
    } else if (!Number.isInteger(stockNumber)) {
      nextErrors.stock = 'El stock debe ser un número entero';
    } else if (!isValidStock(stockNumber)) {
      nextErrors.stock = 'El stock está fuera del rango permitido';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    const precioNumber = Number(form.precio.replace(',', '.'));
    const stockNumber = Number(form.stock);

    const payload = {
      nombre: form.nombre.trim(),
      precio: precioNumber,
      stock: stockNumber,
      descripcion: form.descripcion.trim() || null,
    };

    try {
      setIsSubmitting(true);

      if (initialData?.id) {
        await updateProducto(initialData.id, payload as any);
      } else {
        await createProducto(payload as any);
      }

      // limpiar formulario después de guardar si es creación
      if (!initialData?.id) {
        setForm({
          nombre: '',
          precio: '',
          stock: '',
          descripcion: '',
        });
        setErrors({});
      }

      onSaved?.();
    } catch (err: any) {
      // mensaje de error simple y seguro
      const apiMessage = err?.response?.data?.message as string | undefined;
      setSubmitError(apiMessage || 'Error al guardar el producto');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {submitError}
        </p>
      )}

      <Input
        label="Nombre"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre del producto"
        error={errors.nombre}
      />

      <Input
        label="Precio (ej. 15.50)"
        name="precio"
        type="number"
        step="0.01"
        value={form.precio}
        onChange={handleChange}
        placeholder="0.00"
        error={errors.precio}
      />

      <Input
        label="Stock"
        name="stock"
        type="number"
        value={form.stock}
        onChange={handleChange}
        placeholder="0"
        error={errors.stock}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          rows={3}
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Descripción opcional del producto"
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          className="px-4 py-2 rounded-md"
        >
          {initialData?.id ? 'Actualizar producto' : 'Crear producto'}
        </Button>
      </div>
    </form>
  );
}
