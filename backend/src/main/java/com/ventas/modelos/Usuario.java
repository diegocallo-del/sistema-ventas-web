package com.ventas.modelos;

import com.ventas.abstractas.PersonaBase;
import com.ventas.enums.RolUsuario;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "usuarios")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "rol")
@DiscriminatorValue("USUARIO")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Usuario extends PersonaBase {

    @NotBlank(message = "La contraseña es obligatoria")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    @Column(name = "password", nullable = false, length = 255)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "rol", length = 20, nullable = false, insertable = false, updatable = false)
    private RolUsuario rol;

    @Column(name = "numero_documento", unique = true, length = 20)
    private String numeroDocumento;

    @Override
    public String getTipoPersona() {
        return "USUARIO";
    }
}
