package com.ventas.seguridad;

import com.ventas.modelos.Usuario;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

/**
 * Implementación de UserDetails para Spring Security.
 * Wrapper alrededor del modelo Usuario para proporcionar información de autenticación.
 */
@Data
@AllArgsConstructor
public class UsuarioPrincipal implements UserDetails {

    private Long id;
    private String username;
    private String password;
    private String nombre;
    private String email;
    private Collection<? extends GrantedAuthority> authorities;
    private boolean activo;

    /**
     * Crea un UsuarioPrincipal a partir de un Usuario.
     * @param usuario El usuario de dominio
     * @return UsuarioPrincipal configurado
     */
    public static UsuarioPrincipal create(Usuario usuario) {
        // Crear autoridad basada en el rol del usuario (default CLIENTE si null)
        String rol = usuario.getRol() != null ? usuario.getRol().name() : "CLIENTE";
        GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + rol);

        return new UsuarioPrincipal(
            usuario.getId(),
            usuario.getEmail(), // Usar email como username
            usuario.getPassword(),
            usuario.getNombre(),
            usuario.getEmail(),
            Collections.singletonList(authority),
            usuario.isActivo()
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // No expiran las cuentas
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // No se bloquean las cuentas
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Las credenciales no expiran
    }

    @Override
    public boolean isEnabled() {
        return activo;
    }

    /**
     * Obtiene el ID del usuario.
     * @return ID del usuario
     */
    public Long getId() {
        return id;
    }

    /**
     * Obtiene el nombre completo del usuario.
     * @return Nombre completo
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * Obtiene el email del usuario.
     * @return Email del usuario
     */
    public String getEmail() {
        return email;
    }
}
