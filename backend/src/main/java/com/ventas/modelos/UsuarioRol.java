package com.ventas.modelos;

import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;

@Entity
@Table(name = "usuario_roles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsuarioRol {
    @Embeddable
    public static class UsuarioRolId implements java.io.Serializable {
        private static final long serialVersionUID = 1L;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "usuario_id", nullable = false)
        private Usuario usuario;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "rol_id", nullable = false)
        private Rol rol;

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            UsuarioRolId that = (UsuarioRolId) o;
            return Objects.equals(getUserId(), that.getUserId()) &&
                    Objects.equals(getRoleId(), that.getRoleId());
        }

        @Override
        public int hashCode() {
            return Objects.hash(getUserId(), getRoleId());
        }

        private Object getUserId() {
            return usuario == null ? null : usuario.getId();
        }

        private Object getRoleId() {
            return rol == null ? null : rol.getId();
        }
    }

    @EmbeddedId
    private UsuarioRolId id;
}
