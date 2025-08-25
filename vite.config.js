// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => ({
  plugins: [vue(), vueJsx(), vueDevTools()],
  base: mode === 'tanyap632' ? '/gpw_battles/' : '/',
  build: {
    outDir: 'dist', // папка для сборки
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
