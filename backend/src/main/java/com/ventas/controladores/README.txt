═══════════════════════════════════════════════════════════
CARPETA: CONTROLADORES (API REST)
RESPONSABLE: PERSONA 5 - Controladores y Seguridad
═══════════════════════════════════════════════════════════

DESCRIPCIÓN:
Controladores REST que exponen endpoints HTTP. Reciben DTOs, llaman a servicios
y retornan respuestas JSON. También implementan autenticación JWT.

CLASES QUE DEBES CREAR:
  • ProductoController.java
  • ClienteController.java
  • VentaController.java
  • UsuarioController.java
  • ReporteController.java
  • AuthController.java

ESTRUCTURA BÁSICA:
@RestController
@RequestMapping("/api/productos")
@RequiredArgsConstructor  // Lombok: inyección de dependencias
public class ProductoController {
    private final ProductoService productoService;
    
    @GetMapping
    public ResponseEntity<List<ProductoDTO>> listar() {
        return ResponseEntity.ok(productoService.listar());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> obtenerPorId(@PathVariable Long id) {
        ProductoDTO producto = productoService.obtenerPorId(id);
        return ResponseEntity.ok(producto);
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ProductoDTO> crear(@Valid @RequestBody CreateProductoDTO dto) {
        ProductoDTO creado = productoService.crear(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(creado);
    }
}

ENDPOINTS PRINCIPALES:
- GET /api/productos → Listar todos
- GET /api/productos/{id} → Obtener por ID
- POST /api/productos → Crear nuevo
- PUT /api/productos/{id} → Actualizar
- DELETE /api/productos/{id} → Eliminar

AUTENTICACIÓN:
- POST /api/auth/login → Iniciar sesión, retorna JWT
- GET /api/auth/me → Obtener usuario actual
- Los demás endpoints requieren JWT en header Authorization

NOTAS IMPORTANTES:
- Usa @Valid para validar DTOs (validaciones de Jakarta)
- Retorna códigos HTTP correctos (200, 201, 404, 400)
- Usa @RequiredArgsConstructor de Lombok
- Documenta con @Operation de OpenAPI/Swagger
- Los endpoints protegidos requieren JWT (configurado en SecurityConfig)

COORDINACIÓN:
- Usa servicios creados por Persona 4
- Usa DTOs creados por Persona 2
- Implementa JWT en seguridad/ (colabora con Persona 2 para SecurityConfig)
