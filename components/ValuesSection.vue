<template>
  <section class="py-20 bg-navy-gradient">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white mb-4 font-poppins">
          Our Values & <span class="text-gold-gradient">Approach</span>
        </h2>
        <div class="w-24 h-1 bg-gold-gradient mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          These four pillars guide everything we do, ensuring we deliver exceptional results while maintaining the highest standards of professionalism.
        </p>
      </div>

      <!-- Values Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-gradient/30 hidden lg:block"></div>

        <!-- Values Grid -->
        <div class="space-y-16">
          <div 
            v-for="(value, index) in values" 
            :key="index"
            class="relative flex items-center"
            :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-gradient rounded-full border-4 border-navy-gradient z-10 hidden lg:block"></div>

            <!-- Content Card -->
            <div class="w-full lg:w-5/12">
              <div 
                class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold-500/20 hover:bg-white/15 transition-all duration-300 card-hover group"
                :class="index % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'"
              >
                <!-- Icon -->
                <div class="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon :name="value.icon" class="w-8 h-8 text-white" />
                </div>

                <!-- Content -->
                <h3 class="text-2xl font-bold text-white mb-4 font-poppins">
                  {{ value.title }}
                </h3>
                <p class="text-gray-300 leading-relaxed mb-6">
                  {{ value.description }}
                </p>

                <!-- Key Points -->
                <ul class="space-y-2">
                  <li 
                    v-for="point in value.keyPoints" 
                    :key="point"
                    class="flex items-center text-gray-300"
                  >
                    <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Spacer for opposite side -->
            <div class="hidden lg:block w-5/12"></div>
          </div>
        </div>
      </div>

      <!-- Process Steps -->
      <div class="mt-20">
        <h3 class="text-3xl font-bold text-white text-center mb-12 font-poppins">
          Our Process
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div 
            v-for="(step, index) in processSteps" 
            :key="index"
            class="text-center group"
          >
            <!-- Step Number -->
            <div class="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
              {{ index + 1 }}
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
