<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Sample portfolio items - in a real app, this would come from a CMS or API
const portfolioItems = [
  {
    id: 1,
    title: 'Environmental Conservation Malta',
    category: 'Environmental NGO',
    description:
      'A comprehensive website for a local environmental NGO showcasing their conservation projects, volunteer opportunities, and educational resources.',
    image: '/api/placeholder/400/300',
    features: ['Responsive Design', 'Donation System', 'Event Calendar', 'Blog Integration'],
  },
  {
    id: 2,
    title: 'Malta Youth Foundation',
    category: 'Youth Development',
    description:
      'A vibrant website for a youth-focused NGO featuring programs, success stories, and easy registration for youth activities.',
    image: '/api/placeholder/400/300',
    features: [
      'Youth Portal',
      'Program Registration',
      'Success Stories',
      'Social Media Integration',
    ],
  },
  {
    id: 3,
    title: 'Community Health Initiative',
    category: 'Healthcare NGO',
    description:
      'A professional healthcare website providing information about community health programs, resources, and contact information.',
    image: '/api/placeholder/400/300',
    features: [
      'Health Resources',
      'Appointment Booking',
      'Multilingual Support',
      'Emergency Contacts',
    ],
  },
  {
    id: 4,
    title: 'Cultural Heritage Malta',
    category: 'Cultural NGO',
    description:
      'A beautiful website preserving and promoting Maltese cultural heritage through virtual tours, educational content, and event listings.',
    image: '/api/placeholder/400/300',
    features: ['Virtual Tours', 'Cultural Calendar', 'Educational Resources', 'Photo Gallery'],
  },
  {
    id: 5,
    title: 'Animal Welfare Malta',
    category: 'Animal Welfare',
    description:
      'A compassionate website for animal welfare organization featuring adoption listings, volunteer opportunities, and donation options.',
    image: '/api/placeholder/400/300',
    features: ['Adoption Portal', 'Volunteer Management', 'Donation System', 'Pet Gallery'],
  },
  {
    id: 6,
    title: 'Disability Rights Malta',
    category: 'Rights Advocacy',
    description:
      'An accessible website promoting disability rights and inclusion, with resources, advocacy tools, and community support information.',
    image: '/api/placeholder/400/300',
    features: ['Accessibility Features', 'Advocacy Tools', 'Resource Library', 'Community Forum'],
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      style="
        background: linear-gradient(135deg, var(--primary) 0%, #8b1a1f 100%);
        color: #fff;
        padding: 4rem 0;
        text-align: center;
      "
    >
      <div class="container">
        <h1 style="font-size: 3rem; margin-bottom: 1.5rem; font-weight: 700">
          {{ t('portfolio.title') }}
        </h1>
        <p style="font-size: 1.5rem; opacity: 0.9; max-width: 800px; margin: 0 auto">
          {{ t('portfolio.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="section">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem">
          <p style="font-size: 1.25rem; color: #666; max-width: 600px; margin: 0 auto">
            {{ t('portfolio.description') }}
          </p>
        </div>

        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          "
        >
          <div
            v-for="item in portfolioItems"
            :key="item.id"
            style="
              background: #fff;
              border-radius: 0.5rem;
              overflow: hidden;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            "
          >
            <div
              style="
                height: 200px;
                background: linear-gradient(135deg, var(--primary) 0%, #8b1a1f 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
              "
            >
              <div style="text-align: center">
                <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem">{{ item.title }}</h3>
                <span
                  style="
                    background: rgba(255, 255, 255, 0.2);
                    padding: 0.25rem 0.75rem;
                    border-radius: 1rem;
                    font-size: 0.875rem;
                  "
                  >{{ item.category }}</span
                >
              </div>
            </div>
            <div style="padding: 1.5rem">
              <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.6">
                {{ item.description }}
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem">
                <span
                  v-for="feature in item.features"
                  :key="feature"
                  style="
                    background: #f8f9fa;
                    color: var(--primary);
                    padding: 0.25rem 0.75rem;
                    border-radius: 1rem;
                    font-size: 0.875rem;
                    border: 1px solid var(--primary);
                  "
                >
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section" style="background: #f8f9fa; text-align: center">
      <div class="container">
        <h2 style="margin-bottom: 1.5rem">Ready to Join Our Portfolio?</h2>
        <p
          style="
            font-size: 1.25rem;
            color: #666;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          Your NGO could be featured here next. Let's work together to create a website that
          showcases your mission and impact.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap">
          <RouterLink to="/contact" class="btn"> Start Your Project </RouterLink>
          <RouterLink
            to="/how-to-get-website"
            class="btn"
            style="background: transparent; color: var(--primary); border: 2px solid var(--primary)"
          >
            Learn More
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  h1 {
    font-size: 2rem !important;
  }
  .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>
