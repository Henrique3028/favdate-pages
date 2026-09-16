# FavDate — Pages

Repositório unificado das páginas públicas do FavDate.

## Estrutura

```
docs/       → Páginas legais estáticas
  index.html
  privacidade.html
  termos.html
  exclusao.html
landing/    → Fonte da landing page (React + TanStack Start, SSR)
  src/routes/index.tsx
```

## Páginas legais (estáticas — favdate.com.br)

Servidas a partir da pasta `docs/` no domínio `favdate.com.br`.

| Página | URL |
|--------|-----|
| Índice | `https://favdate.com.br/` |
| Política de Privacidade | `https://favdate.com.br/privacidade.html` |
| Termos de Uso | `https://favdate.com.br/termos.html` |
| Exclusão de Conta | `https://favdate.com.br/exclusao.html` |

Para atualizar: edite os arquivos em `docs/`, commit e push para `main`.

## Landing page (React/SSR — servidor Node/JS)

A landing (`landing/`) é uma aplicação React (TanStack Start + Vite) que
precisa rodar em um servidor Node/JS (não é estática). Ela deverá ser
publicada no host JavaScript próprio e servir a home
`https://favdate.com.br/`.

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
- `https://favdate.com.br/privacidade.html`
- `https://favdate.com.br/termos.html`
- `https://favdate.com.br/exclusao.html`

> ⚠️ Os botões de download (App Store / Google Play) ainda apontam para `#download`
> e devem ser preenchidos com as URLs reais das lojas quando o app for publicado.
