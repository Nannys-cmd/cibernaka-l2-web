// src/components/StaffSection.jsx

import React from "react";
import { motion } from "framer-motion";
import "../styles/StaffSection.css";

const staffData = [
  {
    id: 1,
    name: "Naka",
    role: "Game Master – Admin Principal",
    nickname: "Masters (en juego)",
    description:
      "El guardián del equilibrio en CiberNaka L2. Admin de ambos servidores, organizador de eventos y mentor de cada batalla épica.",
    image: "gm-naka.jpg",
  },

  {
    id: 2,
    name: "Nannys",
    role: "Diseñadora, Soporte y Community Manager",
    nickname: "Gilraen / Nannys",
    description:
      "Diseñadora del sitio, gestora de contenido y soporte de la comunidad. Siempre lista para echar una mano... ¡o lanzar un hechizo!",
    image: "gm-daniela.jpg",
  },
];

function StaffSection() {
  return (
    <section
      id="staff"
      className="staff-section container"
    >

      {/* Encabezado */}

      <div className="staff-header">

        <span className="section-kicker">
          🛡️ DETRÁS DE LA COMUNIDAD 🛡️
        </span>

        <h2 className="staff-title">
          Nuestro Staff
        </h2>

        <p>
          Las personas que trabajan detrás de CiberNaka L2 para mantener
          viva la comunidad.
        </p>

      </div>


      {/* Tarjetas */}

      <div className="staff-cards">

        {staffData.map((staff, index) => (

          <motion.article
            className="staff-card"
            key={staff.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="staff-image-container">

              <img
                src={staff.image}
                alt={`Imagen de ${staff.name}`}
                className="staff-img"
              />

            </div>


            <div className="staff-content">

              <h3>
                {staff.name}
              </h3>

              <p className="staff-nick">
                Alias: {staff.nickname}
              </p>

              <p className="staff-role">
                {staff.role}
              </p>

              <p className="staff-desc">
                {staff.description}
              </p>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}

export default StaffSection;