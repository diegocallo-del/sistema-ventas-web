/**
 * Servicio de análisis IA
 * Maneja la integración con el sistema de análisis inteligente
 */

import { api } from '../api';
import { analysisEndpoints } from '../config/endpoints';

/**
 * Interfaz para solicitud de análisis
 */
export interface AnalisisRequest {
  pregunta: string;
  contexto: string;
}

/**
 * Interfaz para respuesta de análisis
 */
export interface AnalisisResponse {
  respuesta: string;
  confianza?: number;
  tiempoProcesamiento?: number;
}

/**
 * Interfaz para insights de análisis
 */
export interface InsightsResponse {
  insights: string[];
  recomendaciones: string[];
  metricasPrincipales: Record<string, any>;
}

/**
 * Analiza datos usando IA
 */
export async function analizarDatos(request: AnalisisRequest): Promise<AnalisisResponse> {
  const response = await api.post<AnalisisResponse>(analysisEndpoints.process, request);
  return response;
}

/**
 * Obtiene insights generales del sistema
 */
export async function obtenerInsights(): Promise<InsightsResponse> {
  const response = await api.get<InsightsResponse>(analysisEndpoints.insights);
  return response;
}

/**
 * Función de conveniencia para análisis directo
 */
export async function analizarConIA(pregunta: string, contexto: string): Promise<AnalisisResponse> {
  return analizarDatos({ pregunta, contexto });
}

/**
 * Hook personalizado para análisis IA
 */
import { useState, useCallback } from 'react';

export function useAnalisisIA() {
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<InsightsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const obtenerInsightsGenerales = useCallback(async (): Promise<InsightsResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const data: InsightsResponse = await obtenerInsights();
      setInsights(data);
      return data;
    } catch (err: any) {
      setError(err.message || 'Error al obtener insights');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const analizarVentas = useCallback(async (pregunta?: string) => {
    setLoading(true);
    setError(null);

    try {
      const preguntaDefecto = pregunta || "¿Cuáles son las tendencias de ventas más importantes y recomendaciones para mejorar?";
      const respuesta = await analizarDatos({
        pregunta: preguntaDefecto,
        contexto: "reporte_ventas"
      });
      return respuesta;
    } catch (err: any) {
      setError(err.message || 'Error al analizar ventas');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const analizarInventario = useCallback(async (pregunta?: string) => {
    setLoading(true);
    setError(null);

    try {
      const preguntaDefecto = pregunta || "¿Cómo está el estado del inventario y qué productos necesito reponer?";
      const respuesta = await analizarDatos({
        pregunta: preguntaDefecto,
        contexto: "reporte_inventario"
      });
      return respuesta;
    } catch (err: any) {
      setError(err.message || 'Error al analizar inventario');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const obtenerRecomendaciones = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Generar recomendaciones basadas en patrones históricos
      const productosResponse = await fetch('/api/productos?page_size=100');
      const productos = await productosResponse.json();

      // Calcular productos más vendidos, stock bajo, etc.
      const recomendaciones = [];

      // Recomendación basada en stock bajo
      const productosStockBajo = productos.items?.filter((p: any) => p.stock <= 5) || [];
      if (productosStockBajo.length > 0) {
        recomendaciones.push(`Reponer stock de: ${productosStockBajo.map((p: any) => p.nombre).join(', ')}`);
      }

      // Generar pregunta automática para IA
      const pregunta = "Basado en datos históricos, ¿cuáles son las recomendaciones principales para mejorar las ventas y optimizar el inventario?";

      // Usar análisis de ventas existente
      const analisisVentas = await analizarVentas(pregunta);

      return {
        recomendacionesManuales: recomendaciones,
        analisisIA: analisisVentas?.respuesta || 'Sin recomendaciones disponibles'
      };
    } catch (err: any) {
      setError(err.message || 'Error obteniendo recomendaciones');
      return null;
    } finally {
      setLoading(false);
    }
  }, [analizarVentas]);

  const generarPredicciones = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Calcular predicciones básicas basadas en histórico
      const salesData = await fetch('/api/ventas?page_size=100').then(res => res.json());

      if (!salesData.items || salesData.items.length < 7) {
        return {
          mensaje: 'Se necesitan más datos de ventas para generar predicciones precisas',
          predicciones: []
        };
      }

      const ventas = salesData.items.sort((a: any, b: any) =>
        new Date(a.fecha_creacion).getTime() - new Date(b.fecha_creacion).getTime()
      );

      // Calcular promedio semanal de ventas
      const ultimoMes = ventas.filter((venta: any) => {
        const fecha = new Date(venta.fecha_creacion);
        const hace30Dias = new Date();
        hace30Dias.setDate(hace30Dias.getDate() - 30);
        return fecha >= hace30Dias;
      });

      const promedioDiario = ultimoMes.length / 30;
      const prediccionSemanal = Math.round(promedioDiario * 7);
      const prediccionIngresos = Math.round(
        ultimoMes.reduce((sum: number, venta: any) => sum + venta.total, 0) / ultimoMes.length * 30
      );

      return {
        predicciones: [
          {
            tipo: 'ventas_semanales',
            actual: ultimoMes.length,
            prediccion: prediccionSemanal,
            tendencia: prediccionSemanal > ultimoMes.length ? 'ascendente' : 'descendente'
          },
          {
            tipo: 'ingresos_mensuales',
            actual: ultimoMes.reduce((sum: number, venta: any) => sum + venta.total, 0),
            prediccion: prediccionIngresos,
            tendencia: 'estable'
          }
        ]
      };
    } catch (err: any) {
      setError(err.message || 'Error generando predicciones');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    insights,
    error,
    obtenerInsights: obtenerInsightsGenerales,
    obtenerRecomendaciones,
    generarPredicciones,
    analizarVentas,
    analizarInventario
  };
}
