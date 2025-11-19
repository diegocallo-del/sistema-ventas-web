'use client';

/**
 * ProductModalForm.tsx
 *
 * Formulario para crear o editar un producto dentro de un modal.
 * Completamente consistente con estilo de ClienteForm y dashboard.
 */

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createProducto, updateProducto } from '@/lib/productos';
import { isValidProductName, isValidPrice, isValidStock } from '@/lib/validators';

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
  precio: string;
  stock: string;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

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
    if (!form.precio.trim()) {
      nextErrors.precio = 'El precio es requerido';
    } else if (Number.isNaN(precioNumber)) {
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

      if (!initialData?.id) {
        setForm({ nombre: '', precio: '', stock: '', descripcion: '' });
        setErrors({});
      }

      onSaved?.();
    } catch (err: any) {
      const apiMessage = err?.response?.data?.message as string | undefined;
      setSubmitError(apiMessage || 'Error al guardar el producto');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {submitError}
        </p>
      )}

      {/* NOMBRE */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Nombre <span className="text-red-500">*</span>
        </label>
        <Input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre del producto"
        />
        {errors.nombre && (
          <p className="text-xs text-red-500 mt-1">{errors.nombre}</p>
        )}
      </div>

      {/* PRECIO */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Precio (ej. 15.50) <span className="text-red-500">*</span>
        </label>
        <Input
          name="precio"
          type="number"
          step="0.01"
          value={form.precio}
          onChange={handleChange}
          placeholder="0.00"
        />
        {errors.precio && (
          <p className="text-xs text-red-500 mt-1">{errors.precio}</p>
        )}
      </div>

      {/* STOCK */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Stock <span className="text-red-500">*</span>
        </label>
        <Input
          name="stock"
          type="number"
          value={form.stock}
          onChange={handleChange}
          placeholder="0"
        />
        {errors.stock && (
          <p className="text-xs text-red-500 mt-1">{errors.stock}</p>
        )}
      </div>

      {/* DESCRIPCIÓN */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
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

      {/* BOTÓN */}
      <div className="flex justify-end">
        <Button
          type="submit"
          isLoading={isSubmitting}
          size="md"
          variant="primary"
          disabled={isSubmitting}
        >
          {initialData?.id ? 'Actualizar producto' : 'Crear producto'}
        </Button>
      </div>
    </form>
  );
}
