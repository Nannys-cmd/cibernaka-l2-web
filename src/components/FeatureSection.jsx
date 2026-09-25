// src/components/FeatureSection.jsx

import React from "react";
import "../styles/FeatureSection.css";

function FeatureSection() {
  const features = [
    {
      icon: "⚔️",
      title: "Experiencia en Party x2",
      text:
        "Jugá acompañado y progresá más rápido. La experiencia en grupo está aumentada x2 para premiar el juego cooperativo.",
    },
    {
      icon: "🏰",
      title: "Luxury Shop hasta Grado A",
      text:
        "Accedé a equipamiento mediante Luxury Shop con ítems hasta Grado A, manteniendo el progreso y la economía del servidor.",
    },
    {
      icon: "🔨",
      title: "Craft Completo",
      text:
        "Creá tus propias armas, armaduras y joyería mediante el sistema clásico de crafteo con enanos.",
    },
    {
      icon: "🚫",
      title: "Sin GM Shop",
      text:
        "Nada regalado. El progreso depende de tu esfuerzo, comercio, farmeo y dedicación.",
    },
    {
      icon: "🗺️",
      title: "Sin GK Global",
      text:
        "Conservamos la esencia clásica del mundo Lineage 2 y sus viajes.",
    },
    {
      icon: "📖",
      title: "Auto Learn",
      text:
        "Tus habilidades principales se aprenden automáticamente. En Multiskills además podés aprender skills de otras profesiones.",
    },
    {
      icon: "💰",
      title: "Offline Shop",
      text:
        "Vendé tus objetos mientras estás desconectado y formá parte de la economía del servidor.",
    },
    {
      icon: "🔥",
      title: "Venta de Buffs",
      text:
        "Usando .sellbuffs podés dejar a tu personaje vendiendo buffs para que otros jugadores puedan adquirirlos.",
    },
    {
      icon: "👑",
      title: "Sistema Retail",
      text:
        "Subclases originales, Noblesse Retail y una experiencia basada en Lineage 2 High Five clásico.",
    },
  ];

  return (
    <section id="features" className="features-section">

      <div className="features-header">

        <span className="section-kicker">
          ⚔️ LA EXPERIENCIA CIBERNAKA ⚔️
        </span>

        <h2>
          ✨ Características del Servidor ✨
        </h2>

        <p className="features-description">
          CiberNaka L2 mantiene la esencia de Lineage 2 High Five,
          combinando sistemas clásicos con mejoras pensadas para una
          comunidad activa.
        </p>

      </div>


      <div className="features-grid">

        {features.map((feature, index) => (

          <article
            className="feature-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>
              {feature.title}
            </h3>

            <p>
              {feature.text}
            </p>

          </article>

        ))}

      </div>

    </section>
  );
}

export default FeatureSection;