---
name: OlmoEarth
description: Ai2 design system — OlmoEarth product interface
version: 0.0.1

# Overrides where OlmoEarth Studio differs from Strata. Everything here describes
# what the product renders today; anything absent is inherited unchanged.

colors:
  # Studio's primary action is dark teal, not pink. Pink stays in the palette as an
  # accent, and every component that references interactive-primary follows this.
  interactive-primary: "{colors.dark-teal}"
  interactive-primary-hover: "#084245"
  # Links are teal.
  link: "{colors.teal}"

  # A surface one step lighter than gray-20, for panel and preview backgrounds.
  # The inherited scale goes straight from white to gray-20, so Studio invented
  # this five times over before it was named.
  gray-10: "#f5f5f5"

  # Task and model state. Distinct from the semantic colors above: these read as
  # neutral progress rather than success or warning, and they predate the spec.
  status-neutral: "#9e9e9e"
  status-warning: "#ff9800"
  status-success: "#4caf50"

  # Map draw and layer styling. Provisional — these are MapLibre and
  # mapbox-gl-draw defaults that Studio adopted rather than colors anyone chose.
  map-draw: "#fbb03b"
  map-selection: "#3bb2d0"
  map-boundary: "#6d8196"

  # Charts. Also provisional, and currently two unrelated palettes: four fixed
  # series colors from Recharts, and twelve categorical colors from matplotlib's
  # tab10/tab20 assigned by hashing a label. Consolidating them needs a decision
  # about how many distinguishable hues Studio's charts actually need.
  chart-series-1: "#0088fe"
  chart-series-2: "#00c49f"
  chart-series-3: "#ffbb28"
  chart-series-4: "#ff8042"
  chart-categorical-1: "#1f77b4"
  chart-categorical-2: "#ff7f0e"
  chart-categorical-3: "#2ca02c"
  chart-categorical-4: "#d62728"
  chart-categorical-5: "#9467bd"
  chart-categorical-6: "#8c564b"
  chart-categorical-7: "#e377c2"
  chart-categorical-8: "#7f7f7f"
  chart-categorical-9: "#bcbd22"
  chart-categorical-10: "#17becf"
  chart-categorical-11: "#ff9896"
  chart-categorical-12: "#aec7e8"

typography:
  # PP Telegraf has never been loaded in Studio — Manrope renders every heading.
  display:
    fontFamily: "Manrope, Arial, sans-serif"
  heading-xl:
    fontFamily: "Manrope, Arial, sans-serif"
  heading-lg:
    fontFamily: "Manrope, Arial, sans-serif"
  heading-md:
    fontFamily: "Manrope, Arial, sans-serif"
  heading-sm:
    fontFamily: "Manrope, Arial, sans-serif"

