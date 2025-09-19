<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Page Header -->
    <section class="pt-24 pb-16 bg-navy-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
          About <span class="text-gold-gradient">Hiddenville Construction</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Learn more about our company, our values, and our commitment to excellence in construction.
        </p>
      </div>
    </section>
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Values Section -->
    <ValuesSection />
    
    <!-- Team Section -->
    <TeamSection />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us - Hiddenville Construction Ltd',
  meta: [
    { name: 'description', content: 'Learn about Hiddenville Construction Ltd - our history, values, team, and commitment to excellence in construction.' }
  ]
})
</script>
