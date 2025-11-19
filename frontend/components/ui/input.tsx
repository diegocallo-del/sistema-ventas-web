'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props extendidos del input
 * Incluye todos los atributos estándar de un <input>
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Se pueden agregar props custom aquí si se necesita
}

/**
 * Componente Input reutilizable
 * - Compatible con ref
 * - Estilos consistentes
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "block w-full rounded-xl border border-blue-400/30 bg-slate-800/50 text-white placeholder-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
