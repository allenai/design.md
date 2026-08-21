---
name: ai2-comms-chart-designer
description: Use when creating or reviewing Ai2 benchmark charts, leaderboard tables, HTML data visualizations, score-vs-cost visuals, scatterplots, architecture or data-flow diagrams, branching or two-path causal comparison diagrams, processing-pipeline or stage diagrams, "by the numbers" stat/KPI tiles, or WeasyPrint-ready PDF chart artifacts.
version: 1.0.0
keywords: [charts, diagrams, data-viz, design, tokens, comms]
---

# Ai2 Comms Chart Designer

## Chart Contract

Build charts as editable HTML with Ai2 styling, source-visible data, explicit metric interpretation, and caveats where needed. Do not deliver static images unless the user explicitly asks for export only.

This skill also covers explanatory diagrams — architecture and data-flow, branching comparisons, processing pipelines and numbered stage cards, "by the numbers" stat grids, and spatial or partition decompositions. They share the Ai2 palette and Manrope, while geometry follows the archetype. The extensions live in `references/explanatory-diagrams.md`. For a two-path comparison, read `references/branching-comparison.md` and start from `assets/branching-comparison-template.html`, which is the approved visual ground truth for the archetype. When the diagram has to explain a method to a reader who does not know its vocabulary, also read `references/diagram-legibility.md`.

## Defaults

- Use `strata/DESIGN.md` as the base design source. It is normative for tokens; the values repeated in `references/varnish-theme-colors.md` are a working subset, and `DESIGN.md` wins on any disagreement. For a product-specific deliverable, use that product's own `DESIGN.md` (see the root `CLAUDE.md` for the mapping).
- Use Strata pink `#f0529c` for general Ai2 highlights. The approved branching-comparison ground truth supersedes the older local `#f45096` override.
- Use beige `#faf2e9`, dark teal text `#0a3235`, neutral-branch teal `#105257`, speech-bubble teal `#1c5b5f`, pink tint `#fef6fa`, white, Manrope, no shadows, and no gradients.
- Keep chart marks square. For explanatory diagrams, follow the archetype: approved branching/process content cards and prompt bubbles use soft rounded corners around 8–10px in the 1400 × 1000 template, while a wrapper that only groups other marks takes no chrome.
- No group chrome. A container drawn only to group other marks takes no fill, border or accent rule. A content card may pair a quiet surface with a complete, even branch-colored outline when both carry meaning. Do not use an isolated thick left or right border, a rounded vertical accent rail, an accent top-rule, shadow or gradient. Use the full outline, tint, badge, label or connector to carry emphasis. A solid prompt bubble needs its fill only.
- Manrope for every label, on charts and diagrams alike. Use sentence case for small labels with modest or no tracking; avoid all caps except established acronyms, model names and literal source strings. Titles, card names and body text also use Manrope. Monospace is not a label face here — use it only to depict literal material such as a raw dataset row, code string or token mapping like `-pril → ACE inhibitor`.
- No eyebrow bar stacked above a title. Fold the category into the title with a colon (`Predictive data debugging: catch the wrong lesson before training`) or drop it.
- Declare the type roles once — board title / card title / body / sub-label / micro-label — and let per-class rules set colour, alignment and layout only, never size, weight, tracking or case.
- Omit ornamental interface glyphs from static diagrams. An icon must encode a distinct concept that the adjacent title or copy does not already state.
- Keep one compact provenance line where needed. Drop self-certifying or redundant microcopy such as `Exact excerpts`, `ellipses marked`, `Complies` or `Refuses` when the source line, visible ellipses or response text already makes it clear.
- Use a solid teal speech bubble with beige `#faf2e9` text for a quoted human prompt or shared input. In a branching comparison, carry each branch color through its connector, arrowhead, card border and focal token; keep the branch names in words so color is not the only channel.
- For a product-specific deliverable, use the product's accent as the focal color: OlmoEarth green `#0fcb8c` in OlmoEarth diagrams, Asta's accent for Asta. Pink stays for general comms and for a single tracked callout inside a product diagram.
- Use WeasyPrint only when a branded PDF is required.

## Chart Checks

