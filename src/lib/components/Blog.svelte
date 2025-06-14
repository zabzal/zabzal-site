<script lang="ts">
  export let posts = [];
</script>

<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    <h1 class="text-4xl font-bold text-gray-900">Blog</h1>
    <p class="mt-4 text-gray-600">Explore our latest posts below:</p>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each posts as post}
        <article class="p-6 bg-white rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-gray-800">{post.title}</h2>
          <p class="mt-2 text-gray-600">{post.excerpt}</p>
          <a href={post.link} class="mt-4 inline-block text-blue-500 hover:underline">Read more</a>
        </article>
      {/each}
    </div>
  </div>
</section>
