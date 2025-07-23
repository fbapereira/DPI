<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const activeFAQ = ref<number | null>(null)

const toggleFAQ = (index: number) => {
  activeFAQ.value = activeFAQ.value === index ? null : index
}

const faqs = [
  {
    question: 'What is the Digital Presence Initiative?',
    answer:
      'The Digital Presence Initiative is a program that provides free websites to registered NGOs in Malta. We help non-profit organizations establish a professional online presence to better serve their communities and reach more people.',
  },
  {
    question: 'Is this service really free?',
    answer:
      'Yes, our service is completely free for qualifying NGOs. We cover the cost of design, development, hosting, and domain registration for the first year. There are no hidden fees or charges.',
  },
  {
    question: 'What makes an NGO eligible for this program?',
    answer:
      'To be eligible, your organization must be a registered NGO in Malta with a clear mission and goals. You must also be willing to provide content and feedback during the development process and commit to maintaining the website after launch.',
  },
  {
    question: 'How long does it take to get a website?',
    answer:
      'The entire process typically takes 4-6 weeks from initial contact to launch. This includes discovery meetings, design, development, review periods, and training. We work closely with you to ensure the timeline meets your needs.',
  },
  {
    question: 'What features are included in the websites?',
    answer:
      'All websites include responsive design, content management system, SEO optimization, contact forms, and basic analytics. We can also add features like donation systems, event calendars, blogs, and more based on your specific needs.',
  },
  {
    question: 'Do you provide training and support?',
    answer:
      'Yes, we provide comprehensive training on how to manage and update your website content. We also offer ongoing support to help you make the most of your digital presence.',
  },
  {
    question: 'Can we customize the design?',
    answer:
      'Absolutely! We work closely with each NGO to create a custom design that reflects their brand, mission, and values. Your website will be unique to your organization.',
  },
  {
    question: 'What happens after the first year?',
    answer:
      "After the first year, you can continue hosting with us for a small annual fee, or we can help you transfer to another hosting provider. We'll provide guidance on the best options for your organization.",
  },
  {
    question: 'Do you work with NGOs outside of Malta?',
    answer:
      "Currently, our program is focused on NGOs registered in Malta. We may expand to other regions in the future, but for now we're concentrating on serving the Maltese NGO community.",
  },
  {
    question: 'How do we get started?',
    answer:
      "Getting started is easy! Simply fill out our contact form or send us an email. Tell us about your NGO and your digital needs, and we'll schedule an initial meeting to discuss how we can help.",
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
          {{ t('faq.title') }}
        </h1>
        <p style="font-size: 1.5rem; opacity: 0.9; max-width: 800px; margin: 0 auto">
          {{ t('faq.subtitle') }}
        </p>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section">
      <div class="container" style="max-width: 800px">
        <div style="text-align: center; margin-bottom: 3rem">
          <p style="font-size: 1.125rem; color: #666; max-width: 600px; margin: 0 auto">
            {{ t('faq.description') }}
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            style="
              background: #fff;
              border-radius: 0.5rem;
              overflow: hidden;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            "
          >
            <button
              @click="toggleFAQ(index)"
              style="
                width: 100%;
                padding: 1.5rem;
                text-align: left;
                background: none;
                border: none;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 1.125rem;
                font-weight: 500;
                color: var(--secondary);
              "
            >
              <span>{{ faq.question }}</span>
              <svg
                :style="{
                  transform: activeFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              v-show="activeFAQ === index"
              style="
                padding: 0 1.5rem 1.5rem;
                color: #666;
                line-height: 1.6;
                border-top: 1px solid #f0f0f0;
              "
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section" style="background: #f8f9fa; text-align: center">
      <div class="container">
        <h2 style="margin-bottom: 1.5rem">Still Have Questions?</h2>
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
          If you couldn't find the answer you're looking for, we'd be happy to help. Contact us and
          we'll get back to you as soon as possible.
        </p>
        <RouterLink to="/contact" class="btn"> Contact Us </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  h1 {
    font-size: 2rem !important;
  }
  button {
    font-size: 1rem !important;
    padding: 1rem !important;
  }
}
</style>
