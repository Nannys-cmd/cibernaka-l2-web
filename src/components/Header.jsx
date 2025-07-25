// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header>
      <div className="container header-container">
        <h1 className="logo">CiberNaka L2</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#descargas">Descargas</a></li>
            <li><a href="#votanos">Votá</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
