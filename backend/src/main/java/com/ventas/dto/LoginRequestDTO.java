package com.ventas.dto;

import jakarta.validation.constraints.NotBlank;

/**
 * DTO para la solicitud de login.
 * Contiene las credenciales de usuario para autenticación.
 */
public record LoginRequestDTO(

    @NotBlank(message = "El nombre de usuario es obligatorio")
    String username,

    @NotBlank(message = "La contraseña es obligatoria")
    String password

) {}
