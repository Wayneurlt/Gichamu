<template>
  <section id="about" class="py-20 bg-silver-gradient">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4 font-poppins">
          About <span class="text-gold-gradient">Hiddenville Construction Ltd</span>
        </h2>
        <div class="w-24 h-1 bg-gold-gradient mx-auto mb-6"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are a leading construction company dedicated to delivering exceptional projects with integrity, innovation, and unwavering commitment to quality.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <!-- Text Content -->
        <div class="space-y-6">
          <p class="text-lg text-gray-700 leading-relaxed">
            Founded with a vision to transform the construction landscape, Hiddenville Construction Ltd has grown from a small local contractor to a trusted name in the industry. Our journey began with a simple belief: that every project, regardless of size, deserves the highest level of craftsmanship and attention to detail.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Today, we stand as a testament to what can be achieved when passion meets professionalism. Our team of skilled craftsmen, engineers, and project managers work tirelessly to bring our clients' visions to life, ensuring that each project not only meets but exceeds expectations.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            We pride ourselves on our collaborative approach, working closely with clients, architects, and stakeholders to ensure seamless project delivery from conception to completion.
          </p>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&auto=format&q=80" 
              alt="Construction Site" 
              class="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <!-- Decorative Elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-gold-gradient rounded-full opacity-20"></div>
          <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-gradient rounded-full opacity-10"></div>
        </div>
      </div>

      <!-- What Sets Us Apart -->
      <div class="mb-16">
        <h3 class="text-3xl font-bold text-gray-900 text-center mb-12 font-poppins">
          What Sets Us Apart
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
          >
            <div class="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="feature.icon" class="w-8 h-8 text-white" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-4 font-poppins">
              {{ feature.title }}
            </h4>
            <p class="text-gray-600 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Company Stats -->
      <div class="bg-navy-gradient rounded-3xl p-12 text-center">
        <h3 class="text-3xl font-bold text-white mb-12 font-poppins">
          Our Track Record
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in stats" :key="index" class="text-center">
            <div class="text-4xl font-bold text-gold-400 mb-2 font-poppins">
              {{ stat.value }}
            </div>
            <div class="text-gray-300 text-lg">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'heroicons:users',
    title: 'Collaborative Approach',
    description: 'We work closely with our clients, architects, and stakeholders to ensure every project meets your exact specifications and vision.'
  },
  {
    icon: 'heroicons:light-bulb',
    title: 'Innovation & Sustainability',
    description: 'We embrace cutting-edge construction techniques and sustainable practices to deliver environmentally responsible projects.'
  },
  {
    icon: 'heroicons:trophy',
    title: 'Proven Track Record',
    description: 'With over 15 years of experience and 200+ completed projects, we have built a reputation for excellence and reliability.'
  }
]

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '100%', label: 'Quality Assurance' }
]
</script>
