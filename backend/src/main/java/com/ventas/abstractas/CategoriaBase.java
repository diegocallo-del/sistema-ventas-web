package com.ventas.abstractas;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.ventas.interfaces.Nombrable;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public abstract class CategoriaBase extends EntidadBase implements Nombrable {

    @NotBlank(message = "El nombre de la categoría es obligatorio")
    @Column(name = "nombre", unique = true, length = 50)
    private String nombre;
}
