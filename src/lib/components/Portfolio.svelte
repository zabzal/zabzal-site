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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce solution built with cutting-edge technologies, featuring real-time inventory management and seamless payment integration.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with biometric authentication, transaction history, and real-time notifications.",
      tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
      category: "Mobile Application",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Comprehensive analytics platform providing real-time insights and interactive visualizations for business intelligence.",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      category: "Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent conversational assistant with natural language processing capabilities and machine learning integration.",
      tech: ["Python", "TensorFlow", "FastAPI", "WebSocket"],
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      tech: ["Svelte", "Express.js", "Socket.io", "MongoDB"],
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      title: "Real Estate Platform",
      description: "Comprehensive property listing and management platform with advanced search, virtual tours, and agent tools.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
      category: "Web Platform",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    }
  ];

  let selectedCategory = "All";
  const categories = ["All", "Web Application", "Mobile Application", "Dashboard", "AI/ML", "Productivity", "Web Platform"];

  $: filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
</script>

<section id="portfolio" bind:this={sectionElement} class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    
    <!-- Section Header -->
    <div class="text-center mb-16 transform transition-all duration-1000 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        My Portfolio
      </h2>
      <div class="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        A showcase of projects that demonstrate my expertise across different technologies and domains.
      </p>
    </div>

    <!-- Category Filter -->
    <div class="flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-300 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      {#each categories as category}
        <button
          on:click={() => selectedCategory = category}
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {
            selectedCategory === category 
              ? 'bg-purple-600 text-white shadow-lg' 
              : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
          }"
        >
          {category}
        </button>
      {/each}
    </div>

    <!-- Projects Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredProjects as project, index}
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}" style="transition-delay: {index * 100 + 500}ms">
          
          <!-- Project Image -->
          <div class="relative overflow-hidden h-48 bg-gradient-to-br from-purple-100 to-gray-100">
            <div class="absolute inset-0 bg-purple-600/10 group-hover:bg-purple-600/20 transition-all duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <!-- Category Badge -->
            <div class="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full mb-3">
              {project.category}
            </div>

            <!-- Project Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
              {project.title}
            </h3>

            <!-- Project Description -->
            <p class="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>

            <!-- Technologies Used -->
            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.tech as tech}
                <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-medium">
                  {tech}
                </span>
              {/each}
            </div>

            <!-- Project Links -->
            <div class="flex space-x-3">
              <button class="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium text-sm">
                View Project
              </button>
              <button class="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium text-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16 transform transition-all duration-1000 delay-700 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <p class="text-gray-600 mb-6">Interested in working together?</p>
      <button 
        on:click={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        class="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-medium"
      >
        Start a Project
      </button>
    </div>
  </div>
</section>
