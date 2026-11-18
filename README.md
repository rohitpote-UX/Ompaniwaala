# RANJEET ENTERPRISES 💧
### 20 Litre Water Jar Supplier & Delivery Platform — Aundh, Pune
**Business Category:** Bottled Drinking Water Supplier / 20 Litre Water Jar Delivery  
**Primary Market:** Aundh, Baner, Khadki • Pune, Maharashtra, India  
**Creative Standard:** Awwwards / Editorial Design Language  

---

## Overview

**Ranjeet Enterprises** is a dedicated 20-litre drinking water jar supplier in Pune, operating from DP Road, Aundh. The website features an editorial, high-contrast digital experience crafted to present dependable local hydration:

- **Dual-Video Ambient Hero (100vh)**: Seamlessly alternates between full-bleed city architecture and refreshing pure drink pour video tracks with faststart MP4 streaming and crisp poster frames.
- **Bilingual Interface (English Primary & Marathi)**: Instant zero-reload language toggle (`[EN | मराठी]`) with Devanagari typography.
- **Glassmorphic Navigation Bar**: Scroll-direction-aware header, brand wordmark (`Ranjeet | Enterprises`), multi-level interactive dropdowns, and an Awwwards-style **Order Now** pill button with vertical text-swap animation.
- **Full-Screen Editorial Navigation**: High-contrast drawer with clip-path transition and quick access to all service areas, capabilities, and order desks.
- **Confirmed Service Areas**: Dedicated 5-panel interactive showcase focusing on verified delivery routes across **Aundh**, **Baner**, and **Khadki** (with contact-to-confirm options for adjacent areas).
- **Substantiated Business Metrics**: Highlighting listed **24-hour availability**, **12 Google business reviews**, **4.6★ customer rating**, and dedicated **20L water jars**.
- **Verified Business Location**: Located at DP Road, Near Omkar Complex, Opposite Persona Furnishing, Shambhu Vihar Society, Aundh, Pune 411067.
- **Editorial Footer**: 4-column layout with direct links to verified Google Business Profile, service routes, legal terms, and responsive contact options.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components + Static Page Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design Tokens (Deep Navy `#0A1F33`, Aqua `#1FB5D6`, Off-white `#F6F8FA`)
- **Typography**: Geometric Sans (`Plus Jakarta Sans`) paired with Editorial Serif (`Cormorant Garamond`) and Devanagari (`Noto Sans Devanagari`)
- **Animations & Smooth Scroll**: GSAP (ScrollTrigger, Flip), Lenis Smooth Scroll
- **Media**: Faststart-optimized H.264 video streaming + WebP/AVIF imagery
- **SEO & Structured Data**: Schema.org JSON-LD (`Organization`, `LocalBusiness`), OpenGraph, Twitter Cards, Google Maps Profile integration

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node 22+)
- npm 9+

### Installation
```bash
# Clone the repository
git clone https://github.com/rohitpote-UX/Ompaniwaala.git
cd Ompaniwaala

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build
```bash
# Create optimized production build
npm run build

# Start production server
npm run start -- -p 3000
```

---

## 📍 Operational Configuration (Aundh, Pune Hub)

Contact details, WhatsApp order templates, and service routes are managed centrally in `src/config/brand.ts` and `src/config/contact.ts`, and can be customized via `.env.local` or Vercel Environment Variables:

```env
NEXT_PUBLIC_SITE_URL="https://ranjeetenterprises.in"
NEXT_PUBLIC_CONTACT_PHONE="+91 98XXX XXXXX"
NEXT_PUBLIC_CONTACT_PHONE_RAW="+9198XXXXXXXX"
NEXT_PUBLIC_WHATSAPP_NUMBER="9198XXXXXXXX"
NEXT_PUBLIC_CONTACT_EMAIL="orders@ranjeetenterprises.in"
NEXT_PUBLIC_SUPPORT_EMAIL="care@ranjeetenterprises.in"
```
