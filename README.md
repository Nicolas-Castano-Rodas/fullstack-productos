## 📦 Plataforma de Gestión de Productos – Full Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white)

Proyecto full stack desarrollado con **Node.js**, **Express**, **MongoDB**, **React** y **JWT**, que permite a los usuarios registrarse, iniciar sesión y gestionar productos propios, aplicando autenticación y autorización robusta.

## 🚀 Descripción General

Esta aplicación permite a los usuarios:

✅ **Registrarse e iniciar sesión** de forma segura con contraseñas encriptadas  
✅ **Crear productos** con nombre y precio  
✅ **Visualizar únicamente sus propios productos**  
✅ **Editar y eliminar productos** solo si son propietarios  
✅ **Cerrar sesión** de forma segura  
✅ **Panel de control** intuitivo con Tailwind CSS  

El sistema implementa **autenticación basada en JWT**, garantizando que cada usuario solo pueda acceder y modificar sus propios datos de forma segura.

## 🌍 Demo en Vivo

- **Frontend (Vercel):**  
  https://fullstack-productos.vercel.app/

- **Backend (Render):**  
  https://fullstack-productos-backend.onrender.com

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** - Runtime de JavaScript
- **Express** - Framework web minimalista
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JSON Web Tokens (JWT)** - Autenticación segura
- **bcryptjs** - Encriptación de contraseñas
- **CORS** - Control de acceso de recursos

### Frontend
- **React 19** - Librería de UI
- **React Router DOM** - Enrutamiento del lado del cliente
- **Tailwind CSS** - Framework CSS utility-first
- **Fetch API** - Comunicación HTTP

### Herramientas de Desarrollo
- **npm** - Gestor de paquetes
- **Postman/Insomnia** - Testing de APIs


## 🧱 Estructura del Proyecto

```
fullstack-productos/
│
├── backend/                          # API REST con Express
│   ├── models/
│   │   ├── User.js                  # Modelo de usuarios
│   │   └── Product.js               # Modelo de productos
│   ├── routes/
│   │   ├── auth.routes.js           # Rutas de autenticación
│   │   └── product.routes.js        # Rutas de productos
│   ├── middleware/
│   │   └── auth.middleware.js       # Validación de JWT
│   ├── config.js                    # Configuración (MongoDB URI)
│   ├── server.js                    # Punto de entrada
│   └── package.json
│
└── frontend/                         # App React
    ├── src/
    │   ├── pages/
    │   │   ├── Login.js             # Página de login
    │   │   ├── Register.js          # Página de registro
    │   │   └── Products.js          # Página de productos
    │   ├── App.js                   # Componente principal
    │   ├── App.css                  # Estilos globales
    │   ├── index.js                 # Punto de entrada
    │   └── index.css                # Directivas de Tailwind
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── tailwind.config.js           # Configuración de Tailwind
    ├── postcss.config.js            # Configuración de PostCSS
    └── package.json
```

## 🔐 Autenticación y Seguridad

### Flujo de Autenticación

1. **Registro**: El usuario proporciona email y contraseña
   - La contraseña se encripta usando **bcryptjs** (salt rounds: 10)
   - Se almacena en MongoDB de forma segura
   - Se retorna un JWT firmado

2. **Login**: Usuario ingresa credenciales
   - Se valida la contraseña contra el hash almacenado
   - Si es válida, se genera un **JWT** con la identidad del usuario
   - El token se almacena en **localStorage** del navegador

3. **Acceso a Recursos Protegidos**:
   - El token se envía en el header `Authorization: Bearer <token>`
   - El middleware `auth.middleware.js` verifica y decodifica el JWT
   - Solo se permite acceso a recursos propios

### Medidas de Seguridad

✅ **Contraseñas encriptadas** con bcrypt  
✅ **JWT con expiración** configurada  
✅ **Validación en servidor** de todas las peticiones  
✅ **CORS activado** para proteger contra ataques cross-origin  
✅ **Verificación de propiedad** antes de editar/eliminar  
✅ **Tokens almacenados** en localStorage del navegador  

### Flujo de Seguridad

```
Usuario → Credenciales → Backend → Encriptación → JWT → LocalStorage
         ↓
    Petición con token
         ↓
    Validación Middleware → Autorización → Acceso a recurso
```

## ✅ Funcionalidades Principales

- [x] Registro de usuarios con validación
- [x] Login seguro con JWT
- [x] Protección de rutas (middleware de autenticación)
- [x] Crear productos con nombre y precio
- [x] Listar productos propios
- [x] Editar productos propios
- [x] Eliminar productos propios
- [x] Cerrar sesión segura
- [x] Interfaz moderna y responsive
- [x] Validación de entrada en cliente y servidor
- [x] Manejo de errores completo
- [x] Estados de carga y feedback visual


## 🎨 Interfaz de Usuario

La aplicación cuenta con una UI moderna y elegante, desarrollada con **Tailwind CSS**, incluyendo:

- **Diseño Responsive**: Optimizado para mobile, tablet y desktop
- **Tema Moderno**: Colores y espaciado coherente
- **Accesibilidad**: Etiquetas semánticas y contraste adecuado
- **Formularios Validados**: Con feedback en tiempo real
- **Estructura Clara**: Navegación intuitiva
- **Componentes Reutilizables**: Código limpio y mantenible


