---
name: Skylight
description: Skylight maritime intelligence — an Ai2 product for ending illegal, unreported, and unregulated fishing
version: 0.0.1

assets:
  # ── Assets that align with the design system ──────────────────────
  logo: assets/logo.svg
  logo-white: assets/logo-white.svg
  logo-icon: assets/logo-icon.svg
  logo-icon-white: assets/logo-icon-white.svg

colors:
  # ── Brand palette ─────────────────────────────────────────────────
  # Ocean-derived. Deep Sea is the darkest ground, Ocean Spray the
  # palest tint; Shallows and Sea Foam sit between them.
  deep-sea: "#09383e"
  shallows: "#248e85"
  sea-foam: "#82cdc7"
  ocean-spray: "#b9e2e4"
  cream: "#faf2e9"

  # ── Logo colors ───────────────────────────────────────────────────
  # Horizon and Endless Sky are the original mark colors. The current
  # Ai2 lockup uses the paler mark and wordmark values below.
  horizon: "#262580"
  endless-sky: "#3ab5c5"
  lockup-mark: "#8fcbc7"
  lockup-wordmark: "#227e97"
  lockup-byline: "#b2b2be"

  # ── Product surfaces ──────────────────────────────────────────────
  white: "#ffffff"
  surface-subtle: "#f5f6f8"
  surface-muted: "#f3f5f7"
  surface-sunken: "#e4e7eb"
  surface-splash: "#eff7f8"
  surface-table-row: "#f7f7f7"

  # ── Text and chrome ───────────────────────────────────────────────
  black: "#10171a"
  dark-gray: "#596670"
  medium-gray: "#959da4"
  gray: "#555b5d"
  low-gray: "#9f9f9f"
  border-gray: "#dee0e0"
  border-table: "#c0c3c4"
  table-header: "#586570"

  # ── Interactive teal ladder ───────────────────────────────────────
  # Ordered light to dark. Dark Teal is the primary interactive value.
  light-teal: "#8eeffc"
  light-blue: "#94daf0"
  hover-action: "#d3e9ee"
  teal: "#3ab5c5"
  button-hover: "#4aadb9"
  dark-teal: "#1d98a8"
  medium-teal: "#227e97"
  dark-teal-hover: "#1a5c5c"
  dark-skylight-blue: "#175869"

  # ── Status ────────────────────────────────────────────────────────
  alert-red: "#f81336"

  # ── Marketing surfaces ────────────────────────────────────────────
  # Values used on skylight.global. They sit a shade off the brand
  # palette above; see the Colors section on reconciling them.
  web-deep-teal: "#03383f"
  web-sea-foam: "#7dcec8"
  web-mint: "#bafdf9"

  # ── Semantic aliases ──────────────────────────────────────────────
  # Maps intent to primitive. Prefer these over raw primitives.
  text-primary: "{colors.black}"
  text-secondary: "{colors.dark-gray}"
  text-disabled: "{colors.low-gray}"
  text-reversed: "{colors.cream}"
  background-page: "{colors.white}"
  background-raised: "{colors.surface-muted}"
  border-default: "{colors.border-gray}"
  interactive-primary: "{colors.dark-teal}"
  interactive-hover: "{colors.button-hover}"
  interactive-emphasis: "{colors.medium-teal}"
  status-alert: "{colors.alert-red}"

  # ── Presentation roles ────────────────────────────────────────────
  # The two dominant colors of Skylight decks and printed material.
  deck-field: "{colors.cream}"
  deck-primary: "{colors.shallows}"
  deck-text: "{colors.deep-sea}"

