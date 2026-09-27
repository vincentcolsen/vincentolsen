// Renders the app to HTML and writes it into dist/index.html, so the page content is
// there without JavaScript (crawlers, link previews) and the client hydrates it.
// Runs after `vite build` and `vite build --ssr src/entry-server.js --outDir dist-ssr`.
import { readFile, rm, writeFile } from 'node:fs/promises'

const indexHtml = new URL('../dist/index.html', import.meta.url)
const ssrDir = new URL('../dist-ssr/', import.meta.url)
const mountPoint = '<div id="app"></div>'

const { render } = await import(new URL('entry-server.js', ssrDir).href)
const html = await readFile(indexHtml, 'utf8')

if (!html.includes(mountPoint)) {
  throw new Error(`Mount point ${mountPoint} not found in dist/index.html`)
}

const appHtml = await render()
await writeFile(indexHtml, html.replace(mountPoint, () => `<div id="app">${appHtml}</div>`))
await rm(ssrDir, { recursive: true })
