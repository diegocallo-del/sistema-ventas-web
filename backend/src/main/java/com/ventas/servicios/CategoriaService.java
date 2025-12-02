package com.ventas.servicios;

import com.ventas.dto.CategoriaDTO;
import com.ventas.dto.CreateCategoriaDTO;
import com.ventas.excepciones.ResourceNotFoundException;
import com.ventas.excepciones.ValidationException;
import com.ventas.modelos.Categoria;
import com.ventas.repositorios.CategoriaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Servicio para la gestión de categorías.
 * Implementa operaciones CRUD y lógica de negocio relacionada con categorías.
 */
@Service
@RequiredArgsConstructor
@Transactional
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;

    /**
     * Obtiene todas las categorías activas.
     * @return Lista de categorías activas
     */
    @Transactional(readOnly = true)
    public List<CategoriaDTO> obtenerTodasLasCategorias() {
        return categoriaRepository.findCategoriasActivas().stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Obtiene una categoría por su ID.
     * @param id ID de la categoría
     * @return Categoría como DTO
     */
    @Transactional(readOnly = true)
    public CategoriaDTO obtenerCategoriaPorId(Long id) {
        Categoria categoria = categoriaRepository.findById(id)
                .filter(Categoria::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Categoría no encontrada con ID: " + id));
        return convertirADTO(categoria);
    }

    /**
     * Crea una nueva categoría.
     * @param createDTO Datos de la categoría a crear
     * @return Categoría creada como DTO
     */
    public CategoriaDTO crearCategoria(CreateCategoriaDTO createDTO) {
        validarCategoriaUnica(createDTO.nombre());

        Categoria categoria = new Categoria();
        categoria.setNombre(createDTO.nombre());
        categoria.setActivo(true);

        Categoria categoriaGuardada = categoriaRepository.save(categoria);
        return convertirADTO(categoriaGuardada);
    }

    /**
     * Actualiza una categoría existente.
     * @param id ID de la categoría a actualizar
     * @param createDTO Datos actualizados de la categoría
     * @return Categoría actualizada como DTO
     */
    public CategoriaDTO actualizarCategoria(Long id, CreateCategoriaDTO createDTO) {
        Categoria categoria = categoriaRepository.findById(id)
                .filter(Categoria::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Categoría no encontrada con ID: " + id));

        // Verificar unicidad si el nombre cambió
        if (!categoria.getNombre().equals(createDTO.nombre())) {
            validarCategoriaUnica(createDTO.nombre());
        }

        categoria.setNombre(createDTO.nombre());
        Categoria categoriaActualizada = categoriaRepository.save(categoria);
        return convertirADTO(categoriaActualizada);
    }

    /**
     * Elimina lógicamente una categoría.
     * @param id ID de la categoría a eliminar
     */
    public void eliminarCategoria(Long id) {
        Categoria categoria = categoriaRepository.findById(id)
                .filter(Categoria::isActivo)
                .orElseThrow(() -> new ResourceNotFoundException("Categoría no encontrada con ID: " + id));

        categoria.setActivo(false);
        categoriaRepository.save(categoria);
    }

    /**
     * Busca categorías por nombre aproximado.
     * @param nombre Nombre a buscar
     * @return Lista de categorías que coinciden
     */
    @Transactional(readOnly = true)
    public List<CategoriaDTO> buscarCategoriasPorNombre(String nombre) {
        return categoriaRepository.findByNombreContainingIgnoreCase(nombre).stream()
                .filter(Categoria::isActivo)
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Obtiene categorías que tienen productos asociados.
     * @return Lista de categorías con productos
     */
    @Transactional(readOnly = true)
    public List<CategoriaDTO> obtenerCategoriasConProductos() {
        return categoriaRepository.findCategoriasConProductos().stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Valida que no exista otra categoría con el mismo nombre.
     * @param nombre Nombre de la categoría
     */
    private void validarCategoriaUnica(String nombre) {
        if (categoriaRepository.existsByNombre(nombre)) {
            throw new ValidationException("Ya existe una categoría con el nombre: " + nombre);
        }
    }

    /**
     * Convierte una entidad Categoria a DTO.
     * @param categoria Entidad Categoria
     * @return Categoria como DTO
     */
    private CategoriaDTO convertirADTO(Categoria categoria) {
        return new CategoriaDTO(
                categoria.getId(),
                categoria.getNombre()
        );
    }
}
