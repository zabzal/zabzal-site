<script lang="ts">
  import { onMount } from 'svelte';

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
            Engineer Director, Developer, & Leader
          </p>
        </div>

        <p class="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
          Passionate about creating innovative digital solutions that bridge the gap between 
          design and functionality. I specialize in building modern web applications with 
          clean code and exceptional user experiences.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button 
            on:click={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            class="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
          >
            View My Work
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
          <a href="https://www.linkedin.com/in/zaheerabzal/" class="text-gray-600 hover:text-purple-600 transition-colors duration-200">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-600 hover:text-purple-600 transition-colors duration-200">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-600 hover:text-purple-600 transition-colors duration-200">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
