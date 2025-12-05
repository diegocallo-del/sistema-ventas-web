package com.ventas.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public record CreateClienteDTO(
        @NotBlank(message = "El nombre es obligatorio")
        String nombre,

        @NotBlank(message = "El email es obligatorio")
        @Email(message = "El email debe tener un formato válido")
        String email,

        @Size(max = 20, message = "El teléfono no puede exceder 20 caracteres")
        String telefono,

        String direccion,

        String numeroDocumento
) {}

record UpdateClienteDTO(
        @NotBlank(message = "El nombre es obligatorio")
        String nombre,

        @NotBlank(message = "El email es obligatorio")
        @Email(message = "El email debe tener un formato válido")
        String email,

        @Size(max = 20, message = "El teléfono no puede exceder 20 caracteres")
        String telefono,

        String direccion,

        String numeroDocumento
) {}
