# Chart Examples

## Bar Chart Caption

Title: MolmoWeb narrows the gap on web navigation tasks

Subtitle: Success rate across reported web-agent benchmarks. Higher is better.

Footnote: Scores come from the cited paper unless otherwise noted. Harnesses and retrieval setups differ across benchmarks, so cross-suite comparisons should be read as directional.

## Cost And Score Caption

Title: Similar benchmark score at lower measured average cost

Subtitle: Score versus average cost per problem in these runs. Higher score and lower cost are better.

Footnote: Costs use the provider pricing and run settings reported in the source table. Failed or retried runs should be included only if the source includes them.

## Table Note

Bold and underline the winning model in each benchmark column. If the winner changes after source data updates, flag the change in revision notes.

## Explanatory Diagram Exemplars

Use the approved general-comms branching comparison plus the OlmoEarth product diagrams as the reference set for the archetypes in `references/explanatory-diagrams.md`.

- **Branching comparison** — *When a model reads a drug’s class from its name—not its knowledge.* Centered two-line claim, shared prompt in a solid teal speech bubble, balanced pink and teal paths, equal treatment for corresponding softly rounded cards, and a different bold terminal assertion on each branch. See `references/branching-comparison.md` for the full specification and `../assets/branching-comparison-template.html` for the ground-truth render.
- **Architecture / data-flow** — *OlmoEarth Datasets: one metadata index over many providers.* Deck: "A single searchable catalog of global satellite imagery." Grouped zones (`■ Satellite data providers`, `■ OlmoEarth datasets service`, `■ Downstream consumers`), provider logos in neutral cards, cadence labels only where they add information (`poll upstream index / ~every few min`), and green carried by the focal service mark rather than a wrapper panel.
- **Numbered stage cards** — *Data acquisition → Run inference → Postprocessing.* Softly rounded content cards `01 / 02 / 03` joined by clean terminating arrows, with `CPU` / `GPU` badges and sentence-case footer classifications (`Heavily I/O-bound`, `Heavily GPU-bound`, `CPU-bound`); the GPU stage carries the green on its border and badge as the bottleneck.
- **"By the numbers" stat grid** — *Continent-scale inference run, by the numbers.* A 2×4 tile grid, each tile with a Manrope 700 sentence-case eyebrow (`Coverage`, `Unit economics`, `Serial equivalent`, `Result`), a large dark-teal number with a small unit (`22.2 M km²`, `$0.000164`, `4,737 h 14m`, `155 ×`), and a plain descriptor.
- **Two-stage / nested decomposition** — *OlmoEarth: two-stage partitioning.* Area → partitions → model-sized windows, with one partition outlined in pink and `followed in Stage 2`, a summary table (`Stage / Partition unit / Maps to / Optimized for`), and an overlap-reconciliation footnote.
