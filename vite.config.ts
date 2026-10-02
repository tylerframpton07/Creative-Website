import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // This repository is published at https://AcademicCat16.github.io/complex-website/.
  // Keeping the base here also makes Vite rewrite asset URLs for project pages.
  base: '/complex-website/',
  plugins: [react(), tailwindcss()],
})
