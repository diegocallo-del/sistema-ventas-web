CARPETA: ABSTRACTAS (Clases Abstractas Base)
RESPONSABLE: PERSONA 2 - Infraestructura

DESCRIPCIÓN:
Clases abstractas que proveen funcionalidad común usando HERENCIA.
Las entidades extenderán estas clases para reutilizar código.


CONCEPTOS POO APLICADOS:
HERENCIA: Las entidades extienden estas clases
ENCAPSULAMIENTO: Atributos privados con Lombok @Data

NOTAS IMPORTANTES:
- Usa @MappedSuperclass para que JPA reconozca los campos
- Las entidades Cliente y Usuario extenderán PersonaBase
- Las demás entidades extenderán EntidadBase
- Coordina con Persona 1 para que las entidades usen estas clases
