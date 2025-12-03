package com.ventas.dto;

import com.ventas.enums.EstadoVenta;
import com.ventas.enums.TipoPago;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

/**
 * DTO para representar una venta completa.
 * Incluye información del cliente, usuario y todos los detalles.
 */
public record VentaDTO(

    Long id,
    Long clienteId,
    String clienteNombre,
    String clienteNumeroDocumento,
    Long usuarioId,
    String usuarioNombre,
    BigDecimal subtotal,
    BigDecimal igv,
    BigDecimal total,
    EstadoVenta estado,
    TipoPago tipoPago,
    LocalDateTime fechaVenta,
    LocalDateTime fechaCreacion,
    boolean activo,
    List<DetalleVentaDTO> detalles

) {}
