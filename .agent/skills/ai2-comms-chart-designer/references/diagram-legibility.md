# Diagram Legibility

`references/explanatory-diagrams.md` covers the visual system. This file covers whether the diagram
teaches — the rules that decide if a general reader understands it in a few seconds.

Read it whenever a diagram has to explain a method to someone who does not already know
the method's vocabulary.

## Contents

- Density Budget
- Show Each Idea Once
- Make The Structure Survive The Thumbnail
- Let Shape Name The Role
- Name The Subject, The Agent, And The Object
- A Label Rewritten Twice Is A Form Problem
- Prefer A Named Chain Over A Point Cloud
- One Hue, One Meaning, Per Board
- Color Is Never The Only Channel
- Measure Contrast On Filled Labels
- Verify The Rendered Pixels
- Record Provenance In The File

## Density Budget

A process diagram grows by accretion. Each clarifying answer adds a label, each new label
invites another question, and the artboard ends up a technical poster that nobody reads at
a glance.

As a general editorial ceiling, keep one flow, fork or process figure to 4–6 total nodes,
counting any shared input. If the idea needs more, split it into separate diagrams rather than
shrinking every mark.

Cap a three-step process diagram at: title, one subtitle, three cards, one sentence per
card, one example area per card, one closing band. Anything beyond that belongs in the
article that carries the diagram.

When the note is that a diagram is too dense, refine the layout rather than the word count.
Alignment, a shared internal grid, and one connected path buy more comprehension than
another sentence does.

Test: count the elements inside one card. Two examples, or a table, is over budget.

Anchor: a three-column pipeline accumulated nested example cards, method names, a
four-item intervention list and a capabilities-and-safety table, and was cut back to three
cards plus one outcome band. The cut version explains more.

For a two-path comparison, cap the board at one title, one shared prompt, one mechanism card
and one outcome card per branch. Omit the deck, branch headings, legend and footer when the
title and cards already carry the comparison. The approved drug-name diagram is the density
anchor; see `references/branching-comparison.md`.

## Show Each Idea Once

Begin each branch at its first meaningful transformation. Do not spend a card repeating a
shared input, then repeat the branch meaning again in a heading or footer.

After a shared input splits, remove identity cards, branch headings and footer labels that
only restate content already visible. Let alignment, connectors and one focal accent preserve
the comparison. Put the distinguishing mechanism in the first branch card and make the final
outcome card self-contained.

Delete a pass-through node even when doing so leaves unequal branch lengths. Symmetry never
justifies a step whose content is unchanged. Parallel branches must also end on different
terminal text: put the branch-specific result in the last node instead of repeating a shared
verb and moving the real contrast into a footer.

Test: cover the repeated card or label. If the path still reads correctly from shared input
to outcome, delete it.

Anchor: a drug-name shortcut diagram repeated `lisinopril` in two `DRUG NAME` cards after the
prompt already named it, then repeated both branch meanings in footers after the outcome
cards. Removing both layers left the clearer path: question → mechanism → self-contained
outcome.

## Make The Structure Survive The Thumbnail

An editorial diagram is often seen first in a feed, on a phone or at half scale. Blur the text
or squint at the render: the fork, loop or chain must remain recognizable before any copy is
legible. If it becomes a cluster of boxes, remove marks or strengthen the structural path.

Use proximity to reinforce that path. The gap between connected nodes must be smaller than the
open gap separating branches or groups. Generous whitespace should clarify the composition,
not sever a connector into two apparently unrelated halves. On narrow screens, keep the whole
structure visible; do not hide one side of a comparison behind horizontal scrolling.

## Let Shape Name The Role

Use a distinct silhouette for a user-facing input, such as a filled speech bubble with a tail,
and rounded rectangles for process or outcome steps. If a label exists only to say `INPUT`,
`QUESTION` or `PROCESS`, the shape or placement is doing too little; fix the mark and remove the
label.

## Name The Subject, The Agent, And The Object

A compressed label drops the actor. The writer still reads it correctly because the writer
knows the subject; the reader gets a riddle.

Every label answers: who does this, to what, and with what result. Failures and their
fixes, all from one review of a single diagram:

