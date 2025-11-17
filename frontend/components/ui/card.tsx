/**
 * Componente de tarjeta reutilizable
 */

import React from 'react';
import { clsx } from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated';
}

export function Card({ children, variant = 'default', className, ...props }: CardProps) {
  const variantStyles = {
    default: 'bg-white rounded-lg shadow',
    bordered: 'bg-white rounded-lg border border-secondary-200',
    elevated: 'bg-white rounded-lg shadow-lg',
  };
  
  return (
    <div className={clsx(variantStyles[variant], className)} {...props}>
      {children}
    </div>
  );
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={clsx('px-6 py-4 border-b border-secondary-200', className)} {...props}>
      {children}
    </div>
  );
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h3 className={clsx('text-lg font-semibold text-secondary-900', className)} {...props}>
      {children}
    </h3>
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={clsx('px-6 py-4', className)} {...props}>
      {children}
    </div>
  );
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div className={clsx('px-6 py-4 border-t border-secondary-200 bg-secondary-50', className)} {...props}>
      {children}
    </div>
  );
}