import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// One-off config used only to produce a single self-contained HTML file
// for sharing as a Claude Artifact. Not used for the normal dev/GH Pages build.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    assetsInlineLimit: 100_000_000,
    cssCodeSplit: false,
    outDir: 'dist-artifact',
    emptyOutDir: true,
    minify: false,
  },
})
