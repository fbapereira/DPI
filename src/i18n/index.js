import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      howTo: 'How to Get Your Website',
      faq: 'FAQ',
      contact: 'Contact',
    },
    home: {
      title: 'Digital Presence Initiative',
      subtitle: 'Empowering Maltese NGOs with websites',
      cta: 'Get Your Free Website',
      learnMore: 'Learn More',
      whyChoose: 'Why Choose Our Initiative?',
      whyChooseDescription:
        'We provide comprehensive digital solutions tailored specifically for Maltese NGOs.',
    },
    about: {
      title: 'About the Initiative',
      subtitle: 'Why Digital Presence Matters',
      description:
        'The Digital Presence Initiative is dedicated to helping Maltese NGOs establish a strong online presence. We believe every NGO deserves a professional website to amplify their mission and reach more people.',
      benefits: [
        'Professional website design',
        'Mobile-responsive layout',
        'SEO optimization',
        'Easy content management',
        'Ongoing support',
      ],
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: "NGOs We've Helped",
      viewProject: 'View Project',
    },
    howTo: {
      title: 'How to Get Your Website',
      subtitle: 'Simple 3-Step Process',
      steps: [
        {
          title: 'Contact Us',
          description: "Reach out via email or phone to discuss your NGO's needs",
        },
        {
          title: 'Planning Session',
          description: "We'll meet to understand your mission and requirements",
        },
        {
          title: 'Launch',
          description: 'Your website goes live with ongoing support',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          question: 'Is this really free?',
          answer:
            'Yes, completely free! We cover all costs including hosting and domain registration.',
        },
        {
          question: 'What if we need updates later?',
          answer: 'We provide ongoing support and updates at no additional cost.',
        },
        {
          question: 'How long does it take?',
          answer: 'Typically 2-4 weeks from initial contact to launch.',
        },
        {
          question: 'Do you provide training?',
          answer: 'Yes, we provide comprehensive training on managing your website content.',
        },
      ],
    },
    contact: {
      title: 'Get Started Today',
      subtitle: 'Ready to establish your digital presence?',
      email: 'info@digitalpresence.mt',
      phone: '+356 1234 5678',
      address: 'Valletta, Malta',
    },
  },
  mt: {
    nav: {
      home: 'Home',
      about: 'Dwar',
      portfolio: 'Portfolio',
      howTo: 'Kif Tikseb il-Website Tiegħek',
      faq: 'Mistoqsijiet Frekwenti',
      contact: 'Kuntatt',
    },
    home: {
      title: "Inizjattiva ta' Preżenza Diġitali",
      subtitle: "Websites B'xejn għall-NGOs f'Malta",
      mission: "Nippotenzjaw NGOs Maltin b'preżenza diġitali professjonali",
      cta: "Ikseb il-Website B'xejn Tiegħek",
      learnMore: 'Aktar Informazzjoni',
      whyChoose: 'Għaliex Tfakru L-Inizjattiva Tagħna?',
      whyChooseDescription: `Nippotenzjaw NGOs Maltin b'preżenza diġitali professjonali.`,
    },
    about: {
      title: 'Dwar l-Inizjattiva',
      subtitle: 'Għaliex il-Preżenza Diġitali Hija Importanti',
      description:
        "L-Inizjattiva ta' Preżenza Diġitali hija dedikata biex tgħin NGOs Maltin jistabbilixxu preżenza online b'saħħitha. Nemmnu li kull NGO jistħoqqlu website professjonali biex jamplifika l-missjoni tiegħu u jilħaq aktar nies.",
      benefits: [
        'Disinn professjonali tal-website',
        'Layout responsiv għall-mowbajl',
        'Ottimizzazzjoni SEO',
        'Ġestjoni faċli tal-kontenut',
        'Appoġġ kontinwu',
      ],
    },
    portfolio: {
      title: 'Il-Portfolio Tagħna',
      subtitle: 'NGOs li Għenina',
      viewProject: 'Ara l-Proġett',
    },
    howTo: {
      title: 'Kif Tikseb il-Website Tiegħek',
      subtitle: "Proċess Sempliċi ta' 3 Passi",
      steps: [
        {
          title: 'Ikkuntattjana',
          description: 'Ibgħat email jew sejjaħ biex niddiskutu l-ħtiġijiet tal-NGO tiegħek',
        },
        {
          title: "Sessjoni ta' Pianifikazzjoni",
          description: 'Niltaqgħu biex nifhmu l-missjoni u r-rekwiżiti tiegħek',
        },
        {
          title: 'Il-Lanċjar',
          description: "Il-website tiegħek jibda jaħdem b'appoġġ kontinwu",
        },
      ],
    },
    faq: {
      title: 'Mistoqsijiet Frekwenti',
      questions: [
        {
          question: "Dan verament b'xejn?",
          answer:
            "Iva, kompletament b'xejn! Nkopru l-ispejjeż kollha inklużi l-hosting u r-reġistrazzjoni tad-dominju.",
        },
        {
          question: "X'jiġri jekk għandna bżonn aġġornamenti aktar tard?",
          answer: 'Nipprovdu appoġġ kontinwu u aġġornamenti mingħajr spejjeż addizzjonali.',
        },
        {
          question: 'Kemm tieħu?',
          answer: 'Tipikament 2-4 ġimgħat mill-kuntatt inizjali sal-lanċjar.',
        },
        {
          question: 'Tipprovdu taħriġ?',
          answer:
            'Iva, nipprovdu taħriġ komprensiv fuq il-ġestjoni tal-kontenut tal-website tiegħek.',
        },
      ],
    },
    contact: {
      title: 'Ibda llum',
      subtitle: 'Lest biex tistabbilixxi l-preżenza diġitali tiegħek?',
      email: 'info@digitalpresence.mt',
      phone: '+356 1234 5678',
      address: 'Valletta, Malta',
    },
  },
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
