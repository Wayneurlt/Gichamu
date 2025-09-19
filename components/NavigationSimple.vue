<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-navy-gradient/95 backdrop-blur-md border-b border-gold-500/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-24">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img 
              src="~/assets/images/logo.png" 
              alt="Hiddenville Construction" 
              class="h-20 w-auto object-contain"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <NuxtLink 
              to="/"
              class="text-gray-300 hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/about"
              class="text-gray-300 hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </NuxtLink>
            <NuxtLink 
              to="/services"
              class="text-gray-300 hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Services
            </NuxtLink>
            <NuxtLink 
              to="/contact"
              class="text-gray-300 hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </NuxtLink>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <NuxtLink 
            to="/contact"
            class="bg-gold-gradient text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Get Quote
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Simple navigation without complex logic
</script>
