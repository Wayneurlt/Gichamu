<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-navy-gradient/95 backdrop-blur-md border-b border-gold-500/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img 
              src="~/assets/images/logo.jpeg" 
              alt="Hiddenville Construction" 
              class="h-10 w-10 rounded-full object-cover border-2 border-gold-500 animate-glow" 
            />
            <span class="text-white font-bold text-xl font-poppins">Hiddenville Construction</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.name"
              :to="item.href"
              class="text-gray-300 hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            >
              {{ item.name }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <NuxtLink 
            to="/contact"
            class="bg-gold-gradient text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 hover-lift"
          >
            Get Quote
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-300 hover:text-gold-400 focus:outline-none focus:text-gold-400"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-show="mobileMenuOpen" class="md:hidden bg-navy-gradient/98 backdrop-blur-md border-t border-gold-500/20">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink 
          v-for="item in navigation" 
          :key="item.name"
          :to="item.href"
          @click="mobileMenuOpen = false"
          class="text-gray-300 hover:text-gold-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
        >
          {{ item.name }}
        </NuxtLink>
        <NuxtLink 
          to="/contact"
          @click="mobileMenuOpen = false"
          class="bg-gold-gradient text-white block px-3 py-2 text-base font-medium rounded-lg mx-3 mt-4 text-center"
        >
          Get Quote
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
