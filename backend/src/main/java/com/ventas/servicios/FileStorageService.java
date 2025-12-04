package com.ventas.servicios;

import com.ventas.excepciones.FileStorageException;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class FileStorageService {

    @Value("${file.upload.images.destination:uploads/images/productos/}")
    private String destination;

    @Value("${file.upload.images.max-size:5MB}")
    private String maxSize;

    @Value("#{'${file.upload.images.allowed-types:jpg,jpeg,png,gif}'.split(',')}")
    private List<String> allowedTypes;

    private Path fileStorageLocation;

    @PostConstruct
    public void init() {
        this.fileStorageLocation = Paths.get(destination).toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
            log.info("Directorio de archivos creado: {}", this.fileStorageLocation);
        } catch (Exception ex) {
            log.error("No se puede crear directorio: {}", this.fileStorageLocation, ex);
            throw new FileStorageException("No se puede crear directorio: " + destination, ex);
        }
    }

    public String store(MultipartFile file, String subfolder) {
        log.debug("Guardando archivo: {} en subfolder: {}", file.getOriginalFilename(), subfolder);

        validateFile(file);

        String fileName = generateUniqueFileName(file.getOriginalFilename());
        String relativePath = subfolder + "/" + fileName;

        try {
            Path targetLocation = this.fileStorageLocation.resolve(relativePath);
            Files.createDirectories(targetLocation.getParent());

            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            log.info("Archivo guardado exitosamente: {}", relativePath);
            return relativePath;

        } catch (IOException ex) {
            log.error("Error guardando archivo: {}", fileName, ex);
            throw new FileStorageException("Error guardando archivo: " + fileName, ex);
        }
    }

    public void delete(String filename) {
        try {
            Path file = this.fileStorageLocation.resolve(filename);
            Files.deleteIfExists(file);
            log.info("Archivo eliminado: {}", filename);
        } catch (IOException ex) {
            log.error("Error eliminando archivo: {}", filename, ex);
            throw new FileStorageException("Error eliminando archivo: " + filename, ex);
        }
    }

    public boolean exists(String filename) {
        Path file = this.fileStorageLocation.resolve(filename);
        return Files.exists(file);
    }

    public Path getFilePath(String filename) {
        return this.fileStorageLocation.resolve(filename);
    }

    private void validateFile(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            throw new FileStorageException("El archivo está vacío");
        }

        if (file.getSize() > parseMaxSize()) {
            throw new FileStorageException("El archivo es demasiado grande. Máximo permitido: " + maxSize);
        }

        String fileExtension = getFileExtension(file.getOriginalFilename());
        if (!allowedTypes.contains(fileExtension.toLowerCase())) {
            throw new FileStorageException("Tipo de archivo no permitido: " + fileExtension +
                    ". Tipos permitidos: " + String.join(", ", allowedTypes));
        }
    }

    private String generateUniqueFileName(String originalFilename) {
        String extension = getFileExtension(originalFilename);
        return UUID.randomUUID().toString() + "." + extension;
    }

    private String getFileExtension(String filename) {
        if (filename == null || filename.isEmpty()) {
            return "";
        }
        int lastDotIndex = filename.lastIndexOf('.');
        return lastDotIndex > 0 ? filename.substring(lastDotIndex + 1) : "";
    }

    private long parseMaxSize() {
        if (maxSize == null || maxSize.trim().isEmpty()) {
            return 5 * 1024 * 1024; // 5MB default
        }

        String sizeStr = maxSize.toUpperCase().trim();

        if (sizeStr.endsWith("MB")) {
            double mb = Double.parseDouble(sizeStr.replace("MB", ""));
            return (long) (mb * 1024 * 1024);
        } else if (sizeStr.endsWith("KB")) {
            double kb = Double.parseDouble(sizeStr.replace("KB", ""));
            return (long) (kb * 1024);
        } else {
            // Asumir bytes
            return Long.parseLong(sizeStr.replaceAll("[^0-9]", ""));
        }
    }
}
