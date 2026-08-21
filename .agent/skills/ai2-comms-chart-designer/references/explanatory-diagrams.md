# Explanatory Diagrams

## Contents

- When This Applies
- Shared Visual System
- No Eyebrow Bar Above A Title
- No Group Chrome
- Type Roles And Micro-Labels
- Focal Accent And Logos
- Connector Arrows
- Archetypes
- Checks

## When This Applies

Beyond benchmark charts, Ai2 comms uses explanatory diagrams to show how a system works: architecture and data flow, processing pipelines, "by the numbers" stat grids, and spatial or partition decompositions. The OlmoEarth Run and OlmoEarth Datasets diagrams are the reference set. These follow the same Ai2 visual system as charts, with the extensions below.

## Shared Visual System

- Canvas: beige `#faf2e9`. Text and shared structure: dark teal `#0a3235`. Neutral paths: teal `#105257`. General accent: pink `#f0529c`. Prompt bubbles: `#1c5b5f`. Secondary text: muted teal `rgba(10,50,53,.6)`.
- Marks sit **directly on the beige canvas**. A container earns a surface only when it is the content mark itself; a container drawn to group other marks takes none. See *No Group Chrome* below.
- Geometry follows the archetype. Keep chart marks square. Use soft 8–10px corners for content-carrying process cards and prompt bubbles in the approved branching comparison; do not round empty group wrappers.
- A content card may pair a quiet surface with a complete, even branch-colored outline when both carry meaning: `#fef6fa` plus pink for the focal path, white plus teal for the neutral path. Do not use an isolated thick left or right border, a rounded vertical accent rail, an accent top-rule, shadow or gradient.
- Title in Manrope, heavy weight, names the idea. A deck is optional; the branching ground truth uses a centered two-line title with no subtitle.
- A simple editorial fork uses only three semantic type registers: title, body and optional literal monospace. Technical architecture, stage and stat-grid archetypes may retain their declared functional label roles.
- No drop shadows, no gradients, no decorative backgrounds.

## No Eyebrow Bar Above A Title

Do not stack a small category line above a board or card title (`■ [Partner] ·
Predictive data debugging`). It reads as a generic AI-assistant convention, not an Ai2 one. Fold the
category into the title with a colon — `Predictive data debugging: catch the wrong lesson
before training` — or drop it. Lead with the title.

Anchor: 2026-08-06, an eyebrow bar and its rule were removed from a two-board deliverable and
the category moved into the H2.

## No Group Chrome

A container drawn only to **group** other marks takes no background fill, no border, and no
accent rule. Its label, the line running through it, and the whitespace around it do the
grouping. Nothing else is needed, and the fill and hairline read as generic AI-assistant chrome.

A surface is earned only when the container **is** the content mark — a stage box carrying
reversed text, a stat tile whose number is the payload. It is never earned by a wrapper
around other cards.

Where a surface is earned, use only the treatments that carry information. A light fill may
pair with a branch-colored border when the fill separates the card from the canvas and the
border continues path identity. Use a complete, even outline; never substitute an isolated
thick side border or rounded vertical accent rail. Do not stack an additional top-rule,
shadow or gradient. A
solid prompt bubble needs its fill only.

Carry the focal accent on the mark and its label, not on group chrome. When the group loses
its tint and top-rule, the accent moves to the focal card's border and its name.

Test: delete every fill and border from the artboard. Whatever becomes ambiguous was
load-bearing; put only that back. If nothing does, it was all chrome.

Anchor: 2026-08-13, a three-group training-pipeline diagram wrapped each model's stage row in
a light card with a hairline border, and the focal group added a tint and a pink top-rule.
Kyle sent a crop of the bare edge — "let's get rid of these edges/shading." Stripped to a
name, a stage row and an epoch strip on the canvas, with the accent left on the focal box
border and its name. Grouping survived intact, because the continuous process line was
already doing that work. Consistent with the 2026-08-06 corrections and with the density
rules in `references/diagram-legibility.md`: the fill and border came from the same OlmoEarth-derived
pass as the rounded corners and the eyebrow bar.

## Type Roles

One typeface, and a small fixed set of roles. A diagram that needs a sixth size is usually
over budget (see `references/diagram-legibility.md`).

- Board title — 34/800, sentence case
- Card title — ~20/700, sentence case
- Body — 13.5/400
- Sub-label — 13.5/700, sentence case
- Micro-label — 10.5/700, sentence case, modest or no tracking

Those five roles are available to technical architecture, stage and stat-grid diagrams. A
simple editorial fork deliberately narrows them to title, body and optional literal monospace;
it has no small-caps labels, tertiary captions or italic asides.

