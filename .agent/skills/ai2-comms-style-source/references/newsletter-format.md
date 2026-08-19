# Newsletter Format

## Purpose

Distilled format for Ai2 newsletters. Read this when drafting a newsletter; pair with `references/house-style-patterns.md` for voice and arc, `references/ai-prose-to-avoid.md` for revision, and `references/newsletter-example.md` for a concrete shape and rhythm reference.

Newsletters are distinct from launch blogs and social posts. A newsletter bundles one lead story (a current release), a news roundup of three to five secondary projects, and event coverage when applicable. The voice and lexicon are the canonical Ai2 voice; what changes is the bundling, the length per item, and the rhythm.

## Anatomy

A standard Ai2 newsletter has three parts:

1. **Lead story** — the current featured release, written tighter than a full launch blog.
2. **News roundup** — three to five short items pointing at recent or ongoing work.
3. **Event coverage** (when applicable) — conferences, panels, demos, booth presence.

The lead story can stand on its own if no roundup or event coverage applies. The roundup and events do not appear without a lead.

## Lead Story

The lead story is a compressed launch blog. It traces the full canonical arc (problem → announcement → technical → evaluation → artifacts → CTAs) but each section is one to two paragraphs, not subsections.

**Headline form:** `Introducing [Product]—[quantified benefit].`

The em-dash is required. The benefit clause carries the concrete claim (`2× data efficiency by rethinking the architecture`). Do not write mood-only newsletter headlines (`The Next Frontier`, `A New Chapter`).

**Opening sentence:** announcement-first form.

`Today we're releasing [Product], a new [size]-parameter [classifier] that [does X]—and [strong direct claim about results].`

The strong claim after the em-dash must be defensible from the body that follows. Avoid hedge openings (`We're excited to share that...`).

**Lead paragraph:** open with the single strongest benchmark result. Use the comparison framing scaffold (absolute + delta + scope), then add a `That means [practical interpretation]` sentence so the reader does not have to translate the number themselves.

**Field context paragraph:** name peer projects neutrally as `recent efforts from projects like [A, B, C, D, E]`. Describe the shared promise of the approach and the specific gap the field lacked consensus on. Position the Ai2 release as evidence that closes that gap. No snark. Closed-weight peer projects get factual descriptors only.

**Evidence paragraph:** carry one more scoped comparison. Common pattern: training throughput parity with an em-dash explanation that the gain comes from the architecture, not from a speed/quality tradeoff. Add one more scoping detail (mid-training, scaling laws, all-domain evaluation).

**Implications paragraph:** state the broader claim with em-dash explanation. Mix theoretical and empirical results when both apply.

**Artifacts paragraph:** name the released stages, weights, intermediate checkpoints, code, and any technical report. Apply the `fully open` paired-mechanism rule.

**Closing position (two sentences):** `We think [X] is the future of the field. We're proud to make this strong contribution to it.`

This is the canonical two-sentence newsletter closing. Variant for longer research-launch newsletters: `We think [X] represents a promising direction for the field, and we want the community to be able to build on what we've found.` Use the two-sentence form when the post is a compressed newsletter; use the longer form when the post leans research-blog.

`Strong` (or `important`, `major`) sits between bare `contribution` (weak) and `biggest` (overclaim, implies a designation Ai2 did not make). A single-sentence closing is too thin for a newsletter; pair the vision sentence with Ai2's role.

**CTAs:** `Learn more` (linked to the blog or paper) plus community CTAs (`Join our Discord | We're now on Reddit!` or equivalent).

## News Roundup

Three to five short items under the `News roundup` header. Each item is two to three sentences, with a clear bold project name, a one-clause classifier, the largest concrete number associated with the project, and a single CTA.

Item form:

- **[Project name]** — one opening clause that says what the project is.
- One sentence packing the biggest number or quantitative signal (`over 230,000 indoor scenes`, `351K real-world procedures from nearly a million web pages`, `7,000-example benchmark`).
- Optional one more sentence covering compatibility, method, or scope.
- CTA: `Try it now` or `Read more`.

Lead each named product release with its name in the body's opening clause, even though the bold project name is already overhead: `OlmoEarth v1.1, our latest family of Earth observation models, cut compute costs ...`. The body restates with descriptive context; the structure is bold-name plus opening-clause-name plus context. Do not skip the body name on the assumption the bold label carries it.

Prefer release-contents framing over findings framing: `Phase 1 includes eight model simulations of the global atmosphere and an initial analysis of how they performed` reads as a release; `AI climate models can match or beat conventional models` reads as editorial. Findings can drift toward sales register; release contents are factual and ground the item.

Roundup items do not need the canonical arc. They are signals, not launches. If an item warrants the full arc, lift it to lead status in the next newsletter. Keep the items in flowing prose so the rhythm matches the rest of the newsletter; reserve bullets for explicit lists inside an item.

