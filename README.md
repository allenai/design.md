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

### `bun run build` — what ships in the package

```bash
bun run build     # compose + tokens; run this before committing
```

Two steps. `compose` regenerates the products that overlay Strata (Asta, OlmoEarth) from `strata/DESIGN.md` plus their own `DESIGN.src.md`. `tokens` writes each product's `tokens.json`, which is what a product theme reads. Both are committed, and both ship in the package.

You don't have to run this by hand: the Release workflow rebuilds and commits before it tags, so editing a spec in the browser is enough.

`tokens.json` is deliberately not the CLI's DTCG export, and the difference is what makes it usable in code:

| | `export --format dtcg` | `tokens.json` |
|---|---|---|
| `components` section | omitted | included — all 50 for OlmoEarth |
| `lineHeight` on typography | dropped | kept |
| colours | DTCG objects (`colorSpace`, float channels) | the hex string you wrote |
| sizes | split into `{ value, unit }` | verbatim, `"16px"` |
| group names | renamed (`color`) | as written (`colors`) |

The DTCG format is a lossy translation into a shared interchange shape — good for handing tokens to Figma or Style Dictionary, not enough to build a product theme from, since half the component layer and every line-height would be missing. If you ever need it, the CLI command above writes it on demand; nothing in this repo generates it, because nothing consumes it yet.


## Using these specs in a product

A product installs this repo as a package, so it depends on a *version* rather than copying files out of GitHub.

```bash
npm install "github:allenai/design.md#semver:^0.1.0"
```

The `#semver:` range resolves against this repo's release tags, and your lockfile
records the exact commit, so builds are reproducible. Pin harder if you'd rather:
`#v0.1.0` for one release, or a commit SHA for absolute certainty.

### What you can import

```js
// The tokens, as plain JSON with every reference already resolved to a literal
import tokens from "@allenai/design-system/olmo-earth/tokens.json";
tokens.colors["dark-teal"];             // "#0a3235"
tokens.components["button-default"];    // { backgroundColor, textColor, typography, … }

// The spec itself — for docs, or to hand to an agent
const specPath = require.resolve("@allenai/design-system/olmo-earth");

// Brand assets
import logo from "@allenai/design-system/olmo-earth/assets/logo.svg";
```

TypeScript needs no extra types here: with `resolveJsonModule`, it infers exact keys and per-component shapes from the JSON, so `tokens.colors["dark-teel"]` is a compile error.

Swap `olmo-earth` for `strata`, `asta` or `earthranger`. Each product also exposes `<product>/voice` where it has a `VOICE.md`.

### Keeping up to date

A tagged version is what makes a spec change visible to the products using it. Renovate and Dependabot both understand git dependencies, so a new tag opens a pull request in each product repo — a designer changing a token becomes something a product team reviews, rather than something they have to remember to check for.

Version numbers say what to expect: a new **first** number means something was renamed or removed and may break your build, a new **middle** number means tokens were added, and a new **last** number means a fix or a small correction.

## Contributing

When updating tokens, rebuild and lint before committing:

```bash
bun run build     # recompose the overlay products, regenerate tokens
npm run lint      # validate every product's spec
```

Or skip it: the Release workflow rebuilds and commits the generated files itself, so editing a spec through GitHub's web editor is enough. It lints too, and won't cut a release if a spec fails.
