/**
 * Formulario para crear y editar productos
 */

'use client';

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
  
  // Cargar datos del producto si esta en modo edicion
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
  
  /**
   * Maneja el cambio de valores en los inputs
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  /**
   * Valida el formulario
   */
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.codigo.trim()) {
      newErrors.codigo = 'El codigo es requerido';
    } else if (!isValidProductCode(formData.codigo)) {
      newErrors.codigo = 'El codigo debe tener entre 1 y 50 caracteres';
    }
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (!isValidProductName(formData.nombre)) {
      newErrors.nombre = 'El nombre debe tener entre 2 y 200 caracteres';
    }
    
    const precio = parseFloat(formData.precio);
    if (!formData.precio) {
      newErrors.precio = 'El precio es requerido';
    } else if (isNaN(precio) || !isValidPrice(precio)) {
      newErrors.precio = 'El precio debe ser un numero valido mayor a 0';
    }
    
    const stock = parseInt(formData.stock);
    if (!formData.stock) {
      newErrors.stock = 'El stock es requerido';
    } else if (isNaN(stock) || !isValidStock(stock)) {
      newErrors.stock = 'El stock debe ser un numero entero mayor o igual a 0';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  /**
   * Maneja el envio del formulario
   */
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Codigo"
          name="codigo"
          value={formData.codigo}
          onChange={handleChange}
          error={errors.codigo}
          placeholder="Ej: PROD001"
          required
          disabled={isLoading}
        />
        
        <Input
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          error={errors.nombre}
          placeholder="Ej: Laptop HP"
          required
          disabled={isLoading}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          label="Precio"
          name="precio"
          type="number"
          step="0.01"
          value={formData.precio}
          onChange={handleChange}
          error={errors.precio}
          placeholder="0.00"
          required
          disabled={isLoading}
        />
        
        <Input
          label="Stock"
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          error={errors.stock}
          placeholder="0"
          required
          disabled={isLoading}
        />
        
        <Input
          label="Categoria"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          placeholder="Ej: Electronica"
          disabled={isLoading}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-secondary-700 mb-1">
          Descripcion
        </label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows={3}
          className="block w-full rounded-lg border border-secondary-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Descripcion opcional del producto"
          disabled={isLoading}
        />
      </div>
      
      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancelar
        </Button>
        <Button type="submit" isLoading={isLoading}>
          {producto ? 'Actualizar' : 'Crear'} Producto
        </Button>
      </div>
    </form>
  );
}