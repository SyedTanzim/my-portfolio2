# Syed Tanzim Wajih — Personal Portfolio

A modern, responsive developer portfolio built with React, TypeScript, and Vite. Features smooth animations, a functional contact form, and a clean design system powered by Tailwind CSS v4 and shadcn/ui.

🌐 **Live:** [myportfolio-theta-orpin-20.vercel.app](https://myportfolio-theta-orpin-20.vercel.app/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animations | Framer Motion |
| Icons | React Icons (Feather) + Simple Icons |
| Email | EmailJS (`@emailjs/browser`) |
| Font | Geist Variable |
| Linting | Oxlint |
| Deployment | Vercel |

---

## Features

- **Hero** — Animated intro with name, tagline, and CTA
- **About** — Brief bio and background
- **Skills** — Categorised skill grid (Languages, Frontend, Backend, Database, DevOps)
- **Experience** — Timeline of work experience with tech stack badges
- **Projects** — Project cards with live/GitHub links and featured highlights
- **Contact** — Functional contact form via EmailJS with success/error states
- **Navbar** — Smooth-scroll navigation with active section tracking
- **Dark mode ready** — CSS custom properties wired for light/dark themes
- **SEO** — Title, meta description, Open Graph tags
- **Responsive** — Mobile-first layout across all sections

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/SyedTanzim/my-portfolio2.git
cd my-portfolio2
npm install
```

### Environment Variables

Create a `.env` file in the project root (this file is git-ignored):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from [emailjs.com](https://www.emailjs.com/) after setting up a service and email template.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── ui/             # shadcn/ui primitives (Card, Button, Badge…)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── resume.ts       # Single source of truth for all content
├── types/              # Shared TypeScript interfaces
├── lib/                # Utility helpers
├── index.css           # Design tokens + Tailwind config
└── main.tsx
```

> **To update content** (projects, skills, experience, etc.), edit `src/data/resume.ts` — no other files need to change.

---

## Deployment

The project is deployed on **Vercel**. To deploy your own fork:

1. Import the repo at [vercel.com/new](https://vercel.com/new)
2. Add the three `VITE_EMAILJS_*` environment variables in the Vercel dashboard
3. Vercel auto-detects Vite — no extra configuration needed

---

## Author

**Syed Tanzim Wajih**  
Full Stack Developer — React · TypeScript · FastAPI · PostgreSQL

- GitHub: [@SyedTanzim](https://github.com/SyedTanzim)
- LinkedIn: [syedtanzimwajih](https://linkedin.com/in/syedtanzimwajih)
- Email: syedtanzimwajih@gmail.com