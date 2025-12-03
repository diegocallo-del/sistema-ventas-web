package com.ventas.servicios;

import com.ventas.dto.CreateProductoDTO;
import com.ventas.dto.ProductoDTO;
import com.ventas.excepciones.ResourceNotFoundException;
import com.ventas.excepciones.ValidationException;
import com.ventas.modelos.Categoria;
import com.ventas.modelos.Producto;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.CategoriaRepository;
import com.ventas.repositorios.ProductoRepository;
import com.ventas.repositorios.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Servicio para la gestión de productos.
 * Implementa operaciones CRUD y lógica de negocio relacionada con productos.
 */
@Service
@RequiredArgsConstructor
@Transactional
public class ProductoService {

    private final ProductoRepository productoRepository;
    private final CategoriaRepository categoriaRepository;
    private final UsuarioRepository usuarioRepository;

    /**
     * Obtiene todos los productos activos.
     * @return Lista de productos activos como DTO
     */
    @Transactional(readOnly = true)
    public List<ProductoDTO> obtenerTodosLosProductos() {
        return productoRepository.findByActivoTrue().stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Obtiene un producto por su ID.
     * @param id ID del producto
     * @return Producto como DTO
     */
    @Transactional(readOnly = true)
    public ProductoDTO obtenerProductoPorId(Long id) {
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con ID: " + id));
        return convertirADTO(producto);
    }

    /**
     * Crea un nuevo producto.
     * @param createDTO Datos del producto a crear
     * @return Producto creado como DTO
     */
    public ProductoDTO crearProducto(CreateProductoDTO createDTO) {
        validarDatosProducto(createDTO);

        // Verificar que la categoría existe
        Categoria categoria = categoriaRepository.findById(createDTO.categoriaId())
                .orElseThrow(() -> new ValidationException("La categoría especificada no existe"));

        // Usar vendedor por defecto (admin id 1) - luego implementar auth
        Usuario vendedor = usuarioRepository.findById(1L)
                .orElseThrow(() -> new ValidationException("Vendedor por defecto no encontrado"));

        // Generar código automático si no se proporciona
        String codigo = createDTO.codigo();
        if (codigo == null || codigo.trim().isEmpty()) {
            codigo = generarCodigoAutomatico(createDTO.nombre(), categoria.getNombre());
        }

        Producto producto = Producto.builder()
                .nombre(createDTO.nombre())
                .codigo(codigo)
                .descripcion(createDTO.descripcion())
                .marca(createDTO.marca())
                .modelo(createDTO.modelo())
                .precio(createDTO.precio())
                .stock(createDTO.stock())
                .categoria(categoria)
                .vendedor(vendedor)
                .build();
        producto.setActivo(true);

        Producto productoGuardado = productoRepository.save(producto);
        return convertirADTO(productoGuardado);
    }

    /**
     * Actualiza un producto existente.
     * @param id ID del producto a actualizar
     * @param createDTO Datos actualizados del producto
     * @return Producto actualizado como DTO
     */
    public ProductoDTO actualizarProducto(Long id, CreateProductoDTO createDTO) {
        validarDatosProducto(createDTO);

        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con ID: " + id));

        // Verificar que la categoría existe
        Categoria categoria = categoriaRepository.findById(createDTO.categoriaId())
                .orElseThrow(() -> new ValidationException("La categoría especificada no existe"));

        // Generar código automático si no se proporciona o está vacío
        String codigo = createDTO.codigo();
        if (codigo == null || codigo.trim().isEmpty()) {
            codigo = generarCodigoAutomatico(createDTO.nombre(), categoria.getNombre());
        }

        producto.setNombre(createDTO.nombre());
        producto.setCodigo(codigo);
        producto.setDescripcion(createDTO.descripcion());
        producto.setMarca(createDTO.marca());
        producto.setModelo(createDTO.modelo());
        producto.setPrecio(createDTO.precio());
        producto.setStock(createDTO.stock());
        producto.setCategoria(categoria);

        Producto productoActualizado = productoRepository.save(producto);
        return convertirADTO(productoActualizado);
    }

    /**
     * Elimina lógicamente un producto (lo marca como inactivo).
     * @param id ID del producto a eliminar
     */
    public void eliminarProducto(Long id) {
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con ID: " + id));

        producto.setActivo(false);
        productoRepository.save(producto);
    }

    /**
     * Busca productos por nombre aproximado.
     * @param nombre Nombre a buscar
     * @return Lista de productos que coinciden
     */
    @Transactional(readOnly = true)
    public List<ProductoDTO> buscarProductosPorNombre(String nombre) {
        return productoRepository.findByNombreContainingIgnoreCase(nombre).stream()
                .filter(Producto::isActivo)
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Obtiene productos con stock bajo.
     * @param stockMinimo Umbral mínimo de stock
     * @return Lista de productos con stock bajo
     */
    @Transactional(readOnly = true)
    public List<ProductoDTO> obtenerProductosConStockBajo(Integer stockMinimo) {
        return productoRepository.findProductosConStockBajo(stockMinimo).stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Actualiza el stock de un producto.
     * @param id ID del producto
     * @param nuevoStock Nuevo stock
     * @return Producto actualizado como DTO
     */
    public ProductoDTO actualizarStock(Long id, Integer nuevoStock) {
        if (nuevoStock < 0) {
            throw new ValidationException("El stock no puede ser negativo");
        }

        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con ID: " + id));

        producto.setStock(nuevoStock);
        Producto productoActualizado = productoRepository.save(producto);
        return convertirADTO(productoActualizado);
    }

    /**
     * Genera un código automático único para el producto.
     * @param nombreProducto Nombre del producto
     * @param nombreCategoria Nombre de la categoría
     * @return Código único generado
     */
    private String generarCodigoAutomatico(String nombreProducto, String nombreCategoria) {
        // Usar timestamp para generar códigos únicos automáticamente
        long timestamp = System.currentTimeMillis();
        String timeCode = Long.toString(timestamp).substring(6); // Últimos 7 dígitos

        // Limpiar y acortar nombres (máximo 8 caracteres para nombre)
        String nombreLimpio = limpiarTextoParaCodigo(nombreProducto).substring(0, Math.min(6, nombreProducto.length()));
        String categoriaLimpio = limpiarTextoParaCodigo(nombreCategoria).substring(0, Math.min(3, nombreCategoria.length()));

        // Generar código: NOMBRE-CATEGORIA-TIMESTAMP (ej: LAPTOP-COM-1234567)
        return String.format("%s-%s-%s", nombreLimpio.toUpperCase(), categoriaLimpio.toUpperCase(), timeCode);
    }

    /**
     * Limpia el texto para usarlo en códigos: elimina caracteres especiales y espacios.
     * @param texto Texto a limpiar
     * @return Texto limpio en mayúsculas
     */
    private String limpiarTextoParaCodigo(String texto) {
        if (texto == null) return "";
        // Mantener solo letras, números y espacios, luego reemplazar espacios con guiones
        return texto.replaceAll("[^a-zA-Z0-9\\s]", "").trim().replaceAll("\\s+", "-").toUpperCase();
    }

    /**
     * Valida los datos de un producto antes de guardar.
     * @param dto Datos a validar
     */
    private void validarDatosProducto(CreateProductoDTO dto) {
        if (dto.precio().compareTo(java.math.BigDecimal.ZERO) <= 0) {
            throw new ValidationException("El precio debe ser mayor que cero");
        }
        if (dto.stock() < 0) {
            throw new ValidationException("El stock no puede ser negativo");
        }
    }

    /**
     * Convierte una entidad Producto a DTO.
     * @param producto Entidad Producto
     * @return Producto como DTO
     */
    private ProductoDTO convertirADTO(Producto producto) {
        return new ProductoDTO(
                producto.getId(),
                producto.getCodigo(),
                producto.getNombre(),
                producto.getDescripcion(),
                producto.getMarca(),
                producto.getModelo(),
                producto.getPrecio(),
                producto.getStock(),
                producto.getCategoria() != null ? producto.getCategoria().getId() : null,
                producto.getCategoria() != null ? producto.getCategoria().getNombre() : null,
                producto.getVendedor() != null ? producto.getVendedor().getId() : null,
                producto.getVendedor() != null ? producto.getVendedor().getNombre() : null,
                null, // imagen
                producto.isActivo(),
                producto.getFechaCreacion(),
                producto.getFechaModificacion()
        );
    }


}
