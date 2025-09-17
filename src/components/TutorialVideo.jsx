// src/components/TutorialVideo.jsx
import React from "react";
import "../styles/TutorialVideo.css";

const videos = [
  {
    id: 1,
    title: "🎥 Cómo jugar Lineage 2",
    url: "https://www.youtube.com/embed/6B_NQSbG4Hk?si=bKq8FgRp1ncqFoUv",
  },
  // 👉 más videos en el futuro:
  // {
  //   id: 2,
  //   title: "Evento PvP Épico",
  //   url: "https://www.youtube.com/embed/XXXXXXX",
  // },
];

const TutorialVideo = () => {
  return (
    <section className="tutorial-video-section">
      <h2 className="typewriter-glow">📺 Videos del Servidor</h2>
      <div className="tutorial-video-gallery">
        {videos.map((video) => (
          <div className="tutorial-video-card" key={video.id}>
            <h3>{video.title}</h3>
            <div className="tutorial-video-container">
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TutorialVideo;
