/* Protótipos V1/V2/V3 — slider do hero, rodapé e seletor de versões */
(function () {
  /* Modo teste cego: link com ?t=1 esconde a barra de protótipo e o seletor,
     para envio externo sem viés. Ex.: v2.html?t=1 */
  const MODO_TESTE = new URLSearchParams(location.search).has("t");
  if (MODO_TESTE) {
    document.querySelector(".proto-bar")?.remove();
    // mantém o modo nos links internos da própria página
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href");
      if (href && !href.startsWith("#") && !href.startsWith("http") && !href.includes("?")) {
        a.setAttribute("href", href + "?t=1");
      }
    }, true);
  }
  /* ---- Hero slider (fade + autoplay) ---- */
  document.querySelectorAll("[data-vslider]").forEach((sl) => {
    const slides = [...sl.querySelectorAll(".vslide")];
    const dotsWrap = sl.querySelector(".vdots");
    if (!slides.length) return;
    let i = 0, timer = null;

    const dots = slides.map((_, k) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Destaque " + (k + 1));
      b.addEventListener("click", () => { go(k); start(); });
      dotsWrap && dotsWrap.appendChild(b);
      return b;
    });

    function go(k) {
      i = (k + slides.length) % slides.length;
      slides.forEach((s, j) => s.classList.toggle("is-on", j === i));
      dots.forEach((d, j) => d.classList.toggle("is-on", j === i));
    }
    function start() {
      clearInterval(timer);
      timer = setInterval(() => go(i + 1), 5500);
    }

    sl.querySelector(".vprev")?.addEventListener("click", () => { go(i - 1); start(); });
    sl.querySelector(".vnext")?.addEventListener("click", () => { go(i + 1); start(); });
    sl.addEventListener("mouseenter", () => clearInterval(timer));
    sl.addEventListener("mouseleave", start);
    go(0); start();
  });

  /* ---- Sliders horizontais com setas (produtos, colunistas, matérias) ---- */
  document.querySelectorAll("[data-hslider]").forEach((sl) => {
    const track = sl.querySelector(".hs-track");
    if (!track) return;
    const step = () => Math.max(track.clientWidth * 0.8, 240);
    sl.querySelector(".hs-next")?.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
    sl.querySelector(".hs-prev")?.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  });

  /* ---- WhatsApp flutuante com escolha de perfil ---- */
  document.querySelectorAll("[data-wafloat]").forEach((w) => {
    const btn = w.querySelector(".wafloat__btn");
    const menu = w.querySelector(".wafloat__menu");
    if (!btn || !menu) return;
    btn.addEventListener("click", () => { menu.hidden = !menu.hidden; });
  });

  /* ---- Rodapé compartilhado (igual nas 3 versões, conforme briefing) ---- */
  const footer = document.querySelector("[data-vfooter]");
  if (footer) {
    footer.outerHTML = `
    <footer class="vfooter">
      <div class="container vfooter__inner">
        <span class="vlogo"><i></i><b>bom</b><b>Gourmet</b></span>
        <div class="vfooter__ctas">
          <a class="vbtn vbtn--red vbtn--sm" href="#">Contato comercial</a>
          <a class="vbtn vbtn--ghost vbtn--sm" href="#" style="border-color:rgba(255,255,255,.25); color:#fff">Sugestão de pauta</a>
        </div>
        <div class="vfooter__cols">
          <div>
            <h4>Ecossistema</h4>
            <a href="#">Festival Bom Gourmet</a><a href="#">Prêmio Bom Gourmet</a><a href="#">Circuitos</a><a href="#">FoodCo.</a><a href="#">Casa Bom Gourmet</a><a href="#">Ver todos os projetos</a>
          </div>
          <div>
            <h4>Conteúdo</h4>
            <a href="#">Notícias</a><a href="#">Reportagens</a><a href="#">Guias</a><a href="#">Colunistas</a>
          </div>
          <div>
            <h4>Institucional</h4>
            <a href="#">Manifesto</a><a href="#">Cases</a><a href="#">Trabalhe conosco</a><a href="#">Contato comercial</a>
          </div>
          <div>
            <h4>Comunidades &amp; Regiões</h4>
            <a href="#">Gourmet Lovers</a><a href="#">Comunidade FoodCo.</a><a href="#">Curitiba</a><a href="#">Rio Grande do Sul</a>
          </div>
        </div>
        <div class="vfooter__base">
          <span>© Bom Gourmet · protótipo de estudo, sem valor comercial.</span>
          <span>Paraná &amp; Rio Grande do Sul</span>
        </div>
      </div>
    </footer>`;
  }

  /* ---- Seletor fixo de versões (não aparece no modo teste cego) ---- */
  if (MODO_TESTE) return;
  const cur = document.body.dataset.v || "";
  const sw = document.createElement("nav");
  sw.className = "vswitch";
  sw.setAttribute("aria-label", "Alternar versão do protótipo");
  sw.innerHTML = [
    ["hub", "versoes.html", "☰ Versões"],
    ["v1", "v1.html", "V1"],
    ["v2", "v2.html", "V2"],
    ["v3", "v3.html", "V3"],
  ].map(([id, href, label]) =>
    `<a href="${href}" class="${cur === id ? "is-on" : ""}">${label}</a>`
  ).join("");
  document.body.appendChild(sw);
})();
