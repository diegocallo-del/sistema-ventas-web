package com.ventas.controladores;

import com.ventas.modelos.ProductoImagen;
import com.ventas.repositorios.ProductoImagenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controlador para servir imágenes desde la base de datos
 */
@RestController
@RequestMapping("/api/imagenes")
@RequiredArgsConstructor
public class ProductoImagenController {

    private final ProductoImagenRepository productoImagenRepository;

    /**
     * Sirve una imagen específica desde la base de datos
     * @param imagenId ID de la imagen
     * @return Bytes de la imagen con headers apropiados
     */
    @GetMapping("/{imagenId}")
    public ResponseEntity<byte[]> obtenerImagen(@PathVariable Long imagenId) {
        ProductoImagen imagen = productoImagenRepository.findById(imagenId)
                .orElseThrow(() -> new RuntimeException("Imagen no encontrada: " + imagenId));

        HttpHeaders headers = new HttpHeaders();

        // Headers para la respuesta de imagen
        headers.setContentType(MediaType.parseMediaType(imagen.getTipoContenido()));
        headers.setContentLength(imagen.getDatosImagen().length);
        headers.setCacheControl("private, max-age=86400"); // Cache por 24 horas

        return ResponseEntity.ok()
                .headers(headers)
                .body(imagen.getDatosImagen());
    }
}
