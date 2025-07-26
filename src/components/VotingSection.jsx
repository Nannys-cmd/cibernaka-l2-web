// src/components/VotingSection.jsx
import React from "react";
import { motion } from "framer-motion";

const VotingSection = () => {
  return (
    <section id="votanos" className="voting-section container">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ¡Votá por CiberNaka L2!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Ayudanos a crecer votando diariamente en estos tops:
      </motion.p>

      <div className="voting-banners">
        {/* TopG */}
        <motion.a
          href="https://topg.org/lineage2-private-servers/server-671210#vote"
          target="_blank"
          rel="noopener noreferrer"
          className="vote-img-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="https://topg.org/topg.gif" alt="Vote on TopG" />
        </motion.a>

        {/* Hopzone */}
        <motion.a
          href="https://l2.hopzone.net/site/vote/106806/1"
          target="_blank"
          rel="noopener noreferrer"
          className="vote-img-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://l2.hopzone.net/assets/img/banners/vote_banners/banner_2.png"
            alt="Vote on Hopzone"
          />
        </motion.a>

        {/* L2Brasil */}
        <motion.a
          href="https://top.l2jbrasil.com/index.php?a=in&u=ciber-naka"
          target="_blank"
          rel="noopener noreferrer"
          className="vote-img-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://top.l2jbrasil.com/button.php?u=ciber-naka"
            alt="Vote on L2Brasil"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default VotingSection;
