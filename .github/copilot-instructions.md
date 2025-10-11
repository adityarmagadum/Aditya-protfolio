<!--
Repo: Aditya-protfolio
Purpose: Short, actionable guidance for AI coding agents to be immediately productive in this codebase.
-->

# Copilot / AI agent instructions — Aditya-protfolio

Short, focused rules and examples to edit, refactor, or extend this Vite + React + TypeScript + Tailwind portfolio.

- Project entrypoints

  - UI root: `index.html` (root element: `#root`).
  - React entry: `src/main.tsx` -> renders `App`.
  - Primary layout: `src/App.tsx`. Most pages are composed from `src/components/*`.

- Build & dev workflows (use from repo root)

  - Start dev server: `npm run dev` (Vite). This is the fast feedback loop.
  - Production build: `npm run build` then preview via `npm run preview`.
  - Lint: `npm run lint` (ESLint). Type checking: `npm run typecheck` (tsc with `tsconfig.app.json`).

- Important dependencies & how they shape code

  - Tailwind CSS: styling is utility-first; `src/index.css` contains @tailwind layers. Keep className strings stable — many styles rely on exact utility combos (e.g. `bg-gradient-to-r from-cyan-400 to-purple-500`, `backdrop-blur-xl`).
  - Framer Motion: components use `motion` for entrance/hover animations and viewport triggers (see `Projects.tsx`, `Navigation.tsx`). Prefer adding motion props rather than replacing animations wholesale.
  - lucide-react: icon components (e.g. `Github`, `Menu`, `X`) are imported and used as React components.
  - Supabase is listed in package.json but is not wired into components yet — do not assume an existing API integration; add it explicitly if implementing backend calls.

- Project patterns & conventions (do these exactly)

  - Section anchors: top-level sections use `id` values matching nav links: `#home`, `#about`, `#projects`, `#experience`, `#contact`. Use these ids for any new sections to integrate with smooth scroll and active-section logic.
  - Navigation scroll detection: `src/components/Navigation.tsx` reads element bounding rects to set `activeSection`. If changing section layout, preserve this behavior or update the detection logic.
  - Contact form: currently stubbed with a local timeout in `Contact.tsx` (no network). If you wire a backend, keep the same UX contract: disable submit during request, reset fields and show success state.
  - Canvas background: `ParticleBackground.tsx` uses a full-window `<canvas>` and resizes on window `resize`. When modifying, keep performance in mind (avoid heavy per-frame allocations).
  - Visual gradients & borders are used for emphasis; prefer tailwind utility classes over global CSS changes where possible.

- Editing guidance for AI agents

  - Small, single-responsibility edits are preferred (change one component per PR).
  - Preserve exported component names and default exports to avoid breaking imports.
  - Don't remove global CSS or Tailwind directives in `src/index.css` — they control scroll behavior and custom utilities used across the site.
  - When adding new deps, update `package.json` and avoid bundling duplicates of existing libs (e.g. framer-motion, lucide-react).

- Examples from the codebase to reference

  - Smooth scroll + active section: `src/components/Navigation.tsx` (uses `element.getBoundingClientRect()` to detect which section is active).
  - Progress bar tied to scroll: `src/App.tsx` uses `useScroll()` + `useSpring()` to animate a top progress bar.
  - Contact stub: `src/components/Contact.tsx` uses `setTimeout` to simulate submit; replace with real API call only if you add environment/config for secrets.

- Testing & checks

  - There are no unit tests in the repo. Before shipping changes run: `npm run lint` and `npm run typecheck`.

- When uncertain
  - If you find an unused dependency (e.g. supabase) and want to remove or wire it, mention the change in the PR and run `npm run dev` to verify no runtime errors.
  - If a change touches layout or global CSS, open the dev server and visually verify on desktop and a narrow viewport (mobile menu behavior lives in `Navigation.tsx`).

If anything here is unclear or you'd like more detail about a specific component, tell me which area to expand (animations, styling conventions, or wiring Supabase).
