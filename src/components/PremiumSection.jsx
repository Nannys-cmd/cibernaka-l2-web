// src/components/PremiumSection.jsx

import React from "react";
import "../styles/PremiumSection.css";

function PremiumSection() {
  const plans = [
    {
      title: "Premium Mensual",
      price: "$2.000",
      internationalPrice: "U$S 2",
      duration: "30 días de membresía Premium",
      paypalLink: "https://www.paypal.me/CiberNakaL2/2",
    },
    {
      title: "Premium Trimestral",
      price: "$5.000",
      internationalPrice: "U$S 5",
      duration: "90 días de membresía Premium",
      paypalLink: "https://www.paypal.me/CiberNakaL2/5",
      featured: true,
    },
  ];

  const benefits = [
    "⚔️ Experiencia x2.5",
    "💰 Adena x2.5",
    "🎁 Drop x2.5",
    "💥 Spoil x2.5",
    "🚀 Progreso acelerado para jugadores activos",
    "⭐ Más progreso sin perder la esencia del servidor",
  ];

  return (
    <section id="vip" className="vip-section">

      {/* Encabezado */}

      <div className="vip-header">

        <span className="section-kicker">
          💎 APOYÁ EL PROYECTO 💎
        </span>

        <h2>
          Membresía Premium
        </h2>

        <p className="vip-description">
          Ayudá a mantener CiberNaka L2 activo y obtené beneficios exclusivos
          para acelerar tu progreso.
        </p>

      </div>


      {/* Planes */}

      <div className="vip-cards">

        {plans.map((plan) => (

          <article
            className={`vip-card ${plan.featured ? "featured" : ""}`}
            key={plan.title}
          >

            {plan.featured && (
              <span className="vip-save">
                ⭐ MEJOR OPCIÓN
              </span>
            )}

            <h3>
              {plan.title}
            </h3>

            <p className="vip-price">
              {plan.price}
              <span> ARS</span>
            </p>

            <p className="vip-usd">
              🌎 {plan.internationalPrice} Internacional
            </p>

            <p className="vip-duration">
              {plan.duration}
            </p>

          </article>

        ))}

      </div>


      {/* Beneficios */}

      <div className="vip-content">

        <div className="vip-benefits">

          <h3>
            🔥 Beneficios Premium
          </h3>

          <ul>

            {benefits.map((benefit, index) => (

              <li key={index}>
                {benefit}
              </li>

            ))}

          </ul>

        </div>


        {/* Comando Premium */}

        <div className="vip-command">

          <h3>
            📜 Comando Premium
          </h3>

          <p>
            Verificá tu estado Premium dentro del juego utilizando:
          </p>

          <strong>
            .premium
          </strong>

          <p>
            El comando mostrará el tiempo restante de tu membresía y los
            beneficios activos.
          </p>

        </div>

      </div>


      {/* Formas de Pago */}

      <div className="vip-payment">

        <h3>
          💳 Formas de Pago
        </h3>


        {/* Argentina */}

        <div className="payment-method">

          <h4>
            🇦🇷 Argentina
          </h4>

          <p>
            Realizá tu pago al siguiente alias:
          </p>

          <div className="vip-alias">
            ciber.naka
          </div>

        </div>


        {/* Internacional */}

        <div className="payment-method">

          <h4>
            🌎 Internacional — PayPal
          </h4>

          <p>
            Podés adquirir tu Premium mediante PayPal utilizando los siguientes
            enlaces:
          </p>

          <div className="paypal-buttons">

            {plans.map((plan) => (

              <a
                href={plan.paypalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="paypal-btn"
                key={plan.title}
              >

                <span>
                  💎 {plan.title}
                </span>

                <span className="paypal-price">
                  {plan.internationalPrice}
                </span>

              </a>

            ))}

          </div>

        </div>

      </div>


      {/* Confirmación */}

      <div className="vip-confirmation">

        <h3>
          📧 Confirmación
        </h3>

        <p>
          Luego enviá un correo a:
        </p>

        <div className="vip-mail">
          ciber.naka@outlook.com
        </div>

        <p>
          Indicando:
        </p>

        <ul>
          <li>Nombre de la cuenta</li>
          <li>Comprobante de pago</li>
          <li>Plan contratado</li>
        </ul>

      </div>


      {/* Nota final */}

      <p className="vip-note">
        * Los beneficios Premium se aplican a todos los personajes asociados
        a la cuenta registrada.
      </p>

    </section>
  );
}

export default PremiumSection;