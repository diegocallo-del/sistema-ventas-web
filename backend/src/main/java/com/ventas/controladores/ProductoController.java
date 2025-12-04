package com.ventas.controladores;

import com.ventas.dto.CreateProductoDTO;
import com.ventas.dto.ProductoDTO;
import com.ventas.servicios.ProductoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.Valid;
import java.util.List;

/**
 * Controlador REST para la gestión de productos.
 * Proporciona endpoints para operaciones CRUD de productos.
 */
@RestController
@RequestMapping("/api/productos")
@RequiredArgsConstructor
@Validated
public class ProductoController {

    private final ProductoService productoService;

/**
 * Obtiene todos los productos activos.
 * @return Lista de productos activos
 */
@GetMapping
public ResponseEntity<List<ProductoDTO>> obtenerTodosLosProductos() {
    System.out.println("=== CONTROLADOR: Lista de productos solicitada ===");
    long startTime = System.currentTimeMillis();

    List<ProductoDTO> productos = productoService.obtenerTodosLosProductos();

    long endTime = System.currentTimeMillis();
    System.out.println("=== CONTROLADOR: Lista productos completada en " + (endTime - startTime) + "ms. Total productos: " + productos.size());

    return ResponseEntity.ok(productos);
}

    /**
     * Obtiene un producto por su ID.
     * @param id ID del producto
     * @return Producto encontrado
     */
    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> obtenerProductoPorId(@PathVariable Long id) {
        ProductoDTO producto = productoService.obtenerProductoPorId(id);
        return ResponseEntity.ok(producto);
    }

    /**
     * Busca productos por nombre aproximado.
     * @param nombre Nombre a buscar
     * @return Lista de productos que coinciden
     */
    @GetMapping("/buscar")
    public ResponseEntity<List<ProductoDTO>> buscarProductosPorNombre(@RequestParam String nombre) {
        List<ProductoDTO> productos = productoService.buscarProductosPorNombre(nombre);
        return ResponseEntity.ok(productos);
    }

    /**
     * Obtiene productos con stock bajo.
     * @param stockMinimo Umbral mínimo de stock (opcional, por defecto 10)
     * @return Lista de productos con stock bajo
     */
    @GetMapping("/stock-bajo")
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
    public ResponseEntity<ProductoDTO> crearProducto(@RequestBody CreateProductoDTO createDTO) {
        ProductoDTO producto = productoService.crearProducto(createDTO);
        return new ResponseEntity<>(producto, HttpStatus.CREATED);
    }

    /**
     * Crea un nuevo producto CON imagen.
     * Solo acepta FormData
     */
    @PostMapping(value = "/conimagen", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ProductoDTO> crearProductoConImagen(
            @RequestParam String nombre,
            @RequestParam(value = "descripcion", required = false) String descripcion,
            @RequestParam(value = "marca", required = false) String marca,
            @RequestParam(value = "modelo", required = false) String modelo,
            @RequestParam Double precio,
            @RequestParam Integer stock,
            @RequestParam Long categoriaId,
            @RequestParam(value = "codigo", required = false) String codigo,
            @RequestParam MultipartFile imagen) {

        CreateProductoDTO dto = new CreateProductoDTO(
                codigo,
                nombre,
                descripcion,
                marca,
                modelo,
                java.math.BigDecimal.valueOf(precio),
                stock,
                categoriaId
        );

        ProductoDTO producto = productoService.crearProductoConImagen(dto, imagen);
        return new ResponseEntity<>(producto, HttpStatus.CREATED);
    }

    /**
     * Actualiza un producto existente.
     * @param id ID del producto a actualizar
     * @param createDTO Datos actualizados del producto
     * @return Producto actualizado
     */
    @PutMapping("/{id}")
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
            @RequestParam(value = "imagen", required = false) MultipartFile imagen) {

        System.out.println("=== CONTROLADOR: Iniciando actualización de producto con imagen ===");
        System.out.println("ID: " + id + ", Nombre: " + nombre + ", Imagen: " +
                          (imagen != null ? imagen.getOriginalFilename() : "null") +
                          ", Eliminar imagen: " + imagenEliminar);

        try {
            System.out.println("=== CONTROLADOR: Enviando al servicio ===");
            System.out.println("ID: " + id + ", imagenEliminar: " + imagenEliminar + ", imagen present: " + (imagen != null));

            // Llamar servicio completamente NO transaccional
            ProductoDTO producto = productoService.actualizarProductoConImagen(id,
                    codigo, nombre, descripcion, marca, modelo,
                    java.math.BigDecimal.valueOf(precio), stock, categoriaId, imagen, imagenEliminar);

            System.out.println("=== CONTROLADOR: Producto actualizado exitosamente ===");
            System.out.println("Imagen final del producto: " + producto.imagen());
            return ResponseEntity.ok(producto);

        } catch (Exception e) {
            System.err.println("=== CONTROLADOR: Error en actualización ===");
            System.err.println("Mensaje: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException("Error al actualizar producto con imagen: " + e.getMessage());
        }
    }

    /**
     * Actualiza el stock de un producto.
     * @param id ID del producto
     * @param nuevoStock Nuevo stock
     * @return Producto con stock actualizado
     */
    @PatchMapping("/{id}/stock")
    public ResponseEntity<ProductoDTO> actualizarStock(
            @PathVariable Long id,
            @RequestParam Integer nuevoStock) {
        ProductoDTO producto = productoService.actualizarStock(id, nuevoStock);
        return ResponseEntity.ok(producto);
    }

    /**
     * Elimina lógicamente un producto.
     * @param id ID del producto a eliminar
     * @return Respuesta sin contenido
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        productoService.eliminarProducto(id);
        return ResponseEntity.noContent().build();
    }
}
