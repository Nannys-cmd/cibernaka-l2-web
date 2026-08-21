// src/components/ServersSection.jsx

import React from "react";
import { motion } from "framer-motion";
import "../styles/ServersSection.css";

const servers = [
  {
    name: "Lilith",
    type: "MULTISKILLS",
    mode: "x5 EXP / x1 SP",
    icon: "🔥",
    description:
      "Una experiencia diferente para quienes buscan libertad, estrategia y creatividad en la construcción de su personaje.",
    features: [
      "Sistema Multiskills",
      "Sin GMShop",
      "Sin NPC Buffer",
      "Sin GK Global",
      "Sin Autofarm",
      "Server Craft desde Grado S80",
      "Buffs con duración de 1 hora",
      "Dual Box: hasta 4 cuentas",
    ],
  },
  {
    name: "Anakim",
    type: "HARDCORE",
    mode: "x1",
    icon: "☠️",
    description:
      "La experiencia clásica de Lineage 2 High Five para quienes buscan un verdadero desafío desde el comienzo.",
    features: [
      "100% Retail",
      "Sin GMShop",
      "Sin NPC Buffer",
      "Sin GK Global",
      "Sin Autofarm",
      "Server Craft desde Grado S",
      "Buffs con duración de 1 hora",
      "Progreso completamente desafiante",
    ],
  },
  {
    name: "Desperion",
    type: "SUB-ACU",
    mode: "x5",
    icon: "⚔️",
    badge: "🆕 NUEVO",
    description:
      "Una nueva experiencia Sub-Acu x5 para quienes buscan una progresión diferente, dinámica y accesible.",
    features: [
      "EXP x5",
      "Adena x1",
      "Sin GMShop",
      "Sin NPC Buffer",
      "Sin GK Global",
      "Sin Autofarm",
      "Base +3",
      "Tercer cambio en la última sub",
      "¡Totalmente gratis!",
    ],
  },
];

function ServersSection() {
  return (
    <section
      id="servers"
      className="servers-section container"
    >

      {/* ENCABEZADO */}

      <div className="servers-header">

        <span className="section-kicker">
          ⚔️ TRES SERVIDORES. UNA LEYENDA. ⚔️
        </span>

        <h2 className="section-title">
          Elegí Tu Destino
        </h2>

        <p className="servers-description">
          Tres experiencias diferentes de Lineage 2 High Five.
          <br />
          ¿Cuál será tu próxima aventura?
        </p>

      </div>


      {/* SERVIDORES */}

      <div className="servers-grid">

        {servers.map((server, index) => (

          <motion.article
            className={`server-card server-${server.type.toLowerCase()}`}
            key={server.name}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {/* BADGE NUEVO */}

            {server.badge && (
              <span className="server-badge">
                {server.badge}
              </span>
            )}


            {/* CABECERA */}

            <div className="server-card-header">

              <span className="server-icon">
                {server.icon}
              </span>

              <div>

                <h3>
                  {server.name}
                </h3>

                <span className="server-type">
                  {server.type}
                </span>

              </div>

            </div>


            {/* RATES */}

            <div className="server-mode">
              RATES {server.mode}
            </div>


            {/* DESCRIPCIÓN */}

            <p className="server-description">
              {server.description}
            </p>


            {/* CARACTERÍSTICAS */}

            <ul className="server-features">

              {server.features.map((feature, idx) => (

                <li key={idx}>

                  <span className="feature-check">
                    ✓
                  </span>

                  <span>
                    {feature}
                  </span>

                </li>

              ))}

            </ul>


            {/* PIE */}

            <div className="server-card-footer">

              <span>
                ⚔️ High Five
              </span>

              <span>
                🏰 CiberNaka L2
              </span>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}

export default ServersSection;