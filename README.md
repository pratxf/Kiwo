<div align="center">

<img src="app/icon.svg" width="72" height="72" alt="Kiwo logo" />

# Kiwo

**Learning Adventures Made for Kids**

A premium children's learning platform where reading, math, and science become exciting quests. Built to feel joyful, engaging, and worth coming back to every day.

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

</div>

---

## What is Kiwo?

Kiwo is an adaptive learning platform for children in **grades 1–6**. Every lesson is wrapped in a quest narrative — kids pick a character, explore subject worlds, earn badges, and level up while genuinely learning.

Parents get a real-time dashboard. Kids get an adventure.

---

## Features

- **Game-Based Learning** — lessons that feel like play, progress that feels like fun
- **Personalized Paths** — adapts to each child's pace, style, and strengths in real time
- **Six Subject Worlds** — Math, Reading, Science, Discovery, and two AI-guided companions
- **Reward System** — streaks, badges, XP, and a character that grows with the child
- **Parent Dashboard** — reading fluency, math growth, and session insights in one place
- **AI Tutor** — hints and pacing that adjust without frustrating the learner

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19 + Tailwind CSS 3 |
| Animations | Framer Motion 12 + GSAP 3 (ScrollTrigger) |
| Smooth scroll | Lenis |
| Icons | Lucide React |
| Language | TypeScript 5 (strict mode) |
| Deployment | Vercel |

---

## Getting Started

```bash
# Clone
git clone https://github.com/pratxf/Kiwo.git
cd Kiwo

# Install
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
Kiwo/
├── app/
│   ├── page.tsx          # All page sections (single-file architecture)
│   ├── layout.tsx        # Root layout + fonts
│   ├── globals.css       # Global styles + custom scrollbar
│   └── icon.svg          # Favicon
├── components/
│   └── ui/
│       └── reveal.tsx    # Scroll-reveal wrapper component
└── public/
    └── images/           # Hero bg, feature cards, subject artwork
```

---

## Design System

| Token | Value | Use |
|---|---|---|
| Primary | `#7C3AED` | Buttons, accents, sidebar |
| Deep | `#6D28D9` | Mission band, stats bg |
| Yellow | `#FFD93D` | CTAs, highlights, 3D button |
| Cream | `#F5F3FF` | Light section backgrounds |
| Dark | `#1A2B35` | Body text |

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Serve production build locally
npm run lint     # Run ESLint
```

---

## Deployment

Kiwo is deployed on **Vercel**. Every push to `main` triggers a production deploy automatically.

---

<div align="center">

Built with care for curious kids everywhere.

**© 2026 Kiwo. All rights reserved.**

</div>
