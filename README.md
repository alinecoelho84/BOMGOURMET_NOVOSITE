# BOMGOURMET_NOVOSITE

Novo site institucional do **Bom Gourmet** — o ecossistema que movimenta a gastronomia.

Site em **HTML puro** (HTML + CSS + JS, sem framework e sem build), pronto para hospedagem estática (GitHub Pages, Netlify, Vercel, S3…).

## Estrutura
- `index.html`: home. Abre nas duas portas ("Quero viver a cidade" e "Quero fazer parte") e segue no lado do público.
- `food-service.html`: página para operadores de food service e marcas.
- `projeto.html?p=<slug>`: página de cada projeto (dados em `js/projetos-v5.js`).
- `quem-somos.html`
- `css/versoes.css` e `js/versoes.js`: estilo e scripts compartilhados (rodapé, carrosséis, menu do celular).
- `assets/`: logos, capas, fotos de colunistas e do podcast.
- `v5*.html` e `versoes.html` só redirecionam para as páginas acima (links antigos continuam funcionando).
- `_versoes-antigas/`: versões anteriores do protótipo, guardadas e fora do site publicado.

## Rodar localmente
```bash
python3 -m http.server 8080
# abra http://localhost:8080
```

> As imagens de exemplo carregam do Unsplash. Substituir pelos assets reais (fotos/vídeos dos eventos, time, etc.) antes de ir ao ar oficialmente.
