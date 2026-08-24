# 💼 Portfolio Personal

Este es mi portfolio web con formulario de contacto funcional usando un backend propio.

---

## Estructura del proyecto

```text
portfolio/
│
├── frontend/ → React
│ ├── src/
│ ├── public/
│ └── package.json
│
├── backend-email/ → Node + Express + Resend
│ ├── server.js
│ ├── package.json
│ └── .env (Ignorado en Git)
│
├── package.json             → Configuración raíz (Orquestador)
├── .gitignore
└── README.md
```

---

## Instalación

Se puede levantar ambos entornos por separado o usar el comando unificado desde la raíz.

### Arranque unificado (Recomendado)
Desde la carpeta raíz del proyecto (`portfolio/`), instala las dependencias de la raíz y arranca Front y Back a la vez:
```bash
npm install
npm run dev
```

### Ejecución manual por separado

#### Frontend (React)
```bash
cd frontend
npm install
npm start
```

#### Backend (Node + Express)
```bash
cd backend-email
npm install
npm start
```

---

### Variables de entorno

Para que el backend funcione en local, debes crear un archivo llamado `.env` basado en `.env.example` **dentro de la carpeta `backend-email/`** con tu credencial de Resend:

```env
RESEND_API_KEY=tu_clave_secreta_de_resend
```

---

## Funcionalidad

El formulario de contacto procesa y envía mensajes en tiempo real de forma segura:
1. **Frontend:** El usuario rellena el formulario en React.
2. **Validación y Limpieza:** El frontend envía los datos mediante un `fetch` dinámico al backend, donde se validan y se limpian contra ataques de Inyección de Código (XSS).
3. **Envío:** El backend procesa la petición y utiliza la API de **Resend** para disparar el correo.
4. **Recepción:** El mensaje llega directamente a la bandeja de correo configurada.

---

## Tecnologías utilizadas

- **Frontend:** React, Framer Motion, Bootstrap, SCSS (Sass).
- **Backend:** Node.js, Express, Cors, Dotenv.
- **Servicios:** Resend API.