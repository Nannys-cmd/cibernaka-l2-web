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
      "Subclass acumulativa x5",
      "NPC Subclass Manager",
      "NO GM Shop, NO NPC Buffer, NO GK Global",
      "NPC Rewards por logros",
      "Duración de los buffs: 1 horas",
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
      "Duración de los buffs: 1 hora"
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
