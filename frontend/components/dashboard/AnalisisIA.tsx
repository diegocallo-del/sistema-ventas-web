'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Bot,
  MessageSquare,
  TrendingUp,
  Package,
  Users,
  DollarSign,
  Lightbulb,
  Send,
  Loader2
} from 'lucide-react';
import { useAnalisisIA } from '@/lib/services/analysis-service';

interface Props {
  compact?: boolean;
}

export default function AnalisisIA({ compact = false }: Props) {
  const { loading, error, analizarVentas, analizarInventario, obtenerRecomendaciones, generarPredicciones } = useAnalisisIA();
  const [respuestaActual, setRespuestaActual] = useState<string>('');
  const [preguntaPersonalizada, setPreguntaPersonalizada] = useState('');
  const [tipoAnalisis, setTipoAnalisis] = useState<'ventas' | 'inventario' | 'custom'>('ventas');

  // Análisis automático al cargar para usuarios premium/admin
  useEffect(() => {
    if (!loading && !error && !respuestaActual) {
      // Análisis automático de ventas
      manejarAnalisis('ventas');
    }
  }, []);

  const manejarAnalisis = async (tipo: 'ventas' | 'inventario' | 'custom', pregunta?: string) => {
    setTipoAnalisis(tipo);
    let respuesta;

    if (tipo === 'ventas') {
      respuesta = await analizarVentas(pregunta);
    } else if (tipo === 'inventario') {
      respuesta = await analizarInventario(pregunta);
    } else if (tipo === 'custom' && pregunta) {
      const contexto = pregunta.toLowerCase().includes('venta') ||
                       pregunta.toLowerCase().includes('cliente') ? 'reporte_ventas' : 'reporte_inventario';
      // Importar la función aquí para evitar dependencias circulares
      const { analizarDatos } = await import('@/lib/services/analysis-service');
      respuesta = await analizarDatos({ pregunta, contexto });
    }

    if (respuesta?.respuesta) {
      setRespuestaActual(respuesta.respuesta);
    }
  };

  const manejarPreguntaPersonalizada = async () => {
    if (!preguntaPersonalizada.trim()) return;
    await manejarAnalisis('custom', preguntaPersonalizada);
    setPreguntaPersonalizada('');
  };

  if (compact) {
    return (
      <Card className="border-purple-400/30 bg-slate-800/50 backdrop-blur-xl">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2 text-white">
            <Bot className="w-5 h-5 text-purple-400" />
            IA Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {loading ? (
            <div className="flex items-center gap-2 text-slate-400">
              <Loader2 className="w-4 h-4 animate-spin" />
              Analizando datos...
            </div>
          ) : error ? (
            <div className="text-red-400 text-sm">
              Error: {error}
            </div>
          ) : respuestaActual ? (
            <div className="text-sm text-slate-300">
              <p className="line-clamp-3">{respuestaActual}</p>
            </div>
          ) : (
            <div className="text-slate-400 text-sm">
              Sin insights disponibles
            </div>
          )}

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => manejarAnalisis('ventas')}
              disabled={loading}
              className="h-8 px-2"
            >
              <TrendingUp className="w-3 h-3 mr-1" />
              Ventas
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => manejarAnalisis('inventario')}
              disabled={loading}
              className="h-8 px-2"
            >
              <Package className="w-3 h-3 mr-1" />
              Stock
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bot className="w-8 h-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Análisis Inteligente</h2>
            <p className="text-slate-400">Insights y recomendaciones basadas en IA</p>
          </div>
        </div>
      </div>

      {/* CONTROLES DE ANÁLISIS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button
          onClick={() => manejarAnalisis('ventas')}
          disabled={loading}
          variant={tipoAnalisis === 'ventas' ? 'primary' : 'secondary'}
          className="h-auto p-4 flex flex-col items-center gap-2"
        >
          <TrendingUp className="w-6 h-6" />
          <span>Análisis de Ventas</span>
        </Button>

        <Button
          onClick={() => manejarAnalisis('inventario')}
          disabled={loading}
          variant={tipoAnalisis === 'inventario' ? 'primary' : 'secondary'}
          className="h-auto p-4 flex flex-col items-center gap-2"
        >
          <Package className="w-6 h-6" />
          <span>Estado del Inventario</span>
        </Button>

        <Button
          disabled={loading}
          variant="outline"
          className="h-auto p-4 flex flex-col items-center gap-2 cursor-not-allowed opacity-50"
        >
          <Users className="w-6 h-6" />
          <span>Análisis de Clientes</span>
          <Badge variant="outline" className="mt-1 text-xs">Próximamente</Badge>
        </Button>

        <Button
          disabled={loading}
          variant="outline"
          className="h-auto p-4 flex flex-col items-center gap-2 cursor-not-allowed opacity-50"
        >
          <Lightbulb className="w-6 h-6" />
          <span>Predicciones</span>
          <Badge variant="outline" className="mt-1 text-xs">Próximamente</Badge>
        </Button>
      </div>

      {/* CONSULTA PERSONALIZADA */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Consulta Personalizada
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <Textarea
              placeholder="Haz una pregunta específica sobre tus datos de ventas o inventario..."
              value={preguntaPersonalizada}
              onChange={(e) => setPreguntaPersonalizada(e.target.value)}
              className="flex-1 min-h-[60px] resize-none"
            />
            <Button
              onClick={manejarPreguntaPersonalizada}
              disabled={!preguntaPersonalizada.trim() || loading}
              className="h-auto px-4"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </Button>
          </div>
          <div className="text-sm text-slate-400">
            💡 Ejemplos: "¿Cuáles productos venden más?", "¿Necesito reponer stock?", "¿Cómo mejorar las ventas?"
          </div>
        </CardContent>
      </Card>

      {/* RESPUESTA DE LA IA */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple-400" />
              Respuesta de la IA
            </div>
            {loading && <Loader2 className="w-4 h-4 animate-spin text-purple-400" />}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-400/30 rounded-lg text-red-300">
              <strong>Error:</strong> {error}
            </div>
          )}

          {respuestaActual ? (
            <div className="prose prose-invert max-w-none">
              <div className="text-slate-200 leading-relaxed whitespace-pre-wrap">
                {respuestaActual}
              </div>
            </div>
          ) : !loading ? (
            <div className="text-center py-12">
              <Bot className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-400 mb-2">Haz una consulta para obtener insights inteligentes</p>
              <p className="text-sm text-slate-500">
                La IA analizará tus datos y proporcionará recomendaciones específicas
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 py-12">
              <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
              <p className="text-slate-400">Analizando datos con inteligencia artificial...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
