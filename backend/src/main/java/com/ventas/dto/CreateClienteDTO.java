package com.ventas.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateClienteDTO(
        @NotBlank(message = "El nombre es obligatorio")
        @Size(max = 100)
        String nombre,
        @NotBlank(message = "El email es obligatorio")
        @Email(message = "El formato del email no es válido")
        @Size(max = 100)
        String email,
        @Size(max = 20)
        String telefono,
        @Size(max = 255)
        String direccion,
        @Size(max = 20)
        String numeroDocumento
) {}
