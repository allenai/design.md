# Ai2 Design System

This repository contains the DESIGN.md files for Ai2's design systems. These files define design tokens and rationale for use by coding agents and developer tooling.

## What is DESIGN.md?

DESIGN.md is an open format specification created by Google for describing visual design systems to coding agents. Each file combines:

- **YAML frontmatter** — machine-readable design tokens (colors, typography, spacing, etc.)
- **Markdown prose** — human-readable rationale explaining *why* values exist and *how* to apply them

This repository follows the [DESIGN.md format specification](https://github.com/google-labs-code/design.md) published by Google. We use their open-source CLI tools for validation and export. A local copy of the spec is kept in [`docs/spec.md`](docs/spec.md) for reference.

---

## How to use these files with agents

Each product has a fully resolved `DESIGN.md` file — no inheritance to follow, no build step required. Each file is self-contained and reads as a standalone document; it doesn't reference other systems or internal build details. Copy it into your project and agents will pick it up automatically, or paste the contents directly into your system prompt:

```
asta/DESIGN.md
olmo-earth/DESIGN.md
```

If your project also needs logos or wordmarks, grab the product's `assets/` folder alongside the `DESIGN.md`. Asset paths are declared in the file's `assets:` frontmatter key so agents know what's available:

```yaml
assets:
  logo: assets/logo.svg
  wordmark: assets/wordmark.svg
```

Alternatively, export the tokens to other formats for use in your build pipeline:

```bash
npx @google/design.md export --format <fmt> asta/DESIGN.md
```

| Format | Output | Use case |
|:-------|:-------|:---------|
| `json-tailwind` | JSON | Tailwind v3 `theme.extend` config |
| `css-tailwind` | CSS | Tailwind v4 `@theme { ... }` block |
| `dtcg` | JSON | W3C Design Tokens — interoperable with Figma, Style Dictionary |

---

## Structure

```
strata/             ← Base design system — source of truth
  DESIGN.md
  assets/           ← logos and wordmarks

asta/               ← Asta product system
  DESIGN.src.md     ← product overrides and additions (edit this)
  DESIGN.md         ← generated output (use this with agents)
  assets/           ← product-specific logos and wordmarks

olmo-earth/         ← OlmoEarth product system
  DESIGN.src.md     ← product overrides and additions (edit this)
  DESIGN.md         ← generated output (use this with agents)

scripts/
  compose.ts        ← merges base + overlay → DESIGN.md
```

### Strata (Base)

Strata is the Ai2 foundation layer. It defines the primitive and semantic tokens shared across all products: the full color palette, type scale, spacing system, border radii, and universally-shared components.

### Product Systems (Asta, OlmoEarth)

Each product system defines only what differs from Strata — brand accent overrides, product-specific components, and product-specific rationale. A build step merges the base and overlay into a single `DESIGN.md` that agents and developers consume.


## Editing a product design system

Edit `[product]/DESIGN.src.md` (the overlay), then run the compose script to regenerate `DESIGN.md`:

```bash
bun run compose:asta
bun run compose:olmo-earth
# or rebuild everything:
bun run compose
```

Only define what differs from Strata in the overlay — colors, tokens, or components that are specific to that product. Everything else is inherited automatically from `strata/DESIGN.md`.

## Tooling

Two separate things generate output here, and they're for different jobs.

### The DESIGN.md CLI — validation, diffing, interop

The [DESIGN.md CLI](https://github.com/google-labs-code/design.md), published by Google as `@google/design.md`. No installation required — use `npx`:

```bash
# Validate. Exit 0 if valid, 1 if errors. Output is JSON.
npx @google/design.md lint strata/DESIGN.md

# Review token-level changes between two versions
npx @google/design.md diff strata/DESIGN.md strata/DESIGN-v2.md

# Print the DESIGN.md format spec, e.g. to give an agent the context to read these files
npx @google/design.md spec
```

It also exports to other ecosystems' formats:

```bash
# Tailwind v3 theme config
npx @google/design.md export --format json-tailwind strata/DESIGN.md > strata/tailwind.theme.json

# Tailwind v4 CSS custom properties
npx @google/design.md export --format css-tailwind strata/DESIGN.md > strata/theme.css

# W3C Design Tokens (DTCG) — interoperable with Figma, Style Dictionary, etc.
npx @google/design.md export --format dtcg strata/DESIGN.md > strata/tokens.dtcg.json
```

Use these when the destination is another design-token tool.

### `bun run build` — what gets published

```bash
bun run build     # compose + tokens; run this before committing
```

Two steps. `compose` regenerates the products that overlay Strata (Asta, OlmoEarth) from `strata/DESIGN.md` plus their own `DESIGN.src.md`. `tokens` writes each product's `tokens.json` and `tokens.d.ts`, which are what the npm package ships.

Those files are **not** the DTCG export, and the difference matters:

| | `export --format dtcg` | `bun run build` |
|---|---|---|
| `components` section | omitted | included — all 50 for OlmoEarth |
| `lineHeight` on typography | dropped | kept |
| colours | DTCG objects (`colorSpace`, float channels) | the hex string you wrote |
| sizes | split into `{ value, unit }` | verbatim, `"16px"` |
| group names | renamed (`color`) | as written (`colors`) |
| TypeScript types | none | generated per product |

The DTCG format is a lossy translation into a shared interchange shape — fine for handing tokens to Figma or Style Dictionary, not enough to build a product theme from, since half the component layer and every line-height would be missing. `bun run build` is a faithful mirror of what's in the frontmatter, with `{colors.teal}`-style references resolved so consumers never implement the reference syntax.

Write DTCG output to `tokens.dtcg.json`, not `tokens.json` — the latter is generated and published.

## Using these specs in a product

The specs are published to npm as [`@allenai/design-system`](https://www.npmjs.com/package/@allenai/design-system), so a product depends on a *version* rather than copying files out of this repo.

```bash
npm install @allenai/design-system
```

### What you can import

```js
// The tokens, as plain JSON with every reference already resolved to a literal
import tokens from "@allenai/design-system/olmo-earth/tokens.json";
tokens.colors["dark-teal"];             // "#0a3235"
tokens.components["button-default"];    // { backgroundColor, textColor, typography, … }

// Named TypeScript types for the same tokens
import type { ComponentToken, ColorName } from "@allenai/design-system/olmo-earth/types";

// The spec itself — for docs, or to hand to an agent
const specPath = require.resolve("@allenai/design-system/olmo-earth");

// Brand assets
import logo from "@allenai/design-system/olmo-earth/assets/logo.svg";
```

Swap `olmo-earth` for `strata`, `asta` or `earthranger`. Each product also exposes `<product>/voice` where it has a `VOICE.md`.

### Keeping up to date

A published version is what makes a spec change visible to the products using it:

```bash
npm outdated @allenai/design-system     # is there a newer spec?
npm update @allenai/design-system       # take it
```

Better, let a bot watch for you. Renovate or Dependabot opens a pull request when a new version lands, with the changelog attached, so a designer changing a token turns into a reviewable PR in each product repo without anyone remembering to check.

Version numbers say what to expect: a new **first** number means something was renamed or removed and may break your build, a new **middle** number means tokens were added, and a new **last** number means a fix or a small correction. Pin the exact version if you'd rather adopt changes deliberately:

```json
"@allenai/design-system": "0.1.0"
```

## Contributing

When updating tokens, rebuild and lint before committing:

```bash
bun run build     # recompose the overlay products, regenerate tokens
npm run lint      # validate every product's spec
```

The publish workflow runs both and refuses to publish if either fails, so a generated file that doesn't match its source can't ship.
