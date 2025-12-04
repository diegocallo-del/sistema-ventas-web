# 📁 Carpeta de Archivos Subidos

Esta carpeta contiene todos los archivos subidos por usuarios del sistema de ventas.

## 📂 Estructura

```
uploads/
├── images/
│   └── productos/     # Imágenes de productos
│       ├── abc123.jpg
│       ├── def456.png
│       └── ...
└── README.md
```

## 🔗 URLs de Acceso

Las imágenes se acceden a través de:
```
http://localhost:8080/uploads/images/productos/filename.ext
```

## ⚙️ Configuración Backend

- **Directorio físico**: `backend/src/main/resources/static/uploads/`
- **URL base**: `/uploads/**`
- **Servicio**: `FileStorageService`
- **Validación**: Máximo 5MB, tipos: jpg, jpeg, png, gif, webp

## 🚫 Notas Importantes

- NO subir archivos directamente aquí manualmente
- Usar únicamente los endpoints del API para subida/elimination
- Los archivos se eliminan automáticamente cuando se eliminar el producto/usuario correspondiente
