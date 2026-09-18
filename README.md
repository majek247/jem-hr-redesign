# Jem — Premium Redesign (Portfolio Concept)

A speculative rebrand/redesign of jemhr.com, built as a portfolio piece. Vite + React + TypeScript + Tailwind, structured as a small multi-page site (Home, Product, Solutions, Customers, About, Careers, Contact).

## Run it

```bash
npm install
npm run dev
```

## Notes on assets

This project ships with **no third-party imagery or logos** — on purpose:

- The hero uses an original chat-mockup component (`ChatMock` in `src/pages/Home.tsx`) instead of a photo, so there's nothing to license.
- The "trusted by" strip (`LogoMarquee`) renders real client **names** as text, not their actual logo files — swap in licensed logo assets (SVG/PNG) if you have permission to use them.
- The wordmark is a simple text/shape lockup, not a copy of Jem's actual logo file.

Drop real photography, the actual logo files, and licensed client marks into `src/assets/` and wire them in wherever you want more visual richness.

## Structure

```
src/
  components/   Navbar, Footer, Button, Section, LogoMarquee
  pages/        Home, Product, Solutions, Customers, About, Contact, Careers
  lib/data.ts   Shared content (nav, stats, testimonials, case study)
```

## Design tokens

- `coral` — primary accent (#F1435C)
- `ink` — near-black text/nav (#1B1726)
- `paper` — warm off-white background (#FBF6F2)
- `palm` — secondary green accent (#177A4F)
- Type: Fraunces (display/italic) + Plus Jakarta Sans (body/UI)
