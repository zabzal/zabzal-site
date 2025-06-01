<script lang="ts">
  import { onMount } from 'svelte';

  let sectionElement: HTMLElement;
  let isVisible = false;
  let form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';

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

  async function handleSubmit(event: Event) {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    isSubmitting = true;
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      form = { name: '', email: '', subject: '', message: '' };
      submitStatus = 'success';
      
      // Reset status after 3 seconds
      setTimeout(() => {
        submitStatus = 'idle';
      }, 3000);
      
    } catch (error) {
      submitStatus = 'error';
      setTimeout(() => {
        submitStatus = 'idle';
      }, 3000);
    } finally {
      isSubmitting = false;
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'zaheer@example.com',
      href: 'mailto:zaheer@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
    },
    {
      name: 'GitHub',
      href: '#',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    },
    {
      name: 'X',
      href: '#',
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
    }
  ];
</script>

<section id="contact" bind:this={sectionElement} class="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30">
  <div class="container mx-auto px-6">
    
    <!-- Section Header -->
    <div class="text-center mb-16 transform transition-all duration-1000 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Get In Touch
      </h2>
      <div class="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      
      <!-- Contact Information -->
      <div class="transform transition-all duration-1000 delay-300 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">Let's Connect</h3>
        
        <p class="text-gray-600 mb-8 leading-relaxed">
          I'm always interested in new opportunities and exciting projects. 
          Whether you're looking for a collaborator, have a question about my work, 
          or just want to say hello, feel free to reach out.
        </p>

        <!-- Contact Info -->
        <div class="space-y-6 mb-8">
          {#each contactInfo as info}
            <a 
              href={info.href}
              class="flex items-center space-x-4 p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors duration-200 group"
            >
              <span class="text-2xl">{info.icon}</span>
              <div>
                <div class="font-medium text-gray-900 group-hover:text-purple-600">{info.title}</div>
                <div class="text-gray-600">{info.value}</div>
              </div>
            </a>
          {/each}
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="text-lg font-bold text-gray-900 mb-4">Follow Me</h4>
          <div class="flex space-x-4">
            {#each socialLinks as social}
              <a
                href={social.href}
                class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 transform hover:scale-110 shadow-sm hover:shadow-md"
                title={social.name}
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            {/each}
          </div>
        </div>

        <!-- Availability Status -->
        <div class="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-green-700 font-medium">Available for new projects</span>
          </div>
          <p class="text-green-600 text-sm mt-1">
            Currently accepting new client work and collaborations
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="transform transition-all duration-1000 delay-500 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
          
          <form on:submit={handleSubmit} class="space-y-6">
            <!-- Name Input -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                bind:value={form.name}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                placeholder="Your full name"
              />
            </div>

            <!-- Email Input -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                bind:value={form.email}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <!-- Subject Input -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                bind:value={form.subject}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                placeholder="Project discussion, collaboration, etc."
              />
            </div>

            <!-- Message Textarea -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                bind:value={form.message}
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Tell me about your project or how I can help you..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-purple-400 transition-all duration-200 transform hover:scale-105 disabled:transform-none shadow-lg font-medium {
                isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
              }"
            >
              {#if isSubmitting}
                <span class="flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Sending...</span>
                </span>
              {:else}
                Send Message
              {/if}
            </button>

            <!-- Status Messages -->
            {#if submitStatus === 'success'}
              <div class="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            {:else if submitStatus === 'error'}
              <div class="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                ❌ Failed to send message. Please try again or contact me directly.
              </div>
            {/if}
          </form>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center mt-16 pt-8 border-t border-gray-200">
      <p class="text-gray-600">
        © 2025 Zaheer Abzal
      </p>
    </div>
  </div>
</section>
