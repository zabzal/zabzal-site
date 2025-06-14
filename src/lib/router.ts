import { writable } from 'svelte/store';
import BlogPostPage from './pages/BlogPostPage.svelte';

export const currentPath = writable(window.location.pathname);

const routes = new Map<string, any>();

routes.set('/blog/:slug', BlogPostPage);

export function navigate(path: string) {
  window.history.pushState({}, '', path);
  currentPath.set(path);
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Reset scroll position immediately
}

window.addEventListener('popstate', () => {
  currentPath.set(window.location.pathname);
});

currentPath.subscribe((path) => {
  const matchedRoute = Array.from(routes.keys()).find(route => {
    const regex = new RegExp('^' + route.replace(/:\w+/g, '[^/]+') + '$');
    return regex.test(path);
  });

  if (!matchedRoute) {
    console.error('No route matched for path:', path);
  }
});
