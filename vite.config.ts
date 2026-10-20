import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // If deploying to a sub-path (e.g. GitHub Pages at https://user.github.io/repo/),
  // set: base: '/repo/'
})
