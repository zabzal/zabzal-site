<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate } from '../router';

  export let posts: { title: string; excerpt: string; link: string }[] = [];

  let sectionElement: HTMLElement;
  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible = true;
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => observer.disconnect();
  });
</script>

<section bind:this={sectionElement} class="py-20 bg-white min-h-screen">
  <div class="container mx-auto px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 transform transition-all duration-1000 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Blog
        </h2>
        <div class="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the latest insights, stories, and ideas from our team.
        </p>
      </div>

      <!-- Blog Posts -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        {#each posts as post}
          <article class="transform transition-all duration-1000 delay-300 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{post.title}</h3>
            <p class="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
            <a href={post.link} role="button" on:click={(e) => { e.preventDefault(); navigate(post.link); }} on:keydown={(e) => { if (e.key === 'Enter') navigate(post.link); }} class="text-purple-600 hover:underline cursor-pointer">Read more</a>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
