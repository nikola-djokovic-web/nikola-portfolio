# Nikola Portfolio — Development Log

## 1) Project Goal

Build a modern, clean, single-page portfolio that presents:

- who Nikola is,
- selected professional work,
- core technical skills,
- and clear contact options.

The target experience is smooth scrolling, polished motion, and strong readability across desktop/mobile.

---

## 2) Stack and Rationale

### Vite + React

- Fast development loop and reliable production build.
- Simple structure for a portfolio-sized app.

### Tailwind CSS v4 (`@tailwindcss/vite`)

- Utility-based styling for rapid iteration.
- Consistent spacing, typography, and color tokens.

### Framer Motion

- Declarative animation for section/card reveal and hover states.
- Keeps interactions smooth without custom animation boilerplate.

### Lucide React

- Lightweight icon set for contact and language controls.

---

## 3) Implementation Timeline

### Phase A — Base Portfolio Layout

- Hero with name, role, intro, and social links.
- Project cards loaded from `src/data/experience.js`.

### Phase B — Styling Fix (Critical)

Issue:

- Tailwind classes were present in JSX, but styles were not visible.

Root cause:

- `src/index.css` still had default Vite starter CSS and no Tailwind import.

Fix:

- Added `@import "tailwindcss";` in `src/index.css`.
- Removed conflicting starter defaults.

Outcome:

- Tailwind styles rendered correctly.

### Phase C — Content and Code Cleanup

- Removed accidental citation fragments from UI text.
- Cleaned unused imports.

### Phase D — Scroll-First Single-Page Structure

The portfolio was reshaped into one continuous page (no tab/card navigation between sections):

- About
- Experience
- Skills
- Contact

### Phase E — Visual Refresh: Dark + Neon (Moderate)

- Dark gradient background using slate palette.
- Subtle cyan/indigo neon accents.
- Strong contrast typography and cleaner card surfaces.

### Phase F — Animation Enhancements

- Section reveal animations on scroll (`whileInView`).
- Project cards: stronger entrance animation + hover lift/scale.
- Skill chips: staggered reveal.
- Stats cards: animated entry.

### Phase G — Localization (EN/SR)

- Added in-app localization object in `src/App.jsx`.
- Default language set to English.
- Added language toggle with icon + flag.
- Toggle moved into hero section for better visibility.

### Phase H — Final Content/UI Tweaks

- Role text standardized to **Frontend Developer** in both languages.
- About section paragraphs expanded to full section width (`w-full`).
- Justified body text in card content for cleaner formatting.
- Removed top navbar per UX request.

---

## 4) Current Architecture (Code-Level)

### `src/App.jsx`

- Centralized localized content object (`en`, `sr`).
- Language state management via `useState`.
- Localized project text mapping via `useMemo`.
- Section components:
  - `AboutSection`
  - `ExperienceSection`
  - `SkillsSection`
  - `ContactSection`
- UI helper components:
  - `ProjectCard`
  - `SkillGroup`
  - `StatCard`

### `src/index.css`

- Tailwind import enabled.
- Minimal global reset + font smoothing retained.

### `src/data/experience.js`

- Source of truth for project metadata (`id`, `title`, `company`, `tags`, fallback text).
- UI overlays localized `description/details` by matching `id`.

---

## 5) UX Decisions

- **Single-page scroll** over tab-like navigation to feel more natural and portfolio-like.
- **Moderate neon accents** to look modern but still professional.
- **Motion restraint**: animations are noticeable but not distracting.
- **Localized content** to support both English and Serbian audiences quickly.
- **Text justification** in card-style content to improve visual rhythm.

---

## 6) Validation

Verified with production build:

```bash
npm run build
```

Build completes successfully and outputs optimized assets.

---

## 7) Current Status

The portfolio now includes:

- modern dark-theme single-page layout,
- multi-section content with smooth scroll flow,
- enhanced reveal/hover animations,
- EN/SR localization with hero language toggle,
- justified card text and full-width About narrative,
- clean, maintainable React component structure.

---

## 8) Suggested Next Improvements

- Replace placeholder social URLs with final profile links.
- Add downloadable CV CTA in contact section.
- Add subtle active-section indicator while scrolling.
- Add real project links behind `ExternalLink` icons.
