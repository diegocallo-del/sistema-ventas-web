package com.ventas.interfaces;

import java.time.LocalDateTime;

/**
 * Interfaz que define contratos para entidades auditables.
 * Las entidades que implementen esta interfaz podrán ser auditadas automáticamente.
 */
public interface Auditable {

    /**
     * Obtiene la fecha de creación de la entidad.
     */
    LocalDateTime getFechaCreacion();

    /**
     * Establece la fecha de creación de la entidad.
     */
    void setFechaCreacion(LocalDateTime fechaCreacion);

    /**
     * Obtiene la fecha de última actualización de la entidad.
     */
    LocalDateTime getFechaActualizacion();

    /**
     * Establece la fecha de última actualización de la entidad.
     */
    void setFechaActualizacion(LocalDateTime fechaActualizacion);

    /**
     * Obtiene el usuario que creó la entidad.
     */
    String getUsuarioCreacion();

    /**
     * Establece el usuario que creó la entidad.
     */
    void setUsuarioCreacion(String usuarioCreacion);

    /**
     * Obtiene el usuario que realizó la última actualización.     
    String getUsuarioActualizacion();

    /**
     * Establece el usuario que realizó la última actualización.
     */
    void setUsuarioActualizacion(String usuarioActualizacion);
}
