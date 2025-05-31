<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';

  const dispatch = createEventDispatcher();
  let isScrolled = false;
  let isMobileMenuOpen = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function navigateToSection(sectionId: string) {
    dispatch('navigate', sectionId);
    isMobileMenuOpen = false;
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];
</script>

<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}">
  <nav class="container mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <button 
        on:click={() => navigateToSection('hero')}
        class="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors duration-200"
      >
        ZA
      </button>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-8">
        {#each navItems as item}
          <button
            on:click={() => navigateToSection(item.id)}
            class="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative group"
          >
            {item.label}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
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
      <div class="md:hidden mt-4 pb-4 border-t border-gray-200">
        {#each navItems as item}
          <button
            on:click={() => navigateToSection(item.id)}
            class="block w-full text-left py-3 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
          >
            {item.label}
          </button>
        {/each}
      </div>
    {/if}
  </nav>
</header>
