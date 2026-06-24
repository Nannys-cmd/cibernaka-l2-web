// src/components/PremiumSection.jsx

import React from "react";
import "../styles/PremiumSection.css";

function PremiumSection() {
  return (
    <section id="vip" className="vip-section">
      <h2>💎 Membresía Premium 💎</h2>

      <p className="vip-description">
        Ayudá a mantener CiberNaka L2 activo y obtené beneficios exclusivos
        para acelerar tu progreso.
      </p>

      <div className="vip-cards">
        <div className="vip-card">
          <h3>Premium Mensual</h3>

          <p className="vip-price">
            $2.000 <span>ARS</span>
          </p>

          <p className="vip-usd">🌎 U$S 2 Internacional</p>

          <p>30 días de membresía Premium</p>
        </div>

        <div className="vip-card featured">
          <h3>Premium Trimestral</h3>

          <p className="vip-price">
            $5.000 <span>ARS</span>
          </p>

          <p className="vip-usd">🌎 U$S 5 Internacional</p>

          <p>90 días de membresía Premium</p>

          <span className="vip-save">⭐ Mejor opción</span>
        </div>
      </div>

      <div className="vip-payment">
        <h3>🔥 Beneficios Premium</h3>

        <ul>
          <li>⚔️ Experiencia x2.5</li>
          <li>💰 Adena x2.5</li>
          <li>🎁 Drop x2.5</li>
          <li>💥 Spoil x2.5</li>
          <li>🚀 Progreso acelerado para jugadores activos</li>
          <li>⭐ Más progreso sin perder la esencia del servidor</li>
        </ul>

        <div className="vip-command">
          📜 Verificá tu estado Premium con el comando:

          <strong>.premium</strong>

          <p>
            Mostrará el tiempo restante de tu membresía y los beneficios activos.
          </p>
        </div>

        <h3>💳 Formas de Pago</h3>

        <h4>🇦🇷 Argentina</h4>

        <p>Realizá tu pago al siguiente alias:</p>

        <div className="vip-alias">
          ciber.naka
        </div>

        <h4>🌎 Internacional (PayPal)</h4>

        <p>
          Podés adquirir tu Premium mediante PayPal utilizando los siguientes
          enlaces:
        </p>

        <div className="paypal-buttons">
          <a
            href="https://www.paypal.me/CiberNakaL2/2"
            target="_blank"
            rel="noopener noreferrer"
            className="paypal-btn"
          >
            💎 Premium Mensual
            <span className="paypal-price">U$S 2</span>
          </a>

          <a
            href="https://www.paypal.me/CiberNakaL2/5"
            target="_blank"
            rel="noopener noreferrer"
            className="paypal-btn"
          >
            💎 Premium Trimestral
            <span className="paypal-price">U$S 5</span>
          </a>
        </div>

        <h3>📧 Confirmación</h3>

        <p>Luego enviá un correo a:</p>

        <div className="vip-mail">
          ciber.naka@outlook.com
        </div>

        <p>Indicando:</p>

        <ul>
          <li>Nombre de la cuenta</li>
          <li>Comprobante de pago</li>
          <li>Plan contratado</li>
        </ul>

        <p className="vip-note">
          * Los beneficios Premium se aplican a todos los personajes asociados
          a la cuenta registrada.
        </p>
      </div>
    </section>
  );
}

export default PremiumSection;
