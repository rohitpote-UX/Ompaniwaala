# KALASH — Pure By Nature 💧
### Premium Immersive Brand Website & Drinking Water Platform
**Agency:** Goldspade — Forged for Founders ([https://goldspade.in](https://goldspade.in))  
**Primary Market:** Pune, Maharashtra, India  
**Creative Standard:** Awwwards / FWA / CSS Design Awards level  

---

## Overview

**KALASH** is an Indian drinking-water brand reimagined as an international luxury digital experience. Built around the core creative thesis **"BEYOND THE DROP,"** the website combines the sacred Indian heritage of the Kalash vessel with modern beverage packaging, automated hygienic processing, and dependable daily morning delivery across Pune.

---

## 🌟 Key Highlights & Experience

- **Cinematic Experience Opening**: Film-style opening reveal crediting *Goldspade Presents // Beyond The Drop* with animated caustic shockwaves and audio cues.
- **Organic Multi-Image Hero Showcase**:
  - *20L Pure Water Jar*: Blue polycarbonate container with sealed tamper-evident cap and fresh condensation.
  - *Packaged Bottles & Splash*: High-speed dynamic water splash photography.
  - *Pune Delivery Specialist*: Courteous doorstep delivery at upscale residential apartments.
  - *Automated Hygiene Plant*: Multi-stage purification with stainless steel lines and blue UV clarification.
  - Zero sharp borders; crafted with deeply curved organic silhouettes (`rounded-[3.2rem]`) and floating satellite pills.
- **Interactive Pune Locality Checker**:
  - Real-time route availability selector (*Baner, Kothrud, Wakad, Hinjawadi, Aundh, Kalyani Nagar, Viman Nagar, Hadapsar*).
  - Instant dispatch slot confirmation (`Tomorrow 07:30 AM`).
- **Instant WhatsApp Integration**:
  - One-click click-to-chat with pre-filled, polite order inquiry for the selected neighborhood and product format.
- **Interactive Sound Engine**:
  - Synthesized crystal water drop and whoosh sounds using the native Web Audio API with a top-bar `AUDIO ON / MUTED` toggle.
- **Continuous 12-Section Storyboard Narrative**:
  1. Cinematic Intro (Emblem reveal)
  2. The Hero (*"EVERY DROP MATTERS."*)
  3. The Story of a Drop (*"BEYOND THE DROP."* interactive fluid canvas)
  4. The Meaning of Kalash (4-pillar emblem anatomy: Vessel, Droplet, Leaves, Flow)
  5. Brand Philosophy (*"NOT JUST WATER. AN EVERYDAY ESSENTIAL."*)
  6. The Product Suite (20L Jars, 1L & 500ml bottles, hygienic countertop tap cradles)
  7. Quality & Trust (6 verified operational hygiene standards)
  8. The Delivery Experience (*"GOOD WATER. WITHOUT THE HASSLE."*)
  9. Who We Serve (Homes & Families, Offices & Workplaces, Hospitality & Cafes)
  10. The Brand Statement (*"PURE BY NATURE. TRUSTED FOR YOU."*)
  11. Order & Contact (Scheduling form with spam honeypot + direct phone/WhatsApp actions)
  12. Editorial Footer (Pune coverage directory, legal links, and Goldspade credit)
- **Multi-Page Architecture**:
  - `/` — Flagship Homepage
  - `/our-story` — Cultural Origins & Brand Manifesto
  - `/products` — Detailed Product Specifications & Formats
  - `/contact` — Pune Dispatch Desk, Coverage Maps & FAQs
  - `/privacy` & `/terms` — Comprehensive Legal & Jar Deposit Terms

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components + Prerendered Static Content)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Design Tokens
- **Icons**: Lucide React
- **Smooth Scroll**: Lenis
- **Sound**: Web Audio API Synthesizer
- **SEO**: Schema.org JSON-LD (`Organization`, `LocalBusiness`), OpenGraph, Twitter Cards, `robots.txt`, `sitemap.xml`

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node 24)
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
npm run start
```

---

## 📍 Operational Configuration (Pune Hub)

Contact details and operational settings are managed centrally in `src/config/contact.ts` and can be customized via `.env.local`:
```env
NEXT_PUBLIC_CONTACT_PHONE="+91 98220 00000"
NEXT_PUBLIC_WHATSAPP_NUMBER="919822000000"
NEXT_PUBLIC_CONTACT_EMAIL="orders@kalashwater.in"
```

---

## 📄 License & Credits

- **Client**: KALASH Drinking Water, Pune, Maharashtra, India.
- **Designed & Developed by**: [Goldspade — Forged for Founders](https://goldspade.in).
