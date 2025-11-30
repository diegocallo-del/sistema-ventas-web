package com.ventas.seguridad;

import com.ventas.modelos.Usuario;
import com.ventas.repositorios.UsuarioRepository;
import com.ventas.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

/**
 * Filtro JWT que intercepta todas las solicitudes HTTP para validar tokens JWT.
 * Si encuentra un token válido en el header Authorization, configura el contexto de seguridad.
 */
@Component
@Slf4j
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final UsuarioRepository usuarioRepository;

    /**
     * Método principal del filtro que procesa cada solicitud HTTP.
     * Extrae el token JWT, lo valida y configura el contexto de seguridad si es válido.
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        String requestPath = request.getRequestURI();
        
        // Saltar el filtro para rutas públicas
        if (requestPath.startsWith("/api/auth/") || 
            requestPath.startsWith("/actuator/") ||
            requestPath.startsWith("/swagger-ui/") ||
            requestPath.startsWith("/v3/api-docs/")) {
            filterChain.doFilter(request, response);
            return;
        }

        try {
            String token = extractToken(request);
            
            if (token == null) {
                log.debug("No se encontró token JWT en la solicitud: {}", requestPath);
                filterChain.doFilter(request, response);
                return;
            }

            String username = extractUsernameFromToken(token);
            log.debug("Token encontrado para usuario: {}", username);

            if (username == null) {
                log.warn("No se pudo extraer username del token");
                filterChain.doFilter(request, response);
                return;
            }

            if (!jwtUtil.validateToken(token, username)) {
                log.warn("Token inválido o expirado para usuario: {}", username);
                filterChain.doFilter(request, response);
                return;
            }

            Usuario usuario = usuarioRepository.findByEmail(username)
                    .orElse(null);

            if (usuario == null) {
                log.warn("Usuario no encontrado en BD: {}", username);
                filterChain.doFilter(request, response);
                return;
            }

            if (!usuario.isActivo()) {
                log.warn("Usuario inactivo: {}", username);
                filterChain.doFilter(request, response);
                return;
            }

            String role = "ROLE_" + usuario.getRol().name();
            log.debug("Autenticando usuario: {} con rol: {}", username, role);

            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                    usuario.getEmail(),
                    null,
                    Collections.singletonList(new SimpleGrantedAuthority(role))
            );

            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            log.debug("Autenticación establecida correctamente para: {}", username);

        } catch (Exception e) {
            log.error("Error procesando token JWT en ruta {}: {}", requestPath, e.getMessage(), e);
            SecurityContextHolder.clearContext();
        }

        filterChain.doFilter(request, response);
    }

    /**
     * Extrae el token JWT del header Authorization.
     * Se espera el formato: "Bearer {token}".
     */
    private String extractToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7);
        }

        return null;
    }

    /**
     * Extrae el nombre de usuario del token JWT.
     */
    private String extractUsernameFromToken(String token) {
        return jwtUtil.extractUsername(token);
    }
}
