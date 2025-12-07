package com.ventas.excepciones;

import java.util.List;

public class ValidationException extends RuntimeException {

    private final List<String> errores;


    public ValidationException(String message) {
        super(message);
        this.errores = List.of(message);
    }

    /**
     * Constructor con lista de errores detallados.

     */
    public ValidationException(List<String> errores) {
        super(errores != null && !errores.isEmpty() ? errores.get(0) : "Errores de validación encontrados");
        this.errores = errores != null ? errores : List.of();
    }

    /**
     * Constructor con mensaje principal y lista de errores detallados.
     */
    public ValidationException(String message, List<String> errores) {
        super(message);
        this.errores = errores != null ? errores : List.of();
    }

    /**
     * Obtiene la lista completa de errores de validación.
     */
    public List<String> getErrores() {
        return errores;
    }

    /**
     * Obtiene el primer error de la lista para mensajes cortos.
     */
    public String getPrimerError() {
        return errores.isEmpty() ? "Error de validación desconocido" : errores.get(0);
    }

    /**
     * Verifica si hay errores de validación.
     */
    public boolean tieneErrores() {
        return !errores.isEmpty();
    }
}
