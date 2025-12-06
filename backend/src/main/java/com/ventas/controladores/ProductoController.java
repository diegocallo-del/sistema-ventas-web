package com.ventas.controladores;

import com.ventas.dto.CreateProductoDTO;
import com.ventas.dto.CreateProductoConImagenDTO;
import com.ventas.dto.ProductoDTO;
import com.ventas.servicios.ProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.validation.Valid;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Controlador REST para la gestión de productos.
 * Proporciona endpoints para operaciones CRUD de productos.
 */
@RestController
@RequestMapping("/api/productos")
@RequiredArgsConstructor
@Validated
@Tag(name = "Productos", description = "CRUD y operaciones sobre productos")
public class ProductoController {

    private static final Logger log = LoggerFactory.getLogger(ProductoController.class);

    private final ProductoService productoService;

    /**
     * Obtiene todos los productos activos.
     * 
     * @return Lista de productos activos
     */
    @GetMapping
    @Operation(summary = "Listar productos", description = "Obtiene todos los productos activos")
    public ResponseEntity<List<ProductoDTO>> obtenerTodosLosProductos() {
        System.out.println("=== CONTROLADOR: Lista de productos solicitada ===");
        long startTime = System.currentTimeMillis();

        List<ProductoDTO> productos = productoService.obtenerTodosLosProductos();

        long endTime = System.currentTimeMillis();
        System.out.println("=== CONTROLADOR: Lista productos completada en " + (endTime - startTime)
                + "ms. Total productos: " + productos.size());

        return ResponseEntity.ok(productos);
    }

    /**
     * Obtiene un producto por su ID.
     * 
     * @param id ID del producto
     * @return Producto encontrado
     */
    @GetMapping("/{id}")
    @Operation(summary = "Obtener producto", description = "Obtiene un producto por ID")
    public ResponseEntity<ProductoDTO> obtenerProductoPorId(@PathVariable Long id) {
        ProductoDTO producto = productoService.obtenerProductoPorId(id);
        return ResponseEntity.ok(producto);
    }

    /**
     * Busca productos por nombre aproximado.
     * 
     * @param nombre Nombre a buscar
     * @return Lista de productos que coinciden
     */
    @GetMapping("/buscar")
    @Operation(summary = "Buscar productos", description = "Busca productos por nombre aproximado")
    public ResponseEntity<List<ProductoDTO>> buscarProductosPorNombre(@RequestParam String nombre) {
        List<ProductoDTO> productos = productoService.buscarProductosPorNombre(nombre);
        return ResponseEntity.ok(productos);
    }

    /**
     * Obtiene productos con stock bajo.
     * 
     * @param stockMinimo Umbral mínimo de stock (opcional, por defecto 10)
     * @return Lista de productos con stock bajo
     */
    @GetMapping("/stock-bajo")
    @Operation(summary = "Productos con stock bajo", description = "Lista productos con stock inferior al umbral")
    public ResponseEntity<List<ProductoDTO>> obtenerProductosConStockBajo(
            @RequestParam(defaultValue = "10") Integer stockMinimo) {
        List<ProductoDTO> productos = productoService.obtenerProductosConStockBajo(stockMinimo);
        return ResponseEntity.ok(productos);
    }

    /**
     * Crea un nuevo producto SIN imagen.
     * Solo acepta JSON
     */
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Crear producto", description = "Crea un producto sin imagen")
    public ResponseEntity<ProductoDTO> crearProducto(@Valid @RequestBody CreateProductoDTO createDTO) {
        ProductoDTO producto = productoService.crearProducto(createDTO);
        return new ResponseEntity<>(producto, HttpStatus.CREATED);
    }

    /**
     * Crea un nuevo producto CON imagen (por URL).
     * Acepta JSON con todos los campos de producto + imagenUrl
     */
    @PostMapping("/conimagenurl")
    @Operation(summary = "Crear producto con imagen URL", description = "Crea un producto asociando una URL de imagen")
    public ResponseEntity<ProductoDTO> crearProductoConImagenUrl(
            @Valid @RequestBody CreateProductoConImagenDTO requestDTO) {

        System.out.println("=== CONTROLADOR: crearProductoConImagenUrl INVOCADO ===");
        System.out.println("Producto: " + requestDTO.nombre());
        System.out.println("Imagen URL: " + requestDTO.imagenUrl());

        // Convertir al DTO base y llamar al servicio
        CreateProductoDTO createDTO = new CreateProductoDTO(
                requestDTO.nombre(),
                requestDTO.codigo(),
                requestDTO.descripcion(),
                requestDTO.marca(),
                requestDTO.modelo(),
                requestDTO.precio(),
                requestDTO.stock(),
                requestDTO.categoriaId());

        ProductoDTO producto = productoService.crearProductoConImagenUrl(createDTO, requestDTO.imagenUrl());
        return new ResponseEntity<>(producto, HttpStatus.CREATED);
    }

