// src/App.jsx

import React, { useEffect } from "react";
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";
import FeatureSection from "./components/FeatureSection";
import ServersSection from "./components/ServersSection";
import NewsSection from "./components/NewsSection";
import PremiumSection from "./components/PremiumSection";
import TutorialVideo from "./components/TutorialVideo";
import VotingSection from "./components/VotingSection";
import StaffSection from "./components/StaffSection";
import DownloadsSection from "./components/DownloadsSection";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import "./App.css";
import "./styles/Overlay.css";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="overlay-bg">

      <Header />

      <StatusBar />

      <main>

        {/* =========================================
            BANNER PRINCIPAL
        ========================================= */}

        <section id="inicio" className="intro-section">

          <div className="launch-banner">

            {/* Insignia */}

            <span className="launch-badge">
              ⚔️ CIBERNAKA L2 ⚔️
            </span>


            {/* Título */}

            <h1 className="title-dramatico">
              Tres servidores.
            </h1>


            {/* Subtítulo */}

            <p className="launch-description">
              Tres experiencias diferentes. Una misma comunidad.
            </p>


            {/* =========================================
                SERVIDORES
            ========================================= */}

            <div className="launch-servers">

              {/* LILITH */}

              <article className="launch-server">

                <span className="server-icon">
                  🔥
                </span>

                <h2 className="server-name">
                  LILITH
                </h2>

                <span className="server-type">
                  MULTISKILLS
                </span>

                <span className="server-rate">
                  x5
                </span>

                <span className="server-status">
                  🟢 ONLINE
                </span>

              </article>


              {/* ANAKIM */}

              <article className="launch-server">

                <span className="server-icon">
                  ☠️
                </span>

                <h2 className="server-name">
                  ANAKIM
                </h2>

                <span className="server-type">
                  HARDCORE
                </span>

                <span className="server-rate">
                  x1
                </span>

                <span className="server-status">
                  🟢 ONLINE
                </span>

              </article>


              {/* DESPERION */}

              <article className="launch-server server-new">

                <span className="new-badge">
                  🆕 NUEVO
                </span>

                <span className="server-icon">
                  ⚔️
                </span>

                <h2 className="server-name">
                  DESPERION
                </h2>

                <span className="server-type">
                  SUB-ACU
                </span>

                <span className="server-rate">
                  x5
                </span>

                <span className="server-status server-opening">
                  🔥 APERTURA 22 DE AGOSTO
                </span>

              </article>

            </div>


            {/* Mensaje final */}

            <p className="launch-footer">
              Elegí tu estilo de juego y comenzá tu aventura.
            </p>

          </div>

        </section>


        {/* =========================================
            CARACTERÍSTICAS
        ========================================= */}

        <FeatureSection />


        {/* =========================================
            SERVIDORES
        ========================================= */}

        <ServersSection />

        {/* =========================================
            NOVEDADES
        ========================================= */}

        <NewsSection />

        {/* =========================================
            PREMIUM
        ========================================= */}

        <PremiumSection />


        {/* =========================================
            TUTORIAL
        ========================================= */}

        <TutorialVideo />


        {/* =========================================
            DESCARGAS
        ========================================= */}

        <DownloadsSection />


        {/* =========================================
            VOTACIÓN
        ========================================= */}

        <VotingSection />


        {/* =========================================
            STAFF
        ========================================= */}

        <StaffSection />

      </main>


      {/* =========================================
          REDES SOCIALES
      ========================================= */}

      <section id="redes" className="social-section">

        <h2>
          Comunidad
        </h2>

        <p>
          Seguinos en nuestras redes y enterate de todas las novedades.
        </p>


        <div className="social-icons">

          <a
            href="https://tiktok.com/@cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link tiktok"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>


          <a
            href="https://www.youtube.com/channel/UCme01PzQB8nyRc8E8b9QnYQ"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link youtube"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>


          <a
            href="https://instagram.com/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>


          <a
            href="https://www.twitch.tv/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link twitch"
            aria-label="Twitch"
          >
            <i className="fab fa-twitch"></i>
          </a>


          <a
            href="https://kick.com/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link kick"
            aria-label="Kick"
          >
            <i className="fas fa-play-circle"></i>
          </a>


          <a
            href="https://www.facebook.com/CiberNakaGames"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>


          <a
            href="https://discord.gg/ufkSuBAzM7"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link discord"
            aria-label="Discord"
          >
            <i className="fab fa-discord"></i>
          </a>

        </div>


        <p className="social-discord">
          🎮 Unite a nuestra comunidad para eventos, soporte y anuncios.
        </p>

      </section>


      <ScrollToTop />

      <Footer />

    </div>
  );
}

export default App;