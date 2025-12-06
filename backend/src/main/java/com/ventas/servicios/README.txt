
CARPETA: SERVICIOS (Lógica de Negocio)
RESPONSABLE: PERSONA 4 - Servicios


DESCRIPCIÓN:
Lógica de negocio y reglas del sistema. Usa repositorios para acceder a datos
y ModelMapper para convertir entre Entidades y DTOs.

CLASES QUE DEBES CREAR:
  • ProductoService.java
  • ClienteService.java
  • UsuarioService.java
  • VentaService.java
  • ReporteService.java
  • AuthService.java

ESTRUCTURA BÁSICA:
@Service
@RequiredArgsConstructor  // Lombok: inyecta dependencias automáticamente
public class ProductoService {
    private final ProductoRepository productoRepository;
    private final ModelMapper modelMapper;
    
    public ProductoDTO listar() {
        List<Producto> productos = productoRepository.findAll();
        return productos.stream()
            .map(p -> modelMapper.map(p, ProductoDTO.class))
            .toList();
    }
    
    @Transactional  // Para operaciones que modifican datos
    public ProductoDTO crear(CreateProductoDTO dto) {
        Producto producto = modelMapper.map(dto, Producto.class);
        Producto guardado = productoRepository.save(producto);
        return modelMapper.map(guardado, ProductoDTO.class);
    }
}

RESPONSABILIDADES:
- Validar reglas de negocio (ej: stock suficiente para venta)
- Usar repositorios para acceder a datos
- Usar ModelMapper para convertir DTO ↔ Entidad
- Lanzar excepciones (ResourceNotFoundException, BusinessException)
- Usar @Transactional para operaciones que modifican datos

CONCEPTOS  APLICADOS:
ENCAPSULAMIENTO: Lógica de negocio encapsulada en servicios
REUTILIZACIÓN: Servicios pueden ser usados por múltiples controladores

