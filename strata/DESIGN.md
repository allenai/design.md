---
name: Strata
description: Ai2 base design system — shared foundation for all Ai2 product interfaces
version: alpha

colors:
  # ── Primitive palette ─────────────────────────────────────────────
  # Full-opacity base colors. Opacity variants are derived from these
  # in component and semantic contexts.
  extra-dark-teal: "#032629"
  dark-teal: "#0a3235"
  cream: "#faf2e9"
  teal: "#105257"
  teal-20: "#cbd2cc"
  teal-40: "#9cb2af"
  teal-60: "#6e9291"
  teal-80: "#3f7274"
  pink: "#f0529c"
  pink-20: "#f8d2da"
  pink-40: "#f6b2ca"
  pink-60: "#f492bb"
  pink-80: "#f272ab"
  green: "#0fcb8c"
  green-20: "#cbead6"
  green-40: "#9ce2c4"
  green-60: "#6ddbb1"
  green-80: "#3ed39f"
  gray: "#343434"
  gray-20: "#d6d6d6"
  gray-40: "#aeaeae"
  gray-60: "#858585"
  gray-80: "#5d5d5d"
  white: "#ffffff"
  info-blue: "#2a88ef"
  error-red: "#fd4645"
  error-red-dark: "#d02f2e"
  success-green: "#549c35"
  warning-orange: "#ffa31c"

  # ── Semantic aliases (light mode) ─────────────────────────────────
  # Maps intent to primitive. Product systems may remap these.
  background: "{colors.cream}"
  background-reversed: "{colors.extra-dark-teal}"
  text: "{colors.dark-teal}"
  text-reversed: "{colors.cream}"
  text-disabled: "{colors.gray}"
  text-error: "{colors.error-red}"
  primary: "{colors.pink}"
  primary-hover: "{colors.pink-60}"
  secondary: "{colors.green}"
  secondary-hover: "{colors.green-60}"
  interactive: "{colors.teal}"
  interactive-hover: "{colors.teal-80}"
  link: "{colors.primary}"
  link-reversed: "{colors.secondary}"

typography:
  display:
    fontFamily: PP Telegraf, Manrope, Arial, sans-serif
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
  heading-xl:
    fontFamily: PP Telegraf, Manrope, Arial, sans-serif
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.2
  heading-lg:
    fontFamily: PP Telegraf, Manrope, Arial, sans-serif
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.2
  heading-md:
    fontFamily: PP Telegraf, Manrope, Arial, sans-serif
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
  heading-sm:
    fontFamily: PP Telegraf, Manrope, Arial, sans-serif
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: Manrope, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Manrope, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Manrope, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  body-xs:
    fontFamily: Manrope, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: Roboto Mono, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6

spacing:
  2xs: 8px
  xs: 12px
  sm: 14px
  md: 16px
  lg: 18px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 36px
  5xl: 40px
  6xl: 48px

rounded:
  3xs: 4px
  2xs: 8px
  xs: 12px
  sm: 14px
  md: 16px
  lg: 18px
  xl: 20px
  2xl: 24px
  3xl: 32px

