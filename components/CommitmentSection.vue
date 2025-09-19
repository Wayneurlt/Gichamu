<template>
  <section class="py-20 bg-navy-gradient">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white mb-4 font-poppins">
          Our <span class="text-gold-gradient">Commitment</span> & CSR
        </h2>
        <div class="w-24 h-1 bg-gold-gradient mx-auto mb-6"></div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We are committed to sustainable practices, community development, and maintaining the highest standards of quality and safety in all our operations.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Text Content -->
        <div class="space-y-8">
          <!-- Sustainability -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold-500/20">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center mr-4">
                <Icon name="heroicons:leaf" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white font-poppins">Sustainability</h3>
            </div>
            <p class="text-gray-300 leading-relaxed mb-4">
              We are committed to environmentally responsible construction practices that minimize our ecological footprint while delivering high-quality projects.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                Green building materials and techniques
              </li>
              <li class="flex items-center text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                Energy-efficient design solutions
              </li>
              <li class="flex items-center text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                Waste reduction and recycling programs
              </li>
            </ul>
          </div>

          <!-- Health & Safety -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold-500/20">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center mr-4">
                <Icon name="heroicons:shield-check" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white font-poppins">Health & Safety</h3>
            </div>
            <p class="text-gray-300 leading-relaxed mb-4">
              The safety of our workers, clients, and communities is our top priority. We maintain rigorous safety standards and continuous training programs.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                Comprehensive safety training programs
              </li>
              <li class="flex items-center text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                Regular safety audits and inspections
              </li>
              <li class="flex items-center text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                Emergency response protocols
              </li>
            </ul>
          </div>
        </div>

        <!-- Illustration/Image -->
        <div class="relative">
          <div class="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&auto=format&q=80" 
              alt="Sustainable Construction" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          <!-- Floating Stats -->
          <div class="absolute -top-6 -right-6 bg-gold-gradient rounded-2xl p-6 text-white">
            <div class="text-3xl font-bold mb-1">100%</div>
            <div class="text-sm">Safety Record</div>
          </div>
          
          <div class="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-gold-500/20">
            <div class="text-3xl font-bold mb-1">50%</div>
            <div class="text-sm">Waste Reduction</div>
          </div>
        </div>
      </div>

      <!-- Quality Management & CSR -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Quality Management -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold-500/20">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center mr-4">
              <Icon name="heroicons:star" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white font-poppins">Quality Management</h3>
          </div>
          <p class="text-gray-300 leading-relaxed mb-4">
            We maintain the highest quality standards through rigorous quality control processes and continuous improvement initiatives.
          </p>
          <ul class="space-y-2">
            <li class="flex items-center text-gray-300">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
              ISO 9001:2015 certified processes
            </li>
            <li class="flex items-center text-gray-300">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
              Regular quality audits and inspections
            </li>
            <li class="flex items-center text-gray-300">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
              Continuous improvement programs
            </li>
          </ul>
        </div>

        <!-- Corporate Social Responsibility -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gold-500/20">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center mr-4">
              <Icon name="heroicons:heart" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white font-poppins">Corporate Social Responsibility</h3>
          </div>
          <p class="text-gray-300 leading-relaxed mb-4">
            We believe in giving back to the communities we serve through various social responsibility initiatives and community development programs.
          </p>
          <ul class="space-y-2">
            <li class="flex items-center text-gray-300">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
              Community development projects
            </li>
            <li class="flex items-center text-gray-300">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
              Skills training and employment opportunities
            </li>
            <li class="flex items-center text-gray-300">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
              Environmental conservation initiatives
            </li>
          </ul>
        </div>
      </div>

      <!-- Certifications & Awards -->
      <div class="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-gold-500/20">
        <h3 class="text-3xl font-bold text-white text-center mb-12 font-poppins">
          Certifications & Awards
        </h3>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(cert, index) in certifications" :key="index" class="text-center group">
            <div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="cert.icon" class="w-10 h-10 text-gold-400" />
            </div>
            <h4 class="text-lg font-semibold text-white mb-2 font-poppins">
              {{ cert.title }}
            </h4>
            <p class="text-gray-400 text-sm">
              {{ cert.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const certifications = [
  {
    icon: 'heroicons:shield-check',
    title: 'ISO 9001:2015',
    description: 'Quality Management System'
  },
  {
    icon: 'heroicons:leaf',
    title: 'ISO 14001',
    description: 'Environmental Management'
  },
  {
    icon: 'heroicons:user-group',
    title: 'OHSAS 18001',
    description: 'Occupational Health & Safety'
  },
  {
    icon: 'heroicons:trophy',
    title: 'Best Contractor',
    description: 'Construction Excellence Award'
  }
]
</script>
