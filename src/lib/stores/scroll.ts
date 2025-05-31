import { writable } from 'svelte/store';

export const scrollY = writable(0);

export function createScrollStore() {
  const { subscribe, set } = scrollY;

  if (typeof window !== 'undefined') {
    const updateScrollY = () => set(window.scrollY);
    window.addEventListener('scroll', updateScrollY);
    
    return {
      subscribe,
      destroy: () => window.removeEventListener('scroll', updateScrollY)
    };
  }

  return { subscribe };
}
