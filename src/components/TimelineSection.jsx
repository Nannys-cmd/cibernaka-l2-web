// src/components/TimelineSection.jsx
import React from "react";

const timelineEvents = [
  {
    title: "Chronicle 1 - Interlude",
    description: "La base inicial del juego con mejoras en PvP y balance.",
  },
  {
    title: "Chronicle 2 - Gracia",
    description: "Se añadió el sistema de clanes y nuevas misiones épicas.",
  },
  {
    title: "Chronicle 3 - Freya",
    description: "Nueva crónica con mejorías gráficas y raids memorables.",
  },
  {
    title: "Chronicle 4 - Chaotic Throne (C4)",
    description:
      "Introducción de nuevas habilidades, mazmorras y sistemas de clan avanzados.",
  },
  {
    title: "Chronicle 5 - High Five",
    description:
      "La crónica más popular, con eventos PvP intensos y múltiples clases jugables.",
  },
];

const TimelineSection = () => {
  return (
    <section className="timeline-section" id="timeline">
      <h2>Crónicas de Lineage 2</h2>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${
              event.title.includes("High Five") ? "highlight" : ""
            }`}
            data-aos="fade-up"
          >
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