Cut `why this matters` beats from roundup items when the beat just restates the openness or value framing without adding a new fact. The reader gets the value from the contents; an additional sentence asserting the value is editorial padding. Test: does the sentence supply a new fact, or restate the framing? If the latter, cut.

## Event Coverage

When the newsletter includes a conference or event:

- Header naming the event and Ai2's role.
- One-sentence framing: `We'll be at [event] in [location] from [dates] with [list of activities].`
- Featured session(s): `On [day], [date] ([time]), [speaker name and Ai2 role] joins [other speakers and affiliations] for [session title]—a conversation about [topic].`
- Booth or demo info: `Find us at [partner] booth ([number]), where [activity and team].`
- Closing line: `We look forward to seeing you there!`

Specifics travel: speaker name, Ai2 role, panel partners (with affiliations), session title, day, time slot, partner booth numbers. These are practical signals, not mood.

## Voice And Rhythm

Newsletter voice is the canonical Ai2 voice, with three rhythm adjustments:

- Em-dashes are used heavily for asides and strong claims. The refined em-dash rule (no repetition or padding) still applies, but newsletters cluster more em-dashes than other formats; that is house style for this surface.
- Sentences are slightly tighter than the launch blog. The rhythm is informational, not literary.
- Numbers carry most of the work. Almost every paragraph holds a concrete number, scope, or named comparison.

## What To Avoid

- Stacked lead announcements. One newsletter, one lead release.
- Roundup items inflated into mini-launch-blogs. If the item warrants a full arc, lift it to lead.
- Purely atmospheric event blurbs (`We can't wait to see you!`) that carry no specifics. The canonical practical close (`We look forward to seeing you there!`) is fine, and a forward-looking phrase that points to specifics — booth number, panel topic, demo focus — is also fine.
- Replacing the em-dash structure with bullet lists. Bullets are fine for explicit lists; the running prose carries the em-dashes.
- Closed-model editorializing. Peer projects (open-weight or closed-weight) get factual descriptors only.
- Multi-product headlines. Co-launches go in the body or roundup, not the headline.
- `Why this matters` beats that restate framing without adding a new fact. Cut.

## Stat-Paragraph Isolation

Headline traction stats (download counts, adoption numbers, accuracy gains, time-since-release proof points) can break out as their own standalone paragraph between conceptual sections. Default is to integrate stats into prose; the exception is when the stat is doing real lift-the-eye work.

Acceptable as standalone:

- Stat is a proof point that lifts the reader's eye.
- Surrounding paragraphs are substantive (the stat is not orphaned by neighboring short paragraphs).
- Stat anchors the closed-vs-open or release-traction framing right after the lead.

Worked example: `Since May 5, MolmoAct 2 and its associated artifacts have been downloaded more than 400K times.` Standalone paragraph between the identity-and-gap paragraph and the performance paragraph.

When reporting download or usage stats that span the headline product plus its supporting artifacts, name both: `[Product] and its associated artifacts have been downloaded more than [N] times`. Distinguishes the headline release from its weights, dataset, code, and other artifacts when the count rolls them up.

## Lead Story Minimum

A newsletter lead story is at least three paragraphs: identity (what the product is and the gap it fills), evidence (performance, deployment, or validation), and openness handoff (artifacts plus closing). Longer leads are normal — six paragraphs is common for a substantive launch (identity, traction stat, performance, deployment plus validation, dataset, artifacts plus integration plus closing).

Roundups stand at one to two paragraphs per item.

## Compression Priority

Newsletter from a 2,000–4,000 word blog source typically compresses 80–90%. A newsletter lead lands around 300–400 words. That is normal, not aggressive.

Keep, in priority order:

1. Product identity in one sentence.
2. Openness or mission framing — why does it matter.
3. Top headline claim with proof.
4. One concrete deployment or use proof point.
5. Dataset or artifacts if release-relevant.
6. Integration or accessibility note.
7. Closing vision plus Ai2 role.

Cut, in priority order:

1. Technical mechanism details (architecture, training process).
2. Limitations (move to blog; newsletter format may omit unless they materially affect the reader's takeaway).
3. Peer-project comparisons (keep only the most recognizable competitor name if needed).
4. Percentage benchmarks (keep ratios like `37x`; drop `87.1%` unless it carries the headline).
5. Hardware specifications.
6. Methodology and research lineage.
7. Acknowledgments and contributor lists.

The stripping test: after compression, can a wide-audience reader explain what the release is to a colleague, understand why it matters, and recall one concrete proof? If yes, the compression worked. If no, restore a grounding beat.

## See Also

- `references/newsletter-example.md` — concrete worked example.
- `references/house-style-patterns.md` — opening forms, canonical arc, hedging forms, comparison framing, CTA conventions.
- `references/ai-prose-to-avoid.md` — revision diagnostic when copy drifts toward AI-smooth.
- `references/claims-and-benchmarks.md` — comparison framing scaffold and benchmark caveats.
