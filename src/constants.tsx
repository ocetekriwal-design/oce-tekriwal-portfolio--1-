
import React from 'react';

export const COLORS = {
  black: '#000000',
  neonPink: '#FF007F',
  white: '#FFFFFF',
  vechiBlue: '#1A237E',
  vechiBrown: '#795548'
};

export const PROJECTS = [
  {
    id: 1,
    title: 'VECHI',
    tagline: 'POWER DRESSING, SIMPLIFIED',
    tags: ['Branding', 'Fashion', 'Quiet Luxury'],
    description: 'A dedicated Indian brand for old money fashion, bringing sophisticated and sleek styles inspired by timeless elegance to the modern working woman.',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?auto=format&fit=crop&q=80&w=1200',
    details: {
      problemStatement: 'The absence of an Indian brand dedicated to "Quiet Luxury" and old money fashion for women. Working professionals lack skin-friendly, breathable, yet sophisticated office wear.',
      briefStatement: 'To create a brand for Indian working women that prioritizes timeless elegance over flashy trends. VECHI offers refined silhouettes that empower through grace and simplicity.',
      targetMarket: 'Indian working women aged 20 and above who value understated refinement and quality fabric.',
      designPhilosophy: 'The Vechi logo blends tradition with modern fashion. Deep blue evokes trust and professionalism, while brown adds warmth. It is rich but not flashy.',
      font: 'Fry\'s Baskerville & Times New Roman',
      colors: ['#1A237E', '#795548', '#E0D8C3', '#000000'],
      nameIdeas: ['Elara', 'Aureum', 'Solaire', 'Noira', 'Céleste', 'Maison Vanya', 'Eloïn', 'The Lisse Label', 'Élan'],
      marketing: [
        'Vogue India, Elle India, Sudha, and Roopatara full-page print ads.',
        'High-end brochures for boutique distribution.',
        'Exclusive pop-up stores in DLF Emporio and UB City.',
        'Private viewing events for fashion influencers.',
        '“Luxury & Leadership” panel discussions.'
      ],
      taglines: [
        'Timeless Elegance, Redefined.',
        'Quiet Luxury for the Modern Woman.',
        'Grace in Simplicity.',
        'Understated. Refined. Timeless.',
        'Luxury Without the Noise.',
        'Old Money Aesthetic, New Age Confidence.'
      ],
      packaging: 'Minimalist pinstripe and textured bags with the signature V-monogram, emphasizing the "Quiet Luxury" experience from purchase to wear.'
    }
  },
  {
    id: 2,
    title: 'CYBER-GRID INTERFACE',
    tagline: 'FUTURE INTERFACES',
    tags: ['UI/UX', 'Interaction'],
    description: 'Experimental dashboard design for a future-facing AI data visualization tool, emphasizing high contrast and rapid navigation.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
    details: {
      problemStatement: 'Information overload in AI monitoring systems.',
      briefStatement: 'Developing a zero-friction interface for high-stakes AI oversight.',
      targetMarket: 'Systems administrators and AI researchers.',
      nameIdeas: ['Grid.Sys', 'Flux', 'Nexus', 'Vertex'],
      marketing: ['Digital Presence', 'Tech Conference Demos'],
      taglines: ['Data in Flux.', 'The Interface of Tomorrow.']
    }
  },
  {
    id: 3,
    title: 'SYNTHETIC SPECIMEN',
    tagline: 'ALGORITHMIC TYPE',
    tags: ['AI-Integrated', 'Typography'],
    description: 'A typeface generated through neural networks, blending classical serif proportions with algorithmic artifacts.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
    details: {
      problemStatement: 'Static nature of traditional typefaces.',
      briefStatement: 'A variable font that evolves based on semantic input.',
      targetMarket: 'Experimental publishers and creative studios.',
      nameIdeas: ['Neural Sans', 'Artifact', 'Ghost Serif'],
      marketing: ['Behance Feature', 'TypeSpecimen Kit'],
      taglines: ['Type that thinks.', 'The algorithm is the artist.']
    }
  },
  {
    id: 4,
    title: 'KINETIC ECHOES',
    tagline: 'MOTION AS BRAND',
    tags: ['Motion Graphics', 'Branding'],
    description: 'Live visuals and promotional material for the 2024 Electronic Communication Summit.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200',
    details: {
      problemStatement: 'Lack of visual energy in corporate summits.',
      briefStatement: 'Bridging the gap between static branding and live atmosphere.',
      targetMarket: 'Conference attendees and digital viewers.',
      nameIdeas: ['Pulse', 'Echo', 'Sync'],
      marketing: ['Live Projection Mapping', 'Social Snippets'],
      taglines: ['Motion is Emotion.', 'Resonating Identity.']
    }
  }
];

export const PIXEL_SYMBOLS = {
  star: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M16 0h8v8h8v8h8v8h-8v8h-8v8h-8v-8H8v-8H0v-8h8v-8h8V0z" />
    </svg>
  ),
  globe: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M12 0h16v4h4v4h4v4h4v16h-4v4h-4v4h-4v4H12v-4H8v-4H4v-4H0V12h4V8h4V4h4V0zm4 4v32h8V4h-8zM4 16v8h32v-8H4z" />
    </svg>
  ),
  crosshair: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M16 0h8v16h16v8H24v16h-8V24H0v-8h16V0zM20 16a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ),
  arrow: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M24 0h16v16h-8V8h-8V0zM16 16V8h8v8h-8zM8 24V16h8v8H8zM0 32V24h8v8H0z" />
    </svg>
  ),
  flower: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M12 4h16v8h8v16h-8v8H12v-8H4V12h8V4zm8 12h4v8h-4v-8z" />
    </svg>
  ),
  eye: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M4 12h32v16H4V12zm4 4v8h24v-8H8zm8 0h8v8h-8v-8z" />
    </svg>
  ),
  smile: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M12 0h16v4h4v4h4v4h4v16h-4v4h-4v4h-4v4H12v-4H8v-4H4v-4H0V12h4V8h4V4h4V0zM8 12h4v4H8v-4zm20 0h4v4h-4v-4zM8 24h4v4h16v-4h4v8H4v-8h4z" />
    </svg>
  ),
  fire: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M16 4h8v4h4v8h4v16h-4v4h-8v4H12v-4H8v-4H4v-16h4v-8h4V4h4zM12 16h4v16h-4V16zm12 0h4v16h-4V16z" />
    </svg>
  ),
  heart: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M8 4h8v4h8V4h8v4h4v12h-4v4h-4v4h-4v4h-8v-4h-4v-4H8v-4H4V8h4V4z" />
    </svg>
  ),
  bolt: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M20 0h16v16h-8v4h8v20L8 24h8v-8H8V0h12z" />
    </svg>
  )
};
