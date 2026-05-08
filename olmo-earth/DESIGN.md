---
name: OlmoEarth
description: OlmoEarth product design system — extends Strata with product-specific tokens
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

_Coming soon — to be populated with OlmoEarth-specific tokens layered on top of Strata._

## Colors

## Typography

## Layout

## Elevation & Depth

## Shapes

## Components

## Do's and Don'ts

- **Do** use semantic color aliases (`{colors.primary}`, `{colors.text}`) rather than primitives directly.
- **Do** keep primary pink reserved for the single most important action per view.
- **Don't** use status colors (`error-red`, `success-green`, etc.) for decorative or categorical purposes.
- **Don't** mix button intents within a single action group — pick one hierarchy and apply it consistently.
- **Don't** use `mono` for UI copy — reserve it for code and model output.
