'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

type CategoriaData = {
  nombre: string;
  total: number;
};

const data: CategoriaData[] = [
  { nombre: 'Electrónica', total: 45000 },
  { nombre: 'Accesorios', total: 28000 },
  { nombre: 'Computadoras', total: 52000 },
  { nombre: 'Audio', total: 18000 },
  { nombre: 'Gaming', total: 35000 },
  { nombre: 'Oficina', total: 22000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

export default function CategoriasChart() {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Ventas por Categoría</h3>
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
          <Tooltip formatter={(value: number) => `S/ ${value.toLocaleString()}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}