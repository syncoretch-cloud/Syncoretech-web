import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves from a sub-path; Netlify serves from the root.
  base: command === 'build' && !process.env.NETLIFY ? '/syncore-technologies/' : '/',
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
}))
