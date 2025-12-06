/**
 * Servicio de exportación de datos
 * Maneja la descarga de reportes en diferentes formatos
 */

import { api } from '../api';

/**
 * Descarga productos como CSV
 */
export async function exportarProductosCSV(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/productos/csv', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Error al descargar productos CSV');
  }

  return response.blob();
}

/**
 * Descarga ventas como CSV
 */
export async function exportarVentasCSV(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/ventas/csv', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Error al descargar ventas CSV');
  }

  return response.blob();
}

/**
 * Descarga clientes como CSV
 */
export async function exportarClientesCSV(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/clientes/csv', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Error al descargar clientes CSV');
  }

  return response.blob();
}

/**
 * Descarga reporte completo del sistema como CSV
 */
export async function exportarReporteCompletoCSV(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/reporte-completo/csv', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Error al descargar reporte completo CSV');
  }

  return response.blob();
}

export async function exportarProductosExcel(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/productos/excel', {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Error al descargar productos Excel');
  return response.blob();
}

export async function exportarProductosPDF(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/productos/pdf', {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Error al descargar productos PDF');
  return response.blob();
}

export async function exportarVentasExcel(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/ventas/excel', {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Error al descargar ventas Excel');
  return response.blob();
}

export async function exportarVentasPDF(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/ventas/pdf', {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Error al descargar ventas PDF');
  return response.blob();
}

export async function exportarClientesExcel(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/clientes/excel', {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Error al descargar clientes Excel');
  return response.blob();
}

export async function exportarClientesPDF(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/clientes/pdf', {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Error al descargar clientes PDF');
  return response.blob();
}

export async function exportarReporteCompletoExcel(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/reporte-completo/excel', {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Error al descargar reporte Excel');
  return response.blob();
}

export async function exportarReporteCompletoPDF(): Promise<Blob> {
  const token = localStorage.getItem('auth_token');
  const response = await fetch('/api/export/reporte-completo/pdf', {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Error al descargar reporte PDF');
  return response.blob();
}

/**
 * Función auxiliar para descargar archivos Blob
 */
export function descargarBlob(blob: Blob, nombreArchivo: string): void {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = nombreArchivo;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

/**
 * Hook personalizado para exportaciones
 */
import { useState } from 'react';

export function useExportacion() {
  const [exportando, setExportando] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const exportarConFeedback = async (
    funcionExportacion: () => Promise<Blob>,
    tipo: string,
    nombreArchivo: string
  ): Promise<void> => {
    setExportando(tipo);
    setError(null);

    try {
      const blob = await funcionExportacion();
      descargarBlob(blob, nombreArchivo);
    } catch (err: any) {
      setError(err.message || `Error al exportar ${tipo}`);
    } finally {
      setExportando(null);
    }
  };

  const exportarProductos = () =>
    exportarConFeedback(exportarProductosCSV, 'productos', 'productos.csv');

  const exportarVentas = () =>
    exportarConFeedback(exportarVentasCSV, 'ventas', 'ventas.csv');

  const exportarClientes = () =>
    exportarConFeedback(exportarClientesCSV, 'clientes', 'clientes.csv');

  const exportarReporteCompleto = () =>
    exportarConFeedback(
      exportarReporteCompletoCSV,
      'reporte completo',
      `reporte-sistema-${new Date().toISOString().split('T')[0]}.csv`
    );

  const exportarProductosXlsx = () =>
    exportarConFeedback(exportarProductosExcel, 'productos', 'productos.xlsx');
  const exportarProductosPdf = () =>
    exportarConFeedback(exportarProductosPDF, 'productos', 'productos.pdf');
  const exportarVentasXlsx = () =>
    exportarConFeedback(exportarVentasExcel, 'ventas', 'ventas.xlsx');
  const exportarVentasPdf = () =>
    exportarConFeedback(exportarVentasPDF, 'ventas', 'ventas.pdf');
  const exportarClientesXlsx = () =>
    exportarConFeedback(exportarClientesExcel, 'clientes', 'clientes.xlsx');
  const exportarClientesPdf = () =>
    exportarConFeedback(exportarClientesPDF, 'clientes', 'clientes.pdf');
  const exportarReporteXlsx = () =>
    exportarConFeedback(exportarReporteCompletoExcel, 'reporte completo', 'reporte-sistema.xlsx');
  const exportarReportePdf = () =>
    exportarConFeedback(exportarReporteCompletoPDF, 'reporte completo', 'reporte-sistema.pdf');

  async function importarProductosExcel(file: File): Promise<any> {
    const token = localStorage.getItem('auth_token');
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/import/productos/excel', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: fd,
    });
    return res.json();
  }

  async function importarClientesExcel(file: File): Promise<any> {
    const token = localStorage.getItem('auth_token');
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/import/clientes/excel', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: fd,
    });
    return res.json();
  }

  return {
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
    exportarReportePdf,
    importarProductosExcel,
    importarClientesExcel
  };
}
