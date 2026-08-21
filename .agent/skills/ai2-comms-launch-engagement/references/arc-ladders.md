# Arc Ladders

**Template — populate before first use.** This file is a fillable template, not a live record. Populate the anchor chapters with current release data before first use; each platform line carries an ordered list of releases that have shipped. The skill locates the prior anchor by walking this file.

Used by `ai2-comms-launch-engagement` to locate the prior anchor and name the next pointer. Update within a week of every platform-line release. A stale ladder produces stale arc placement.

## How to populate

For each platform line below:

1. Confirm the through-line. The platform's value proposition does not change release to release; if it has changed, the line forked and this file needs a new section.
2. List anchor chapters in order, most recent last. For each anchor:
   - Release name (with version).
   - The move it made (capability, openness, scale, accessibility, or evaluation).
   - The supplementary assets that shipped with it.
3. Confirm the typical-moves and next-pointers lists still apply; revise if the line's trajectory has shifted.

Maintenance is part of the skill, not a one-time setup. Add a calendar reminder if the team has not already.

## How to use

For a release in flight:

1. Find the platform line (Olmo, Tülu, Molmo, OlmoEarth, or a candidate new line).
2. Read the through-line. The next release continues it or breaks it.
3. Identify the most recent anchor — the prior chapter the writer can name.
4. Identify the gap this release closes or the new direction it opens.
5. Identify the next pointer this release sets up.

If a release does not belong on any existing line, that is a signal to consult `ai2-comms-style-source` and `.agent/skills/ai2-comms-style-source/references/platform-positioning.md` before drafting. New lines need explicit positioning.

## Olmo line

**Through-line:** fully open language models — weights, training data, training code, evaluation, recipes. Openness is the platform.

**Anchor chapters (ordered, most recent last):**

- `[initial Olmo release]` — establishment of the open-everything posture.
- `[Olmo iteration]` — populate: release name, the move it made, supplementary assets.
- `[most recent Olmo anchor]` — populate: release name, the move, supplementary assets shipped.

**Typical moves on this line:** scale, training-data openness, recipe transparency, eval coverage, accessibility (smaller models, deployable footprints).

**Typical next pointers:** larger or smaller siblings, longer-context variants, instruction-tuned variants, domain-specific variants, evaluation extensions.

## Tülu line

**Through-line:** open post-training — datasets, recipes, and models for instruction-following, preference tuning, and alignment, with the full pipeline visible.

**Anchor chapters (ordered, most recent last):**

- `[initial Tülu release]` — establishment of the open post-training posture.
- `[Tülu iteration]` — populate.
- `[most recent Tülu anchor]` — populate: release name, the move, supplementary assets shipped.

**Typical moves:** new alignment technique made open, dataset expansion, recipe simplification, eval suite extension.

**Typical next pointers:** application to a new base model, new alignment objective, evaluation deep-dive.

## Molmo line

**Through-line:** open multimodal models — vision-language with open weights, training data, and recipes that the community can build on. Grounded multimodal understanding (pointing, tracking, segmentation, spatial reasoning) is the differentiator.

**Anchor chapters (ordered, most recent last):**

- `[initial Molmo release]` — establishment of the open multimodal posture.
- `[Molmo iteration with pointing]` — populate.
- `[Molmo iteration with video]` — populate.
- `[most recent Molmo anchor]` — populate: release name, the move, supplementary assets shipped.

**Typical moves:** new grounding capability (pointing, video, spatial understanding, 3D), data openness extension, eval coverage, accessibility, open vision encoder.

**Typical next pointers:** capability extension, scale variant, integration with downstream tooling, encoder openness.

## OlmoEarth line

**Through-line:** open foundation models for Earth observation — geospatial data, training pipelines, and downstream applications with the openness Ai2 brings to language.

**Anchor chapters (ordered, most recent last):**

- `[initial OlmoEarth release]` — establishment of the line.
- `[OlmoEarth iteration]` — populate.
- `[most recent OlmoEarth anchor]` — populate: release name, the move, supplementary assets shipped.

**Typical moves:** new data modality, downstream task expansion, partner integration, eval coverage.

**Typical next pointers:** application studies, partner deployments (subject to approval), capability extension.

## Candidate new lines

A release that does not extend an existing line is a new-line release. These need:

- Explicit positioning consult with `ai2-comms-style-source` and `.agent/skills/ai2-comms-style-source/references/platform-positioning.md`.
- A stated through-line the next release on this line will continue.
- A first-anchor framing — what does this release establish that future chapters extend.

When a candidate line ships a first anchor, promote it to its own section above with the same structure (through-line, anchor chapters, typical moves, typical next pointers).

Populate this section with lines under development that have not shipped a first anchor yet. Leave the section empty if there are no candidate lines.

Do not draft a new-line release as if it were an existing-line chapter. Do not draft an existing-line chapter as if it were a new-line release.
