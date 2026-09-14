# Ziya Fashion — Bespoke Tailoring & Fashion Boutique (Singapore)

A modern, high-performance web application for **Ziya Fashion**, Singapore's premier destination for custom tailoring, bridal & wedding couture, traditional Indian & Malay garments, and precision alterations.

---

## 🏛️ Brand & Business Details

- **Location**: 02-18 Golden Landmark, 390 Victoria Street, Singapore 188061
- **Phone / WhatsApp**: [+65 8363 6036](https://wa.me/6583636036)
- **Email**: [admin@ziyafashion.net](mailto:admin@ziyafashion.net)
- **Hours**: Monday – Saturday: 12:00 PM – 7:00 PM | Sunday: Closed

---

## ⚡ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter & Outfit font system

---

## 🌐 Website Architecture & Routes

| Route | Purpose | Features |
| :--- | :--- | :--- |
| `/` | **Homepage** | Hero showcase, audience links, collection highlights, 4-card services preview, brand story, editorial journal preview, client testimonials, and unified enquiry form. |
| `/services` | **Our Services** | Comprehensive breakdown of 8 tailoring categories, Indian & Malay traditional wear, alteration services, 4-step tailoring process, and booking CTAs. |
| `/product-gallery/` | **Product Catalogue** | Garment catalogue featuring 12 tailored styles (Bridal Lehenga, Gents Suit, Baju Kahwin, Jubah, Saree, Pathani, etc.) and craftsmanship benefits. |
| `/blog` | **The Ziya Journal** | Editorial blog listing with 3-column responsive card grid, date stamps, category tags, and excerpts. |
| `/blog/[slug]` | **Journal Article Detail** | Dedicated editorial layouts with reading time, pullquotes, unified contact form, and dynamic interconnected related stories. |
| `/appointment` | **Appointment Booking** | Interactive multi-step consultation and fitting reservation form with date/time selection. |
| `/contact` | **Contact & Studio** | Verified boutique location details, operating hours, direct phone/WhatsApp links, and inquiry form. |
| `/about` | **About Ziya Fashion** | Atelier history, philosophy, craftsmanship standards, and boutique information. |

### Legacy Route Compatibility Redirects
- `/charity-nonprofit-landing-page/` ➔ Redirects to `/services`
- `/designs/` ➔ Redirects to `/product-gallery/`
- `/the-art-of-tailoring/` ➔ Redirects to `/blog/the-art-of-tailoring`
- `/style-that-lasts/` ➔ Redirects to `/blog/style-that-lasts`
- `/a-guide-to-comfort-style/` ➔ Redirects to `/blog/a-guide-to-comfort-style`

---

## 📂 Project Structure

```
ziya-fashion/
├── src/
│   ├── app/                               # Next.js App Router Pages
│   │   ├── about/                         # About Us Page
│   │   ├── appointment/                   # Appointment Booking Page & Form
│   │   ├── blog/                          # The Ziya Journal
│   │   │   ├── [slug]/                    # Dynamic Blog Detail Pages
│   │   │   └── page.tsx                   # Blog Listing Page
│   │   ├── contact/                       # Contact & Boutique Info Page
│   │   ├── product-gallery/               # Garment Catalogue Page
│   │   ├── services/                      # Tailoring Services Page
│   │   ├── layout.tsx                     # Global Root Layout
│   │   └── page.tsx                       # Homepage
│   ├── components/
│   │   ├── common/                        # Reusable Components (EnquiryForm, ContactSection)
│   │   ├── home/                          # Homepage Section Components (Hero, Services, Journal, etc.)
│   │   └── layout/                        # Header, Footer, Navigation, Instagram Bar
│   └── data/
│       ├── blogData.ts                    # Blog Posts Data & Query Helpers
│       ├── referenceData.ts               # Centralized Business Info, Services & Collections
│       └── siteData.ts                    # General Site Configuration
├── public/                                # Static Assets
├── .gitignore                             # Git Ignore Rules
├── next.config.ts                         # Next.js Configuration
├── package.json                           # Dependencies & Scripts
├── tailwind.config.ts                     # Tailwind CSS Configuration
└── tsconfig.json                          # TypeScript Configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ (or Node.js 20+)
- npm, yarn, pnpm, or bun

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Utkarsh9571/ziyafashion.git
cd ziya-fashion
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📄 License & Attribution
© 2026 Ziya Fashion. All rights reserved.
Bespoke Tailoring & Custom Fashion in Singapore.