typography:
  # ── Product interface ─────────────────────────────────────────────
  # Roboto Slab for headings, Roboto for body.
  display:
    fontFamily: Roboto Slab, Georgia, serif
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
  heading-xl:
    fontFamily: Roboto Slab, Georgia, serif
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.2
  heading-lg:
    fontFamily: Roboto Slab, Georgia, serif
    fontSize: 2rem
    fontWeight: 500
    lineHeight: 1.2
  heading-md:
    fontFamily: Roboto Slab, Georgia, serif
    fontSize: 1.5rem
    fontWeight: 500
    lineHeight: 1.3
  heading-sm:
    fontFamily: Roboto Slab, Georgia, serif
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: 1.4
  body-lg:
    fontFamily: Roboto, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Roboto, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Roboto, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  body-xs:
    fontFamily: Roboto, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: Roboto Mono, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6

  # ── Legacy web scale ──────────────────────────────────────────────
  # What skylight.global ships today: Roboto Light, tracked open. This
  # records the current site so work on it stays consistent. It is NOT
  # a target — new external material uses the Manrope scale below.
  legacy-web-h1:
    fontFamily: Roboto, Arial, sans-serif
    fontSize: 60px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: 0.05rem
  legacy-web-h2:
    fontFamily: Roboto, Arial, sans-serif
    fontSize: 46px
    fontWeight: 300
    lineHeight: 1.13
    letterSpacing: 0.05rem
  legacy-web-h3:
    fontFamily: Roboto, Arial, sans-serif
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.27
    letterSpacing: 0.05rem
  legacy-web-body:
    fontFamily: Roboto, Arial, sans-serif
    fontSize: 22px
    fontWeight: 300
    lineHeight: 1.36
  legacy-web-cta:
    fontFamily: Roboto, Arial, sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.11
    letterSpacing: 0.05rem

  # ── External communications ───────────────────────────────────────
  # Manrope. The scale for ALL externally-facing work: decks,
  # one-pagers, newsletters, printed material, and marketing pages.
  # Never used in the product interface.
  external-display:
    fontFamily: Manrope, Arial, sans-serif
    fontSize: 58px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -0.01em
  external-heading:
    fontFamily: Manrope, Arial, sans-serif
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.14
    letterSpacing: -0.01em
  external-body-lg:
    fontFamily: Manrope, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
  external-body-md:
    fontFamily: Manrope, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  external-body-sm:
    fontFamily: Manrope, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  external-eyebrow:
    fontFamily: Manrope, Arial, sans-serif
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.14em
  # Large figures on impact slides. The one place a light weight is
  # correct — at this size the thin strokes still hold.
  external-stat:
    fontFamily: Manrope, Arial, sans-serif
    fontSize: 88px
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: -0.02em

spacing:
  # 8px base. Values below it are fractions of that base.
  2xs: 2px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 56px
  5xl: 64px

rounded:
  3xs: 2px
  2xs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  full: 100px

components:
  # ── Buttons ───────────────────────────────────────────────────────
  button-primary:
    backgroundColor: "{colors.web-sea-foam}"
    textColor: "{colors.web-deep-teal}"
    typography: "{typography.external-body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.web-sea-foam}"
    borderColor: "{colors.web-sea-foam}"
    typography: "{typography.external-body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  button-secondary-on-light:
    backgroundColor: transparent
    textColor: "{colors.deep-sea}"
    borderColor: "{colors.deep-sea}"
    typography: "{typography.external-body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"

  # ── Product controls ──────────────────────────────────────────────
  action-primary:
    backgroundColor: "{colors.dark-teal}"
    textColor: "{colors.white}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.2xs}"
    padding: "{spacing.sm}"
  action-primary-hover:
    backgroundColor: "{colors.button-hover}"
    textColor: "{colors.white}"
  surface-hover:
    backgroundColor: "{colors.hover-action}"

  # ── Cards ─────────────────────────────────────────────────────────
  card:
    backgroundColor: "{colors.white}"
    borderColor: "{colors.border-gray}"
    textColor: "{colors.deep-sea}"
    rounded: "{rounded.xs}"
    padding: "{spacing.lg}"
---

## Overview

Skylight is a maritime intelligence platform from Ai2 that fuses satellite data — AIS, SAR, VIIRS, radio frequency, and optical imagery — with machine learning to surface vessel detections and behavioral events. Dark rendezvous, transshipment, area entry, speed-range anomalies, and fishing activity are pulled out of an ocean of daily signals so that coast guards, fisheries agencies, and enforcement partners can act on illegal, unreported, and unregulated (IUU) fishing. It is offered at no cost to the agencies doing that work.

