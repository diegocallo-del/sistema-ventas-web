'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getSales } from '@/lib/services/venta-service';

interface ChartData {
  fecha: string;
  total: number;
  cantidad: number;
}

export default function VentasChart() {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      try {
        const ventas = await getSales({ page_size: 1000 });
        
        // Agrupar ventas por fecha
        const ventasPorFecha = new Map<string, { total: number; cantidad: number }>();
        
        ventas.items.forEach(venta => {
          const fecha = new Date(venta.fecha_creacion).toLocaleDateString('es-PE', { 
            day: '2-digit', 
            month: '2-digit' 
          });
          
          const existente = ventasPorFecha.get(fecha) || { total: 0, cantidad: 0 };
          existente.total += venta.total;
          existente.cantidad += venta.detalles.reduce((sum, d) => sum + d.cantidad, 0);
          ventasPorFecha.set(fecha, existente);
        });

        // Convertir a array y ordenar por fecha
        const datosGrafico = Array.from(ventasPorFecha.entries())
          .map(([fecha, valores]) => ({ fecha, ...valores }))
          .sort((a, b) => {
            const [diaA, mesA] = a.fecha.split('/').map(Number);
            const [diaB, mesB] = b.fecha.split('/').map(Number);
            if (mesA !== mesB) return mesA - mesB;
            return diaA - diaB;
          })
          .slice(-10); // Últimos 10 días

        setData(datosGrafico);
      } catch (error) {
        console.error('Error cargando datos de ventas:', error);
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
        <h3 className="text-lg font-semibold mb-4 text-white">Ventas de los últimos 10 días</h3>
        <div className="text-slate-300">Cargando datos...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-800/50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-white">Ventas de los últimos 10 días</h3>
      {data.length === 0 ? (
        <div className="text-slate-300">No hay datos de ventas disponibles</div>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis dataKey="fecha" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              formatter={(value: number) => `S/ ${value.toFixed(2)}`}
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#e2e8f0' }}
            />
            <Legend wrapperStyle={{ color: '#e2e8f0' }} />
            <Line 
              type="monotone" 
              dataKey="total" 
              stroke="#2563eb" 
              strokeWidth={2}
              name="Total Ventas (S/)"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}