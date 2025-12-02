package com.ventas.config;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configuración de caché para optimizar el rendimiento
 * Habilita el almacenamiento en caché de consultas frecuentes
 */
@Configuration
@EnableCaching
public class CacheConfig {

    /**
     * Configura el gestor de caché utilizando ConcurrentMap
     * @return CacheManager configurado
     */
    @Bean
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager(
            "productos",
            "ventas",
            "clientes",
            "categorias",
            "estadisticas"
        );
    }
}
