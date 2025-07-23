# Digital Presence Initiative

A Vue 3 static website offering free website creation services for NGOs in Malta. Built with modern web technologies and designed to be fully responsive and accessible.

## 🌟 Features

- **Multi-language Support**: English and Maltese translations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, minimalist design with smooth animations
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant design
- **Performance**: Optimized for fast loading times

## 🎨 Design System

- **Primary Color**: #A61D23 (Deep Red)
- **Secondary Color**: #404040 (Dark Gray)
- **Typography**: Modern, clean fonts with excellent readability
- **Spacing**: Consistent spacing system using Tailwind CSS

## 📱 Pages & Sections

1. **Home**: Hero section, mission statement, features, and call-to-action
2. **About**: Initiative explanation, benefits, and approach
3. **Portfolio**: Gallery of completed NGO websites with sample data
4. **How to Get Your Website**: 3-step process explanation
5. **FAQ**: Common questions and concerns
6. **Contact**: Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd digital-presence-initiative
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

The `netlify.toml` file is already configured for optimal deployment.

### Other Platforms

The static files in the `dist` directory can be deployed to any static hosting service:

- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🛠️ Technology Stack

- **Framework**: Vue 3 with Composition API
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: Vue Router 4
- **Internationalization**: Vue I18n
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components
├── views/              # Page components
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── PortfolioView.vue
│   ├── HowToView.vue
│   ├── FAQView.vue
│   └── ContactView.vue
├── i18n/               # Internationalization
│   └── index.js
├── router/             # Vue Router configuration
│   └── index.ts
├── assets/             # Static assets
└── main.ts            # Application entry point
```

## 🎯 Key Features

### Multi-language Support

- English and Maltese translations
- Language toggle in navigation
- All content is internationalized

### Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface

### SEO Optimization

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML

### Performance

- Lazy-loaded components
- Optimized images
- Minified CSS and JS
- Fast loading times

## 🔧 Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: '#A61D23',
  secondary: '#404040',
}
```

### Content

- Update translations in `src/i18n/index.js`
- Modify portfolio items in `src/views/PortfolioView.vue`
- Update contact information in `src/views/ContactView.vue`

### Styling

- Modify Tailwind classes in components
- Add custom CSS in component `<style>` sections
- Update global styles in `src/assets/main.css`

## 📞 Contact Information

- **Email**: info@digitalpresence.mt
- **Phone**: +356 1234 5678
- **Location**: Valletta, Malta

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📈 Analytics & Monitoring

The website is ready for analytics integration. Add your preferred analytics service (Google Analytics, Plausible, etc.) to track user engagement and performance.

## 🔒 Security

- HTTPS enforced
- Content Security Policy headers
- XSS protection
- Secure form handling

---

Built with ❤️ for Maltese NGOs
