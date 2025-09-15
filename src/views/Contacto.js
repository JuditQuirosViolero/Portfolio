import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

export const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_rp5bna5',        // Service ID
            'template_4oxnwog',       // Plantilla para ti
            formData,
            'boIeo5fhf81skWsgd'      // Public Key
        ).then(() => {
            alert('¡Mensaje enviado correctamente! 📩');
            setFormData({ nombre: '', email: '', mensaje: '' });
        }).catch((err) => {
            console.error('Error al enviar el correo: ', err);
            alert('Ha ocurrido un error al enviar tu mensaje. Intenta de nuevo.');
        });
    };

    return (
        <div className="container h-100 px-5 pt-5 pb-3">
            <h2 className="mb-5 text-center">Contacto</h2>

            <div className="row g-4">

                {/* Formulario */}
                <div className="col-md-6 pe-4">
                    <h3 className="mb-4">Envíame un mensaje</h3>
                    <form onSubmit={handleSubmit} aria-label="Formulario de contacto">
                        <div className="mb-4">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea
                                className="form-control"
                                id="mensaje"
                                name="mensaje"
                                rows="5"
                                value={formData.mensaje}
                                onChange={handleChange}
                                required
                                aria-required="true"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-1" aria-label="Enviar mensaje">Enviar</button>
                    </form>
                </div>

                {/* Información de contacto */}
                <div className="col-md-6 ps-4">
                    <h3 className="mb-4">Otras formas de contacto</h3>
                    <ul className="list-unstyled">
                        <motion.li
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='mb-3'
                        >
                            <i
                                className="bi bi-telephone me-2"
                                role="img"
                                aria-label="Teléfono"
                            ></i>
                            <span aria-label="Número de teléfono">+34 657 27 26 72</span>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                            className='mb-3'
                        >
                            <i
                                className="bi bi-envelope me-2"
                                role="img"
                                aria-label="Correo electrónico"
                            ></i>
                            <a
                                className='contact-link'
                                href="mailto:juditquirosviolero@gmail.com"
                                title="Enviar correo a juditquirosviolero@gmail.com"
                                aria-label="Enviar correo a juditquirosviolero@gmail.com"
                            >
                                juditquirosviolero@gmail.com
                            </a>
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            viewport={{ once: true }}
                            className='mb-3'
                        >
                            <i
                                className="bi bi-linkedin me-2"
                                role="img"
                                aria-label="LinkedIn"
                            ></i>
                            <a
                                className='contact-link'
                                href="https://www.linkedin.com/in/judit-quir%C3%B3s-violero-9269b9373"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Abrir perfil de LinkedIn de Judit en una nueva pestaña"
                                aria-label="Abrir perfil de LinkedIn de Judit en nueva pestaña"
                            >
                                LinkedIn
                            </a>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1.4 }}
                            viewport={{ once: true }}
                            className='mb-3'
                        >
                            <i
                                className="bi bi-github me-2"
                                role="img"
                                aria-label="GitHub"
                            ></i>
                            <a
                                className='contact-link'
                                href="https://github.com/JuditQuirosViolero"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Abrir perfil de GitHub de Judit en una nueva pestaña"
                                aria-label="Abrir perfil de GitHub de Judit en nueva pestaña"
                            >
                                GitHub
                            </a>
                        </motion.li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