- Title names the key comparison.
- Subtitle names benchmark/task, metric, and whether higher or lower is better.
- Values and units are visible.
- Footnotes cover caveats, source, scoring, cost assumptions, and methodology.
- Bars are sorted by metric direction unless the user specifies a fixed order.
- Tables preserve exact model names and versions; winners use bold plus underline.
- Scatter labels sit close enough to dots that association is unambiguous.
- Cost, latency, and compute are first-class dimensions when relevant.
- Every font the file loads is accounted for. Manrope carries a data chart on its own; a monospace in the font link is the tell that a diagram device leaked into a chart. A second face is justified only when it is doing depictive work — a serif for a quoted passage from a book, say — never for labels.
- Chart titles and captions avoid AI-smooth mood language. Name the comparison, metric, source, and direction instead.
- For tradeoff stories (accuracy vs. memory, accuracy vs. cost, accuracy vs. latency), consider a Pareto frontier chart. The frontier is a common Ai2 form when the contribution is a favorable point on the curve, not a single-axis winner.
- Captions are full sentences that state the insight ("Model A keeps accuracy within 1 point of Model B at one third the measured cost"), not just axis labels.
- The Ai2 model or focal system is highlighted (pink, or the product accent for a product-specific deliverable); comparison systems sit in neutral teal or muted gray. Highlight one system per chart unless the chart is explicitly about a family.
- For explanatory diagrams, run the checks in `references/explanatory-diagrams.md`: archetype-appropriate geometry, no group chrome, one focal accent plus neutral structural teal, continuous connectors, clear arrowheads, and content cards aligned to a shared grid.
- Every connector terminates cleanly at its arrowhead or destination. No line continues beyond an arrowhead, touches a rounded corner, or collides with a card border; verify the rendered pixels at the delivery viewport.
- Colour never carries meaning alone — every coloured state also carries a word, an arrow, or a glyph — and one hue means one thing per figure. Measure contrast: beige on speech teal `#1c5b5f` is 6.99:1; dark teal on the pink tint `#fef6fa` is 13.01:1; pink `#f0529c` on that tint is 3.09:1 and is reserved for large/bold focal tokens and graphic strokes.
- Every label names its subject and its agent. `Pushed toward`, `ranked them`, `run through these`, `differs`, `kept` and a bare `concepts` all failed a read-aloud review; see `references/diagram-legibility.md`.
- Show each idea once. After a shared input splits, begin each branch at its first meaningful transformation and end with a self-contained outcome; delete identity cards, headings and footers that merely restate the branch.
- Keep a simple editorial fork to 4–6 total nodes, counting the shared input. Delete pass-through steps even when branch lengths become unequal, and split the idea into another diagram rather than shrinking or padding the board.
- End parallel branches on different, branch-specific assertions; use no gray for an active branch, no more than two literal-only monospace spans, and confirm the full structure survives a 50% blurred or squint test.
- A label rewritten twice is a form problem. Change the mark rather than the caption.
- Schematic geometry says so. Generated point positions carry "drawn for legibility, not plotted from the study's data" in the caption or alt text — or better, use a named chain instead of a point cloud for a general reader.
- Verify the rendered pixels, not the DOM: headless render, then probe for equal card heights, clean padding and no overflow. A preview pane can serve a stale snapshot.

## Assets

Use templates in `assets/`:

- `assets/benchmark-bar-template.html`
- `assets/benchmark-table-template.html`
- `assets/scatter-cost-score-template.html`
- `assets/stat-grid-template.html`
- `assets/stage-cards-template.html`
- `assets/branching-comparison-template.html`
- `assets/ai2-chart-tokens.css`

Use references only as needed:

- `references/chart-style.md`
- `references/benchmark-chart-language.md`
- `references/explanatory-diagrams.md`
- `references/branching-comparison.md`
- `references/diagram-legibility.md`
- `references/varnish-theme-colors.md`
- `references/examples.md`

## Related Skills

When the chart carries a benchmark claim, route the underlying claim through `ai2-comms-claims-lector` so the visual (absolute + delta + scope, bare-`state-of-the-art` handling, closed-model descriptors, house-lexicon pairing in captions) matches the cleared claim scope.

Voice authority for chart titles, captions, footnotes, and surrounding copy is `ai2-comms-style-source` — see its `.agent/skills/ai2-comms-style-source/references/claims-and-benchmarks.md` for comparison framing and `.agent/skills/ai2-comms-style-source/references/house-style-patterns.md` for the heading and caption conventions.

For the prose that introduces and interprets the chart, work from `ai2-comms-writer`. When the chart will appear in a cross-posted asset, route the surrounding copy through `ai2-comms-channel-adapter`.
