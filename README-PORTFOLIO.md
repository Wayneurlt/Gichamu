# Hiddenville Construction Ltd - Portfolio Website

A modern, elegant, and professional company portfolio website built with Nuxt 3, TailwindCSS, and GSAP animations.

## 🏗️ Project Overview

This is a comprehensive portfolio website for Hiddenville Construction Ltd, featuring:

- **Modern Design**: Clean, professional layout with navy, silver, and gold color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth GSAP animations and CSS transitions
- **Interactive Elements**: Hover effects, card flips, and metallic shine animations
- **SEO Optimized**: Proper meta tags and structured content

## 🎨 Design Features

### Color Scheme
- **Navy**: `#0a0d29` - Primary background
- **Silver/Gray**: `#f8f9fa` to `#e9ecef` - Secondary backgrounds
- **Gold**: `#d4af37` - Accent color for highlights and CTAs

### Typography
- **Primary Font**: Poppins (headings)
- **Secondary Font**: Inter (body text)

### Animations
- Metallic shine effects on logos and text
- Card hover animations with lift effects
- Fade-in animations for content sections
- GSAP-powered smooth transitions

## 📁 Project Structure

```
├── components/
│   ├── Navigation.vue          # Main navigation component
│   ├── Hero.vue               # Hero section with metallic effects
│   ├── AboutSection.vue       # About us section
│   ├── ValuesSection.vue      # Values & approach timeline
│   ├── TeamSection.vue        # Team members grid
│   ├── ServicesSection.vue    # Services with flip cards
│   ├── PortfolioSection.vue   # Project portfolio with filters
│   ├── CommitmentSection.vue  # CSR and commitment info
│   ├── ContactSection.vue     # Contact form and info
│   └── Footer.vue             # Footer component
├── pages/
│   ├── index.vue              # Homepage with all sections
│   ├── about.vue              # About page
│   ├── services.vue           # Services page
│   ├── portfolio.vue          # Portfolio page
│   └── contact.vue            # Contact page
├── data/
│   ├── team.ts                # Team member data
│   ├── services.ts            # Services data
│   └── portfolio.ts           # Portfolio projects data
├── public/
│   ├── logo.png               # Company logo
│   ├── team/                  # Team member images
│   ├── portfolio/             # Portfolio project images
│   └── images/                # General website images
└── assets/css/
    └── main.css               # Custom styles and animations
```

## 🚀 Features

### 1. Hero Section
- Dark navy gradient background
- Central logo with glowing metallic effect
- Tagline: "Turning Your Vision Into a Reality"
- CTA buttons with hover animations
- Company statistics display

### 2. About Us
- Company information and history
- "What Sets Us Apart" feature cards
- Company statistics and achievements
- Professional imagery

### 3. Values & Approach
- Four core values with timeline layout
- Interactive value cards with hover effects
- Process steps visualization
- Professional icons and descriptions

### 4. Team Section
- Team member cards with photos
- Social media links
- Experience and role information
- Hover animations and effects

### 5. Services
- Six interactive service cards
- Flip animation on hover
- Detailed service descriptions
- Service process visualization

### 6. Portfolio
- Project gallery with category filters
- Project details and statistics
- Hover effects with "View Details" buttons
- Portfolio statistics section

### 7. Commitment & CSR
- Sustainability information
- Health & safety standards
- Quality management details
- Corporate social responsibility
- Certifications and awards

### 8. Contact
- Contact form with validation
- Company contact information
- Business hours and location
- Social media links
- Map placeholder

## 🛠️ Technical Stack

- **Framework**: Nuxt 3
- **Styling**: TailwindCSS
- **Animations**: GSAP
- **Icons**: Heroicons
- **TypeScript**: Full TypeScript support
- **Responsive**: Mobile-first design

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO Features

- Proper meta tags and descriptions
- Semantic HTML structure
- Optimized images and assets
- Fast loading times
- Mobile-friendly design

## 🚀 Getting Started

1. **Prerequisites**: Ensure Nuxt 3, TailwindCSS, and GSAP are installed
2. **Images**: Replace placeholder images in `/public` with actual photos
3. **Content**: Update company information in data files
4. **Customization**: Modify colors, fonts, and content as needed

## 📝 Content Management

### Team Members
Edit `/data/team.ts` to update team member information.

### Services
Modify `/data/services.ts` to update service offerings.

### Portfolio
Update `/data/portfolio.ts` to add new projects.

## 🎨 Customization

### Colors
Update the color scheme in `/assets/css/main.css`:
```css
.bg-navy-gradient { background: linear-gradient(135deg, #0a0d29 0%, #1a1f3a 100%); }
.bg-gold-gradient { background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%); }
```

### Animations
Modify animations in the CSS file or GSAP code in components.

## 📞 Support

For questions or support regarding this portfolio website, please contact the development team.

---

**Built with ❤️ for Hiddenville Construction Ltd**
