// src/components/TutorialVideo.jsx

import React from "react";
import "../styles/TutorialVideo.css";

const videos = [
  {
    id: 1,
    title: "🎥 Cómo jugar Lineage 2",
    url: "https://www.youtube.com/embed/6B_NQSbG4Hk?si=bKq8FgRp1ncqFoUv",
  },

  /*
  Para agregar nuevos videos:

  {
    id: 2,
    title: "🎥 Título del nuevo video",
    url: "https://www.youtube.com/embed/ID_DEL_VIDEO",
  },
  */
];

function TutorialVideo() {
  return (
    <section
      id="tutorial"
      className="tutorial-video-section"
    >

      <div className="tutorial-header">

        <span className="section-kicker">
          📺 GUÍAS Y CONTENIDO 📺
        </span>

        <h2 className="typewriter-glow">
          Videos del Servidor
        </h2>

        <p className="tutorial-description">
          Aprendé, descubrí y conocé más sobre la experiencia de CiberNaka L2.
        </p>

      </div>


      <div className="tutorial-video-gallery">

        {videos.map((video) => (

          <article
            className="tutorial-video-card"
            key={video.id}
          >

            <h3>
              {video.title}
            </h3>

            <div className="tutorial-video-container">

              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share
                "
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default TutorialVideo;