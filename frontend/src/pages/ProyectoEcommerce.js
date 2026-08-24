import { Link } from "react-router-dom";


export const ProyectoEcommerce = () => {
  return (
    <main className="container py-5">
      <span className="text-muted fst-italic">
        <Link to="/">Inicio</Link> /<Link to="/proyecto">Proyecto</Link> / Ver
        más{" "}
      </span>
      {/* HEADER */}
      <section className="text-center mt-3 mb-5">
        <h2 className="display-6 mb-3">Ecommerce desarrollado con Laravel</h2>

        <div className="card border-0 shadow-sm mt-3">
          <div className="card-body p-4">
            <div className="row text-center g-4">
              <p className="lead mx-auto">
                Proyecto Final de Grado desarrollado como una tienda online
                completa con autenticación, gestión de usuarios, panel de
                administración, carrito dinámico y sistema de pedidos.
              </p>
              <div className="col-md-6">
                <i className="bi bi-code-slash fs-2 text-primary mb-2"></i>
                <h3 className="h5">Tecnologías</h3>
                <p className="text-muted mb-0">
                  Laravel · Livewire · Blade · PHP · MySQL · Tailwind CSS · Flux
                  UI · Vite
                </p>
              </div>

              <div className="col-md-3">
                <i className="bi bi-mortarboard fs-2 text-primary mb-2"></i>
                <h3 className="h5">Tipo</h3>
                <p className="text-muted mb-0">Proyecto Final de Grado</p>
              </div>

              <div className="col-md-3">
                <i className="bi bi-person-workspace fs-2 text-primary mb-2"></i>
                <h3 className="h5">Rol</h3>
                <p className="text-muted mb-0">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPTURAS */}
      <section className="mt-3 mb-5 text-center">
        <h2 className="mb-3">Capturas del proyecto</h2>
        <p className="col-lg-8 mx-auto">
          A continuación se muestran algunos vídeos de las principales
          funcionalidades desarrolladas.
        </p>
      </section>

      {/* TIENDA */}
      <section className="row align-items-center mb-5 g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h3 mb-3">Vista de la Tienda</h2>

              <p>
                La tienda permite navegar por los productos utilizando distintos
                filtros para facilitar la búsqueda y mejorar la experiencia del
                usuario.
              </p>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">Filtrado por categoría.</li>
                <li className="list-group-item">Filtrado por género.</li>
                <li className="list-group-item">Filtrado por color.</li>
                <li className="list-group-item">Filtrado por talla.</li>
                <li className="list-group-item">
                  Visualización de las tarjetas de cada producto.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="ratio ratio-16x9 rounded shadow border overflow-hidden">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8Nk1P-EeaHs?si=8x5FGTdsdMlqzNSc&start=67&end=148"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* LOGIN */}
      <section className="row align-items-center mb-5 g-4">
        <div className="col-md-6">
          <div className="ratio ratio-16x9 rounded shadow border overflow-hidden">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8Nk1P-EeaHs?si=8x5FGTdsdMlqzNSc&start=148&end=205;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h3 mb-3">Autenticación</h2>
              <p>
                Sistema de autenticación con control de acceso según el rol del
                usuario e implementación de verificación en dos pasos mediante
                correo.
              </p>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">Registro.</li>
                <li className="list-group-item">Inicio de sesión.</li>
                <li className="list-group-item">Verificación 2FA.</li>
                <li className="list-group-item">
                  Roles de administrador y cliente.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPRA */}
      <section className="row align-items-center mb-5 g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h3 mb-3">Proceso de compra</h2>
              <p>
                Flujo completo desde la incorporación de productos al carrito
                hasta la creación del pedido.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Añadir productos al carrito.{" "}
                </li>
                <li className="list-group-item">
                  Carrito dinámico con Livewire.
                </li>
                <li className="list-group-item">Modificación de cantidades.</li>
                <li className="list-group-item">Resumen del pedido.</li>
                <li className="list-group-item">Confirmación de compra.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="ratio ratio-16x9 rounded shadow border overflow-hidden">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8Nk1P-EeaHs?si=8x5FGTdsdMlqzNSc&start=205&end=294"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CRUD PRODUCTOS */}
      <section className="row align-items-center mb-5 g-4">
        <div className="col-md-6">
          <div className="ratio ratio-16x9 rounded shadow border overflow-hidden">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8Nk1P-EeaHs?si=8x5FGTdsdMlqzNSc&start=294&end=418"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h3 mb-3">Panel de Productos</h2>

              <p>
                Panel de administración para gestionar el catálogo de productos
                (solo disponible para el administrador).
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Editar productos.</li>
                <li className="list-group-item">Crear productos.</li>
                <li className="list-group-item">Subida de imágenes.</li>
                <li className="list-group-item">Eliminar productos.</li>
                <li className="list-group-item">
                  Filtrar los productos por id y nombre
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CRUD PEDIDOS */}
      <section className="row align-items-center mb-5 g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h3 mb-3">Panel de Pedidos</h2>

              <p>
                Administración de pedidos realizada desde el panel de gestión
                (solo disponible para el administrador).
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Editar el estado de los pedidos.
                </li>
                <li className="list-group-item">
                  Eliminar productos de un pedido.
                </li>
                <li className="list-group-item">
                  botón de reembolso del dinero si se elimina un producto.
                </li>
                <li className="list-group-item">Filtro de pedidos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="ratio ratio-16x9 rounded shadow border overflow-hidden">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8Nk1P-EeaHs?si=8x5FGTdsdMlqzNSc&start=418&end=503"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CRUD USUARIOS */}
      <section className="row align-items-center mb-5 g-4">
        <div className="col-md-6">
          <div className="ratio ratio-16x9 rounded shadow border overflow-hidden">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8Nk1P-EeaHs?si=8x5FGTdsdMlqzNSc&start=503&end=583"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h3 mb-3">Panel de Usuarios</h2>

              <p>
                Panel de administración para gestionar el lo usuarios
                registrados en la web (solo disponible para el administrador).
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Editar rol de los usuarios.</li>
                <li className="list-group-item">
                  Eliminar usuarios registrados
                </li>
                <li className="list-group-item">Filtro de usuarios.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section className="mb-5">
        <h2 className="text-center mb-5">Tecnologías y características</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5 mb-4">
                  <i className="bi bi-code-slash me-2"></i>
                  Tecnologías utilizadas
                </h3>

                <ul>
                  <li className="mb-3"> Laravel</li>
                  <li className="mb-3"> Livewire</li>
                  <li className="mb-3"> Blade</li>
                  <li className="mb-3"> Bootstrap y CSS</li>
                  <li className="mb-3"> MySQL y Eloquent ORM</li>
                  <li> Vite, Tailwind CSS y Flux UI</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5 mb-4">
                  <i className="bi bi-gear-fill me-2"></i>
                  Características principales
                </h3>
                <ul>
                  <li className="mb-3">
                    {" "}
                    Arquitectura MVC y control de roles.
                  </li>
                  <li className="mb-3">
                    {" "}
                    Autenticación con verificación en dos pasos.
                  </li>
                  <li className="mb-3">
                    {" "}
                    CRUD completo de productos, pedidos y usuarios.
                  </li>
                  <li className="mb-3">
                    {" "}
                    Carrito dinámico y gestión de stock por talla.
                  </li>
                  <li className="mb-3">
                    {" "}
                    Filtros de búsqueda y subida de imágenes.
                  </li>
                  <li> Diseño responsive y accesible.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RETOS */}
      <section className="mb-5">
        <div className="card border-0 shadow-sm">
          <h2 className="text-center">Retos y aprendizaje</h2>
          <div className="card-body p-4 text-center">
            <p className="lead mb-4">
              Uno de los mayores retos del proyecto fue adaptar el sistema de
              autenticación proporcionado por Laravel para incorporar diferentes
              roles de usuario y la verificación en dos pasos. Al partir de una
              base ya desarrollada por el framework, fue necesario comprender y
              modificar código existente, lo que supuso un importante proceso de
              aprendizaje.
            </p>
            <p>
              También resultó especialmente desafiante implementar la gestión
              del stock por talla, la actualización dinámica del carrito
              mediante Livewire y el desarrollo de un panel de administración
              con distintos niveles de acceso.
            </p>
            <hr />
            <p className="mb-0">
              Este proyecto me permitió consolidar conocimientos sobre
              <strong> Laravel</strong>, arquitectura <strong>MVC</strong>,
              diseño de bases de datos relacionales y desarrollo{" "}
              <strong>Full Stack</strong>. Además, me ayudó a comprender la
              importancia de escribir código mantenible, estructurar
              correctamente una aplicación y planificar futuras mejoras desde
              las primeras fases del desarrollo.
            </p>
          </div>
        </div>
      </section>

      {/* FUTURO */}
      <section className="mb-5">
        <h2 className="text-center">Posibles mejoras</h2>

        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <p className="text-center mb-4">
              Aunque la aplicación es completamente funcional, existen diversas
              mejoras y nuevas funcionalidades que me gustaría incorporar en
              futuras versiones.
            </p>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="p-3 bg-light rounded">
                  <i className="bi bi-credit-card text-primary me-2"></i>
                  Integración de métodos de pago (Stripe, PayPal, etc.).
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-light rounded">
                  <i className="bi bi-heart text-danger me-2"></i>
                  Sistema de favoritos.
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-light rounded">
                  <i className="bi bi-chat-square-text text-success me-2"></i>
                  Sistema de valoraciones y comentarios para los productos.
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-light rounded">
                  <i className="bi bi-ticket-perforated text-warning me-2"></i>
                  Sistema de cupones y descuentos.
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-light rounded">
                  <i className="bi bi-bar-chart text-info me-2"></i>
                  Panel de estadísticas para el administrador.
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-light rounded">
                  <i className="bi bi-cloud-arrow-up text-secondary me-2"></i>
                  Desarrollo de una API REST.
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-light rounded">
                  <i className="bi bi-check2-square text-success me-2"></i>
                  Implementación de pruebas automáticas con Cypress + Cucumber.
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-light rounded">
                  <i className="bi bi-diagram-3 text-primary me-2"></i>
                  Refactorización de modelos, controladores y estructura del
                  proyecto.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTONES */}
      <section className="text-center mt-5">
        <a
          href="https://github.com/JuditQuirosViolero/PI-Ecommerce.git"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-1 me-3"
        >
          Ver código en GitHub
        </a>
        <a href="/documentacion-pi.pdf" className="btn btn-outline-1" download>
          Descargar documentación
        </a>
      </section>
    </main>
  );
};
