package com.ventas.controladores;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * Controlador para servir imágenes desde el filesystem
 */
@RestController
@RequestMapping("/api/imagenes")
@RequiredArgsConstructor
@Tag(name = "Imágenes", description = "Servicio de archivos de imágenes de productos")
public class ProductoImagenController {

    private final Path rootLocation = Paths.get("uploads/images/productos");

    /**
     * Sirve una imagen específica desde el filesystem
     * @param filename Nombre del archivo de imagen
     * @return Archivo de imagen con headers apropiados
     */
    @GetMapping("/{filename:.+}")
    @Operation(summary = "Obtener imagen", description = "Sirve una imagen del filesystem por nombre de archivo")
    public ResponseEntity<Resource> obtenerImagen(@PathVariable String filename) {
        try {
            Path file = rootLocation.resolve(filename);
            @SuppressWarnings("null")
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                // Determinar el tipo de contenido basado en la extensión
                String contentType = determinarContentType(filename);

                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_TYPE, contentType)
                        .header(HttpHeaders.CACHE_CONTROL, "public, max-age=86400") // Cache por 24 horas
                        .body(resource);
            } else {
                throw new RuntimeException("Archivo no encontrado: " + filename);
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error al acceder al archivo: " + filename, e);
        }
    }

    /**
     * Determina el tipo de contenido basado en la extensión del archivo
     */
    private String determinarContentType(String filename) {
        String extension = filename.substring(filename.lastIndexOf('.') + 1).toLowerCase();
        return switch (extension) {
            case "jpg", "jpeg" -> "image/jpeg";
            case "png" -> "image/png";
            case "gif" -> "image/gif";
            case "webp" -> "image/webp";
            default -> "application/octet-stream";
        };
    }
}
