
package com.ventas.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;
/**
 * Esta clase se encarga de preparar nuestro cliente HTTP para hablar con la API de IA
 * Así no tenemos que repetir esta configuración cada vez que hagamos una solicitud, Iinformacion sacada de la
 * documentacion de spring sibre Web client: https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-client 
 */
@Configuration
public class AIConfig {

    @Value("${ia.api.url}")
    private String apiUrl;

    @Bean
    public WebClient webClient() {
        return WebClient.builder()
                .baseUrl(apiUrl)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }
}
