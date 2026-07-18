// src/App.jsx
import React, { useEffect } from "react";
import Header from "./components/Header";
import LoreSection from "./components/LoreSection";
import TimelineSection from "./components/TimelineSection";
import VotingSection from "./components/VotingSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import StaffSection from "./components/StaffSection";
import ServersSection from "./components/ServersSection";
import StatusBar from "./components/StatusBar";
import TutorialVideo from "./components/TutorialVideo"; // ⬅️ Nuevo tutorial
import Navigation from "./components/Navigation";
import PremiumSection from "./components/PremiumSection"; // ⬅️ Nuevo componente de sección premium
import "./App.css";
import "./styles/Overlay.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="overlay-bg">
      <Navigation />
      <Header />

      <StatusBar />

      <main className="container">
        {/* Título principal */}
        <section id="inicio" className="intro-section">
          <div className="launch-banner">
            <span className="launch-badge">🔥 REAPERTURA OFICIAL 🔥</span>

            <h1 className="title-dramatico">CiberNaka L2</h1>

            <h2 className="launch-date">
              🔥 SERVIDORES ONLINE 🔥
            </h2>

            <p className="launch-description">
              Dos nuevas experiencias te esperan:
            </p>

            <div className="launch-servers">
              <span>🔥 Multiskills x1</span>
              <span>☠️ HardCore x1</span>
            </div>

            <p className="launch-rules">
              Sin GM Shop • Sin GK Global • Skills originales •
              Progreso basado en esfuerzo y trabajo en equipo
            </p>
          </div>
        </section>

        {/* Lore: ¿Qué es Lineage? */}
        <LoreSection />

        {/* Timeline de crónicas */}
        <TimelineSection />

        {/* Características del server */}
        <section id="historia" className="history-section container">
          <h2>Historia y Características</h2>
          <div className="history-cards">
            <article className="history-card">
              <h3>¿Por qué CiberNaka L2?</h3>
              <p>
                Porque combinamos un ambiente místico, comunidad apasionada y
                servidores optimizados para que vivas la mejor experiencia H5.
              </p>
            </article>
          </div>
        </section>

        <ServersSection />

        <PremiumSection />   {/* ⬅️ Nueva sección premium */}

        <StaffSection />

        <TutorialVideo />   {/* ⬅️ Nuevo tutorial */}

        {/* Descargas */}
        <section id="descargas" className="download-section">
          <h2>Descargas</h2>
          <p>
            Todo lo que necesitás para comenzar tu aventura en CiberNaka L2:
          </p>

          <div className="downloads-container">
            <div className="download-card">
              <h3>⚔️ Cliente Completo CiberNaka L2 H5</h3>

              <p>
                Descargá el cliente completo listo para jugar en nuestros servidores.
                No necesitás descargar ningún parche o system adicional.
              </p>

              <a
                href="https://www.mediafire.com/file/tf14b0qv5gftlx1/Ciber+Naka+L2+H5.rar/file"
                className="btn download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar Cliente Completo
              </a>
            </div>
          </div>
        </section>

        {/* Votación */}
        <VotingSection />
      </main>

      {/* Redes Sociales */}
      <section id="redes" className="social-section">
        <h2>Contacto y Redes Sociales</h2>

        <p>
          Unite a nuestra comunidad y mantenete al día con eventos,
          novedades, soporte y anuncios de CiberNaka L2.
        </p>

        <div className="social-icons">
          <a
            href="https://tiktok.com/@cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link tiktok"
            title="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>

          <a
            href="https://www.youtube.com/channel/UCme01PzQB8nyRc8E8b9QnYQ"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link youtube"
            title="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>

          <a
            href="https://instagram.com/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.twitch.tv/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link twitch"
            title="Twitch"
          >
            <i className="fab fa-twitch"></i>
          </a>

          <a
            href="https://kick.com/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link kick"
            title="Kick"
          >
            <i className="fas fa-play-circle"></i>
          </a>

          <a
            href="https://www.facebook.com/CiberNakaGames"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://discord.gg/ufkSuBAzM7"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link discord"
            title="Discord"
          >
            <i className="fab fa-discord"></i>
          </a>
        </div>

        <p className="social-discord">
          🎮 ¿Necesitás ayuda o querés participar en eventos?
          Contactanos a través de nuestras redes y comunidad.
        </p>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
