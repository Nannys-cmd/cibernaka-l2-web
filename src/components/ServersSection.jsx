// src/components/ServersSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/ServersSection.css";

const servers = [
  {
    name: "Multiskills",
    mode: "x1",
    features: [
      "Sistema Multiskills",
      "Aprendé skills de cualquier profesión",
      "Rates x1",
      "Venta de buffs mediante personajes",
      "Sin GM Shop",
      "Sin GK Global",
      "Duración original de las skills",
      "Experiencia enfocada en progreso y comunidad",
    ],
    bgColor: "#1a1a1a",
  },
  {
    name: "HardCore",
    mode: "x1",
    features: [
      "Experiencia clásica High Five",
      "Inicio desde nivel 1",
      "Rates x1",
      "Venta de buffs mediante personajes",
      "Sin GM Shop",
      "Sin GK Global",
      "Duración original de las skills",
      "Desafío para jugadores que buscan una experiencia auténtica",
    ],
    bgColor: "#1a1a1a",
  },
];

const ServersSection = () => {
  return (
    <section id="servers" className="servers-section container">
      <h2 className="section-title">
        ⚔️ Elegí Tu Destino ⚔️
      </h2>

      <div className="servers-grid">
        {servers.map((server, index) => (
          <motion.div
            className="tarjeta-cibernaka"
            key={index}
            style={{ backgroundColor: server.bgColor }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{server.name}</h3>

            <p className="server-mode">
              Servidor {server.mode}
            </p>

            <ul>
              {server.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServersSection;