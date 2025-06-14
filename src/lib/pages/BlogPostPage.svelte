<script lang="ts">
  import Footer from '../components/Footer.svelte';
  import { onMount } from 'svelte';
  import { currentPath } from '../router';

  interface BlogPost {
    slug: string;
    title: string;
    content: string;
  }

  let blogPost: BlogPost | undefined;
  let slug: string = '';

  // Mock data for demonstration purposes
  const blogPosts: BlogPost[] = [
    {
      slug: 'future-of-web-development',
      title: 'The Future of Web Development',
      content: 'Explore the latest trends and technologies shaping the web development landscape.',
    },
    {
      slug: 'clean-code-tips',
      title: '10 Tips for Writing Clean Code',
      content: 'Learn how to write clean, maintainable, and efficient code with these practical tips.',
    },
  ];

  onMount(() => {
    const path = $currentPath;
    const match = path.match(/\/blog\/(.+)/);
    if (match) {
      slug = match[1];
      blogPost = blogPosts.find(post => post.slug === slug);
    }
  });
</script>

{#if blogPost}
  <div class="bg-white min-h-screen">
    <main class="container mx-auto px-6 py-10">
      <article class="max-w-4xl mx-auto">
        <!-- Title -->
        <h1 class="text-5xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>
        <p class="text-xl text-gray-700 mb-6">A deep dive into the topic</p>

        <!-- Author and Date -->
        <div class="text-gray-600 text-sm mb-4">
          <p>By Zaheer Abzal</p>
          <p>June 14, 2025</p>
        </div>

        <!-- Featured Image -->
        <div class="mb-8">
          <div class="w-full h-64 bg-gray-200 rounded-lg"></div>
          <p class="text-gray-500 text-sm mt-2">Image credit: Unsplash</p>
        </div>

        <!-- Content -->
        <div class="text-gray-700 text-lg leading-relaxed space-y-6">
          {blogPost.content}
        </div>
      </article>
    </main>

    <Footer />
  </div>
{:else}
  <div class="bg-gray-50 min-h-screen flex items-center justify-center">
    <p class="text-gray-600">Blog post not found.</p>
  </div>
{/if}
