import React from "react";
import logoImg from "../assets/logo.jpg";
import "../styles/Header.css";

function Header() {

  const navigationLinks = [
    {
      label: "Inicio",
      href: "#inicio",
    },
    {
      label: "Servidores",
      href: "#servers",
    },
    {
      label: "Novedades",
      href: "#novedades",
    },
    {
      label: "Premium",
      href: "#vip",
    },
    {
      label: "Descargas",
      href: "#descargas",
    },
    {
      label: "Votá",
      href: "#votanos",
    },
    {
      label: "Staff",
      href: "#staff",
    },
    {
      label: "Contacto",
      href: "#redes",
    },
  ];


  return (

    <header className="site-header">


      <div className="container header-container">


        {/* LOGO */}

        <a
          href="#inicio"
          className="logo"
          aria-label="Volver al inicio de CiberNaka L2"
        >

          <img
            src={logoImg}
            alt="Logo de CiberNaka L2"
            className="logo-img"
          />

        </a>



        {/* NAVEGACIÓN PRINCIPAL */}

        <nav
          className="header-navigation"
          aria-label="Navegación principal"
        >


          <ul className="nav-links">


            {navigationLinks.map((link) => (

              <li key={link.href}>

                <a href={link.href}>
                  {link.label}
                </a>

              </li>

            ))}


          </ul>



          {/* BOTÓN STREAM */}

          <a
            href="https://cibernakastream.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="stream-link"
          >

            <span>
              🎮
            </span>

            Stream

          </a>



        </nav>


      </div>


    </header>

  );

}


export default Header;