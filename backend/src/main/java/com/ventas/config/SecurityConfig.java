
package com.ventas.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

/**
 * Configuración de Seguridad y CORS consolidada.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${cors.allowed-origins}")
    private String allowedOrigins;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 1. Usa la configuración de CORS definida en el bean corsConfigurationSource()
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            
            // 2. Deshabilita CSRF (Cross-Site Request Forgery)
            .csrf(csrf -> csrf.disable())
            
            // 3. Define las reglas de autorización para las peticiones HTTP.
            .authorizeHttpRequests(authz -> authz
                // Permite acceso público a rutas específicas (si las tuvieras)
                // .requestMatchers("/api/public/**").permitAll()
                
                // Por ahora, permite acceso a TODAS las rutas para depurar el problema de CORS
                .anyRequest().permitAll()
            )
            
            // 4. Configura el manejo de sesiones para que sea SIN ESTADO (stateless).
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        
        // Lee los orígenes permitidos desde application.properties y los configura
        configuration.setAllowedOrigins(Arrays.asList(allowedOrigins.split(",")));
        
        // Permite los métodos HTTP más comunes
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        
        // Permite todas las cabeceras
        configuration.setAllowedHeaders(Arrays.asList("*"));
        
        // Permite el envío de credenciales (como cookies)
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        // Aplica esta configuración a todas las rutas de la API
        source.registerCorsConfiguration("/**", configuration);
        
        return source;
    }
}
