# Varnish Theme Colors

The product `DESIGN.md` files in this repository are normative for every token below.
The values here are the working subset a comms deliverable reaches for most often, kept
inline so a chart can be built without loading a full design system. If a value here ever
disagrees with the relevant `DESIGN.md`, `DESIGN.md` wins and this file is the bug.

## Comms Working Set

Each row names the `DESIGN.md` token first; cite the token, not the hex, when the
deliverable can reference the design system. The hex is a convenience for a standalone
chart file.

| `DESIGN.md` token | Value | Role in comms deliverables |
|---|---|---|
| `pink` | `#f0529c` | General-comms focal accent |
| `dark-teal` | `#0a3235` | Primary text |
| `cream` | `#faf2e9` | Canvas |
| `extra-dark-teal` | `#032629` | Deepest surface |
| `teal` | `#105257` | Neutral branch |
| `green` | `#0fcb8c` | OlmoEarth focal accent (product deliverables only) |

Two values are comms-only and have no `DESIGN.md` token — they exist for the
branching-comparison archetype and are defined here rather than in the design system:

- Prompt-bubble teal: `#1c5b5f`.
- Pink branch surface: `#fef6fa`.

**Naming note.** These skills and the bundled templates say *beige* for the token
`DESIGN.md` names `cream`, including the CSS variable in `assets/ai2-chart-tokens.css`.
Same value, two names. `cream` is the canonical one; treat *beige* as a comms alias and
do not introduce it into anything that reads the design system directly.
- Manrope is the comms and chart font. In a data chart it is the only font. Set small labels in sentence case with modest or no tracking; avoid all caps except established acronyms, model names and literal source strings.
- Roboto Mono is depictive only: use it for literal data, code, or token mappings such as `-pril → ACE inhibitor`, not for generic labels.

## Focal Accent By Deliverable

The focal highlight is Strata pink `#f0529c` for general Ai2 comms charts and diagrams. For a product-specific deliverable, the focal accent is the product's own color: OlmoEarth green `#0fcb8c` in OlmoEarth diagrams, Asta's accent for Asta. Keep the bright green on a complete outline, eyebrow, badge, connector or focal datum with dark-teal text; do not use an isolated thick side border, rounded vertical accent rail or decorative top-rule. A solid fill under light text needs a darker green than the mint (the ramp only lightens it), so confirm that value with the OlmoEarth design source. Pink can still mark a single tracked callout inside a product diagram. Pull the full product ramps from the product design sources below.

## Design Source

Use `strata/DESIGN.md` as the base Ai2 design system. Its pink `#f0529c` is the approved general-comms accent.

## Product Systems

Use a product's own system only for that product's visuals: `asta/DESIGN.md` for Asta,
`olmo-earth/DESIGN.md` for OlmoEarth, `earthranger/DESIGN.md` for EarthRanger. The root
`CLAUDE.md` carries the current product-to-file mapping; read it rather than assuming this
list is complete.
