package com.ventas.seguridad;

import com.ventas.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * Filtro JWT que intercepta todas las solicitudes HTTP para validar tokens JWT.
 * Si encuentra un token válido en el header Authorization, configura el contexto de seguridad.
 */
@Component
@Slf4j
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final JpaUserDetailsService userDetailsService;

    /**
     * Método principal del filtro que procesa cada solicitud HTTP.
     * Extrae el token JWT, lo valida y configura el contexto de seguridad si es válido.
     */
    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException {
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

            // Cargar UsuarioPrincipal usando UserDetailsService
            UsuarioPrincipal usuarioPrincipal;
            try {
                usuarioPrincipal = (UsuarioPrincipal) userDetailsService.loadUserByUsername(username);
                log.debug("UsuarioPrincipal cargado: {} con rol: {}", username, usuarioPrincipal.getAuthorities());
            } catch (UsernameNotFoundException e) {
                log.warn("Usuario no encontrado {}: {}", username, e.getMessage());
                filterChain.doFilter(request, response);
                return;
            } catch (ClassCastException e) {
                log.warn("Error de casteo para usuario {}: {}", username, e.getMessage());
                filterChain.doFilter(request, response);
                return;
            } catch (Exception e) {
                log.warn("Error cargando usuario {}: {}", username, e.getMessage());
                filterChain.doFilter(request, response);
                return;
            }

            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                    usuarioPrincipal,
                    null,
                    usuarioPrincipal.getAuthorities()
            );

            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            log.debug("UsuarioPrincipal establecido correctamente para: {}", username);

        } catch (IllegalArgumentException e) {
            log.error("Error procesando token JWT en ruta {}: {}", requestPath, e.getMessage(), e);
            SecurityContextHolder.clearContext();
        } catch (RuntimeException e) {
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
