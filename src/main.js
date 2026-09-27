import '@fontsource-variable/inter'
import './styles/base.css'
import { createApp, createSSRApp } from 'vue'
import App from './App.vue'

// Production HTML is prerendered by scripts/prerender.js, so the client hydrates it.
// The dev server serves an empty #app and mounts from scratch.
const app = import.meta.env.DEV ? createApp(App) : createSSRApp(App)

app.mount('#app')
