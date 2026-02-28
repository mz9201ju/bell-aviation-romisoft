# Copilot Instructions

## Project Objectives
- Keep the app fast, maintainable, and visually consistent.
- Enforce separation of concerns across UI, data, and business logic.
- Prefer small, focused files and reusable primitives over duplication.

## Architecture Rules
- UI components go in `src/components` and `src/sections`.
- Route pages go in `src/pages` and only compose existing components.
- Route wiring stays in `src/routes`.
- Static content/data arrays stay in `src/data`.
- Pure helpers and business logic stay in `src/lib`.
- Assets stay in `src/assets` grouped by feature.
- Base global styles stay in `src/index.css`.
- Mobile-specific styles must live in `src/styles/mobile.css`.
- Desktop-specific styles must live in `src/styles/desktop.css`.

## Separation of Concerns
- Components should focus on rendering and user interaction.
- Business logic must not be embedded directly inside large JSX blocks.
- Shared transforms/utilities must be extracted to `src/lib`.
- Repeated constants/class strings should be centralized when reused.

## Performance Standards
- Use route-level lazy loading for non-critical pages.
- Load images with `loading="lazy"` where appropriate.
- Avoid eager-loading large asset sets unless necessary.
- Keep render functions deterministic and avoid recreating large constants each render.
- Prefer memoized derived values when transforming large collections.

## Code Quality Standards
- Remove dead code and unused imports in every change.
- Keep naming explicit (`AlbumGalleryPage`, `groupAssetModules`, etc.).
- Avoid one-letter variable names except for narrow map callbacks.
- Keep files under reasonable size; extract helper components/functions early.
- Do not introduce unrelated refactors in task-specific PRs.

## Styling Standards
- Use Tailwind utility classes and existing design tokens.
- Do not hard-code new theme systems or arbitrary visual patterns.
- Reuse shared class patterns via local constants where repeated.
- Keep accessibility attributes in interactive elements (`aria-*`, labels, button types).
- Keep responsive behavior explicit: mobile defaults first, desktop enhancements in desktop stylesheet.

## Image Interaction Standards
- Do not open gallery/news/aircraft/about/project images in a new tab.
- Use in-page modal preview via `src/components/ImageLightbox.jsx`.
- Modal must close on outside click and `Escape`.
- Modal should support keyboard arrows and touch swipe for previous/next where image sets have multiple items.

## Mobile/Desktop CSS Separation
- Import order in `src/main.jsx` must remain:
	- `src/index.css`
	- `src/styles/mobile.css`
	- `src/styles/desktop.css`
- Add lightbox or cross-page responsive tweaks to the split stylesheets, not inside random components.
- Keep utility classes in JSX for component-local intent; keep global responsive tuning in the dedicated CSS files.

## Recent Project Updates
- Route-level lazy loading and chunked route pages added in `src/routes/AppRoutes.jsx`.
- Shared data moved to `src/data/*` and reusable transforms to `src/lib/*`.
- Repeated gallery page logic consolidated in `src/components/AlbumGalleryPage.jsx`.
- Dead code and unused styles removed; Vite template leftovers cleaned.
- Automated image optimization pipeline added (`npm run optimize:images`, `prebuild`) via `src/scripts/optimize-images.mjs`.
- In-page image modal preview added across News, About, Aircraft, Tools, and album pages.
- Keyboard and swipe image navigation added in the shared lightbox.
- Final mobile QA pass completed:
	- `PageShell` switches to multi-column at `md` (not `sm`) to avoid cramped tablet-phone layouts.
	- Home card now spans full content width and logo sizing uses valid responsive tokens.
	- Contact form spans full grid width and uses touch-friendly control heights.
	- Service cards use mobile-first spacing and heading scale for narrow screens.
	- Navbar brand text is truncation-safe to prevent overflow on small viewports.

## Routing & Navigation
- New routes must be registered only in `src/routes/AppRoutes.jsx`.
- Navigation links must come from a centralized source in `src/data`.
- Fallback route should always resolve to a safe page.

## Documentation & Maintenance
- Update `README.md` when setup/build behavior changes.
- Keep `Agent.md` and this file aligned with actual project structure.
- Add brief rationale in PR descriptions for any structural changes.
