package com.ventas.modelos;

import com.ventas.abstractas.PersonaBase;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "clientes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class Cliente extends PersonaBase {

    @Column(name = "numero_documento", unique = true, length = 20)
    private String numeroDocumento;
}
