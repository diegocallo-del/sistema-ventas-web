# Sistema de Punto de Venta - Frontend

Sistema integral de punto de venta desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## Caracteristicas Principales

- Autenticacion y autorizacion basada en roles
- Gestion completa de productos con inventario
- Administracion de clientes
- Sistema de ventas con carrito de compras
- Reportes y estadisticas de ventas
- Interfaz moderna y responsiva
- Arquitectura escalable y mantenible

## Tecnologias Utilizadas

- **Next.js 14**: Framework de React con App Router
- **TypeScript**: Tipado estatico para mayor seguridad
- **Tailwind CSS**: Framework de CSS utility-first
- **Zustand**: State management ligero y eficiente
- **Axios**: Cliente HTTP para comunicacion con API
- **date-fns**: Manejo de fechas
- **Lucide React**: Iconos modernos

## Estructura del Proyecto
```
frontend/
├── app/                      # Paginas y rutas de Next.js
│   ├── (auth)/              # Grupo de rutas de autenticacion
│   ├── (dashboard)/         # Grupo de rutas del dashboard
│   └── globals.css          # Estilos globales
├── components/              # Componentes reutilizables
│   ├── ui/                  # Componentes de UI base
│   └── modules/             # Componentes de modulos especificos
├── lib/                     # Utilidades y configuracion
│   ├── config/             # Configuracion general
│   ├── roles/              # Sistema de roles y permisos
│   ├── services/           # Servicios de API
│   └── types/              # Definiciones de tipos
├── store/                   # Estado global con Zustand
├── hooks/                   # Custom hooks de React
└── public/                  # Archivos estaticos
```

## Roles y Permisos

### Administrador
- Acceso completo a todas las funcionalidades
- Gestion de usuarios
- Configuracion del sistema

### Supervisor
- Gestion de productos y clientes
- Visualizacion de todas las ventas
- Acceso a reportes completos

### Vendedor
- Realizar ventas
- Consultar productos y clientes
- Visualizar sus propias ventas

## Instalacion y Configuracion

### Requisitos Previos

- Node.js 18 o superior
- npm o yarn
- Backend API en ejecucion

### Pasos de Instalacion

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd frontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
# Crear archivo .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000
```

4. Ejecutar en modo desarrollo:
```bash
npm run dev
```

5. Abrir en el navegador:
```
http://localhost:3000
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Compila la aplicacion para produccion
- `npm start`: Inicia el servidor de produccion
- `npm run lint`: Ejecuta el linter
- `npm run format`: Formatea el codigo con Prettier

## Variables de Entorno

### Requeridas

- `NEXT_PUBLIC_API_URL`: URL del backend API

### Opcionales

- `NODE_ENV`: Entorno de ejecucion (development, production, test)

## Arquitectura del Codigo

### Componentes UI

Los componentes base reutilizables se encuentran en `components/ui/`:
- Button
- Input
- Card
- Table
- Dialog

### Servicios

Los servicios de API (`lib/services/`) encapsulan toda la logica de comunicacion con el backend:
- `auth-service.ts`: Autenticacion
- `producto-service.ts`: Productos
- `cliente-service.ts`: Clientes
- `venta-service.ts`: Ventas

### State Management

Se utiliza Zustand para el estado global:
- `auth-store.ts`: Estado de autenticacion
- `venta-store.ts`: Estado del carrito de ventas

### Hooks Personalizados

Los custom hooks (`hooks/`) proporcionan logica reutilizable:
- `use-auth.ts`: Gestion de autenticacion
- `use-productos.ts`: Operaciones con productos
- `use-ventas.ts`: Operaciones con ventas

## Flujo de Autenticacion

1. Usuario ingresa credenciales en `/login`
2. Se valida con el backend via `auth-service`
3. Se almacena el token y datos del usuario
4. El middleware protege las rutas privadas
5. El token se incluye automaticamente en todas las peticiones

## Gestion de Ventas

1. Seleccionar o crear cliente
2. Buscar y agregar productos al carrito
3. Ajustar cantidades y verificar stock
4. Seleccionar metodo de pago
5. Confirmar venta
6. Sistema actualiza inventario automaticamente

## Desarrollo

### Agregar un Nuevo Modulo

1. Crear tipos en `lib/types/`
2. Crear servicio en `lib/services/`
3. Crear componentes en `components/modules/`
4. Crear pagina en `app/(dashboard)/`
5. Agregar permisos en `lib/roles/`

### Convenciones de Codigo

- Usar TypeScript para todo el codigo
- Componentes funcionales con hooks
- Nombres descriptivos en español para variables de negocio
- Comentarios en español para documentacion
- Seguir la estructura de carpetas establecida

## Testing
```bash
# Ejecutar tests (cuando esten implementados)
npm test
```

## Deployment

### Build de Produccion
```bash
npm run build
npm start
```

### Variables de Entorno en Produccion

Asegurar que todas las variables requeridas esten configuradas en el entorno de produccion.

## Troubleshooting

### Error de conexion con API

- Verificar que el backend este en ejecucion
- Revisar la variable `NEXT_PUBLIC_API_URL`
- Verificar CORS en el backend

### Errores de autenticacion

- Limpiar localStorage
- Verificar validez del token
- Revisar que el usuario tenga los permisos adecuados

## Contribuir

1. Crear una rama para la funcionalidad
2. Hacer commit de los cambios
3. Crear un Pull Request
4. Esperar revision del codigo

## Licencia

Este proyecto es privado y confidencial.

## Contacto

Para consultas y soporte, contactar al equipo de desarrollo.