The people using Skylight are analysts and operators making time-sensitive enforcement decisions, often on poor connections and sometimes at sea. The design language must therefore read as **trustworthy, precise, and operational**: information density is a feature rather than a failure, ambiguity is a defect, and an alert must be unmistakable. Interfaces should feel like instruments — calm by default, emphatic only when something genuinely needs attention.

The visual identity is drawn from the ocean itself. A teal ladder runs from Deep Sea through Shallows and Sea Foam to Ocean Spray, and it carries both the product interface and the brand. Cream provides the warm paper ground shared across Ai2 products. The product ships a single light theme; there is no dark mode, and interfaces should not be designed on the assumption that one exists.

Skylight's register is factual rather than dramatic. The subject matter is serious — illegal fishing, enforcement, arrests at sea — so the design carries weight through restraint and clarity, never through alarm styling or decorative urgency.

## Colors

Work from the semantic aliases wherever one fits: `text-primary`, `background-page`, `interactive-primary`, `status-alert`. They carry intent, and intent survives a palette revision in a way that a raw hex does not.

The interactive language is teal. `interactive-primary` (Dark Teal, `#1d98a8`) drives primary actions and active states, with Medium Teal (`#227e97`) for emphasis and Dark Skylight Blue (`#175869`) for depth. Hover states move to `#4aadb9` on filled controls and to the pale `hover-action` tint (`#d3e9ee`) on surfaces.

**Red is exclusively an alert color.** `alert-red` (`#f81336`) marks alert events, destructive actions, and error states — never decoration, never emphasis, never a chart series. Analysts scan for it. Every decorative use spends down the signal they depend on.

**Horizon indigo (`#262580`) is a logo color, not a UI color.** It belongs to the original mark and to brand moments. Do not use it for interactive elements, and do not introduce it into data visualization.

For decks, printed material, and other presentation surfaces, two colors dominate: **cream is the field** and **Shallows is the ink on it**. Most of a deck should be predominantly cream, with Shallows carrying headlines, fills, chart series, and accents. Deep Sea then handles body copy and provides the dark inverse for section breaks, while Sea Foam and Ocean Spray support as secondary fills and table banding. Horizon and Endless Sky appear only as small logo-adjacent accents.

That pairing carries one constraint worth stating precisely: **cream and Shallows measure 3.59:1 against each other.** They read beautifully as large color fields and at headline sizes, but that is a large-text ratio, not a body-text one. Footnotes, source lines, chart axis labels, and dense body copy set in Shallows on cream will fail. Those go in Deep Sea, which measures 11.5:1 on cream and is safe at any size.

The marketing values (`web-deep-teal`, `web-sea-foam`, `web-mint`) are what skylight.global currently ships. They sit a shade off the brand palette — `#03383f` against Deep Sea's `#09383e`, `#7dcec8` against Sea Foam's `#82cdc7`. The difference is small enough to look deliberate and large enough that a deck and a web page side by side will not quite agree. Use the marketing values for web and button work, the brand values for everything else, and treat reconciling the two as open.

## Typography

The product interface uses **Roboto Slab** for headings and **Roboto** for body text, at weights 400, 500, and 700 only. Both are pulled from a web font service, so always keep a native fallback in the stack — Skylight is used on poor connections, and a font that blocks rendering is a delay in reading an alert.

**Manrope is the typeface for all externally-facing work** — slide decks, one-pagers, email newsletters, printed material, and marketing pages. It aligns Skylight's external voice with Ai2's brand typography. It is never used in the product interface, which stays on Roboto and Roboto Slab. Regular and Bold cover nearly everything; Light (300) is reserved for large figures on impact slides, where the size supports the thin strokes.

The `legacy-web-*` scale records what skylight.global ships today — Roboto Light at 60px and 46px for the two headline levels, Roboto Medium at 30px for uppercase tags, Roboto Light at 22px for body, all tracked at 0.05rem, with Roboto Condensed for tight labels. Reach for it only when working on the existing site and matching pages you are not changing. It is documentation of the current state, not a target: new external material uses Manrope, and the site is expected to follow.

