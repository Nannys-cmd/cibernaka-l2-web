// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/Footer.css"; // Assuming you have a CSS file for styling the footer 

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p>Gracias por formar parte de la comunidad de <strong>CiberNaka L2</strong>.</p>
        <p>Un mundo forjado en sombras, gloria y alianzas eternas.</p>
        <p>&copy; {new Date().getFullYear()} CiberNaka Games. Todos los derechos reservados.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;

