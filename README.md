# Ramnath G.K — Personal Portfolio

A premium, production-quality developer portfolio built around one idea:

> **Software engineering with a systems mindset.**

It presents Ramnath G.K — a third-year Electrical Engineering student at BVCOE, Delhi — as an aspiring software engineer focused on C++, data structures and algorithms, operating systems, databases, computer networks, Linux, and emerging work in CUDA, GPU programming, and parallel computing.

The site is honest by design: verified work and clearly labelled project *concepts* are never mixed, no fake statistics, links, or experience appear anywhere, and every contact action is either fully functional or hidden until configured.

## Tech stack

| Layer     | Choice                                              |
| --------- | --------------------------------------------------- |
| Framework | React 19 (functional components + hooks)            |
| Build     | Vite 8                                              |
| Language  | TypeScript (strict mode)                            |
| Styling   | Tailwind CSS 4 (design tokens via `@theme`)          |
| Animation | Framer Motion (`Motion for React`) — restrained      |
| Icons     | Lucide React (+ two inline brand SVGs)              |
| Linting   | ESLint (typescript-eslint + react-hooks)            |

No router, backend, database, or CMS — this is a fast single-page portfolio.

## Prerequisites

- Node.js 20+ (or any version supported by Vite 8)
- npm 10+

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
npm run lint     # run ESLint
```

## Project structure

```
portfolio/
├── index.html                 # title, meta description, OG tags, fonts, favicon
├── public/
│   └── favicon.svg            # RG monogram favicon
├── src/
│   ├── App.tsx                # assembles all sections (skip link, MotionConfig)
│   ├── main.tsx               # React entry point
│   ├── index.css              # Tailwind + design tokens + shared components
│   ├── components/            # reusable UI (Navbar, Terminal, cards, footer…)
│   │   ├── Navbar.tsx         # fixed nav, scroll state, active-section highlight
│   │   ├── MobileMenu.tsx     # accessible mobile navigation
│   │   ├── Terminal.tsx       # hero typewriter terminal widget
│   │   ├── CapabilityStrip.tsx
│   │   ├── SkillGroup.tsx
│   │   ├── ProjectCard.tsx    # cards + custom CSS/SVG diagrams
│   │   ├── ProjectGrid.tsx    # data-driven grid + honest empty state
│   │   ├── SystemsDiagram.tsx # APPLICATION → OS → HARDWARE → PARALLEL pipeline
│   │   ├── Roadmap.tsx
│   │   ├── ContactLinks.tsx   # only renders configured contact actions
│   │   ├── SectionHeading.tsx
│   │   ├── Reveal.tsx         # section entrance animation wrapper
│   │   ├── BrandIcons.tsx     # GitHub / LinkedIn marks
│   │   └── Footer.tsx
│   ├── sections/              # Hero, About, Skills, Projects,
│   │                          # SystemsFocus, LearningRoadmap, Contact
│   ├── data/                  # ← all editable content lives here
│   │   ├── profile.ts         # name, links, availability, current focus
│   │   ├── skills.ts          # skill categories + honest status levels
│   │   ├── projects.ts        # real projects and labelled concepts
│   │   ├── roadmap.ts         # three learning tracks
│   │   └── focus.ts           # capability strip + systems panels + pipeline
│   ├── hooks/                 # useActiveSection, useCopyToClipboard
│   └── lib/utils.ts           # cn, validation, accessible smooth-scroll
└── vite.config.ts
```

## Personalizing the site

Everything meaningful is driven by typed data files — you should never need to touch component logic.

### 1. Contact details, links, and résumé — `src/data/profile.ts`

```ts
export const profile: Profile = {
  // ...
  email: 'you@example.com',        // → "Email me" + copy-email button
  githubUrl: 'https://github.com/you',   // → GitHub buttons (nav, contact, footer)
  linkedinUrl: 'https://www.linkedin.com/in/you',  // → LinkedIn buttons
  resumeUrl: '',                   // ← add a hosted PDF URL → enables Résumé button
  codingProfiles: [                // → extra profile buttons in Contact
    { label: 'LeetCode', url: 'https://leetcode.com/u/your-handle/' },
    { label: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/...' },
  ],
}
```

Empty strings are **placeholders on purpose**. Components validate every URL/email and hide actions that are not configured, so the site never ships a dead or fake link. The moment you fill a field in, the corresponding button appears — in the hero, contact section, and footer.

Also update here: `availability` text, `siteName` shown in the navbar, and `currentFocus` (the About side panel).

### 2. Replacing concept projects with real work — `src/data/projects.ts`

Each project supports: title, summary, problem, approach, tech tags, status, a diagram style, and optional GitHub/live-demo URLs.

```ts
{
  id: 'my-real-project',
  title: 'My Real Project',
  status: 'completed',        // 'completed' | 'concept'
  githubUrl: 'https://github.com/you/repo',
  liveDemoUrl: 'https://you.example.app',   // or '' to hide the button
  diagram: 'gantt',           // 'gantt' | 'lanes' | 'graph' (card illustration)
  // ...
}
```

- `status: 'completed'` → shown as verified work (sorts first)
- `status: 'concept'` → shown with a "Concept" badge and the note "Planned experiment — a design concept, not a finished project."
- While no completed project exists, the grid displays an honest banner explaining that the cards are concepts.

Delete or replace the three bundled concepts whenever you're ready — they exist only as editable, clearly labelled starting points.

### 3. Skills — `src/data/skills.ts`

Add or edit items with one of four status labels (never percentage bars):

| `level`     | Label shown     |
| ----------- | --------------- |
| `core`      | Core focus      |
| `working`   | Working knowledge |
| `learning`  | Learning        |
| `exploring` | Exploring       |

### 4. Roadmap — `src/data/roadmap.ts` and systems content — `src/data/focus.ts`

The learning tracks and the "how programs run / communicate / parallelism" panels are plain data. Edit titles, items, and statuses freely.

## Deployment

The build is a static site (`dist/`) — deployable anywhere.

**Vercel / Netlify** — import the repo; build command `npm run build`, output directory `dist`. No other configuration needed.

**GitHub Pages** — Pages serves from a sub-path, so set the base path in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/your-repo-name/',   // e.g. '/portfolio/'
  plugins: [react(), tailwindcss()],
})
```

Then publish `dist/` with your preferred workflow (e.g. `peaceiris/actions-gh-pages`, or Pages' GitHub Actions).

## Notes on placeholders

- No internships, employers, repos, benchmarks, certifications, awards, or statistics are invented anywhere.
- GitHub/LinkedIn/email/résumé links render only after real values are configured in `src/data/profile.ts`.
- Project cards labelled **Concept** are planned experiments, not completed work.
- The terminal illustration is static and decorative; it shows no fake live metrics.

## Accessibility & performance

- Semantic landmarks, single `h1`, labelled sections, skip-to-content link
- Keyboard-accessible navigation; visible focus indicators; Escape-closable mobile menu with scroll lock
- `prefers-reduced-motion` honoured globally (CSS + `MotionConfig reducedMotion="user"`)
- Status is always communicated with text, never color alone
- No heavy images or video; CSS/SVG diagrams only; ~128 kB gzipped JS total
