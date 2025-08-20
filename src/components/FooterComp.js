import React from 'react'

export const FooterComp = () => {
  return (
    <div className="footer-container container p-1">
      <div className="row align-items-center">
        {/* Columna izquierda */}
        <div className="col-4 text-md-start text-center mb-2 mb-md-0">
          <p className="mb-0">© {new Date().getFullYear()} | Portfolio</p>
        </div>

        {/* Columna centro */}
        <div className="col-4 text-center mb-2 mb-md-0">
          <p className="mb-0 fw-semibold">Judit Quirós Violero</p>
        </div>

        {/* Columna derecha */}
        <div className="col-4 text-md-end text-center">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-2 fs-4"
            title="Ver mi GitHub"
            aria-label="Ver mi GitHub"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/tuusuario/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-2 fs-4"
            title="Ver mi LinkedIn"
            aria-label="Ver mi LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="mailto:tuemail@gmail.com"
            className="text-dark mx-2 fs-4"
            title="Enviar email"
            aria-label="Enviar email"
          >
            <i className="bi bi-envelope-at"></i>
          </a>

        </div>
      </div>
    </div>

  )
}
