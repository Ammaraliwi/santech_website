# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Santech Trading Co. Website (`artifacts/santech-website`)
- **Type**: react-vite, static frontend only (no backend)
- **Preview path**: `/`
- **Description**: Professional corporate website for Santech Trading Co. (STC), a premium HoReCa equipment distributor in Damascus, Syria.
- **Sections** (in order): Hero → TrustBar (animated counters) → About → WhyUs → Industries → Services → Process → Projects → Testimonials → RootedInSyria → Leadership → Partners (18 brands) → Certifications → CatalogCTA → Contact (with embedded Google Map)
- **Theme**: Deep Santech blue primary `hsl(207 55% 30%)` (from logo) + orange accent `hsl(21 85% 55%)` (from logo slogan/triangle), Playfair Display serif + Inter sans
- **Branding**: Real company logo at `public/brand/santech-logo.png` used in Navbar, Footer, and favicon
- **i18n**: Bilingual EN/AR with full RTL support, persistent language preference, Cairo/Amiri Arabic fonts
- **Floating actions**: WhatsApp + Get-a-Quote FAB (`src/components/FloatingActions.tsx`), appears after 400px scroll, RTL-aware (left side in AR mode)
- **Key files**:
  - `src/pages/home.tsx` — main single-page layout
  - `src/components/sections/` — 14 section components
  - `src/components/layout/` — Navbar, Footer
  - `src/components/FloatingActions.tsx` — floating WhatsApp/Quote buttons
  - `src/lib/i18n.tsx` — translation context (EN + AR dictionaries)
  - `src/index.css` — design tokens and theme
