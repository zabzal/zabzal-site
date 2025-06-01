<script lang="ts">
  import { onMount } from 'svelte';
  import { socialLinks } from '../stores/socialLinks';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-purple-50/30">
  <div class="container mx-auto px-6 py-20">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
      
      <!-- Profile Image -->
      <div class="flex-shrink-0 transform transition-all duration-1000 {mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
        <div class="relative">
          <div class="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-purple-100 to-purple-200">
            <img 
              src="/zaheerabzal-profile-picture.jpg" 
              alt="Zaheer Abzal Profile"
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <!-- Decorative elements -->
          <div class="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
          <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400/30 rounded-full blur-lg"></div>
        </div>
      </div>

      <!-- Hero Content -->
      <div class="flex-1 text-center lg:text-left transform transition-all duration-1000 delay-300 {mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
        <div class="mb-6">
          <p class="text-purple-600 font-medium mb-2 tracking-wide">Hello, I'm</p>
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Zaheer Abzal
          </h1>
          <p class="text-xl lg:text-2xl text-gray-600 mb-6">
            Engineering Leader & Developer
          </p>
        </div>

        <p class="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
          Passionate about creating innovative digital solutions that bridge the gap between 
          design and functionality. I specialize software product development and data & analytics.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button 
            on:click={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            class="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
          >
            Learn More
          </button>
          <button 
            on:click={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            class="px-8 py-3 bg-transparent text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200 transform hover:scale-105 font-medium"
          >
            Get In Touch
          </button>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center lg:justify-start space-x-6 mt-8">
          {#each socialLinks as social}
            <a 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-purple-600 transition-colors duration-200"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
