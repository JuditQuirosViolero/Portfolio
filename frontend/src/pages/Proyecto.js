import React from "react";
import videoEcommerceTFG from "../assets/Videos_Proyectos/Video_Pi_Ecommerce.mp4";
import { TarjetasProyectos } from "../components/TarjetasProyectos";

export const Proyecto = () => {
  return (
    <div className="container px-5 pt-5 pb-3">
      <h2 className="display-6 mb-5 text-center">Mis Proyectos</h2>

      <div className="row justify-content-start">
        {/* Proyecto Ecommerce */}
        <div className="col-12 col-lg-6 col-xxl-4 mb-4">
          <TarjetasProyectos
            title="Ecommerce Laravel (TFG)"
            description="Aplicación web desarrollada como Trabajo de Fin de Grado con
                sistema completo de autenticación, roles y gestión de productos."
            features="Sistema de login y registro,
                roles de usuario y administrador, CRUD de prendas, panel de
                administración"
            tech="Laravel · Livewire · MySQL · Bootstrap"
            video={videoEcommerceTFG}
            github="https://github.com/JuditQuirosViolero/PI-Ecommerce.git"
            docs="/documentacion-pi.pdf"
            viewMore="ProyectoEcommerce"
            status="No tiene métodos de pago implementados"
          />
        </div>
{/*
        Quiromasag · Stetica 
        <div className="col-12 col-lg-6 col-xxl-4 mb-4">
          <TarjetasProyectos
            title="Web Estática Informativa"
            description="Web estática de carácter informativo/promocional para un pequeño emprendimiento realizado por cuenta propia a un cliente de la zona. "
            features="Mostrar información sobre los servicios y contactar por Whatsapp al que ofrece el servicio"
            tech="React · Vite · JavaScript · Css"
            video={videoQiromasagStetica}
            github="https://github.com/JuditQuirosViolero/inma-reyes-web.git"
            liveWeb="{https://google.es}"
            status="En desarrollo"
          />
        </div>

        Proyecto JTW
        <div className="col-12 col-lg-6 col-xxl-4 mb-4">
          <TarjetasProyectos
            title="Ecommerce Judit's Tiny World"
            description="Aplicación web desarrollada en Wordpress como..."
            features="Sistema de login y registro,
                roles de usuario y administrador, CRUD de prendas, panel de
                administración"
            tech="Wordpress · Woocommerce · Woopay · Spectra"
            video={proyectoVideo}
            github="https://github.com/JuditQuirosViolero/PI-Ecommerce.git"
            liveWeb="https://google.es"
            status="En desarrollo"
          />
        </div>
*/}
      </div>
    </div>
  );
};
