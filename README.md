# Abhinav Kumar — Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.x-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Live Deployment](https://img.shields.io/badge/Live_Site-abhinavkumar--dev.vercel.app-000?style=for-the-badge&logo=vercel&logoColor=white)](https://abhinavkumar-dev.vercel.app)

<p align="center">
  <strong>An editorial, typography-first personal portfolio engineered with 3D perspective transforms, tactile cursor physics, and deep contrast themes.</strong>
</p>

[🌐 **Visit Live Portfolio**](https://abhinavkumar-dev.vercel.app) · [Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started)

</div>

---

## ✦ Overview

Designed with restraint, typographic hierarchy, and museum-grade editorial care. The portfolio emphasizes technical depth across **Artificial Intelligence, Machine Learning, Deep Learning, and Bioinformatics**, balanced with personal pursuits in classical Indian arts, competitive tennis, and table tennis.

> *"Teaching machines to think. Teaching data to talk. Trying to figure out life’s source code."*

---

## ✦ Key Features

- **Editorial Typographic System**: Curated pairing of modern serif display titles with high-legibility monospace labels and clean sans-serif narratives.
- **3D Scroll Reveal Engine (`ScrollReveal3D`)**: Perspective-based reveals (`depth`, `tilt-left`, `tilt-right`, `unfold`) that smoothly materialize into focus as you navigate each section.
- **Interactive 3D Tilt Cards (`Card3D`)**: Mouse-tracking physics with dynamic specular glare, tilt momentum, and spring dampening.
- **Fluid Magnetic Cursor (`CustomCursor`)**: Spring-smoothed dual-ring cursor inspired by modern creative labs with contextual hover expansions and click ripple animations.
- **Dual Editorial Themes**:
  - **Light Mode**: High-contrast, clean gallery aesthetic with crisp slate text and subtle borders.
  - **Dark Mode**: Deep obsidian ambiance with warm typography and subtle specular highlights.
- **Responsive Architecture**: Fully responsive layout optimized for mobile screens, tablets, ultra-wide desktop displays, and high-DPI viewports.
- **SEO & Metadata**: Complete semantic HTML5 structure, OpenGraph cards, Twitter preview cards, auto-generated `sitemap.xml`, and `robots.txt`.

---

## ✦ Project Structure

```
├── public/                 # Static assets, portrait photos, icons
├── src/
│   ├── app/                # Next.js App Router (layout, page, sitemap, robots)
│   ├── components/
│   │   ├── Navbar.tsx      # Editorial header with blur backdrop & theme toggle
│   │   ├── Footer.tsx      # Minimalist footer with copyright & location
│   │   ├── sections/       # Primary portfolio sections
│   │   │   ├── Hero.tsx         # Headline, domain pillars, portrait card
│   │   │   ├── About.tsx        # Bio, core beliefs, formal dossier
│   │   │   ├── Work.tsx         # Selected case studies with 3D architecture
│   │   │   ├── Skills.tsx       # AI, ML, Systems, and Data capabilities
│   │   │   ├── Milestones.tsx   # Experience timeline & honors ledger
│   │   │   ├── Beyond.tsx       # Music, arts, athletics, publications
│   │   │   └── Contact.tsx      # Direct communication ledger & copyable email
│   │   └── ui/             # Reusable interactive UI primitives
│   │       ├── Card3D.tsx          # 3D mouse tilt with specular lighting
│   │       ├── ScrollReveal3D.tsx  # Perspective scroll reveal wrapper
│   │       ├── CustomCursor.tsx    # Magnetic dual-ring spring cursor
│   │       └── Icons.tsx           # GitHub, LinkedIn, LeetCode vector icons
│   ├── context/
│   │   └── ThemeContext.tsx # Persistent light/dark theme provider
│   └── data/
│       └── siteConfig.ts   # Single source of truth for all content & links
└── next.config.ts          # Turbopack & Next.js compiler settings
```

---

## ✦ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16** | React Framework with App Router & Turbopack |
| **React 19** | Concurrent UI component architecture |
| **TypeScript** | Strict static typing and code reliability |
| **Tailwind CSS v4** | Modern utility-first styling and CSS variable tokens |
| **Framer Motion** | Physics-based 3D animations and spring transitions |
| **Lucide React** | Clean, minimalist iconography |

---

## ✦ Getting Started

### Prerequisites
- **Node.js**: v18.18 or later (Node 20+ recommended)
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhinavkumar-15/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## ✦ Live Deployment

The portfolio is continuously deployed and served via **Vercel** with global Edge CDN caching and automatic SSL (HTTPS):

🔗 **[https://abhinavkumar-dev.vercel.app](https://abhinavkumar-dev.vercel.app)**

---


### Optional: Custom Domains on Vercel
To attach a custom domain (e.g. `abhinavkumar.dev` or a free domain):
1. In your Vercel project dashboard, navigate to **Settings** → **Domains**.
2. Add your domain. Vercel automatically manages DNS verification and generates free Let's Encrypt SSL certificates.

---

## ✦ License

Created by **[Abhinav Kumar](https://github.com/abhinavkumar-15)**.  
Open sourced under the [MIT License](LICENSE).
