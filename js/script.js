/* ============================================================
   BOM GOURMET — interações compartilhadas
   ============================================================ */
(function () {
  "use strict";

  /* ---- Imagens (fotografia real de gastronomia) ---- */
  const U = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w || 900}&q=72`;
  const IMG = {
    // manifesto / videocase — impacto, comunidade, evento (não só comida)
    "Vídeo manifesto (YouTube)": "1511795409834-ef04bbd61622",
    // PORTFÓLIO — equilíbrio projeto/negócio + comida
    "Festival Bom Gourmet": "1414235077428-338989a2e8c0",   // experiência / ambiente
    "Prêmio Bom Gourmet": "1543007630-9710e4a00a20",         // cerimônia / palco (negócio)
    "Circuito de Inverno": "1510812431401-41d2bd2722f3",     // jantar / vinho
    "Circuito de Verão": "1530062845289-9109b2c9c868",       // brinde / social
    "CWBurguer Fest": "1568901346375-23c9450c58cd",          // comida (cabe aqui)
    "FoodCo": "1556761175-b413da4baf72",                     // reunião B2B / operadores
    "Vinada Cultural": "1559523161-0fc0d8b38a7a",            // vinho / cultura
    "Casa Bom Gourmet": "1517248135467-4c7edcad34c4",        // espaço / ambiente
    "Bom Gourmet RS": "1540575467063-178a50c2df87",          // evento / público (expansão)
    // CONTEÚDO — editorial + comida
    "Reportagem": "1556910103-1c02745aae4d",                 // chef / bastidor
    "Tendências": "1556761175-b413da4baf72",                 // mercado / negócio
    "Guia": "1467003909585-2f8a72700288",                    // prato (guia)
    // FEED SOCIAL / GOURMET LOVERS
    "Reels Festival": "1556910103-1c02745aae4d",
    "Post novo restaurante": "1517248135467-4c7edcad34c4",
    "Reels receita": "1565299624946-b28f40a0ae38",
    "Post FoodCo": "1556761175-b413da4baf72",
    "Reels drink": "1530062845289-9109b2c9c868",
    "Post guia": "1467003909585-2f8a72700288",
    // CONTEÚDO QUE INSPIRA (atemporal)
    "Inspira historia": "1414235077428-338989a2e8c0",
    "Inspira tecnicas": "1556910103-1c02745aae4d",
    "Inspira sustentabilidade": "1540189549336-e6e99c3679fe",
    "Inspira vinhos": "1510812431401-41d2bd2722f3",
    // FESTIVAL (página interna)
    "Imagem de capa do Festival": "1414235077428-338989a2e8c0",
    "Aftermovie Festival": "1511795409834-ef04bbd61622",
    "Capa portfólio": "1543007630-9710e4a00a20",
    "Foto destaque": "1492684223066-81342ee5ff30",           // festival / público
    "Prato": "1551218808-94e220e084d2",
    "Ambiente": "1517248135467-4c7edcad34c4",
    "Público": "1511795409834-ef04bbd61622",
  };
  const PORTRAITS = [
    "1494790108377-be9c29b29330",
    "1500648767791-00dcc994a43e",
    "1438761681033-6461ffad8d80",
    "1472099645785-5658abf4ff4e",
  ];
  const FALLBACK = "1504674900247-0877df9cc836";
  let pIdx = 0;
  document.querySelectorAll(".ph[data-ph]").forEach((el) => {
    const key = el.getAttribute("data-ph");
    let id, w = 900;
    if (key === "" || el.classList.contains("avatar")) {
      id = PORTRAITS[pIdx++ % PORTRAITS.length];
      w = 300;
    } else {
      id = IMG[key] || FALLBACK;
    }
    el.style.backgroundImage = `url('${U(id, w)}')`;
  });

  /* ---- Menu mobile ---- */
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (burger && mobileMenu) {
    const toggle = () => {
      const open = mobileMenu.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    };
    burger.addEventListener("click", toggle);
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        burger.classList.remove("is-open");
        document.body.style.overflow = "";
      })
    );
  }

  /* ---- Tabs de cases ---- */
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const tabs = group.querySelectorAll(".cases__tab");
    const panels = group.querySelectorAll(".case-panel");
    tabs.forEach((tab) =>
      tab.addEventListener("click", () => {
        const id = tab.dataset.tab;
        tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
        panels.forEach((p) => p.classList.toggle("is-active", p.dataset.panel === id));
      })
    );
  });

  /* ---- Carrossel de 4 destaques do hero (rotação infinita) ---- */
  document.querySelectorAll("[data-showcase]").forEach((sc) => {
    const track = sc.querySelector(".showcase__track");
    if (!track || track.children.length < 2) return;
    const bar = sc.querySelector(".showcase__bar i");
    const GAP = 10, INTERVAL = 3200, EASE = "transform .6s cubic-bezier(.65,0,.35,1)";
    let timer, busy = false;
    const stepW = () => track.firstElementChild.getBoundingClientRect().width + GAP;

    const runBar = () => {
      if (!bar) return;
      bar.style.transition = "none";
      bar.style.width = "0%";
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          bar.style.transition = "width " + INTERVAL + "ms linear";
          bar.style.width = "100%";
        })
      );
    };
    const next = () => {
      if (busy) return;
      busy = true;
      track.style.transition = EASE;
      track.style.transform = "translateX(-" + stepW() + "px)";
    };
    const prev = () => {
      if (busy) return;
      busy = true;
      track.insertBefore(track.lastElementChild, track.firstElementChild);
      track.style.transition = "none";
      track.style.transform = "translateX(-" + stepW() + "px)";
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          track.style.transition = EASE;
          track.style.transform = "translateX(0)";
        })
      );
    };
    track.addEventListener("transitionend", (e) => {
      if (e.propertyName !== "transform" || !busy) return;
      if (track.style.transform.indexOf("-") !== -1) {
        track.style.transition = "none";
        track.appendChild(track.firstElementChild);
        track.style.transform = "translateX(0)";
      }
      busy = false;
    });

    const start = () => { clearInterval(timer); runBar(); timer = setInterval(() => { next(); runBar(); }, INTERVAL); };
    sc.querySelector(".sc-next")?.addEventListener("click", (e) => { e.preventDefault(); next(); start(); });
    sc.querySelector(".sc-prev")?.addEventListener("click", (e) => { e.preventDefault(); prev(); start(); });
    sc.addEventListener("mouseenter", () => { clearInterval(timer); if (bar) bar.style.transition = "none"; });
    sc.addEventListener("mouseleave", start);
    start();
  });

  /* ---- Filtro do calendário por região ---- */
  const filterbar = document.querySelector("[data-filter]");
  if (filterbar) {
    const events = document.querySelectorAll("[data-agenda] .event");
    filterbar.querySelectorAll(".filter-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        const region = btn.dataset.region;
        filterbar.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
        events.forEach((ev) => {
          const show = region === "all" || ev.dataset.region === region;
          ev.classList.toggle("is-hidden", !show);
        });
      })
    );
  }

  /* ---- Filtro de reels por conta ---- */
  const acctBar = document.querySelector("[data-accounts]");
  if (acctBar) {
    const reels = document.querySelectorAll("[data-reels] .reel");
    acctBar.querySelectorAll(".acct-chip").forEach((btn) =>
      btn.addEventListener("click", () => {
        const acct = btn.dataset.acct;
        acctBar.querySelectorAll(".acct-chip").forEach((b) => b.classList.toggle("is-active", b === btn));
        reels.forEach((r) => r.classList.toggle("is-hidden", !(acct === "all" || r.dataset.acct === acct)));
      })
    );
  }

  /* ---- Filtro de notícias por produto ---- */
  const newsBar = document.querySelector("[data-news-filter]");
  if (newsBar) {
    const posts = document.querySelectorAll("[data-news] .post");
    newsBar.querySelectorAll(".filter-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        const prod = btn.dataset.product;
        newsBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
        posts.forEach((p) => p.classList.toggle("is-hidden", !(prod === "all" || p.dataset.product === prod)));
      })
    );
  }

  /* ---- Filtro de cases por formato ---- */
  const casesBar = document.querySelector("[data-cases-filter]");
  if (casesBar) {
    const items = document.querySelectorAll("[data-cases] .post");
    casesBar.querySelectorAll(".filter-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        const fmt = btn.dataset.format;
        casesBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
        items.forEach((it) => it.classList.toggle("is-hidden", !(fmt === "all" || it.dataset.format === fmt)));
      })
    );
  }

  /* ---- Formulário comercial ---- */
  const form = document.getElementById("commercialForm");
  const success = document.getElementById("commercialSuccess");
  if (form && success) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // Aqui entraria o envio real (e-mail, CRM, planilha, etc.)
      form.style.display = "none";
      success.classList.add("is-visible");
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* ---- Compartilhar agenda ---- */
  document.querySelectorAll("[data-share-agenda]").forEach((btn) => {
    const label = btn.innerHTML;
    btn.addEventListener("click", async () => {
      const url = location.href.split("#")[0] + "#calendario";
      const data = { title: "Agenda Bom Gourmet", text: "Confira a agenda gastronômica do Bom Gourmet 🍽️", url };
      if (navigator.share) {
        try { await navigator.share(data); } catch (e) { /* cancelado */ }
      } else {
        try {
          await navigator.clipboard.writeText(url);
          btn.textContent = "Link copiado!";
          setTimeout(() => { btn.innerHTML = label; }, 2000);
        } catch (e) { window.prompt("Copie o link da agenda:", url); }
      }
    });
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq-q").forEach((q) =>
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      item.classList.toggle("is-open");
    })
  );

  /* ---- Contagem dos big numbers ---- */
  const counters = document.querySelectorAll("[data-count]");
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    const dur = 1400;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      const shown = target % 1 === 0 ? Math.floor(val) : val.toFixed(1);
      el.textContent = prefix + shown.toLocaleString("pt-BR") + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  /* ---- Reveal on scroll + dispara contadores ---- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        if (e.target.hasAttribute("data-count")) animate(e.target);
        io.unobserve(e.target);
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal, [data-count]").forEach((el) => io.observe(el));

  /* ---- Sombra do header ao rolar ---- */
  const header = document.querySelector(".header");
  if (header) {
    const onScroll = () =>
      header.style.boxShadow = window.scrollY > 8 ? "0 6px 24px -16px rgba(28,24,23,.5)" : "none";
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
