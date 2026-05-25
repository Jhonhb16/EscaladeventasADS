/* =====================================================
   CONFIGURACIÓN RÁPIDA  —  edita estos valores
   ===================================================== */
const CONFIG = {
  // Número de WhatsApp con código de país, SIN signos ni espacios.
  // Ej. México: "521234567890" — España: "34123456789"
  whatsapp: "000000000000",
  // Mensaje por defecto al pulsar los botones de WhatsApp.
  whatsappDefaultMsg: "Hola, quiero información sobre tus servicios",
};

/* ===================================================== */

(function () {
  "use strict";

  // --- Año dinámico en el footer ---
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Aplicar número de WhatsApp configurado a los enlaces ---
  const waBase = `https://wa.me/${CONFIG.whatsapp}`;
  const waDefault = `${waBase}?text=${encodeURIComponent(CONFIG.whatsappDefaultMsg)}`;
  ["whatsapp-link", "whatsapp-float"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = waDefault;
  });

  // --- Menú móvil ---
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // --- Animación reveal al hacer scroll ---
  const revealTargets = document.querySelectorAll(
    ".card, .step, .testimonial, .section-head, .about-media, .about-body, .hero-stats li"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("visible"));
  }

  // --- Formulario: arma mensaje y abre WhatsApp ---
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = new FormData(form);
      const name = data.get("name");
      const email = data.get("email");
      const service = data.get("service");
      const message = data.get("message");

      const text =
        `Hola, soy ${name}.\n` +
        `Email: ${email}\n` +
        `Servicio de interés: ${service}\n\n` +
        `${message}`;

      window.open(`${waBase}?text=${encodeURIComponent(text)}`, "_blank");
    });
  }
})();
