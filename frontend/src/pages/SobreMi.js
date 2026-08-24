import React from "react";
import { Link } from "react-router-dom";
import profilePic from "./../assets/fotoPortfolio.jpg";
import { motion } from "framer-motion";

export const SobreMi = () => {

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="container h-100 align-content-center px-4 px-md-5 pt-5 pb-4">

      {/* HERO */}
      <div className="row align-items-center g-4">

        {/* IMAGEN */}
        <div className="col-md-4 text-center">
          <motion.img
            src={profilePic}
            alt="Fotografía de Judit, desarrolladora web"
            className="img-fluid rounded-circle shadow"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* TITULOS */}
        <motion.div
          className="col-md-8"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="display-5 fw-bold">Hola, soy Judit</h2>

          <p className="lead mb-2">
            Desarrolladora web
          </p>

          <p className="fw-semibold">
            Comprometida con la accesibilidad y la experiencia de todos los usuarios.
          </p>
        </motion.div>
      </div>

      {/* TEXTO PRINCIPAL */}
      <motion.div
        className="py-5 about-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <motion.p {...fadeUp}>
          Desarrollo interfaces web con intención: que sean bonitas, pero sobre todo claras, intuitivas y fáciles de usar.
        </motion.p>

        <motion.p {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }}>
          Me gusta transformar ideas en páginas que se sientan vivas, cuidando tanto el diseño como la forma en la que está construido el código.
          Disfruto especialmente cuando un proyecto encaja visualmente y funciona bien en cualquier dispositivo.
        </motion.p>

        <motion.p {...fadeUp} transition={{ duration: 0.8, delay: 0.2 }}>
          Para mí, la accesibilidad no es un extra, sino parte del diseño: crear webs que cualquiera pueda usar está siempre en el centro de lo que hago.
        </motion.p>
      </motion.div>

      {/* BOTONES */}
      <div className="d-flex flex-wrap gap-3">

        <motion.a
          href={`${process.env.PUBLIC_URL}/curriculum-judit-quiros-violero.pdf`}
          download="Currículum_Judit_Quirós_Violero.pdf"
          className="btn btn-outline-1"
          title="Descarga mi currículum"
          aria-label="Descarga mi currículum"
          whileHover={{ scale: 1.05 }}
        >
          Descarga mi currículum
        </motion.a>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/proyecto"
            className="btn btn-1"
            title="Ir a la sección de proyectos"
          >
            Ver mis proyectos
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/contacto"
            className="btn btn-outline-1"
            title="Ir a la sección de contacto"
          >
            Contáctame
          </Link>
        </motion.div>

      </div>
    </div>
  );
};