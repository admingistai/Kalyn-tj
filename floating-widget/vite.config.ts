import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/widget.ts'),
      name: 'FloatingWidget',
      formats: ['iife'],
      fileName: (format) => 'widget.min.js',
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        // Ensure CSS is inlined
        inlineDynamicImports: true,
        // Prevent code splitting
        manualChunks: undefined,
      },
    },
    // Inline all assets
    assetsInlineLimit: 100000,
  },
  // For local development if needed
  server: {
    port: 3000,
    open: true,
  },
});