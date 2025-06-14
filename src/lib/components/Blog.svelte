<script lang="ts">
  export let posts: { title: string; excerpt: string; link: string }[] = [];
</script>

<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    <!-- Header Section -->
    <header class="mb-12">
      <h1 class="text-5xl font-bold text-gray-900">Blog</h1>
      <p class="mt-4 text-lg text-gray-600">Insights, stories, and ideas from our team.</p>
    </header>

    <!-- Featured Articles Section -->
    <div class="mb-12">
      <h2 class="text-3xl font-semibold text-gray-800 mb-6">Featured Articles</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each posts.slice(0, 2) as post}
          <article class="p-6 bg-white rounded-lg shadow-md flex items-center">
            <div class="flex-1">
              <h3 class="text-2xl font-semibold text-gray-800">{post.title}</h3>
              <p class="mt-2 text-gray-600">{post.excerpt}</p>
              <a href={post.link} class="mt-4 inline-block text-blue-500 hover:underline">Read more</a>
            </div>
            <div class="ml-4 w-24 h-24 bg-gray-200 rounded-lg"></div>
          </article>
        {/each}
      </div>
    </div>

    <!-- Additional Posts Section -->
    <div>
      <h2 class="text-3xl font-semibold text-gray-800 mb-6">More Articles</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each posts.slice(2) as post}
          <article class="p-6 bg-white rounded-lg shadow-md flex items-center">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-800">{post.title}</h3>
              <p class="mt-2 text-gray-600">{post.excerpt}</p>
              <a href={post.link} class="mt-4 inline-block text-blue-500 hover:underline">Read more</a>
            </div>
            <div class="ml-4 w-24 h-24 bg-gray-200 rounded-lg"></div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
