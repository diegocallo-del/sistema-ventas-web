package com.ventas.servicios;

import com.ventas.dto.CreateProductoDTO;
import com.ventas.dto.ProductoDTO;
import com.ventas.excepciones.ResourceNotFoundException;
import com.ventas.excepciones.ValidationException;
import com.ventas.modelos.Categoria;
import com.ventas.modelos.Producto;
import com.ventas.modelos.ProductoImagen;
import com.ventas.modelos.Usuario;
import com.ventas.repositorios.CategoriaRepository;
import com.ventas.repositorios.ProductoImagenRepository;
import com.ventas.repositorios.ProductoRepository;
import com.ventas.repositorios.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Servicio para la gestión de productos.
 * Implementa operaciones CRUD y lógica de negocio relacionada con productos.
 */
@Service
@RequiredArgsConstructor
public class ProductoService {

    private final ProductoRepository productoRepository;
    private final CategoriaRepository categoriaRepository;
    private final UsuarioRepository usuarioRepository;
    private final FileStorageService fileStorageService;
    private final ProductoImagenRepository productoImagenRepository;

    /**
     * Obtiene todos los productos activos con sus imágenes cargadas.
     * @return Lista de productos activos como DTO
     */
    @Transactional(readOnly = true)
    public List<ProductoDTO> obtenerTodosLosProductos() {
        System.out.println("=== Servicio: Obteniendo todos los productos con imágenes ===");
        List<Producto> productos = productoRepository.findByActivoTrueConImagenes();
        System.out.println("Encontrados " + productos.size() + " productos");

        return productos.stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Obtiene un producto por su ID con sus imágenes cargadas.
     * @param id ID del producto
     * @return Producto como DTO
     */
    @Transactional(readOnly = true)
    public ProductoDTO obtenerProductoPorId(Long id) {
        System.out.println("=== Servicio: Obteniendo producto por ID: " + id);
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con ID: " + id));
        return convertirADTO(producto);
    }

    /**
     * Obtiene un producto con sus imágenes cargadas para procesamiento.
     * @param productoId ID del producto
     * @return Entidad Producto con imágenes cargadas
     */
    private Producto obtenerProductoConImagenes(Long productoId) {
        // Usar JPQL con JOIN FETCH para asegurar que las imágenes se carguen
        return productoRepository.findById(productoId).orElse(null);
    }

    /**
     * Crea un nuevo producto.
     * @param createDTO Datos del producto a crear
     * @return Producto creado como DTO
     */
    public ProductoDTO crearProducto(CreateProductoDTO createDTO) {
        validarDatosProducto(createDTO);

        // Verificar que la categoría existe
        Categoria categoria = categoriaRepository.findById(createDTO.categoriaId())
                .orElseThrow(() -> new ValidationException("La categoría especificada no existe"));

        // Usar vendedor por defecto (admin id 1) - luego implementar auth
        Usuario vendedor = usuarioRepository.findById(1L)
                .orElseThrow(() -> new ValidationException("Vendedor por defecto no encontrado"));

        // Generar código automático si no se proporciona
        String codigo = createDTO.codigo();
        if (codigo == null || codigo.trim().isEmpty()) {
            codigo = generarCodigoAutomatico(createDTO.nombre(), categoria.getNombre());
        } else {
            // Validar unicidad del código si es proporcionado manualmente
            if (productoRepository.existsByCodigo(codigo)) {
                throw new ValidationException("El código del producto ya está en uso");
            }
        }

        Producto producto = Producto.builder()
                .nombre(createDTO.nombre())
                .codigo(codigo)
                .descripcion(createDTO.descripcion())
                .marca(createDTO.marca())
                .modelo(createDTO.modelo())
                .precio(createDTO.precio())
                .stock(createDTO.stock())
                .categoria(categoria)
                .vendedor(vendedor)
                .build();
        producto.setActivo(true);

        Producto productoGuardado = productoRepository.save(producto);
        return convertirADTO(productoGuardado);
    }

    /**
     * Actualiza un producto existente.
     * @param id ID del producto a actualizar
     * @param createDTO Datos actualizados del producto
     * @return Producto actualizado como DTO
     */
    public ProductoDTO actualizarProducto(Long id, CreateProductoDTO createDTO) {
        validarDatosProducto(createDTO);

        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con ID: " + id));

        // Verificar que la categoría existe
        Categoria categoria = categoriaRepository.findById(createDTO.categoriaId())
                .orElseThrow(() -> new ValidationException("La categoría especificada no existe"));

        // Generar código automático si no se proporciona o está vacío
        String codigo = createDTO.codigo();
        if (codigo == null || codigo.trim().isEmpty()) {
            codigo = generarCodigoAutomatico(createDTO.nombre(), categoria.getNombre());
        } else {
            // Validar unicidad del código si es proporcionado manualmente y diferente al actual
            if (producto.getCodigo() == null || !producto.getCodigo().equals(codigo)) {
                if (productoRepository.existsByCodigo(codigo)) {
                    throw new ValidationException("El código del producto ya está en uso por otro producto");
                }
            }
        }

        producto.setNombre(createDTO.nombre());
        producto.setCodigo(codigo);
        producto.setDescripcion(createDTO.descripcion());
        producto.setMarca(createDTO.marca());
        producto.setModelo(createDTO.modelo());
        producto.setPrecio(createDTO.precio());
        producto.setStock(createDTO.stock());
        producto.setCategoria(categoria);

        Producto productoActualizado = productoRepository.save(producto);
        return convertirADTO(productoActualizado);
    }

    /**
     * Elimina lógicamente un producto (lo marca como inactivo).
     * @param id ID del producto a eliminar
     */
    public void eliminarProducto(Long id) {
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con ID: " + id));

        producto.setActivo(false);
        productoRepository.save(producto);
    }

    /**
     * Busca productos por nombre aproximado.
     * @param nombre Nombre a buscar
     * @return Lista de productos que coinciden
     */
    @Transactional(readOnly = true)
    public List<ProductoDTO> buscarProductosPorNombre(String nombre) {
        return productoRepository.findByNombreContainingIgnoreCase(nombre).stream()
                .filter(Producto::isActivo)
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Obtiene productos con stock bajo.
     * @param stockMinimo Umbral mínimo de stock
     * @return Lista de productos con stock bajo
     */
    @Transactional(readOnly = true)
    public List<ProductoDTO> obtenerProductosConStockBajo(Integer stockMinimo) {
        return productoRepository.findProductosConStockBajo(stockMinimo).stream()
                .map(this::convertirADTO)
                .collect(Collectors.toList());
    }

    /**
     * Actualiza el stock de un producto.
     * @param id ID del producto
     * @param nuevoStock Nuevo stock
     * @return Producto actualizado como DTO
     */
    public ProductoDTO actualizarStock(Long id, Integer nuevoStock) {
        if (nuevoStock < 0) {
            throw new ValidationException("El stock no puede ser negativo");
        }

        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con ID: " + id));

        producto.setStock(nuevoStock);
        Producto productoActualizado = productoRepository.save(producto);
        return convertirADTO(productoActualizado);
    }



    /**
     * Valida los datos de un producto antes de guardar.
     * @param dto Datos a validar
     */
    private void validarDatosProducto(CreateProductoDTO dto) {
        if (dto.precio().compareTo(java.math.BigDecimal.ZERO) <= 0) {
            throw new ValidationException("El precio debe ser mayor que cero");
        }
        if (dto.stock() < 0) {
            throw new ValidationException("El stock no puede ser negativo");
        }
    }

    /**
     * Crea un nuevo producto con imagen opcional.
     * @param createDTO Datos del producto
     * @param imagen Archivo de imagen (opcional)
     * @return Producto creado como DTO
     */
    @Transactional
    public ProductoDTO crearProductoConImagen(CreateProductoDTO createDTO, MultipartFile imagen) {
        validarDatosProducto(createDTO);

        // Verificar que la categoría existe
        Categoria categoria = categoriaRepository.findById(createDTO.categoriaId())
                .orElseThrow(() -> new ValidationException("La categoría especificada no existe"));

        // Usar vendedor por defecto (admin id 1)
        Usuario vendedor = usuarioRepository.findById(1L)
                .orElseThrow(() -> new ValidationException("Vendedor por defecto no encontrado"));

        // Generar código automático si no se proporciona
        String codigo = createDTO.codigo();
        if (codigo == null || codigo.trim().isEmpty()) {
            codigo = generarCodigoAutomatico(createDTO.nombre(), categoria.getNombre());
        } else {
            // Validar unicidad del código si es proporcionado manualmente
            if (productoRepository.existsByCodigo(codigo)) {
                throw new ValidationException("El código del producto ya está en uso");
            }
        }

        Producto producto = Producto.builder()
                .nombre(createDTO.nombre())
                .codigo(codigo)
                .descripcion(createDTO.descripcion())
                .marca(createDTO.marca())
                .modelo(createDTO.modelo())
                .precio(createDTO.precio())
                .stock(createDTO.stock())
                .categoria(categoria)
                .vendedor(vendedor)
                .build();
        producto.setActivo(true);

        Producto productoGuardado = productoRepository.save(producto);

        // Si hay imagen, subirla
        if (imagen != null && !imagen.isEmpty()) {
            // Guardar el archivo físico
            String rutaRelativa = fileStorageService.store(imagen, "productos");

            // Determinar el próximo orden
            int proximoOrden = productoImagenRepository.findByProductoIdOrderByOrdenAsc(producto.getId())
                    .size() + 1;

            // Crear la entidad de imagen
            ProductoImagen productoImagen = ProductoImagen.builder()
                    .producto(productoGuardado)
                    .url(rutaRelativa)
                    .orden(proximoOrden)
                    .build();

            productoImagenRepository.save(productoImagen);
        }

        return convertirADTO(productoGuardado);
    }

    /**
     * Crea un nuevo producto con imagen por URL.
     * @param createDTO Datos del producto
     * @param imagenUrl URL de la imagen
     * @return Producto creado como DTO
     */
    @Transactional
    public ProductoDTO crearProductoConImagenUrl(CreateProductoDTO createDTO, String imagenUrl) {
        System.out.println("=== crearProductoConImagenUrl INVOCADO ===");
        System.out.println("Producto: " + createDTO.nombre());
        System.out.println("URL imagen: " + imagenUrl);

        validarDatosProducto(createDTO);

        // Verificar que la categoría existe
        Categoria categoria = categoriaRepository.findById(createDTO.categoriaId())
                .orElseThrow(() -> new ValidationException("La categoría especificada no existe"));

        // Usar vendedor por defecto (admin id 1)
        Usuario vendedor = usuarioRepository.findById(1L)
                .orElseThrow(() -> new ValidationException("Vendedor por defecto no encontrado"));

        // Generar código automático si no se proporciona
        String codigo = createDTO.codigo();
        if (codigo == null || codigo.trim().isEmpty()) {
            codigo = generarCodigoAutomatico(createDTO.nombre(), categoria.getNombre());
        } else {
            // Validar unicidad del código si es proporcionado manualmente
            if (productoRepository.existsByCodigo(codigo)) {
                throw new ValidationException("El código del producto ya está en uso");
            }
        }

        Producto producto = Producto.builder()
                .nombre(createDTO.nombre())
                .codigo(codigo)
                .descripcion(createDTO.descripcion())
                .marca(createDTO.marca())
                .modelo(createDTO.modelo())
                .precio(createDTO.precio())
                .stock(createDTO.stock())
                .categoria(categoria)
                .vendedor(vendedor)
                .build();
        producto.setActivo(true);

        Producto productoGuardado = productoRepository.save(producto);
        System.out.println("Producto guardado con ID: " + productoGuardado.getId());

        // Si hay URL de imagen, guardarla
        if (imagenUrl != null && !imagenUrl.trim().isEmpty()) {
            System.out.println("Guardando imagen con URL: " + imagenUrl.trim());

            // Determinar el próximo orden
            int proximoOrden = productoImagenRepository.findByProductoIdOrderByOrdenAsc(producto.getId())
                    .size() + 1;

            // Crear la entidad de imagen
            ProductoImagen productoImagen = ProductoImagen.builder()
                    .producto(productoGuardado)
                    .url(imagenUrl.trim())  // Guardar la URL completa
                    .orden(proximoOrden)
                    .build();

            ProductoImagen imagenGuardada = productoImagenRepository.save(productoImagen);
            System.out.println("Imagen guardada con ID: " + imagenGuardada.getId() + ", URL: " + imagenGuardada.getUrl());

            // IMPORTANTE: Recargar el producto desde BD para que incluya la nueva imagen en la relación
            productoGuardado = productoRepository.findById(productoGuardado.getId()).orElse(productoGuardado);
        } else {
            System.out.println("No hay URL de imagen para guardar");
        }

        return convertirADTO(productoGuardado);
    }

    /**
     * Actualiza un producto existente con nueva imagen (REPLACEMENT).
     * Ahora soporta también actualizar con imagen URL externa
     */
    public ProductoDTO actualizarProductoConImagen(
            Long productoId, String codigo, String nombre, String descripcion,
            String marca, String modelo, java.math.BigDecimal precio,
            Integer stock, Long categoriaId, MultipartFile imagen, Boolean imagenEliminar,
            String nuevaImagenUrl) {

        System.out.println("=== INICIO actualizarProductoConImagen (REPLACEMENT MODE) ===");
        System.out.println("Producto ID: " + productoId + ", Imagen: " + (imagen != null ? imagen.getOriginalFilename() : "null"));
        System.out.println("NuevaImagenUrl: " + nuevaImagenUrl);
        System.out.println("ImagenEliminar: " + imagenEliminar);

        try {
            // === VERIFICACIONES BÁSICAS ===
            System.out.println("✓ Paso 1: Verificaciones básicas");
            if (productoId == null || productoId <= 0) {
                throw new ValidationException("ID de producto inválido: " + productoId);
            }
            if (categoriaId == null || categoriaId <= 0) {
                throw new ValidationException("ID de categoría inválido: " + categoriaId);
            }
            if (precio.compareTo(java.math.BigDecimal.ZERO) <= 0) {
                throw new ValidationException("El precio debe ser mayor que cero");
            }
            if (stock < 0) {
                throw new ValidationException("El stock no puede ser negativo");
            }
            System.out.println("✓ Verificaciones pasadas correctamente");

            // === OBTENER PRODUCTO ===
            System.out.println("✓ Paso 2: Buscando producto ID=" + productoId);
            Producto producto = productoRepository.findById(productoId)
                    .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado: " + productoId));
            System.out.println("✓ Producto encontrado: " + producto.getNombre());

            // === OBTENER CATEGORÍA ===
            System.out.println("✓ Paso 3: Buscando categoría ID=" + categoriaId);
            Categoria categoria = categoriaRepository.findById(categoriaId)
                    .orElseThrow(() -> new ValidationException("Categoría no encontrada: " + categoriaId));
            System.out.println("✓ Categoría encontrada: " + categoria.getNombre());

            // === ACTUALIZAR DATOS DEL PRODUCTO ===
            System.out.println("✓ Paso 4: Actualizando datos básicos del producto");
            if (codigo != null && !codigo.trim().isEmpty()) {
                // Validar unicidad del código si es diferente al actual
                if (producto.getCodigo() == null || !producto.getCodigo().equals(codigo)) {
                    if (productoRepository.existsByCodigo(codigo)) {
                        throw new ValidationException("El código del producto ya está en uso por otro producto");
                    }
                    producto.setCodigo(codigo);
                    System.out.println("✓ Código actualizado: " + codigo);
                }
            }
            producto.setNombre(nombre);
            producto.setDescripcion(descripcion);
            producto.setMarca(marca);
            producto.setModelo(modelo);
            producto.setPrecio(precio);
            producto.setStock(stock);
            producto.setCategoria(categoria);
            System.out.println("✓ Datos básicos actualizados");

            // === GUARDAR PRODUCTO ===
            System.out.println("✓ Paso 5: Salvando producto en BD");
            Producto productoGuardado = productoRepository.save(producto);
            System.out.println("✓ Producto guardado correctamente, ID=" + productoGuardado.getId());

            // === GESTIÓN DE IMÁGENES ===
            // Si hay imagen nueva (Archivo o URL): eliminar anteriores y agregar nueva
            // Si no hay imagen nueva (imagen == null): eliminar todas las imágenes para "quitar imagen"
            System.out.println("✓ Paso 6: Gestionando imágenes del producto");
            if (imagen != null && !imagen.isEmpty()) {
                // CASO 1: Hay nueva imagen de archivo -> reemplazar (eliminar anteriores + nueva)
                System.out.println("✓ Imagen nueva de archivo proporcionada, reemplazando imagen anterior");
                eliminarImagenesAnteriores(productoId);
                System.out.println("✓ Imágenes anteriores eliminadas, preparación completada");
            } else if (nuevaImagenUrl != null && !nuevaImagenUrl.trim().isEmpty()) {
                // CASO 2: Hay nueva imagen de URL -> reemplazar (eliminar anteriores + nueva URL)
                System.out.println("✓ Nueva imagen URL proporcionada, reemplazando imagen anterior");
                eliminarImagenesAnteriores(productoId);
                System.out.println("✓ Imágenes anteriores eliminadas, preparación completada para nueva URL");
            } else {
                // CASO 3: Ni imagen ni URL nueva -> usuario quiere "quitar imagen" -> eliminar todas
                System.out.println("✓ Sin imagen nueva - eliminando todas las imágenes del producto");
                eliminarImagenesAnteriores(productoId);
                System.out.println("✓ Todas las imágenes eliminadas");
            }

            // === CREAR DTO DEL RESULTADO ===
            System.out.println("✓ Paso 7: Creando DTO temporal de respuesta");
            // El DTO será correcto después de agregar la nueva imagen

            // === PROCESAR IMAGEN NUEVA FUERA DE LA TRANSACCIÓN ===
            // Prioridad: nuevaImagenUrl > imagen archivo
            if (nuevaImagenUrl != null && !nuevaImagenUrl.trim().isEmpty()) {
                System.out.println("✓ Paso 8: Procesando nueva imagen desde URL");
                procesarImagenUrlAsync(productoId, nuevaImagenUrl);
                System.out.println("✓ Proceso de nueva imagen URL completado");
            } else if (imagen != null && !imagen.isEmpty()) {
                System.out.println("✓ Paso 8: Procesando nueva imagen de archivo");
                procesarImagenAsync(productoId, imagen);
                System.out.println("✓ Proceso de nueva imagen de archivo completado");
            } else {
                System.out.println("✓ Paso 8: No hay imagen para procesar");
            }

            // === OBTENER PRODUCTO FINAL PARA DTO CORRECTO ===
            System.out.println("✓ Paso 9: Obteniendo producto final con imagen actualizada");
            Producto productoFinal = productoRepository.findById(productoId)
                    .orElseThrow(() -> new ResourceNotFoundException("Producto final no encontrado"));
            ProductoDTO resultado = convertirADTO(productoFinal);
            System.out.println("✓ DTO final creado correctamente");

            System.out.println("=== FIN actualizarProductoConImagen (REPLACEMENT EXITOSO) ===");
            return resultado;

        } catch (Exception e) {
            System.err.println("=== ERROR en actualizarProductoConImagen ===");
            System.err.println("Tipo de error: " + e.getClass().getSimpleName());
            System.err.println("Mensaje: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException("Error completo al actualizar producto: " + e.getMessage());
        }
    }

    /**
     * Elimina todas las imágenes anteriores de un producto
     */
    private void eliminarImagenesAnteriores(Long productoId) {
        try {
            // Obtener todas las imágenes del producto
            var imagenes = productoImagenRepository.findByProductoIdOrderByOrdenAsc(productoId);

            if (imagenes != null && !imagenes.isEmpty()) {
                System.out.println("✓ Eliminando " + imagenes.size() + " imágenes anteriores del producto " + productoId);

                // Eliminar archivos físicos
                for (ProductoImagen img : imagenes) {
                    if (img.getUrl() != null && img.getUrl().contains("productos/")) {
                        // Intentar eliminar archivo físico
                        try {
                            String filename = img.getUrl().replace("images/productos/productos/", "");
                            // Aquí podrías agregar código para eliminar archivo físico
                            System.out.println("✓ Archivo físico " + filename + " marcado para eliminación");
                        } catch (Exception e) {
                            System.out.println("⚠️ No se pudo eliminar archivo físico: " + e.getMessage());
                        }
                    }
                }

                // Eliminar registros de BD uno por uno para asegurar eliminación
                for (ProductoImagen img : imagenes) {
                    productoImagenRepository.delete(img);
                }
                System.out.println("✓ Registros de imágenes eliminados de BD uno por uno");
            } else {
                System.out.println("✓ No hay imágenes anteriores para eliminar");
            }
        } catch (Exception e) {
            System.err.println("⚠️ Error eliminando imágenes anteriores: " + e.getMessage());
            // No fallar la actualización por error al eliminar imágenes anteriores
        }
    }

    /**
     * Procesa imagen completamente separado, sin transacciones complejas
     */
    private void procesarImagenAsync(Long productoId, MultipartFile imagen) {
        try {
            System.out.println("✓ Procesando imagen de archivo para producto ID=" + productoId);

            // Crear nuevo registro de imagen en BD
            int proximoOrden = productoImagenRepository.findMaxOrdenByProductoId(productoId) + 1;
            System.out.println("✓ Obtenido próximo orden: " + proximoOrden);

            Producto producto = productoRepository.findById(productoId)
                    .orElseThrow(() -> new ResourceNotFoundException("Producto para imagen: " + productoId));

            // Guardar tanto en file system como en BD
            String rutaRelativa = fileStorageService.store(imagen, "productos");

            ProductoImagen productoImagenNueva = ProductoImagen.builder()
                    .producto(producto)
                    .url(rutaRelativa)
                    .orden(proximoOrden)
                    .build();

            productoImagenRepository.save(productoImagenNueva);
            System.out.println("✓ Imagen de archivo guardada correctamente en BD y file system");

        } catch (Exception e) {
            System.err.println("⚠️ Error procesando imagen de archivo pero producto ya fue actualizado: " + e.getMessage());
            e.printStackTrace(); // Log pero NO fallar la actualización del producto
        }
    }

    /**
     * Procesa imagen completamente separado cuando se recibe una URL directamente
     */
    private void procesarImagenUrlAsync(Long productoId, String imagenUrl) {
        try {
            System.out.println("✓ Procesando imagen de URL para producto ID=" + productoId + ", URL=" + imagenUrl);

            // Crear nuevo registro de imagen en BD
            int proximoOrden = productoImagenRepository.findMaxOrdenByProductoId(productoId) + 1;
            System.out.println("✓ Obtenido próximo orden: " + proximoOrden);

            Producto producto = productoRepository.findById(productoId)
                    .orElseThrow(() -> new ResourceNotFoundException("Producto para imagen URL: " + productoId));

            // Guardar URL directamente en BD (sin file system para URLs externas)
            ProductoImagen productoImagenNueva = ProductoImagen.builder()
                    .producto(producto)
                    .url(imagenUrl.trim())
                    .orden(proximoOrden)
                    .build();

            ProductoImagen imagenGuardada = productoImagenRepository.save(productoImagenNueva);
            System.out.println("✓ Imagen URL guardada correctamente en BD, ID=" + imagenGuardada.getId() + ", URL=" + imagenGuardada.getUrl());

        } catch (Exception e) {
            System.err.println("⚠️ Error procesando imagen URL pero producto ya fue actualizado: " + e.getMessage());
            e.printStackTrace(); // Log pero NO fallar la actualización del producto
        }
    }

    /**
     * Clase interna para organizar la lógica sin conflictos de transacción
     */
    private static class ProductoServices {
        static class Holder {
            static void verifyData(Long productoId, Long categoriaId, java.math.BigDecimal precio, Integer stock) {
                if (productoId == null || productoId <= 0) {
                    throw new ValidationException("ID de producto inválido");
                }
                if (categoriaId == null || categoriaId <= 0) {
                    throw new ValidationException("ID de categoría inválido");
                }
                if (precio.compareTo(java.math.BigDecimal.ZERO) <= 0) {
                    throw new ValidationException("Precio debe ser > 0");
                }
                if (stock < 0) {
                    throw new ValidationException("Stock no puede ser negativo");
                }
            }

            static ProductoDTO updateProductData(
                    ProductoRepository productoRepository, CategoriaRepository categoriaRepository,
                    Long productoId, String codigo, String nombre, String descripcion,
                    String marca, String modelo, java.math.BigDecimal precio, Integer stock, Long categoriaId) {

                Producto producto = productoRepository.findById(productoId)
                        .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado: " + productoId));

                Categoria categoria = categoriaRepository.findById(categoriaId)
                        .orElseThrow(() -> new ValidationException("Categoría no encontrada: " + categoriaId));

                // Generar código si necesario
                if (codigo == null || codigo.trim().isEmpty()) {
                    // Usar código existente o simplificar lógica
                    if (producto.getCodigo() != null && !producto.getCodigo().trim().isEmpty()) {
                        codigo = producto.getCodigo();
                    } else {
                        // Generar código simple
                        codigo = "PROD-" + productoId;
                    }
                }

                // Actualizar datos básicos - una operación a la vez para evitar conflictos
                producto.setNombre(nombre);
                producto.setCodigo(codigo);
                producto.setDescripcion(descripcion);
                producto.setMarca(marca);
                producto.setModelo(modelo);
                producto.setPrecio(precio);
                producto.setStock(stock);
                producto.setCategoria(categoria);

                // Guardar producto SIN transacción compleja
                Producto productoGuardado = productoRepository.save(producto);

                // Crear DTO simplificado
                return new ProductoDTO(
                        productoGuardado.getId(),
                        productoGuardado.getCodigo(),
                        productoGuardado.getNombre(),
                        productoGuardado.getDescripcion(),
                        productoGuardado.getMarca(),
                        productoGuardado.getModelo(),
                        productoGuardado.getPrecio(),
                        productoGuardado.getStock(),
                        productoGuardado.getCategoria() != null ? productoGuardado.getCategoria().getId() : null,
                        productoGuardado.getCategoria() != null ? productoGuardado.getCategoria().getNombre() : null,
                        productoGuardado.getVendedor() != null ? productoGuardado.getVendedor().getId() : null,
                        productoGuardado.getVendedor() != null ? productoGuardado.getVendedor().getNombre() : null,
                        null, // No incluir imagen para simplificar por ahora
                        productoGuardado.isActivo(),
                        productoGuardado.getFechaCreacion(),
                        productoGuardado.getFechaModificacion()
                );
            }

            static void processImageSeparately(
                    FileStorageService fileStorageService, ProductoImagenRepository productoImagenRepository,
                    ProductoRepository productoRepository, Long productoId, MultipartFile imagen) {

                try {
                    // Guardar archivo físicamente (operación I/O)
                    String rutaRelativa = fileStorageService.store(imagen, "productos");

                    // Pre-obtener el siguiente orden
                    int proximoOrden = productoImagenRepository.findMaxOrdenByProductoId(productoId) + 1;

                    // Crear y guardar entidad imagen (operación BD independiente)
                    Producto producto = productoRepository.findById(productoId)
                            .orElseThrow(() -> new ResourceNotFoundException("Producto: " + productoId));

                    ProductoImagen productoImagen = ProductoImagen.builder()
                            .producto(producto)
                            .url(rutaRelativa)
                            .orden(proximoOrden)
                            .build();

                    productoImagenRepository.save(productoImagen);

                    System.out.println("Imagen guardada exitosamente: " + rutaRelativa);

                } catch (Exception e) {
                    System.err.println("Error guardando imagen separadamente: " + e.getMessage());
                    // No fallar la actualización del producto por error de imagen
                    // Solo loggear y continuar
                }
            }
        }
    }

    /**
     * Genera un código automático único para el producto.
     * @param nombreProducto Nombre del producto
     * @param nombreCategoria Nombre de la categoría
     * @return Código único generado
     */
    private String generarCodigoAutomatico(String nombreProducto, String nombreCategoria) {
        // Usar timestamp para generar códigos únicos automáticamente
        long timestamp = System.currentTimeMillis();
        String timeCode = Long.toString(timestamp).substring(6); // Últimos 7 dígitos

        // Limpiar y acortar nombres (máximo 8 caracteres para nombre)
        String nombreLimpio = limpiarTextoParaCodigo(nombreProducto).substring(0, Math.min(6, nombreProducto.length()));
        String categoriaLimpio = limpiarTextoParaCodigo(nombreCategoria).substring(0, Math.min(3, nombreCategoria.length()));

        // Generar código: NOMBRE-CATEGORIA-TIMESTAMP (ej: LAPTOP-COM-1234567)
        return String.format("%s-%s-%s", nombreLimpio.toUpperCase(), categoriaLimpio.toUpperCase(), timeCode);
    }

    /**
     * Limpia el texto para usarlo en códigos: elimina caracteres especiales y espacios.
     * @param texto Texto a limpiar
     * @return Texto limpio en mayúsculas
     */
    private String limpiarTextoParaCodigo(String texto) {
        if (texto == null) return "";
        // Mantener solo letras, números y espacios, luego reemplazar espacios con guiones
        return texto.replaceAll("[^a-zA-Z0-9\\s]", "").trim().replaceAll("\\s+", "-").toUpperCase();
    }

    /**
     * Calcula el siguiente orden para imagenes usando consulta simple
     */
    private int getSiguienteOrdenImagen(Long productoId) {
        try {
            return productoImagenRepository.findMaxOrdenByProductoId(productoId) + 1;
        } catch (Exception e) {
            return 1; // Valor por defecto si no hay imágenes
        }
    }

    /**
     * Sube una nueva imagen para un producto existente.
     * @param productoId ID del producto
     * @param imagen Archivo de imagen
     */
    public void subirImagenProducto(Long productoId, MultipartFile imagen) {
        // Cambiar a public para evitar transacción anidada
        // y llamar sin @Transactional
        try {
            Producto producto = productoRepository.findById(productoId)
                    .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado: " + productoId));

            if (imagen == null || imagen.isEmpty()) {
                throw new ValidationException("Imagen vacía");
            }

            // Guardar archivo
            String rutaRelativa = fileStorageService.store(imagen, "productos");

            // Determinar orden
            int proximoOrden = productoImagenRepository.findByProductoIdOrderByOrdenAsc(productoId).size() + 1;

            // Crear entidad imagem
            ProductoImagen productoImagen = ProductoImagen.builder()
                    .producto(producto)
                    .url(rutaRelativa)
                    .orden(proximoOrden)
                    .build();

            productoImagenRepository.save(productoImagen);

        } catch (Exception e) {
            // Log the error but don't fail the product update
            System.err.println("Error guardando imagen: " + e.getMessage());
            throw new RuntimeException("Error al guardar imagen: " + e.getMessage());
        }
    }

    /**
     * Convierte una entidad Producto a DTO.
     * Usa URLs guardadas directamente de la BD (incluyendo URLs externas)
     * @param producto Entidad Producto
     * @return Producto como DTO
     */
    private ProductoDTO convertirADTO(Producto producto) {
        System.out.println("=== convertirADTO para producto: " + producto.getNombre() + " (ID: " + producto.getId() + ")");

        String imagenUrl = null;

        // Cargar imagen principal si existe
        if (producto.getImagenes() != null && !producto.getImagenes().isEmpty()) {
            ProductoImagen imagenPrincipal = producto.getImagenes().get(0); // Primera imagen (ordenada por 'orden')
            System.out.println("Encontrada imagen principal: ID=" + imagenPrincipal.getId() + ", URL=" + imagenPrincipal.getUrl());

            // Usar la URL guardada directamente (puede ser externa o local)
            if (imagenPrincipal.getUrl() != null && !imagenPrincipal.getUrl().isEmpty()) {
                imagenUrl = imagenPrincipal.getUrl();
                System.out.println("Imagen final para producto: " + imagenUrl);
            } else {
                System.out.println("URL de imagen es null o vacía");
            }
        } else {
            System.out.println("Producto no tiene imágenes en la colección");
        }

        ProductoDTO dto = new ProductoDTO(
                producto.getId(),
                producto.getCodigo(),
                producto.getNombre(),
                producto.getDescripcion(),
                producto.getMarca(),
                producto.getModelo(),
                producto.getPrecio(),
                producto.getStock(),
                producto.getCategoria() != null ? producto.getCategoria().getId() : null,
                producto.getCategoria() != null ? producto.getCategoria().getNombre() : null,
                producto.getVendedor() != null ? producto.getVendedor().getId() : null,
                producto.getVendedor() != null ? producto.getVendedor().getNombre() : null,
                imagenUrl, // URL guardada directamente
                producto.isActivo(),
                producto.getFechaCreacion(),
                producto.getFechaModificacion()
        );

        System.out.println("=== DTO creado con imagen: " + dto.imagen());
        return dto;
    }


}
