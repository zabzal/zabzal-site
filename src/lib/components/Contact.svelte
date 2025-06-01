<script lang="ts">
  import { onMount } from 'svelte';
  import { socialLinks } from '../stores/socialLinks';

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
