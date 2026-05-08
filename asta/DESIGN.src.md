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

  # In dark mode the inverse surface is cream, so subtle/extra-subtle flip
  # to translucent cream overlays. `on-subtle` is inherited as a ref to
  # text-reversed (resolves to dark-teal in Asta) — no override needed.
  subtle: "{colors.cream-50}"
  extra-subtle: "{colors.cream-10}"

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

  # ── Button overrides ───────────────────────────────────────────────
  # Strata's `interactive-default` is teal (#105257). On Strata's cream
  # surface that's high-contrast; on Asta's extra-dark-teal surface it
  # falls below 1.5:1. Outlined-default uses teal-40 in Asta so it reads
  # against the dark page.
  button-default-outlined:
    backgroundColor: transparent
    textColor: "{colors.teal-40}"
    borderColor: "{colors.teal-40}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  button-default-outlined-hover:
    backgroundColor: "{colors.teal-80}"
    textColor: "{colors.cream}"
    borderColor: "{colors.teal-40}"

  # In dark mode, the "reversed" surface is cream — the inverse of the
  # default extra-dark-teal page. Strata's reversed buttons use cream
  # text/borders, which becomes cream-on-cream in Asta. Reversed buttons
  # in Asta need dark text/borders to read on the light inverse surface.
  button-reversed:
    backgroundColor: "{colors.extra-dark-teal}"
    textColor: "{colors.cream}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  button-reversed-hover:
    backgroundColor: "{colors.dark-teal}"
    textColor: "{colors.cream}"
  button-reversed-outlined:
    backgroundColor: transparent
    textColor: "{colors.extra-dark-teal}"
    borderColor: "{colors.extra-dark-teal}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  button-reversed-outlined-hover:
    backgroundColor: "{colors.extra-dark-teal}"
    textColor: "{colors.cream}"
    borderColor: "{colors.extra-dark-teal}"
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

**Outlined and reversed variants are re-toned for dark mode.** The `button-default-outlined` uses `teal-40` (rather than the default `teal`) for text and border so it reads against the dark page surface. The `button-reversed` family flips: in Strata "reversed" means a light element on the dark inverse surface, but in Asta the inverse surface is *cream*, so reversed buttons render dark-on-cream (`extra-dark-teal` text/borders) instead.

### Typography

Follows Strata's scale exactly. `body-md` (16px) is the default reading size for research output and document content. Use generous line heights — Asta surfaces long-form academic text and whitespace aids comprehension.

## Do's and Don'ts

- **Do** use dark mode surface colors consistently — never mix light and dark surfaces within a single view.
- **Do** use `green` for all interactive highlights and primary actions.
- **Don't** use `pink` anywhere in Asta — it's a Strata primitive not surfaced in this product.
- **Don't** use `button-size-lg` — it breaks the compact layout rhythm.
- **Don't** use high-saturation colors for decorative purposes — keep the palette restrained to let content breathe.
