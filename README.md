# Ai2 Design System

This repository contains the DESIGN.md files for Ai2's design systems. These files define design tokens and rationale for use by coding agents and developer tooling.

## What is DESIGN.md?

DESIGN.md is an open format specification created by Google for describing visual design systems to coding agents. Each file combines:

- **YAML frontmatter** — machine-readable design tokens (colors, typography, spacing, etc.)
- **Markdown prose** — human-readable rationale explaining *why* values exist and *how* to apply them

This repository follows the [DESIGN.md format specification](https://github.com/google-labs-code/design.md) published by Google. We use their open-source CLI tools for validation and export. A local copy of the spec is kept in [`docs/spec.md`](docs/spec.md) for reference.

## Structure

This repo follows an inheritance model that mirrors [atomic design](https://atomicdesign.bradfrost.com/) principles:

```
strata/             ← Base design system — source of truth
  DESIGN.md

asta/               ← Asta product system
  DESIGN.src.md     ← product overrides and additions (edit this)
  DESIGN.md         ← generated output (use this with agents)

olmo-earth/         ← OlmoEarth product system
  DESIGN.src.md     ← product overrides and additions (edit this)
  DESIGN.md         ← generated output (use this with agents)

scripts/
  compose.ts        ← merges base + overlay → DESIGN.md
```

### Strata (Base)

Strata is the Ai2 foundation layer. It defines the primitive and semantic tokens shared across all products: the full color palette, type scale, spacing system, border radii, and universally-shared components.

In atomic design terms: **atoms**, **molecules**, and **universal organisms** live here.

### Product Systems (Asta, OlmoEarth)

Each product system defines only what differs from Strata — brand accent overrides, product-specific components, and product-specific rationale. A build step merges the base and overlay into a single `DESIGN.md` that agents and developers consume.

In atomic design terms: **product-specific molecules**, **organisms**, and **templates** live here.

### Using these files with agents

Point your coding agent at `[product]/DESIGN.md`. This is a fully resolved file — no inheritance, no lookup required. Everything an agent needs is in one place.

### Editing a product design system

Edit `[product]/DESIGN.src.md` (the overlay), then run the compose script to regenerate `DESIGN.md`:

```bash
bun run compose:asta
bun run compose:olmo-earth
# or rebuild everything:
bun run compose
```

Only define what differs from Strata in the overlay — colors, tokens, or components that are specific to that product. Everything else is inherited automatically from `strata/DESIGN.md`.

## Tooling

These files are validated using the [DESIGN.md CLI](https://github.com/google-labs-code/design.md), published by Google as `@google/design.md` on npm. No installation required — use `npx`:

### Validate a file

```bash
npx @google/design.md lint strata/DESIGN.md
```

Exit code `0` if valid, `1` if errors are found. Output is JSON.

### Compare two versions

```bash
npx @google/design.md diff strata/DESIGN.md strata/DESIGN-v2.md
```

Useful for reviewing token-level changes in pull requests.

### Export tokens

```bash
# Tailwind v3 theme config
npx @google/design.md export --format json-tailwind strata/DESIGN.md > strata/tailwind.theme.json

# Tailwind v4 CSS custom properties
npx @google/design.md export --format css-tailwind strata/DESIGN.md > strata/theme.css

# W3C Design Tokens (DTCG) format — interoperable with Figma, Style Dictionary, etc.
npx @google/design.md export --format dtcg strata/DESIGN.md > strata/tokens.json
```

### Inject the spec into an agent prompt

```bash
npx @google/design.md spec
```

Outputs the DESIGN.md format specification — useful for giving an agent the context it needs to correctly interpret these files.

## Contributing

When updating tokens, always run the linter before committing:

```bash
npx @google/design.md lint strata/DESIGN.md
npx @google/design.md lint asta/DESIGN.md
npx @google/design.md lint olmo-earth/DESIGN.md
```
