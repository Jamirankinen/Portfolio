import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteSSG } from 'vite-ssg';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    ViteSSG() // Enables SSG
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 500,
  },
});
