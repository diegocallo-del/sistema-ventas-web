'use client';

import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { useVentas } from '@/hooks/use-ventas';

interface VentasData {
  fecha: string;
  ventas: number;
  ingresos: number;
}

export default function VentasChart({ tipo = 'line' }: { tipo?: 'line' | 'bar' }) {
  const { sales } = useVentas();
  const [data, setData] = useState<VentasData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sales) {
      // Agrupar ventas por fecha
      const ventasPorFecha = new Map<string, { ventas: number; ingresos: number }>();

      sales.forEach((venta) => {
        const fecha = new Date(venta.fecha_creacion || '').toLocaleDateString('es-ES');
        const existente = ventasPorFecha.get(fecha) || { ventas: 0, ingresos: 0 };

        existente.ventas += 1;
        existente.ingresos += venta.total || 0;
        ventasPorFecha.set(fecha, existente);
      });

      // Convertir a array y ordenar por fecha
      const datosGrafico = Array.from(ventasPorFecha.entries())
        .map(([fecha, valores]) => ({
          fecha,
          ventas: valores.ventas,
          ingresos: valores.ingresos,
        }))
        .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())
        .slice(-14); // Últimas 14 fechas

      setData(datosGrafico);
      setLoading(false);
    }
  }, [sales]);

  if (loading) {
    return (
      <div className="w-full bg-slate-800/50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-white">Tendencia de Ventas</h3>
        <div className="text-slate-300">Cargando datos...</div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="w-full bg-slate-800/50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-white">Tendencia de Ventas</h3>
        <div className="text-slate-300 text-center py-8">No hay datos de ventas disponibles</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-800/50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-white">Tendencia de Ventas (Últimos 14 días)</h3>

      {tipo === 'line' ? (
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis
              dataKey="fecha"
              stroke="#94a3b8"
              fontSize={11}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #475569',
                color: '#e2e8f0'
              }}
            />
            <Legend wrapperStyle={{ color: '#e2e8f0' }} />
            <Line
              type="monotone"
              dataKey="ventas"
              stroke="#10b981"
              strokeWidth={3}
              name="N° Ventas"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis
              dataKey="fecha"
              stroke="#94a3b8"
              fontSize={11}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #475569',
                color: '#e2e8f0'
              }}
            />
            <Legend wrapperStyle={{ color: '#e2e8f0' }} />
            <Bar
              dataKey="ingresos"
              fill="#f59e0b"
              name="Ingresos S/"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
