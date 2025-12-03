package com.ventas.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

public record CreateProductoDTO(
        @NotBlank(message = "El nombre del producto es obligatorio")
        String nombre,
        String codigo,
        String descripcion,
        String marca,
        String modelo,
        @NotNull(message = "El precio es obligatorio")
        @DecimalMin(value = "0.0", inclusive = false, message = "El precio debe ser mayor que 0")
        BigDecimal precio,
        @NotNull(message = "El stock es obligatorio")
        @Min(value = 0, message = "El stock no puede ser negativo")
        Integer stock,
        @NotNull(message = "El ID de la categoría es obligatorio")
        Long categoriaId
) {}
