package com.ventas.interfaces;

import java.util.List;

/**
 * Interfaz que define contratos para objetos que requieren validación.
 * Los objetos que implementen esta interfaz pueden ser validados antes de su procesamiento.
 * Se utiliza para asegurar la integridad de datos antes de operaciones críticas.
 */
public interface Validable {

    /**
     * Valida el estado del objeto.
     * Implementa las reglas de validación específicas del objeto.
     * @return true si el objeto es válido, false en caso contrario
     */
    boolean validar();

    /**
     * Obtiene la lista de errores de validación encontrados.
     * Debe ser llamado después de validar() para obtener los detalles de errores.
     * @return Lista de mensajes de error, vacía si no hay errores
     */
    List<String> getErroresValidacion();

    /**
     * Verifica si el objeto tiene errores de validación.
     * Método de conveniencia que combina validar() y verificar si hay errores.
     * @return true si hay errores de validación, false si es válido
     */
    default boolean tieneErrores() {
        return !getErroresValidacion().isEmpty();
    }

    /**
     * Obtiene el mensaje de error principal.
     * Retorna el primer error de la lista o null si no hay errores.
     * @return Primer mensaje de error o null
     */
    default String getPrimerError() {
        List<String> errores = getErroresValidacion();
        return errores.isEmpty() ? null : errores.get(0);
    }
}
