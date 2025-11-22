package com.ventas.dto;

import jakarta.validation.constraints.NotBlank;

public record AnalisisIARequestDTO(
        @NotBlank String pregunta,
        @NotBlank String contexto // Ej: "reporte_ventas_mensuales", "reporte_inventario"
) {}
