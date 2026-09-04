import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fetchRemoteMd from './vite-plugin-fetch-md.js';

// SSR build config for the prerenderer (scripts/prerender.mjs) ONLY.
// Kept as its own file so the client config's manualChunks can never
// apply here: the SSR build externalizes react, and Rollup refuses
// externalized modules in manualChunks (the failure the first Pages
// deploy of the prerender hit).
export default defineConfig({
  plugins: [react(), fetchRemoteMd()],
  build: {
    outDir: 'build-ssr',
    ssr: 'src/entry-server.jsx',
  },
});
