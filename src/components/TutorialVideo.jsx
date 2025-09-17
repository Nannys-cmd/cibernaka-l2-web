// src/components/TutorialVideo.jsx
import React from "react";
import "../styles/TutorialVideo.css";

const TutorialVideo = () => {
  return (
    <section className="tutorial-section">
      <h2 className="typewriter-glow">🎥 Tutorial: Cómo jugar Lineage 2</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6B_NQSbG4Hk?si=bKq8FgRp1ncqFoUv"
          title="Lineage 2 Tutorial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default TutorialVideo;
