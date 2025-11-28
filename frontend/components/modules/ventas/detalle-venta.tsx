'use client';

/**
 * Componente para mostrar el detalle de una venta
 */

import React from 'react';
import { Sale } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { formatCurrency, formatDate, formatFullName } from '@/lib/formatters';
import { SALE_STATUS_COLORS } from '@/lib/constants';
import { User, Calendar, CreditCard, FileText } from 'lucide-react';

interface DetalleVentaProps {
  venta: Sale;
}

export function DetalleVenta({ venta }: DetalleVentaProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoVenta venta={venta} />
        <InfoClienteVendedor venta={venta} />
      </div>
      <TablaProductos venta={venta} />
      <TotalesVenta venta={venta} />
    </div>
  );
}

/* --------------------------- Subcomponentes --------------------------- */

function InfoVenta({ venta }: { venta: Sale }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información de la Venta</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <InfoItem icon={<FileText className="w-5 h-5 text-secondary-500" />} label="Número de Venta">
          #{venta.id.toString().padStart(6, '0')}
        </InfoItem>
        <InfoItem icon={<Calendar className="w-5 h-5 text-secondary-500" />} label="Fecha">
          {formatDate(venta.fecha, true)}
        </InfoItem>
        <InfoItem icon={<CreditCard className="w-5 h-5 text-secondary-500" />} label="Método de Pago">
          <span className="capitalize">{venta.metodo_pago}</span>
        </InfoItem>
        <InfoItem label="Estado">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              SALE_STATUS_COLORS[venta.estado]
            }`}
          >
            {venta.estado}
          </span>
        </InfoItem>
      </CardContent>
    </Card>
  );
}

function InfoClienteVendedor({ venta }: { venta: Sale }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cliente y Vendedor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <InfoItem icon={<User className="w-5 h-5 text-secondary-500" />} label="Cliente">
          {venta.cliente ? (
            <div>
              <p className="font-semibold">
                {formatFullName(venta.cliente.nombre, venta.cliente.apellido)}
              </p>
              <p className="text-sm text-secondary-500">
                {venta.cliente.tipo_documento}: {venta.cliente.numero_documento}
              </p>
            </div>
          ) : (
            <p className="font-semibold">No especificado</p>
          )}
        </InfoItem>
        <InfoItem icon={<User className="w-5 h-5 text-secondary-500" />} label="Vendedor">
          {venta.usuario ? (
            <p className="font-semibold">{formatFullName(venta.usuario.nombre, venta.usuario.apellido)}</p>
          ) : (
            <p className="font-semibold">No especificado</p>
          )}
        </InfoItem>
        {venta.observaciones && (
          <div>
            <p className="text-sm text-secondary-600 mb-1">Observaciones</p>
            <p className="text-sm bg-secondary-50 p-2 rounded">{venta.observaciones}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function InfoItem({
  icon,
  label,
  children,
}: {
  icon?: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      {icon || <div className="w-5 h-5" />}
      <div>
        <p className="text-sm text-secondary-600">{label}</p>
        {children}
      </div>
    </div>
  );
}

function TablaProductos({ venta }: { venta: Sale }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Productos</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Producto</TableHead>
              <TableHead className="text-right">Precio Unit.</TableHead>
              <TableHead className="text-right">Cantidad</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {venta.detalles.map((detalle) => (
              <TableRow key={detalle.id}>
                <TableCell>
                  {detalle.producto ? (
                    <div>
                      <p className="font-medium">{detalle.producto.nombre}</p>
                      <p className="text-xs text-secondary-500">{detalle.producto.codigo}</p>
                    </div>
                  ) : (
                    <p className="font-medium">Producto #{detalle.producto_id}</p>
                  )}
                </TableCell>
                <TableCell className="text-right">{formatCurrency(detalle.precio_unitario)}</TableCell>
                <TableCell className="text-right">{detalle.cantidad}</TableCell>
                <TableCell className="text-right font-medium">{formatCurrency(detalle.subtotal)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function TotalesVenta({ venta }: { venta: Sale }) {
  return (
    <div className="mt-0 max-w-xs ml-auto space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-secondary-600">Subtotal:</span>
        <span className="font-medium">{formatCurrency(venta.subtotal)}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-secondary-600">IGV (18%):</span>
        <span className="font-medium">{formatCurrency(venta.igv)}</span>
      </div>
      <div className="flex justify-between text-lg font-bold border-t border-secondary-200 pt-2">
        <span>Total:</span>
        <span className="text-primary-600">{formatCurrency(venta.total)}</span>
      </div>
    </div>
  );
}
DetalleVenta.displayName = 'DetalleVenta';