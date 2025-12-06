package com.ventas.controladores;

import com.ventas.dto.CategoriaDTO;
import com.ventas.dto.CreateCategoriaDTO;
import com.ventas.servicios.CategoriaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.validation.Valid;
import java.util.List;

/**
 * Controlador REST para la gestión de categorías.
 * Proporciona endpoints para operaciones CRUD de categorías.
 */
@RestController
@RequestMapping("/api/categorias")
@RequiredArgsConstructor
@Validated
@Tag(name = "Categorías", description = "CRUD y consultas de categorías")
public class CategoriaController {

    private final CategoriaService categoriaService;

    /**
     * Obtiene todas las categorías activas.
     * @return Lista de categorías activas
     */
    @GetMapping
    @Operation(summary = "Listar categorías", description = "Obtiene categorías activas")
    public ResponseEntity<List<CategoriaDTO>> obtenerTodasLasCategorias() {
        List<CategoriaDTO> categorias = categoriaService.obtenerTodasLasCategorias();
        return ResponseEntity.ok(categorias);
    }

    /**
     * Obtiene una categoría por su ID.
     * @param id ID de la categoría
     * @return Categoría encontrada
     */
    @GetMapping("/{id}")
    @Operation(summary = "Obtener categoría", description = "Obtiene una categoría por ID")
    public ResponseEntity<CategoriaDTO> obtenerCategoriaPorId(@PathVariable Long id) {
        CategoriaDTO categoria = categoriaService.obtenerCategoriaPorId(id);
        return ResponseEntity.ok(categoria);
    }

    /**
     * Busca categorías por nombre aproximado.
     * @param nombre Nombre a buscar
     * @return Lista de categorías que coinciden
     */
    @GetMapping("/buscar")
    @Operation(summary = "Buscar categorías", description = "Busca categorías por nombre aproximado")
    public ResponseEntity<List<CategoriaDTO>> buscarCategoriasPorNombre(@RequestParam String nombre) {
        List<CategoriaDTO> categorias = categoriaService.buscarCategoriasPorNombre(nombre);
        return ResponseEntity.ok(categorias);
    }

    /**
     * Obtiene categorías que tienen productos asociados.
     * @return Lista de categorías con productos
     */
    @GetMapping("/con-productos")
    @Operation(summary = "Categorías con productos", description = "Obtiene categorías que tienen productos asociados")
    public ResponseEntity<List<CategoriaDTO>> obtenerCategoriasConProductos() {
        List<CategoriaDTO> categorias = categoriaService.obtenerCategoriasConProductos();
        return ResponseEntity.ok(categorias);
    }

    /**
     * Crea una nueva categoría.
     * @param createDTO Datos de la categoría a crear
     * @return Categoría creada
     */
    @PostMapping
    @Operation(summary = "Crear categoría", description = "Crea una nueva categoría")
    public ResponseEntity<CategoriaDTO> crearCategoria(@Valid @RequestBody CreateCategoriaDTO createDTO) {
        CategoriaDTO categoria = categoriaService.crearCategoria(createDTO);
        return new ResponseEntity<>(categoria, HttpStatus.CREATED);
    }

    /**
     * Actualiza una categoría existente.
     * @param id ID de la categoría a actualizar
     * @param createDTO Datos actualizados de la categoría
     * @return Categoría actualizada
     */
    @PutMapping("/{id}")
    @Operation(summary = "Actualizar categoría", description = "Actualiza datos de una categoría")
    public ResponseEntity<CategoriaDTO> actualizarCategoria(
            @PathVariable Long id,
            @Valid @RequestBody CreateCategoriaDTO createDTO) {
        CategoriaDTO categoria = categoriaService.actualizarCategoria(id, createDTO);
        return ResponseEntity.ok(categoria);
    }

    /**
     * Elimina lógicamente una categoría.
     * @param id ID de la categoría a eliminar
     * @return Respuesta sin contenido
     */
    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar categoría", description = "Elimina lógicamente una categoría")
    public ResponseEntity<Void> eliminarCategoria(@PathVariable Long id) {
        categoriaService.eliminarCategoria(id);
        return ResponseEntity.noContent().build();
    }
}
