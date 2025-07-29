// src/components/StatusBar.jsx
import React, { useEffect, useState } from "react";
import "../styles/StatusBar.css";

const StatusBar = () => {
  const [statusHTML, setStatusHTML] = useState("Cargando estado...");

  useEffect(() => {
    fetch("https://cibernaka-status.onrender.com/status.php", {

      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((res) => res.text())
      .then((html) => {
        setStatusHTML(html);
      })
      .catch((err) => {
        setStatusHTML("<p style='color: red;'>No se pudo cargar el estado</p>");
        console.error(err);
      });
  }, []);

  return (
    <section className="server-status-section">
      <h2 className="typewriter-glow">Estado de los Servidores</h2>
      <div
        className="status-content"
        dangerouslySetInnerHTML={{ __html: statusHTML }}
      />
    </section>
  );
};

export default StatusBar;
