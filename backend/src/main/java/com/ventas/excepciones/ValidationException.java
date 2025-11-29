package com.ventas.excepciones;

import java.util.List;

/**
 * Excepción personalizada lanzada cuando falla la validación de datos.
 * Se utiliza específicamente para errores de validación de DTOs o entidades.
 * Retorna HTTP 400 (Bad Request) en el controlador con detalles de validación.
 */
public class ValidationException extends RuntimeException {

    private final List<String> errores;

    /**
     * Constructor con mensaje simple.
     * @param message El mensaje descriptivo del error de validación
     */
    public ValidationException(String message) {
        super(message);
        this.errores = List.of(message);
    }

    /**
     * Constructor con lista de errores detallados.
     * Útil cuando hay múltiples errores de validación en el mismo objeto.
     * @param errores Lista de mensajes de error específicos
     */
    public ValidationException(List<String> errores) {
        super(errores != null && !errores.isEmpty() ? errores.get(0) : "Errores de validación encontrados");
        this.errores = errores != null ? errores : List.of();
    }

    /**
     * Constructor con mensaje principal y lista de errores detallados.
     * @param message Mensaje principal del error
     * @param errores Lista detallada de errores de validación
     */
    public ValidationException(String message, List<String> errores) {
        super(message);
        this.errores = errores != null ? errores : List.of();
    }

    /**
     * Obtiene la lista completa de errores de validación.
     * @return Lista de mensajes de error detallados
     */
    public List<String> getErrores() {
        return errores;
    }

    /**
     * Obtiene el primer error de la lista para mensajes cortos.
     * @return El primer error o mensaje genérico si no hay errores
     */
    public String getPrimerError() {
        return errores.isEmpty() ? "Error de validación desconocido" : errores.get(0);
    }

    /**
     * Verifica si hay errores de validación.
     * @return true si hay errores, false en caso contrario
     */
    public boolean tieneErrores() {
        return !errores.isEmpty();
    }
}