- `Pushed toward` — pushed who? → `Training makes the model respond more like this`
- `Ranked them` — ranked how? → `Picked one and rejected the other`
- `Run through these` — these what? → name the two instruments, then gloss what each does
- `Differs` / `Kept` — differs from what, kept where? → `Chosen and rejected differ`, then
  `keep the concept`
- `Concepts` — define it at first use → `the concepts the model represents`
- `the run` → `the training run`
- `each side` → `chosen vs rejected responses`
- `as the dataset labels them` — a dataset carries labels, it does not apply them → name the
  agent, or describe the state without inventing one

Test: read each label cold and ask "of what?" and "by whom?". If the artboard has no answer,
the label is unfinished.

## A Label Rewritten Twice Is A Form Problem

When two attempts at wording still leave a reader asking what a mark means, the form is
wrong, not the words.

Change the mark. A pair of overlapping density curves took five captions and still read as
jargon; two labeled bars took none, because a longer bar means more without a glossary.

Test: count the rewrites on one label. At two, stop rewriting and change the form.

## Prefer A Named Chain Over A Point Cloud

Scatter and cluster maps look authoritative and say little to a reader who does not already
know the embedding. Position, proximity and cluster shape each carry meaning that has to be
taught before the figure can be read.

Use a labeled causal chain when the point is a relationship: pattern in the data →
predicted effect → likely behavior. Keep point clouds for readers who work with the
embedding.

When schematic geometry does ship, say so in the caption or the alt text — positions drawn
for legibility, not plotted from the study's data. Generated coordinates with no such line
read as measurements.

Anchor: two UMAP-style maps whose matching-numbers convention had to be decoded before the
finding could be read, replaced by two trace cards that name the same two findings in words.

## One Hue, One Meaning, Per Board

A second semantic axis borrows a color that is already in use, and the board contradicts
itself.

Hold one meaning per hue on a board. When a diagram needs both a data label (chosen vs
rejected) and a judgment (wanted vs unwanted), give the judgment a channel that is not
color — a glyph, a weight, a border — or carry the data label in words.

Test: say what each color means in one sentence. If the sentence needs "and also", the hue
is overloaded.

Anchor: pink meant `rejected` on the response cards and `wrong` on the verdict strips, so a
pink strip sat under a teal-ruled card and the pair looked swapped.

## Color Is Never The Only Channel

Every colored state also carries a word, an arrow, or a glyph, so the diagram survives
greyscale and color blindness. An up arrow beside "More likely" states the direction twice.
A tint alone states it once, and only to some readers.

## Measure Contrast On Filled Labels

A brand fill under dark text can fail contrast while looking fine to whoever built it.

In the approved branching comparison, beige `#faf2e9` on speech teal `#1c5b5f` gives 6.99:1,
dark teal `#0a3235` on pink tint `#fef6fa` gives 13.01:1, and dark teal on white gives
13.81:1. Pink `#f0529c` on the tint gives only 3.09:1, so reserve it for large/bold focal
tokens and graphic strokes; normal-sized explanatory copy stays dark teal.

Test: when two filled labels sit side by side, match their contrast ratios rather than their
saturation. A pair at 4.2 and 6.5 reads as one loud label and one quiet one.

## Verify The Rendered Pixels

Layout bugs hide from the DOM and from the preview pane.

Render headless at 2x, then probe the image: find board bounds by scanning one column for
the canvas color, confirm equal card heights by comparing the y of the same element in each
card, and check bottom padding by counting ink in the last rows.

A preview pane can serve a stale snapshot — one reported a deck that had already been
deleted and missed a connector that had been added. Trust the render just produced.

Test after every structural edit: screenshot at the same window size before and after, then
diff. A diff taken at two different window heights is not a diff.

Anchor: `.up` and `.dn` served both a prediction list and a comparison table with opposite
intended colors. The table's rules bled into the list and painted "Less likely" pink,
inverting the meaning. The DOM was correct throughout.

## Record Provenance In The File

A diagram outlives the conversation that produced it. Keep an HTML comment at the top of
the file holding the row ids or source quotes behind every example, which lines are
plain-language renderings rather than quotes, the terms deliberately kept off the artboard,
and the alignment contract that holds the layout together. The next editor cannot re-derive
those reasons, and a stale comment that contradicts the code is worse than none — update it
in the same pass as the markup.
