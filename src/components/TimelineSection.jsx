import React from "react";

const events = [
  {
    title: "Chronicle 1: Harbingers of War",
    description: "El inicio de todo. Se introdujeron asedios de castillos y los clanes tomaron protagonismo.",
  },
  {
    title: "Chronicle 2: Age of Splendor",
    description: "Más dungeons, nuevas zonas de caza, y mejoras gráficas que expandieron el mundo.",
  },
  {
    title: "Chronicle 3: Rise of Darkness",
    description: "Nuevas skills, jefes épicos, y la oscuridad empezaba a dominar Aden.",
  },
  {
    title: "Chronicle 4: Scions of Destiny",
    description: "Introducción de subclases, el sistema de nobleza, zonas como Rune y Godard, y el Grand Olympiad. Una crónica que marcó un antes y un después.",
  },
  {
    title: "High Five",
    description: "Balance de clases, contenido PvP y PvE optimizado, y la base para muchos servidores privados actuales.",
  },
];

function TimelineSection() {
  return (
    <section className="timeline-section" id="timeline">
      <h2>Crónicas del Lineage 2</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className={`timeline-item ${event.title.includes("High Five") ? "highlight" : ""}`}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;
