import { writable } from 'svelte/store';

export const currentPath = writable(window.location.pathname);

export function navigate(path: string) {
  window.history.pushState({}, '', path);
  currentPath.set(path);
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Reset scroll position immediately
}

window.addEventListener('popstate', () => {
  currentPath.set(window.location.pathname);
});

// Reset scroll position on path change
currentPath.subscribe(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
