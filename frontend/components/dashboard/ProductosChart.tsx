'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getSales } from '@/lib/services/venta-service';

interface ProductoData {
  nombre: string;
  cantidad: number;
  total: number;
}

export default function ProductosChart() {
  const [data, setData] = useState<ProductoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      try {
        const ventas = await getSales({ page_size: 1000 });
        
        // Agrupar productos vendidos
        const productosMap = new Map<string, { cantidad: number; total: number }>();
        
        ventas.items.forEach(venta => {
          venta.detalles.forEach(detalle => {
            const existente = productosMap.get(detalle.producto_nombre) || { cantidad: 0, total: 0 };
            existente.cantidad += detalle.cantidad;
            existente.total += detalle.subtotal;
            productosMap.set(detalle.producto_nombre, existente);
          });
        });

        // Convertir a array y ordenar por cantidad
        const datosGrafico = Array.from(productosMap.entries())
          .map(([nombre, valores]) => ({ nombre, ...valores }))
          .sort((a, b) => b.cantidad - a.cantidad)
          .slice(0, 8); // Top 8 productos

        setData(datosGrafico);
      } catch (error) {
        console.error('Error cargando datos de productos:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    cargarDatos();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-slate-800/50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-white">Productos Más Vendidos</h3>
        <div className="text-slate-300">Cargando datos...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-800/50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-white">Productos Más Vendidos</h3>
      {data.length === 0 ? (
        <div className="text-slate-300">No hay datos de productos vendidos disponibles</div>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis 
              dataKey="nombre" 
              angle={-45}
              textAnchor="end"
              height={100}
              interval={0}
              tick={{ fontSize: 11 }}
              stroke="#94a3b8"
            />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#e2e8f0' }}
            />
            <Legend wrapperStyle={{ color: '#e2e8f0' }} />
            <Bar dataKey="cantidad" fill="#10b981" name="Unidades Vendidas" />
            <Bar dataKey="total" fill="#3b82f6" name="Total S/" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}