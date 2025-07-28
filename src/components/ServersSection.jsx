// src/components/ServersSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/ServersSection.css";

const servers = [
  {
    name: "Anakim",
    mode: "Multiskills",
    features: [
      "Alt + B: Buffs, Shop y Community Manager",
      "Zona de leveleo 80+",
      "Fantasy Island: Special Shop para mejoras",
    ],
    bgColor: "#1a1a1a",
  },
  {
    name: "Lilith",
    mode: "Full PvP",
    features: [
      "Inicio al nivel 76 con cambios instantáneos",
      "Alt + B: GM Shop, GK Global, Event Manager",
      "Zonas especiales: Infinity Dock, Destruction Dock, Annihilation Dock",
      "NPC Rewards por logros",
    ],
    bgColor: "#1a1a1a",
  },
  {
    name: "Desperion",
    mode: "x1 Hardcore",
    features: [
      "Inicio desde nivel 1",
      "Requiere contraseña de 6-8 números",
      "Modo ultra desafiante para valientes",
    ],
    bgColor: "#1a1a1a",
  },
];

const ServersSection = () => {
  return (
    <section id="servers" className="servers-section container">
      <h2 className="section-title">Nuestros Servidores</h2>
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
            <p className="server-mode">{server.mode}</p>
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
