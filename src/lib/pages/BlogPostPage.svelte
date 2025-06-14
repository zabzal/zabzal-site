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
  <div class="bg-gray-50 min-h-screen">
    <main class="bg-white container mx-auto px-6 py-10">
      <article>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>
        <div class="text-gray-700 leading-relaxed">{blogPost.content}</div>
      </article>
    </main>

    <Footer />
  </div>
{:else}
  <div class="bg-gray-50 min-h-screen flex items-center justify-center">
    <p class="text-gray-600">Blog post not found.</p>
  </div>
{/if}
