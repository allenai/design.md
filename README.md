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
