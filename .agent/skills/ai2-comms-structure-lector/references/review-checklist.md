# Structure Review Checklist

## Openings

A good opening gets to the point quickly. It should not begin with broad context about AI progress, generic institutional language, or a claim that could fit any launch.

Flag AI-smooth openings that create mood before facts: journey, moment, movement, new era, where X meets Y, not just X but Y, meaningful experience, or abstract stakes with no artifact named.

## Framing

Lead with the real contribution. For example, if a paper's contribution is a framework, do not lead with a single experimental result. If an adoption story matters because it shows durability, do not frame it as a badge.

## Redundancy

Cut repeated claims across:

- Title.
- Subtitle.
- First paragraph.
- Chart caption.
- Footnote.
- Social copy.
- Update banners.

Keep the clearest version where the reader needs it most.

When a headline or update banner states the central fact (a date, a number, a setup), the body should not restate it. Let the headline carry it; use the body for substance and refer back only if the reader genuinely needs the reminder.

- Avoid: headline `Extended through July 31`, body `Early access is extended through July 31, giving more time ...`
- Prefer: headline `Extended through July 31`, body `Early access stays open until then, giving more time ...`

Test: does the body repeat a number, date, or setup already named in the headline or banner? If yes and the repeat is not load-bearing, cut.

## Image-Claim Correspondence

When a visual accompanies a post making a specific claim, the visual must depict that claim's subject. A tweet about one system's numbers paired with a screenshot from a different system is a flag.

Test: name the claim's subject. Does the image show that subject? If not, flag for the image to be replaced or the claim to be rescoped.

See `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (Image-Claim Correspondence) for the matching channel-side rule.

## Update Banners

When a post carries a recurring update banner (`Update [M/D]: ...` per the house style), each new banner either supersedes the prior one or stacks above it.

Default: replace, not stack. If the new banner supersedes the prior banner's facts, replace the prior banner rather than leaving both visible. A stacked sequence of `Update 3/2: Extended for three more months` then `Update 4/15: Extended again` then `Update 5/28: Extended through July 31` reads as an unsettled program, not a healthy iterative roadmap.

Stack only when the prior banner is independently true and worth a visible changelog. Weigh the churn optics: visible stacks of `extended again` notices on logistics or credit posts signal instability; visible stacks of `code release added`, `LeRobot integration added`, `evaluation harness updated` on a model post signal active maintenance and are fine.

Test: does the new banner supersede the prior banner's facts? Replace. Is the prior banner independently true and a useful changelog entry? Stacking can be justified, but weigh churn optics.

## Section Flow

Each section should advance the argument. If a section restates the premise, merge or cut it.

If a paragraph would still read naturally after swapping in a different Ai2 project, it is probably too generic. Ask for source-specific detail or cut it.

## Cadence Uniformity

Some AI-speak is structural rather than lexical, so it survives a line-level review. The draft has no bad sentence in it; it has the same sentence over and over. Read for shape, not wording:

- Every enumeration is three items long.
- Every paragraph runs three or four sentences of roughly equal length, with no short one anywhere.
- Every section opens with a context sentence, then the claim, then a summarizing line.
- Every long sentence joins its clauses with `and` rather than with a period or a subordinating word.

Test: tabulate the draft's shapes — list lengths, sentences per paragraph, sentences under twelve words, clause-joining `and`s per sentence, and each section's opening shape. Uniform columns mean the cadence came from the drafting rather than from the material. Fix at the level that is uniform: vary list lengths, break one paragraph early, cut one long sentence at its `and`, open one section on the claim.

This is the structural counterpart to the countable tells in `.agent/skills/ai2-comms-style-source/references/ai-prose-to-avoid.md` (Rule Of Three As A Default, And-Chained Clauses And Thin Punctuation), and it overlaps `.agent/skills/ai2-comms-writer/references/revision-passes.md` Passes 2 and 4, which run the same list-length and short-sentence counts while the writer revises. Two of the shapes above fall outside those passes: the repeated section template, and paragraph-length uniformity beyond the short-sentence count. Run the full tabulation anyway — review fires in parallel with drafting, so do not assume a pass ran, and it is the columns going uniform together that marks the cadence as drafting rather than material.

## Idea Diversity

If the draft began from AI brainstorming, check whether the model picked the thesis before the source did. Smoother outlines often converge on familiar frames: AI as collaborator, open science as movement, benchmark as trust story, release as new era. Preserve the more specific source-backed angle, especially an odd limitation, negative result, narrow audience, or surprising failure mode.

## Canonical Arc

Most Ai2 launch and research posts follow this order: problem or context, announcement and core claims, technical deep dive, evaluation and results, artifacts and CTAs. Check whether the draft follows this arc or has a clear source-driven reason to deviate (e.g., a pure benchmark release that collapses technical and evaluation sections, or a tooling post that leads with usage).

Heading cadence: subheadings every 300–500 words; sentence case, descriptive, seven words or fewer. Purely atmospheric headings that carry no information (`the road ahead`, `our journey`, `meeting the moment`) should be rewritten; a forward-looking heading is acceptable when the section under it delivers concrete next-step content (rollout plan, what ships next, roadmap).

Limitations parity: constraints should surface inline at the moment the corresponding strength is described, not corralled into a closing limitations section.

For full patterns, see `.agent/skills/ai2-comms-style-source/references/house-style-patterns.md`.

## Newsletter Structure

When the draft is a newsletter (lead story plus news roundup plus optional event coverage), apply the format checks from `.agent/skills/ai2-comms-style-source/references/newsletter-format.md`:

- Headline takes `Introducing [Product]—[quantified benefit]` form. Mood-only newsletter headlines are flagged.
- Opening sentence is announcement-first with an em-dash and a defensible strong claim. Hedge openings (`We're excited to share...`) are flagged.
- Lead paragraph opens with the strongest benchmark result using absolute + delta + scope, followed by a `That means...` practical translation sentence.
- Peer projects (open or closed weight) are named neutrally; closed-model editorializing is flagged.
- `Fully open` and other house-lexicon phrases carry their concrete artifact mechanism.
- Closing position uses the two-sentence canonical form (`We think [X] is the future of the field. We're proud to make this strong contribution to it.`) or the longer research-blog variant. Single-sentence closings are flagged as too thin.
- Roundup items are two to three sentences each with a single CTA. Items inflated into mini-launch-blogs are flagged.
- Roundup items lead release contents (`Phase 1 includes eight model simulations...`) rather than findings (`AI climate models can match or beat conventional models`). Findings framing in a roundup is flagged.
- Event coverage carries practical specifics (day, date, time, speakers, affiliations, booth numbers) and closes with the practical `We look forward to seeing you there!` form. Purely atmospheric event blurbs that carry no specifics are flagged; a forward-looking phrase that points to specifics (booth number, panel topic, demo focus) is fine.

