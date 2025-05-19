import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    target: 'esnext',           // Modern browsers only; reduces transpilation cost
    minify: 'esbuild',          // Fast and efficient (default, but explicit is better)
    cssCodeSplit: true,         // Splits large CSS into per-component chunks
    sourcemap: false,           // Set to true only if debugging
    chunkSizeWarningLimit: 500, // Warn if chunks grow too large
  },
});