## 📥 Instalación y Ejecución

### Requisitos Previos
- **Node.js** (v14 o superior)
- **npm** (v6 o superior)
- **MongoDB** (Atlas o instalado localmente)
- **Git** (opcional)

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/fullstack-productos.git
cd fullstack-productos
```

### 2️⃣ Configurar Backend

```bash
cd backend
npm install
```

**Crear archivo `config.js` (si no existe):**
```javascript
module.exports = {
  MONGO_URI: "mongodb+srv://usuario:contraseña@cluster.mongodb.net/productos"
};
```

**Inicia el servidor:**
```bash
npm start
```

✅ Backend disponible en: **http://localhost:4000**

### 3️⃣ Configurar Frontend

```bash
cd frontend
npm install
```

**Inicia la aplicación:**
```bash
npm start
```

✅ Frontend disponible en: **http://localhost:3000**

### Verificación de Instalación
- [ ] Backend ejecutándose en puerto 4000
- [ ] Frontend ejecutándose en puerto 3000
- [ ] MongoDB conectado correctamente
- [ ] Sin errores en la consola


## 🗄️ Base de Datos

### MongoDB
- **Proveedor**: MongoDB Atlas (Nube) o local
- **Colecciones**: `users` y `products`

### Esquema de Users
```json
{
  "_id": ObjectId,
  "email": "usuario@ejemplo.com",
  "password": "hash_encriptado",
  "createdAt": ISODate
}
```

### Esquema de Products
```json
{
  "_id": ObjectId,
  "nombre": "Laptop",
  "precio": 999.99,
  "owner": ObjectId(referencia a User),
  "createdAt": ISODate
}
```

### Relaciones
- Cada **producto** pertenece a un **usuario** (campo `owner`)
- Un **usuario** puede tener múltiples **productos**


## 🧪 Testing y Pruebas

### Herramientas Recomendadas
- **Postman** - Cliente HTTP avanzado
- **Insomnia** - Cliente REST intuitivo
- **Thunder Client** - Extensión de VS Code
- **cURL** - Herramienta de línea de comandos

### Rutas de API

#### Autenticación
```
POST /auth/register
Body: { "email": "user@example.com", "password": "123456" }
Response: { "token": "jwt_token", "user": {...} }

POST /auth/login
Body: { "email": "user@example.com", "password": "123456" }
Response: { "token": "jwt_token", "user": {...} }
```

#### Productos (Requieren Token)
```
GET /products
Headers: { "Authorization": "Bearer jwt_token" }
Response: [{ "_id": "...", "nombre": "...", "precio": "..." }]

POST /products
Headers: { "Authorization": "Bearer jwt_token" }
Body: { "nombre": "Producto", "precio": 99.99 }
Response: { "_id": "...", "nombre": "...", "precio": "..." }

PUT /products/:id
Headers: { "Authorization": "Bearer jwt_token" }
Body: { "nombre": "Nuevo nombre", "precio": 49.99 }

DELETE /products/:id
Headers: { "Authorization": "Bearer jwt_token" }
```

### Ejemplo con cURL

```bash
# Registrar usuario
curl -X POST http://localhost:4000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"123456"}'

# Login
curl -X POST http://localhost:4000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"123456"}'

# Obtener productos (usa el token del login)
curl -X GET http://localhost:4000/products \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```


## 🎯 Objetivo Académico

Este proyecto fue desarrollado con fines académicos, demostrando conocimientos en:

✅ Arquitectura cliente-servidor  
✅ Autenticación y autorización segura  
✅ Desarrollo Full Stack (Frontend + Backend)  
✅ Gestión de datos con MongoDB  
✅ Construcción de APIs RESTful  
✅ Seguridad en aplicaciones web  
✅ Buenas prácticas de desarrollo  
✅ Control de acceso basado en roles (RBAC)  

## 🐛 Troubleshooting

### Problema: "MongoDB connection failed"
**Solución**: Verifica que:
- La URI de MongoDB está correcta en `config.js`
- Tienes internet conectado
- MongoDB Atlas tiene tu IP en whitelist
- Las credenciales son correctas

### Problema: "Cannot GET /" en frontend
**Solución**: Asegúrate que:
- El backend está ejecutándose en puerto 4000
- La variable `proxy` en `package.json` está configurada
- No hay errores en la consola del navegador

### Problema: "Token inválido"
**Solución**:
- Limpia el localStorage y vuelve a hacer login
- Verifica que el token se envía en el header `Authorization`
- Comprueba que el token no ha expirado

### Problema: "CORS error"
**Solución**: Verifica que:
- CORS está habilitado en `server.js`
- El frontend y backend están en puertos diferentes
- Los headers están configurados correctamente

## 📚 Recursos Útiles

- [Express.js Docs](https://expressjs.com/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [JWT.io](https://jwt.io/)
- [bcryptjs NPM](https://www.npmjs.com/package/bcryptjs)

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo libremente en proyectos personales y educativos.

---

## 👤 Autor

**Nicolás Castaño Rodas**  
Estudiante de Desarrollo de Software

**Contacto**: [rodascastanonicolas@gmail.com](mailto:rodascastanonicolas@gmail.com)  
**GitHub**: [@Nicolas-Castano-Rodas](https://github.com/Nicolas-Castano-Rodas)