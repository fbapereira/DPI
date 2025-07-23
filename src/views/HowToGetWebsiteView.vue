<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = [
  {
    number: 1,
    title: 'Initial Contact',
    description:
      'Reach out to us through our contact form or email. Tell us about your NGO and your digital needs.',
    icon: '📧',
  },
  {
    number: 2,
    title: 'Discovery Meeting',
    description:
      "We'll schedule a meeting to understand your organization, goals, and specific requirements for your website.",
    icon: '🤝',
  },
  {
    number: 3,
    title: 'Planning & Design',
    description:
      "Our team will create a custom design and plan that aligns with your NGO's mission and brand identity.",
    icon: '🎨',
  },
  {
    number: 4,
    title: 'Development',
    description:
      "We'll build your website with all the features you need, ensuring it's mobile-friendly and accessible.",
    icon: '💻',
  },
  {
    number: 5,
    title: 'Review & Feedback',
    description:
      "You'll review the website and provide feedback. We'll make any necessary adjustments to perfect it.",
    icon: '👀',
  },
  {
    number: 6,
    title: 'Launch & Training',
    description:
      "Your website goes live! We'll provide training on how to manage and update your content.",
    icon: '🚀',
  },
]

const requirements = [
  'Be a registered NGO in Malta',
  'Have a clear mission and goals',
  'Be willing to provide content and feedback',
  'Commit to maintaining the website after launch',
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
          {{ t('howToGetWebsite.title') }}
        </h1>
        <p style="font-size: 1.5rem; opacity: 0.9; max-width: 800px; margin: 0 auto">
          {{ t('howToGetWebsite.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Process Overview -->
    <section class="section">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem">
          <h2 style="margin-bottom: 1rem">The Process</h2>
          <p style="font-size: 1.125rem; color: #666; max-width: 600px; margin: 0 auto">
            Getting your free website is simple and straightforward. Here's how it works:
          </p>
        </div>

        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          "
        >
          <div
            v-for="step in steps"
            :key="step.number"
            style="
              background: #fff;
              padding: 2rem;
              border-radius: 0.5rem;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              text-align: center;
            "
          >
            <div
              style="
                width: 4rem;
                height: 4rem;
                background: var(--primary);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem;
                font-size: 1.5rem;
              "
            >
              {{ step.icon }}
            </div>
            <div
              style="
                background: var(--primary);
                color: #fff;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
                font-weight: bold;
              "
            >
              {{ step.number }}
            </div>
            <h3 style="margin-bottom: 1rem">{{ step.title }}</h3>
            <p style="color: #666; line-height: 1.6">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements Section -->
    <section class="section" style="background: #f8f9fa">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem">
          <h2 style="margin-bottom: 1rem">Requirements</h2>
          <p style="font-size: 1.125rem; color: #666; max-width: 600px; margin: 0 auto">
            To qualify for our free website service, your NGO must meet these criteria:
          </p>
        </div>

        <div style="max-width: 600px; margin: 0 auto">
          <div
            v-for="requirement in requirements"
            :key="requirement"
            style="
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;
              background: #fff;
              padding: 1rem;
              border-radius: 0.5rem;
            "
          >
            <div
              style="
                width: 1.5rem;
                height: 1.5rem;
                background: var(--primary);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
              "
            >
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p style="color: #666; margin: 0">{{ requirement }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What's Included -->
    <section class="section">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem">
          <h2 style="margin-bottom: 1rem">What's Included</h2>
          <p style="font-size: 1.125rem; color: #666; max-width: 600px; margin: 0 auto">
            Your free website package includes everything you need to establish a professional
            online presence:
          </p>
        </div>

        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          "
        >
          <div style="text-align: center">
            <div
              style="
                width: 3rem;
                height: 3rem;
                background: var(--primary);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
              "
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 style="margin-bottom: 0.5rem">Custom Design</h3>
            <p style="color: #666; font-size: 0.875rem">
              Professional design tailored to your NGO's brand and mission
            </p>
          </div>

          <div style="text-align: center">
            <div
              style="
                width: 3rem;
                height: 3rem;
                background: var(--primary);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
              "
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 style="margin-bottom: 0.5rem">Mobile Responsive</h3>
            <p style="color: #666; font-size: 0.875rem">
              Works perfectly on all devices - desktop, tablet, and mobile
            </p>
          </div>

          <div style="text-align: center">
            <div
              style="
                width: 3rem;
                height: 3rem;
                background: var(--primary);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
              "
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
              </svg>
            </div>
            <h3 style="margin-bottom: 0.5rem">Content Management</h3>
            <p style="color: #666; font-size: 0.875rem">
              Easy-to-use system to update your content without technical knowledge
            </p>
          </div>

          <div style="text-align: center">
            <div
              style="
                width: 3rem;
                height: 3rem;
                background: var(--primary);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
              "
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 style="margin-bottom: 0.5rem">Hosting & Domain</h3>
            <p style="color: #666; font-size: 0.875rem">
              Free hosting and domain registration for the first year
            </p>
          </div>

          <div style="text-align: center">
            <div
              style="
                width: 3rem;
                height: 3rem;
                background: var(--primary);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
              "
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364"
                />
              </svg>
            </div>
            <h3 style="margin-bottom: 0.5rem">SEO Optimization</h3>
            <p style="color: #666; font-size: 0.875rem">
              Search engine optimization to help people find your website
            </p>
          </div>

          <div style="text-align: center">
            <div
              style="
                width: 3rem;
                height: 3rem;
                background: var(--primary);
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
              "
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 style="margin-bottom: 0.5rem">Training & Support</h3>
            <p style="color: #666; font-size: 0.875rem">
              Comprehensive training and ongoing support to help you succeed
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" style="background: var(--secondary); color: #fff; text-align: center">
      <div class="container">
        <h2 style="margin-bottom: 1.5rem">Ready to Get Started?</h2>
        <p
          style="
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          The process is simple, and your new website could be live in just a few weeks.
        </p>
        <RouterLink to="/contact" class="btn"> Apply Now </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  h1 {
    font-size: 2rem !important;
  }
}
</style>
