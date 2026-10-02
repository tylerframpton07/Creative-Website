import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // This repository is published at https://tylerframpton07.github.io/Creative-Website/.
  // Keeping the base here also makes Vite rewrite asset URLs for project pages.
  base: '/Creative-Website/',
  plugins: [react(), tailwindcss()],
})
