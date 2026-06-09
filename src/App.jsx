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
              ⚔️ SÁBADO 13 DE JUNIO - REAPERTURA OFICIAL ⚔️
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

            <div className="download-card">
              <h3>System CiberNakaL2</h3>
              <p>
                Versión V4 - actualización de Septiembre 2025. Extraé en la carpeta del
                cliente.
              </p>
              <a
                href="https://www.mediafire.com/file/44u3mx0nbwapny0/CiberNaka+L2+Parche+(V4)+15-09-2025.rar/file"
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
