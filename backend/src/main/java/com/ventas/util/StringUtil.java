package com.ventas.util;

import java.text.Normalizer;
import java.util.regex.Pattern;

/**
 * Clase utilitaria para operaciones comunes con cadenas de texto.
 * Contiene métodos para validación, formateo y manipulación de strings.
 * Todos los métodos son thread-safe y no requieren instancia de la clase.
 */
public final class StringUtil {

    /** Patrón regex para validación de email */
    private static final Pattern EMAIL_PATTERN = Pattern.compile(
        "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"
    );

    /** Patrón regex para eliminación de acentos */
    private static final Pattern ACENTOS_PATTERN = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");

    /** Constructor privado para prevenir instanciación */
    private StringUtil() {
        throw new UnsupportedOperationException("Esta es una clase utilitaria y no puede ser instanciada");
    }

    /**
     * Capitaliza la primera letra de cada palabra en una cadena.
     * @param texto El texto a capitalizar
     * @return El texto con la primera letra de cada palabra en mayúscula
     */
    public static String capitalizar(String texto) {
        if (texto == null || texto.trim().isEmpty()) {
            return texto;
        }

        String[] palabras = texto.trim().toLowerCase().split("\\s+");
        StringBuilder resultado = new StringBuilder();

        for (int i = 0; i < palabras.length; i++) {
            if (!palabras[i].isEmpty()) {
                resultado.append(palabras[i].substring(0, 1).toUpperCase())
                        .append(palabras[i].substring(1));
                if (i < palabras.length - 1) {
                    resultado.append(" ");
                }
            }
        }

        return resultado.toString();
    }

    /**
     * Genera un slug URL-friendly a partir de un texto.
     * Convierte espacios a guiones, elimina acentos y caracteres especiales.
     * @param texto El texto original
     * @return El slug generado
     */
    public static String generarSlug(String texto) {
        if (texto == null || texto.trim().isEmpty()) {
            return "";
        }

        String slug = texto.toLowerCase();
        // Eliminar acentos
        slug = ACENTOS_PATTERN.matcher(
            Normalizer.normalize(slug, Normalizer.Form.NFD)
        ).replaceAll("");

        // Reemplazar caracteres especiales y espacios por guiones
        slug = slug.replaceAll("[^a-z0-9\\s-]", "")
                  .replaceAll("\\s+", "-")
                  .replaceAll("-+", "-")
                  .replaceAll("^-|-$", "");

        return slug;
    }

    /**
     * Valida si una cadena es una dirección de email válida.
     * @param email La cadena a validar
     * @return true si es un email válido, false en caso contrario
     */
    public static boolean esEmailValido(String email) {
        return email != null && EMAIL_PATTERN.matcher(email).matches();
    }

    /**
     * Sanitiza una cadena escapando caracteres potencialmente peligrosos.
     * Útil para prevenir ataques XSS básicos en inputs de usuario.
     * @param texto El texto a sanitizar
     * @return El texto sanitizado con entidades HTML
     */
    public static String sanitizar(String texto) {
        if (texto == null) {
            return null;
        }

        return texto.replaceAll("&", "&amp;")
                   .replaceAll("<", "&lt;")
                   .replaceAll(">", "&gt;")
                   .replaceAll("\"", "&quot;")
                   .replaceAll("'", "&#x27;");
    }

    /**
     * Verifica si una cadena está vacía o es null.
     * @param texto La cadena a verificar
     * @return true si está vacía o null, false en caso contrario
     */
    public static boolean esVacio(String texto) {
        return texto == null || texto.trim().isEmpty();
    }

    /**
     * Trunca una cadena a la longitud especificada, agregando "..." si es necesario.
     * @param texto El texto a truncar
     * @param longitudMaxima La longitud máxima permitida
     * @return El texto truncado o el original si es más corto
     */
    public static String truncar(String texto, int longitudMaxima) {
        if (texto == null || texto.length() <= longitudMaxima) {
            return texto;
        }

        if (longitudMaxima <= 3) {
            return texto.substring(0, longitudMaxima);
        }

        return texto.substring(0, longitudMaxima - 3) + "...";
    }

    /**
     * Normaliza un texto para búsquedas (elimina acentos, convierte a minúsculas).
     * @param texto El texto a normalizar
     * @return El texto normalizado
     */
    public static String normalizarParaBusqueda(String texto) {
        if (texto == null) {
            return null;
        }

        String normalizado = texto.toLowerCase();
        normalizado = ACENTOS_PATTERN.matcher(
            Normalizer.normalize(normalizado, Normalizer.Form.NFD)
        ).replaceAll("");

        return normalizado;
    }

    /**
     * Verifica si una cadena contiene solo números.
     * @param texto La cadena a verificar
     * @return true si contiene solo números, false en caso contrario
     */
    public static boolean esNumerico(String texto) {
        if (esVacio(texto)) {
            return false;
        }
        return texto.matches("\\d+");
    }
}
