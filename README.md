# Celeste Yoga

Marketing site for [celesteyoga.co.uk](https://celesteyoga.co.uk), built with [Astro](https://astro.build) and Tailwind CSS.

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Deploy

Pushes to `main` build and deploy via GitHub Actions to GitHub Pages at [celesteyoga.co.uk](https://celesteyoga.co.uk). In the repo settings, set **Pages → Source** to **GitHub Actions**.

Pushes to `rebrand` do not touch the live site. The noindex preview is published from [Dizzlacus/celeste-yoga-preview](https://github.com/Dizzlacus/celeste-yoga-preview) to [dizzlacus.github.io/celeste-yoga-preview](https://dizzlacus.github.io/celeste-yoga-preview/). After pushing `rebrand`, run **Actions → Deploy preview** in that repo (or `gh workflow run "Deploy preview" --repo Dizzlacus/celeste-yoga-preview`).
