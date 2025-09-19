<template>
  <section class="relative min-h-screen bg-navy-gradient flex items-center justify-center overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-pattern"></div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-20 h-20 border border-gold-500/20 rounded-full animate-spin-slow"></div>
    <div class="absolute bottom-20 right-10 w-32 h-32 border border-gold-500/10 rounded-full animate-spin-slow" style="animation-direction: reverse; animation-duration: 15s;"></div>
    <div class="absolute top-1/2 left-20 w-16 h-16 bg-gold-500/5 rounded-full animate-pulse"></div>

    <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <!-- Logo with Metallic Effect -->
      <div class="mb-8 animate-fade-in-up">
        <div class="relative inline-block">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=200&fit=crop&crop=center&auto=format&q=80" 
              alt="Hiddenville Construction Ltd" 
              class="h-32 w-32 mx-auto rounded-full object-cover animate-glow border-4 border-gold-500"
              ref="logoRef"
            />
          <div class="absolute inset-0 animate-metallic-shine rounded-lg"></div>
        </div>
      </div>

      <!-- Company Name -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins animate-fade-in-up" style="animation-delay: 0.2s;">
        <span class="text-gold-gradient">Hiddenville</span>
        <br>
        <span class="text-white">Construction Ltd</span>
      </h1>

      <!-- Tagline -->
      <p class="text-xl sm:text-2xl text-gray-300 mb-8 font-light font-inter animate-fade-in-up" style="animation-delay: 0.4s;">
        Turning Your Vision Into a Reality
      </p>

      <!-- Description -->
      <p class="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.6s;">
        With over 15 years of excellence in construction, we deliver innovative, sustainable, and high-quality projects that exceed expectations.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style="animation-delay: 0.8s;">
        <NuxtLink 
          to="/services"
          class="bg-gold-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 hover-lift min-w-[200px] text-center"
        >
          Our Services
        </NuxtLink>
        <NuxtLink 
          to="/contact"
          class="border-2 border-gold-500 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-500 hover:text-white transition-all duration-300 hover-lift min-w-[200px] text-center"
        >
          Contact Us
        </NuxtLink>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in-up" style="animation-delay: 1s;">
        <div class="text-center">
          <div class="text-3xl font-bold text-gold-400 mb-2">15+</div>
          <div class="text-gray-400">Years Experience</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-gold-400 mb-2">200+</div>
          <div class="text-gray-400">Projects Completed</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-gold-400 mb-2">100%</div>
          <div class="text-gray-400">Client Satisfaction</div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-gold-500 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logoRef = ref<HTMLImageElement>()

onMounted(() => {
  // Check if GSAP is available
  if (typeof window !== 'undefined' && window.gsap) {
    const gsap = window.gsap
    
    // GSAP animations for enhanced effects
    if (logoRef.value) {
      gsap.fromTo(logoRef.value, 
        { 
          scale: 0.8, 
          opacity: 0,
          rotation: -10
        },
        { 
          scale: 1, 
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)"
        }
      )
    }

    // Parallax effect for floating elements
    gsap.to(".animate-spin-slow", {
      y: -20,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    })
  }
})
</script>
