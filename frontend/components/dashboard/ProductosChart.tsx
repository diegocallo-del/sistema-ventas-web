'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { nombre: 'Laptop Dell', cantidad: 15, total: 22500 },
  { nombre: 'Mouse Logitech', cantidad: 45, total: 1350 },
  { nombre: 'Teclado Mecánico', cantidad: 28, total: 4200 },
  { nombre: 'Monitor LG 24"', cantidad: 12, total: 3600 },
  { nombre: 'Audífonos Sony', cantidad: 35, total: 5250 },
  { nombre: 'Webcam HD', cantidad: 22, total: 2200 },
  { nombre: 'Disco SSD 500GB', cantidad: 18, total: 2700 },
  { nombre: 'RAM 16GB', cantidad: 25, total: 3750 },
];

export default function ProductosChart() {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Productos Más Vendidos</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="nombre" 
            angle={-45}
            textAnchor="end"
            height={100}
            interval={0}
            tick={{ fontSize: 11 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cantidad" fill="#10b981" name="Unidades Vendidas" />
          <Bar dataKey="total" fill="#3b82f6" name="Total S/" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}