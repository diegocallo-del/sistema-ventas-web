package com.ventas.dto;

import com.ventas.enums.TipoPago;
import jakarta.validation.constraints.NotNull;
import java.util.List;

/**
 * DTO para crear una nueva venta.
 * Incluye el cliente, método de pago y los detalles de la venta.
 */
public record CreateVentaDTO(

    Long clienteId,

    @NotNull(message = "El método de pago es obligatorio")
    TipoPago tipoPago,

    @NotNull(message = "Los detalles de venta son obligatorios")
    List<CreateDetalleVentaDTO> detalles

) {}
