import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const TarjetasProyectos = ({
  title,
  description,
  features,
  tech,
  video,
  github,
  viewMore,
  status,
}) => {
  return (
    <motion.div
      className="card shadow-sm d-flex flex-column h-auto overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* VIDEO */}
      <div className="w-100">
        <video
          src={video}
          className="w-100"
          style={{ objectFit: "cover" }}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* CONTENIDO */}
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5">{title}</h3>

        <p className="card-text flex-grow-1">{description}</p>

        {features && (
          <p>
            <strong>Funcionalidades:</strong> {features}
          </p>
        )}

        {tech && (
          <p>
            <strong>Tecnologías:</strong> {tech}
          </p>
        )}

        {/* BOTONES */}
        <div className="d-flex flex-column gap-2 mb-2">
          {github && (
            <a
              className="btn btn-1"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código en GitHub
            </a>
          )}

          {viewMore && (
            <Link to={`/proyecto/${viewMore}`} className="btn btn-outline-1">
              Ver Más
            </Link>
          )}
        </div>

        {status && (
          <span className="badge bg-warning text-dark mt-auto fst-italic">
            {status}
          </span>
        )}
      </div>
    </motion.div>
  );
};
