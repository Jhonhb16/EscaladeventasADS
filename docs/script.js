/* =====================================================
   CONFIGURACIÓN RÁPIDA
   ===================================================== */
const CONFIG = {
  // WhatsApp con código de país, solo dígitos.
  whatsapp: "573171165383",
  // Pega aquí tu enlace del VSL (YouTube o Vimeo). Deja "" para mostrar el placeholder.
  // Ej: "https://youtu.be/XXXXXXXXXXX" o "https://vimeo.com/123456789"
  vsl: "",
  // Captura de leads (Formspree). El ID está activo.
  formspreeId: "xgoqpdya",
  // Captura de leads en Google Sheet (Apps Script Web App).
  googleSheetUrl: "https://script.google.com/macros/s/AKfycbzx3-c3S0E1sZhaHKlPOAwIcUDTRTBy01fY3ZUtqIUfcrluPtq-M0yxZDHjb5DHV1-AbQ/exec",
};

(function () {
  "use strict";

  // --- Año en el footer ---
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- WhatsApp flotante con mensaje por defecto ---
  const waBase = `https://wa.me/${CONFIG.whatsapp}`;
  const waDefaultText = "Hola Jhon Mario, quiero info sobre cómo trabajamos juntos.";
  const floatEl = document.getElementById("whatsapp-float");
  if (floatEl) floatEl.href = `${waBase}?text=${encodeURIComponent(waDefaultText)}`;

  // --- VSL (YouTube / Vimeo) ---
  function vslEmbedUrl(url) {
    if (!url) return null;
    const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0&modestbranding=1`;
    const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;
    return null;
  }

  const vslPlayer = document.getElementById("vsl-player");
  const vslPlay = vslPlayer && vslPlayer.querySelector(".vsl-play");
  if (vslPlayer && CONFIG.vsl) {
    const embed = vslEmbedUrl(CONFIG.vsl);
    if (embed) {
      vslPlayer.classList.add("vsl-ready");
      const phText = vslPlayer.querySelector(".vsl-ph-text");
      if (phText) phText.remove();
      const yt = CONFIG.vsl.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
      if (yt) vslPlayer.style.backgroundImage = `url("https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg")`;
      if (vslPlay) {
        vslPlay.addEventListener("click", () => {
          const iframe = document.createElement("iframe");
          iframe.className = "vsl-iframe";
          iframe.src = embed;
          iframe.title = "Video";
          iframe.allow = "autoplay; fullscreen; picture-in-picture";
          iframe.allowFullscreen = true;
          vslPlayer.innerHTML = "";
          vslPlayer.appendChild(iframe);
        });
      }
    }
  }

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

  // --- Animación al hacer scroll ---
  const revealTargets = document.querySelectorAll(
    ".step, .testimonial, .section-head, .about-media, .about-body, .hero-stats li, .guarantee, .vsl-player, .capability, .case-card, .verticals-grid li, .offer-stack-card, .offer-side, .reason-why, .faq-item"
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

  // --- Formulario: guardar (Formspree + Google Sheet) + WhatsApp ---
  const form = document.getElementById("apply-form");
  const statusEl = document.getElementById("form-status");

  function setStatus(msg, kind) {
    if (!statusEl) return;
    statusEl.textContent = msg || "";
    statusEl.className = "form-status" + (kind ? " is-" + kind : "");
  }

  async function saveLead(d) {
    if (!CONFIG.formspreeId) return false;
    const res = await fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        name: d.get("name"),
        email: d.get("email"),
        website_or_ig: d.get("site") || "-",
        sells: d.get("sell"),
        monthly_revenue: d.get("revenue"),
        ad_budget: d.get("budget"),
        challenge: d.get("message"),
        _subject: `Nueva aplicación: ${d.get("name")}`,
      }),
    });
    return res.ok;
  }

  function saveToSheet(d) {
    if (!CONFIG.googleSheetUrl) return Promise.resolve();
    return fetch(CONFIG.googleSheetUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        date: new Date().toISOString(),
        name: d.get("name"),
        email: d.get("email"),
        website_or_ig: d.get("site") || "-",
        sells: d.get("sell"),
        monthly_revenue: d.get("revenue"),
        ad_budget: d.get("budget"),
        challenge: d.get("message"),
        lang: "es",
      }),
    }).catch(() => {});
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const d = new FormData(form);
      const text =
        `Hola Jhon Mario, estoy aplicando al mes gratis.\n` +
        `Nombre: ${d.get("name")}\n` +
        `Email: ${d.get("email")}\n` +
        `Web/IG: ${d.get("site") || "-"}\n` +
        `Vende: ${d.get("sell")}\n` +
        `Facturación: ${d.get("revenue")}\n` +
        `Presupuesto: ${d.get("budget")}\n\n` +
        `Reto: ${d.get("message")}`;
      const waUrl = `${waBase}?text=${encodeURIComponent(text)}`;

      const hasStore = CONFIG.formspreeId || CONFIG.googleSheetUrl;
      let saved = false;
      if (hasStore) {
        setStatus("Enviando tu aplicación…", "");
        const tasks = [saveToSheet(d)];
        if (CONFIG.formspreeId) {
          tasks.push(
            saveLead(d)
              .then((ok) => { if (ok) saved = true; })
              .catch(() => {})
          );
        }
        if (CONFIG.googleSheetUrl) saved = true;
        await Promise.all(tasks);
      }

      window.open(waUrl, "_blank");

      if (hasStore) {
        if (saved) {
          setStatus("¡Listo! Recibí tu aplicación. Se abrió WhatsApp; envía el mensaje para confirmar.", "ok");
          form.reset();
        } else {
          setStatus("Se abrió WhatsApp para enviar tu aplicación. Asegúrate de presionar enviar.", "err");
        }
      } else {
        setStatus("Se abrió WhatsApp — presiona enviar para mandar tu aplicación.", "ok");
      }
    });
  }
})();
