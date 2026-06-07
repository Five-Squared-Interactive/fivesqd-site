import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fetchRemoteMd from './vite-plugin-fetch-md.js';

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
