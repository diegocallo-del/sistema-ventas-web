
package com.ventas.config;

import com.ventas.seguridad.JwtAuthFilter;
import com.ventas.seguridad.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

/**
 * Configuración de Seguridad y CORS consolidada con JWT.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${cors.allowed-origins:http://localhost:3000}")
    private String allowedOrigins;

    private final JwtAuthFilter jwtAuthFilter;

    public SecurityConfig(JwtAuthFilter jwtAuthFilter) {
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 1. Primero deshabilita CSRF - IMPORTANTE HACERLO ANTES
            .csrf(csrf -> csrf.disable())

            // 2. Configura CORS antes que cualquier otra cosa
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))

            // 3. Rutas públicas - especificar UNA POR UNA para asegurar prioridad
            .authorizeHttpRequests(authz -> authz
                // Permitir endpoints específicos PRIMERO
                .requestMatchers("/actuator/health").permitAll()
                .requestMatchers("/actuator/**").permitAll()
                .requestMatchers("/api/auth/login").permitAll()
                .requestMatchers("/api/auth/register").permitAll()
                .requestMatchers("/api/auth/test").permitAll() // NUEVO
                .requestMatchers("/api/auth/bootstrap").permitAll() // TEMPORAL PARA CREAR PRIMER USUARIO
                .requestMatchers("/api/auth/fix-passwords").permitAll() // TEMPORAL PARA RECODIFICAR CONTRASEÑAS
                .requestMatchers("/swagger-ui/**").permitAll()
                .requestMatchers("/v3/api-docs/**").permitAll()

                // TODAS LAS DEMÁS rutas requieren autenticación
                .anyRequest().authenticated()
            )

            // 4. Agregamos el filtro JWT DESPUÉS de configurar las rutas
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)

            // 5. Configura el manejo de sesiones para que sea SIN ESTADO (stateless).
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // CONFIGURACIÓN RADICAL PARA DESARROLLO: Permitir TODO
        configuration.setAllowedOriginPatterns(Arrays.asList("*"));

        // TODOS los métodos HTTP
        configuration.setAllowedMethods(Arrays.asList(
            "GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "HEAD", "TRACE"
        ));

        // TODAS las cabeceras
        configuration.setAllowedHeaders(Arrays.asList("*"));

        // NO requerir credenciales (para evitar problemas de preflight)
        configuration.setAllowCredentials(false);

        // Headers expuestos
        configuration.setExposedHeaders(Arrays.asList(
            "Access-Control-Allow-Origin",
            "Access-Control-Allow-Credentials",
            "Access-Control-Allow-Methods",
            "Access-Control-Allow-Headers"
        ));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        // Configuración específica para endpoints públicos
        source.registerCorsConfiguration("/api/auth/**", configuration);
        source.registerCorsConfiguration("/actuator/**", configuration);
        source.registerCorsConfiguration("/api/**", configuration); // Configuración permisiva para toda la API
        source.registerCorsConfiguration("/**", configuration); // Backup para todo

        return source;
    }

    /**
     * Configura el codificador de contraseñas - NO ENCODER PARA DESARROLLO.
     * @return PasswordEncoder sin encriptación (desarrollo únicamente)
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        // Para desarrollo simple - NO usar en producción
        return org.springframework.security.crypto.password.NoOpPasswordEncoder.getInstance();
    }

    /**
     * Configura el AuthenticationManager para inyección de dependencias.
     * @param config Configuración de autenticación
     * @return AuthenticationManager configurado
     * @throws Exception Si hay errores en la configuración
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
