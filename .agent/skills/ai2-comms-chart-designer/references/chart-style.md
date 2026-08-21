# Chart Style

## Overall Style

Charts should feel publication-clean, Ai2-branded, and optimized for fast comprehension. Avoid dashboard gloss.

Use:

- Beige `#faf2e9` backgrounds and surfaces.
- Dark teal `#0a3235` for text and structure.
- Extra-dark teal `#032629` for strong anchors.
- Strata pink `#f0529c` for the primary general-Ai2 highlight.
- Manrope for every piece of text, on charts and on diagrams alike. Set stat-cell keys, group headers and unit tips in Manrope 700 sentence case with modest or no tracking. Avoid all caps except established acronyms, model names and literal source strings.
- Square corners for chart marks (bars, table cells, plot frames). Use archetype-specific geometry for explanatory content nodes; the approved branching/process cards and speech bubble use soft 8–10px corners in the 1400 × 1000 template.

Avoid:

- Monospace as a label face anywhere, chart or diagram. Its one legitimate use is setting verbatim data (a raw dataset row, a code string), where the face is depictive. Test: if the type is a label, the answer is Manrope.
- Rounded chart marks, pill-like process cards, or rounded wrappers that contain other marks. Soft rounding belongs only to approved content nodes.
- An eyebrow bar stacked above a title. Fold the category into the title with a colon.
- Drop shadows.
- Gradients.
- Decorative backgrounds.
- Extra visual furniture.
- Ornamental interface glyphs, isolated thick side borders and rounded vertical accent rails.
- Subtitle and footnote redundancy.

## Bar Charts

Sort descending when higher is better. Sort ascending when lower is better. Put values near bar ends, outside the bar when possible. Include units.

## Scatterplots

Make label-to-dot association obvious. Use large labels, direct leader lines only when useful, and enough spacing to avoid collisions.

## Tables

Use clear column labels and units in headers. Highlight winners with bold and underline. Put caveats in footnotes.

## Explanatory Diagrams

Architecture, branching comparisons, pipelines, stat grids, and partition diagrams share the palette and Manrope but not one blanket geometry rule. Keep group-only wrappers chrome-free. Let content nodes follow the archetype: the approved branching comparison uses a solid rounded speech bubble and softly rounded cards with a quiet surface plus a branch-colored border. Use monospace only to depict literal material. Product diagrams take the product accent as the focal color (OlmoEarth green `#0fcb8c`) rather than pink. Full guidance and archetypes are in `references/explanatory-diagrams.md`; the branching ground truth is in `references/branching-comparison.md`; legibility for a general audience is in `references/diagram-legibility.md`.
