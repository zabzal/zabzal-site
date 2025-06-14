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

  if (matchedRoute) {
    const Component = routes.get(matchedRoute);
    const params: Record<string, string> = {};
    const paramNames = matchedRoute.match(/:\w+/g) || [];
    const paramValues = path.match(new RegExp(matchedRoute.replace(/:\w+/g, '([^/]+)')))?.slice(1) || [];

    paramNames.forEach((name, index) => {
      params[name.substring(1)] = paramValues[index];
    });

    const target = document.querySelector('#app');
    if (target) {
      new Component({ target, props: { params } });
    } else {
      console.error('App container not found');
    }
  } else {
    console.error('No route matched for path:', path);
  }
});
