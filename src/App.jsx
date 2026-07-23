// src/App.jsx

import React, { useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import StatusBar from "./components/StatusBar";
import FeatureSection from "./components/FeatureSection";
import ServersSection from "./components/ServersSection";
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

      <Navigation />

      <Header />

      <StatusBar />

      <main>

        {/* Banner Principal */}

        <section id="inicio" className="intro-section">

          <div className="launch-banner">

            <span className="launch-badge">
              🔥 REAPERTURA OFICIAL 🔥
            </span>

            <h1 className="title-dramatico">
              CiberNaka L2
            </h1>

            <h2 className="launch-date">
              SERVIDORES ONLINE
            </h2>

            <p className="launch-description">
              Dos formas diferentes de vivir Lineage II High Five.
            </p>

            <div className="launch-servers">

              <span>🔥 Multiskills x1</span>

              <span>☠️ Hardcore x1</span>

            </div>

          </div>

        </section>


        {/* Características */}

        <FeatureSection />

        {/* Servidores */}

        <ServersSection />

        {/* Premium */}

        <PremiumSection />

        {/* Tutorial */}

        <TutorialVideo />

        {/* Descargas */}

        <DownloadsSection />

        {/* Votación */}

        <VotingSection />

        {/* Staff */}

        <StaffSection />

      </main>


      {/* Redes */}

      <section id="redes" className="social-section">

        <h2>Comunidad</h2>

        <p>
          Seguinos en nuestras redes y enterate de todas las novedades.
        </p>

        <div className="social-icons">

          <a
            href="https://tiktok.com/@cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link tiktok"
          >
            <i className="fab fa-tiktok"></i>
          </a>

          <a
            href="https://www.youtube.com/channel/UCme01PzQB8nyRc8E8b9QnYQ"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link youtube"
          >
            <i className="fab fa-youtube"></i>
          </a>

          <a
            href="https://instagram.com/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.twitch.tv/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link twitch"
          >
            <i className="fab fa-twitch"></i>
          </a>

          <a
            href="https://kick.com/cibernaka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link kick"
          >
            <i className="fas fa-play-circle"></i>
          </a>

          <a
            href="https://www.facebook.com/CiberNakaGames"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://discord.gg/ufkSuBAzM7"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link discord"
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