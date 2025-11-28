'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type CardVariant = 'default' | 'outline';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant | (string & {});
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    const baseClasses =
      "rounded-3xl border backdrop-blur-xl transition-all duration-300";
    const variantClasses =
      variant === 'outline'
        ? "border-blue-400/30 bg-slate-900/60 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
        : "border-blue-400/30 bg-slate-900/60 shadow-[0_0_15px_rgba(59,130,246,0.1)]";

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("py-4 px-6", className)} {...props}>{children}</div>
);

export const CardContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6", className)} {...props}>{children}</div>
);

export const CardTitle = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn("text-2xl font-bold text-white", className)} {...props}>{children}</h2>
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardContent.displayName = 'CardContent';
CardTitle.displayName = 'CardTitle';
