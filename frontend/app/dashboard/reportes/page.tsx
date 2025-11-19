'use client';

import VentasChart from '@/components/dashboard/VentasChart';
import ProductosChart from '@/components/dashboard/ProductosChart';
import CategoriasChart from '@/components/dashboard/CategoriasChart';
import { Button } from '@/components/ui/button';

export default function ReportesPage() {
  return (
    <div className="p-8 space-y-10 min-h-screen animate-fade-in">

      {/* HEADER */}
      <div className="flex items-center justify-between animate-slide-down">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            Reportes y Estadísticas
          </h1>
          <p className="text-slate-300 mt-1">Análisis actualizado de ventas y actividad del sistema.</p>
        </div>

        <Button className="rounded-xl bg-blue-600/40 hover:bg-blue-600/50 border border-blue-400/30 px-5 py-2.5 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300">
          Exportar PDF
        </Button>
      </div>

      {/* CARDS RESUMEN */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Ventas Totales', value: 'S/ 18,900', trend: '+12%', color: 'from-blue-900/40 via-blue-800/30 to-indigo-900/40', border: 'border-blue-400/30' },
          { title: 'Productos Vendidos', value: '200', trend: '+8%', color: 'from-emerald-900/40 via-green-800/30 to-teal-900/40', border: 'border-emerald-400/30' },
          { title: 'Clientes Nuevos', value: '45', trend: '+15%', color: 'from-purple-900/40 via-violet-800/30 to-fuchsia-900/40', border: 'border-purple-400/30' },
          { title: 'Ticket Promedio', value: 'S/ 94.50', trend: '+3%', color: 'from-amber-900/40 via-yellow-800/30 to-orange-900/40', border: 'border-amber-400/30' },
        ].map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl bg-gradient-to-br ${card.color} backdrop-blur-xl text-white border ${card.border} shadow-[0_0_15px_rgba(59,130,246,0.12)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 hover:scale-105 animate-slide-up`}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <p className="text-sm text-slate-300">{card.title}</p>
            <p className="text-4xl font-bold mt-2 text-white">{card.value}</p>
            <p className="text-sm mt-2 text-slate-300">{card.trend} vs mes anterior</p>
          </div>
        ))}
      </div>

      {/* GRAFICO PRINCIPAL */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] animate-slide-up delay-300">
          <VentasChart />
        </div>
      </div>

      {/* GRAFICOS SECUNDARIOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] animate-slide-up delay-400">
          <ProductosChart />
        </div>
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] animate-slide-up delay-500">
          <CategoriasChart />
        </div>
      </div>

      {/* TABLA DE ÚLTIMAS VENTAS */}
      <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] animate-slide-up delay-600">
        <h3 className="text-lg font-semibold mb-4 tracking-tight text-white">Últimas Ventas</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-blue-400/20 text-sm">
            <thead className="bg-slate-800/50 backdrop-blur">
              <tr>
                {['Fecha', 'Cliente', 'Productos', 'Total', 'Estado'].map((th) => (
                  <th
                    key={th}
                    className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wide"
                  >
                    {th}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-slate-800/30 divide-y divide-blue-400/20">
              {[
                { fecha: '10/11/2024', cliente: 'Juan Pérez', productos: '3 productos', total: 'S/ 1,250.00' },
                { fecha: '10/11/2024', cliente: 'María López', productos: '2 productos', total: 'S/ 850.00' },
                { fecha: '09/11/2024', cliente: 'Carlos Rodríguez', productos: '5 productos', total: 'S/ 2,100.00' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/50 transition-colors duration-200">
                  <td className="px-6 py-4 text-slate-300">{row.fecha}</td>
                  <td className="px-6 py-4 font-medium text-white">{row.cliente}</td>
                  <td className="px-6 py-4 text-slate-300">{row.productos}</td>
                  <td className="px-6 py-4 font-semibold text-white">{row.total}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-emerald-900/40 text-emerald-300 font-medium border border-emerald-400/30">
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
