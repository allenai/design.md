---
name: Asta
description: Asta product design system — AI research assistant, dark mode, extends Strata
version: 0.0.1

colors:
  # ── Semantic overrides ─────────────────────────────────────────────
  # Asta runs in dark mode. The background/text relationship is inverted
  # from Strata's light mode defaults.
  background: "{colors.extra-dark-teal}"
  background-reversed: "{colors.cream}"
  text: "{colors.cream}"
  text-reversed: "{colors.dark-teal}"

  # Green is the primary accent in Asta. Pink is not used.
  interactive-primary: "{colors.green}"
  interactive-primary-hover: "{colors.green-60}"
  link: "{colors.green}"
  link-reversed: "{colors.pink}"

components:
  # ── Input overrides ────────────────────────────────────────────────
  # Inputs use a dark surface in Asta rather than white. Text stays cream.
  input-default:
    backgroundColor: "{colors.dark-teal}"
    textColor: "{colors.cream}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  input-disabled:
    backgroundColor: "{colors.extra-dark-teal}"
    textColor: "{colors.gray-40}"
    rounded: "{rounded.3xs}"
---

## Overview

Asta is Ai2's AI-powered research assistant. The interface is dark by default, and optimized information-dense research workflows. The palette inverts Strata's light mode: `extra-dark-teal` becomes the page surface and `cream` becomes the primary text color.

Green replaces pink as the primary brand accent. It reads clearly against the dark background. Pink is not used in Asta.

The design language is measured and precise — generous line heights for long-form reading, compact interactive elements that don't interrupt the reading flow, and restrained use of color to keep attention on the content.

## Colors

All semantic aliases from Strata apply, with the following overrides:

- **Background:** `extra-dark-teal` (#032629) — the primary page surface.
- **Text:** `cream` (#faf2e9) — all body copy, headings, and labels.
- **Interactive-primary:** `green` (#0fcb8c) — used for links, active states, and key interactive highlights. Reads clearly against the dark background.
- **Interactive-default:** `teal` (#105257) — unchanged from Strata, used for form controls and secondary interactive elements.
- **Pink is not used** in Asta. No buttons, links, or accents should use the pink palette.

For surfaces and containers, use the `extra-dark-teal` opacity scale to layer depth without introducing new colors: `extra-dark-teal` at 4% for subtle panel differentiation, 20% for borders and dividers.

## Components

### Buttons

Asta uses small (`sm`, 32px) and medium (`md`, 36px) buttons only. Large buttons (`lg`, 48px) are not used — they interrupt the compact, information-dense layout. Default to `sm` for all actions within panels, toolbars, and inline controls.

The `button-default` (teal) is the default interactive button in Asta. The `button-primary` (now green via `interactive-primary`) is reserved for the single most prominent call to action per view.

### Typography

Follows Strata's scale exactly. `body-md` (16px) is the default reading size for research output and document content. Use generous line heights — Asta surfaces long-form academic text and whitespace aids comprehension.

## Do's and Don'ts

- **Do** use dark mode surface colors consistently — never mix light and dark surfaces within a single view.
- **Do** use `green` for all interactive highlights and primary actions.
- **Don't** use `pink` anywhere in Asta — it's a Strata primitive not surfaced in this product.
- **Don't** use `button-size-lg` — it breaks the compact layout rhythm.
- **Don't** use high-saturation colors for decorative purposes — keep the palette restrained to let content breathe.
