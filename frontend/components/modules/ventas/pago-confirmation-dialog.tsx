/**
 * Diálogo de confirmación de pago
 * Permite completar el pago de una venta pendiente
 */

'use client';

import React, { useState } from 'react';
import { Dialog, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/formatters';
import { PaymentMethod } from '@/lib/types';
import { CreditCard, DollarSign, Smartphone, Banknote, CheckCircle } from 'lucide-react';

interface PagoConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  saleId: number;
  total: number;
  metodoPago: PaymentMethod;
  clienteNombre: string;
  isProcessing?: boolean;
}

/**
 * Icono según el método de pago
 */
function getPaymentIcon(metodo: PaymentMethod) {
  switch (metodo) {
    case PaymentMethod.EFECTIVO:
      return <DollarSign className="w-6 h-6 text-green-400" />;
    case PaymentMethod.TARJETA:
      return <CreditCard className="w-6 h-6 text-blue-400" />;
    case PaymentMethod.TRANSFERENCIA:
      return <Banknote className="w-6 h-6 text-purple-400" />;
    case PaymentMethod.YAPE:
    case PaymentMethod.PLIN:
      return <Smartphone className="w-6 h-6 text-orange-400" />;
    default:
      return <DollarSign className="w-6 h-6 text-slate-400" />;
  }
}

/**
 * Información específica del método de pago
 */
function getPaymentInfo(metodo: PaymentMethod) {
  switch (metodo) {
    case PaymentMethod.EFECTIVO:
      return (
        <div className="text-sm text-slate-300 space-y-2">
          <p>El cliente debe acercarse al punto de pago para realizar el pago en efectivo.</p>
          <p className="text-yellow-400 font-medium">
            Asegúrate de recibir el pago antes de confirmar.
          </p>
        </div>
      );
    case PaymentMethod.TARJETA:
      return (
        <div className="text-sm text-slate-300 space-y-2">
          <p>Procesa el pago con tarjeta de crédito/débito.</p>
          <p className="text-yellow-400 font-medium">
            Verifica que la transacción se haya completado exitosamente.
          </p>
        </div>
      );
    case PaymentMethod.TRANSFERENCIA:
      return (
        <div className="text-sm text-slate-300 space-y-1">
          <p>Información bancaria para transferencia:</p>
          <div className="bg-slate-800/50 rounded-lg p-3 font-mono text-xs">
            <p>Cuenta: 123-4567890-123</p>
            <p>CCI: 00123456789012345678</p>
            <p>Banco: BCP</p>
            <p>A nombre: Sistema de Ventas S.A.</p>
          </div>
          <p className="text-yellow-400 font-medium">
            Confirma el depósito antes de marcar como pagada.
          </p>
        </div>
      );
    case PaymentMethod.YAPE:
    case PaymentMethod.PLIN:
      return (
        <div className="text-sm text-slate-300 space-y-2">
          <p>El cliente debe realizar el pago mediante {metodo}.</p>
          <div className="bg-slate-800/50 rounded-lg p-3 font-mono text-xs">
            <p>Número: +51 999 888 777</p>
            <p>A nombre: Sistema de Ventas</p>
          </div>
          <p className="text-yellow-400 font-medium">
            Verifica el comprobante de pago antes de confirmar.
          </p>
        </div>
      );
    default:
      return <p className="text-sm text-slate-400">Método de pago no especificado.</p>;
  }
}

export function PagoConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  saleId,
  total,
  metodoPago,
  clienteNombre,
  isProcessing = false,
}: PagoConfirmationDialogProps) {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = async () => {
    setIsConfirming(true);
    try {
      await onConfirm();
      onClose();
    } catch (error) {
      // Error handling is done in the parent component
    } finally {
      setIsConfirming(false);
    }
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Confirmar Pago"
      size="md"
    >
      <div className="space-y-6">
        {/* Información de la venta */}
        <Card className="border-slate-700 bg-slate-800/50">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Venta ID:</span>
              <Badge variant="outline" className="text-blue-400 border-blue-400">
                #{saleId}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-300">Cliente:</span>
              <span className="text-white font-medium">{clienteNombre}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-300">Total a pagar:</span>
              <span className="text-green-400 font-bold text-lg">{formatCurrency(total)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Método de pago */}
        <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-600">
          {getPaymentIcon(metodoPago)}
          <div className="flex-1">
            <p className="text-white font-medium">{metodoPago}</p>
            <p className="text-sm text-slate-400">Método de pago seleccionado</p>
          </div>
        </div>

        {/* Información específica del método */}
        <div className="space-y-3">
          <h4 className="text-white font-medium flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Instrucciones de pago
          </h4>
          {getPaymentInfo(metodoPago)}
        </div>

        {/* Confirmación */}
        <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-lg p-4">
          <p className="text-yellow-200 font-medium mb-2">
            ⚠️ Importante: Confirmar pago
          </p>
          <p className="text-sm text-slate-300">
            Al confirmar, la venta cambiará a estado "PAGADA" y podrá proceder con el envío.
            Esta acción no se puede deshacer automáticamente.
          </p>
        </div>
      </div>

      <DialogFooter>
        <Button
          variant="ghost"
          onClick={onClose}
          disabled={isConfirming || isProcessing}
          className="text-slate-400 hover:text-white"
        >
          Cancelar
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={isConfirming || isProcessing}
          isLoading={isConfirming}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          {isConfirming ? 'Confirmando...' : 'Confirmar Pago'}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
