<script lang="ts">
  import Blog from '../components/Blog.svelte';
  import Footer from '../components/Footer.svelte';

  const mockPosts = [
    {
      title: 'The Future of Web Development',
      excerpt: 'Explore the latest trends and technologies shaping the web development landscape.',
      link: '/blog/future-of-web-development'
    },
    {
      title: '10 Tips for Writing Clean Code',
      excerpt: 'Learn how to write clean, maintainable, and efficient code with these practical tips.',
      link: '/blog/clean-code-tips'
    },
    {
      title: 'Understanding JavaScript Closures',
      excerpt: 'A deep dive into closures in JavaScript and how to use them effectively.',
      link: '/blog/javascript-closures'
    },
    {
      title: 'CSS Grid vs. Flexbox',
      excerpt: 'When to use CSS Grid and Flexbox for layout design? Find out in this comparison.',
      link: '/blog/css-grid-vs-flexbox'
    },
    {
      title: 'The Rise of TypeScript',
      excerpt: 'Why TypeScript is becoming the go-to language for modern web development.',
      link: '/blog/rise-of-typescript'
    },
    {
      title: 'Mastering React Hooks',
      excerpt: 'A comprehensive guide to using React Hooks effectively in your projects.',
      link: '/blog/mastering-react-hooks'
    },
    {
      title: 'Web Accessibility Best Practices',
      excerpt: 'Ensure your website is accessible to everyone with these best practices.',
      link: '/blog/web-accessibility-best-practices'
    },
    {
      title: 'Introduction to GraphQL',
      excerpt: 'Learn the basics of GraphQL and how it differs from REST APIs.',
      link: '/blog/introduction-to-graphql'
    },
    {
      title: 'Building Progressive Web Apps',
      excerpt: 'Discover how to create fast, reliable, and engaging PWAs.',
      link: '/blog/building-progressive-web-apps'
    },
    {
      title: 'State Management in Vue.js',
      excerpt: 'An overview of state management techniques in Vue.js applications.',
      link: '/blog/state-management-in-vue'
    }
  ];
</script>

<div class="bg-gray-50 min-h-screen">
  <main class="container mx-auto px-6 py-10">
    <Blog posts={mockPosts} class="text-gray-800" />
  </main>

  <Footer class="bg-gray-100 text-gray-600" />
</div>