Two practical notes for anyone setting Manrope. It has **no arrow glyphs** — a typed `→`, `←`, `↑`, or `↓` silently falls back to a system font mid-line, which is visible as a weight and shape break. Use an icon or inline SVG instead. It does cover `²`, `–`, `—`, `·`, and `$`, so those are safe to type.

The interface is localized into English, Spanish, French, Vietnamese, and Portuguese. Layouts must tolerate text expansion of roughly a third without truncating or wrapping into unreadable columns; fixed-width labels and single-line assumptions break in translation.

## Layout

The spacing scale is built on an 8px base, with 2px and 4px available beneath it for tight interface work. Use scale values rather than arbitrary lengths for padding, margins, gaps, and positioning offsets, so that rhythm holds across screens built by different hands.

Interface density is deliberately high. Analysts compare many vessels, events, and tracks at once, and whitespace that would feel generous in a marketing page reads as wasted screen in an operations console. Prefer tighter grouping and clear separation over generous padding.

Presentation material inverts that instinct. Slides are built on a 16:9 field with generous margins — 56px vertical and 64px horizontal on a 1120×630 surface — and content sits optically centered in the space between the headline and the footer rather than hugging the top edge.

## Elevation & Depth

Elevation is used sparingly and never decoratively. Surfaces that float above the page — modals, popovers, map overlays, cards lifted off a colored ground — take a soft shadow; everything else sits flat and is separated by `border-default` instead.

The product's map is the deepest surface in the system: overlays, legends, and controls stack above it, and their elevation should read as clearly above the map without introducing heavy drop shadows that compete with the data underneath.

## Shapes

Corners are modest. Interface controls use 2–4px radii, cards and panels 6–8px, and pills or chips the `full` value. Nothing in Skylight should read as soft or playful; the geometry stays close to square to reinforce the instrument-like character described in the Overview.

Buttons on marketing and presentation surfaces use the larger 8px radius, matching skylight.global.

## Components

### Logo

Four variants ship in `assets/`. The full lockup carries the "A product of Ai2" byline; keep it, since it is how Skylight signals its place in the Ai2 family.

| Asset | Use |
| --- | --- |
| `logo` | Full lockup on white and light backgrounds |
| `logo-white` | Reversed — the same lockup in solid white, for dark, teal, and photographic grounds |
| `logo-icon` | Mark only, Endless Sky teal — favicons, avatars, tight spaces on light backgrounds |
| `logo-icon-white` | Mark only, white — the same, reversed |

**Use the white lockup on any dark surface.** The color lockup's wordmark is `#227e97`, which measures roughly 1.6:1 against Deep Sea and effectively disappears. It is built for light backgrounds only; on Deep Sea, on brand gradients, and over photography, always reverse to white.

One caveat on light grounds: the color lockup's mark is a pale `#8fcbc7`, which measures 1.64:1 on cream, and the byline is fainter still. Logotypes are exempt from contrast minimums, so this is not a compliance failure, but at small sizes on a cream field the mark reads as a smudge rather than a brand signal. Give it size, or place it on white.

On presentation surfaces, the logo sits in a **bottom corner** — bottom-right by default, bottom-left where a layout needs the right corner. Keep it at a consistent inset and on the same baseline as any footnote, so it holds position as the audience pages through. The top corners belong to the headline.

### Buttons

Two styles, no more. `button-primary` is a Sea Foam fill with a Deep Teal label, measuring 7.03:1. `button-secondary` is outlined — no fill, with the label and a 1.5px border in Sea Foam on dark grounds or Deep Sea on cream. Primary carries the single most important action on a screen or slide; everything else is secondary, and two primaries in one view means the hierarchy has not been decided.

The primary fill measures only 1.64:1 against cream, so on a cream ground the button reads by its label rather than its shape. It was designed for dark grounds, and that is where it works best.

### Icons

Skylight draws on two icon libraries, and neither is interchangeable with the other.

