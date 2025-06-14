<script lang="ts">
  import Header from './lib/components/Header.svelte';
  import { currentPath } from './lib/router';
  import Home from './lib/pages/Home.svelte';
  import AboutPage from './lib/pages/AboutPage.svelte';
  import PortfolioPage from './lib/pages/PortfolioPage.svelte';
  import SkillsPage from './lib/pages/SkillsPage.svelte';
  import ContactPage from './lib/pages/ContactPage.svelte';
  import BlogPage from './lib/pages/BlogPage.svelte';
  import BlogPostPage from './lib/pages/BlogPostPage.svelte';
  import './app.css';

  $: currentComponent = getComponentForPath($currentPath);

  function getComponentForPath(path: string) {
    if (path.startsWith('/blog/') && path !== '/blog') {
      return BlogPostPage;
    }
    switch (path) {
      case '/':
        return Home;
      case '/about':
        return AboutPage;
      case '/portfolio':
        return PortfolioPage;
      case '/skills':
        return SkillsPage;
      case '/contact':
        return ContactPage;
      case '/blog':
        return BlogPage;
      default:
        return Home;
    }
  }
</script>

<svelte:head>
  <title>Zaheer Abzal - Portfolio</title>
  <meta name="description" content="Personal portfolio of Zaheer Abzal - Software Engineer and Developer" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="min-h-screen bg-gray-50 flex flex-col">
  <Header />
  
  <main class="flex-grow">
    <div class="pt-16"> <!-- Add padding-top to account for fixed header -->
      <svelte:component this={currentComponent} />
    </div>
  </main>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
