'use client';

import VentasChart from '@/components/dashboard/VentasChart';
import ProductosChart from '@/components/dashboard/ProductosChart';
import CategoriasChart from '@/components/dashboard/CategoriasChart';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { reportEndpoints } from '@/lib/config/endpoints';
import { AnalisisIA } from '@/components/modules/ia/AnalisisIA';
import { isSupervisorOrAbove } from '@/lib/roles/role-checker';
import { useAuth } from '@/hooks/use-auth';
import { getSales } from '@/lib/services/venta-service';
import { getClients } from '@/lib/services/cliente-service';

function UltimasVentasTable() {
  const [ventas, setVentas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarVentas() {
      try {
        const respuesta = await getSales({ page: 1, page_size: 5 });
        setVentas(respuesta.items);
      } catch (error) {
        console.error('Error cargando ventas:', error);
        setVentas([]);
      } finally {
        setLoading(false);
      }
    }
    cargarVentas();
  }, []);

  if (loading) {
    return (
      <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
        <h3 className="text-lg font-semibold mb-4 tracking-tight text-white">Últimas Ventas</h3>
        <div className="text-slate-300">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] animate-slide-up delay-600">
      <h3 className="text-lg font-semibold mb-4 tracking-tight text-white">Últimas Ventas</h3>

      {ventas.length === 0 ? (
        <div className="text-slate-300">No hay ventas registradas</div>
      ) : (
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
              {ventas.map((venta) => (
                <tr key={venta.id} className="hover:bg-slate-800/50 transition-colors duration-200">
                  <td className="px-6 py-4 text-slate-300">
                    {new Date(venta.fecha_creacion).toLocaleDateString('es-PE')}
                  </td>
                  <td className="px-6 py-4 font-medium text-white">
                    {venta.cliente_nombre || 'Cliente Contado'}
                  </td>
                  <td className="px-6 py-4 text-slate-300">
                    {venta.detalles.length} producto{venta.detalles.length !== 1 ? 's' : ''}
                  </td>
                  <td className="px-6 py-4 font-semibold text-white">
                    S/ {venta.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-emerald-900/40 text-emerald-300 font-medium border border-emerald-400/30">
                      {venta.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function ReportesPage() {
  const { user } = useAuth();
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [isExportingExcel, setIsExportingExcel] = useState(false);
  const [stats, setStats] = useState({
    ventasTotales: 0,
    productosVendidos: 0,
    clientesNuevos: 0,
    ticketPromedio: 0,
  });
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    async function cargarStats() {
      try {
        const [ventas, clientes] = await Promise.all([
          getSales({ page_size: 1000 }),
          getClients({ page_size: 1000 })
        ]);

        const totalVentas = ventas.items.reduce((sum, v) => sum + v.total, 0);
        const cantidadVentas = ventas.items.length;
        const productosVendidos = ventas.items.reduce((sum, v) => 
          sum + v.detalles.reduce((s, d) => s + d.cantidad, 0), 0
        );

        setStats({
          ventasTotales: totalVentas,
          productosVendidos: productosVendidos,
          clientesNuevos: clientes.items.length,
          ticketPromedio: cantidadVentas > 0 ? totalVentas / cantidadVentas : 0,
        });
      } catch (error) {
        console.error('Error cargando estadísticas:', error);
      } finally {
        setLoadingStats(false);
      }
    }
    cargarStats();
  }, []);

  const handleExport = async (format: 'pdf' | 'excel') => {
    const isPdf = format === 'pdf';

    try {
      if (isPdf) {
        setIsExportingPdf(true);
      } else {
        setIsExportingExcel(true);
      }

      const response = await api.get<Blob>(reportEndpoints.export, {
        responseType: 'blob',
        params: { format },
      });

      const mimeType =
        format === 'pdf'
          ? 'application/pdf'
          : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

      const blob = new Blob([response.data], { type: mimeType });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      const extension = format === 'pdf' ? 'pdf' : 'xlsx';

      link.href = url;
      link.download = `reporte-ventas.${extension}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al exportar reporte', error);
    } finally {
      if (isPdf) {
        setIsExportingPdf(false);
      } else {
        setIsExportingExcel(false);
      }
    }
  };

  return (
    <div className="min-h-screen animate-fade-in space-y-10 px-4 py-6 sm:p-6 lg:p-8">

      {/* HEADER */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between animate-slide-down">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            Reportes y Estadísticas
          </h1>
          <p className="text-slate-300 mt-1">Análisis actualizado de ventas y actividad del sistema.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            className="rounded-xl bg-blue-600/40 hover:bg-blue-600/50 border border-blue-400/30 px-5 py-2.5 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300"
            onClick={() => handleExport('pdf')}
            disabled={isExportingPdf}
          >
            {isExportingPdf ? 'Exportando PDF...' : 'Exportar PDF'}
          </Button>
          <Button
            className="rounded-xl bg-blue-600/40 hover:bg-blue-600/50 border border-blue-400/30 px-5 py-2.5 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300"
            onClick={() => handleExport('excel')}
            disabled={isExportingExcel}
          >
            {isExportingExcel ? 'Exportando Excel...' : 'Exportar Excel'}
          </Button>
        </div>
      </div>

      {/* CARDS RESUMEN */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { 
            title: 'Ventas Totales', 
            value: loadingStats ? '...' : `S/ ${stats.ventasTotales.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 
            trend: '', 
            color: 'from-blue-900/40 via-blue-800/30 to-indigo-900/40', 
            border: 'border-blue-400/30' 
          },
          { 
            title: 'Productos Vendidos', 
            value: loadingStats ? '...' : stats.productosVendidos.toString(), 
            trend: '', 
            color: 'from-emerald-900/40 via-green-800/30 to-teal-900/40', 
            border: 'border-emerald-400/30' 
          },
          { 
            title: 'Total Clientes', 
            value: loadingStats ? '...' : stats.clientesNuevos.toString(), 
            trend: '', 
            color: 'from-purple-900/40 via-violet-800/30 to-fuchsia-900/40', 
            border: 'border-purple-400/30' 
          },
          { 
            title: 'Ticket Promedio', 
            value: loadingStats ? '...' : `S/ ${stats.ticketPromedio.toFixed(2)}`, 
            trend: '', 
            color: 'from-amber-900/40 via-yellow-800/30 to-orange-900/40', 
            border: 'border-amber-400/30' 
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl bg-gradient-to-br ${card.color} backdrop-blur-xl text-white border ${card.border} shadow-[0_0_15px_rgba(59,130,246,0.12)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 hover:scale-105 animate-slide-up`}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <p className="text-sm text-slate-300">{card.title}</p>
            <p className="text-4xl font-bold mt-2 text-white">{card.value}</p>
            {card.trend && <p className="text-sm mt-2 text-slate-300">{card.trend}</p>}
          </div>
        ))}
      </div>

      {/* SECCIÓN DE ANÁLISIS CON IA */}
      {isSupervisorOrAbove(user) && (
        <div className="animate-slide-up delay-300">
          <AnalisisIA
            contexto="reporte_ventas"
            titulo="Asistente de Análisis con IA"
            descripcion="Haz una pregunta en lenguaje natural sobre los datos de ventas y la IA te dará un resumen."
          />
        </div>
      )}

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
      <UltimasVentasTable />
    </div>
  );
}
