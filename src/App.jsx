// src/App.jsx
import React from "react";
import Header from "./components/Header";
import VotingSection from "./components/VotingSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="overlay-bg">
      <Header />

      <main className="container">
        {/* Intro */}
        <section id="inicio" className="intro-section">
          <h1>Bienvenidos a CiberNaka L2</h1>
          <p>Un mundo donde el caos y la gloria se cruzan en cada batalla.</p>

          <div className="servers-container">
            {/* Server Anakim */}
            <div className="server-card anakim">
              <h2>Servidor Anakim</h2>
              <p>Crónica: High Five</p>
              <p>Modo: Full PvP (por confirmar)</p>
              <p>
                Ideal para los amantes del combate constante y adrenalina pura.
              </p>
            </div>

            {/* Server Lilith */}
            <div className="server-card lilith">
              <h2>Servidor Lilith</h2>
              <p>Crónica: High Five</p>
              <p>Modo: Multiskills (por confirmar)</p>
              <p>
                Perfecto para los que buscan experimentar builds y clases
                cruzadas.
              </p>
            </div>
          </div>
        </section>

        {/* Descargas */}
        <section id="descargas" className="download-section">
          <h2>Descargas</h2>
          <p>
            Todo lo que necesitás para comenzar tu aventura en CiberNaka L2:
          </p>

          <div className="downloads-container">
            {/* Cliente */}
            <div className="download-card">
              <h3>Cliente H5 Completo</h3>
              <p>Versión High Five – base necesaria para jugar.</p>
              <a
                href="https://www.mediafire.com/file/e6d0bab482r1q4j/Client_L2_H5.rar/file"
                className="btn download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar Cliente
              </a>
            </div>

            {/* System */}
            <div className="download-card">
              <h3>System CiberNakaL2</h3>
              <p>
                Versión actualizada de junio 2025. Extraé en la carpeta del
                cliente.
              </p>
              <a
                href="https://www.mediafire.com/file/ps2om1dyvab6fb8/CiberNaka_L2_Server_%2528V3%2529_01-06-2025.rar/file"
                className="btn download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar System
              </a>
            </div>
          </div>
        </section>

        {/* Votación */}
        <VotingSection />
      </main>

      {/* Redes Sociales */}
      <section id="redes" className="social-section">
        <h2>Seguinos en nuestras redes</h2>
        <p>¡No te pierdas nada de CiberNaka L2!</p>

        <div className="social-icons">
          {/* TikTok */}
          <a
            href="https://tiktok.com/@cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link tiktok"
            title="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UCme01PzQB8nyRc8E8b9QnYQ"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link youtube"
            title="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Twitch */}
          <a
            href="https://www.twitch.tv/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link twitch"
            title="Twitch"
          >
            <i className="fab fa-twitch"></i>
          </a>

          {/* Kick */}
          <a
            href="https://kick.com/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link kick"
            title="Kick"
          >
            <i className="fas fa-play-circle"></i>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/CiberNakaGames"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Discord */}
          <a
            href="https://discord.com/users/@cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link discord"
            title="Discord"
          >
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
