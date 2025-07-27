// src/components/StaffSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/StaffSection.css"; // Assuming you have a CSS file for styling the staff section

const staffData = [
  {
    name: "Naka",
    role: "Game Master – Admin Principal",
    nickname: "Masters (en juego)",
    description:
      "El guardián del equilibrio en CiberNaka L2. Admin de ambos servidores, organizador de eventos, y mentor de cada batalla épica.",
    image: "/src/assets/gm-naka.jpg", // podés reemplazar con cualquier avatar o ilustración
  },
  {
    name: "Daniela",
    role: "Diseñadora, Soporte y Community Manager",
    nickname: "Gilraen / Nannys",
    description:
      "Diseñadora del sitio, gestora de contenido, y soporte fiel. Siempre lista para echar una mano... ¡o lanzar un hechizo!",
    image: "/src/assets/gm-daniela.jpg",
  },
];

const StaffSection = () => {
  return (
    <section id="staff" className="staff-section container">
      <h2 className="staff-title">Nuestro Staff</h2>
      <div className="staff-cards">
        {staffData.map((staff, index) => (
          <motion.div
            className="staff-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={staff.image} alt={staff.name} className="staff-img" />
            <h3>{staff.name}</h3>
            <p className="staff-nick">Alias: {staff.nickname}</p>
            <p>{staff.role}</p>
            <p className="staff-desc">{staff.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StaffSection;
