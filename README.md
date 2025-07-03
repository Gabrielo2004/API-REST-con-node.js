# API REST - Biblioteca

Esta API permite gestionar una biblioteca a través de operaciones CRUD. permite gestionar usuarios y buscar diferentes libros, ya sea directamente por el nombre del libro o el autor.

---

## Recursos utilizados

### Books (Libros)
- `title`: Título del libro
- `year`: Año de publicación
- `genre`: Género literario
- `author`: Nombre del autor (string)

### Authors (Autores)
- `name`: Nombre del autor
- `nationality`: Nacionalidad
- `birth`: Año de nacimiento

### Users (Usuarios)
- `name`: Nombre del usuario
- `email`: Correo electrónico
- `password`: Contraseña (en backend, protegida con JWT)

---

## Relaciones entre colecciones

- Cada **libro** tiene un campo `author` que representa el autor del libro.
- Cada **autor** puede estar relacionado con uno o varios libros (relación lógica, no con referencias MongoDB por ahora).
- Los **usuarios** pueden autenticarse para acceder a las rutas protegidas de la API.

---

## Ejemplos de uso de rutas principales

### Libros
- `GET /api/v1/books` → Obtener todos los libros
- `POST /api/v1/books` → Crear un nuevo libro
```json
{
  "title": "El Principito",
  "year": 1943,
  "genre": "Fábula",
  "author": "Antoine de Saint-Exupéry"
}
