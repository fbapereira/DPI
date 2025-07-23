<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  organization: '',
  phone: '',
  message: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1000))

  isSubmitting.value = false
  submitSuccess.value = true

  // Reset form
  formData.value = {
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  }

  // Hide success message after 5 seconds
  setTimeout(() => {
    submitSuccess.value = false
  }, 5000)
}
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
          {{ t('contact.title') }}
        </h1>
        <p style="font-size: 1.5rem; opacity: 0.9; max-width: 800px; margin: 0 auto">
          {{ t('contact.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="section">
      <div class="container" style="max-width: 800px">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem">
          <!-- Contact Form -->
          <div>
            <h2 style="margin-bottom: 2rem">Get in Touch</h2>
            <p style="color: #666; margin-bottom: 2rem; line-height: 1.6">
              Ready to establish your digital presence? Fill out the form below and we'll get back
              to you within 24 hours.
            </p>

            <form
              @submit.prevent="handleSubmit"
              style="display: flex; flex-direction: column; gap: 1.5rem"
            >
              <div>
                <label
                  style="
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                    color: var(--secondary);
                  "
                  >Name *</label
                >
                <input
                  v-model="formData.name"
                  type="text"
                  required
                  style="
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #ddd;
                    border-radius: 0.25rem;
                    font-size: 1rem;
                  "
                />
              </div>

              <div>
                <label
                  style="
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                    color: var(--secondary);
                  "
                  >Email *</label
                >
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  style="
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #ddd;
                    border-radius: 0.25rem;
                    font-size: 1rem;
                  "
                />
              </div>

              <div>
                <label
                  style="
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                    color: var(--secondary);
                  "
                  >Organization *</label
                >
                <input
                  v-model="formData.organization"
                  type="text"
                  required
                  style="
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #ddd;
                    border-radius: 0.25rem;
                    font-size: 1rem;
                  "
                />
              </div>

              <div>
                <label
                  style="
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                    color: var(--secondary);
                  "
                  >Phone</label
                >
                <input
                  v-model="formData.phone"
                  type="tel"
                  style="
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #ddd;
                    border-radius: 0.25rem;
                    font-size: 1rem;
                  "
                />
              </div>

              <div>
                <label
                  style="
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                    color: var(--secondary);
                  "
                  >Message *</label
                >
                <textarea
                  v-model="formData.message"
                  required
                  rows="5"
                  style="
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #ddd;
                    border-radius: 0.25rem;
                    font-size: 1rem;
                    resize: vertical;
                  "
                  placeholder="Tell us about your NGO and your digital needs..."
                ></textarea>
              </div>

              <button type="submit" :disabled="isSubmitting" class="btn" style="margin-top: 1rem">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>

              <div
                v-if="submitSuccess"
                style="
                  background: #d4edda;
                  color: #155724;
                  padding: 1rem;
                  border-radius: 0.25rem;
                  border: 1px solid #c3e6cb;
                "
              >
                Thank you for your message! We'll get back to you within 24 hours.
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 style="margin-bottom: 2rem">Contact Information</h2>

            <div style="margin-bottom: 2rem">
              <h3 style="margin-bottom: 1rem; color: var(--primary)">Email</h3>
              <p style="color: #666; margin-bottom: 0.5rem">For general inquiries:</p>
              <a
                href="mailto:info@digitalpresence.mt"
                style="color: var(--primary); text-decoration: none; font-weight: 500"
              >
                info@digitalpresence.mt
              </a>
            </div>

            <div style="margin-bottom: 2rem">
              <h3 style="margin-bottom: 1rem; color: var(--primary)">Phone</h3>
              <p style="color: #666; margin-bottom: 0.5rem">Business hours: Mon-Fri 9AM-5PM</p>
              <a
                href="tel:+35612345678"
                style="color: var(--primary); text-decoration: none; font-weight: 500"
              >
                +356 1234 5678
              </a>
            </div>

            <div style="margin-bottom: 2rem">
              <h3 style="margin-bottom: 1rem; color: var(--primary)">Address</h3>
              <p style="color: #666; line-height: 1.6">
                Digital Presence Initiative<br />
                Valletta, Malta<br />
                VLT 1234
              </p>
            </div>

            <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 0.5rem">
              <h3 style="margin-bottom: 1rem; color: var(--primary)">What to Expect</h3>
              <ul style="color: #666; line-height: 1.6; padding-left: 1.5rem">
                <li>Response within 24 hours</li>
                <li>Initial consultation meeting</li>
                <li>Custom proposal for your NGO</li>
                <li>Clear timeline and process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Link -->
    <section class="section" style="background: #f8f9fa; text-align: center">
      <div class="container">
        <h2 style="margin-bottom: 1.5rem">Have Questions?</h2>
        <p
          style="
            font-size: 1.125rem;
            color: #666;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          Check out our FAQ page for answers to common questions about our services.
        </p>
        <RouterLink
          to="/faq"
          class="btn"
          style="background: transparent; color: var(--primary); border: 2px solid var(--primary)"
        >
          View FAQ
        </RouterLink>
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
  .container > div {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }
}
</style>
