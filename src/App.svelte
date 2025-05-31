<script lang="ts">
  import Header from './lib/components/Header.svelte';
  import Hero from './lib/components/Hero.svelte';
  import About from './lib/components/About.svelte';
  import Portfolio from './lib/components/Portfolio.svelte';
  import Skills from './lib/components/Skills.svelte';
  import Contact from './lib/components/Contact.svelte';
  import './app.css';

  // Smooth scrolling function
  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<svelte:head>
  <title>Zaheer Abzal - Portfolio</title>
  <meta name="description" content="Personal portfolio of Zaheer Abzal - Software Engineer and Developer" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <Header on:navigate={(e) => scrollToSection(e.detail)} />
  
  <main>
    <Hero />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
  </main>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
