// src/components/ServersSection.jsx

import React from "react";
import { motion } from "framer-motion";
import "../styles/ServersSection.css";

const servers = [
  {
    name: "Lilith",
    type: "MULTISKILLS",
    mode: "x1",
    icon: "🔥",
    description:
      "Una experiencia diferente para quienes buscan libertad, estrategia y creatividad en la construcción de su personaje.",
    features: [
      "Sistema Multiskills",
      "Aprendé skills de cualquier profesión",
      "Rates x1",
      "Venta de buffs mediante personajes",
      "Progreso basado en esfuerzo y dedicación",
      "Mayor libertad para crear tu estilo de juego",
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
      "Experiencia clásica High Five",
      "Inicio desde nivel 1",
      "Rates x1",
      "Venta de buffs mediante personajes",
      "Progreso completamente desafiante",
      "Experiencia auténtica para jugadores hardcore",
    ],
  },
];

function ServersSection() {
  return (
    <section
      id="servers"
      className="servers-section container"
    >

      <div className="servers-header">

        <span className="section-kicker">
          ⚔️ DOS CAMINOS. UNA LEYENDA. ⚔️
        </span>

        <h2 className="section-title">
          Elegí Tu Destino
        </h2>

        <p className="servers-description">
          Dos servidores. Dos estilos de juego.
          <br />
          La decisión es tuya.
        </p>

      </div>


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


            <div className="server-mode">
              RATES {server.mode}
            </div>


            <p className="server-description">
              {server.description}
            </p>


            <ul className="server-features">

              {server.features.map((feature, idx) => (

                <li key={idx}>
                  <span className="feature-check">
                    ✓
                  </span>

                  {feature}
                </li>

              ))}

            </ul>


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