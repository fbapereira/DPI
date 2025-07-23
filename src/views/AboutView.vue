<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
          {{ t('about.title') }}
        </h1>
        <p style="font-size: 1.5rem; opacity: 0.9; max-width: 800px; margin: 0 auto">
          {{ t('about.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section">
      <div class="container" style="max-width: 800px">
        <p style="font-size: 1.25rem; line-height: 1.8; margin-bottom: 2rem; color: #666">
          {{ t('about.description') }}
        </p>

        <div style="background: #f8f9fa; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0">
          <h2 style="margin-bottom: 1.5rem">Our Mission</h2>
          <p style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 1.5rem; color: #666">
            We believe that every NGO, regardless of size or resources, deserves a professional
            online presence. In today's digital world, a website is not just a luxury—it's a
            necessity for reaching your audience, sharing your mission, and making a real impact.
          </p>
          <p style="font-size: 1.125rem; line-height: 1.7; color: #666">
            Our team of dedicated professionals is committed to bridging the digital divide and
            ensuring that Maltese NGOs can compete on a global stage while maintaining their local
            impact.
          </p>
        </div>

        <h2 style="margin-bottom: 2rem">What We Offer</h2>
        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
          "
        >
          <div
            v-for="(benefit, index) in t('about.benefits', {
              returnObjects: true,
            }) as unknown as any[]"
            :key="index"
            style="display: flex; align-items: flex-start; gap: 1rem"
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
                margin-top: 0.25rem;
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
            <p style="font-size: 1.125rem; color: #666; margin: 0">{{ benefit }}</p>
          </div>
        </div>

        <div style="background: var(--primary); color: #fff; padding: 2rem; border-radius: 0.5rem">
          <h3 style="margin-bottom: 1rem">Our Commitment</h3>
          <p style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 1.5rem">
            We're not just building websites—we're building digital bridges that connect NGOs with
            their communities, supporters, and the people they serve. Every website we create is a
            step toward a more connected and empowered Maltese civil society.
          </p>
          <p style="font-size: 1.125rem; line-height: 1.7">
            Join us in this mission to democratize digital access for all Maltese NGOs.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section" style="background: #f8f9fa">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem">
          <h2 style="margin-bottom: 1rem">Our Approach</h2>
          <p style="font-size: 1.125rem; color: #666; max-width: 600px; margin: 0 auto">
            We work closely with each NGO to understand their unique needs and create tailored
            solutions.
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
                width: 4rem;
                height: 4rem;
                background: var(--primary);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem;
              "
            >
              <span style="color: #fff; font-size: 1.5rem; font-weight: bold">1</span>
            </div>
            <h3 style="margin-bottom: 1rem">Discovery</h3>
            <p style="color: #666">
              We start by understanding your NGO's mission, audience, and goals to create a website
              that truly represents your organization.
            </p>
          </div>

          <div style="text-align: center">
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
              "
            >
              <span style="color: #fff; font-size: 1.5rem; font-weight: bold">2</span>
            </div>
            <h3 style="margin-bottom: 1rem">Design & Development</h3>
            <p style="color: #666">
              Our team creates a professional, responsive website that showcases your work and
              engages your audience effectively.
            </p>
          </div>

          <div style="text-align: center">
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
              "
            >
              <span style="color: #fff; font-size: 1.5rem; font-weight: bold">3</span>
            </div>
            <h3 style="margin-bottom: 1rem">Launch & Support</h3>
            <p style="color: #666">
              We launch your website and provide ongoing support and training to ensure you can
              manage your digital presence confidently.
            </p>
          </div>
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
  .container {
    padding: 0 1rem;
  }
}
</style>