components:
  # ── Buttons ───────────────────────────────────────────────────────
  # Filled variants
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.extra-dark-teal}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.extra-dark-teal}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.extra-dark-teal}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
    textColor: "{colors.extra-dark-teal}"
  button-default:
    backgroundColor: "{colors.interactive}"
    textColor: "{colors.cream}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  button-default-hover:
    backgroundColor: "{colors.interactive-hover}"
    textColor: "{colors.cream}"
  button-reversed:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.extra-dark-teal}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  button-reversed-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.extra-dark-teal}"
  # Outlined variants
  button-primary-outlined:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  button-primary-outlined-hover:
    backgroundColor: "{colors.pink-20}"
    textColor: "{colors.extra-dark-teal}"
    borderColor: "{colors.primary}"
  button-secondary-outlined:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    borderColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  button-secondary-outlined-hover:
    backgroundColor: "{colors.green-20}"
    textColor: "{colors.extra-dark-teal}"
    borderColor: "{colors.secondary}"
  button-default-outlined:
    backgroundColor: transparent
    textColor: "{colors.interactive}"
    borderColor: "{colors.interactive}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  button-default-outlined-hover:
    backgroundColor: "{colors.teal-20}"
    textColor: "{colors.interactive}"
    borderColor: "{colors.interactive}"
  button-reversed-outlined:
    backgroundColor: transparent
    textColor: "{colors.cream}"
    borderColor: "{colors.cream}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  button-reversed-outlined-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.extra-dark-teal}"
    borderColor: "{colors.white}"
  # Disabled state
  button-disabled:
    backgroundColor: "{colors.gray-80}"
    textColor: "{colors.cream}"
    rounded: "{rounded.3xs}"
  # Sizes
  button-size-sm:
    height: 32px
    padding: "{spacing.2xs}"
    typography: "{typography.body-sm}"
  button-size-md:
    height: 36px
    padding: "{spacing.xs}"
    typography: "{typography.body-sm}"
  button-size-lg:
    height: 48px
    padding: "{spacing.md}"
    typography: "{typography.body-sm}"

  # ── Inputs ────────────────────────────────────────────────────────
  input-default:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  input-error:
    backgroundColor: "{colors.white}"
    textColor: "{colors.error-red-dark}"
    rounded: "{rounded.3xs}"
  input-disabled:
    backgroundColor: "{colors.gray-20}"
    textColor: "{colors.text}"
    rounded: "{rounded.3xs}"
  input-size-sm:
    height: 32px
    padding: "{spacing.2xs}"
    typography: "{typography.body-sm}"
  input-size-md:
    height: 36px
    padding: "{spacing.xs}"
    typography: "{typography.body-md}"
  input-size-lg:
    height: 48px
    padding: "{spacing.md}"
    typography: "{typography.body-md}"

  # ── Form controls ─────────────────────────────────────────────────
  checkbox-default:
    backgroundColor: "{colors.white}"
    borderColor: "{colors.teal-80}"
    width: 18px
    height: 18px
    rounded: 2px
  checkbox-checked:
    backgroundColor: "{colors.interactive}"
    textColor: "{colors.cream}"
  radio-default:
    backgroundColor: "{colors.white}"
    borderColor: "{colors.teal-80}"
    width: 18px
    height: 18px
  radio-checked:
    backgroundColor: "{colors.interactive}"
    textColor: "{colors.cream}"
  switch-default:
    backgroundColor: "{colors.white}"
    borderColor: "{colors.teal-80}"
    width: 34px
    height: 18px
  switch-checked:
    backgroundColor: "{colors.interactive}"
    textColor: "{colors.cream}"
  slider-track:
    backgroundColor: "{colors.teal-20}"
    height: 8px
  slider-track-filled:
    backgroundColor: "{colors.interactive}"

  # ── Chips ─────────────────────────────────────────────────────────
  chip-default:
    backgroundColor: "{colors.interactive}"
    textColor: "{colors.cream}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.3xs}"
    padding: "{spacing.xs}"
  chip-default-outlined:
    backgroundColor: transparent
    textColor: "{colors.interactive}"
    borderColor: "{colors.interactive}"
    rounded: "{rounded.3xs}"
  chip-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.extra-dark-teal}"
    rounded: "{rounded.3xs}"
  chip-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.extra-dark-teal}"
    rounded: "{rounded.3xs}"
  chip-size-sm:
    height: 32px
    padding: "{spacing.2xs}"
    typography: "{typography.body-sm}"
  chip-size-md:
    height: 36px
    padding: "{spacing.xs}"
    typography: "{typography.body-sm}"
  chip-size-lg:
    height: 48px
    padding: "{spacing.md}"
    typography: "{typography.body-md}"

  # ── Avatars ───────────────────────────────────────────────────────
  avatar-default:
    backgroundColor: "{colors.extra-dark-teal}"
    textColor: "{colors.cream}"
    rounded: "{rounded.3xs}"
  avatar-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.extra-dark-teal}"
    rounded: "{rounded.3xs}"
  avatar-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.extra-dark-teal}"
    rounded: "{rounded.3xs}"
  avatar-size-xs:
    width: 24px
    height: 24px
    typography: "{typography.body-xs}"
  avatar-size-sm:
    width: 32px
    height: 32px
    typography: "{typography.body-sm}"
  avatar-size-md:
    width: 36px
    height: 36px
    typography: "{typography.body-md}"
---

## Overview

Strata is the Ai2 foundation design system. It provides the shared visual language — color, typography, spacing, shape, and core components — used across all Ai2 product interfaces.

The design language balances scientific rigor with warmth and approachability. The palette is anchored in deep teal and warm cream, with pink as the primary brand accent. The result is an interface aesthetic that feels credible, focused, and human — appropriate for research tools used by experts and general audiences alike.

All product systems (Asta, OlmoEarth, etc.) extend Strata. Tokens defined in a product system override their Strata counterparts; everything else falls through to this base.

## Colors

The palette is organized in two layers: primitives and semantic aliases.

**Primitive colors** are the raw values — named by their visual character, not their role. They should rarely be used directly in product UI; prefer semantic aliases instead.

**Semantic aliases** map intent to primitive. They answer "what color should I use for a primary action?" rather than requiring the designer or agent to know that the answer is `pink`.

- **Background / background-reversed:** The default page surface is `cream` — warm, off-white, easy on the eye. The reversed (dark mode) surface is `extra-dark-teal`, a near-black that anchors the deep end of the palette.
- **Text / text-reversed:** Default body text is `dark-teal` for high contrast on cream. On dark backgrounds, text flips to `cream`.
- **Primary (`pink`):** The main brand accent and CTA color. Used for primary buttons, links, and key interactive highlights. Use with restraint — its intensity should signal importance.
- **Secondary (`green`):** Supporting interactive color. Used for secondary actions, success states in interactive contexts, and as a visual counterpoint to pink.
- **Interactive (`teal`):** Default interactive state for non-CTA elements — checkboxes, sliders, toggles, focused inputs. Distinct from primary pink to avoid visual competition.
- **Semantic status:** `info-blue`, `error-red`, `success-green`, and `warning-orange` are reserved for system feedback. Never use them for decorative purposes.

