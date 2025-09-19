<template>
  <section class="py-20 bg-silver-gradient">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4 font-poppins">
          Our <span class="text-gold-gradient">Project Portfolio</span>
        </h2>
        <div class="w-24 h-1 bg-gold-gradient mx-auto mb-6"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our diverse portfolio of successful projects across various sectors, showcasing our expertise and commitment to excellence.
        </p>
      </div>

      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          class="px-6 py-3 rounded-full font-medium transition-all duration-300"
          :class="activeCategory === category 
            ? 'bg-gold-gradient text-white shadow-lg' 
            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'"
        >
          {{ category }}
        </button>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="index"
          class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden h-64">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span class="bg-gold-gradient text-white px-3 py-1 rounded-full text-sm font-medium">
                {{ project.category }}
              </span>
            </div>

            <!-- View Details Button -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <button class="bg-white text-gold-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2 font-poppins">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ project.description }}
            </p>
            
            <!-- Project Details -->
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-500">Contract Value:</span>
                <span class="font-semibold text-gold-600">{{ project.contractValue }}</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-500">Duration:</span>
                <span class="font-semibold text-gray-700">{{ project.duration }}</span>
              </div>
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-500">Status:</span>
                <span class="font-semibold text-green-600">{{ project.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Portfolio Stats -->
      <div class="bg-navy-gradient rounded-3xl p-12">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-white mb-4 font-poppins">
            Portfolio Statistics
          </h3>
          <p class="text-gray-300 text-lg">
            Our track record speaks for itself
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in portfolioStats" :key="index" class="text-center">
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
const activeCategory = ref('All')

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Healthcare', 'Special Projects']

const projects = [
  {
    title: 'Luxury Residential Complex',
    category: 'Residential',
    image: '/portfolio/residential1.jpg',
    description: 'Modern luxury residential complex with 50 units, featuring contemporary design and sustainable building practices.',
    contractValue: 'KSh 250M',
    duration: '18 months',
    status: 'Completed'
  },
  {
    title: 'Corporate Office Tower',
    category: 'Commercial',
    image: '/portfolio/commercial1.jpg',
    description: '15-story corporate office building with state-of-the-art facilities and energy-efficient systems.',
    contractValue: 'KSh 500M',
    duration: '24 months',
    status: 'Completed'
  },
  {
    title: 'Manufacturing Plant',
    category: 'Industrial',
    image: '/portfolio/industrial1.jpg',
    description: 'Large-scale manufacturing facility with specialized equipment and safety systems.',
    contractValue: 'KSh 800M',
    duration: '30 months',
    status: 'In Progress'
  },
  {
    title: 'Medical Center',
    category: 'Healthcare',
    image: '/portfolio/healthcare1.jpg',
    description: 'Comprehensive medical facility with specialized departments and modern equipment.',
    contractValue: 'KSh 350M',
    duration: '20 months',
    status: 'Completed'
  },
  {
    title: 'Shopping Mall',
    category: 'Commercial',
    image: '/portfolio/commercial2.jpg',
    description: 'Multi-level shopping complex with retail spaces, restaurants, and entertainment facilities.',
    contractValue: 'KSh 600M',
    duration: '28 months',
    status: 'Completed'
  },
  {
    title: 'Educational Campus',
    category: 'Special Projects',
    image: '/portfolio/special1.jpg',
    description: 'Modern educational campus with classrooms, laboratories, and recreational facilities.',
    contractValue: 'KSh 400M',
    duration: '22 months',
    status: 'Completed'
  },
  {
    title: 'Apartment Complex',
    category: 'Residential',
    image: '/portfolio/residential2.jpg',
    description: 'Affordable housing project with 100 units, focusing on sustainability and community design.',
    contractValue: 'KSh 300M',
    duration: '16 months',
    status: 'Completed'
  },
  {
    title: 'Warehouse Facility',
    category: 'Industrial',
    image: '/portfolio/industrial2.jpg',
    description: 'Large warehouse and distribution center with advanced logistics systems.',
    contractValue: 'KSh 200M',
    duration: '12 months',
    status: 'Completed'
  },
  {
    title: 'Hospital Extension',
    category: 'Healthcare',
    image: '/portfolio/healthcare2.jpg',
    description: 'Hospital expansion project adding new departments and patient care facilities.',
    contractValue: 'KSh 450M',
    duration: '26 months',
    status: 'In Progress'
  }
]

const portfolioStats = [
  { value: '200+', label: 'Projects Completed' },
  { value: 'KSh 5B+', label: 'Total Value' },
  { value: '15+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})
</script>
