package com.ventas.repositorios;

import com.ventas.modelos.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Repositorio para operaciones CRUD de categorías en la base de datos.
 * Gestiona las categorías de productos en el sistema de ventas.
 */
@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {


    Optional<Categoria> findByNombre(String nombre);

    /**
     * @param nombre El nombre o parte del nombre de la categoría
     * @return Lista de categorías que coinciden
     */
    List<Categoria> findByNombreContainingIgnoreCase(String nombre);

    /**
     * Busca categorías activas en el sistema.
     * @return Lista de categorías activas ordenadas por nombre
     */
    @Query("SELECT c FROM Categoria c WHERE c.activo = true ORDER BY c.nombre")
    List<Categoria> findCategoriasActivas();

    /**
     * Busca categorías con productos asociados.
     * @return Lista de categorías que tienen al menos un producto
     */
    @Query("SELECT DISTINCT c FROM Categoria c JOIN c.productos p WHERE c.activo = true")
    List<Categoria> findCategoriasConProductos();

    /**
     * Verifica si existe una categoría con el nombre especificado.
     * @param nombre El nombre a verificar
     * @return true si existe, false en caso contrario
     */
    boolean existsByNombre(String nombre);

    /**
     * Cuenta el número de productos activos en cada categoría.
     * @return Lista de objetos con id de categoría y cantidad de productos
     */
    @Query("SELECT c.id as categoriaId, COUNT(p) as cantidadProductos FROM Categoria c LEFT JOIN c.productos p WHERE c.activo = true GROUP BY c.id")
    List<Object[]> countProductosByCategoria();
}
