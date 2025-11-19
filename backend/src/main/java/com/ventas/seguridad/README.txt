═══════════════════════════════════════════════════════════
CARPETA: SEGURIDAD (Autenticación JWT)
RESPONSABLE: PERSONA 5 - Controladores y Seguridad
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Implementación de autenticación JWT usando Spring Security y Nimbus JOSE + JWT.

CLASES QUE DEBES CREAR:
  • JwtTokenProvider.java (generar y validar tokens JWT)
  • JwtAuthenticationFilter.java (filtro que valida token en cada request)
  • UserDetailsServiceImpl.java (carga usuario para Spring Security)

ESTRUCTURA DE JwtTokenProvider:
@Component
@RequiredArgsConstructor
public class JwtTokenProvider {
    @Value("${jwt.secret}")
    private String secret;
    
    @Value("${jwt.expiration}")
    private Long expiration;
    
    public String generateToken(UserDetails userDetails) {
        // Generar token JWT usando Nimbus JOSE + JWT
        // Incluir: username, roles, fecha de expiración
    }
    
    public boolean validateToken(String token) {
        // Validar que el token no esté expirado y sea válido
    }
    
    public String getUsernameFromToken(String token) {
        // Extraer username del token
    }
}

ESTRUCTURA DE JwtAuthenticationFilter:
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtTokenProvider tokenProvider;
    private final UserDetailsServiceImpl userDetailsService;
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                   HttpServletResponse response, 
                                   FilterChain filterChain) {
        // 1. Extraer token del header Authorization
        // 2. Validar token
        // 3. Si válido, cargar UserDetails y establecer autenticación
        // 4. Continuar con el filtro
    }
}

ESTRUCTURA DE UserDetailsServiceImpl:
@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UsuarioRepository usuarioRepository;
    
    @Override
    public UserDetails loadUserByUsername(String username) {
        Usuario usuario = usuarioRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
        
        return User.builder()
            .username(usuario.getUsername())
            .password(usuario.getPassword())
            .roles(usuario.getRol().name())
            .build();
    }
}

NOTAS IMPORTANTES:
- JWT se genera en AuthController cuando el usuario hace login
- JwtAuthenticationFilter intercepta TODOS los requests (excepto /api/auth/**)
- Si el token es válido, Spring Security establece la autenticación
- Si el token es inválido o no existe, retorna 401 Unauthorized

COORDINACIÓN:
- Usa UsuarioRepository creado por Persona 3
- SecurityConfig (en config/) usa JwtAuthenticationFilter
- AuthController (en controladores/) usa JwtTokenProvider

