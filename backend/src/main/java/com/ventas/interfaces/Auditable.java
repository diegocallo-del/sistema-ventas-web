package com.ventas.interfaces;

import java.time.LocalDateTime;

/**
 * Interfaz que define contratos para entidades auditables.
 * Las entidades que implementen esta interfaz podrán ser auditadas automáticamente.
 * Se utiliza para tracking de cambios en entidades importantes del sistema.
 */
public interface Auditable {

    /**
     * Obtiene la fecha de creación de la entidad.
     * @return Fecha y hora cuando se creó la entidad
     */
    LocalDateTime getFechaCreacion();

    /**
     * Establece la fecha de creación de la entidad.
     * @param fechaCreacion Fecha y hora de creación
     */
    void setFechaCreacion(LocalDateTime fechaCreacion);

    /**
     * Obtiene la fecha de última actualización de la entidad.
     * @return Fecha y hora de la última modificación
     */
    LocalDateTime getFechaActualizacion();

    /**
     * Establece la fecha de última actualización de la entidad.
     * @param fechaActualizacion Fecha y hora de actualización
     */
    void setFechaActualizacion(LocalDateTime fechaActualizacion);

    /**
     * Obtiene el usuario que creó la entidad.
     * @return Nombre o ID del usuario creador
     */
    String getUsuarioCreacion();

    /**
     * Establece el usuario que creó la entidad.
     * @param usuarioCreacion Nombre o ID del usuario
     */
    void setUsuarioCreacion(String usuarioCreacion);

    /**
     * Obtiene el usuario que realizó la última actualización.
     * @return Nombre o ID del último usuario que modificó
     */
    String getUsuarioActualizacion();

    /**
     * Establece el usuario que realizó la última actualización.
     * @param usuarioActualizacion Nombre o ID del usuario
     */
    void setUsuarioActualizacion(String usuarioActualizacion);
}
