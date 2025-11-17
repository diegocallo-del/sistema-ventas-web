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
  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle contraseña

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
      animate-gradient-slow relative overflow-hidden">

      {/* Efecto lumínico detrás */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[130px] bottom-10 right-10 animate-pulse"></div>

      <Card className="w-full max-w-md rounded-3xl border border-white/10 
        backdrop-blur-2xl bg-white/10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.8)]
        transition-all animate-fade-in">

        <CardHeader className="py-8 text-center">
          <CardTitle className="text-4xl font-extrabold text-white tracking-wide drop-shadow-xl">
            Punto de Venta
          </CardTitle>
          <p className="text-slate-300 mt-2 text-sm">Ingresa tus credenciales</p>
        </CardHeader>

        <CardContent className="p-8">

          <form onSubmit={handleSubmit} className="space-y-7">

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg 
                bg-red-500/10 border border-red-500/40 text-red-300 text-sm animate-fade-in">
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </div>
            )}

            {/* USUARIO */}
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 
                text-slate-400 w-5 h-5 transition-all group-hover:text-white" />

              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Usuario"
                className="pl-10 bg-white/5 text-white placeholder-slate-400
                  border border-white/10 rounded-xl
                  focus:ring-2 focus:ring-purple-500/70
                  focus:border-transparent transition-all"
                autoFocus
              />
            </div>

            {/* CONTRASEÑA */}
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 
                text-slate-400 w-5 h-5 transition-all group-hover:text-white" />

              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                className="pl-10 pr-12 bg-white/5 text-white placeholder-slate-400
                  border border-white/10 rounded-xl
                  focus:ring-2 focus:ring-purple-500/70
                  focus:border-transparent transition-all"
              />

              {/* 👁️ Toggle password */}
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 
                  hover:text-white transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* BOTÓN */}
            <Button
              type="submit"
              fullWidth
              isLoading={isLoading}
              className="w-full py-3 rounded-xl text-white font-bold text-lg
                bg-gradient-to-r from-purple-600 to-blue-600
                hover:from-purple-700 hover:to-blue-700
                shadow-[0_5px_25px_rgba(0,0,0,0.4)]
                hover:shadow-[0_5px_35px_rgba(0,0,0,0.6)]
                transition-all duration-300"
            >
              Iniciar Sesión
            </Button>

            <p className="text-center text-slate-300 text-sm mt-3">
              ¿No tienes cuenta?{' '}
              <Link
                href="/registro"
                className="text-purple-300 hover:text-purple-200 underline font-semibold transition"
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
