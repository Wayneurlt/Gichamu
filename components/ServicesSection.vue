<template>
  <section class="py-20 bg-navy-gradient">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white mb-4 font-poppins">
          Our <span class="text-gold-gradient">Services</span>
        </h2>
        <div class="w-24 h-1 bg-gold-gradient mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We offer comprehensive construction services tailored to meet your specific needs, from initial design to final delivery.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="group perspective-1000"
          @mouseenter="flipCard(index, true)"
          @mouseleave="flipCard(index, false)"
        >
          <!-- Service Card -->
          <div class="relative w-full h-80 preserve-3d transition-transform duration-700"
               :class="{ 'rotate-y-180': flippedCards[index] }">
            
            <!-- Front of Card -->
            <div class="absolute inset-0 w-full h-full backface-hidden bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold-500/20">
              <!-- Icon -->
              <div class="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon :name="service.icon" class="w-8 h-8 text-white" />
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white mb-4 font-poppins">
                {{ service.title }}
              </h3>
              <p class="text-gray-300 leading-relaxed">
                {{ service.shortDescription }}
              </p>

              <!-- Hover Indicator -->
              <div class="absolute bottom-6 right-6 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="heroicons:arrow-right" class="w-6 h-6" />
              </div>
            </div>

            <!-- Back of Card -->
            <div class="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gold-gradient rounded-2xl p-8 flex flex-col justify-center">
              <h3 class="text-2xl font-bold text-white mb-4 font-poppins text-center">
                {{ service.title }}
              </h3>
              
              <!-- Full Features List -->
              <ul class="space-y-3 mb-6">
                <li 
                  v-for="feature in service.features" 
                  :key="feature"
                  class="flex items-center text-white text-sm"
                >
                  <Icon name="heroicons:check-circle" class="w-4 h-4 text-white mr-3 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>

              <!-- CTA Button -->
              <button class="bg-white text-gold-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Service Process -->
      <div class="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-gold-500/20">
        <h3 class="text-3xl font-bold text-white text-center mb-12 font-poppins">
          How We Work
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div 
            v-for="(step, index) in serviceProcess" 
            :key="index"
            class="text-center group"
          >
            <!-- Step Number -->
            <div class="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 relative">
              {{ index + 1 }}
              <!-- Connecting Line -->
              <div 
                v-if="index < serviceProcess.length - 1"
                class="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gold-gradient/30 transform -translate-y-1/2"
              ></div>
            </div>
            
            <!-- Step Content -->
            <h4 class="text-xl font-semibold text-white mb-4 font-poppins">
              {{ step.title }}
            </h4>
            <p class="text-gray-300 leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const flippedCards = ref<boolean[]>(new Array(6).fill(false))

const flipCard = (index: number, isFlipped: boolean) => {
  flippedCards.value[index] = isFlipped
}

const services = [
  {
    icon: 'heroicons:home-modern',
    title: 'Design & Build',
    shortDescription: 'Complete design and construction services from concept to completion.',
    features: [
      'Architectural design',
      '3D visualization',
      'Material selection',
      'Construction management',
      'Quality control',
      'Project delivery'
    ]
  },
  {
    icon: 'heroicons:clipboard-document-list',
    title: 'Project Management',
    shortDescription: 'Professional project coordination and management services.',
    features: [
      'Timeline management',
      'Budget control',
      'Resource allocation',
      'Risk assessment',
      'Progress monitoring',
      'Stakeholder communication'
    ]
  },
  {
    icon: 'heroicons:computer-desktop',
    title: 'Remote Projects Control',
    shortDescription: 'Advanced monitoring and control systems for remote project oversight.',
    features: [
      'Real-time monitoring',
      'Digital dashboards',
      'Progress tracking',
      'Quality assurance',
      'Remote supervision',
      'Data analytics'
    ]
  },
  {
    icon: 'heroicons:building-office',
    title: 'Development Management',
    shortDescription: 'Comprehensive development management for large-scale projects.',
    features: [
      'Strategic planning',
      'Feasibility studies',
      'Regulatory compliance',
      'Stakeholder management',
      'Financial planning',
      'Risk mitigation'
    ]
  },
  {
    icon: 'heroicons:paint-brush',
    title: 'Interior Design',
    shortDescription: 'Creative interior design solutions that enhance functionality and aesthetics.',
    features: [
      'Space planning',
      'Color schemes',
      'Furniture selection',
      'Lighting design',
      'Material specification',
      '3D renderings'
    ]
  },
  {
    icon: 'heroicons:document-magnifying-glass',
    title: 'Feasibility Studies',
    shortDescription: 'Comprehensive analysis and evaluation of project viability.',
    features: [
      'Market analysis',
      'Financial assessment',
      'Technical evaluation',
      'Risk analysis',
      'Regulatory review',
      'Recommendations'
    ]
  }
]

const serviceProcess = [
  {
    title: 'Consultation',
    description: 'Initial meeting to understand your needs, budget, and project requirements.'
  },
  {
    title: 'Planning',
    description: 'Detailed project planning including design, timeline, and resource allocation.'
  },
  {
    title: 'Execution',
    description: 'Professional implementation with regular updates and quality control.'
  },
  {
    title: 'Delivery',
    description: 'Final inspection, handover, and ongoing support for your project.'
  }
]
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
