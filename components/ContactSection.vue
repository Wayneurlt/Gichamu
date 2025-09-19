<template>
  <section class="py-20 bg-silver-gradient">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4 font-poppins">
          Get In <span class="text-gold-gradient">Touch</span>
        </h2>
        <div class="w-24 h-1 bg-gold-gradient mx-auto mb-6"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Ready to start your next project? Contact us today for a consultation and let's turn your vision into reality.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 font-poppins">
            Send us a Message
          </h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
                placeholder="+254 700 000 000"
              />
            </div>

            <div>
              <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                v-model="form.service"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200"
              >
                <option value="">Select a service</option>
                <option value="design-build">Design & Build</option>
                <option value="project-management">Project Management</option>
                <option value="remote-control">Remote Projects Control</option>
                <option value="development">Development Management</option>
                <option value="interior-design">Interior Design</option>
                <option value="feasibility">Feasibility Studies</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Tell us about your project requirements, timeline, and budget..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gold-gradient text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex items-center justify-center">
                <Icon name="heroicons:arrow-path" class="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </span>
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Details -->
          <div class="bg-navy-gradient rounded-2xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-6 font-poppins">
              Contact Information
            </h3>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="heroicons:map-pin" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold mb-1">Address</h4>
                  <p class="text-gray-300">
                    Westlands Business Centre<br>
                    Nairobi, Kenya<br>
                    P.O. Box 12345-00100
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="heroicons:phone" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold mb-1">Phone</h4>
                  <p class="text-gray-300">
                    +254 700 123 456<br>
                    +254 20 123 4567
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="heroicons:envelope" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold mb-1">Email</h4>
                  <p class="text-gray-300">
                    info@hiddenvilleconstruction.co.ke<br>
                    projects@hiddenvilleconstruction.co.ke
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="heroicons:clock" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold mb-1">Business Hours</h4>
                  <p class="text-gray-300">
                    Monday - Friday: 8:00 AM - 6:00 PM<br>
                    Saturday: 9:00 AM - 1:00 PM<br>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Map Placeholder -->
          <div class="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div class="text-center text-gray-500">
              <Icon name="heroicons:map" class="w-12 h-12 mx-auto mb-2" />
              <p class="font-medium">Interactive Map</p>
              <p class="text-sm">Westlands Business Centre, Nairobi</p>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <h4 class="text-lg font-semibold text-gray-900 mb-4 font-poppins">
              Follow Us
            </h4>
            <div class="flex space-x-4">
              <a 
                v-for="social in socialMedia" 
                :key="social.name"
                :href="social.url"
                class="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
              >
                <Icon :name="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isSubmitting = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const socialMedia = [
  { name: 'Facebook', icon: 'heroicons:user', url: '#' },
  { name: 'Twitter', icon: 'heroicons:at-symbol', url: '#' },
  { name: 'LinkedIn', icon: 'heroicons:user', url: '#' },
  { name: 'Instagram', icon: 'heroicons:photo', url: '#' }
]

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
    
    // Show success message (you can integrate with a notification system)
    alert('Thank you for your message! We will get back to you soon.')
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Sorry, there was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
