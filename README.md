# Verden Engineering Website

A modern, professional multipage website for **Verden Engineering (Private) Limited** - an innovative engineering and sustainability company.

## About Verden Engineering

**Tagline:** *Engineering a Sustainable Future*

**Name Meaning:** Derived from Scandinavian roots, "Verden" means *"The World"* — representing the company's commitment to sustainability and global innovation.

## Features

- **Modern Design:** Clean, professional aesthetic with green energy theme
- **Fully Responsive:** Optimized for mobile, tablet, and desktop devices
- **Smooth Animations:** Framer Motion powered transitions and interactions
- **SEO Optimized:** Proper meta tags and semantic HTML structure
- **Fast Performance:** Static generation with Next.js for optimal loading

## Pages

1. **Home** - Hero section with company overview and services
2. **About** - Company history, mission, vision, values, and leadership
3. **Services** - Detailed breakdown of all engineering services
4. **Projects** - Portfolio showcasing completed projects
5. **Contact** - Contact form and company information

## Services Offered

- Green Energy Solutions
- Construction Chemicals
- Fireproofing and Thermal Protection
- Engineering Services & Consultancy
- Turnkey Project Solutions

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Inter (Google Fonts)
- **Images:** Pexels (royalty-free)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── services/page.tsx  # Services page
│   ├── projects/page.tsx  # Projects page
│   ├── contact/page.tsx   # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Header navigation
│   └── Footer.tsx         # Footer component
└── public/                # Static assets
```

## Color Scheme

- **Primary Green:** #16a34a (green-600)
- **Dark Green:** #15803d (green-700)
- **Light Green:** #dcfce7 (green-100)
- **Gray Shades:** For text and backgrounds
- **White:** For clean sections

## Customization

### Updating Contact Information

Edit `/components/Footer.tsx` and `/app/contact/page.tsx` to update:
- Address
- Phone numbers
- Email addresses
- Social media links

### Adding New Projects

Edit `/app/projects/page.tsx` and add new project objects to the `projects` array.

### Modifying Services

Edit `/app/services/page.tsx` to update service offerings and descriptions.

## License

Copyright © 2024 Verden Engineering (Private) Limited. All rights reserved.

## Support

For questions or support, contact: info@verdenengineering.com
