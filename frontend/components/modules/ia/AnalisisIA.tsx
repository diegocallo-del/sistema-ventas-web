import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles } from 'lucide-react';
import { analizarConIA } from '@/lib/api';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface AnalisisIAProps {
  contexto: string; // Ej: "reporte_ventas"
  titulo: string;
  descripcion: string;
}

export function AnalisisIA({ contexto, titulo, descripcion }: AnalisisIAProps) {
  const [pregunta, setPregunta] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalizar = async () => {
    if (!pregunta) return;

    setIsLoading(true);
    setError(null);
    setRespuesta('');

    try {
      const resultado = await analizarConIA(pregunta, contexto);
      setRespuesta(resultado.respuesta);
    } catch (err: any) {      
      setError(err.message || 'Ocurrió un error al contactar a la IA.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <CardTitle className="flex items-center text-xl text-cyan-400">
          <Sparkles className="mr-2 h-6 w-6" />
          {titulo}
        </CardTitle>
        <p className="text-gray-400 text-sm pt-2">{descripcion}</p>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Ej: ¿Cuál fue el producto más vendido?"
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
            disabled={isLoading}
          />
          <Button onClick={handleAnalizar} disabled={isLoading} className="bg-cyan-500 hover:bg-cyan-600">
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Analizar'
            )}
          </Button>
        </div>

        {error && (
          <Alert variant="destructive" className="mt-4 bg-red-900 border-red-700 text-white">
            <AlertTitle>Error de Análisis</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {respuesta && (
          <div className="mt-4 rounded-lg bg-gray-900 p-4">
            <p className="text-cyan-300 font-semibold">Respuesta de la IA:</p>
            <p className="text-gray-300 whitespace-pre-wrap">{respuesta}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
