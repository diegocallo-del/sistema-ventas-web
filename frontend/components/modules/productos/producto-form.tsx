'use client';

/**
 * Formulario para crear y editar productos
 */

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Product, CreateProductData, UpdateProductData } from '@/lib/types';
import {
  isValidProductCode,
  isValidProductName,
  isValidPrice,
  isValidStock,
} from '@/lib/validators';

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
  const [formData, setFormData] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (producto) {
      setFormData({
        codigo: producto.codigo,
        nombre: producto.nombre,
        descripcion: producto.descripcion || '',
        precio: producto.precio.toString(),
        stock: producto.stock.toString(),
        categoria: producto.categoria || '',
      });
    }
  }, [producto]);

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

    await onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* CODIGO Y NOMBRE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Código <span className="text-red-500">*</span>
          </label>
          <Input
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
            placeholder="Ej: PROD001"
            disabled={isLoading}
          />
          {errors.codigo && (
            <p className="text-xs text-red-500 mt-1">{errors.codigo}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre <span className="text-red-500">*</span>
          </label>
          <Input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Laptop HP"
            disabled={isLoading}
          />
          {errors.nombre && (
            <p className="text-xs text-red-500 mt-1">{errors.nombre}</p>
          )}
        </div>
      </div>

      {/* PRECIO, STOCK Y CATEGORIA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Precio <span className="text-red-500">*</span>
          </label>
          <Input
            name="precio"
            type="number"
            step="0.01"
            value={formData.precio}
            onChange={handleChange}
            placeholder="0.00"
            disabled={isLoading}
          />
          {errors.precio && (
            <p className="text-xs text-red-500 mt-1">{errors.precio}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Stock <span className="text-red-500">*</span>
          </label>
          <Input
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            placeholder="0"
            disabled={isLoading}
          />
          {errors.stock && (
            <p className="text-xs text-red-500 mt-1">{errors.stock}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Categoría
          </label>
          <Input
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            placeholder="Ej: Electrónica"
            disabled={isLoading}
          />
        </div>
      </div>

      {/* DESCRIPCION */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows={3}
          className="block w-full rounded-lg border border-secondary-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Descripción opcional del producto"
          disabled={isLoading}
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
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          size="md"
          variant="primary"
          isLoading={isLoading}
          disabled={isLoading}
        >
          {producto ? 'Actualizar' : 'Crear'} Producto
        </Button>
      </div>
    </form>
  );
}

ProductoForm.displayName = 'ProductoForm';
