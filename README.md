# Fold-Space Engine

Original Part I public foundation for the Fold-Space / Zora Discovery app family.
This repository is the constrained public demo surface, not the canonical artifact and not the combined compilation app.

Live site:

- https://cbaird26.github.io/fold-space-engine/

Related public repos:

- Part II artifact/reference: [`fold-space-engine-phase-v`](https://github.com/Cbaird26/fold-space-engine-phase-v)
- Combined web app: [`zora-discovery`](https://github.com/Cbaird26/zora-discovery)
- Mobile shell: [`zora-discovery-mobile`](https://github.com/Cbaird26/zora-discovery-mobile)
- Desktop shell: [`zora-discovery-desktop`](https://github.com/Cbaird26/zora-discovery-desktop)

This repo turns the original single-file prototype into a standalone React app with:

- a default **Probability Sculptor** panel
- a flagship **Fold-Space Engine** companion panel
- companion technology panels for probability sculpting, timeline selection, and related toy dynamics
- a compact, collapsed `Research Preview` inside the Fold-Space Engine tab
- explicit **correctness checks** on the non-visual branch-weight math
- GitHub Actions CI and GitHub Pages deployment

This is still **illustrative software**. It is a mathematically structured interactive lab, not a hardware claim.

## Repo role

Use this repo when you want the original public Part I shell with the smallest surface area.

Do not use this repo as:

- the artifact/reference build
- the combined web compilation surface
- the mobile runtime
- the desktop runtime

## Why this is the main technology surface

The Fold-Space Engine is the cleanest public-facing demonstration that we can:

1. take a speculative mathematical idea,
2. turn it into a coherent interactive application,
3. expose the controlling equations directly in the interface, and
4. verify the internal probability logic with automated tests.

That makes it a stronger public proof-of-capability than a static paper or a loose prototype file.

## Correctness envelope

The app has one part that is treated as mathematically testable and one part that is intentionally presentation-only.

Tested:

- branch probabilities normalize to `1`
- the `η = 0` symmetric limit is uniform
- invalid partition functions are rejected
- positive tilt favors higher-`ΔE` branches
- stronger coherence amplification increases branch concentration

Presentation-only:

- canvas rendering
- particle motion
- visual glow, distortion, and layout effects

The small `Research Preview` uses additional internal helper modules for fold score, constraint, and visibility estimates. It is still demo-facing and does not replace the separate Phase V research scaffold.

Run the checks with:

```bash
npm install
npm test
```

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually `http://127.0.0.1:5173`.

## Production build

```bash
npm run build
```

The app builds to `dist/`.

## GitHub hosting

This repository is set up for:

- GitHub Actions CI on push and pull request
- GitHub Pages deployment from the built `dist/` bundle

Expected public URL after Pages deploy:

`https://cbaird26.github.io/fold-space-engine/`

## Source lineage

- Original prototype: [`prototype/FOLD-SPACE ENGINE.jsx`](./prototype/FOLD-SPACE%20ENGINE.jsx)
- Extracted testable math: [`src/math.js`](./src/math.js)
