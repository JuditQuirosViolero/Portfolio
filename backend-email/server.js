import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

// Candado CORS restrictivo
app.use(cors({
  origin: [
    "https://juditquirosviolero.github.io", 
    "http://localhost:3000"  
  ] 
}));

// Candado CORS actualizado para permitir desarrollo local y producción externa
app.use(cors({
  origin: [
    "https://juditquirosviolero.github.io", // Tu frontend subido a GitHub Pages
    "http://localhost:3000"                  // Tu frontend de React en local (puerto 3000)
  ]
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contacto", async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;

    // Validación defensiva de datos
    // Si falta algún dato, o el email no parece un email, se rechaza de inmediato
    if (!nombre || !email || !mensaje || !email.includes("@")) {
      return res.status(400).json({ success: false, error: "Datos inválidos" });
    }

    // Limpieza básica contra Inyección de Código (XSS)
    // Reemplazamos los símbolos < y > para que nadie intente meter scripts maliciosos en el HTML
    const nombreSeguro = nombre.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const emailSeguro = email.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const mensajeSeguro = mensaje.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "juditquirosviolero@gmail.com",
      subject: "Nuevo mensaje desde el portfolio",
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Nombre:</strong> ${nombreSeguro}</p>
        <p><strong>Email:</strong> ${emailSeguro}</p>
        <p><strong>Mensaje:</strong> ${mensajeSeguro}</p>
      `
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Error en el servidor:", error.message);
    // Mandamos un mensaje genérico.
    res.status(500).json({ success: false, error: "Error interno" });
  }
});

// Puerto dinámico listo para internet (Render / Railway)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});