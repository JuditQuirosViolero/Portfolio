import React from 'react'

export const Habilidades = () => {
    return (
        <div className='container p-5'>
            <h2 className="mb-5 text-center">Mis Habilidades</h2>

            {/* Competencias técnicas */}
            <div className="mb-5">
                <h4 className="mb-4">Competencias técnicas</h4>
                <div className="row g-4">
                    {/* Frontend */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow border-primary">
                            <div className="card-body d-flex flex-column align-items-center text-center">
                                <i className="bi bi-code-slash fs-1 text-primary mb-3"></i>
                                <h5 className="card-title mb-3">Frontend</h5>
                                <div className="d-flex flex-wrap justify-content-center gap-2">
                                    {['HTML', 'CSS', 'SCSS', 'SASS', 'JavaScript', 'Bootstrap'].map(tech => (
                                        <span key={tech} className="badge bg-primary">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow border-success">
                            <div className="card-body d-flex flex-column align-items-center text-center">
                                <i className="bi bi-server fs-1 text-success mb-3"></i>
                                <h5 className="card-title mb-3">Backend</h5>
                                <div className="d-flex flex-wrap justify-content-center gap-2">
                                    {['PHP', 'Java', 'Symfony', 'Laravel', 'Livewire', 'Spring Boot', 'MySQL'].map(tech => (
                                        <span key={tech} className="badge bg-success">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Despliegue & Git */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow border-warning">
                            <div className="card-body d-flex flex-column align-items-center text-center">
                                <i className="bi bi-cloud-arrow-up fs-1 text-warning mb-3"></i>
                                <h5 className="card-title mb-3">Despliegue & Git</h5>
                                <div className="d-flex flex-wrap justify-content-center gap-2">
                                    {['Apache', 'Webmin', 'Git'].map(tech => (
                                        <span key={tech} className="badge bg-warning text-dark">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testing */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow border-danger">
                            <div className="card-body d-flex flex-column align-items-center text-center">
                                <i className="bi bi-check2-square fs-1 text-danger mb-3"></i>
                                <h5 className="card-title mb-3">Testing</h5>
                                <div className="d-flex flex-wrap justify-content-center gap-2">
                                    {['Cypress', 'Selenium', 'Cucumber'].map(tech => (
                                        <span key={tech} className="badge bg-danger">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Otras herramientas */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow border-info">
                            <div className="card-body d-flex flex-column align-items-center text-center">
                                <i className="bi bi-tools fs-1 text-info mb-3"></i>
                                <h5 className="card-title mb-3">Otras herramientas</h5>
                                <div className="d-flex flex-wrap justify-content-center gap-2">
                                    {['Axios', 'Swagger', 'Postman', 'Lighthouse', 'Wave'].map(tech => (
                                        <span key={tech} className="badge bg-info text-dark">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Idiomas */} 
            <div> 
                <h4 className="mb-4">Idiomas</h4> 
                <ul className="list-inline mt-2"> 
                    <li className="list-inline-item me-3"><strong>Español:</strong> Nativo</li> 
                    <li className="list-inline-item me-3"><strong>Inglés:</strong> Intermedio (B1)</li> 
                    <li className="list-inline-item"><strong>Francés:</strong> Básico</li>
                </ul>
            </div>
        </div >
    )
}
