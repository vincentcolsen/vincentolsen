# vincentolsen.no

Personal site built with Vue 3 and Vite, prerendered to static HTML and deployed to GitHub Pages.

## Development

Use the Node.js version in `.nvmrc` (`nvm use`).

```bash
npm ci
npm run dev      # dev server with hot reload
npm run lint     # ESLint, including accessibility rules
npm run build    # production build with prerendered HTML in dist/
npm run preview  # serve dist/ locally
```

## How it works

- Page content lives in `src/content/profile.js`; the components only render it.
- `npm run build` builds the client bundle, then a server bundle that `scripts/prerender.js` uses to write the rendered page into `dist/index.html`. The client hydrates that HTML, so the content is there without JavaScript.
- GitHub Pages cannot set response headers, so the production build adds a Content-Security-Policy `<meta>` tag. Inline scripts are allowed by hash, computed at build time in `vite.config.js`.
- The theme follows the OS setting until the visitor picks one with the toggle. The choice is kept in `localStorage` and applied before first paint by the inline script in `index.html`.
- Images are served without camera metadata. Strip it before adding new ones, for example `exiftool -all= image.jpg` (a plain resize keeps it).

## Deployment

`.github/workflows/build-and-deploy.yaml` lints and builds every pull request and deploys `main` to GitHub Pages through the `github-pages` environment. Dependabot keeps npm packages and the SHA-pinned actions current.
