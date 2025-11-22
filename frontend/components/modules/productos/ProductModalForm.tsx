'use client';

/**
 * ProductModalForm.tsx
 *
 * Formulario para crear o editar un producto dentro de un modal.
 * Completamente consistente con estilo de ClienteForm y dashboard.
 */

import React, { useEffect, useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createProducto, updateProducto } from '@/lib/productos';
import { isValidProductName, isValidPrice, isValidStock } from '@/lib/validators';
import { Image, Upload, X } from 'lucide-react';

interface ProductModalInitialData {
  id?: number;
  nombre?: string;
  precio?: number;
  stock?: number;
  descripcion?: string | null;
  imagen?: string | null;
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
  imagen: File | null;
  imagenPreview: string | null;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ProductModalForm({ initialData, onSaved }: ProductModalFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<FormState>(() => ({
    nombre: initialData?.nombre ?? '',
    precio: initialData?.precio != null ? String(initialData.precio) : '',
    stock: initialData?.stock != null ? String(initialData.stock) : '',
    descripcion: initialData?.descripcion ?? '',
    imagen: null,
    imagenPreview: initialData?.imagen ?? null,
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
        imagen: null,
        imagenPreview: initialData.imagen ?? null,
      });
      setErrors({});
      setSubmitError(null);
    }
  }, [initialData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tipo de archivo
      if (!file.type.startsWith('image/')) {
        setSubmitError('Por favor selecciona un archivo de imagen válido');
        return;
      }
      
      // Validar tamaño (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitError('La imagen no debe ser mayor a 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prev => ({
          ...prev,
          imagen: file,
          imagenPreview: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
      setSubmitError(null);
    }
  };

  const handleRemoveImage = () => {
    setForm(prev => ({
      ...prev,
      imagen: null,
      imagenPreview: null,
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

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

    // Preparar payload - si hay imagen, incluirla como File para FormData
    const payload: any = {
      nombre: form.nombre.trim(),
      precio: precioNumber,
      stock: stockNumber,
      descripcion: form.descripcion.trim() || null,
    };

    // Si hay una imagen nueva, incluirla en el payload
    // El backend debe aceptar FormData o el File se convertirá según la implementación
    if (form.imagen) {
      payload.imagen = form.imagen;
    } else if (form.imagenPreview && !form.imagen) {
      // Si hay preview pero no hay archivo nuevo, mantener la URL existente
      payload.imagen = form.imagenPreview;
    }

    try {
      setIsSubmitting(true);

      if (initialData?.id) {
        await updateProducto(initialData.id, payload as any);
      } else {
        await createProducto(payload as any);
      }

      if (!initialData?.id) {
        setForm({ nombre: '', precio: '', stock: '', descripcion: '', imagen: null, imagenPreview: null });
        setErrors({});
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitError && (
        <p className="text-sm text-red-500 bg-red-900/20 border border-red-500/40 rounded-xl px-3 py-2">
          {submitError}
        </p>
      )}

      {/* NOMBRE */}
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-200">
          Nombre <span className="text-red-400">*</span>
        </label>
        <Input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre del producto"
          className="bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        {errors.nombre && (
          <p className="text-xs text-red-400 mt-1">{errors.nombre}</p>
        )}
      </div>

      {/* PRECIO Y STOCK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-200">
            Precio (ej. 15.50) <span className="text-red-400">*</span>
          </label>
          <Input
            name="precio"
            type="number"
            step="0.01"
            value={form.precio}
            onChange={handleChange}
            placeholder="0.00"
            className="bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {errors.precio && (
            <p className="text-xs text-red-400 mt-1">{errors.precio}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-slate-200">
            Stock <span className="text-red-400">*</span>
          </label>
          <Input
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            placeholder="0"
            className="bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {errors.stock && (
            <p className="text-xs text-red-400 mt-1">{errors.stock}</p>
          )}
        </div>
      </div>

      {/* DESCRIPCIÓN */}
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-200">
          Descripción
        </label>
        <textarea
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Descripción opcional del producto"
        />
      </div>

      {/* IMAGEN */}
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-200">
          Imagen del producto
        </label>
        
        {form.imagenPreview ? (
          <div className="relative inline-block">
            <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src={form.imagenPreview}
                alt="Vista previa"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-1 right-1 p-1 rounded-full bg-red-500/80 hover:bg-red-500 text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-full border-2 border-dashed border-white/20 rounded-xl p-6 text-center cursor-pointer hover:border-purple-500/50 transition-colors bg-white/5 hover:bg-white/10"
          >
            <Upload className="w-8 h-8 mx-auto mb-2 text-slate-400" />
            <p className="text-sm text-slate-300 mb-1">Haz clic para subir una imagen</p>
            <p className="text-xs text-slate-400">JPG, PNG (máx. 5MB)</p>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {/* BOTÓN */}
      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          isLoading={isSubmitting}
          size="md"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6"
        >
          {initialData?.id ? "Actualizar producto" : "Crear producto"}
        </Button>
      </div>
    </form>
  );
}
