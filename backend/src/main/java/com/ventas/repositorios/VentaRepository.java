package com.ventas.repositorios;

import com.ventas.modelos.Venta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Repositorio para operaciones CRUD de ventas en la base de datos.
 * Gestiona todas las consultas relacionadas con el histórico de ventas.
 */
@Repository
public interface VentaRepository extends JpaRepository<Venta, Long> {

    /**
     * Busca ventas por cliente.
     * @param clienteId El ID del cliente
     * @return Lista de ventas del cliente ordenadas por fecha descendente
     */
    @Query("SELECT v FROM Venta v WHERE v.cliente.id = :clienteId ORDER BY v.fechaCreacion DESC")
    List<Venta> findByClienteIdOrderByFechaCreacionDesc(@Param("clienteId") Long clienteId);

    /**
     * Busca ventas dentro de un rango de fechas.
     * @param inicio Fecha de inicio del rango
     * @param fin Fecha de fin del rango
     * @return Lista de ventas en el rango especificado
     */
    @Query("SELECT v FROM Venta v WHERE v.fechaCreacion BETWEEN :inicio AND :fin ORDER BY v.fechaCreacion DESC")
    List<Venta> findVentasEntreFechas(@Param("inicio") LocalDateTime inicio, @Param("fin") LocalDateTime fin);

    /**
     * Busca ventas por estado.
     * @param estado El estado de la venta (COMPLETADA, CANCELADA, etc.)
     * @return Lista de ventas con el estado especificado
     */
    List<Venta> findByEstadoVenta(com.ventas.enums.EstadoVenta estado);

    /**
     * Busca ventas por estado y rango de fechas.
     * @param estado El estado de la venta
     * @param inicio Fecha de inicio
     * @param fin Fecha de fin
     * @return Lista de ventas filtradas
     */
    @Query("SELECT v FROM Venta v WHERE v.estadoVenta = :estado AND v.fechaCreacion BETWEEN :inicio AND :fin")
    List<Venta> findByEstadoVentaAndFechaCreacionBetween(
        @Param("estado") com.ventas.enums.EstadoVenta estado,
        @Param("inicio") LocalDateTime inicio,
        @Param("fin") LocalDateTime fin
    );

    /**
     * Calcula el total de ventas en un rango de fechas.
     * @param inicio Fecha de inicio
     * @param fin Fecha de fin
     * @return El total de ventas en el período
     */
    @Query("SELECT SUM(v.total) FROM Venta v WHERE v.fechaCreacion BETWEEN :inicio AND :fin AND v.estadoVenta = 'PAGADA'")
    Double calcularTotalVentasEntreFechas(@Param("inicio") LocalDateTime inicio, @Param("fin") LocalDateTime fin);

    /**
     * Obtiene las últimas N ventas realizadas.
     * @param limite Número máximo de ventas a retornar
     * @return Lista de las ventas más recientes
     */
    @Query("SELECT v FROM Venta v ORDER BY v.fechaCreacion DESC")
    List<Venta> findUltimasVentas(@Param("limite") int limite);

    /**
     * Cuenta el número de ventas por estado.
     * @return Array con los conteos por estado
     */
    @Query("SELECT v.estadoVenta, COUNT(v) FROM Venta v GROUP BY v.estadoVenta")
    List<Object[]> countVentasPorEstadoVenta();

    /**
     * Busca ventas con detalles de productos incluidos.
     * @return Lista de ventas con fetch de detalles
     */
    @Query("SELECT DISTINCT v FROM Venta v LEFT JOIN FETCH v.detalles WHERE v.estadoVenta = 'PAGADA'")
    List<Venta> findVentasCompletadasConDetalles();
}
