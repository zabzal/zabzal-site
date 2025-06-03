import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        typescript: true,
        postcss: true,
      }),
    })
  ],
  resolve: {
    alias: {
      $lib: '/src/lib'
    }
  },

  base: '/zabzal-site/',
  build: {
    outDir: 'docs'
  },
  
  optimizeDeps: {
    exclude: ['@sveltejs/vite-plugin-svelte']
  },
  
  server: {
    host: '0.0.0.0',
    port: 5000,
    historyApiFallback: true
  },
  
  publicDir: 'public',
});