## Typography

Strata uses three typeface roles: **PP Telegraf** (with Manrope as fallback) for headings, **Manrope** for body copy, and **Roboto Mono** for code and technical output. PP Telegraf is a licensed display typeface; Manrope is the open-source fallback and is used directly for body text at all sizes.

The type scale runs from `body-xs` (12px) through `display` (48px) with consistent line height ratios. Heading weights default to bold (700) or semibold (600). Body weights default to regular (400).

- Use `display` and `heading-xl` only for hero moments — page titles, empty states, major section headers.
- `body-md` is the default reading size for prose and UI copy.
- `body-sm` is used for button labels, captions, and metadata.
- `mono` (`Roboto Mono`) is reserved for code snippets, model output, and any content where exact character spacing matters.

## Layout

Strata uses an 8px base unit. The spacing scale (`2xs` through `6xl`) is a linear progression from 8px to 48px. All layout decisions should snap to this scale.

- Use `2xs` (8px) and `xs` (12px) for tight intra-component spacing (icon-to-label gaps, list item padding) and component internal padding.
- Use `md` (16px) through `xl` (20px) for inter-component gaps and section gutters.
- Use `2xl` (24px) and above for section-level separation.

## Elevation & Depth

Strata does not use heavy shadows. Depth is expressed through tonal layering — surfaces stack by shifting between `background` opacity levels. The `extra-dark-teal` opacity scale (4%, 10%, 20%) creates subtle container definitions without hard borders.

- `opacity-4` (4%): Subtle differentiation, barely perceptible — used for overlay headers and footers.
- `opacity-10` (10%): Light container backgrounds, hover states on text buttons.
- `opacity-20` (20%): Stroke/border level — input field borders, dividers.

## Shapes

Border radii follow the same numeric scale as spacing (`3xs` through `3xl`). The scale is intentionally wide to support the full range from sharp (`3xs: 4px`) to pill-shaped (`3xl: 32px`).

- **Buttons, inputs, chips, and avatars:** All use `rounded.3xs` (4px) — sharp and structured throughout the system.
- **Pill shapes:** Use `rounded.3xl` (32px) or a full-radius value for badge or tag variants that require a pill silhouette.
- **Avoid mixing radii** within a single component group — pick one scale level and apply it consistently.

## Components

### Sizes

Buttons, inputs, and chips share a common size scale: `sm` (32px), `md` (36px), `lg` (48px). Avatars use the same pixel values but extend down to `xs` (24px). All heights are outer measurements using `box-sizing: border-box` — borders are absorbed into the declared height so components align cleanly when composed side by side.

### Buttons

Four button intents exist at the Strata level: `primary` (pink, high-emphasis), `secondary` (green, supporting action), `default` (teal, neutral interactive), and `reversed` (cream, for use on dark backgrounds). Each intent has a filled and outlined variant. A shared `disabled` state applies across all button types.

Filled hover states lighten to a solid tint (the base color blended at 60% on cream). Outlined hover states fill with the lightest tint (20%) and shift text to `extra-dark-teal` for contrast. All transitions should use a 150ms ease-in-out curve.

### Form Inputs

Inputs use a white fill with a low-opacity `extra-dark-teal` stroke in their default state. On focus the stroke transitions to `interactive` (teal). On error the stroke becomes `error-red-dark` and text adopts the same color. Disabled inputs use a `gray-20` fill with `dark-teal` text.

### Form Controls

Checkbox, radio, and switch all share the same color logic: unchecked state uses a white fill with a `teal-80` stroke; checked state fills with `interactive` (teal) and uses `cream` for the mark or thumb. The switch thumb is 14×14px, inset 2px from the track edge.

The slider track is 8px tall. The filled (selected) portion uses `interactive` (teal); the unfilled portion uses `teal-20`.

### Chips

Chips use the same 4px radius and size scale as buttons. Three color intents are available: `default` (teal), `primary` (pink), and `secondary` (green). Each intent has a filled and outlined variant. The outlined variant uses the intent color as both text and border with a transparent background.

### Avatars

Avatars display initials, icons, or images in a fixed square container with 4px radius. Three color intents: `default` (extra-dark-teal), `primary` (pink), `secondary` (green). Sizes run from `xs` (24px) to `md` (36px). Font weight for initials should be semibold (600) for legibility at small sizes.

## Do's and Don'ts

- **Do** use semantic color aliases (`{colors.primary}`, `{colors.text}`) rather than primitives directly.
- **Do** keep primary pink reserved for the single most important action per view.
- **Don't** use status colors (`error-red`, `success-green`, etc.) for decorative or categorical purposes.
- **Don't** mix button intents within a single action group — pick one hierarchy and apply it consistently.
- **Don't** use `mono` for UI copy — reserve it for code and model output.
