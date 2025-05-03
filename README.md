# Microservicio GraphQL para Usuarios

Este microservicio en Node.js expone una API GraphQL que consulta datos de usuarios desde un backend FastAPI.

## Tecnologías

- Node.js
- Apollo Server
- GraphQL
- Axios
- dotenv

## Uso

1. Asegúrate de tener el backend FastAPI corriendo en `http://localhost:8000`
2. Crea el archivo `.env` con las credenciales de tu API
3. Ejecuta el microservicio con:

```bash
npm install
npm start
```

Accede al playground en: [http://localhost:4000](http://localhost:4000)

## Consulta de ejemplo

```graphql
query {
  users {
    id
    name
    email
    role
  }
}
```
