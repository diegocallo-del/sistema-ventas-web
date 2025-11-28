﻿﻿# PROYECTO FINAL - Sistema de Gestión de Ventas

## Estructura del Proyecto

### Backend (Java)
- \src/main/java/\ - Código fuente Java
- \src/main/resources/\ - Configuraciones
- \database/\ - Scripts de base de datos

### Frontend (JavaScript Moderno)
- \rontend/public/\ - Archivos estáticos
- \rontend/src/\ - Código fuente
  - \pp/\ - Lógica principal (router, store)
  - \iews/\ - Páginas/Vistas
  - \components/\ - Componentes reutilizables
  - \services/\ - APIs y servicios
  - \utils/\ - Utilidades
  - \styles/\ - Estilos CSS

## Comandos Útiles

### Frontend
\\\ash
cd frontend
npm install
npm run dev      # Desarrollo
npm run build    # Producción
\\\

## Desarrollo
1. Backend: Ejecutar en puerto 8080
2. Frontend: Ejecutar \
pm run dev\ (puerto 3000)
3. Acceder: http://localhost:3000

## Roles y Permisos (vista general)

- **Administrador**: acceso completo; gestiona usuarios y configuracion del sistema.
- **Supervisor**: gestiona productos, clientes y ventas, y ve reportes globales de vendedores y clientes.
- **Vendedor**: orientado a proveedores; atiende a sus clientes y ve reportes de su propia gestion.
- **Cliente**: tipo marketplace; puede ver productos, comprar/vender y consultar solo sus propias operaciones.

## Roles y Permisos (vista general)

- **Administrador**: acceso completo; gestiona usuarios y configuracion del sistema.
- **Supervisor**: gestiona productos, clientes y ventas, y ve reportes globales de vendedores y clientes.
- **Vendedor**: orientado a proveedores; atiende a sus clientes y ve reportes de su propia gestion.
- **Cliente**: tipo marketplace; puede ver productos, comprar/vender y consultar solo sus propias operaciones.

