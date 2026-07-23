// src/components/VotingSection.jsx

import React from "react";
import { motion } from "framer-motion";
import "../styles/VotingSection.css";

const votingSites = [
  {
    id: 1,
    name: "L2Brasil",
    url: "https://top.l2jbrasil.com/index.php?a=in&u=ciber-naka",
    image:
      "https://top.l2jbrasil.com/button.php?u=ciber-naka",
    alt: "Votar por CiberNaka L2 en L2Brasil",
  },

  /*
  Para agregar otro sitio de votación:

  {
    id: 2,
    name: "Nombre del Top",
    url: "https://...",
    image: "https://...",
    alt: "Votar por CiberNaka L2 en ...",
  },
  */
];

function VotingSection() {
  return (
    <section
      id="votanos"
      className="voting-section container"
    >

      {/* Encabezado */}

      <motion.div
        className="voting-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <span className="section-kicker">
          🏆 APOYÁ AL SERVIDOR 🏆
        </span>

        <h2>
          ¡Votá por CiberNaka L2!
        </h2>

        <p>
          Ayudanos a crecer votando diariamente en los principales tops
          de servidores de Lineage 2.
        </p>

      </motion.div>


      {/* Sitios de votación */}

      <div className="voting-banners">

        {votingSites.map((site) => (

          <motion.a
            key={site.id}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="vote-img-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >

            <img
              src={site.image}
              alt={site.alt}
            />

            <span className="vote-site-name">
              {site.name}
            </span>

          </motion.a>

        ))}

      </div>

    </section>
  );
}

export default VotingSection;