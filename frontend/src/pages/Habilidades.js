import React from 'react'
import { motion } from "framer-motion";

export const Habilidades = () => {
    return (
        <div className='container px-5 pt-5 pb-3'>
            <h2 className="display-6 mb-4 text-center">Mis Habilidades</h2>

            {/* COMPETENCIAS TÉCNICAS */}
            <div className="mb-5">
                <h3 className="mb-4">Competencias técnicas</h3>

                <div className="row g-4">

                    {/* DESARROLLO WEB (Frontend + Backend) */}
                    <div className="col-12 col-md-6 col-lg-6">
                        <motion.div
                            className="card h-100 shadow border-primary"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body d-flex flex-column align-items-center text-center">
                                <i className="bi bi-code-slash fs-1 text-primary mb-3" />
                                <h4 className="card-title h5 mb-3">Desarrollo web</h4>

                                <div className="d-flex flex-wrap justify-content-center gap-2">
                                    {[
                                        'HTML',
                                        'CSS',
                                        'SCSS',
                                        'JavaScript',
                                        'React',
                                        'Bootstrap',
                                        'Java (base)',
                                        'PHP',
                                        'Node.js (básico)',
                                        'Laravel',
                                        'Livewire',
                                        'Symfony (académico)',
                                        'Spring Boot (prácticas)',
                                        'MySQL'
                                    ].map(tech => (
                                        <span key={tech} className="badge bg-primary">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* HERRAMIENTAS & APIs */}
                    <div className="col-12 col-md-6 col-lg-6">
                        <motion.div
                            className="card h-100 shadow border-warning"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body d-flex flex-column align-items-center text-center">
                                <i className="bi bi-tools fs-1 text-warning mb-3" />
                                <h4 className="card-title h5 mb-3">Herramientas & APIs</h4>

                                <div className="d-flex flex-wrap justify-content-center gap-2">
                                    {[
                                        'Git',
                                        'GitHub',
                                        'Postman',
                                        'Swagger',
                                        'Axios',
                                        'Apache',
                                        'Webmin',
                                        'Laravel Herd'
                                    ].map(tech => (
                                        <span key={tech} className="badge bg-warning text-dark">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* CALIDAD & ACCESIBILIDAD */}
                    <div className="col-12 col-md-6 col-lg-6">
                        <motion.div
                            className="card h-100 shadow border-danger"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body d-flex flex-column align-items-center text-center">
                                <i className="bi bi-check2-square fs-1 text-danger mb-3" />
                                <h4 className="card-title h5 mb-3">Calidad & Testing</h4>

                                <div className="d-flex flex-wrap justify-content-center gap-2">
                                    {[
                                        'Cypress',
                                        'Selenium',
                                        'Cucumber',
                                        'Pruebas unitarias (básico)',
                                        'Lighthouse',
                                        'Siteimprove',
                                        'WAVE'
                                    ].map(tech => (
                                        <span key={tech} className="badge bg-danger">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* CMS & DISEÑO */}
                    <div className="col-12 col-md-6 col-lg-6">
                        <motion.div
                            className="card h-100 shadow border-info"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body d-flex flex-column align-items-center text-center">
                                <i className="bi bi-window fs-1 text-info mb-3" />
                                <h4 className="card-title h5 mb-3">CMS & Diseño</h4>

                                <div className="d-flex flex-wrap justify-content-center gap-2">
                                    {[
                                        'WordPress + WooCommerce (ecommerce en desarrollo)',
                                        'Balsamiq (prototipado)'
                                    ].map(tech => (
                                        <span key={tech} className="badge bg-info text-dark">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* IDIOMAS */}
            <div>
                <h3 className="mb-4">Idiomas</h3>
                <ul className="list-inline mt-2">
                    <li className="list-inline-item me-3"><strong>Español:</strong> Nativo</li>
                    <li className="list-inline-item me-3"><strong>Inglés:</strong> Intermedio (B1)</li>
                    <li className="list-inline-item"><strong>Francés:</strong> Básico</li>
                </ul>
            </div>
        </div>
    )
}