## Cut Beats That Restate Framing

Test every sentence against: does this supply a new fact, or restate the framing? If it restates, cut.

Recurring failure modes flagged in past reviews:

- IFBench saturation observation that just restates the value framing without adding a fact.
- PointCheck `chose open models to make this possible` clause that just restates the openness framing.
- `Why this matters` beats that restate openness or community without naming a concrete mechanism.

The test is mechanical: name the fact the sentence supplies. If you cannot name one, cut.

## Vague Key Noun Audit

Flag abstract key nouns and ask for specifics:

- `the shared dataset` → name the dataset and its scale.
- `the work` / `the contribution` / `the data` → name the artifact.
- `the model` → use the explicit product name when antecedent has drifted.

Vague abstract nouns need to be replaced with concrete specifics or kept only when concision genuinely outweighs precision. Default to specifics.

## Generic Example Audit

An illustrative example should use specific, domain-grounded detail, not a generic placeholder.

- Avoid: "a query like `list every boat in the Port of Seattle`".
- Prefer: "a query like `what transshipments happened in my waters today?` — does the agent reference the correct Exclusive Economic Zone and pull the last 24 hours from the right part of the database?"

Test: does the example name real entity types and a realistic query shape, or is it a stand-in that would fit any product? Replace stand-ins with domain detail. For practitioner audiences, prefer the domain-precise term with a first-use gloss over a softened synonym.

## What's Not In The Draft

After each compression pass, audit what got cut against what could be missed. Ask: does the reader lose anything essential? If a cut beat was load-bearing, restore it.

Common cuts that may need restoration:

- A deployment partner's specific use case when it grounds the abstract release claim.
- A scope qualifier that changes the meaning of a benchmark claim.
- A caveat that prevents reader over-extrapolation.

Common cuts that do not need restoration:

- Marketing connectors (`This is the result of our continued commitment to ...`).
- Restated framing without new facts.
- Acknowledgments and contributor lists (move to blog).
- Limitations in newsletter format (move to blog unless they materially affect the reader's takeaway).

The newsletter format may legitimately omit limitations that the blog format carries. Limitations are first to be cut when compressing from blog to newsletter, unless they change the reader's takeaway.

## Compression Discipline

Newsletter from blog source typically compresses 80–90%. A newsletter lead lands around 300–400 words from a 2,000–4,000 word source. That is normal.

Keep, in priority order:

1. Product identity in one sentence.
2. Openness or mission framing.
3. Top headline claim with proof.
4. One concrete deployment or use proof point.
5. Dataset or artifacts if release-relevant.
6. Integration or accessibility note.
7. Closing vision plus Ai2 role.

Cut, in priority order:

1. Technical mechanism details.
2. Limitations (unless reader takeaway depends on them).
3. Peer-project comparisons (keep most-recognizable competitor name if needed).
4. Percentage benchmarks (keep ratios like `37x`; drop `87.1%` unless headline).
5. Hardware specifications.
6. Methodology and research lineage.
7. Acknowledgments and contributor lists.

Stripping test: can a wide-audience reader explain what the release is, understand why it matters, and recall one concrete proof? If yes, the compression worked. If no, restore a grounding beat.

## Approval-Gate Re-Check

Mid-review, re-check approval status on named institutions, partner deployments, individual researchers, and adoption claims. Approval can change during a session. A name omitted in a first pass may be approved by closing pass. Surface the status next to the addition; do not assume initial decisions persist.

For individual non-Ai2 developers: default-omit (see `.agent/skills/ai2-comms-style-source/references/approval-gates.md`). When a roundup names an individual, flag for either removal or approval clearance.
