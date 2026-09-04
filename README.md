# FavDate — Pages

Repositório unificado das páginas públicas do FavDate.

## Estrutura

```
docs/       → Páginas legais estáticas (GitHub Pages)
  index.html
  privacidade.html
  termos.html
  exclusao.html
landing/    → Fonte da landing page (React + TanStack Start, SSR)
  src/routes/index.tsx
```

## Páginas legais (GitHub Pages — estático)

Servidas a partir da pasta `docs/` na branch `main`.

| Página | URL |
|--------|-----|
| Índice | `https://favdate.helpia.app.br/` |
| Política de Privacidade | `https://favdate.helpia.app.br/privacidade.html` |
| Termos de Uso | `https://favdate.helpia.app.br/termos.html` |
| Exclusão de Conta | `https://favdate.helpia.app.br/exclusao.html` |

Para atualizar: edite os arquivos em `docs/`, commit e push para `main`.
O GitHub Pages publica automaticamente em ~1 minuto.

## Landing page (React/SSR — servidor Node/JS)

A landing (`landing/`) é uma aplicação React (TanStack Start + Vite) que
precisa rodar em um servidor Node/JS (não é estática). Ela deverá ser
publicada no host JavaScript próprio (ex.: helpia) e servir a home
`https://favdate.helpia.app.br/`.

### Desenvolvimento local

```sh
cd landing
npm install
npm run dev
```

### Build

```sh
cd landing
npm run build
```

### Links

A landing referencia as páginas legais via links absolutos:
- `https://favdate.helpia.app.br/privacidade.html`
- `https://favdate.helpia.app.br/termos.html`
- `https://favdate.helpia.app.br/exclusao.html`

> ⚠️ Os botões de download (App Store / Google Play) ainda apontam para `#download`
> e devem ser preenchidos com as URLs reais das lojas quando o app for publicado.
