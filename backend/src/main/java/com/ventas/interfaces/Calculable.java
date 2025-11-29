package com.ventas.interfaces;

import java.math.BigDecimal;

/**
 * Interfaz genérica que define contratos para cálculos de negocio.
 * Los servicios que implementen esta interfaz pueden realizar cálculos especializados.
 * Se utiliza para centralizar lógica de cálculo compleja como totales, descuentos, etc.
 *
 * @param <T> El tipo de objeto sobre el cual se realizarán los cálculos
 */
public interface Calculable<T> {

    /**
     * Realiza un cálculo sobre el objeto especificado.
     * La implementación define qué tipo de cálculo realizar.
     * @param objeto El objeto sobre el cual calcular
     * @return El resultado del cálculo como BigDecimal para precisión decimal
     */
    BigDecimal calcular(T objeto);

    /**
     * Calcula el total aplicando un porcentaje.
     * Método de utilidad para cálculos porcentuales comunes.
     * @param valorBase El valor base para el cálculo
     * @param porcentaje El porcentaje a aplicar (ej: 10.5 para 10.5%)
     * @return El resultado del porcentaje aplicado al valor base
     */
    default BigDecimal calcularPorcentaje(BigDecimal valorBase, BigDecimal porcentaje) {
        if (valorBase == null || porcentaje == null) {
            return BigDecimal.ZERO;
        }
        return valorBase.multiply(porcentaje).divide(BigDecimal.valueOf(100));
    }

    /**
     * Redondea un valor a 2 decimales.
     * Método de utilidad para formateo consistente de montos monetarios.
     * @param valor El valor a redondear
     * @return El valor redondeado a 2 decimales
     */
    default BigDecimal redondear(BigDecimal valor) {
        if (valor == null) {
            return BigDecimal.ZERO;
        }
        return valor.setScale(2, BigDecimal.ROUND_HALF_UP);
    }

    /**
     * Calcula el IVA sobre un monto base.
     * Método de utilidad específico para cálculos tributarios.
     * @param montoBase El monto base sin IVA
     * @param porcentajeIVA El porcentaje de IVA (ej: 18.0 para 18%)
     * @return El monto de IVA calculado
     */
    default BigDecimal calcularIVA(BigDecimal montoBase, BigDecimal porcentajeIVA) {
        return calcularPorcentaje(montoBase, porcentajeIVA);
    }
}
