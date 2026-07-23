// src/components/DownloadsSection.jsx

import React from "react";
import "../styles/DownloadsSection.css";

const downloads = [
  {
    title: "⚔️ Cliente Completo High Five",
    description:
      "Incluye todo lo necesario para ingresar al servidor.",
    platform: "MediaFire",
    url: "https://www.mediafire.com/file/tf14b0qv5gftlx1/Ciber+Naka+L2+H5.rar/file",
    icon: "📥",
  },
  {
    title: "⚔️ Cliente Completo High Five",
    description:
      "Incluye todo lo necesario para ingresar al servidor.",
    platform: "Google Drive",
    url: "https://drive.google.com/file/d/1E9tp7T_kUa46n6D4roGGw1YM-s40U9XH/view?usp=sharing",
    icon: "📥",
  },
];

function DownloadsSection() {
  return (
    <section
      id="descargas"
      className="download-section"
    >

      {/* Encabezado */}

      <div className="download-header">

        <span className="section-kicker">
          ⚔️ PREPARATE PARA JUGAR ⚔️
        </span>

        <h2>
          Descargas
        </h2>

        <p>
          Descargá el cliente completo de Lineage 2 High Five y preparate
          para ingresar a CiberNaka L2.
        </p>

      </div>


      {/* Opciones de descarga */}

      <div className="downloads-container">

        {downloads.map((download) => (

          <article
            className="download-card"
            key={download.platform}
          >

            <div className="download-icon">
              {download.icon}
            </div>

            <h3>
              {download.title}
            </h3>

            <p>
              {download.description}
            </p>

            <a
              href={download.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn download-btn"
            >
              📥 Descargar desde {download.platform}
            </a>

          </article>

        ))}

      </div>

    </section>
  );
}

export default DownloadsSection;