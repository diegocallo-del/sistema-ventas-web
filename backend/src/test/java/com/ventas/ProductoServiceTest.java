package com.ventas;

import com.ventas.dto.CreateProductoDTO;
import com.ventas.dto.ProductoDTO;
import com.ventas.excepciones.ValidationException;
import com.ventas.modelos.Categoria;
import com.ventas.modelos.Producto;
import com.ventas.repositorios.CategoriaRepository;
import com.ventas.repositorios.ProductoRepository;
import com.ventas.servicios.ProductoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProductoServiceTest {

    @Mock
    private ProductoRepository productoRepository;

    @Mock
    private CategoriaRepository categoriaRepository;

    @InjectMocks
    private ProductoService productoService;

    private Producto producto;
    private Categoria categoria;

    @BeforeEach
    void setUp() {
        categoria = new Categoria();
        categoria.setId(1L);
        categoria.setNombre("Categoría Test");
        categoria.setActivo(true);

        producto = new Producto();
        producto.setId(1L);
        producto.setCodigo("PROD001");
        producto.setNombre("Producto Test");
        producto.setPrecio(new BigDecimal("100.00"));
        producto.setStock(10);
        producto.setActivo(true);
        producto.setCategoria(categoria);
    }

    @Test
    void obtenerTodosLosProductos_DeberiaRetornarProductosActivos() {
        // Arrange
        when(productoRepository.findByActivoTrue()).thenReturn(Arrays.asList(producto));

        // Act
        List<ProductoDTO> resultado = productoService.obtenerTodosLosProductos();

        // Assert
        assertThat(resultado).hasSize(1);
        verify(productoRepository, times(1)).findByActivoTrue();
    }

    @Test
    void obtenerProductoPorId_ProductoExiste_DeberiaRetornarDTO() {
        // Arrange
        when(productoRepository.findById(1L)).thenReturn(Optional.of(producto));

        // Act
        ProductoDTO resultado = productoService.obtenerProductoPorId(1L);

        // Assert
        assertThat(resultado).isNotNull();
        assertThat(resultado.nombre()).isEqualTo("Producto Test");
        assertThat(resultado.id()).isEqualTo(1L);
    }

    @Test
    void crearProducto_DatosValidos_DeberiaCrearProducto() {
        // Arrange
        CreateProductoDTO createDTO = new CreateProductoDTO(
            "Nuevo Producto", "Descripción", new BigDecimal("300.00"), 20, 1L
        );

        Producto productoGuardado = new Producto();
        productoGuardado.setId(2L);
        productoGuardado.setCodigo("N001");
        productoGuardado.setNombre("Nuevo Producto");
        productoGuardado.setPrecio(new BigDecimal("300.00"));
        productoGuardado.setStock(20);
        productoGuardado.setActivo(true);
        productoGuardado.setCategoria(categoria);

        when(categoriaRepository.findById(1L)).thenReturn(Optional.of(categoria));
        when(productoRepository.count()).thenReturn(0L);
        when(productoRepository.save(any(Producto.class))).thenReturn(productoGuardado);

        // Act
        ProductoDTO resultado = productoService.crearProducto(createDTO);

        // Assert
        assertThat(resultado).isNotNull();
        assertThat(resultado.nombre()).isEqualTo("Nuevo Producto");
        assertThat(resultado.id()).isEqualTo(2L);
        verify(productoRepository, times(1)).save(any(Producto.class));
    }

    @Test
    void crearProducto_PrecioInvalido_DeberiaLanzarExcepcion() {
        // Arrange
        CreateProductoDTO createDTO = new CreateProductoDTO(
            "Producto", "Descripción", BigDecimal.ZERO, 10, 1L
        );

        // Act & Assert
        assertThatThrownBy(() -> productoService.crearProducto(createDTO))
            .isInstanceOf(ValidationException.class)
            .hasMessage("El precio debe ser mayor que cero");
    }

    @Test
    void actualizarStock_ValorNegativo_DeberiaLanzarExcepcion() {
        // Act & Assert
        assertThatThrownBy(() -> productoService.actualizarStock(1L, -5))
            .isInstanceOf(ValidationException.class)
            .hasMessage("El stock no puede ser negativo");
    }

    @Test
    void buscarProductosPorNombre_DeberiaRetornarCoincidencias() {
        // Arrange
        when(productoRepository.findByNombreContainingIgnoreCase("test"))
            .thenReturn(Arrays.asList(producto));

        // Act
        List<ProductoDTO> resultado = productoService.buscarProductosPorNombre("test");

        // Assert
        assertThat(resultado).hasSize(1);
        assertThat(resultado.get(0).nombre()).isEqualTo("Producto Test");
    }

    @Test
    void eliminarProducto_DeberiaMarcarComoInactivo() {
        // Arrange
        when(productoRepository.findById(1L)).thenReturn(Optional.of(producto));
        when(productoRepository.save(any(Producto.class))).thenReturn(producto);

        // Act
        productoService.eliminarProducto(1L);

        // Assert
        verify(productoRepository, times(1)).save(producto);
        assertThat(producto.isActivo()).isFalse();
    }
}
