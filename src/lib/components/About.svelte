<script lang="ts">
  import { onMount } from 'svelte';

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

<section id="about" bind:this={sectionElement} class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <div class="max-w-4xl mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-16 transform transition-all duration-1000 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          About Me
        </h2>
        <div class="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Get to know more about my journey, passion, and what drives me as a developer.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- About Content -->
        <div class="transform transition-all duration-1000 delay-300 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Crafting Digital Experiences
          </h3>
          
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              With a passion for technology and innovation, I've dedicated my career to building 
              exceptional digital experiences. My journey in software development began with a 
              curiosity about how things work, which evolved into a deep understanding of modern 
              web technologies and best practices.
            </p>
            
            <p>
              I believe in writing clean, maintainable code that not only functions perfectly 
              but also tells a story. Every project I work on is an opportunity to learn 
              something new and push the boundaries of what's possible.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <!-- Key Points -->
          <div class="mt-8 space-y-3">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span class="text-gray-700">5+ years of software development experience</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span class="text-gray-700">Full-stack development expertise</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span class="text-gray-700">Agile methodologies and team collaboration</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span class="text-gray-700">Continuous learning and innovation mindset</span>
            </div>
          </div>
        </div>

        <!-- Stats/Numbers -->
        <div class="transform transition-all duration-1000 delay-500 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
          <div class="bg-gradient-to-br from-purple-50 to-gray-50 rounded-2xl p-8">
            <h4 class="text-xl font-bold text-gray-900 mb-8 text-center">My Journey in Numbers</h4>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div class="text-gray-600 text-sm">Projects Completed</div>
              </div>
              
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div class="text-gray-600 text-sm">Years Experience</div>
              </div>
              
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div class="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div class="text-gray-600 text-sm">Problem Solving</div>
              </div>
            </div>
            
            <!-- Call to Action -->
            <div class="mt-8 text-center">
              <button 
                on:click={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-medium"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
