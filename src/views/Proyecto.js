import React from 'react';
import proyectoVideo from '../assets/Video_Pi_Ecommerce.mp4';

export const Proyecto = () => {
    return (
        <div className='container p-5'>
            <h2 className="mb-5 text-center">Mis Proyectos</h2>
            <div className="row">
                {/* Proyecto individual */}
                <div className="col-md-8 col-lg-4 mb-4">
                    <div className="card h-100 shadow-sm">
                        <video
                            src={proyectoVideo}
                            className="card-img-top"
                            alt="Proyecto Final de Grado"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Proyecto Final de Grado</h5>
                            <p className="card-text flex-grow-1">
                                Este fue mi proyecto de final de grado. La aplicación es funcional,
                                pero aún hay ciertos errores que habría que corregir y mejoras por implementar.
                                Con el tiempo limitado asignado, esto es lo que logré desarrollar.
                            </p>
                            <p className="mb-2">
                                <strong>Tecnologías:</strong> Laravel + Livewire, MySQL Bootstrap, HTML, CSS...
                            </p>
                            <a
                                href="https://github.com/JuditQuirosViolero/PI-Ecommerce.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary mb-2"
                                title="Ver el código en GitHub"
                                aria-label="Ver el código en GitHub"
                            >
                                Ver código en GitHub
                            </a>
                            <a
                                href="/Documentación - PI.pdf"
                                download="Documentacion_Proyecto_Ecommerce.pdf" className="btn btn-outline-primary mb-2"
                                title="Descargar documentación"
                                aria-label="Descargar documentación"
                            >
                                Descargar documentación
                            </a>
                            <span className="badge bg-warning text-dark mt-auto fst-italic">
                                *En desarrollo*
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
