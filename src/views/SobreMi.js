import React from 'react';
import profilePic from './../assets/fotoPortfolio.jpg';

export const SobreMi = () => (
  <div className='container p-5 m-4'>
    <div className="row align-items-end g-5">
      <div className="personal-img col-md-4 text-center">
        <img src={profilePic} alt="Imagen de Judit" className="img-fluid rounded-circle" />
      </div>

      <div className="col-md-8">
        <h2 className="h1">Hola, soy Judit</h2>
        <hr/>
        <h3>Desarrolladora web</h3>
        <p className="fw-semibold">Comprometida con la accesibilidad y la experiencia de todos los usuarios.</p>
      </div>
    </div>
    <p className="py-4">
      Me apasiona crear experiencias digitales intuitivas y funcionales, combinando creatividad y tecnología. 
      Me especializo en diseño web responsive y en interfaces fáciles de usar, siempre buscando aprender y 
      mejorar mis proyectos para que el diseño no solo sea atractivo, sino también práctico para el usuario.
    </p>
    <div>
      <a href="/proyecto" className="btn btn-primary me-2">Ver mis proyectos</a>
      <a href="/contacto" className="btn btn-outline-primary">Contáctame</a>
    </div>
  </div>
);
