<template>
  <section class="relative min-h-screen bg-navy-gradient flex items-center justify-center overflow-hidden pt-24">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-pattern"></div>
    </div>

    <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <!-- Logo -->
      <div class="mb-8">
        <div class="relative inline-block">
          <img 
            src="~/assets/images/logo.png" 
            alt="Hiddenville Construction Logo" 
            class="h-20 w-auto mx-auto object-contain"
          />
        </div>
      </div>

      <!-- Company Name -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins">
        <span class="text-gold-gradient">Hiddenville</span>
        <br>
        <span class="text-white">Construction Ltd</span>
      </h1>

      <!-- Tagline -->
      <p class="text-xl sm:text-2xl text-gray-300 mb-8 font-light font-inter">
        Turning Your Vision Into a Reality
      </p>

      <!-- Description -->
      <p class="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
        With over 15 years of excellence in construction, we deliver innovative, sustainable, and high-quality projects that exceed expectations.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NuxtLink 
          to="/services"
          class="bg-gold-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 min-w-[200px] text-center"
        >
          Our Services
        </NuxtLink>
        <NuxtLink 
          to="/contact"
          class="border-2 border-gold-500 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-500 hover:text-white transition-all duration-300 min-w-[200px] text-center"
        >
          Contact Us
        </NuxtLink>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
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
  </section>
</template>

<script setup lang="ts">
// Simple hero without GSAP
</script>
