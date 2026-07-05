# Neel Prajapati — Personal Portfolio

<div align="center">

**Building AI that creates real-world impact.**

[![Live Site](https://img.shields.io/badge/Live-neelprajapatiportfolio.work-6366f1?style=for-the-badge)](https://neelprajapatiportfolio.work)
[![GitHub](https://img.shields.io/badge/GitHub-Neel--2606-181717?style=for-the-badge&logo=github)](https://github.com/Neel-2606)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-neel--prajapati--ai-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/neel-prajapati-ai)

*Winner — NASA Space Apps · SSIP Funded AI Builder · CSE @ MSU Baroda*

</div>

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Page Sections](#page-sections)
- [Server Functions & Backend](#server-functions--backend)
- [Database (Supabase)](#database-supabase)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Design System](#design-system)
- [Performance Optimizations](#performance-optimizations)
- [Error Handling](#error-handling)
- [Adding Content](#adding-content)
- [Contact](#contact)
- [License](#license)

---

## Overview

This repository contains the source code for **Neel Prajapati's personal portfolio** — a single-page, server-rendered web application that showcases projects, hackathon achievements, skills, certifications, leadership experience, and a live contact form.

The site is built as a modern full-stack React application using **TanStack Start** (SSR), deployed on **Vercel**, with **Supabase** for data persistence and **Resend** for email notifications.

### Who is this for?

| Audience | What they'll find |
|----------|-------------------|
| Recruiters & hiring managers | Resume, projects, awards, contact form |
| Collaborators | GitHub links, hackathon history, skills matrix |
| Developers | Clean TypeScript codebase, SSR patterns, server functions |
| Students | Inspiration from a hackathon-driven AI/ML journey |

### Highlights at a glance

- **10+ hackathons** participated across India
- **NASA Space Apps Challenge 2025** — Winner (CityForge: Mumbai Pulse)
- **IBM AI Innovation Challenge 2026** — 2nd Rank in Gujarat
- **Rs. 2.43 Lakh SSIP funding** for AgriForge — KrishiMitra AI
- **CGPA 8.2** — CSE, The Maharaja Sayajirao University of Baroda

---

## Live Demo

| Resource | URL |
|----------|-----|
| **Production site** | [neelprajapatiportfolio.work](https://neelprajapatiportfolio.work) |
| **Alternate deployment** | [neelportfolio-teal.vercel.app](https://neelportfolio-teal.vercel.app) |
| **GitHub profile** | [github.com/Neel-2606](https://github.com/Neel-2606) |
| **Resume (PDF)** | `/RESUME.pdf` on the live site |

---

## Features

### User-facing

- **Cinematic hero section** with intro video, scramble-text role rotation, and animated CTAs
- **Smooth scroll navigation** with active section highlighting and mobile hamburger menu
- **Scroll progress indicator** fixed at the top of the viewport
- **Animated statistics** with count-up effects in the About section
- **Filterable project grid** (All · AI/ML · Web · Hackathon) with 3D tilt cards
- **Hackathon timeline** with tier-based filtering (Winner · Runner Up · Finalist · Participant)
- **Modal detail views** with auto-discovered image carousels for projects, hackathons, and certifications
- **Contact form** with Zod validation, confetti celebration, and toast notifications
- **Visitor counter** powered by Supabase, displayed in the footer
- **Back-to-top button** for long-page navigation
- **Glassmorphism UI** with animated cosmic background (stars, blobs, orbs, noise, vignette)
- **SEO & Open Graph** meta tags for social sharing
- **Dark theme** throughout with electric indigo / fuchsia accent palette

### Developer-facing

- **Server-side rendering (SSR)** via TanStack Start + Nitro (Vercel preset)
- **Type-safe server functions** for contact submission and visitor tracking
- **Lazy-loaded below-the-fold sections** to reduce initial bundle size
- **CSRF middleware** on server function calls
- **Custom SSR error wrapper** with human-readable error pages
- **Supabase RLS policies** for secure anonymous contact inserts
- **Dual email delivery** — Resend (primary) + Supabase backup
- **shadcn/ui component library** (40+ Radix-based primitives)
- **ESLint + Prettier** for code quality and formatting

---

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev) | 19.x | UI library |
| [TanStack Start](https://tanstack.com/start) | 1.167.x | Full-stack SSR framework |
| [TanStack Router](https://tanstack.com/router) | 1.168.x | File-based routing with type safety |
| [TanStack Query](https://tanstack.com/query) | 5.x | Server state management |
| [Vite](https://vite.dev) | 7.x | Build tool & dev server |
| [Nitro](https://nitro.build) | 3.x | Server engine (Vercel preset) |
| [TypeScript](https://www.typescriptlang.org) | 5.8.x | Type safety |

### Styling & UI

| Technology | Purpose |
|------------|---------|
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling with `@theme` design tokens |
| [Radix UI](https://www.radix-ui.com) | Accessible headless primitives |
| [shadcn/ui](https://ui.shadcn.com) | Pre-built component patterns (New York style) |
| [Framer Motion](https://www.framer.com/motion) | Page animations, modals, scroll reveals |
| [Lenis](https://lenis.darkroom.engineering) | Smooth scroll experience |
| [Lucide React](https://lucide.dev) | Icon system |
| [Sonner](https://sonner.emilkowal.ski) | Toast notifications |

### Backend & Data

| Technology | Purpose |
|------------|---------|
| [Supabase](https://supabase.com) | PostgreSQL database, RLS, auth hooks |
| [Resend](https://resend.com) | Transactional email for contact form |
| [Zod](https://zod.dev) | Schema validation (client + server) |
| [React Hook Form](https://react-hook-form.com) | Form state (available via shadcn) |

### Tooling & Platform

| Technology | Purpose |
|------------|---------|
| [Lovable](https://lovable.dev) | Project scaffolding & Vite TanStack config |
| [ESLint](https://eslint.org) | Linting (TypeScript + React Hooks rules) |
| [Prettier](https://prettier.io) | Code formatting |
| [Vercel](https://vercel.com) | Production hosting & edge deployment |
| Bun / npm | Package management |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Browser (Client)                        │
│  React 19 · Framer Motion · Lenis · TanStack Router · Query    │
└────────────────────────────┬────────────────────────────────────┘
                             │ HTTP / Server Functions
┌────────────────────────────▼────────────────────────────────────┐
│                    TanStack Start (SSR)                         │
│  src/server.ts → Nitro (Vercel) → src/start.ts middleware      │
│  ┌─────────────────┐  ┌──────────────────┐  ┌───────────────┐  │
│  │ CSRF Middleware │  │ Error Middleware │  │ Supabase Auth │  │
│  └─────────────────┘  └──────────────────┘  └───────────────┘  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Server Functions: submitContact · getAndIncrementViews     ││
│  └─────────────────────────────────────────────────────────────┘│
└────────────┬───────────────────────────────┬────────────────────┘
             │                               │
    ┌────────▼────────┐             ┌────────▼────────┐
    │  Resend API     │             │    Supabase     │
    │  (Email notify) │             │  (PostgreSQL)   │
    └─────────────────┘             └─────────────────┘
```

### Request flow (contact form)

1. User submits the contact form on the client
2. Zod validates input client-side
3. `submitContact` server function is called via `useServerFn`
4. CSRF middleware validates the request
5. Server re-validates with Zod
6. **Primary:** Email sent via Resend API to `neelprajapati2601@gmail.com`
7. **Backup:** Message inserted into Supabase `contacts` table (non-blocking)
8. Success response triggers confetti + Sonner toast

### Routing

The app uses **file-based routing** via TanStack Router:

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/routes/index.tsx` | Main portfolio page (all sections) |
| `/*` | `src/routes/__root.tsx` | Root layout, background, error/404 pages |

Route tree is auto-generated in `src/routeTree.gen.ts` — do not edit manually.

---

## Project Structure

```
Neel-New-Portfolio/
├── public/                          # Static assets (served as-is)
│   ├── Neel_Intro.mp4               # Hero intro video
│   ├── RESUME.pdf                   # Downloadable resume
│   ├── favicon.svg                  # Site favicon
│   └── og-image.png                 # Open Graph preview image
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── projects/            # Per-project image folders (auto-discovered)
│   │       ├── hackathons/          # Per-hackathon image folders
│   │       └── certifications/      # Per-cert image folders
│   │
│   ├── components/
│   │   ├── portfolio/               # Portfolio-specific sections
│   │   │   ├── Hero.tsx             # Hero with video + scramble text
│   │   │   ├── About.tsx            # Bio + animated counters
│   │   │   ├── Skills.tsx           # Skills grid (6 categories)
│   │   │   ├── Projects.tsx         # Filterable project cards + modals
│   │   │   ├── Hackathons.tsx       # Achievement cards + modals
│   │   │   ├── Certifications.tsx   # Certification cards + modals
│   │   │   ├── Leadership.tsx       # Community & club roles
│   │   │   ├── Contact.tsx          # Contact form + info cards
│   │   │   ├── Footer.tsx           # Footer + visitor counter
│   │   │   ├── Nav.tsx              # Fixed navigation bar
│   │   │   ├── ScrollProgress.tsx   # Top scroll progress bar
│   │   │   ├── BackToTop.tsx        # Floating back-to-top button
│   │   │   ├── SiteBackground.tsx   # Animated cosmic background
│   │   │   ├── SectionHeader.tsx    # Reusable section title component
│   │   │   ├── Modal.tsx            # Full-screen detail modal
│   │   │   ├── TiltWrapper.tsx      # 3D tilt effect on cards
│   │   │   ├── ImageCarousel.tsx    # Image slider for modals
│   │   │   ├── SSIPBanner.tsx       # Government funding banner (optional)
│   │   │   └── CustomCursor.tsx     # Custom cursor effect (optional)
│   │   │
│   │   └── ui/                      # shadcn/ui primitives (40+ components)
│   │
│   ├── hooks/
│   │   └── use-mobile.tsx           # Responsive breakpoint hook
│   │
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts            # Browser + SSR Supabase client
│   │       ├── client.server.ts     # Server-only Supabase client
│   │       ├── types.ts             # Generated database types
│   │       ├── auth-attacher.ts     # Auth middleware for server fns
│   │       └── auth-middleware.ts   # Request auth middleware
│   │
│   ├── lib/
│   │   ├── contact.functions.ts     # submitContact server function
│   │   ├── visitor.functions.ts     # getAndIncrementViews server function
│   │   ├── config.server.ts         # Server-only configuration helper
│   │   ├── error-capture.ts         # SSR error capture utility
│   │   ├── error-page.ts            # HTML error page renderer
│   │   ├── lovable-error-reporting.ts # Error reporting integration
│   │   ├── utils.ts                 # cn() classname utility
│   │   └── api/
│   │       └── example.functions.ts # Example server function template
│   │
│   ├── routes/
│   │   ├── __root.tsx               # Root layout, providers, meta tags
│   │   └── index.tsx                # Home page (all portfolio sections)
│   │
│   ├── router.tsx                   # Router factory with QueryClient
│   ├── routeTree.gen.ts             # Auto-generated route tree
│   ├── server.ts                    # SSR entry with error normalization
│   ├── start.ts                     # TanStack Start instance + middleware
│   └── styles.css                   # Global styles, design tokens, utilities
│
├── supabase/
│   ├── config.toml                  # Supabase local dev configuration
│   └── migrations/
│       ├── *_contacts_table.sql     # contacts table + RLS
│       └── *_contacts_constraints.sql # Field length constraints
│
├── components.json                  # shadcn/ui configuration
├── vite.config.ts                   # Vite + Nitro + TanStack config
├── tsconfig.json                    # TypeScript configuration
├── eslint.config.js                 # ESLint flat config
├── .prettierrc                      # Prettier formatting rules
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

---

## Page Sections

The portfolio is a **single-page application** with anchor-linked sections:

| # | Section | ID | Component | Description |
|---|---------|-----|-----------|-------------|
| 01 | **Hero** | `home` | `Hero.tsx` | Full-viewport intro with video, role scramble animation, CTAs |
| 02 | **About** | `about` | `About.tsx` | Personal bio, journey narrative, animated stat counters |
| 03 | **Skills** | `skills` | `Skills.tsx` | 6-category skills grid (Languages, AI/ML, Frameworks, etc.) |
| 04 | **Projects** | `projects` | `Projects.tsx` | 9 featured projects with filterable cards and detail modals |
| 05 | **Hackathons** | `hackathons` | `Hackathons.tsx` | 9 hackathon entries with tier badges and detail modals |
| 06 | **Certifications** | `certifications` | `Certifications.tsx` | Google Cloud programs with certificate image carousels |
| 07 | **Leadership** | `leadership` | `Leadership.tsx` | Neuralize, Code Vimarsh, and community engagement |
| 08 | **Contact** | `contact` | `Contact.tsx` | Validated contact form + social/contact info cards |
| — | **Footer** | — | `Footer.tsx` | Attribution, social links, live visitor counter |

### Featured Projects

| Project | Status | Stack highlights |
|---------|--------|------------------|
| **AgriForge — KrishiMitra** | Active · SSIP Funded | EfficientNet, Multilingual NLP, Voice AI |
| **Urban Intel AI** | 1st Runner Up · Ingenius 7.0 | Random Forest, TinyLlama, Local LLM |
| **CityForge: Mumbai Pulse** | NASA Space Apps Winner | React, Flask, NASA EO Data, Leaflet |
| **TerraForge** | DotSlash 9.0 Top 8 | Local AI, Environmental Data APIs |
| **Smart Cattle Health** | Hackovate Top 40 | Next.js, FastAPI, Scikit-learn, Supabase |
| **Coastal Threat Alert** | HackOut 2025 | AI, IoT, Satellite Data, Role-based Dashboards |
| **MindForge** | Personal Project | Mistral, Gemini, Hugging Face · [Live Demo](https://mind-forge-six.vercel.app) |
| **Eunoia Homoeopathy** | Live Client Project | HTML, CSS, JS, Domain & Hosting |
| **Agent Arena** | HackBaroda 2026 | Groq LLMs, Vectorize AI, Memory-Augmented RAG |

---

## Server Functions & Backend

Server functions live in `src/lib/*.functions.ts` and are created with TanStack Start's `createServerFn`.

### `submitContact` — Contact form handler

**File:** `src/lib/contact.functions.ts`  
**Method:** `POST`  
**Validation:** Zod schema (name, email, subject, message)

```
Client (Contact.tsx)
    → useServerFn(submitContact)
    → CSRF middleware
    → Zod validation
    → Resend API (email notification)
    → Supabase insert (backup, non-blocking)
    → { ok: true }
```

### `getAndIncrementViews` — Visitor counter

**File:** `src/lib/visitor.functions.ts`  
**Method:** `POST`  
**Called from:** `Footer.tsx` on mount

Increments the `page_views` table row for `page = 'home'` and returns the updated count.

### Middleware stack (`src/start.ts`)

| Middleware | Purpose |
|------------|---------|
| `attachSupabaseAuth` | Attaches Supabase session to server function context |
| `csrfMiddleware` | CSRF protection on all server function calls |
| `errorMiddleware` | Catches unhandled errors, renders friendly HTML error page |

---

## Database (Supabase)

### `contacts` table

Stores contact form submissions as a backup to email delivery.

```sql
CREATE TABLE public.contacts (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT NOT NULL,          -- 1–120 chars
  email      TEXT NOT NULL,          -- 3–255 chars
  subject    TEXT NOT NULL,          -- 1–200 chars
  message    TEXT NOT NULL,          -- 20–5000 chars
  created_at TIMESTAMPTZ DEFAULT now()
);
```

**RLS Policy:** Anonymous and authenticated users can `INSERT` only (no read access from client).

### `page_views` table

Tracks homepage visitor count (referenced in `visitor.functions.ts`).

### Running migrations locally

```bash
# Install Supabase CLI, then:
supabase db push
```

---

## Environment Variables

Create a `.env` file in the project root (never commit secrets):

```env
# Supabase (required for contact backup + visitor counter)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key

# Server-side Supabase (SSR — same values without VITE_ prefix)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_PUBLISHABLE_KEY=your-anon-key

# Resend (required for contact form email delivery)
RESEND_API_KEY=re_your_api_key
```

| Variable | Scope | Required | Description |
|----------|-------|----------|-------------|
| `VITE_SUPABASE_URL` | Client + Server | Yes* | Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Client + Server | Yes* | Supabase anon/public key |
| `SUPABASE_URL` | Server (SSR) | Yes* | Same URL for server-side reads |
| `SUPABASE_PUBLISHABLE_KEY` | Server (SSR) | Yes* | Same key for server-side reads |
| `RESEND_API_KEY` | Server only | Recommended | Enables email notifications |

\*The site renders without Supabase, but contact form backup and visitor counter will not work.

> **Security note:** Only `VITE_*` prefixed variables are exposed to the browser. Never put secrets (API keys with write access, service role keys) in `VITE_` variables.

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm**, **pnpm**, **yarn**, or **bun**
- **Supabase account** (for full functionality)
- **Resend account** (for contact form emails)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Neel-2606/Neel-New-Portfolio.git

# 2. Enter the project directory
cd Neel-New-Portfolio

# 3. Install dependencies
npm install
# or: bun install

# 4. Set up environment variables
cp .env.example .env   # if available, or create .env manually
# Edit .env with your Supabase and Resend credentials

# 5. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build (outputs to `.output/` via Nitro) |
| `npm run build:dev` | Development-mode production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run format` | Format all files with Prettier |

---

## Deployment

The project is configured for **Vercel** deployment via Nitro:

```typescript
// vite.config.ts
export default defineConfig({
  nitro: { preset: "vercel" },
  tanstackStart: {
    server: { entry: "server", preset: "vercel" },
  },
});
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com/new)
3. Add environment variables in the Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_PUBLISHABLE_KEY`
   - `RESEND_API_KEY`
4. Deploy — Vercel auto-detects the Nitro/Vercel preset

### Custom domain

The production site uses `neelprajapatiportfolio.work`. Configure DNS in your domain registrar pointing to Vercel.

---

## Design System

### Color palette

The site uses a **dark cosmic theme** with OKLCH color tokens defined in `src/styles.css`:

| Token | Color | Usage |
|-------|-------|-------|
| `--primary` | Electric Indigo (`#6366f1`) | Buttons, links, focus rings |
| `--secondary` | Purple (`#a855f7`) | Gradients, accents |
| `--accent` | Amber (`#f59e0b`) | SSIP badges, winner tiers |
| `--background` | Deep space (`oklch(0.06 0.02 270)`) | Page background |

### Typography

| Role | Font | Usage |
|------|------|-------|
| Body | **Inter** | Paragraphs, UI text |
| Display | **Space Grotesk** | Headings, hero text |
| Mono | **JetBrains Mono** | Labels, stats, chips |

### Utility classes

| Class | Effect |
|-------|--------|
| `.glass` | Frosted glass card with backdrop blur |
| `.glass-strong` | Stronger glass effect for nav/modals |
| `.text-gradient` | Indigo-to-purple gradient text |
| `.text-gradient-gold` | Gold gradient for SSIP highlights |
| `.chip` | Small pill badge |
| `.btn-hero` | Primary CTA button with glow |
| `.btn-ghost-neon` | Ghost button with neon border hover |
| `.card-inner-glow` | Subtle inner glow on project cards |

### Animations

- **Framer Motion** — Section reveals (`whileInView`), modal transitions, nav underline
- **Lenis** — Smooth scroll with `lerp: 0.08`
- **CSS keyframes** — Background blobs, star twinkle, play-ring pulse
- **Canvas Confetti** — Contact form success celebration

---

## Performance Optimizations

| Optimization | Implementation |
|--------------|----------------|
| **Code splitting** | `React.lazy()` for all below-the-fold sections |
| **Suspense boundaries** | Fallback placeholder while lazy chunks load |
| **Eager image glob** | `import.meta.glob` discovers images at build time |
| **Passive scroll listeners** | Nav scroll handler uses `{ passive: true }` |
| **SSR** | Initial HTML rendered server-side for fast FCP |
| **Font loading** | Google Fonts loaded via `<link>` in route head |

---

## Error Handling

The project implements a **three-layer error handling strategy**:

1. **Client boundary** — `ErrorComponent` in `__root.tsx` catches React render errors with retry/home options
2. **Server middleware** — `errorMiddleware` in `start.ts` catches server function errors
3. **SSR wrapper** — `server.ts` normalizes h3-swallowed 500 responses into readable HTML error pages

Error reporting integrates with Lovable's error reporting via `lovable-error-reporting.ts`.

---

## Adding Content

### New project

1. Add an entry to the `PROJECTS` array in `src/components/portfolio/Projects.tsx`
2. Create a folder `src/assets/images/projects/<project-id>/` with screenshots
3. Images are auto-discovered by `import.meta.glob` — no import statements needed

### New hackathon

1. Add an entry to the `ENTRIES` array in `src/components/portfolio/Hackathons.tsx`
2. Create `src/assets/images/hackathons/<hackathon-id>/` with photos

### New certification

1. Add an entry to the `CERTS` array in `src/components/portfolio/Certifications.tsx`
2. Create `src/assets/images/certifications/<cert-id>/` with certificate images

### New UI component

```bash
npx shadcn@latest add <component-name>
```

Components are added to `src/components/ui/` per `components.json` configuration.

---

## Contact

| Channel | Link |
|---------|------|
| **Email** | [neelprajapati2601@gmail.com](mailto:neelprajapati2601@gmail.com) |
| **LinkedIn** | [linkedin.com/in/neel-prajapati-ai](https://linkedin.com/in/neel-prajapati-ai) |
| **GitHub** | [github.com/Neel-2606](https://github.com/Neel-2606) |
| **Portfolio** | [neelprajapatiportfolio.work](https://neelprajapatiportfolio.work) |
| **Location** | Vadodara, Gujarat, India |

---

## License

This project is the personal portfolio of Neel Prajapati. The source code is available on GitHub for reference and learning purposes. Please do not copy the personal content (bio, projects, achievements) without permission.

---

<div align="center">

**Crafted with passion, modern web technologies, and AI.**

*Neel Prajapati · MSU Baroda · 2025*

</div>
