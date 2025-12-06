'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Download,
  FileText,
  BarChart3,
  Users,
  Package,
  TrendingUp,
  Loader2,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { useExportacion } from '@/lib/services/export-service';

export default function ReportesPage() {
  const {
    exportando,
    error,
    exportarProductos,
    exportarVentas,
    exportarClientes,
    exportarReporteCompleto,
    exportarProductosXlsx,
    exportarProductosPdf,
    exportarVentasXlsx,
    exportarVentasPdf,
    exportarClientesXlsx,
    exportarClientesPdf,
    exportarReporteXlsx,
    exportarReportePdf
  } = useExportacion();

  function descargar(blob: Blob, nombre: string) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  const reportesDisponibles = [
    {
      id: 'productos',
      titulo: 'Productos',
      descripcion: 'Lista completa de productos con precios, stock y estado',
      icon: Package,
      funcion: exportarProductos,
      campos: ['ID', 'Nombre', 'Código', 'Precio', 'Stock'],
      color: 'emerald'
    },
    {
      id: 'ventas',
      titulo: 'Ventas',
      descripcion: 'Historial completo de ventas con fechas, clientes y totales',
      icon: TrendingUp,
      funcion: exportarVentas,
      campos: ['ID', 'Fecha', 'Cliente', 'Total', 'Estado', 'Método Pago'],
      color: 'blue'
    },
    {
      id: 'clientes',
      titulo: 'Clientes',
      descripcion: 'Base de datos de clientes activos con información de contacto',
      icon: Users,
      funcion: exportarClientes,
      campos: ['ID', 'Nombre', 'DNI', 'Email', 'Teléfono', 'Dirección'],
      color: 'purple'
    },
    {
      id: 'completo',
      titulo: 'Reporte Completo',
      descripcion: 'Resumen ejecutivo con estadísticas generales del sistema',
      icon: BarChart3,
      funcion: exportarReporteCompleto,
      campos: ['Estadísticas generales', 'KPIs principales', 'Resumen del período'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'border-emerald-400/30 bg-emerald-900/20 hover:bg-emerald-900/30',
      blue: 'border-blue-400/30 bg-blue-900/20 hover:bg-blue-900/30',
      purple: 'border-purple-400/30 bg-purple-900/20 hover:bg-purple-900/30',
      orange: 'border-orange-400/30 bg-orange-900/20 hover:bg-orange-900/30'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-3xl font-bold text-white">Reportes y Exportaciones</h1>
            <p className="text-slate-400">Descarga informes detallados y análisis del sistema</p>
          </div>
        </div>
      </div>

      {/* INFORMACIÓN IMPORTANTE */}
      <Card className="border-yellow-400/30 bg-yellow-900/10">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-yellow-200 mb-1">Información de Exportación</h3>
              <ul className="text-sm text-yellow-200/80 space-y-1">
                <li>• Los reportes se generan en formato CSV compatible con Excel</li>
                <li>• Las fechas están en formato YYYY-MM-DD</li>
                <li>• Solo los administradores pueden acceder a estas funciones</li>
                <li>• Los campos con caracteres especiales se escapan automáticamente</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ERRORES */}
      {error && (
        <Card className="border-red-400/30 bg-red-900/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <span className="text-red-300">{error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* REPORTES DISPONIBLES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportesDisponibles.map((reporte) => {
          const Icon = reporte.icon;
          const estaExportando = exportando === reporte.id;

          return (
            <Card key={reporte.id} className={`transition-all duration-300 ${getColorClasses(reporte.color)}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${reporte.color}-500/20`}>
                      <Icon className={`w-5 h-5 text-${reporte.color}-400`} />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{reporte.titulo}</CardTitle>
                      <p className="text-slate-400 text-sm mt-1">{reporte.descripcion}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* CAMPOS INCLUIDOS */}
                <div>
                  <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
                    Campos incluidos
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {reporte.campos.map((campo) => (
                      <Badge key={campo} variant="outline" className="text-xs">
                        {campo}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* BOTONES DE EXPORTACIÓN */}
                <Button
                  onClick={reporte.funcion}
                  disabled={!!exportando}
                  className="w-full"
                  variant="secondary"
                >
                  {estaExportando ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generando reporte...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Descargar CSV
                    </>
                  )}
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => {
                      const fn = reporte.id === 'productos' ? exportarProductosXlsx
                        : reporte.id === 'ventas' ? exportarVentasXlsx
                        : reporte.id === 'clientes' ? exportarClientesXlsx
                        : exportarReporteXlsx;
                      fn();
                    }}
                    variant="outline"
                  >
                    Excel
                  </Button>
                  <Button
                    onClick={() => {
                      const fn = reporte.id === 'productos' ? exportarProductosPdf
                        : reporte.id === 'ventas' ? exportarVentasPdf
                        : reporte.id === 'clientes' ? exportarClientesPdf
                        : exportarReportePdf;
                      fn();
                    }}
                    variant="outline"
                  >
                    PDF
                  </Button>
                </div>

                {/* INDICADOR DE ÉXITO */}
                {exportando && exportando === reporte.id && (
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Reporte generado correctamente
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Importación deshabilitada temporalmente */}

      {/* FORMATO DE ARCHIVOS */}
      <Card className="border-slate-700 bg-slate-900/50">
        <CardHeader>
          <CardTitle className="text-white">Especificaciones Técnicas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-2">Formato CSV</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Separador: coma (,)</li>
                <li>• Codificación: UTF-8</li>
                <li>• Primera fila: encabezados</li>
                <li>• Campos escapados: comillas dobles</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white mb-2">Compatibilidad</h4>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Microsoft Excel</li>
                <li>• Google Sheets</li>
                <li>• LibreOffice Calc</li>
                <li>• Cualquier editor CSV</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
            <h4 className="font-medium text-white mb-2">Ejemplo de contenido CSV:</h4>
            <div className="text-xs font-mono text-slate-400 bg-slate-900 p-2 rounded overflow-x-auto">
              ID,Nombre,Código,Precio,Stock<br/>
              1,"Teclado Mecánico","TCL-001",299.99,15<br/>
              2,"Mouse Óptico","MSE-002",89.50,8<br/>
              3,"Monitor LED 24""","MON-003",599.00,5
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
