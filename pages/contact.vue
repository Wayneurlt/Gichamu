<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Page Header -->
    <section class="pt-24 pb-16 bg-navy-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
          Contact <span class="text-gold-gradient">Us</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Ready to start your next project? Contact us today for a consultation and let's turn your vision into reality.
        </p>
      </div>
    </section>
    
    <!-- Contact Section -->
    <ContactSection />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact Us - Hiddenville Construction Ltd',
  meta: [
    { name: 'description', content: 'Get in touch with Hiddenville Construction Ltd. Contact us for your construction project needs in Kenya.' }
  ]
})
</script>
