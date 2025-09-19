<template>
  <footer class="bg-navy-gradient text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center">
        <div class="flex items-center justify-center space-x-2 mb-6">
          <img 
            src="~/assets/images/logo.png" 
            alt="Hiddenville Construction" 
            class="h-20 w-auto object-contain"
          />
        </div>
        <p class="text-gray-300 mb-4">
          Turning your vision into reality with professional construction services.
        </p>
        <div class="text-gray-400 text-sm">
          © {{ currentYear }} Hiddenville Construction Ltd. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
