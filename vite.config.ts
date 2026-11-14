import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { seoPrerender } from './seo/prerender'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPrerender()],
})
