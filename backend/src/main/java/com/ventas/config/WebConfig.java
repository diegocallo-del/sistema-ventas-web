package com.ventas.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

/**
 * Configuración para servir archivos estáticos y recursos personalizados
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Permitir acceso a archivos subidos desde /uploads/**
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/")
                .setCachePeriod(3600); // Cache por 1 hora

        // También permitir acceso desde /files/** como alternativa
        registry.addResourceHandler("/files/**")
                .addResourceLocations("file:uploads/")
                .setCachePeriod(3600);
    }
}
