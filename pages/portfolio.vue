<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Page Header -->
    <section class="pt-24 pb-16 bg-navy-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
          Our <span class="text-gold-gradient">Portfolio</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explore our diverse portfolio of successful projects across various sectors, showcasing our expertise and commitment to excellence.
        </p>
      </div>
    </section>
    
    <!-- Portfolio Section -->
    <PortfolioSection />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Portfolio - Hiddenville Construction Ltd',
  meta: [
    { name: 'description', content: 'View our portfolio of completed construction projects including residential, commercial, industrial, and healthcare projects.' }
  ]
})
</script>
