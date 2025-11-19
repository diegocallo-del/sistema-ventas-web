'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/use-auth';
import { User, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError('Por favor completa todos los campos');
      return;
    }

    setIsLoading(true);
    const result = await login(formData);

    if (!result.success) {
      setError(result.error || 'Error al iniciar sesión');
      setIsLoading(false);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 
      bg-gradient-to-br from-slate-900 via-slate-800 to-black 
      relative overflow-hidden animate-fade-in">

      {/* Efectos lumínicos sutiles */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] top-10 left-10 animate-pulse-slow"></div>
      <div className="absolute w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[130px] bottom-10 right-10 animate-pulse-slow"></div>

      <Card className="w-full max-w-md rounded-3xl border border-blue-400/30 
        backdrop-blur-2xl bg-slate-900/60 shadow-[0_0_20px_rgba(59,130,246,0.15)]
        transition-all animate-slide-up">

        <CardHeader className="py-8 text-center">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-white tracking-wide px-4 py-2 rounded-xl border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm shadow-[0_0_10px_rgba(59,130,246,0.2)] inline-block">
              POS System
            </h1>
          </div>
          <CardTitle className="text-3xl font-bold text-white tracking-wide">
            Punto de Venta
          </CardTitle>
          <p className="text-slate-300 mt-2 text-sm">Ingresa tus credenciales</p>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl 
                bg-red-900/20 border border-red-400/30 text-red-300 text-sm animate-slide-up shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </div>
            )}

            {/* Usuario */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Usuario"
                className="pl-12 bg-slate-800/50 text-white placeholder-slate-400
                  border border-blue-400/30 rounded-xl
                  focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 w-full"
                autoFocus
              />
            </div>

            {/* Contraseña */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                className="pl-12 pr-12 bg-slate-800/50 text-white placeholder-slate-400
                  border border-blue-400/30 rounded-xl
                  focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Botón */}
            <Button
              type="submit"
              fullWidth
              isLoading={isLoading}
              className="w-full py-3 rounded-xl text-white font-medium text-lg
                bg-blue-600/40 hover:bg-blue-600/50 border border-blue-400/30
                shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                transition-all duration-300 hover:scale-105"
            >
              Iniciar Sesión
            </Button>

            <p className="text-center text-slate-300 text-sm mt-3">
              ¿No tienes cuenta?{' '}
              <Link
                href="/registro"
                className="text-blue-300 hover:text-blue-200 underline font-semibold transition-colors duration-200"
              >
                Crear cuenta
              </Link>
            </p>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
