// src/components/Header.jsx
import React from "react";
import logoImg from "../assets/logo.jpg";
import "../styles/Header.css"; // Assuming you have a CSS file for styling the header

function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <img src={logoImg} alt="CiberNaka L2 Logo" className="logo-img" />
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servers">Servidores</a>
            </li>
            <li>
              <a href="#vip">Premium</a>
            </li>
            <li>
              <a href="#descargas">Descargas</a>
            </li>
            <li>
              <a href="#votanos">Votá</a>
            </li>
            <li>
              <a href="#redes">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
