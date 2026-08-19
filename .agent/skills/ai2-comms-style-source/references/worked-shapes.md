# Worked Shapes

Genre shapes distilled from Ai2 drafting passes. Each entry describes the moves that make
the genre work, at a level that transfers to a new subject. Read the entry for the genre you
are drafting before you start — the wrong shape is expensive to fix after the fact, because
drafting a testimonial as a launch post and trimming it afterward produces launch-post bones.

Two genres are carried as full worked examples instead: `references/newsletter-example.md`
and `references/sunset-example.md`. The genres below are described rather than reproduced, so
this file carries no unreleased copy.

## Long-form research blog amplifying a co-authored paper

Runs long, for a broad-but-technical audience. See `references/release-types.md` (Type 9) and
`references/house-style-patterns.md` (First-Person Plural Voice) for the register rules.

- Problem-first opening, then the contribution. State the central tension once, in the
  opening; do not restate it in every paragraph.
- Lead with the collaboration credit — `Together with collaborators at [institution], we
  introduce…` — so the first-person plural reads as the joint team rather than as Ai2 alone.
- Difficulty ramp: plain intro → a named concept section that glosses the borrowed technique
  and defines its terms → the dense setup → results → limitations → forward close.
- Name the outputs concretely before naming the uses. A reader who does not know what the
  method produces cannot evaluate what it is for.
- Gloss bare statistics with their scale (`a correlation of 0.62, where 1 is a perfect match
  and 0 is none`). Scope an emergent finding to its inputs, in a parenthetical rather than a
  defensive paragraph.
- Frame capabilities for a named audience (`For anyone building, studying, or running…`).
- Explain an independent cross-check as independent — say plainly that the checking system
  played no part in building the thing being checked.
- Limitation parity: state the real limits in the close, in practical terms, as findings
  rather than as a quarantined caveats block.
- Close on a CTA with a resolvable paper link. The link is sticky — re-check it every pass
  (see `.agent/skills/ai2-comms-claims-lector/references/claim-review-patterns.md`).

## Testimonial

A short profile of one outside team's work on Ai2 artifacts, usually built from that team's
own interview answers. Format rules live in `references/release-types.md` (Genre Overlays, Testimonial).

- 500–1,400 words, no section headings, continuous prose. The launch-post word budget and
  subheading cadence do not apply.
- Third-person Ai2 when the piece explains what the stack provides, and especially when the
  central finding is a regression in an Ai2 artifact. First-person plural would put `we` in
  the position of narrating both the outside team's finding and a flaw in our own data.
- Needs list, then artifact map, then consequence: one paragraph on what the researchers
  needed, one that maps each need to an artifact with a single definitional sentence, one on
  what the pairing made possible. See `references/house-style-patterns.md` (Cascade And Rhetorical
  Patterns).
- Artifacts before method. The method itself gets two plain sentences and no mechanism gloss;
  the piece is about what openness enabled, not about how the method works.
- Enablement altitude, not results altitude. Verify the dataset sizes, metric values, model
  rosters, and extra case studies during drafting — then cut nearly all of them. What survives
  is one finding, one concrete detail worth remembering, and what the openness let the team do.
- Reader-facing terminology lock: gloss the plain term in the first paragraph and bridge to
  the formal one once, mid-body. The paper's acronym does not carry the piece.
- Scope a regression by its subject, not by a disclaimer. Name the artifact under study; keep
  the affected models generic. A sentence spelling out what the study did not cover reads as a
  bolted-on hedge and re-raises the reading it was meant to prevent.
- Render a partner's formal claim plainly. A term of art from their paper becomes a clause a
  general reader can evaluate.
- Attribute an unattributed Q&A to the organization (`says the [company] team`), not to a
  guessed individual — see `references/approval-gates.md` (Individual Attribution).
- Close on third-person enablement: why publishing more than weights matters, the specific
  things the stack let outsiders do, then a hedged sentence on the partner's continuing work.

## Newsletter

Carried as a full worked example — see `references/newsletter-example.md` for the shape and
`references/newsletter-format.md` for the rules.

One rule is worth repeating here because it cuts across genres: the lead-story headline is the
single structural exception to carrying the source blog's opening form across surfaces. It is
always announcement-first with an em-dash quantified benefit, regardless of how the source blog
opens.