Declare the micro-label once as a shared rule, then let per-class rules set colour,
alignment and layout only — never size, weight, tracking or case. Seven near-identical
micro-label specs drifting apart (11px/`.12em`, 10px/`.1em`, 10.4px/`.09em`) is the tell that
the roles were never declared.

## Micro-Labels (Manrope)

Use a Manrope 700 sentence-case label with modest or no tracking in muted teal for:

- Zone and section headers, each preceded by a small filled square bullet — `■ Satellite data providers`, `■ OlmoEarth datasets service`.
- Category eyebrows on stat tiles — `Coverage`, `Unit economics`, `Result`.
- Stage labels — `Stage 1 · Across machines`.
- Footer classifications — `Heavily GPU-bound`, `CPU-bound`.
- Connector annotations and inline unit tags.

Set these in **Manrope 700**, like every other label in the kit. Titles, card names, and body
text are Manrope too.

- 2026-08-06 correction: monospace is not an Ai2 diagram device. The 2026-07-24 extension
  introduced Roboto Mono for these micro-labels; 2026-07-30 scoped it out of data charts;
  Kyle then flagged it on a diagram as well. Manrope carries every label on every figure.
  A monospace in a font link now has one legitimate use: setting verbatim data — a raw
  dataset row, a JSONL excerpt, a code string — where the face is doing depictive work. Even
  that is optional, and dropping it costs the "this is raw data" signal, so decide
  deliberately rather than by habit.
- Avoid all caps except established acronyms, model names and literal source strings. Weight,
  placement and spacing do the label work; forced uppercase does not.

## Focal Accent Is The Product Color

General Ai2 comms charts and diagrams highlight in Strata pink `#f0529c`. Product-specific diagrams highlight in the product's accent instead:

- OlmoEarth: green `#0fcb8c`. Pull the full ramp from `olmo-earth/DESIGN.md`.
- A diagram uses a single focal accent color. Put it only on the hot path — the active or bottleneck stage, the focal node or nodes, the GPU step — and use it sparingly; do not spread it across the figure.
- Default to the bright green as a meaningful complete outline, eyebrow, badge, connector or focal datum, carrying dark-teal text (the mint is tuned for dark text, not light). Do not add a decorative top-rule or side rail to a card that already has an accent outline. A solid green fill under light text needs a darker green; the OlmoEarth ramp only lightens the mint, so darken enough for contrast and confirm the value with the design source rather than assuming a token.
- Pink can still appear inside a product diagram for a single tracked callout (the one partition followed through the next stage), distinct from the product accent.

## Logos

Real provider or partner logos are fine to identify external systems in an architecture diagram (AWS, Google Cloud, USGS, Copernicus, ASF, Azure). Place them in neutral cards, keep them one consistent size, and do not recolor them. Ai2 systems in the same diagram are named in type, not shown as logos.

## Connector Arrows Carry The Mechanism

Arrows are not decoration. Label them in sentence case when the connector contributes information not already stated by its adjacent nodes, such as what flows, cadence or protocol:

- `New scene notifications (SNS / Pub/Sub)`
- `poll upstream index / ~every few min`
- `index scene + pixel pointers`
- `publish` → `consume` → `query`

Use orthogonal (right-angle) connectors when routing between grouped zones; use simple straight arrows (→ ↓) inside a linear flow.

For a simple causal comparison, leave connectors unlabeled when the cards already name the
mechanisms. Start from a shared dark-teal trunk, then carry pink through the focal branch and
neutral teal through the comparison branch. Use rounded elbows and filled arrowheads; route
every line into the exact center of its card edge.

### Make several cards read as one path

Draw each visible connector gap as one line that ends at its arrowhead. Do not run a line past
the arrowhead and rely on the next card to mask it; anti-aliasing can expose the continuation.
Anchor the connector to the cards' vertical centre, leave it clear of rounded corners, and
verify the rendered pixels at the delivery viewport.

Do not extend a connector into a decorative closing band. Terminate at the last meaningful
content node unless the destination is itself a labeled node and the arrowhead lands cleanly
on its edge.

### Derive connector geometry, do not approximate it

A bracket or fork drawn with percentage insets (`top:25%; bottom:25%`) only approximates where
its targets sit, so its ends miss their stubs by a few pixels and the joins look frayed. Derive
the geometry from the real spacing instead: let each branch draw its own half of the shared
line, from its own centre out to the midpoint of the gap, with the gap held in a variable both
halves read. The halves meet, and every end lands exactly on its stub.

Prefer stacked or side-by-side labeled options without a bracket when the preceding sentence
already states the relationship. Add a fork only when the branching mechanism is information,
not decoration.

Anchor: 2026-08-06, a two-option fork with 37px options and a 14px gap put its targets at 21%
and 79%, so a 25%/75% bracket fell short at both ends.

