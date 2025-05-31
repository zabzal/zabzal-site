// Mount the Svelte app
import App from './App.svelte';

const target = document.getElementById('app');
if (!target) throw new Error('App mount target #app not found');

const app = new App({
  target,
});

export default app;
