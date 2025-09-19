<template>
  <section class="py-24 bg-gradient-to-br from-slate-900 via-navy-gradient to-slate-800 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 right-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm font-medium backdrop-blur-sm mb-6">
          <span class="w-2 h-2 bg-gold-400 rounded-full mr-2 animate-pulse"></span>
          Our Foundation
        </div>
        <h2 class="text-5xl sm:text-6xl font-bold text-white mb-6 font-poppins">
          Values & <span class="text-gold-gradient bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Approach</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          These four pillars guide everything we do, ensuring we deliver exceptional results while maintaining the highest standards of professionalism.
        </p>
      </div>

      <!-- Values Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div 
          v-for="(value, index) in values" 
          :key="index"
          class="group"
        >
          <div class="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 h-full">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gold-gradient/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Content -->
            <div class="relative z-10">
              <!-- Icon -->
              <div class="w-20 h-20 bg-gold-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Icon :name="value.icon" class="w-10 h-10 text-white" />
              </div>

              <!-- Title -->
              <h3 class="text-2xl font-bold text-white mb-4 font-poppins group-hover:text-gold-400 transition-colors duration-300">
                {{ value.title }}
              </h3>

              <!-- Description -->
              <p class="text-gray-300 leading-relaxed mb-6 text-lg">
                {{ value.description }}
              </p>

              <!-- Key Points -->
              <div class="space-y-3">
                <div 
                  v-for="point in value.keyPoints" 
                  :key="point"
                  class="flex items-start group/item"
                >
                  <div class="w-6 h-6 bg-gold-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-gold-500 transition-colors duration-300">
                    <Icon name="heroicons:check" class="w-4 h-4 text-gold-400 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span class="text-gray-300 group-hover/item:text-white transition-colors duration-300">{{ point }}</span>
                </div>
              </div>
            </div>

            <!-- Decorative Element -->
            <div class="absolute top-4 right-4 w-12 h-12 border border-gold-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      <!-- Process Section -->
      <div class="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10">
        <div class="text-center mb-12">
          <h3 class="text-4xl font-bold text-white mb-4 font-poppins">
            Our <span class="text-gold-gradient">Process</span>
          </h3>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto">
            A systematic approach that ensures every project is delivered with precision and excellence.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(step, index) in processSteps" 
            :key="index"
            class="group text-center relative"
          >
            <!-- Connecting Line -->
            <div 
              v-if="index < processSteps.length - 1"
              class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gold-500/50 to-transparent transform -translate-y-1/2 z-0"
            ></div>

            <!-- Step Container -->
            <div class="relative z-10">
              <!-- Step Number -->
              <div class="relative w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {{ index + 1 }}
                <!-- Glow Effect -->
                <div class="absolute inset-0 bg-gold-gradient rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              
              <!-- Step Content -->
              <h4 class="text-xl font-semibold text-white mb-4 font-poppins group-hover:text-gold-400 transition-colors duration-300">
                {{ step.title }}
              </h4>
              <p class="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const values = [
  {
    icon: 'heroicons:shield-check',
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards, ensuring transparency, honesty, and accountability in all our dealings.',
    keyPoints: [
      'Transparent communication',
      'Ethical business practices',
      'Accountable project management',
      'Honest cost estimates'
    ]
  },
  {
    icon: 'heroicons:heart',
    title: 'Passion',
    description: 'Our team is driven by a genuine passion for construction excellence, bringing enthusiasm and dedication to every project.',
    keyPoints: [
      'Enthusiastic team members',
      'Dedication to quality',
      'Continuous improvement',
      'Love for craftsmanship'
    ]
  },
  {
    icon: 'heroicons:user-group',
    title: 'Client First',
    description: 'Your satisfaction is our priority. We listen, understand, and deliver solutions that exceed your expectations.',
    keyPoints: [
      'Client-focused approach',
      'Personalized service',
      'Responsive communication',
      'Exceeding expectations'
    ]
  },
  {
    icon: 'heroicons:light-bulb',
    title: 'Innovation & Sustainability',
    description: 'We embrace cutting-edge technology and sustainable practices to deliver environmentally responsible and efficient solutions.',
    keyPoints: [
      'Modern construction methods',
      'Sustainable materials',
      'Energy-efficient designs',
      'Environmental responsibility'
    ]
  }
]

const processSteps = [
  {
    title: 'Consultation',
    description: 'We begin with a thorough consultation to understand your vision, requirements, and project goals.'
  },
  {
    title: 'Planning',
    description: 'Our team develops a comprehensive plan, including timelines, budgets, and resource allocation.'
  },
  {
    title: 'Execution',
    description: 'We execute the project with precision, maintaining quality standards and adhering to timelines.'
  },
  {
    title: 'Delivery',
    description: 'We ensure smooth project completion and handover, with ongoing support and maintenance services.'
  }
]
</script>
