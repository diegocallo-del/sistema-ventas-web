'use client';

/**
 * Formulario para crear y editar productos
 */

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Product, CreateProductData, UpdateProductData } from '@/lib/types';
import {
  isValidProductCode,
  isValidProductName,
  isValidPrice,
  isValidStock,
} from '@/lib/validators';
import { Upload, X } from 'lucide-react';

interface ProductoFormProps {
  producto?: Product | null;
  onSubmit: (data: CreateProductData | UpdateProductData) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export function ProductoForm({
  producto,
  onSubmit,
  onCancel,
  isLoading = false,
}: ProductoFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: '',
    imagen: null as File | null,
    imagenPreview: null as string | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [imageError, setImageError] = useState<string | null>(null);

  useEffect(() => {
    if (producto) {
      setFormData({
        codigo: producto.codigo,
        nombre: producto.nombre,
        descripcion: producto.descripcion || '',
        precio: producto.precio.toString(),
        stock: producto.stock.toString(),
        categoria: producto.categoria || '',
        imagen: null,
        imagenPreview: producto.imagen || null,
      });
    }
  }, [producto]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tipo de archivo
      if (!file.type.startsWith('image/')) {
        setImageError('Por favor selecciona un archivo de imagen válido');
        return;
      }
      
      // Validar tamaño (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setImageError('La imagen no debe ser mayor a 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          imagen: file,
          imagenPreview: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
      setImageError(null);
    }
  };

  const handleRemoveImage = () => {
    setFormData(prev => ({
      ...prev,
      imagen: null,
      imagenPreview: null,
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setImageError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.codigo.trim()) {
      newErrors.codigo = 'El código es requerido';
    } else if (!isValidProductCode(formData.codigo)) {
      newErrors.codigo = 'El código debe tener entre 1 y 50 caracteres';
    }

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (!isValidProductName(formData.nombre)) {
      newErrors.nombre = 'El nombre debe tener entre 2 y 200 caracteres';
    }

    const precio = parseFloat(formData.precio);
    if (!formData.precio.trim()) {
      newErrors.precio = 'El precio es requerido';
    } else if (isNaN(precio) || !isValidPrice(precio)) {
      newErrors.precio = 'El precio debe ser un número válido mayor a 0';
    }

    const stock = parseInt(formData.stock);
    if (!formData.stock.trim()) {
      newErrors.stock = 'El stock es requerido';
    } else if (isNaN(stock) || !isValidStock(stock)) {
      newErrors.stock = 'El stock debe ser un número entero mayor o igual a 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const data: CreateProductData | UpdateProductData = {
      codigo: formData.codigo.trim(),
      nombre: formData.nombre.trim(),
      descripcion: formData.descripcion.trim() || undefined,
      precio: parseFloat(formData.precio),
      stock: parseInt(formData.stock),
      categoria: formData.categoria.trim() || undefined,
    };

    // Si hay una imagen nueva, incluirla en el payload
    // El backend debe aceptar FormData o el File se convertirá según la implementación
    if (formData.imagen) {
      data.imagen = formData.imagen;
    } else if (formData.imagenPreview && !formData.imagen) {
      // Si hay preview pero no hay archivo nuevo, mantener la URL existente
      data.imagen = formData.imagenPreview;
    }

    await onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* CODIGO Y NOMBRE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-200">
            Código <span className="text-red-400">*</span>
          </label>
          <Input
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
            placeholder="Ej: PROD001"
            disabled={isLoading}
            className="bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-slate-400"
          />
          {errors.codigo && (
            <p className="text-xs text-red-400 mt-1">{errors.codigo}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-slate-200">
            Nombre <span className="text-red-400">*</span>
          </label>
          <Input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Laptop HP"
            disabled={isLoading}
            className="bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-slate-400"
          />
          {errors.nombre && (
            <p className="text-xs text-red-400 mt-1">{errors.nombre}</p>
          )}
        </div>
      </div>

      {/* PRECIO, STOCK Y CATEGORIA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-200">
            Precio <span className="text-red-400">*</span>
          </label>
          <Input
            name="precio"
            type="number"
            step="0.01"
            value={formData.precio}
            onChange={handleChange}
            placeholder="0.00"
            disabled={isLoading}
            className="bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-slate-400"
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
            value={formData.stock}
            onChange={handleChange}
            placeholder="0"
            disabled={isLoading}
            className="bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-slate-400"
          />
          {errors.stock && (
            <p className="text-xs text-red-400 mt-1">{errors.stock}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-slate-200">
            Categoría
          </label>
          <Input
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            placeholder="Ej: Electrónica"
            disabled={isLoading}
            className="bg-white/5 text-white border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-slate-400"
          />
        </div>
      </div>

      {/* DESCRIPCION */}
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-200">
          Descripción
        </label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows={3}
          disabled={isLoading}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Descripción opcional del producto"
        />
      </div>

      {/* IMAGEN */}
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-200">
          Imagen del producto
        </label>
        
        {imageError && (
          <p className="text-xs text-red-400 mb-2">{imageError}</p>
        )}

        {formData.imagenPreview ? (
          <div className="relative inline-block">
            <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src={formData.imagenPreview}
                alt="Vista previa"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                disabled={isLoading}
                className="absolute top-1 right-1 p-1 rounded-full bg-red-500/80 hover:bg-red-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              {formData.imagen ? 'Imagen nueva seleccionada' : 'Imagen actual'}
            </p>
          </div>
        ) : (
          <div
            onClick={() => !isLoading && fileInputRef.current?.click()}
            className={`w-full border-2 border-dashed border-white/20 rounded-xl p-6 text-center transition-colors bg-white/5 ${
              isLoading 
                ? 'cursor-not-allowed opacity-50' 
                : 'cursor-pointer hover:border-purple-500/50 hover:bg-white/10'
            }`}
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
          disabled={isLoading}
          className="hidden"
        />
      </div>

      {/* BOTONES */}
      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="button"
          size="md"
          variant="ghost"
          onClick={onCancel}
          disabled={isLoading}
          className="border border-white/20 hover:bg-white/10 text-white"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          size="md"
          variant="primary"
          isLoading={isLoading}
          disabled={isLoading}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
        >
          {producto ? 'Actualizar' : 'Crear'} Producto
        </Button>
      </div>
    </form>
  );
}

ProductoForm.displayName = 'ProductoForm';
