# Agent Standards

## Purpose
This file defines standards for future project updates so implementation stays consistent, fast, and maintainable.

## Core Principles
- Separation of concerns first.
- Minimize duplication.
- Optimize for fast initial load and smooth navigation.
- Prefer clear structure over clever shortcuts.

## Directory Standards
- `src/components`: reusable presentational components.
- `src/sections`: route section compositions.
- `src/pages`: dynamic route pages and route-level page templates.
- `src/routes`: router definitions only.
- `src/data`: static content and configuration objects.
- `src/lib`: reusable business logic and pure utility functions.
- `src/assets`: images/icons/media grouped by feature.
- `src/styles/mobile.css`: global and cross-component mobile-only behavior.
- `src/styles/desktop.css`: global and cross-component desktop-only behavior.

## Coding Standards
- Keep components single-purpose.
- Extract repeated arrays/config into `src/data`.
- Extract repeated transformation logic into `src/lib`.
- Remove unused imports, variables, and commented-out dead code when touching files.
- Keep public APIs stable unless change is required by task.

## Performance Standards
- Use `React.lazy` + `Suspense` for route-level chunks.
- Avoid large eager imports in top-level route files.
- Use `loading="lazy"` and `decoding="async"` for image-heavy views when safe.
- Keep rerenders predictable by moving static constants outside components.
- Keep image optimization enabled via `npm run optimize:images` (auto-run in `prebuild`).

## Styling Standards
- Use Tailwind classes and existing style conventions (`glass`, `text-glow`).
- Keep base CSS in `src/index.css`, and split responsive global rules into mobile/desktop stylesheets.
- Avoid duplicated style definitions across sections.

## Image UX Standards
- Image clicks should open in-page modal, not new tabs.
- Shared modal logic must stay in `src/components/ImageLightbox.jsx`.
- Modal close interactions: outside click + `Escape`.
- Modal navigation: left/right arrows + touch swipe for image sets.

## Mobile Support Standards
- Build mobile-first by default.
- Any cross-page responsive fixes should be placed in `src/styles/mobile.css` and `src/styles/desktop.css`.
- Avoid fixed-width grids that can overflow narrow devices; use patterns like `minmax(min(320px,100%),1fr)`.
- Use `md` as the first multi-column breakpoint for page shells unless a section explicitly requires earlier splitting.
- Ensure form controls and buttons on mobile use comfortable tap targets (minimum visual height around 40–44px).
- Prevent top-nav brand/title overflow by using truncation or wrapping-safe constraints.

## Review Checklist (Before Merge)
- No dead code or unused imports.
- No duplicated data/config where shared usage exists.
- Business logic extracted from page JSX when reusable.
- Routes and navigation still valid.
- `npm run build` succeeds.
- `npm run lint` succeeds.
- Visual regressions checked on key pages: Home, Tools, Projects, Gallery.
- Mobile interaction checks: modal close, arrow navigation, swipe navigation.
