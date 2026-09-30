import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'aura-fitness',
    number: '01',
    title: 'AURA FITNESS',
    category: 'Fitness / Wellness',
    year: 'CONCEPT / 2026',
    tagline: 'High-performance movement meets architectural minimalism.',
    summary: 'A bespoke digital sanctuary for an elite private athletic and recovery club in Zurich, designed to inspire discipline and physical longevity through high-contrast visual rhythm.',
    theIdea: 'Traditional fitness websites overwhelm visitors with aggressive neon highlights and endless banner ads. For Aura, the concept was to craft an architectural digital retreat: deliberate breathing room, cinematic monochrome training footage, and a private booking portal that feels like entering a silent, climate-controlled studio.',
    visualDirection: 'A restrained obsidian palette punctuated by soft platinum highlights. Generous typography set in sharp modern sans-serif paired with tactile micro-grids. High-dynamic-range athletic photography captures movement with classical sculpture composure.',
    keyFeatures: [
      'Private Session Reservation Flow with calendar sync preview',
      'Dynamic Movement Lab showing biomechanics breakdowns',
      'Atmospheric Dark Mode with micro-grain surface texturing',
      'Interactive Recovery Suite tour with architectural floorplan callouts'
    ],
    responsiveExperience: {
      desktopNotes: 'Expansive 1440px multi-column layout with horizontal movement reels and subtle cursor-directed parallax depth.',
      mobileNotes: 'Streamlined thumb-first booking drawer, high-legibility typographic scales, and fluid swipeable session schedules.'
    },
    intendedResult: 'A seamless, dignified conversion journey that attracts high-caliber members, communicates exclusivity without pretension, and facilitates membership inquiries with zero friction.',
    themeColor: '#0d0e12',
    accentHex: '#d8dee9',
    mockupType: 'desktop'
  },
  {
    id: 'noir-table',
    number: '02',
    title: 'NOIR TABLE',
    category: 'Restaurant / Hospitality',
    year: 'CONCEPT / 2026',
    tagline: 'An immersive digital tasting menu for avant-garde gastronomy.',
    summary: 'A nocturnal digital experience for a 14-seat experimental culinary atelier, highlighting seasonal foraging, open-fire technique, and intimate dining rituals.',
    theIdea: 'A fine-dining website should mirror the pacing of a multi-course dinner. Instead of a static PDF menu, Noir Table presents each seasonal iteration as an editorial culinary monograph with wine pairing insights and reservation slots released on lunar cycles.',
    visualDirection: 'Deep charcoal slate with warm candlelit amber accents. Asymmetrical editorial compositions, bespoke serif typography for course titles, and ultra-high-definition macro cinematography of charcoal, ember, and wild botanical infusions.',
    keyFeatures: [
      'Interactive 12-Course Monograph with sommelier tasting notes',
      'Lunar Cycle Cellar & Reservation Release Engine',
      'Soundscape integration for dining ambience preview',
      'Private Chef Table enquiry modal with dietary preference builder'
    ],
    responsiveExperience: {
      desktopNotes: 'Immersive split-screen layout pairing dish photography with curated storytelling and interactive ingredient provenance.',
      mobileNotes: 'Tactile single-hand card progression allowing guests to preview the seasonal menu and reserve in under three taps.'
    },
    intendedResult: 'Transforms prospective diners into eager patrons well before they cross the threshold, preserving table reservations and celebrating culinary artistry.',
    themeColor: '#120f0d',
    accentHex: '#d4af37',
    mockupType: 'laptop'
  },
  {
    id: 'vanta-realty',
    number: '03',
    title: 'VANTA REALTY',
    category: 'Real Estate',
    year: 'CONCEPT / 2026',
    tagline: 'Architectural residences presented with gallery-grade reverence.',
    summary: 'An ultra-luxury residential brokerage portal showcasing brutalist villas, alpine sanctuaries, and waterfront modernist compounds across Europe and North America.',
    theIdea: 'High-net-worth property acquisitions demand discretion, precision, and an aesthetic standard that matches multi-million dollar architecture. Vanta removes cluttered MLS filters in favor of curatorial collections curated by architectural movement.',
    visualDirection: 'Monochrome concrete textures, hairline architectural dimension grids, and generous negative space. Every property dossier is formatted like a monograph from a fine art publisher, highlighting natural light orientation and material sourcing.',
    keyFeatures: [
      'Interactive Sun-Study & Natural Light Path Simulator',
      'Architectural Blueprint & Material Palette Inspector',
      'Confidential Private Viewing request mechanism with NDAs',
      'Curated Property Dossier PDF exporter for family offices'
    ],
    responsiveExperience: {
      desktopNotes: 'Full-bleed photographic galleries with smooth pan-and-zoom and architectural elevation overlays.',
      mobileNotes: 'Edge-to-edge vertical story cards optimized for executive smartphones during private travel.'
    },
    intendedResult: 'Positions properties as collectible fine architecture, attracting discerning buyers and building immediate trust with ultra-luxury estate sellers.',
    themeColor: '#0a0b0d',
    accentHex: '#a0aab8',
    mockupType: 'dual'
  },
  {
    id: 'nexa-academy',
    number: '04',
    title: 'NEXA ACADEMY',
    category: 'Education',
    year: 'CONCEPT / 2026',
    tagline: 'Modern executive leadership & craft mastery for high-growth operators.',
    summary: 'A rigorous digital campus and cohort platform for product designers, technical founders, and creative directors scaling modern venture-backed organizations.',
    theIdea: 'Online education interfaces are often cluttered with gamified badges and noisy dashboards. Nexa introduces a calm, distraction-free environment inspired by Scandinavian libraries and executive briefing books.',
    visualDirection: 'Crisp technical sans-serif typography, structured tabular syllabus matrices, muted graphite surfaces, and soft directional drop-shadows that give physical weight to curriculum books and lecture transcripts.',
    keyFeatures: [
      'Interactive 8-Week Cohort Curriculum Matrix with live syllabus',
      'Faculty Profile & Peer Critique Showcase',
      'Direct Cohort Application flow with portfolio submission review',
      'Live Masterclass schedule with time-zone synchronization'
    ],
    responsiveExperience: {
      desktopNotes: 'Two-column split view aligning week-by-week learning goals with downloadable case briefs and live studio critique schedules.',
      mobileNotes: 'Focused lecture schedule with frictionless application completion and calendar reminders.'
    },
    intendedResult: 'A prestigious, credible digital presence that justifies high tuition tiers and facilitates cohort recruitment from world-class tech firms.',
    themeColor: '#090a0f',
    accentHex: '#9ca3af',
    mockupType: 'editorial'
  }
];
