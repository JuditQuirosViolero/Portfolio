import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from './../assets/fotoPortfolio.jpg';
import { motion } from "framer-motion";

export const SobreMi = () => (
  <div className='container h-100 align-content-center px-5 pt-5 pb-3'>
    <div className="row align-items-center g-4">
      <div className="personal-img col-md-4 text-center">

        {/* Imagen con zoom */}
        <motion.img
          src={profilePic}
          alt="Fotografía de Judit, desarrolladora web"
          className="img-fluid rounded-circle"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Texto con slide up */}
      <motion.div className="col-md-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="h1">Hola, soy Judit</h2>
        <hr aria-hidden="true" />
        <h3 className="h2">Desarrolladora web</h3>
        <p className="fw-semibold">
          Comprometida con la accesibilidad y la experiencia de todos los usuarios.
        </p>
      </motion.div>
    </div>

    {/* Párrafo con fade in */}
    <p className="py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      Me apasiona crear experiencias digitales intuitivas y funcionales, combinando creatividad y tecnología.
      Me especializo en diseño web responsive y en interfaces fáciles de usar, siempre buscando aprender y
      mejorar mis proyectos para que el diseño no solo sea atractivo, sino también práctico para el usuario.
    </p>

    <div className="d-flex flex-wrap justify-content-start gap-3">

      <a href="/Currículum_Judit_Quirós_Violero.pdf" download="Currículum_Judit_Quirós_Violero.pdf"
        className="btn d-flex align-items-center btn-outline-1" title="Descarga mi currículm"
        aria-label="Descarga mi currículm"
        whileHover={{ scale: 1.05 }}>
        Descarga mi currículum
      </a>

      <Link to="/proyecto" className="btn btn-1" title="Ir a la sección de proyecto"
        whileHover={{ scale: 1.05 }}>
        Ver mis proyectos
      </Link>

      <Link to="/contacto" className="btn d-flex align-items-center btn-outline-1" title="Ir a la sección de contacto"
        whileHover={{ scale: 1.05 }}>
        Contáctame
      </Link>
    </div>
  </div>
);