components:
  # These record what Studio renders today, measured from the browser rather than
  # transcribed from intent. Most of it is MUI's defaults: the point of writing
  # them down is that the theme can now read them, so changing one is a change
  # here rather than a change in application code.

  # Chips are pills with a black 8% fill — MUI's default, not a choice anyone made.
  chip-default:
    backgroundColor: "rgba(0, 0, 0, 0.08)"
    textColor: "{colors.text}"
    rounded: 16px
    height: 32px
  chip-outlined:
    backgroundColor: "rgba(0, 0, 0, 0)"
    textColor: "{colors.text}"
    borderColor: "#bdbdbd"
    rounded: 16px
    height: 32px
  chip-primary:
    backgroundColor: "{colors.interactive-primary}"
    textColor: "{colors.cream}"
  chip-size-sm:
    height: 24px
  chip-size-md:
    height: 32px

  # Inputs are transparent over the page, which is why a field currently reads as
  # part of the page rather than as somewhere to type. Recorded as-is; putting them
  # on white is a change to make deliberately, in this file.
  input-default:
    backgroundColor: "rgba(0, 0, 0, 0)"
    textColor: "{colors.text}"
    borderColor: "rgba(0, 0, 0, 0.23)"
    rounded: 4px
    padding: 14px
  input-disabled:
    backgroundColor: "rgba(0, 0, 0, 0)"
    textColor: "rgba(0, 0, 0, 0.38)"
    borderColor: "rgba(0, 0, 0, 0.26)"
    rounded: 4px
  input-error:
    textColor: "{colors.error-red-dark}"
  input-size-sm:
    height: 40px
    padding: 8.5px
  input-size-md:
    height: 56px
    padding: 16.5px

  # 24px, not the 18px Strata specifies, and teal when unchecked because MUI draws
  # an unchecked control in text.secondary.
  checkbox-default:
    borderColor: "{colors.teal}"
    width: 24px
    height: 24px
  checkbox-checked:
    backgroundColor: "{colors.interactive-primary}"
  radio-default:
    borderColor: "{colors.teal}"
    width: 24px
    height: 24px
  radio-checked:
    backgroundColor: "{colors.interactive-primary}"

  # A 58x38 control around a 34x14 track: the track is what the spec was
  # describing, the root is what occupies the layout.
  switch-default:
    backgroundColor: "rgba(0, 0, 0, 0.38)"
    width: 58px
    height: 38px
  switch-checked:
    backgroundColor: "{colors.interactive-primary}"

  button-primary:
    backgroundColor: "{colors.interactive-primary}"
    textColor: "{colors.cream}"
  button-primary-hover:
    backgroundColor: "{colors.interactive-primary-hover}"
    textColor: "{colors.cream}"

  # The confusion matrix's diagonal, as green at even opacities over white. Stated
  # as rgba so the steps land on exactly 10% through 50%.
  confusion-diagonal-1:
    backgroundColor: "rgba(15, 203, 140, 0.1)"
  confusion-diagonal-2:
    backgroundColor: "rgba(15, 203, 140, 0.2)"
  confusion-diagonal-3:
    backgroundColor: "rgba(15, 203, 140, 0.3)"
  confusion-diagonal-4:
    backgroundColor: "rgba(15, 203, 140, 0.4)"
  confusion-diagonal-5:
    backgroundColor: "rgba(15, 203, 140, 0.5)"
---

## Overview

_To be populated with product-specific design rationale._

## Colors

Studio's primary action is **dark teal**, not the pink Strata specifies. Pink remains
in the palette as an accent; `interactive-primary` points at dark teal, so buttons,
chips and avatars all follow without being overridden one at a time. The primary
hover goes *darker* (`#084245`) where Strata's goes lighter.

`gray-10` fills a gap rather than adding a shade: the inherited neutral scale steps
from white straight to `gray-20`, and a panel background needs something in between.

Three groups here are **provisional**, recorded so they stop being invisible:

- **Status colors** for task and model state. They overlap the semantic colors
  without matching them, and whether they collapse into `success-green` and
  friends is undecided.
- **Map colors** are MapLibre and mapbox-gl-draw defaults Studio adopted rather
  than chose. Whether map styling belongs in a design system at all is open.
- **Chart colors** are currently two unrelated palettes — four fixed series colors
  from Recharts, twelve categorical ones from matplotlib assigned by hashing a
  label. The Analytics page draws a pie chart from one and a bar chart from the
  other, on the same screen.

## Typography

Every heading renders in **Manrope**. PP Telegraf is named upstream as the heading
face but has never been loaded here, and adopting it would need a license.

## Components

The default chip takes the 10% tonal layer rather than a teal fill: Studio's chips
are mostly metadata tags, and a teal fill reads as an emphasis they don't carry.
Contrast against the dark-teal text stays above 10:1 on both cream and white.

Chip, input and switch dimensions are stated as MUI renders them. That is a
description, not a decision — those numbers came from the framework, and if the
system wants its own density scale these are the values it would be replacing.

Two things the format can't express, so they live here as prose: the checkbox's 2px
corner radius and its border color, which MUI draws as an SVG path rather than a
styled box.

## Do's and Don'ts

- **Do** reach for the tonal layers (`extra-subtle`, `subtle`) for chips, hovers
  and empty states, rather than a filled brand color.
- **Do** put text on white inside a form. Inputs sit on white against the cream
  page, which is what makes a field read as somewhere to type.
- **Don't** use `interactive-primary` for more than the single most important
  action on a screen. It's dark teal here, which is quiet enough to overuse.
- **Don't** use the chart or map colors for interface chrome — they're chosen for
  distinguishability against imagery, not for hierarchy.
