
package com.ventas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Clase principal que inicia la aplicación Spring Boot.
 * La anotación @SpringBootApplication habilita la autoconfiguración,
 * el escaneo de componentes y la configuración de Spring.
 */
@SpringBootApplication
public class SistemaVentasApiApplication {

    /**
     * Punto de entrada principal para la aplicación.
     * @param args Argumentos de línea de comandos.
     */
    public static void main(String[] args) {
        SpringApplication.run(SistemaVentasApiApplication.class, args);
    }

}
