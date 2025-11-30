'use client';

import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getSales } from '@/lib/services/venta-service';
import { getProducts } from '@/lib/services/producto-service';

type CategoriaData = {
  nombre: string;
  total: number;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

export default function CategoriasChart() {
  const [data, setData] = useState<CategoriaData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      try {
        const [ventas, productos] = await Promise.all([
          getSales({ page_size: 1000 }),
          getProducts({ page_size: 1000 })
        ]);

        // Crear mapa de productos por categoría
        const productosPorCategoria = new Map<string, Set<number>>();
        productos.items.forEach(p => {
          if (p.categoria) {
            if (!productosPorCategoria.has(p.categoria)) {
              productosPorCategoria.set(p.categoria, new Set());
            }
            productosPorCategoria.get(p.categoria)!.add(p.id);
          }
        });

        // Calcular totales por categoría
        const categoriasMap = new Map<string, number>();
        
        ventas.items.forEach(venta => {
          venta.detalles.forEach(detalle => {
            // Buscar la categoría del producto
            for (const [categoria, productosIds] of productosPorCategoria.entries()) {
              if (productosIds.has(detalle.producto_id)) {
                const total = categoriasMap.get(categoria) || 0;
                categoriasMap.set(categoria, total + detalle.subtotal);
                break;
              }
            }
          });
        });

        // Convertir a array
        const datosGrafico = Array.from(categoriasMap.entries())
          .map(([nombre, total]) => ({ nombre, total }))
          .sort((a, b) => b.total - a.total);

        setData(datosGrafico);
      } catch (error) {
        console.error('Error cargando datos de categorías:', error);
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
        <h3 className="text-lg font-semibold mb-4 text-white">Ventas por Categoría</h3>
        <div className="text-slate-300">Cargando datos...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-800/50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-white">Ventas por Categoría</h3>
      {data.length === 0 ? (
        <div className="text-slate-300">No hay datos de ventas por categoría disponibles</div>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ payload, percent }) => {
                const { nombre } = payload as CategoriaData;
                const safePercent = percent ?? 0;
                return `${nombre} ${(safePercent * 100).toFixed(0)}%`;
              }}
              outerRadius={100}
              fill="#8884d8"
              dataKey="total"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => `S/ ${value.toLocaleString()}`}
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#e2e8f0' }}
            />
            <Legend wrapperStyle={{ color: '#e2e8f0' }} />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}