import React from "react";
import "../styles/NewsSection.css";

function NewsSection() {
  return (
    <section id="novedades" className="news-section">

      <div className="news-container">

        <div className="news-icon">
          📢
        </div>

        <div className="news-content">

          <span className="news-label">
            NOVEDADES
          </span>

          <h2>
            Mantente al día con CiberNaka L2
          </h2>

          <p>
            Todas las actualizaciones, cambios, eventos y anuncios
            de nuestros servidores se publican en nuestra comunidad
            de Discord.
          </p>

          <a
            href="https://discord.gg/ufkSuBAzM7"
            target="_blank"
            rel="noopener noreferrer"
            className="news-button"
          >
            💬 UNITE A DISCORD
          </a>

        </div>

      </div>

    </section>
  );
}

export default NewsSection;