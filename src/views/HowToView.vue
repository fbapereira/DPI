<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-[#A61D23] to-[#8B1A1F] text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ t('howTo.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            {{ t('howTo.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Steps Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(step, index) in t('howTo.steps', { returnObjects: true }) as unknown as any[]"
            :key="index"
            class="relative"
          >
            <!-- Step Number -->
            <div
              class="w-16 h-16 bg-[#A61D23] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-white text-2xl font-bold">{{ index + 1 }}</span>
            </div>

            <!-- Step Content -->
            <div class="text-center">
              <h3 class="text-2xl font-bold text-[#404040] mb-4">
                {{ step.title }}
              </h3>
              <p class="text-lg text-gray-600">
                {{ step.description }}
              </p>
            </div>

            <!-- Connector Line (except for last step) -->
            <div
              v-if="index < 2"
              class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"
              style="width: calc(100% - 4rem); left: calc(50% + 2rem)"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Process -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-[#404040] mb-4">
            What Happens During Each Step?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            We make the process as simple and transparent as possible.
          </p>
        </div>

        <div class="space-y-12">
          <!-- Step 1 Details -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-[#A61D23] rounded-lg flex items-center justify-center mr-6 flex-shrink-0"
              >
                <span class="text-white text-xl font-bold">1</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-[#404040] mb-4">Initial Contact</h3>
                <div class="space-y-4 text-gray-700">
                  <p>• Send us an email or call us to express your interest</p>
                  <p>• We'll schedule a brief introductory call</p>
                  <p>• We'll ask about your NGO's mission and goals</p>
                  <p>• We'll explain our process and answer your questions</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2 Details -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-[#A61D23] rounded-lg flex items-center justify-center mr-6 flex-shrink-0"
              >
                <span class="text-white text-xl font-bold">2</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-[#404040] mb-4">Planning & Design</h3>
                <div class="space-y-4 text-gray-700">
                  <p>• We'll meet to discuss your specific needs and requirements</p>
                  <p>• We'll gather content and materials from your NGO</p>
                  <p>• We'll create a design mockup for your approval</p>
                  <p>• We'll plan the website structure and features</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3 Details -->
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-[#A61D23] rounded-lg flex items-center justify-center mr-6 flex-shrink-0"
              >
                <span class="text-white text-xl font-bold">3</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-[#404040] mb-4">Launch & Training</h3>
                <div class="space-y-4 text-gray-700">
                  <p>• We'll build your website and test it thoroughly</p>
                  <p>• We'll provide training on how to manage your content</p>
                  <p>• We'll launch your website and set up hosting</p>
                  <p>• We'll provide ongoing support and maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-[#404040] mb-4">Timeline</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            From initial contact to launch, here's what to expect.
          </p>
        </div>

        <div class="space-y-8">
          <div class="flex items-center">
            <div class="w-4 h-4 bg-[#A61D23] rounded-full mr-4"></div>
            <div class="flex-1">
              <h3 class="font-semibold text-[#404040]">Week 1-2: Initial Contact & Planning</h3>
              <p class="text-gray-600">
                Initial consultation, requirements gathering, and project planning
              </p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-4 h-4 bg-[#A61D23] rounded-full mr-4"></div>
            <div class="flex-1">
              <h3 class="font-semibold text-[#404040]">Week 3-4: Design & Development</h3>
              <p class="text-gray-600">Website design, content creation, and development</p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-4 h-4 bg-[#A61D23] rounded-full mr-4"></div>
            <div class="flex-1">
              <h3 class="font-semibold text-[#404040]">Week 5-6: Testing & Launch</h3>
              <p class="text-gray-600">Final testing, training, and website launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-[#404040] text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          The process is simple, and we're here to guide you every step of the way.
        </p>
        <RouterLink
          to="/contact"
          class="bg-[#A61D23] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#8B1A1F] transition-colors duration-200 inline-block"
        >
          Contact Us Today
        </RouterLink>
      </div>
    </section>
  </div>
</template>
