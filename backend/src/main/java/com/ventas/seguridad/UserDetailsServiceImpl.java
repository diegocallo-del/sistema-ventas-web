package com.ventas.seguridad;

import com.ventas.modelos.Usuario;
import com.ventas.repositorios.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Implementación de UserDetailsService para Spring Security.
 * Utiliza el UsuarioRepository para buscar usuarios por username.
 */
@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    /**
     * Carga un usuario por su username (en este caso email).
     * @param username El nombre de usuario (email)
     * @return UserDetails del usuario encontrado
     * @throws UsernameNotFoundException Si el usuario no existe
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(username) // Usar email como identificador único
            .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + username));

        return UsuarioPrincipal.create(usuario);
    }
}
