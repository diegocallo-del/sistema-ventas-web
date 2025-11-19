═══════════════════════════════════════════════════════════
CARPETA: CONFIG (Configuraciones Java)
RESPONSABLE: PERSONA 2 - Infraestructura (algunas) / PERSONA 5 - Seguridad (otras)
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Clases de configuración de Spring Boot usando anotaciones @Configuration.
Aquí se configuran beans y componentes transversales.

CLASES QUE DEBES CREAR:
  • ModelMapperConfig.java (Persona 2 - configuración ModelMapper)
  • CorsConfig.java (Persona 2 - configuración CORS)
  • SecurityConfig.java (Persona 5 - configuración Spring Security)
  • JwtConfig.java (Persona 5 - utilidades JWT)

ESTRUCTURA DE ModelMapperConfig:
@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper mapper = new ModelMapper();
        // Configuraciones personalizadas si es necesario
        return mapper;
    }
}

ESTRUCTURA DE CorsConfig:
@Configuration
public class CorsConfig {
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        return new UrlBasedCorsConfigurationSource();
    }
}

ESTRUCTURA DE SecurityConfig (Persona 5):
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}

NOTAS IMPORTANTES:
- @Configuration marca la clase como configuración de Spring
- @Bean define objetos que Spring gestiona
- SecurityConfig es complejo, Persona 5 lo hace con ayuda de Persona 2
- ModelMapperConfig permite usar ModelMapper en servicios

COORDINACIÓN:
- Persona 2 crea ModelMapperConfig y CorsConfig
- Persona 5 crea SecurityConfig y JwtConfig
- Todos los servicios usan ModelMapper configurado aquí

