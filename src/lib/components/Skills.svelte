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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "React & Next.js", level: 90 },
        { name: "Svelte/SvelteKit", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "CSS/Tailwind/SCSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js & Express", level: 90 },
        { name: "Python & FastAPI", level: 85 },
        { name: "Deno", level: 80 },
        { name: "GraphQL & REST APIs", level: 88 },
        { name: "Microservices", level: 82 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      skills: [
        { name: "PostgreSQL & MongoDB", level: 85 },
        { name: "AWS & Google Cloud", level: 80 },
        { name: "Docker & Kubernetes", level: 78 },
        { name: "Redis & Caching", level: 82 },
        { name: "Database Design", level: 85 }
      ]
    },
    {
      title: "Tools & Methodologies",
      icon: "🛠️",
      skills: [
        { name: "Git & Version Control", level: 95 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Testing (Jest/Cypress)", level: 80 },
        { name: "Code Review", level: 88 }
      ]
    }
  ];

  let animatedSkills = new Set();

  function animateSkill(skillName: string, targetLevel: number) {
    if (animatedSkills.has(skillName)) return;
    animatedSkills.add(skillName);
    
    const element = document.getElementById(`skill-${skillName.replace(/[^a-zA-Z0-9]/g, '')}`);
    if (!element) return;
    
    let currentLevel = 0;
    const increment = targetLevel / 50; // Animation duration
    
    const animate = () => {
      currentLevel += increment;
      if (currentLevel >= targetLevel) {
        currentLevel = targetLevel;
        element.style.width = `${currentLevel}%`;
        return;
      }
      element.style.width = `${currentLevel}%`;
      requestAnimationFrame(animate);
    };
    
    setTimeout(() => {
      animate();
    }, 500);
  }

  $: if (isVisible) {
    skillCategories.forEach(category => {
      category.skills.forEach(skill => {
        animateSkill(skill.name, skill.level);
      });
    });
  }
</script>

<section id="skills" bind:this={sectionElement} class="py-20 bg-white">
  <div class="container mx-auto px-6">
    
    <!-- Section Header -->
    <div class="text-center mb-16 transform transition-all duration-1000 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Skills & Expertise
      </h2>
      <div class="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        A comprehensive overview of my technical skills and proficiency levels across different technologies and tools.
      </p>
    </div>

    <!-- Skills Grid -->
    <div class="grid lg:grid-cols-2 gap-8 mb-16">
      {#each skillCategories as category, categoryIndex}
        <div class="bg-gray-50 rounded-2xl p-8 transform transition-all duration-1000 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}" style="transition-delay: {categoryIndex * 200 + 300}ms">
          
          <!-- Category Header -->
          <div class="flex items-center mb-6">
            <span class="text-3xl mr-4">{category.icon}</span>
            <h3 class="text-2xl font-bold text-gray-900">{category.title}</h3>
          </div>

          <!-- Skills List -->
          <div class="space-y-4">
            {#each category.skills as skill}
              <div class="skill-item">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-gray-700 font-medium">{skill.name}</span>
                  <span class="text-purple-600 font-bold text-sm">{skill.level}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    id="skill-{skill.name.replace(/[^a-zA-Z0-9]/g, '')}"
                    class="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style="width: 0%"
                  ></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Additional Skills & Certifications -->
    <div class="bg-gradient-to-br from-purple-50 to-gray-50 rounded-2xl p-8 transform transition-all duration-1000 delay-700 {isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
      <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Expertise</h3>
      
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Soft Skills -->
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h4 class="text-lg font-bold text-gray-900 mb-3">Leadership</h4>
          <p class="text-gray-600 text-sm">Team leadership, mentoring, and project management experience</p>
        </div>

        <!-- Problem Solving -->
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h4 class="text-lg font-bold text-gray-900 mb-3">Problem Solving</h4>
          <p class="text-gray-600 text-sm">Analytical thinking and innovative solution development</p>
        </div>

        <!-- Communication -->
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h4 class="text-lg font-bold text-gray-900 mb-3">Communication</h4>
          <p class="text-gray-600 text-sm">Clear technical communication and stakeholder collaboration</p>
        </div>
      </div>

      <!-- Technologies Tags -->
      <div class="mt-8 pt-8 border-t border-gray-200">
        <h4 class="text-lg font-bold text-gray-900 mb-4 text-center">Technologies I Work With</h4>
        <div class="flex flex-wrap justify-center gap-3">
          {#each ['JavaScript', 'TypeScript', 'React', 'Svelte', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'REST APIs', 'GraphQL', 'Tailwind CSS', 'Next.js', 'Express.js'] as tech}
            <span class="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-purple-300 hover:text-purple-600 transition-colors duration-200">
              {tech}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
