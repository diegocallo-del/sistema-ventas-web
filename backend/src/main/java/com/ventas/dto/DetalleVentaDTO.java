package com.ventas.dto;

import java.math.BigDecimal;

public record DetalleVentaDTO(
        Long id,
        Long productoId,
        String productoNombre,
        int cantidad,
        BigDecimal precioUnitario,
        BigDecimal subtotal
) {}
