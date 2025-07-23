<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale, t } = useI18n()
const isMenuOpen = ref(false)

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'mt' : 'en'
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div>
    <!-- Header -->
    <header>
      <div
        class="container"
        style="
          padding-top: 1rem;
          padding-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <RouterLink
          to="/"
          style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none"
        >
          <div
            style="
              width: 2.5rem;
              height: 2.5rem;
              background: var(--primary);
              border-radius: 0.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <span style="color: #fff; font-weight: bold; font-size: 1rem">DPI</span>
          </div>
          <span style="font-size: 1.25rem; font-weight: bold; color: var(--secondary)"
            >Digital Presence Initiative</span
          >
        </RouterLink>
        <nav class="desktop-nav" style="display: flex; gap: 2rem; align-items: center">
          <RouterLink to="/" active-class="active">{{ t('nav.home') }}</RouterLink>
          <RouterLink to="/about" active-class="active">{{ t('nav.about') }}</RouterLink>
          <RouterLink to="/portfolio" active-class="active">{{ t('nav.portfolio') }}</RouterLink>
          <RouterLink to="/how-to" active-class="active">{{ t('nav.howTo') }}</RouterLink>
          <RouterLink to="/faq" active-class="active">{{ t('nav.faq') }}</RouterLink>
          <RouterLink to="/contact" active-class="active">{{ t('nav.contact') }}</RouterLink>
        </nav>
        <div style="display: flex; align-items: center; gap: 1rem">
          <button
            @click="toggleLanguage"
            class="btn"
            style="
              background: #fff;
              color: var(--primary);
              border: 1px solid var(--primary);
              padding: 0.5rem 1rem;
              font-size: 1rem;
            "
          >
            {{ locale === 'en' ? 'MT' : 'EN' }}
          </button>
          <button
            @click="toggleMenu"
            class="mobile-menu-btn"
            style="background: none; border: none; display: none"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path v-if="!isMenuOpen" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Nav -->
      <nav
        v-if="isMenuOpen"
        class="mobile-nav"
        style="display: none; flex-direction: column; gap: 1rem; padding: 1rem"
      >
        <RouterLink to="/" @click="isMenuOpen = false" active-class="active">{{
          t('nav.home')
        }}</RouterLink>
        <RouterLink to="/about" @click="isMenuOpen = false" active-class="active">{{
          t('nav.about')
        }}</RouterLink>
        <RouterLink to="/portfolio" @click="isMenuOpen = false" active-class="active">{{
          t('nav.portfolio')
        }}</RouterLink>
        <RouterLink to="/how-to" @click="isMenuOpen = false" active-class="active">{{
          t('nav.howTo')
        }}</RouterLink>
        <RouterLink to="/faq" @click="isMenuOpen = false" active-class="active">{{
          t('nav.faq')
        }}</RouterLink>
        <RouterLink to="/contact" @click="isMenuOpen = false" active-class="active">{{
          t('nav.contact')
        }}</RouterLink>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <RouterView />
    </main>

    <!-- Footer -->
    <footer style="background: var(--secondary); color: #fff; padding: 2rem 0; margin-top: 3rem">
      <div
        class="container"
        style="
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: space-between;
          align-items: flex-start;
        "
      >
        <div>
          <h3 style="margin-bottom: 0.5rem">Digital Presence Initiative</h3>
          <p style="color: #e0e0e0">Empowering Maltese NGOs with professional digital presence.</p>
        </div>
        <div>
          <h3 style="margin-bottom: 0.5rem">Contact</h3>
          <p style="color: #e0e0e0">info@digitalpresence.mt</p>
          <p style="color: #e0e0e0">+356 1234 5678</p>
        </div>
        <div>
          <h3 style="margin-bottom: 0.5rem">Location</h3>
          <p style="color: #e0e0e0">Valletta, Malta</p>
        </div>
      </div>
      <div
        style="
          border-top: 1px solid #666;
          margin-top: 2rem;
          padding-top: 1rem;
          text-align: center;
          color: #e0e0e0;
        "
      >
        <p>&copy; 2024 Digital Presence Initiative. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.desktop-nav {
  display: flex;
  gap: 2rem;
}
.mobile-menu-btn {
  display: none;
}
.mobile-nav {
  display: none;
}
.active {
  color: var(--primary);
  font-weight: bold;
  text-decoration: underline;
}
@media (max-width: 900px) {
  .desktop-nav {
    display: none !important;
  }
  .mobile-menu-btn {
    display: inline-block !important;
  }
  .mobile-nav {
    display: flex !important;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    position: absolute;
    width: 100%;
    left: 0;
    top: 60px;
    z-index: 10;
  }
}
</style>
