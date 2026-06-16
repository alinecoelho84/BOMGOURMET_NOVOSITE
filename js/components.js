/* ============================================================
   BOM GOURMET — Header e Rodapé compartilhados
   Injeta header/topbar/menu e mega-rodapé em todas as páginas.
   Use <div data-component="header"></div> e <div data-component="footer"></div>.
   Carregue ANTES de script.js.
   ============================================================ */
(function () {
  "use strict";

  // Em páginas internas os âncoras apontam para a home (index.html#...).
  const onHome = /(^|\/)index\.html$/.test(location.pathname) || location.pathname.endsWith("/");
  const P = onHome ? "" : "index.html";
  const a = (h) => P + h;

  const header = `
  <div class="topbar">
    <div class="topbar__inner">
      <span class="live-dot" aria-hidden="true"></span>
      <span><strong>Vendendo agora:</strong> Festival Bom Gourmet 2026 — cotas de patrocínio abertas.</span>
      <a href="${a("#comercial")}">Falar com o comercial &rarr;</a>
    </div>
  </div>
  <header class="header">
    <div class="container header__inner">
      <a href="index.html" class="logo" aria-label="Bom Gourmet — início"><span class="logo__sq"></span><span class="logo__bom">bom</span><span class="logo__gourmet">Gourmet</span></a>
      <nav class="nav" aria-label="Principal">
        <a href="quem-somos.html">Quem somos</a>
        <a href="portfolio.html">Portfólio</a>
        <a href="cases.html">Cases</a>
        <a href="${a("#calendario")}">Calendário</a>
        <a href="noticias.html">Notícias</a>
        <a href="comunidades.html">Comunidades</a>
        <a href="regioes.html">Regiões</a>
      </nav>
      <a href="${a("#comercial")}" class="btn btn--primary header__cta">Fale com o comercial</a>
      <button class="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobileMenu"><span></span><span></span><span></span></button>
    </div>
  </header>
  <div class="mobile-menu" id="mobileMenu">
    <a href="quem-somos.html">Quem somos</a>
    <a href="portfolio.html">Portfólio</a>
    <a href="cases.html">Cases</a>
    <a href="${a("#calendario")}">Calendário</a>
    <a href="noticias.html">Notícias</a>
    <a href="comunidades.html">Comunidades</a>
    <a href="regioes.html">Regiões</a>
    <a href="${a("#comercial")}" class="btn btn--primary btn--block">Fale com o comercial</a>
  </div>`;

  const ig = '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm6.3-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z"/></svg>';
  const li = '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>';
  const yt = '<svg viewBox="0 0 24 24"><path d="M23 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z"/></svg>';
  const wa = '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.5 0-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4 0-.6.3a3.2 3.2 0 0 0-1 2.4c0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3z"/></svg>';

  const footer = `
  <footer class="mega-footer">
    <div class="container">
      <form class="mf-search" role="search" onsubmit="return false">
        <input type="search" placeholder="Buscar no Bom Gourmet — projetos, matérias, guias…" aria-label="Buscar no site" />
        <button class="btn btn--primary" type="submit">Buscar</button>
      </form>
      <div class="mf-top">
        <div class="mf-intro">
          <a href="index.html" class="logo"><span class="logo__sq"></span><span class="logo__bom">bom</span><span class="logo__gourmet">Gourmet</span></a>
          <p>O ecossistema que conecta consumidores, operadores, marcas e destinos por meio da gastronomia — gerando experiências, negócios e desenvolvimento para o setor.</p>
        </div>
        <div class="mf-news">
          <h4>Assine nossas news</h4>
          <p>Receba o que está acontecendo e o que está sendo planejado no ecossistema.</p>
          <form onsubmit="return false">
            <input type="email" placeholder="Seu melhor e-mail" aria-label="E-mail" required />
            <button class="btn btn--primary" type="submit">Assinar</button>
          </form>
        </div>
      </div>
      <div class="mf-cols">
        <div class="mf-col">
          <h4>Ecossistema</h4>
          <a href="portfolio.html">Festival Bom Gourmet</a>
          <a href="portfolio.html">Prêmio Bom Gourmet</a>
          <a href="portfolio.html">Circuitos</a>
          <a href="portfolio.html">FoodCo</a>
          <a href="portfolio.html">Ver todos os projetos</a>
        </div>
        <div class="mf-col">
          <h4>Conteúdo</h4>
          <a href="noticias.html">Notícias</a>
          <a href="noticias.html">Reportagens</a>
          <a href="${a("#inspira")}">Guias</a>
          <a href="${a("#colunistas")}">Colunistas</a>
        </div>
        <div class="mf-col">
          <h4>Institucional</h4>
          <a href="quem-somos.html#manifesto">Manifesto</a>
          <a href="cases.html">Cases</a>
          <a href="${a("#relacionamento")}">Trabalhe conosco</a>
          <a href="${a("#comercial")}">Contato comercial</a>
        </div>
        <div class="mf-col">
          <h4>Comunidades &amp; Regiões</h4>
          <a href="comunidades.html#gourmet-lovers">Gourmet Lovers</a>
          <a href="comunidades.html#foodco">Comunidade FoodCo</a>
          <a href="${a("#calendario")}">Curitiba</a>
          <a href="${a("#calendario")}">Rio Grande do Sul</a>
        </div>
      </div>
      <div class="mf-bottom">
        <div class="mf-social">
          <a href="#" aria-label="Instagram">${ig}</a>
          <a href="#" aria-label="LinkedIn">${li}</a>
          <a href="#" aria-label="YouTube">${yt}</a>
          <a href="#" aria-label="WhatsApp">${wa}</a>
        </div>
        <div class="mf-legal">
          <span>© 2026 Bom Gourmet — Live marketing &amp; gastronomia.</span>
          <span>Curitiba · Londrina · Maringá · Cascavel · Foz · Rio Grande do Sul</span>
        </div>
      </div>
    </div>
  </footer>`;

  const hMount = document.querySelector('[data-component="header"]');
  if (hMount) hMount.outerHTML = header;
  const fMount = document.querySelector('[data-component="footer"]');
  if (fMount) fMount.outerHTML = footer;
})();
