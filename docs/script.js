/* =====================================================
   QUICK CONFIG  /  CONFIGURACIÓN RÁPIDA
   ===================================================== */
const CONFIG = {
  // WhatsApp number with country code, digits only.
  whatsapp: "573171165383",
  // Default language: "en" or "es".
  defaultLang: "en",
  // Paste your VSL link here (YouTube or Vimeo). Leave "" to show the placeholder.
  // Examples: "https://youtu.be/XXXXXXXXXXX" or "https://vimeo.com/123456789"
  vsl: "",
  // Lead backup + storage (recommended). Every application is also saved here and
  // emailed to you, so you never lose a lead — even if they don't finish on WhatsApp.
  // 1) Create a free form at https://formspree.io  2) Paste only the ID below.
  //    From the endpoint https://formspree.io/f/abcdwxyz  ->  use "abcdwxyz".
  // Leave "" to keep WhatsApp-only (nothing is stored).
  formspreeId: "xgoqpdya",
};

/* =====================================================
   TRANSLATIONS  /  TRADUCCIONES
   ===================================================== */
const I18N = {
  en: {
    doc_title: "Jhon Mario Hernandez | Free Month of Ad Management for US Businesses",
    nav_offer: "The Offer", nav_proof: "Results", nav_how: "How it works", nav_guarantee: "Guarantee", nav_about: "About", nav_apply: "Apply free",

    hero_eyebrow: "Free 30-day trial · For serious US businesses",
    hero_title: 'Get a full month of ad management <span class="gradient-text">100% free</span>',
    hero_subtitle: "Your business doesn't need more traffic. It needs better marketing.",
    hero_lead: "I build and manage profitable Meta &amp; Google Ads campaigns for US businesses. Try me free for 30 days — if we're a fit, we scale together. Spots are limited.",
    hero_cta1: "Claim my free month", hero_cta2: "Watch the video",
    chip1: "days completely free", chip2: "results guarantee", chip3: "risk for you",

    vsl_eyebrow: "Watch this first · 2 min",
    vsl_title: 'How I get you more customers <span class="gradient-text">without the guesswork</span>',
    vsl_desc: "Press play to see exactly how the free month works — and whether we're a fit.",
    vsl_ph: "Your VSL goes here. Send me your YouTube or Vimeo link and I'll embed it.",
    vsl_cta: "I'm in — apply now",

    trust_label: "Platforms I work with",
    cert_label: "Certified in",

    offer_eyebrow: "The offer",
    offer_title: 'Everything you get in your <span class="gradient-text">free month</span>',
    offer_desc: "A complete done-for-you advertising system — at no cost for your first 30 days.",
    o1_t: "Account &amp; funnel audit", o1_d: "Full review of your current ads, tracking and funnel to find what's leaking money.",
    o2_t: "Custom ad strategy", o2_d: "A tailored plan with goals, audiences, budget and the funnel to hit them.",
    o3_t: "Campaign build &amp; launch", o3_d: "Meta &amp; Google campaigns, creatives, copy, pixels and conversion tracking — done for you.",
    o4_t: "Daily optimization", o4_d: "I manage and optimize your campaigns by ROAS and cost per acquisition.",
    o5_t: "Clear weekly reporting", o5_d: "Simple reports so you always know what's working and where every dollar goes.",
    offer_free: "All of this — free for 30 days.",
    offer_note: "No upfront fee. You only cover your own ad spend.",
    offer_cta: "Claim my free month",

    proof_eyebrow: "Real results",
    proof_title: 'Numbers that <span class="gradient-text">speak for themselves</span>',
    proof_desc: "Add your own ad-account screenshots and client results here — proof converts better than promises.",
    proof_slot: "Your result screenshot",
    proof_cap1: "e.g. ROAS / sales from an ad account",
    proof_cap2: "e.g. cost per lead reduction",
    proof_cap3: "e.g. revenue growth over time",
    proof_logos: "Trusted by",
    logo_slot: "Logo",

    for_eyebrow: "Qualification",
    for_title: 'Is this <span class="gradient-text">for you</span>?',
    for_desc: "I only take on a handful of clients to keep results high. Here's who I can help.",
    fit_yes_t: "This is for you if…",
    fit_yes_1: "You have an established business with a product or service that already sells.",
    fit_yes_2: "You're ready to invest in ad spend to grow after your free month.",
    fit_yes_3: "You want a partner who's accountable to results, not vanity metrics.",
    fit_no_t: "This is NOT for you if…",
    fit_no_1: "You're brand new with no clear offer or way to fulfill orders.",
    fit_no_2: "You're only looking for the cheapest option, not the best return.",
    fit_no_3: "You can't sustain an ad budget once the free month ends.",

    g_eyebrow: "My results guarantee",
    g_title: 'You win, or I keep working <span class="gradient-text">for free</span>',
    g_text: "If you don't see measurable results from our campaigns within the period we agree on, I keep working at no cost until you do. The risk is mine, not yours — that's how confident I am.",
    g_cta: "Apply with zero risk",

    how_eyebrow: "How it works",
    how_title: 'From application to <span class="gradient-text">results</span>',
    how_desc: "A simple, transparent process to get your free month started.",
    s1_t: "Apply", s1_d: "Fill out the short application below so I can see if we're a fit.",
    s2_t: "Strategy call", s2_d: "We hop on a quick call to map out your goals and plan.",
    s3_t: "Your free month", s3_d: "I build, launch and manage your campaigns at no cost for 30 days.",
    s4_t: "Scale together", s4_d: "Love the results? We continue and scale what's working.",

    about_badge: "Taking on new clients",
    about_eyebrow: "About me",
    about_title: 'Strategy + data = <span class="gradient-text">sales</span>',
    about_p1: "I'm <strong>Jhon Mario Hernandez</strong>, a digital advertising specialist who helps US businesses turn ad spend into real customers — with profitable campaigns and decisions driven by data.",
    about_p2: "My approach blends creative that connects with rigorous analysis, so every dollar you invest works as hard as possible.",
    about_li1: "Campaigns built around return on investment (ROAS)",
    about_li2: "Clear reporting and constant communication",
    about_li3: "Strategies tailored to your business and budget",
    about_cta: "Start my free month",

    t_eyebrow: "Testimonials",
    t_title: 'What clients <span class="gradient-text">say</span>',
    t_desc: "Replace these examples with real client testimonials.",
    t1_q: '"We tripled our online sales in 3 months. The campaigns are finally profitable and I understand where every dollar goes."', t1_r: "Fashion e-commerce",
    t2_q: '"We went from no leads to a full calendar. The funnel and ads run on autopilot."', t2_r: "Professional services",
    t3_q: '"Professional, clear with reporting, always improving. We cut our cost per sale in half."', t3_r: "Local business",

    apply_eyebrow: "Apply now · Limited spots",
    apply_title: 'Apply for your <span class="gradient-text">free month</span>',
    apply_desc: "I personally review every application and only accept a few clients each month. Tell me about your business below.",
    apply_perk1: "30 days of ad management, free",
    apply_perk2: "Results guarantee",
    apply_perk3: "No long-term contract to start",

    f_name: "Your name", f_name_ph: "Full name",
    f_email: "Email", f_email_ph: "you@email.com",
    f_site: "Website or Instagram", f_site_ph: "yourbusiness.com / @handle",
    f_sell: "What do you sell?", f_sell_ph: "Product or service",
    f_rev: "Monthly revenue", f_rev1: "Under $10k / month", f_rev2: "$10k – $50k / month", f_rev3: "$50k – $100k / month", f_rev4: "$100k+ / month",
    f_bud: "Monthly ad budget you can invest", f_bud0: "Not sure yet", f_bud1: "$500 – $1k / month", f_bud2: "$1k – $5k / month", f_bud3: "$5k+ / month",
    f_msg: "Your biggest marketing challenge", f_msg_ph: "Tell me what you want to achieve",
    f_submit: "Send my application", f_note: "Your application is saved and WhatsApp opens so you can send it to me.",
    f_sending: "Sending your application…",
    f_ok: "Got it — I received your application. WhatsApp opened; send the message to confirm.",
    f_err: "WhatsApp opened to send your application. We couldn't save a backup, so please be sure to hit send.",
    f_wa: "WhatsApp opened — hit send to deliver your application.",

    footer_rights: "All rights reserved.", footer_cta: "Apply free",

    wa_default: "Hi Jhon Mario, I'd like info about the free month of ad management.",
    msg_greeting: "Hi Jhon Mario, I'm applying for the free month.",
    msg_name: "Name", msg_email: "Email", msg_site: "Website/IG", msg_sell: "Sells", msg_revenue: "Revenue", msg_budget: "Ad budget", msg_challenge: "Challenge",
  },

  es: {
    doc_title: "Jhon Mario Hernandez | Un mes gratis de gestión de anuncios para negocios",
    nav_offer: "La oferta", nav_proof: "Resultados", nav_how: "Cómo funciona", nav_guarantee: "Garantía", nav_about: "Sobre mí", nav_apply: "Aplicar gratis",

    hero_eyebrow: "Prueba gratis de 30 días · Para negocios serios de USA",
    hero_title: 'Recibe un mes completo de gestión de anuncios <span class="gradient-text">100% gratis</span>',
    hero_subtitle: "Tu negocio no necesita más tráfico, necesita mejorar su Marketing.",
    hero_lead: "Creo y gestiono campañas rentables de Meta y Google Ads. Pruébame gratis durante 30 días: si encajamos, escalamos juntos. Los cupos son limitados.",
    hero_cta1: "Quiero mi mes gratis", hero_cta2: "Ver el video",
    chip1: "días totalmente gratis", chip2: "garantía de resultados", chip3: "riesgo para ti",

    vsl_eyebrow: "Mira esto primero · 2 min",
    vsl_title: 'Cómo consigo más clientes para ti <span class="gradient-text">sin adivinar</span>',
    vsl_desc: "Dale play para ver exactamente cómo funciona el mes gratis — y si encajamos.",
    vsl_ph: "Aquí va tu VSL. Envíame tu enlace de YouTube o Vimeo y lo incrusto.",
    vsl_cta: "Me apunto — aplicar ahora",

    trust_label: "Plataformas con las que trabajo",
    cert_label: "Certificado en",

    offer_eyebrow: "La oferta",
    offer_title: 'Todo lo que recibes en tu <span class="gradient-text">mes gratis</span>',
    offer_desc: "Un sistema de publicidad completo y hecho por mí — sin costo durante tus primeros 30 días.",
    o1_t: "Auditoría de cuenta y embudo", o1_d: "Revisión completa de tus anuncios, seguimiento y embudo para detectar dónde se fuga el dinero.",
    o2_t: "Estrategia de anuncios a medida", o2_d: "Un plan personalizado con objetivos, audiencias, presupuesto y el embudo para lograrlos.",
    o3_t: "Creación y lanzamiento de campañas", o3_d: "Campañas en Meta y Google, creativos, copys, píxeles y seguimiento de conversiones — hechos por mí.",
    o4_t: "Optimización diaria", o4_d: "Gestiono y optimizo tus campañas por ROAS y costo por adquisición.",
    o5_t: "Reportes semanales claros", o5_d: "Reportes sencillos para que siempre sepas qué funciona y a dónde va cada dólar.",
    offer_free: "Todo esto — gratis durante 30 días.",
    offer_note: "Sin cuota inicial. Solo cubres tu propia inversión publicitaria.",
    offer_cta: "Quiero mi mes gratis",

    proof_eyebrow: "Resultados reales",
    proof_title: 'Números que <span class="gradient-text">hablan por sí solos</span>',
    proof_desc: "Agrega aquí tus capturas de cuentas publicitarias y resultados de clientes — la prueba convierte mejor que las promesas.",
    proof_slot: "Tu captura de resultados",
    proof_cap1: "ej. ROAS / ventas de una cuenta publicitaria",
    proof_cap2: "ej. reducción del costo por lead",
    proof_cap3: "ej. crecimiento de ingresos en el tiempo",
    proof_logos: "Confían en mí",
    logo_slot: "Logo",

    for_eyebrow: "Calificación",
    for_title: '¿Es esto <span class="gradient-text">para ti</span>?',
    for_desc: "Solo acepto a unos pocos clientes para mantener los resultados altos. Esto es a quién puedo ayudar.",
    fit_yes_t: "Esto es para ti si…",
    fit_yes_1: "Tienes un negocio establecido con un producto o servicio que ya vende.",
    fit_yes_2: "Estás listo para invertir en publicidad y crecer después de tu mes gratis.",
    fit_yes_3: "Quieres un aliado responsable de los resultados, no de métricas vanidosas.",
    fit_no_t: "Esto NO es para ti si…",
    fit_no_1: "Apenas empiezas y no tienes una oferta clara ni cómo cumplir los pedidos.",
    fit_no_2: "Solo buscas la opción más barata, no el mejor retorno.",
    fit_no_3: "No puedes sostener un presupuesto de anuncios cuando termine el mes gratis.",

    g_eyebrow: "Mi garantía de resultados",
    g_title: 'Tú ganas, o sigo trabajando <span class="gradient-text">gratis</span>',
    g_text: "Si no ves resultados medibles de nuestras campañas en el plazo que acordemos, sigo trabajando sin costo hasta que los veas. El riesgo es mío, no tuyo — así de seguro estoy.",
    g_cta: "Aplica sin ningún riesgo",

    how_eyebrow: "Cómo funciona",
    how_title: 'De la aplicación a los <span class="gradient-text">resultados</span>',
    how_desc: "Un proceso simple y transparente para empezar tu mes gratis.",
    s1_t: "Aplica", s1_d: "Completa la breve aplicación de abajo para ver si encajamos.",
    s2_t: "Llamada de estrategia", s2_d: "Hacemos una llamada rápida para definir tus objetivos y el plan.",
    s3_t: "Tu mes gratis", s3_d: "Creo, lanzo y gestiono tus campañas sin costo durante 30 días.",
    s4_t: "Escalamos juntos", s4_d: "¿Te encantan los resultados? Continuamos y escalamos lo que funciona.",

    about_badge: "Aceptando nuevos clientes",
    about_eyebrow: "Sobre mí",
    about_title: 'Estrategia + datos = <span class="gradient-text">ventas</span>',
    about_p1: "Soy <strong>Jhon Mario Hernandez</strong>, especialista en publicidad digital que ayuda a negocios a convertir su inversión en anuncios en clientes reales — con campañas rentables y decisiones basadas en datos.",
    about_p2: "Mi enfoque combina creativos que conectan con un análisis riguroso, para que cada dólar que inviertas trabaje al máximo.",
    about_li1: "Campañas orientadas al retorno de inversión (ROAS)",
    about_li2: "Reportes claros y comunicación constante",
    about_li3: "Estrategias adaptadas a tu negocio y presupuesto",
    about_cta: "Empezar mi mes gratis",

    t_eyebrow: "Testimonios",
    t_title: 'Lo que dicen mis <span class="gradient-text">clientes</span>',
    t_desc: "Reemplaza estos ejemplos con testimonios reales de clientes.",
    t1_q: '"Triplicamos las ventas online en 3 meses. Las campañas por fin son rentables y entiendo a dónde va cada dólar."', t1_r: "E-commerce de moda",
    t2_q: '"Pasamos de no tener leads a llenar la agenda. El embudo y los anuncios funcionan en automático."', t2_r: "Servicios profesionales",
    t3_q: '"Profesional, claro con los reportes y siempre mejorando. Bajamos el costo por venta a la mitad."', t3_r: "Negocio local",

    apply_eyebrow: "Aplica ahora · Cupos limitados",
    apply_title: 'Aplica para tu <span class="gradient-text">mes gratis</span>',
    apply_desc: "Reviso personalmente cada aplicación y solo acepto a unos pocos clientes al mes. Cuéntame sobre tu negocio.",
    apply_perk1: "30 días de gestión de anuncios, gratis",
    apply_perk2: "Garantía de resultados",
    apply_perk3: "Sin contrato a largo plazo para empezar",

    f_name: "Tu nombre", f_name_ph: "Nombre completo",
    f_email: "Email", f_email_ph: "tu@email.com",
    f_site: "Sitio web o Instagram", f_site_ph: "tunegocio.com / @usuario",
    f_sell: "¿Qué vendes?", f_sell_ph: "Producto o servicio",
    f_rev: "Ingresos mensuales", f_rev1: "Menos de $10k / mes", f_rev2: "$10k – $50k / mes", f_rev3: "$50k – $100k / mes", f_rev4: "$100k+ / mes",
    f_bud: "Presupuesto mensual de anuncios que puedes invertir", f_bud0: "Aún no estoy seguro", f_bud1: "$500 – $1k / mes", f_bud2: "$1k – $5k / mes", f_bud3: "$5k+ / mes",
    f_msg: "Tu mayor reto de marketing", f_msg_ph: "Cuéntame qué quieres lograr",
    f_submit: "Enviar mi aplicación", f_note: "Tu aplicación queda guardada y se abre WhatsApp para que me la envíes.",
    f_sending: "Enviando tu aplicación…",
    f_ok: "¡Listo! Recibí tu aplicación. Se abrió WhatsApp; envía el mensaje para confirmar.",
    f_err: "Se abrió WhatsApp para enviar tu aplicación. No pudimos guardar una copia, así que asegúrate de presionar enviar.",
    f_wa: "Se abrió WhatsApp — presiona enviar para mandar tu aplicación.",

    footer_rights: "Todos los derechos reservados.", footer_cta: "Aplicar gratis",

    wa_default: "Hola Jhon Mario, quiero info sobre el mes gratis de gestión de anuncios.",
    msg_greeting: "Hola Jhon Mario, estoy aplicando para el mes gratis.",
    msg_name: "Nombre", msg_email: "Email", msg_site: "Web/IG", msg_sell: "Vende", msg_revenue: "Ingresos", msg_budget: "Presupuesto", msg_challenge: "Reto",
  },
};

