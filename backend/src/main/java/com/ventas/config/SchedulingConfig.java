package com.ventas.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * Configuración para habilitar tareas programadas
 * Activa el procesamiento de anotaciones @Scheduled
 */
@Configuration
@EnableScheduling
public class SchedulingConfig {
    // Esta configuración habilita las tareas automáticas como:
    // - Verificación de stock bajo (@Scheduled)
    // - Reportes diarios
    // - Limpieza de cachés vencidos
    // - Backup automático de datos
}
