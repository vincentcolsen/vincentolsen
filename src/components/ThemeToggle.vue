<template>
  <div class="theme-toggle">
    <!-- Rendered after mount: the prerendered HTML cannot know the visitor's theme,
         and without JavaScript the switch would do nothing. The wrapper keeps its size. -->
    <label v-if="isMounted" class="switch" for="theme-switch">
      <input
        id="theme-switch"
        :checked="isLight"
        type="checkbox"
        role="switch"
        @change="onChange"
      >
      <span class="slider" aria-hidden="true" />
      <span class="visually-hidden">Light mode</span>
    </label>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Same key as the inline script in index.html that applies the saved theme before first paint.
const STORAGE_KEY = 'theme'

const isMounted = ref(false)
const isLight = ref(false)

onMounted(() => {
  const root = document.documentElement
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)')

  isLight.value = root.dataset.theme ? root.dataset.theme === 'light' : prefersLight.matches
  prefersLight.addEventListener('change', (event) => {
    if (!root.dataset.theme) isLight.value = event.matches
  })
  isMounted.value = true
})

function onChange(event) {
  isLight.value = event.target.checked
  const theme = isLight.value ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage can be blocked (private mode, disabled site data); the choice then lasts for this visit.
  }
}
</script>

<style scoped>
.theme-toggle {
  width: 34px;
  height: 20px;
}

.switch {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.switch input {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.slider {
  position: absolute;
  inset: 0;
  border-radius: 34px;
  background-color: var(--color-switch-track);
  transition: background-color 0.4s;
}

.slider::before {
  content: '';
  position: absolute;
  left: 3px;
  bottom: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--color-bg);
  transition: transform 0.4s, background-color 0.4s;
}

input:checked + .slider::before {
  transform: translateX(14px);
}

input:focus-visible + .slider {
  outline: 2px solid var(--color-heading);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .slider,
  .slider::before {
    transition: none;
  }
}
</style>
