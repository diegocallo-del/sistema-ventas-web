'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { fecha: '01/11', total: 1200, cantidad: 8 },
  { fecha: '02/11', total: 1850, cantidad: 12 },
  { fecha: '03/11', total: 980, cantidad: 6 },
  { fecha: '04/11', total: 2100, cantidad: 15 },
  { fecha: '05/11', total: 1650, cantidad: 11 },
  { fecha: '06/11', total: 2300, cantidad: 18 },
  { fecha: '07/11', total: 1900, cantidad: 13 },
  { fecha: '08/11', total: 2450, cantidad: 20 },
  { fecha: '09/11', total: 1750, cantidad: 12 },
  { fecha: '10/11', total: 2200, cantidad: 16 },
];

export default function VentasChart() {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Ventas de los últimos 10 días</h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip formatter={(value: number) => `S/ ${value.toFixed(2)}`} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="total" 
            stroke="#2563eb" 
            strokeWidth={2}
            name="Total Ventas (S/)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}