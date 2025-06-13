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
  base: './',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: 'index.html' // Use index.html as the single entry point
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5000
  }
});
