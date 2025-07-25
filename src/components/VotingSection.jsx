// src/components/VotingSection.jsx
import React from "react";

function VotingSection() {
  return (
    <section id="votanos" className="voting-section container">
      <h2>¡Votá por CiberNaka L2!</h2>
      <p>Ayudanos a crecer votando diariamente en estos tops:</p>

      <div className="voting-banners">
        {/* TopG */}
        <a
          href="https://topg.org/lineage2-private-servers/server-671210#vote"
          target="_blank"
          rel="noopener noreferrer"
          className="vote-img-link"
        >
          <img src="https://topg.org/topg.gif" alt="Vote on TopG" />
        </a>

        {/* Hopzone */}
        <a
          href="https://l2.hopzone.net/site/vote/106806/1"
          target="_blank"
          rel="noopener noreferrer"
          className="vote-img-link"
        >
          <img
            src="https://l2.hopzone.net/assets/img/banners/vote_banners/banner_2.png"
            alt="Vote on Hopzone"
          />
        </a>

        {/* L2Brasil */}
        <a
          href="https://top.l2jbrasil.com/index.php?a=in&u=ciber-naka"
          target="_blank"
          rel="noopener noreferrer"
          className="vote-img-link"
        >
          <img
            src="https://top.l2jbrasil.com/button.php?u=ciber-naka"
            alt="Vote on L2Brasil"
          />
        </a>
      </div>
    </section>
  );
}

export default VotingSection;
