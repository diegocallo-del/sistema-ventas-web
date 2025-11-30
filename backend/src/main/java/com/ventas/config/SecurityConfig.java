
package com.ventas.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

/**
 * Configuración de Seguridad simplificada para desarrollo local.
 * Sin JWT, todas las rutas permitidas.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Deshabilitar CSRF
            .csrf(csrf -> csrf.disable())
            
            // Configurar CORS
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            
            // Permitir todas las peticiones sin autenticación
            .authorizeHttpRequests(authz -> authz
                .anyRequest().permitAll()
            );

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

}
