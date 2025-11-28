# Configuración de Groq API

## ¿Qué es Groq?

Groq es una plataforma de IA gratuita y muy potente que ofrece acceso a modelos avanzados como:
- **Llama 3.3 70B Versatile** - El modelo más potente disponible actualmente (recomendado)
- **Llama 3.1 8B Instant** - Más rápido, ideal para respuestas rápidas
- **Mixtral 8x7b** - Modelo de alta calidad

## Pasos para obtener tu API Key gratuita

1. **Visita**: https://console.groq.com/
2. **Crea una cuenta** (es completamente gratuita)
3. **Ve a la sección "API Keys"**: https://console.groq.com/keys
4. **Crea una nueva API Key**
5. **Copia la API Key** generada

## Configuración en el proyecto

1. Abre el archivo: `backend/src/main/resources/application.properties`
2. Busca la línea: `ia.api.key=TU_API_KEY_DE_GROQ_AQUI`
3. Reemplaza `TU_API_KEY_DE_GROQ_AQUI` con tu API Key real

Ejemplo:
```properties
ia.api.key=gsk_tu_api_key_aqui_1234567890
```

## Modelos disponibles

Puedes cambiar el modelo en `application.properties`:

- `llama-3.3-70b-versatile` - Más potente disponible actualmente (recomendado para análisis complejos)
- `llama-3.1-8b-instant` - Más rápido (recomendado para respuestas rápidas)
- `mixtral-8x7b-32768` - Balance entre velocidad y calidad

**Nota**: Si `llama-3.3-70b-versatile` no está disponible, prueba con `llama-3.1-8b-instant` que es muy rápido y confiable.

## Ventajas de Groq

✅ **Completamente gratuito** - Sin límites estrictos
✅ **Muy rápido** - Respuestas en milisegundos
✅ **Modelos potentes** - Llama 3.1 70B es uno de los mejores modelos open-source
✅ **Sin tarjeta de crédito** - No requiere pago
✅ **API simple** - Fácil de integrar

## Notas importantes

- La API key es sensible, no la compartas públicamente
- Groq tiene límites de rate (velocidad de peticiones) pero son muy generosos
- Si necesitas más capacidad, puedes crear múltiples cuentas

