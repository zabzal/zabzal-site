<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate, currentPath } from '../router';

  let isMobileMenuOpen = false;

  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/blog', label: 'Blog' },
    { id: '/about', label: 'About' },
    { id: '/skills', label: 'Skills' },
    { id: '/contact', label: 'Contact' }
  ];

  function navigateToSection(path: string) {
    navigate(path);
    isMobileMenuOpen = false;
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
  <nav class="container mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <button 
        on:click={() => navigateToSection('/')}
        class="w-24 focus:outline-none"
        aria-label="Go to home"
      >
        <svg class="logo w-full fill-gray-900 hover:fill-purple-600 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 229" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;">
          <path d="M3.18,0.728l174.549,0l-0,7.774l-120.842,186.915l106.708,0l-11.66,31.801l-151.935,-0l0.353,-8.127l119.428,-184.442l-116.601,-0.354l0,-33.567Z"/><path d="M205.289,0.728l36.041,-0.353l90.807,227.196l-36.04,0.353l-26.854,-66.427l-91.514,0.353l-6.36,14.487l-35.687,0.707l69.607,-176.316Zm18.02,40.988l-33.567,86.567l66.428,0.354l-32.861,-86.921Z"/>
        </svg>
      </button>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-2">
        {#each navItems as item}
          <button
            on:click={() => navigateToSection(item.id)}
            class="text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg transition-all duration-200 font-medium
                   {$currentPath === item.id ? 'bg-purple-100 text-purple-600' : 'hover:bg-purple-50'}"
          >
            {item.label}
          </button>
        {/each}
      </div>

      <!-- Mobile Menu Button -->
      <button
        on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
        class="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isMobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if isMobileMenuOpen}
      <div class="md:hidden mt-4 pb-4 border-t border-gray-200 space-y-1">
        {#each navItems as item}
          <button
            on:click={() => navigateToSection(item.id)}
            class="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 transition-all duration-200 font-medium rounded-lg
                   {$currentPath === item.id ? 'bg-purple-100 text-purple-600' : 'hover:bg-purple-50'}"
          >
            {item.label}
          </button>
        {/each}
      </div>
    {/if}
  </nav>
</header>
