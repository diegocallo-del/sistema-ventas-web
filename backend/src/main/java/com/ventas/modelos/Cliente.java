package com.ventas.modelos;

import com.ventas.abstractas.PersonaBase;
import com.ventas.enums.RolUsuario;
import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@DiscriminatorValue("CLIENTE")
public class Cliente extends Usuario {

    @Column(name = "numero_documento", unique = true, length = 20)
    private String numeroDocumento;

    @Override
    public String getTipoPersona() {
        return "CLIENTE";
    }
}
