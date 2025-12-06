package com.ventas.modelos;

import com.ventas.abstractas.PersonaBase;
import com.ventas.enums.RolUsuario;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "usuarios")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Usuario extends PersonaBase {

    // PASSWORD CONSTRAINTS REMOVED COMPLETELY FROM MODEL
    // Validation handled at service level only for user creation
    // DB constraint NOT NULL remains for data integrity
    @Column(name = "password", nullable = false, length = 255, columnDefinition = "VARCHAR(255) NOT NULL DEFAULT ''")
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "rol", length = 20, nullable = false)
    private RolUsuario rol;

    @Column(name = "numero_documento", unique = true, length = 20)
    private String numeroDocumento;

    @Override
    public String getTipoPersona() {
        return "USUARIO";
    }
}
