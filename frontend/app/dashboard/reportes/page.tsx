'use client';

import VentasChart from '@/components/dashboard/VentasChart';
import ProductosChart from '@/components/dashboard/ProductosChart';
import CategoriasChart from '@/components/dashboard/CategoriasChart';
import { Button } from '@/components/ui/button';

export default function ReportesPage() {
  return (
    <div className="p-8 space-y-10 bg-gray-50/40 min-h-screen">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Reportes y Estadísticas
          </h1>
          <p className="text-gray-500 mt-1">Análisis actualizado de ventas y actividad del sistema.</p>
        </div>

        <Button className="rounded-xl bg-primary-600 hover:bg-primary-700 px-5 py-2.5 text-white shadow-lg shadow-primary-600/20">
          Exportar PDF
        </Button>
      </div>

      {/* CARDS ESTILO GLASS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Ventas Totales', value: 'S/ 18,900', trend: '+12%', color: 'from-primary-500/70 to-primary-600/80' },
          { title: 'Productos Vendidos', value: '200', trend: '+8%', color: 'from-green-500/70 to-green-600/80' },
          { title: 'Clientes Nuevos', value: '45', trend: '+15%', color: 'from-purple-500/70 to-purple-600/80' },
          { title: 'Ticket Promedio', value: 'S/ 94.50', trend: '+3%', color: 'from-orange-400/70 to-orange-500/80' },
        ].map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl bg-gradient-to-br ${card.color} backdrop-blur-xl text-white shadow-xl`}
          >
            <p className="text-sm opacity-90">{card.title}</p>
            <p className="text-4xl font-bold mt-2 drop-shadow-sm">{card.value}</p>
            <p className="text-sm mt-2 opacity-90">{card.trend} vs mes anterior</p>
          </div>
        ))}
      </div>

      {/* GRAFICO PRINCIPAL */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <VentasChart />
        </div>
      </div>

      {/* GRAFICOS SECUNDARIOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <ProductosChart />
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <CategoriasChart />
        </div>
      </div>

      {/* TABLA MODERNA */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold mb-4 tracking-tight">Últimas Ventas</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50/80 backdrop-blur">
              <tr>
                {['Fecha', 'Cliente', 'Productos', 'Total', 'Estado'].map((th) => (
                  <th
                    key={th}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wide"
                  >
                    {th}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {[
                {
                  fecha: '10/11/2024',
                  cliente: 'Juan Pérez',
                  productos: '3 productos',
                  total: 'S/ 1,250.00',
                },
                {
                  fecha: '10/11/2024',
                  cliente: 'María López',
                  productos: '2 productos',
                  total: 'S/ 850.00',
                },
                {
                  fecha: '09/11/2024',
                  cliente: 'Carlos Rodríguez',
                  productos: '5 productos',
                  total: 'S/ 2,100.00',
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{row.fecha}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{row.cliente}</td>
                  <td className="px-6 py-4">{row.productos}</td>
                  <td className="px-6 py-4 font-semibold">{row.total}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                      Completada
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