/* ===================================================== */

(function () {
  "use strict";

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const waBase = `https://wa.me/${CONFIG.whatsapp}`;
  let lang = localStorage.getItem("site_lang") || CONFIG.defaultLang;
  if (!I18N[lang]) lang = "en";

  function applyLang(next) {
    lang = I18N[next] ? next : "en";
    const dict = I18N[lang];
    localStorage.setItem("site_lang", lang);
    document.documentElement.lang = lang;
    if (dict.doc_title) document.title = dict.doc_title;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const v = dict[el.dataset.i18nPh];
      if (v != null) el.placeholder = v;
    });
    document.querySelectorAll(".lang-btn").forEach((b) =>
      b.classList.toggle("active", b.dataset.lang === lang)
    );

    const waDefault = `${waBase}?text=${encodeURIComponent(dict.wa_default)}`;
    const floatEl = document.getElementById("whatsapp-float");
    if (floatEl) floatEl.href = waDefault;
  }

  document.querySelectorAll(".lang-btn").forEach((b) =>
    b.addEventListener("click", () => applyLang(b.dataset.lang))
  );

  applyLang(lang);

  // --- VSL player (YouTube / Vimeo) ---
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

  // --- Mobile menu ---
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

  // --- Scroll reveal ---
  const revealTargets = document.querySelectorAll(
    ".offer-list li, .fit-card, .step, .testimonial, .section-head, .about-media, .about-body, .hero-stats li, .guarantee, .vsl-player, .proof-item, .logos-row"
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

  // --- Application form -> save (Formspree) + WhatsApp ---
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
        _subject: `New application: ${d.get("name")}`,
      }),
    });
    return res.ok;
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const d = new FormData(form);
      const m = I18N[lang];
      const text =
        `${m.msg_greeting}\n` +
        `${m.msg_name}: ${d.get("name")}\n` +
        `${m.msg_email}: ${d.get("email")}\n` +
        `${m.msg_site}: ${d.get("site") || "-"}\n` +
        `${m.msg_sell}: ${d.get("sell")}\n` +
        `${m.msg_revenue}: ${d.get("revenue")}\n` +
        `${m.msg_budget}: ${d.get("budget")}\n\n` +
        `${m.msg_challenge}: ${d.get("message")}`;
      const waUrl = `${waBase}?text=${encodeURIComponent(text)}`;

      let saved = false;
      if (CONFIG.formspreeId) {
        setStatus(m.f_sending, "");
        try {
          saved = await saveLead(d);
        } catch (err) {
          saved = false;
        }
      }

      window.open(waUrl, "_blank");

      if (CONFIG.formspreeId) {
        if (saved) {
          setStatus(m.f_ok, "ok");
          form.reset();
        } else {
          setStatus(m.f_err, "err");
        }
      } else {
        setStatus(m.f_wa, "ok");
      }
    });
  }
})();
