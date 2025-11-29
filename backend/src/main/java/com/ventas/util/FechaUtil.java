package com.ventas.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

/**
 * Clase utilitaria para operaciones comunes con fechas y horas.
 * Contiene métodos estáticos para formateo, cálculos y validaciones de fechas.
 * Todos los métodos son thread-safe y no requieren instancia de la clase.
 */
public final class FechaUtil {

    /** Formato estándar para fechas en la aplicación */
    public static final String FORMATO_FECHA = "dd/MM/yyyy";

    /** Formato estándar para fechas con hora completa */
    public static final String FORMATO_FECHA_HORA = "dd/MM/yyyy HH:mm:ss";

    /** Formato ISO para APIs */
    public static final String FORMATO_ISO = "yyyy-MM-dd'T'HH:mm:ss";

    /** Constructor privado para prevenir instanciación */
    private FechaUtil() {
        throw new UnsupportedOperationException("Esta es una clase utilitaria y no puede ser instanciada");
    }

    /**
     * Obtiene la fecha y hora actual del sistema.
     * @return LocalDateTime con la fecha y hora actuales
     */
    public static LocalDateTime ahora() {
        return LocalDateTime.now();
    }

    /**
     * Formatea una fecha según el patrón especificado.
     * @param fecha La fecha a formatear
     * @param patron El patrón de formato (ej: "dd/MM/yyyy")
     * @return La fecha formateada como String
     */
    public static String formatFecha(LocalDateTime fecha, String patron) {
        if (fecha == null || patron == null) {
            return null;
        }
        return fecha.format(DateTimeFormatter.ofPattern(patron));
    }

    /**
     * Formatea una fecha usando el formato estándar de fecha.
     * @param fecha La fecha a formatear
     * @return La fecha en formato "dd/MM/yyyy"
     */
    public static String formatFecha(LocalDateTime fecha) {
        return formatFecha(fecha, FORMATO_FECHA);
    }

    /**
     * Formatea una fecha con hora usando el formato estándar.
     * @param fecha La fecha y hora a formatear
     * @return La fecha en formato "dd/MM/yyyy HH:mm:ss"
     */
    public static String formatFechaHora(LocalDateTime fecha) {
        return formatFecha(fecha, FORMATO_FECHA_HORA);
    }

    /**
     * Calcula la edad en años a partir de una fecha de nacimiento.
     * @param fechaNacimiento La fecha de nacimiento
     * @return La edad en años, o -1 si la fecha es futura
     */
    public static int calcularEdad(LocalDateTime fechaNacimiento) {
        if (fechaNacimiento == null || fechaNacimiento.isAfter(ahora())) {
            return -1;
        }
        return (int) ChronoUnit.YEARS.between(fechaNacimiento, ahora());
    }

    /**
     * Verifica si una fecha está dentro del rango especificado.
     * @param fecha La fecha a verificar
     * @param inicio Fecha de inicio del rango
     * @param fin Fecha de fin del rango
     * @return true si la fecha está en el rango (inclusive), false en caso contrario
     */
    public static boolean estaEnRango(LocalDateTime fecha, LocalDateTime inicio, LocalDateTime fin) {
        if (fecha == null) {
            return false;
        }
        if (inicio != null && fecha.isBefore(inicio)) {
            return false;
        }
        if (fin != null && fecha.isAfter(fin)) {
            return false;
        }
        return true;
    }

    /**
     * Calcula la diferencia en días entre dos fechas.
     * @param fechaInicio La fecha inicial
     * @param fechaFin La fecha final
     * @return Número de días entre las fechas (puede ser negativo)
     */
    public static long diferenciaEnDias(LocalDateTime fechaInicio, LocalDateTime fechaFin) {
        if (fechaInicio == null || fechaFin == null) {
            return 0;
        }
        return ChronoUnit.DAYS.between(fechaInicio, fechaFin);
    }

    /**
     * Verifica si una fecha es válida (no null y no futura).
     * @param fecha La fecha a validar
     * @return true si la fecha es válida, false en caso contrario
     */
    public static boolean esFechaValida(LocalDateTime fecha) {
        return fecha != null && !fecha.isAfter(ahora());
    }
}
