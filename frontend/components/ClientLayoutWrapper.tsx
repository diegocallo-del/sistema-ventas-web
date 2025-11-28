// components/ClientLayoutWrapper.tsx
'use client';

import { ReactNode } from 'react';
import { LayoutWrapper } from './LayoutWrapper';

interface Props {
  children: ReactNode;
}

export function ClientLayoutWrapper({ children }: Props) {
  // Este wrapper asegura que todo lo que depende del cliente se hidrata correctamente
  return <LayoutWrapper showHeader showFooter>{children}</LayoutWrapper>;
}
