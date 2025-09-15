import React from 'react';
import proyectoVideo from '../assets/Video_Pi_Ecommerce.mp4';
import { motion } from "framer-motion";

export const Proyecto = () => {
    return (
        <div className='container px-5 pt-5 pb-3'>
            <h2 className="mb-5 text-center">Mis Proyectos</h2>
            <div className="row">
                {/* Proyecto individual */}
                <div className="col-md-8 col-lg-4 mb-4">

                    <motion.div
                        className="card h-100 shadow-sm"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <video
                            src={proyectoVideo}
                            className="card-img-top"
                            title="Vista previa del Proyecto Final de Grado"
                            aria-label="Vista previa del Proyecto Final de Grado"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
        
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title h5">Proyecto Final de Grado</h3>
                            <p className="card-text flex-grow-1">
                                Este fue mi proyecto de final de grado. La aplicación es funcional,
                                pero aún hay ciertos errores que habría que corregir y mejoras por implementar.
                                Con el tiempo limitado asignado, esto es lo que logré desarrollar.
                            </p>
                            <p className="mb-2">
                                <strong>Tecnologías:</strong> Laravel + Livewire, MySQL, Bootstrap, HTML, CSS...
                            </p>
                            <a
                                href="https://github.com/JuditQuirosViolero/PI-Ecommerce.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-1 mb-2"
                                title="Ver el código en GitHub"
                                aria-label="Ver el código en GitHub"
                            >
                                Ver código en GitHub
                            </a>
                            <a
                                href="/Documentación - PI.pdf"
                                download="Documentacion_Proyecto_Ecommerce.pdf"
                                className="btn btn-outline-1 mb-2"
                                title="Descargar documentación del proyecto"
                                aria-label="Descargar documentación del proyecto"
                            >
                                Descargar documentación
                            </a>
                            <span
                                className="badge bg-warning text-dark mt-auto fst-italic"
                                aria-label="Proyecto en desarrollo"
                            >
                                *En desarrollo*
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};
