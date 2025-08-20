import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
        <div className="container py-5">
            <h2 className="mb-5 text-center">Contacto</h2>

            <div className="row g-5">

                {/* Formulario */}
                <div className="col-md-6">
                    <h4 className="mb-4">Envíame un mensaje</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea
                                className="form-control"
                                id="mensaje"
                                name="mensaje"
                                rows="5"
                                value={formData.mensaje}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>

                {/* Información de contacto */}
                <div className="col-md-6">
                    <h4 className="mb-4">Otras formas de contacto</h4>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <i className="bi bi-telephone me-2"></i>
                            +34 657 27 26 72
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-envelope me-2"></i>
                            <a href="mailto:juditquirosviolero@gmail.com">juditquirosviolero@gmail.com</a>
                        </li>
                        <li className="mb-2">
                            <i className="bi bi-linkedin me-2"></i>
                            <a href="https://www.linkedin.com/in/judit-quir%C3%B3s-violero-9269b9373" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <i className="bi bi-github me-2"></i>
                            <a href="https://github.com/JuditQuirosViolero" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
