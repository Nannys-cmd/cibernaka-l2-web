// src/components/LoreSection.jsx
import React from "react";
import "../styles/LoreSection.css"; // Assuming you have a CSS file for styling the lore section

const LoreSection = () => {
  return (
    <section className="lore-section" id="lore" data-aos="fade-right">
      <h2>¿Qué es Lineage 2?</h2>
      <p>
        Lineage 2 es un MMORPG épico ambientado en un mundo de fantasía oscura donde clanes y héroes
        luchan por el poder, la gloria y la supervivencia. Con batallas PvP intensas, vastos territorios y una comunidad apasionada, es un juego que desafía a los más valientes.
      </p>

      <h3>La historia detrás de CiberNaka L2</h3>
      <p>
        CiberNaka L2 nace como un servidor dedicado a ofrecer la mejor experiencia de High Five,
        combinando equilibrio, eventos constantes y una comunidad comprometida para que cada jugador
        sienta la adrenalina de la guerra y la camaradería.
      </p>
    </section>
  );
};

export default LoreSection;
