# AGENTS.md

## Commands
- `npm run dev` — Astro dev server (default `http://localhost:4321`)
- `npm run build` — production build to `dist/` (only verification step; no test/lint/typecheck scripts exist)
- `npm run preview` — preview built `dist/`
- `npm run astro -- check` — typecheck (uses `astro/tsconfigs/strict`; no dedicated npm script)

No lint, test, or formatter config in repo. Verify changes with `npm run build`.

## Architecture
- **Astro 5 + React 19 + Tailwind 4 (Vite plugin)** — single package, not a monorepo. `astro.config.mjs` wires `integrations: [react()]` and `vite.plugins: [tailwindcss()]`; `devToolbar.enabled: false`.
- **Islands:** `src/layouts/Layout.astro` is the sole layout (imports `src/styles/global.css`, sets up `ClientRouter` view transitions). Every page (`src/pages/*.astro`) renders `src/components/AppWrapper.tsx` with `client:idle` — React tree is hydrated lazily. `AppWrapper` switches on `page` prop to render the correct page component.
- **Routing:** Static pages `index.astro`, `blog.astro`, `projects.astro`, etc. Dynamic routes `src/pages/blog/[slug].astro` and `src/pages/journey/[slug].astro` use `Astro.glob('../content/**/*.md')` at build time — not Astro content collections. Adding content = drop a `.md` in `src/content/blog/` or `src/content/journey/`.
- **Data vs Components:** Static data lives in `src/data/**` (`projectsData.ts`, `home/*`, `pages/*`, `common/*`); UI in `src/components/**` grouped as `common/`, `home/`, `projects/`, `pages/`.
- **Styling:** `src/styles/global.css` is source of truth: `@import "tailwindcss"`, `@plugin "@tailwindcss/typography"`, `@theme` for fonts. `tailwind.config.mjs` only extends `fontFamily`, `colors.supabase`, and animations — Tailwind v4 content scanning is via Vite plugin, not the `content` array. CSS variables in `global.css` (`:root` / `.light-theme`) drive theming.

## Gotchas
- **Theme flash handling is fragile — keep in sync:** `Layout.astro` has two inline scripts: (1) head script that reads `localStorage.theme` and sets `dark-theme`/`light-theme` + `no-transition` before paint, (2) `astro:before-swap`/`astro:after-swap` handlers for `ClientRouter` transitions. `src/context/ThemeContext.tsx` must read the already-applied DOM class on init (not just `localStorage`) to avoid hydration mismatch; `toggleTheme` writes both class and `localStorage`. Changing theme logic requires updating all three places.
- **No generated code / no env loading:** `.astro/` and `dist/` are build artifacts (gitignored). `.env` is gitignored but not used in current code.
- **Fonts:** `Layout.astro` loads Google Fonts (Inter/Geist/Geist Mono) via `preload` + `media="print"` + `onload` trick — don't add extra `preconnect` origins (Lighthouse limit noted in comment).
- **TypeScript:** `tsconfig.json` extends `astro/tsconfigs/strict`, includes `.astro/types.d.ts`, excludes `dist`. Path aliases not configured.
