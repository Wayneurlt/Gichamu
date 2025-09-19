<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Page Header -->
    <section class="pt-24 pb-16 bg-navy-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
          Our <span class="text-gold-gradient">Services</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Comprehensive construction services tailored to meet your specific needs, from initial design to final delivery.
        </p>
      </div>
    </section>
    
    <!-- Services Section -->
    <ServicesSection />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Services - Hiddenville Construction Ltd',
  meta: [
    { name: 'description', content: 'Professional construction services including Design & Build, Project Management, Remote Projects Control, and more.' }
  ]
})
</script>
