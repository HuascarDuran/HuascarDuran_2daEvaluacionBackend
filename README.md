# Microservicio GraphQL para Gestión de Usuarios - Proyecto Bicentenario 1.0.0

## 📌 Descripción General

Este proyecto implementa un microservicio independiente utilizando **GraphQL** que consume una API REST desarrollada con **FastAPI** para la gestión de usuarios. El microservicio se encarga de:

- 🔐 Autenticarse automáticamente con la API REST de usuarios.
- 📥 Obtener la lista de usuarios registrados desde `/users`.
- 🚀 Exponer un endpoint GraphQL propio para consultar los usuarios registrados en el sistema.

---

## ⚙️ Tecnologías Utilizadas

- Node.js
- Apollo Server (GraphQL)
- Axios para consumir la API REST externa
- dotenv para configuración de variables de entorno

---

## 🛠️ Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/microservicio-usuarios-graphql.git
```

2. Entrar en el proyecto:

```bash
cd microservicio-usuarios-graphql
```

3. Instalar dependencias:

```bash
npm install
```

4. Crear un archivo `.env` con el siguiente contenido:

```env
API_URL=http://localhost:8000
USERNAME=graphql@test.com
PASSWORD=123456
```

*(Modifica los valores según tu configuración de la API FastAPI)*

5. Levantar el servidor GraphQL:

```bash
npm start
```

---

## ▶️ Uso

Una vez que el servidor esté activo, podrás acceder al GraphQL Playground en:  
👉 http://localhost:4000/

### 📄 Ejemplo de Consulta

```graphql
query {
  users {
    id
    email
    is_active
  }
}
```

### ✅ Respuesta esperada

```json
{
  "data": {
    "users": [
      {
        "id": 1,
        "email": "huascar@example.com",
        "is_active": true
      },
      {
        "id": 2,
        "email": "graphql@test.com",
        "is_active": true
      }
    ]
  }
}
```

---

## 🧱 Estructura del Proyecto

```
/MICROSERVICIO-GRAPHQL
├── src/
│   ├── resolvers.js
│   ├── schema.graphql
│   ├── apiClient.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

- **schema.graphql**: Define el tipo de dato `User` y las consultas disponibles.
- **resolvers.js**: Lógica GraphQL que conecta con los métodos de API REST.
- **apiClient.js**: Maneja la autenticación y consulta a la API REST FastAPI.
- **server.js**: Inicializa y levanta el servidor de Apollo Server.

---

## ✅ Consideraciones

- El microservicio realiza automáticamente el login si el token JWT no está presente.
- Puede ser extendido fácilmente para agregar más consultas y mutaciones como registro de usuarios, eliminación, etc.
- Diseñado para integrarse de forma desacoplada con APIs externas RESTful.

---

## 🧪 Pruebas

- **Manual**: Se realizaron consultas desde Apollo Studio validando la respuesta correcta del backend FastAPI.
- **(Opcional)**: Puede complementarse con pruebas unitarias usando Jest, Mocha o Supertest.

---

## 👨‍💻 Autor

Proyecto realizado por Huascar Camilo Durán Avendaño como parte de la materia **Tecnologías Web II**, cumpliendo los requisitos de implementación e integración de microservicios REST + GraphQL en el **Proyecto Bicentenario UCB**.