<template>
  <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-navy-gradient to-slate-800 flex items-center justify-center overflow-hidden pt-24">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <!-- Geometric Shapes -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-gold-500/10 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-lg animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-32 left-1/4 w-40 h-40 bg-gold-500/5 rounded-full blur-2xl animate-pulse" style="animation-delay: 2s;"></div>
      
      <!-- Floating Particles -->
      <div class="absolute top-1/4 left-1/3 w-2 h-2 bg-gold-400 rounded-full animate-ping" style="animation-delay: 0.5s;"></div>
      <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style="animation-delay: 1.5s;"></div>
      <div class="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-gold-300 rounded-full animate-ping" style="animation-delay: 2.5s;"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left Content -->
        <div class="text-left space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 mt-10 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm font-medium backdrop-blur-sm">
            <span class="w-2 h-2 bg-gold-400 rounded-full mr-2 animate-pulse"></span>
            Trusted Construction Partner Since 2008
          </div>

          <!-- Main Heading -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span class="text-white">Building</span>
            <br>
            <span class="text-gold-gradient bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Excellence
            </span>
            <br>
            <span class="text-white">Since Day One</span>
          </h1>

          <!-- Subtitle -->
          <p class="text-xl text-gray-300 leading-relaxed max-w-lg">
            Transforming visions into reality with innovative construction solutions, sustainable practices, and unwavering commitment to quality.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink 
              to="/services"
              class="group relative inline-flex items-center justify-center px-8 py-4 bg-gold-gradient text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span class="relative z-10">Explore Our Services</span>
              <div class="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
            
            <NuxtLink 
              to="/contact"
              class="group inline-flex items-center justify-center px-8 py-4 border-2 border-gold-500 text-gold-400 font-semibold rounded-xl hover:bg-gold-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <span class="mr-2">Get Free Quote</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Trust Indicators -->
          <div class="flex items-center space-x-8 pt-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-gold-400">15+</div>
              <div class="text-sm text-gray-400">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-gold-400">200+</div>
              <div class="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-gold-400">100%</div>
              <div class="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Hero Image -->
        <div class="relative">
          <!-- Main Image Container -->
          <div class="relative">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gold-gradient rounded-3xl blur-3xl opacity-20 scale-110"></div>
            
            <!-- Main Image -->
            <div class="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&auto=format&q=80" 
                alt="Modern Construction" 
                class="w-full h-80 object-cover rounded-2xl shadow-2xl"
                ref="heroImageRef"
              />
              
              <!-- Floating Cards -->
              <div class="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-white font-semibold text-sm">ISO Certified</div>
                    <div class="text-gray-400 text-xs">Quality Assured</div>
                  </div>
                </div>
              </div>

              <div class="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-white font-semibold text-sm">Eco-Friendly</div>
                    <div class="text-gray-400 text-xs">Sustainable Building</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div class="flex flex-col items-center space-y-2 text-gold-400">
        <span class="text-sm font-medium">Scroll to explore</span>
        <div class="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-gold-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroImageRef = ref<HTMLImageElement>()

onMounted(() => {
  // Check if GSAP is available
  if (typeof window !== 'undefined' && window.gsap) {
    const gsap = window.gsap
    
    // GSAP animations for enhanced effects
    if (heroImageRef.value) {
      gsap.fromTo(heroImageRef.value, 
        { 
          scale: 0.9, 
          opacity: 0,
          y: 50
        },
        { 
          scale: 1, 
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out"
        }
      )
    }

    // Floating animation for background elements
    gsap.to(".animate-pulse", {
      y: -20,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
      stagger: 0.5
    })
  }
})
</script>
