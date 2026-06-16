# BOMGOURMET_NOVOSITE

Novo site institucional do **Bom Gourmet** — o ecossistema que movimenta a gastronomia.

Site em **HTML puro** (HTML + CSS + JS, sem framework e sem build), pronto para hospedagem estática (GitHub Pages, Netlify, Vercel, S3…).

## Estrutura
- `index.html` — home
- `quem-somos.html`, `portfolio.html`, `noticias.html`, `cases.html`, `comunidades.html`, `regioes.html`
- Páginas de produto: `festival.html`, `premio.html`, `foodco.html`, `circuito-inverno.html`, `circuito-verao.html`, `cwburguer.html`, `vinada.html`, `casa.html`, `bom-gourmet-rs.html`, `personalize.html`
- `css/styles.css` — folha de estilo compartilhada
- `js/components.js` — header e rodapé compartilhados (injetados em todas as páginas)
- `js/script.js` — interações (carrossel, filtros, contadores, etc.)
- `assets/logos-produtos/` — logos oficiais de cada produto

## Rodar localmente
```bash
python3 -m http.server 8080
# abra http://localhost:8080
```

> As imagens de exemplo carregam do Unsplash. Substituir pelos assets reais (fotos/vídeos dos eventos, time, etc.) antes de ir ao ar oficialmente.
