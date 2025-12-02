# 🛒 Sistema de Ventas Empresarial

Un sistema completo de punto de venta (POS) moderno construido con **Spring Boot** y **Next.js**, diseñado para pequeñas y medianas empresas. Incluye gestión de inventario inteligente, análisis con IA, y una interfaz de usuario premium.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Arquitectura](#arquitectura)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [API](#api)
- [Testing](#testing)
- [Despliegue](#despliegue)
- [Licencia](#licencia)

## ✨ Características

### 🎯 Funcionalidades Principales
- ✅ **Sistema de Autenticación** - JWT con roles múltiples (Admin, Vendedor, Usuario)
- ✅ **Gestión de Productos** - CRUD completo con categorías y control de stock
- ✅ **Gestión de Clientes** - Base de datos completa con historial de compras
- ✅ **Sistema de Ventas POS** - Flujo completo desde selección hasta checkout
- ✅ **Dashboard Interactivo** - KPIs en tiempo real con gráficos dinámicos
- ✅ **Análisis con IA** - Recomendaciones inteligentes usando Groq/Llama3.1
- ✅ **Predicciones Básicas** - Análisis de tendencias basado en datos históricos
- ✅ **Notificaciones Automáticas** - Alertas de stock bajo cada 5 minutos
- ✅ **Exportación de Datos** - Reportes CSV profesionales para Excel/Google Sheets

### 🚀 Características Avanzadas
- 🔒 **Seguridad Estandar** - Spring Security con autenticación JWT
- ⚡ **Optimización Performance** - Sistema de caché automático
- 📊 **Reportes Inteligentes** - Exportación automática de datos críticos
- 🤖 **IA Integrada** - Análisis inteligente con modelos Groq
- 📱 **Responsive Design** - Interfaz moderna que funciona en móviles
- 🎨 **UI/UX Premium** - Diseño dark theme con animaciones fluidas
- 🔄 **Tareas Programadas** - Monitoreo automático y reportes diarios
- 📈 **Análisis Predictivo** - Algoritmos de predicción de demanda

## 🛠️ Tecnologías

### Backend
- **Java 21** - Lenguaje de programación
- **Spring Boot 3.2** - Framework web
- **Spring Security 6** - Seguridad y autenticación
- **Spring Data JPA** - Persistencia de datos
- **MySQL 8.0** - Base de datos relacional
- **JWT** - Tokens de autenticación
- **Maven** - Gestión de dependencias

### Frontend
- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos modernos
- **Lucide Icons** - Iconografía consistente
- **Recharts** - Gráficos interactivos
- **React Hook Form** - Manejo de formularios
- **SWR** - Gestión de estado y caché

### IA y Análisis
- **Groq API** - Procesamiento de lenguaje natural
- **Modelos Llama 3.1** - IA para análisis y recomendaciones

## 🏗️ Arquitectura

```
sistema-ventas-web/
├── backend/                          # API Spring Boot
│   ├── src/main/java/com/ventas/     # Código fuente
│   │   ├── config/                   # Configuraciones Spring
│   │   ├── controladores/            # REST Controllers
│   │   ├── servicios/                # Lógica de negocio
│   │   ├── repositorios/             # Data Access Layer
│   │   ├── modelos/                  # Entidades JPA
│   │   └── util/                     # Utilidades
│   ├── src/main/resources/           # Configuración y SQL
│   └── Dockerfile                    # Containerización
│
├── frontend/                         # Aplicación Next.js
│   ├── app/                          # App Router
│   │   ├── (auth)/                   # Rutas públicas
│   │   ├── dashboard/                # Panel administrativo
│   │   └── api/                      # API Routes (si necesario)
│   ├── components/                   # Componentes reutilizables
│   ├── lib/                          # Servicios y utilidades
│   └── public/                       # Assets estáticos
│
├── database/                         # Scripts de base de datos
└── docs/                             # Documentación adicional
```

## 🚀 Instalación

### Prerrequisitos
- **Java 21** o superior
- **Node.js 18** o superior
- **MySQL 8.0** o superior
- **Maven 3.8** o superior
- **Git**

### 1. Clonar el repositorio
```bash
git clone https://github.com/diegocallo-del/sistema-ventas-web.git
cd sistema-ventas-web
```

### 2. Backend - Configuración
```bash
cd backend

# Instalar dependencias
./mvnw dependency:resolve

# Configurar base de datos
# Editar src/main/resources/application.properties
# Configurar usuario y contraseña de MySQL

# Ejecutar la aplicación
./mvnw spring-boot:run
```

### 3. Frontend - Configuración
```bash
cd frontend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con la URL del backend

# Ejecutar la aplicación
npm run dev
```

### 4. Base de Datos
```bash
# Ejecutar script inicial
mysql -u root -p < database/ventas_db.sql
```

## ⚙️ Configuración

### Variables de Entorno Backend
```properties
# Base de datos
spring.datasource.url=jdbc:mysql://localhost:3306/ventas_db
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña

# JWT
jwt.secret=tu_jwt_secret_aqui
jwt.expiration=86400000

# IA (Groq)
ia.api.key=tu_groq_api_key
ia.api.model=llama-3.1-8b-instant
```

### Variables de Entorno Frontend
```env
# API
NEXT_PUBLIC_API_URL=http://localhost:8080/api

# Firebase (opcional para autenticación social)
NEXT_PUBLIC_FIREBASE_API_KEY=tu_firebase_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_dominio
```

## 📖 Uso

### Acceso al Sistema
1. **URL Backend**: http://localhost:8080
2. **URL Frontend**: http://localhost:3000

### Usuarios de Prueba
- **Admin**: admin@example.com / admin123
- **Vendedor**: vendedor@example.com / vendedor123
- **Usuario**: usuario@example.com / usuario123

### Flujo de Uso Típico
1. **Login** con credenciales
2. **Dashboard** - Ver métricas generales
3. **Productos** - Gestionar inventario
4. **Ventas** - Realizar transacciones
5. **Reportes** - Descargar datos e insights
6. **IA** - Consultar análisis inteligentes

## 🔌 API

### Endpoints Principales

#### Autenticación
```http
POST /api/auth/login          # Login
POST /api/auth/register       # Registro
POST /api/auth/refresh        # Refresh token
```

#### Productos
```http
GET    /api/productos         # Listar todos
POST   /api/productos         # Crear nuevo
GET    /api/productos/{id}    # Obtener uno
PUT    /api/productos/{id}    # Actualizar
DELETE /api/productos/{id}    # Eliminar
```

#### Ventas
```http
GET    /api/ventas            # Listar ventas
POST   /api/ventas            # Crear venta
GET    /api/ventas/{id}       # Detalles de venta
PUT    /api/ventas/{id}       # Cambiar estado
```

#### IA
```http
POST /api/ia/procesar         # Consultar análisis IA
```

#### Exportación
```http
GET /api/export/productos/csv       # Exportar productos
GET /api/export/ventas/csv          # Exportar ventas
GET /api/export/clientes/csv        # Exportar clientes
GET /api/export/reporte-completo/csv # Reporte completo
```

### Autenticación
Incluir header en requests:
```http
Authorization: Bearer <token_jwt>
```

## 🧪 Testing

### Backend - Spring Boot
```bash
cd backend
./mvnw test                    # Ejecutar tests unitarios
./mvnw integration-test        # Tests de integración
./mvnw verify                  # Verificación completa
```

### Frontend - Next.js
```bash
cd frontend
npm test                      # Tests unitarios
npm run test:e2e              # Tests end-to-end
npm run test:coverage         # Cobertura de tests
```

### Tests Disponibles
- **Unitarios**: Servicios, utilidades, validaciones
- **Integración**: API endpoints, base de datos
- **E2E**: Flujos completos de usuario
- **Performance**: Tests de carga básicos

## 🚀 Despliegue

### Docker (Recomendado)
```bash
# Construir imágenes
docker build -t ventas-backend ./backend
docker build -t ventas-frontend ./frontend

# Ejecutar con docker-compose
docker-compose up -d
```

### Producción Frontend
```bash
cd frontend
npm run build
npm start
```

### Producción Backend
```bash
cd backend
./mvnw clean package -DskipTests
java -jar target/*.jar
```

### Variables de Producción
```bash
# Backend
SPRING_PROFILES_ACTIVE=prod
MYSQL_HOST=localhost
MYSQL_USER=prod_user
MYSQL_PASSWORD=secure_pass

# Frontend
NEXT_PUBLIC_API_URL=https://api.tuempresa.com
```

## 📈 Monitoreo

### Métricas Disponibles
- **Performance**: Tiempos de respuesta, uso de CPU/memoria
- **Negocio**: Ventas diarias, productos más vendidos
- **Sistema**: Estado de tareas programadas, alertas de stock
- **IA**: Consultas procesadas, tiempo de respuesta

### Logs
- **Backend**: En `/logs/application.log`
- **Frontend**: En consola del navegador
- **Sistema**: Notificaciones automáticas cada 5 minutos

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -am 'Agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

### Guías de Desarrollo
- Seguir principios SOLID
- Escribir tests para nuevas funcionalidades
- Mantener documentación actualizada
- Usar commits descriptivos

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver archivo LICENSE para más detalles.

## 📞 Soporte

- **Email**: soporte@sistemaventas.com
- **Documentación**: [Wiki del proyecto]
- **Issues**: Para reportar problemas
- **Discussions**: Para preguntas generales

## 🙏 Agradecimientos

- **Spring Boot Team** por el excelente framework
- **Next.js Team** por la experiencia de desarrollo moderna
- **Comunidad Open Source** por las herramientas utilizadas
- **Groq AI** por el servicio de modelos de lenguaje

---

**⭐ Si te gusta este proyecto, dale una estrella en GitHub!**

Desarrollado con ❤️ por Diego Callo
