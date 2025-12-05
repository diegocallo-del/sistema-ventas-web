package com.ventas.seguridad;

import com.ventas.modelos.Usuario;
import com.ventas.repositorios.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Servicio que carga los detalles del usuario para Spring Security.
 * Implementa UserDetailsService para integrar con Spring Security.
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class JpaUserDetailsService implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    /**
     * Carga el usuario por email/username para autenticación.
     * @param email Email del usuario
     * @return UsuarioPrincipal con datos del usuario
     * @throws UsernameNotFoundException si no se encuentra el usuario
     */
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        log.debug("Buscando usuario por email: {}", email);

        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(
                    "Usuario no encontrado con email: " + email));

        // Verificar que el usuario esté activo
        if (!usuario.isActivo()) {
            throw new UsernameNotFoundException("Usuario inactivo con email: " + email);
        }

        log.debug("Usuario encontrado: {} (ID: {}, Rol: {})", usuario.getNombre(), usuario.getId(), usuario.getRol());

        return UsuarioPrincipal.create(usuario);
    }
}
