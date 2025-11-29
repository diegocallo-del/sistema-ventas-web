package com.ventas.util;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Locale;

/**
 * Clase utilitaria para operaciones matemáticas comunes en el sistema de ventas.
 * Contiene métodos para cálculos financieros, formateo de montos y operaciones numéricas.
 * Todos los métodos son thread-safe y no requieren instancia de la clase.
 */
public final class NumeroUtil {

    /** Patrón de formato monetario estándar */
    private static final String FORMATO_MONEDA = "#,##0.00";

    /** Número de decimales estándar para cálculos monetarios */
    public static final int DECIMALES_MONEDA = 2;

    /** Tipo de redondeo estándar para operaciones monetarias */
    public static final RoundingMode REDONDEO_ESTANDAR = RoundingMode.HALF_UP;

    /** Constructor privado para prevenir instanciación */
    private NumeroUtil() {
        throw new UnsupportedOperationException("Esta es una clase utilitaria y no puede ser instanciada");
    }

    /**
     * Redondea un número BigDecimal a la cantidad especificada de decimales.
     * @param numero El número a redondear
     * @param decimales Cantidad de decimales deseados
     * @return El número redondeado
     */
    public static BigDecimal redondear(BigDecimal numero, int decimales) {
        if (numero == null) {
            return BigDecimal.ZERO;
        }
        return numero.setScale(decimales, REDONDEO_ESTANDAR);
    }

    /**
     * Redondea un número BigDecimal a 2 decimales (estándar monetario).
     * @param numero El número a redondear
     * @return El número redondeado a 2 decimales
     */
    public static BigDecimal redondear(BigDecimal numero) {
        return redondear(numero, DECIMALES_MONEDA);
    }

    /**
     * Calcula el porcentaje de un valor base.
     * @param valorBase El valor sobre el cual calcular el porcentaje
     * @param porcentaje El porcentaje a calcular (ej: 15.5 para 15.5%)
     * @return El resultado del cálculo porcentual
     */
    public static BigDecimal calcularPorcentaje(BigDecimal valorBase, BigDecimal porcentaje) {
        if (valorBase == null || porcentaje == null) {
            return BigDecimal.ZERO;
        }
        return valorBase.multiply(porcentaje).divide(BigDecimal.valueOf(100), DECIMALES_MONEDA, REDONDEO_ESTANDAR);
    }

    /**
     * Formatea un número como cadena monetaria con formato local.
     * @param numero El número a formatear
     * @return Cadena formateada como moneda (ej: "1,250.50")
     */
    public static String formatoMoneda(BigDecimal numero) {
        if (numero == null) {
            return "0.00";
        }
        DecimalFormat formato = new DecimalFormat(FORMATO_MONEDA);
        formato.setRoundingMode(REDONDEO_ESTANDAR);
        return formato.format(numero);
    }

    /**
     * Formatea un número como cadena monetaria con símbolo de moneda local.
     * @param numero El número a formatear
     * @param locale El locale para el formato (ej: Locale.US, new Locale("es", "PE"))
     * @return Cadena formateada como moneda con símbolo (ej: "S/ 1,250.50")
     */
    public static String formatoMonedaConSimbolo(BigDecimal numero, Locale locale) {
        if (numero == null) {
            numero = BigDecimal.ZERO;
        }
        NumberFormat formatoMoneda = NumberFormat.getCurrencyInstance(locale != null ? locale : Locale.getDefault());
        return formatoMoneda.format(numero);
    }

    /**
     * Calcula el total con IVA incluido.
     * @param subtotal El subtotal sin IVA
     * @param porcentajeIVA El porcentaje de IVA (ej: 18.0 para 18%)
     * @return El total incluyendo IVA
     */
    public static BigDecimal calcularTotalConIVA(BigDecimal subtotal, BigDecimal porcentajeIVA) {
        if (subtotal == null) {
            return BigDecimal.ZERO;
        }
        if (porcentajeIVA == null || porcentajeIVA.compareTo(BigDecimal.ZERO) == 0) {
            return subtotal;
        }
        BigDecimal iva = calcularPorcentaje(subtotal, porcentajeIVA);
        return subtotal.add(iva);
    }

    /**
     * Calcula el IVA a partir del total y porcentaje.
     * @param total El total que incluye IVA
     * @param porcentajeIVA El porcentaje de IVA aplicado
     * @return El monto de IVA calculado
     */
    public static BigDecimal calcularIVADelTotal(BigDecimal total, BigDecimal porcentajeIVA) {
        if (total == null) {
            return BigDecimal.ZERO;
        }
        if (porcentajeIVA == null || porcentajeIVA.compareTo(BigDecimal.ZERO) == 0) {
            return BigDecimal.ZERO;
        }
        // IVA = Total * (IVA% / (100 + IVA%))
        BigDecimal factorIVA = porcentajeIVA.divide(
            BigDecimal.valueOf(100).add(porcentajeIVA), DECIMALES_MONEDA, REDONDEO_ESTANDAR);
        return total.multiply(factorIVA);
    }

    /**
     * Verifica si un número está dentro de un rango específico.
     * @param numero El número a verificar
     * @param minimo Valor mínimo del rango (inclusive)
     * @param maximo Valor máximo del rango (inclusive)
     * @return true si el número está en el rango, false en caso contrario
     */
    public static boolean estaEnRango(BigDecimal numero, BigDecimal minimo, BigDecimal maximo) {
        if (numero == null) {
            return false;
        }
        if (minimo != null && numero.compareTo(minimo) < 0) {
            return false;
        }
        if (maximo != null && numero.compareTo(maximo) > 0) {
            return false;
        }
        return true;
    }

    /**
     * Convierte un Double a BigDecimal de forma segura.
     * @param valor El valor Double a convertir
     * @return BigDecimal equivalente o ZERO si el valor es null
     */
    public static BigDecimal toBigDecimal(Double valor) {
        return valor != null ? BigDecimal.valueOf(valor) : BigDecimal.ZERO;
    }

    /**
     * Verifica si un BigDecimal es cero, positivo o nulo.
     * @param numero El número a verificar
     * @return true si es cero o null, false si es positivo
     */
    public static boolean esCeroONulo(BigDecimal numero) {
        return numero == null || numero.compareTo(BigDecimal.ZERO) == 0;
    }
}
