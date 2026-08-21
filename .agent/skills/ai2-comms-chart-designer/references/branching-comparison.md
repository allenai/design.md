# Branching Comparison Ground Truth

Use this reference for two-path causal comparisons: one shared prompt or input, two
different mechanisms, and two outcomes.

The approved ground truth is `../assets/branching-comparison-template.html`, which reproduces
the design signed off on 2026-08-17. The palette, composition, and type rules below are the
normative specification; the template is that specification rendered. When an older generalized
diagram rule conflicts with this reference, this reference wins for the branching-comparison
archetype. Start from the template.

## Contents

- Palette
- Composition
- Content Marks
- Shape Semantics
- Type
- Meaning And Flow
- Render Checks

Keep one idea per board. Count the shared input and every process or outcome card as a node:
use 4–6 nodes total, with five as the canonical pattern. If the explanation needs more than
six, split it into separate diagrams.

## Palette

| Role | Color |
|---|---|
| Canvas | `#faf2e9` |
| Primary text | `#0a3235` |
| Neutral connector and border | `#105257` |
| Prompt speech bubble | `#1c5b5f` |
| General Ai2 accent | `#f0529c` |
| Accent-card surface | `#fef6fa` |
| Neutral-card surface | `#ffffff` |

Use these values exactly. The ground truth establishes `#f0529c` as the general-diagram
pink; it supersedes the older `#f45096` override for this archetype.

The sampled palette in derivative guidance is approximate; the measured roles above win.
Do not collapse primary ink, neutral-branch teal and speech-bubble teal into one token. A live
fork uses two real palette colors, never color versus gray. Reserve gray for a genuinely
disabled or intentionally de-emphasized state.

## Composition

- Use a wide 7:5 artboard. The source is 3150 × 2250.
- Center a large, heavy Manrope title in two balanced lines. Write a full claim rather than a
  topic; use a closed-em-dash contrast when it states the idea naturally. Give it generous
  outer margins and a large gap before the diagram.
- Put the shared prompt in a centered, solid speech bubble. Use beige `#faf2e9` text, a small tail,
  soft corners, and no border or shadow.
- Drop one dark-teal trunk from the prompt, then fork into two orthogonal paths with rounded
  elbows. Route the focal path in pink and the comparison path in neutral teal.
- Align corresponding stages to one grid. The canonical five-node template has one mechanism
  card and one outcome card per branch. Match widths, stroke weights, corner radii and internal
  padding for corresponding cards, but never add a pass-through card merely to preserve equal
  node counts. Honest asymmetric branches are preferable to padded symmetry.
- Keep connected nodes closer to each other than the open gap between the branches. Whitespace
  should separate the alternatives without making the flow look disconnected.
- Keep the canvas open. Do not add branch headings, legends, footer labels, explanatory
  captions beneath the frame or a wrapper around the branches. A publication caption may
  still carry source or methodology; it must not hold the branch-specific meaning.

The source proportions are a useful anchor: the prompt body is about 1000 × 208 px; each
content card is about 1000 × 208 px; the columns are separated by about 500 px. Scale those
ratios rather than copying the absolute pixels. The reusable template intentionally tightens
the source's prompt-to-first-row gap so the two halves read as one connected flow.

## Content Marks

- Give process cards soft corners around 8–10 px and a 2 px branch-colored border in the
  1400 × 1000 template (about 4–5 px in the approved export).
- Use `#fef6fa` behind the pink path and white behind the neutral path.
- Let a content card use both a light surface and a border: the surface separates the
  branch from the canvas and the border carries path identity. Do not add a shadow, gradient,
  accent top-rule or outer group panel.
- Carry the branch color continuously through connector, arrowhead and border. Use it inside
  the card only for the focal token or datum.
- Give both active branches the same stroke weight, corner radius and visual scale. Do not imply
  preference with a heavier line, larger box or brighter arrow; state the problem case in words.
- End every connector at the target card edge with an arrowhead. Keep connectors behind the
  cards and derive every join from the actual card geometry.

## Shape Semantics

- Put a spoken or typed user input in the solid speech bubble; it is entering the system, not
  acting as step zero inside it.
- Use outlined rounded rectangles for process and outcome nodes.
- If a label is needed only to explain whether a node is an input, process or outcome, change
  the silhouette or placement and delete the label.

## Type

- Use Manrope for the board title, speech bubble, card statements and prose.
- Use sentence case and centered text. Do not add eyebrow labels.
- Use exactly three semantic registers in a simple editorial fork: title, body and optional
  monospace literal. The prompt may scale within the body register, but do not introduce
  small-caps labels, tertiary captions or italic asides.
- Use Roboto Mono only when it depicts literal material, such as
  `-pril → ACE inhibitor`; keep the focal token pink and the rest dark teal. Use monospace at
  most twice on the board and never for explanatory body copy.
- Set the shared prompt as large beige `#faf2e9` text inside the bubble without decorative quotation
  marks.
- Keep node copy to a short phrase, usually 2–8 words and never more than two lines, with no
  terminal punctuation; the user-input bubble is the only exception. Write each outcome as one
  self-contained bold assertion in one typographic role, not a heading plus a lighter
  explanatory caption.
- Highlight the operative substring inside an existing literal or phrase instead of adding a
  separate decomposition node.
- Insert deliberate line breaks to balance the two columns; do not shrink one column's type
  to fit.

## Meaning And Flow

- Show the shared input once, then start each branch at its first meaningful transformation.
- Delete any node whose content is unchanged from the node above it, even when that makes the
  branch lengths unequal. Symmetry never justifies a null step.
- Use pink for the focal shortcut or inference path and neutral teal for the comparison path.
  Keep the mechanism and outcome explicit in words so color is not the only channel.
- Leave connectors unlabeled when the adjacent cards already make the mechanism obvious.
  Label a connector only when it contributes new information such as payload, cadence or
  protocol.
- Keep each outcome self-contained and branch-specific. Parallel branches must not end on
  identical text; the terminal row carries the contrast the reader should remember. Removing
  branch color should still leave the comparison understandable.
- If simplification removes a necessary detail, re-encode it as emphasis or a short clause
  inside an existing card rather than restoring a pass-through node.

## Render Checks

- Compare the finished render with the bundled PNG at the same aspect ratio.
- Squint-test or blur the render and inspect it at 50% scale: the Y, loop or chain must remain
  legible when the text cannot be read. On narrow screens, show the whole composition rather
  than clipping one branch behind horizontal scrolling.
- Confirm equal treatment for corresponding cards, balanced title wrapping, clean speech-tail
  joins, continuous branch lines and arrowheads that meet card edges.
- Confirm that every connected-node gap is smaller than the open inter-branch gap, both active
  branches use real palette colors, and neither branch gains emphasis through heavier geometry.
- Measure contrast rather than eyeballing it: beige on `#1c5b5f` is 6.99:1; dark teal on
  `#fef6fa` is 13.01:1; pink on `#fef6fa` is 3.09:1 and therefore belongs on large/bold
  focal text and non-text strokes.

Before export, ask: can any node or label disappear without losing meaning; do the terminal
assertions differ; is any live branch gray; does the structure survive the squint test; is
monospace used more than twice; and did simplification remove a necessary detail? Fix the mark
or re-encode the detail inside an existing node before adding anything back.
