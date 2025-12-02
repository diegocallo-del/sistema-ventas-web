'use client';

import { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { getProducts } from '@/lib/services/producto-service';
import { Product } from '@/lib/types';

interface CategoriaData {
  name: string;
  value: number;
  count: number;
  [key: string]: any; // ✅ Agrega index signature para Recharts
}

const COLORS = [
  '#10b981', // emerald
  '#3b82f6', // blue
  '#f59e0b', // amber
  '#ef4444', // red
  '#8b5cf6', // violet
  '#06b6d4', // cyan
  '#84cc16', // lime
  '#f97316', // orange
];

export default function CategoriasChart() {
  const [data, setData] = useState<CategoriaData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await getProducts({ page_size: 1000 });
        const productos: Product[] = response.items;

        // Contar productos por categoría (usando categoría como string por simplicidad)
        const categoriasMap = new Map<string, { count: number; productos: Product[] }>();

        productos.forEach((producto: Product) => {
          const categoria = producto.categoria || 'Sin Categoría';
          const existente = categoriasMap.get(categoria) || { count: 0, productos: [] };

          existente.count += 1;
          existente.productos.push(producto);
          categoriasMap.set(categoria, existente);
        });

        // Convertir a formato para el gráfico
        const datosGrafico: CategoriaData[] = Array.from(categoriasMap.entries())
          .map(([categoria, datos]) => ({
            name: categoria,
            value: datos.count,
            count: datos.count,
          }))
          .sort((a, b) => b.value - a.value) // Ordenar por cantidad
          .slice(0, 8); // Top 8 categorías

        setData(datosGrafico);
      } catch (error) {
        console.error('Error cargando datos de categorías:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-slate-800/50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-white">Distribución por Categorías</h3>
        <div className="text-slate-300">Cargando datos...</div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="w-full bg-slate-800/50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-white">Distribución por Categorías</h3>
        <div className="text-slate-300 text-center py-8">No hay datos de productos disponibles</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-800/50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-white">Distribución por Categorías</h3>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent = 0 }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: '1px solid #475569',
              color: '#e2e8f0'
            }}
            formatter={(value: any, name: any) => [`${value} productos`, name]}
          />
          <Legend
            wrapperStyle={{ color: '#e2e8f0' }}
            formatter={(value: any, entry: any) => (
              <span style={{ color: '#e2e8f0' }}>
                {value}: {entry?.payload?.count} productos
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
