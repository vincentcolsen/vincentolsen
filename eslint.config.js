import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueA11y from 'eslint-plugin-vuejs-accessibility'
import globals from 'globals'

export default [
  { ignores: ['dist/', 'dist-ssr/'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...vueA11y.configs['flat/recommended'],
  {
    files: ['src/**'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['*.js', 'scripts/**'],
    languageOptions: { globals: globals.node },
  },
]