    /**
     * Actualiza un producto existente.
     * 
     * @param id        ID del producto a actualizar
     * @param createDTO Datos actualizados del producto
     * @return Producto actualizado
     */
    @PutMapping("/{id}")
    @Operation(summary = "Actualizar producto", description = "Actualiza datos de un producto")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPERVISOR')")
    public ResponseEntity<ProductoDTO> actualizarProducto(
            @PathVariable Long id,
            @Valid @RequestBody CreateProductoDTO createDTO) {
        ProductoDTO producto = productoService.actualizarProducto(id, createDTO);
        return ResponseEntity.ok(producto);
    }

    /**
     * Actualiza un producto existente con imagen.
     * Endpoint completamente NO transaccional
     */
    @PutMapping(value = "/{id}/imagen", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Actualizar producto con imagen", description = "Actualiza datos e imagen del producto")
    @PreAuthorize("hasAnyRole('ADMIN', 'SUPERVISOR')")
    public ResponseEntity<ProductoDTO> actualizarProductoConImagen(
            @PathVariable Long id,
            @RequestParam Long categoriaId,
            @RequestParam String nombre,
            @RequestParam(value = "descripcion", required = false) String descripcion,
            @RequestParam(value = "marca", required = false) String marca,
            @RequestParam(value = "modelo", required = false) String modelo,
            @RequestParam Double precio,
            @RequestParam Integer stock,
            @RequestParam(value = "codigo", required = false) String codigo,
            @RequestParam(value = "imagenEliminar", required = false, defaultValue = "false") Boolean imagenEliminar,
            @RequestParam(value = "imagen", required = false) MultipartFile imagen,
            @RequestParam(value = "imagenUrl", required = false) String nuevaImagenUrl) {

        System.out.println("=== CONTROLADOR: Iniciando actualización de producto con imagen ===");
        System.out.println("ID: " + id + ", Nombre: " + nombre + ", Imagen: " +
                (imagen != null ? imagen.getOriginalFilename() : "null") +
                ", Eliminar imagen: " + imagenEliminar);

        try {
            System.out.println("=== CONTROLADOR: Enviando al servicio ===");
            System.out.println(
                    "ID: " + id + ", imagenEliminar: " + imagenEliminar + ", imagen present: " + (imagen != null));

            // Llamar servicio completamente NO transaccional
            ProductoDTO producto = productoService.actualizarProductoConImagen(id,
                    codigo, nombre, descripcion, marca, modelo,
                    java.math.BigDecimal.valueOf(precio), stock, categoriaId, imagen, imagenEliminar, nuevaImagenUrl);

            System.out.println("=== CONTROLADOR: Producto actualizado exitosamente ===");
            System.out.println("Imagen final del producto: " + producto.imagen());
            return ResponseEntity.ok(producto);

        } catch (Exception e) {
            log.error("=== CONTROLADOR: Error en actualización ===");
            log.error("Mensaje: " + e.getMessage(), e);
            throw new RuntimeException("Error al actualizar producto con imagen: " + e.getMessage());
        }
    }

    /**
     * Actualiza el stock de un producto.
     * 
     * @param id         ID del producto
     * @param nuevoStock Nuevo stock
     * @return Producto con stock actualizado
     */
    @PatchMapping("/{id}/stock")
    @Operation(summary = "Actualizar stock", description = "Actualiza el stock de un producto")
    public ResponseEntity<ProductoDTO> actualizarStock(
            @PathVariable Long id,
            @RequestParam Integer nuevoStock) {
        ProductoDTO producto = productoService.actualizarStock(id, nuevoStock);
        return ResponseEntity.ok(producto);
    }

    /**
     * Elimina lógicamente un producto.
     * 
     * @param id ID del producto a eliminar
     * @return Respuesta sin contenido
     */
    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar producto", description = "Elimina lógicamente un producto")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        productoService.eliminarProducto(id);
        return ResponseEntity.noContent().build();
    }
}