**Interface icons** come from a standard outlined Material-style set at 24px, tinted `text-secondary` unless a design specifies otherwise. **Event icons** are custom and domain-specific — vessel detection, SAR, VIIRS, radio frequency, radar, fishing, anchor, area entry, standard and dark rendezvous, speed range, nearby tracks. Each detection icon ships in two states: a default in near-black (`#14171a`) and an alert variant in `alert-red`. Use the red variant only for genuine alert conditions.

A third set of stroke icons — satellite, AIS signal, vessel, API, global coverage, partnerships, real-time, no-cost — supports presentation and marketing work at concepts the event icons do not cover. These are stroke-only on a 24px grid; never fill them.

Never substitute a different icon for the one a design specifies, and never use emoji in place of an icon. Emoji render inconsistently across platforms and carry none of the states — filled and outline, default and alert — that the icon sets provide.

When an icon carries a label, use the **specific type name** — "Sentinel-2", "SAR", "VIIRS" — rather than a rolled-up category like "Vessel Detections". Specificity is what an analyst acts on; generic group labels hide the very distinction that makes the detection useful.

### Imagery

Photography should be striking, colorful, and bold while staying accurate to the program: real vessels, real oceans, real users — analysts at workstations, officers on patrol boats. Anyone shown should be interacting with the camera, their environment, or the product. Imagery should never be boring, dark, negative, or cluttered.

Reversed type over photography always needs a scrim. A left-weighted dark gradient keeps a headline legible over an image whose composition you cannot predict; type set straight onto a photograph will fail on some crop, on some screen, in some room.

Brand patterns — fine wave lines, a particle-flow data mesh, and angular chevron forms derived from the logo mark — work as subtle overlays on brand-color fields. Gradients stay within the teal family: Shallows to Ocean Spray, Ocean Spray to white, Deep Sea to Shallows. Never gradient between unrelated hues.

### Data visualization

Chart series draw from the brand ramp — Shallows, Deep Sea, Sea Foam, Ocean Spray — rather than a plotting library's defaults. Axis labels, legends, and value labels sit in Deep Sea on cream, or cream on Deep Sea, at sizes that clear body-text contrast.

Statistics earn a distinct treatment: a Deep Sea ground with figures in Sea Foam at a light weight, each with a short caption in cream beneath. Set the figures large and let the light weight do the work rather than reaching for bold. Three columns reads best, and six figures sit comfortably in a 3×2 grid. Lead with one hero figure rather than giving six numbers equal weight — a wall of equally-sized statistics tells the reader nothing about which one matters.

## Do's and Don'ts

**Don't set small text in Shallows on cream, or cream on Shallows.** The two dominant presentation colors sit at 3.59:1 — fine for headlines and fills, failing for footnotes, sources, and axis labels. Those go in Deep Sea on cream (11.5:1). On a Shallows fill, small text needs black (4.56:1); creme and white clear only the large-text threshold there.

**Don't put white text on Endless Sky teal or Sea Foam.** White on `#3ab5c5` measures 2.44:1. Use `text-primary` on the light teals — 7.41:1 on Endless Sky, 9.92:1 on Sea Foam. White is safe on Medium Teal (4.67:1), Deep Sea (12.75:1), and Horizon (12.66:1). White on Dark Teal is 3.44:1, so large text and UI elements only.

**Don't use red for anything but alerts.** `alert-red` means "this needs attention now." Decorative use erodes the signal analysts rely on to triage.

**Don't design for a dark mode.** The product ships a single light theme. A layout that assumes an inverse variant will not have one.

**Don't roll specific detection types up into generic labels.** Prefer "Sentinel-2" over "Vessel Detections" wherever a specific source or type name exists. Generic group labels hide the information the user is actually looking for.

**Don't type arrow characters in Manrope.** The family has no arrow glyphs, so `→` silently falls back to a system font. Use an icon or inline SVG.

**Don't use emoji anywhere.** Interface icons and event icons cover the vocabulary, carry proper states, and render consistently across platforms.

**Don't ship heavy font loads.** Keep to the weights in use — Roboto 400/500/700, Roboto Slab, and Manrope Regular and Bold for external material — always with a native fallback in the stack, so that a slow connection never delays a reader.
