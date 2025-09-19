<template>
  <footer class="bg-navy-gradient text-white">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-2 mb-6">
            <img 
              src="~/assets/images/logo.jpeg" 
              alt="Hiddenville Construction" 
              class="h-10 w-10 rounded-full object-cover border-2 border-gold-500" 
            />
            <span class="text-white font-bold text-xl font-poppins">Hiddenville Construction</span>
          </div>
          <p class="text-gray-300 leading-relaxed mb-6">
            Turning your vision into reality with over 15 years of excellence in construction, delivering innovative and sustainable projects.
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialMedia" 
              :key="social.name"
              :href="social.url"
              class="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6 font-poppins">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink 
                :to="link.href"
                class="text-gray-300 hover:text-gold-400 transition-colors duration-200"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-6 font-poppins">Our Services</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <span class="text-gray-300 hover:text-gold-400 transition-colors duration-200 cursor-pointer">
                {{ service }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-6 font-poppins">Contact Info</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <Icon name="heroicons:map-pin" class="w-5 h-5 text-gold-400 mr-3 mt-1 flex-shrink-0" />
              <div class="text-gray-300 text-sm">
                Westlands Business Centre<br>
                Nairobi, Kenya
              </div>
            </div>
            <div class="flex items-start">
              <Icon name="heroicons:phone" class="w-5 h-5 text-gold-400 mr-3 mt-1 flex-shrink-0" />
              <div class="text-gray-300 text-sm">
                +254 700 123 456<br>
                +254 20 123 4567
              </div>
            </div>
            <div class="flex items-start">
              <Icon name="heroicons:envelope" class="w-5 h-5 text-gold-400 mr-3 mt-1 flex-shrink-0" />
              <div class="text-gray-300 text-sm">
                info@hiddenvilleconstruction.co.ke
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gold-500/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-300 text-sm mb-4 md:mb-0">
            © {{ currentYear }} Hiddenville Construction Ltd. All rights reserved.
          </div>
          <div class="flex space-x-6 text-sm">
            <NuxtLink to="/privacy" class="text-gray-300 hover:text-gold-400 transition-colors duration-200">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-gray-300 hover:text-gold-400 transition-colors duration-200">
              Terms of Service
            </NuxtLink>
            <NuxtLink to="/sitemap" class="text-gray-300 hover:text-gold-400 transition-colors duration-200">
              Sitemap
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialMedia = [
  { name: 'Facebook', icon: 'heroicons:user', url: '#' },
  { name: 'Twitter', icon: 'heroicons:at-symbol', url: '#' },
  { name: 'LinkedIn', icon: 'heroicons:user', url: '#' },
  { name: 'Instagram', icon: 'heroicons:photo', url: '#' }
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' }
]

const services = [
  'Design & Build',
  'Project Management',
  'Remote Projects Control',
  'Development Management',
  'Interior Design',
  'Feasibility Studies'
]
</script>
