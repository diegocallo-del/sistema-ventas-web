'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  isLoading?: boolean;
  variant?: 'primary' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      fullWidth,
      isLoading,
      variant = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      disabled,
      ...props
    },
    ref
  ) => {
    // Clases base según variante
    const variantClasses = {
      primary: 'bg-blue-600/40 hover:bg-blue-600/50 border border-blue-400/30 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
      secondary: 'bg-slate-700/40 hover:bg-slate-700/50 border border-slate-500/30 text-slate-200 shadow-[0_0_10px_rgba(0,0,0,0.2)]',
      ghost: 'bg-transparent border border-blue-400/20 text-slate-300 hover:bg-blue-500/10 hover:border-blue-400/30',
    };

    // Clases según tamaño
    const sizeClasses = {
      sm: 'text-sm py-2 px-3',
      md: 'text-base py-3 px-5',
      lg: 'text-lg py-4 px-6',
    };

    return (
      <button
        ref={ref}
        className={cn(
          "rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          (isLoading || disabled) && 'opacity-60 cursor-not-allowed',
          className
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin">⏳ Cargando...</span>
        ) : (
          <>
            {iconLeft && <span className="flex items-center">{iconLeft}</span>}
            {children}
            {iconRight && <span className="flex items-center">{iconRight}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
