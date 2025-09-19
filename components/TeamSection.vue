<template>
  <section class="py-20 bg-silver-gradient">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4 font-poppins">
          Meet Our <span class="text-gold-gradient">Expert Team</span>
        </h2>
        <div class="w-24 h-1 bg-gold-gradient mx-auto mb-6"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our experienced professionals bring together decades of expertise in construction, engineering, and project management to deliver exceptional results.
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="index"
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
        >
          <!-- Member Photo -->
          <div class="relative overflow-hidden h-80">
            <img 
              :src="member.image" 
              :alt="member.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Social Links Overlay -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <div class="flex space-x-3">
                <a 
                  v-for="social in member.social" 
                  :key="social.platform"
                  :href="social.url"
                  class="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                >
                  <Icon :name="social.icon" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <!-- Member Info -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2 font-poppins">
              {{ member.name }}
            </h3>
            <p class="text-gold-600 font-semibold mb-3">
              {{ member.role }}
            </p>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ member.bio }}
            </p>
            
            <!-- Experience -->
            <div class="flex items-center text-sm text-gray-500">
              <Icon name="heroicons:briefcase" class="w-4 h-4 mr-2" />
              {{ member.experience }} years experience
            </div>
          </div>
        </div>
      </div>

      <!-- Team Stats -->
      <div class="bg-navy-gradient rounded-3xl p-12">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-white mb-4 font-poppins">
            Our Team Expertise
          </h3>
          <p class="text-gray-300 text-lg">
            Combined experience and specialized skills across all construction disciplines
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in teamStats" :key="index" class="text-center">
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
const teamMembers = [
  {
    name: 'John Mwangi',
    role: 'Managing Director',
    image: '/team/member1.jpg',
    bio: 'With over 20 years in construction management, John leads our team with vision and expertise in delivering complex projects.',
    experience: 20,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  },
  {
    name: 'Sarah Wanjiku',
    role: 'Project Manager',
    image: '/team/member2.jpg',
    bio: 'Sarah specializes in project coordination and client relations, ensuring smooth execution from start to finish.',
    experience: 15,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  },
  {
    name: 'David Kimani',
    role: 'Lead Engineer',
    image: '/team/member3.jpg',
    bio: 'David brings technical excellence and innovation to every project, ensuring structural integrity and quality.',
    experience: 18,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  },
  {
    name: 'Grace Akinyi',
    role: 'Design Specialist',
    image: '/team/member4.jpg',
    bio: 'Grace combines creativity with functionality, creating designs that are both beautiful and practical.',
    experience: 12,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  },
  {
    name: 'Peter Otieno',
    role: 'Site Supervisor',
    image: '/team/member5.jpg',
    bio: 'Peter ensures quality control and safety standards are maintained on every construction site.',
    experience: 16,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  },
  {
    name: 'Mary Njeri',
    role: 'Quality Assurance Manager',
    image: '/team/member6.jpg',
    bio: 'Mary oversees quality control processes, ensuring every project meets our high standards.',
    experience: 14,
    social: [
      { platform: 'linkedin', icon: 'heroicons:user', url: '#' },
      { platform: 'twitter', icon: 'heroicons:at-symbol', url: '#' }
    ]
  }
]

const teamStats = [
  { value: '95+', label: 'Combined Years Experience' },
  { value: '25+', label: 'Team Members' },
  { value: '15+', label: 'Specialized Skills' },
  { value: '100%', label: 'Certified Professionals' }
]
</script>
