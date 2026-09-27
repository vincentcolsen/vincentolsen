import { createHash } from 'node:crypto'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// GitHub Pages cannot set response headers, so the production build ships the
// Content-Security-Policy as a <meta> tag. Bare inline <script> blocks are allowed
// by hash, computed from the final HTML so editing them never desyncs the policy.
// The dev server is left without a policy because Vite injects styles inline there.
function contentSecurityPolicy() {
  return {
    name: 'content-security-policy',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const scriptHashes = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(
          ([, body]) => `'sha256-${createHash('sha256').update(body).digest('base64')}'`,
        )
        const policy = [
          "default-src 'self'",
          ["script-src 'self'", ...scriptHashes].join(' '),
          "style-src 'self'",
          "img-src 'self'",
          "font-src 'self'",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'none'",
        ].join('; ')

        return [
          {
            tag: 'meta',
            attrs: { 'http-equiv': 'Content-Security-Policy', content: policy },
            injectTo: 'head-prepend',
          },
        ]
      },
    },
  }
}

export default defineConfig({
  plugins: [vue({ features: { optionsAPI: false } }), contentSecurityPolicy()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Keep every asset a same-origin file; data: URIs would need a looser CSP.
    assetsInlineLimit: 0,
  },
})
