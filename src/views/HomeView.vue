<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          {{ t('home.title') }}
        </h1>
        <p class="hero-subtitle">{{ t('home.subtitle') }}</p>
        <div class="hero-btns">
          <RouterLink to="/contact" class="btn btn-cta">
            {{ t('home.cta') }}
          </RouterLink>
          <RouterLink to="/about" class="btn btn-learn-more">
            {{ t('home.learnMore') }}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features-section">
      <div class="container">
        <div class="features-header">
          <h2 class="features-title">{{ t('home.whyChoose') }}</h2>
          <p class="features-desc">{{ t('home.whyChooseDescription') }}</p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="feature-title">Completely Free</h3>
            <p class="feature-text">
              No hidden costs. We cover hosting, domain registration, and ongoing support at no
              charge.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg
                width="24"
                height="24"
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
            <h3 class="feature-title">Mobile-First Design</h3>
            <p class="feature-text">
              Responsive websites that look great on all devices, ensuring your audience can access
              your content anywhere.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="feature-title">Ongoing Support</h3>
            <p class="feature-text">
              We provide training and continuous support to help you manage and update your website
              effectively.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <h2 class="cta-title">Ready to Establish Your Digital Presence?</h2>
        <p class="cta-desc">
          Join the growing number of Maltese NGOs that have established their online presence with
          our help.
        </p>
        <RouterLink to="/contact" class="btn"> Get Started Today </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--primary) 0%, #8b1a1f 100%);
  color: #fff;
  padding: 4rem 0;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-btns {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-cta {
  background: #fff;
  color: var(--primary);
}
.btn-learn-more {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}
.features-section {
  background: #f8f9fa;
}
.features-header {
  text-align: center;
  margin-bottom: 3rem;
}
.features-title {
  margin-bottom: 1rem;
}
.features-desc {
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.feature-card {
  background: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.feature-icon {
  width: 3rem;
  height: 3rem;
  background: var(--primary);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.feature-title {
  margin-bottom: 1rem;
}
.feature-text {
  color: #666;
}
.cta-section {
  background: var(--secondary);
  color: #fff;
  text-align: center;
}
.cta-title {
  margin-bottom: 1.5rem;
}
.cta-desc {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem !important;
  }
  .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>