## Archetypes

### Branching comparison / two-path causal flow

One centered two-line claim, one shared input in a solid teal speech bubble, then two balanced
branches with a mechanism and terminal outcome. Use 4–6 total nodes including the input, equal treatment for
corresponding cards, large negative space, pink tint plus pink border on one branch, and white
plus teal border on the other. Delete null steps even when the branches become asymmetric.
Each terminal card uses a different, bold, unpunctuated assertion. Read
`references/branching-comparison.md`, inspect the bundled PNG, and start from
`assets/branching-comparison-template.html`.

Reference: *When a model reads a drug’s class from its name—not its knowledge.*

### Architecture / data-flow

Grouped zones, each with a Manrope 700 sentence-case `■ Section` header and an optional descriptor. The zone is a label plus whitespace, not a drawn container — see *No Group Chrome*. Nodes are cards — logos for external systems, type for Ai2 systems. Connectors between zones are annotated. Flow reads top-down or left-to-right; a bottom row can name downstream consumers.

Reference: *OlmoEarth Datasets: one metadata index over many providers.*

### Numbered stage cards

A left-to-right sequence of softly rounded content cards numbered `01 / 02 / 03`, joined by clean terminating arrows, each with a role badge top-right (`CPU` / `GPU`), a title, a one-line description, and a Manrope 700 sentence-case footer classification (`Heavily GPU-bound`). The bottleneck or focal stage carries the accent on its own border and badge.

Here the card **is** the content mark, so it earns one surface. `assets/stage-cards-template.html` still ships the near-canvas `--card` fill plus a hairline, which is the one place a border is load-bearing; a solid dark-teal fill is the cleaner answer and drops the border. Either way, one treatment — do not stack fill, border and accent top-rule. Nothing in this archetype wraps the row in a group container.

Reference: *Data acquisition → Run inference → Postprocessing.*

### "By the numbers" stat grid

A 2×N grid of tiles split by hairline dividers. The dividers separate the tiles and are load-bearing; an outer box drawn around the whole grid is not — see *No Group Chrome*. Each tile has a Manrope 700 sentence-case category eyebrow on top, a large dark-teal number with a small unit beside it, and a plain-language descriptor below. Numbers stay dark teal across the grid — the reference grid uses no accent on the tiles. Bring in the accent only to deliberately pick out a punchline result, and even then sparingly. Title plus one-sentence deck above the grid.

- Numbers use thousands separators; the unit stays small next to the value — `22.2 M km²`, `$0.000164`, `4,737 h 14m`, `155 ×`.
- The eyebrow names the dimension (`Serial equivalent`); the descriptor says it plainly (`Total compute time`).

Reference: *Continent-scale inference run, by the numbers.*

### Two-stage / nested decomposition + summary table

An illustration showing whole → parts → sub-parts (area → partitions → model-sized windows), with one unit outlined in pink and labeled `followed in Stage 2`. Beneath it, a summary table (`Stage / Partition unit / Maps to / Optimized for`) and a footnote reconciling overlap (`cells overlap slightly … reconciled on assembly, so no seam appears`).

Reference: *OlmoEarth: two-stage partitioning.*

## Checks

- Title names the idea and is free of mood language; a deck appears only when it adds information.
- No eyebrow bar above a title; the category is folded into the title or dropped.
- No group chrome: a container that only groups other marks has no fill, border or accent rule. A content card may pair a quiet fill with a meaningful complete outline, but never with an isolated side rail, extra top-rule or shadow.
- Every label is Manrope. Section, stage and category labels are sentence case; preserve all caps only for established acronyms, model names and literal source strings.
- Geometry matches the archetype: chart marks square; approved branching/process content nodes softly rounded.
- Type sits in the declared roles, and the micro-label spec is declared once.
- Several cards in a row are joined by arrows whose lines stop at their arrowheads.
- Connector geometry is derived from real spacing, stays clear of rounded corners and card borders, and is checked in rendered pixels.
- Ornamental header glyphs, redundant status tags and self-certifying meta labels are absent.
- After a shared input splits, each branch starts at its first meaningful transformation; no identity card, heading or footer repeats the shared input or branch meaning.
- A simple fork stays within 4–6 nodes, ends on different terminal assertions, never uses gray for a live branch, and remains structurally legible with its text blurred at 50% scale.
- For a diagram a general reader has to read at a glance, run `references/diagram-legibility.md` too.
- The focal accent is the product color for product diagrams (OlmoEarth green), pink only for general comms or a single tracked callout, and is used sparingly.
- Connector labels appear only when they add payload, cadence, protocol or another nonredundant mechanism.
- Logos are neutral, one size, not recolored.
- Stat numbers carry units and separators; each tile has an eyebrow and a plain descriptor.
