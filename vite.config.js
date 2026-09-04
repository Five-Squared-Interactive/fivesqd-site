import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fetchRemoteMd from './vite-plugin-fetch-md.js';

// CLIENT build config. The prerender SSR pass uses vite.config.ssr.js —
// a separate file, deliberately: the SSR build externalizes react, and
// Rollup hard-errors if an externalized module appears in manualChunks.
// A shared config gated on isSsrBuild proved environment-flaky (passed
// locally, failed in the Pages deploy) — two files cannot leak into each
// other.
export default defineConfig({
  plugins: [react(), fetchRemoteMd()],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
