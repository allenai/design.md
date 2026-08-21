# House Style Patterns

## Purpose

Positive-pattern reference. Read this when drafting; pair with `references/ai-prose-to-avoid.md` when revising. The avoidance file diagnoses what is wrong; this file says what Ai2 prose actually does.

These patterns are distilled from recent Ai2 launch and research blog posts. Match the form to the contribution. Do not pick the form that sounds most confident.

For the newsletter format specifically (lead story plus news roundup plus optional event coverage), use `references/newsletter-format.md` and `references/newsletter-example.md`. Newsletters use the same voice and lexicon as the canonical Ai2 prose but with a distinct headline form, paragraph rhythm, and bundling discipline.

For the typology of release types (research platform, model release, benchmark, dataset, tool, application, update, research blog, newsletter recap), see `references/release-types.md` — that file is the dispatch table the pipeline skill walks during scoping. For Olmo or other platform lines, also engage `references/platform-positioning.md` for the Continue/Stop/Start framing.

## Opening Forms

Three forms cover almost all recent Ai2 launch posts. Choose the one that matches the contribution.

### Problem-First

Most common. Open with a real gap, friction, or unresolved question in the field, then introduce the work as the response. Use when the contribution sits inside a credibility, transparency, or evaluation gap.

Template: `[Concrete fact about the current state of the field.] [Sharp question or problem that follows.]`

The problem must be specific. Not "AI needs to be more trustworthy" but "Existing benchmarks measure single-step instruction following; agents now run multi-step workflows."

### Announcement-First

Open with the release. Use when the contribution is unambiguous and self-evident: a model, dataset, or benchmark whose value the reader can grasp from the name and one descriptive clause.

Template: `[We released | Ai2 released | We're introducing] [exact name], [one-clause description of what it is and the audience it serves].`

Do not stack scope-inflating adjectives. One descriptive clause; let the technical sections carry the case.

### Context-Plus-Stakes

Least common. Open with a short factual paragraph about the surrounding research situation, then name the release and what it changes. Use when the reader cannot evaluate the contribution without the context (e.g., a niche benchmark, a category that did not exist before).

Template: `[One- or two-sentence factual context.] [Release name] [verb] [the specific shift it produces].`

## Canonical Long-Form Arc

Most launch and research posts follow this order:

1. Problem or context.
2. Announcement and core claims.
3. Technical deep dive (architecture, data, method, design decisions).
4. Evaluation and results (benchmarks, comparisons, real-world validation).
5. Artifacts and CTAs (paper, code, weights, demo, community).

Deviate only when the contribution demands it. A pure benchmark release may collapse 3 and 4. A tooling post may lead with usage and push technical depth later.

Word budget: 1,500–4,000 words is the normal range. Subheadings every 300–500 words. Posts over 4,000 words should split into sections with clear navigation rather than running long. The testimonial genre runs shorter and often carries no headings at all; see `references/release-types.md` (Genre Overlays, Testimonial) for that budget.

## Heading Conventions

- Sentence case: capitalize the first word and any proper nouns. Not title case, all-lowercase or all caps. Apply this to headings, labels, captions and UI-adjacent copy; preserve all caps only for established acronyms, model names and literal source strings.
- Descriptive, not clever. The heading should tell the reader what the section actually contains.
- Seven words or fewer.
- Audience tags are allowed and useful: `For developers`, `For researchers`, `For the open ecosystem`.

Example shapes: `Train separately, merge together`, `From model to application`, `For developers`, `Rethinking architecture from the data up`.

Avoid purely atmospheric headings that carry no information (`the road ahead`, `our journey`, `meeting the moment`). A forward-looking heading is fine when the section under it delivers concrete next-step content — a rollout plan, what ships next, a roadmap (`Where we're headed`).

## Audience Segmentation

When a post serves more than one audience (developers and researchers, practitioners and policymakers), split into clearly labeled subsections rather than blending the registers. Use the heading tags above.

Keep audiences merged when the same explanation serves both, or when splitting would create two thin sections that repeat each other.

## House Lexicon

Four phrases recur across recent Ai2 posts. They are signature, not banned. The rule is concrete-mechanism discipline: every use must point to the specific thing that makes the phrase true.

- `fully open` — pair with the artifact list: weights, training code, eval harness, training data, intermediate checkpoints, recipes.
- `reproducible` / `reproducibility` — pair with what can be rerun: the harness, the eval, the training run, the cost measurement.
- `transparency` / `transparent` — pair with what is now visible: training methodology, data sources, scoring setup, evaluation comparison set.
- `community` — pair with the concrete community surface: Hugging Face hub, Discord, GitHub discussions, a public benchmark, a contributed dataset.

Without the paired mechanism, these phrases become moralized vagueness. See the corresponding entry in `references/ai-prose-to-avoid.md`.

Across-thread pairing: on a threaded surface (X, Bluesky), the artifact-list pairing for `fully open` may live in the immediately following tweet, not necessarily the same tweet. Test: is the pairing present within the next tweet a reader sees? Anchor: a hook tweet says `Olmo, our family of fully open language models` (no list); the very next tweet says `full openness — training data, weights, code, & more` (the pairing). The reader sees the mechanism before scrolling away.

## Hedging Forms

Hedge implications. Do not hedge facts. Trained-token counts and benchmark scores do not need hedging; what those numbers mean for downstream behavior usually does.

Standard forms:

- `We observe that ...`
- `Our results suggest ...`
- `We find that ...`
- `While [limitation], [achievement still holds].`
- `Despite [obstacle], [progress].`

These read as measured confidence, not weakness. Avoid stacked hedges (`we tentatively suggest that perhaps ...`) and avoid hedges that smuggle in unsupported scope.

## First-Person Plural Voice

Use institutional `we` and `our` for Ai2-owned actions in body prose: `we released MolmoAct 2`, `we brought online the compute infrastructure`, `we hired Cortex AI to independently validate`. The team is the agent. Recent posts almost never use named bylines on the blog itself; credit is collective, in the body or an acknowledgments section.

- Collective credit forms: `developed with [partner]`, `in collaboration with [team]`, `with contributions from [orgs]`.
- Avoid hierarchical credit: `led by [name]`, `under the direction of [name]`, unless the source material explicitly supports it.
- Individual researcher quotes are fine when scoped to the quote, but should not retitle the section into a profile.

Exception: keep `Ai2` (third person) when the sentence distinguishes Ai2 from other actors. `Ai2 brought OMAI online in partnership with Cirrascale, funded by NSF and NVIDIA` works because the sentence names other actors with different roles. A bare `Ai2` substitution for `we` in single-actor sentences reads as press-release distance and should be reverted to first-person plural.

Second exception: amplified-external work (release-types.md Type 11). When Ai2 is amplifying research it did not solely produce and is not officially releasing — an external or partially-affiliated paper, a third-party project — voice shifts to arms-length third person. The authors did the research, the paper finds, the system does. Do not absorb the authors' actions into `we`. `In our testing` is wrong when the evaluation was the authors' — use `in the paper's evaluation` or `in the authors' testing`. `Our demo` is wrong on an author-built unofficial demo — use `the authors' demo` (and carry the unofficial-artifact disclaimer from `references/approval-gates.md`).

Third exception, the other direction (Ai2 co-authored): when Ai2 researchers are co-authors and Ai2 publishes the post as its own research communication, use first-person joint-team `we`, and lead with the collaboration credit so `we` reads as the joint team rather than Ai2 alone: `Together with collaborators at [institution], we introduce [X].` Pair it with an academic/technical register faithful to the paper. The arms-length third person (second exception) applies only when Ai2 did not co-author. Anchor: a paper led by a university collaborator with two Ai2 co-authors opened `Together with collaborators at the University of Washington…, we introduce DiScoFormer`, first person throughout for the research, the university credited up front. See `references/release-types.md` Type 11 (First-party exception).

Register seam on short surfaces (judgment note): within one short surface (a single thread, a single LinkedIn post), mixing `our [X]` and `Ai2's [Y]` for Ai2's own artifacts can read as a seam. Prefer one register unless a clause genuinely distinguishes Ai2 from other actors (the first exception above still stands; a closing declarative using `Ai2's` remains acceptable). Anchor: a thread that opened with `our family` (tweet 1) and closed with `Ai2's full openness` (tweet 5) read as two registers — the call to keep, smooth, or accept the seam is the editor's.

Test: did Ai2 perform this action, or did the authors? Is co-ownership framing (partnership, OMAI/NSF, funding acknowledgment) approved and settled? If external, partially affiliated, or unsettled, default to `the authors` and `the paper`, not `we` and `our`.

## Limitation Parity

Surface constraints as research findings inline, not in a separate "Limitations" section at the bottom. The pattern is to let the limitation appear at the moment the corresponding strength is described.

Worked shape:

- Strength claim: `The model trains in 3x less compute than the prior baseline.`
- Inline limitation: `Long-context evaluation lags by roughly two points; short-context metrics do not predict that gap.`
- Reframing: `The gap is itself a finding: short-context performance is not a reliable proxy for the long-context regime.`

Limitations stated this way read as discoveries, not apologies.

## Comparison Framing

Required scaffold for every model or system comparison:

1. Absolute score (`72.4 on the held-out split`).
2. Delta from a named baseline (`+3.3 points over the prior open-weight checkpoint`).
3. Scope (`under the published harness on the v2 split`).

`State-of-the-art` is permitted only with an explicit scope qualifier: `state-of-the-art among fully open mixture-of-experts models at this parameter count`. Bare `state-of-the-art` is a blocker.

Closed-model competitors: use factual descriptors (`proprietary`, `opaque training data`, `closed weights`). Do not editorialize. The Ai2 value proposition is openness; competitors do not need to be diminished for that proposition to land.

## Inline And Bulleted Lists

Inline lists concentrate a value proposition. Use them for paired artifacts and stacked claims:

- `open weights, open training code, the eval harness, and the full data recipe`
- `paper, model, demo, and discussion thread`

Bulleted lists are for parallel artifacts, CTAs, or step sequences where the reader will scan. Do not use bullets to dress up a paragraph; if the items are not parallel, leave them inline.

## Conjunctions And List Joins

Lists carry a conjunction (`and`, `or`) before the final item. Comma-only joins (asyndeton) are not house style on any surface: `inspect, adapt, improve` should be `inspect, adapt, and improve`, or trimmed to a two-item pair (`inspect and adapt`).

Channel exception: X and Bluesky render the conjunction as `&` or `+` for character savings and platform fit. `weights & training code & the eval harness` on X; `weights, training code, and the eval harness` on the blog, newsletter, LinkedIn, and Hugging Face blog. The `&` / `+` is a rendering of the conjunction, not its omission — comma-only joins remain disallowed everywhere.

For full platform-by-platform rendering and the X/Bluesky exception in context, see `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md`. For the interaction with the triplet-variation rule, see `ai2-comms-pipeline` Rule Interactions.

## Dedup Without Creating A Garden-Path

When a word repeats across parallel branches (`to help robots plan …, or help models capture …`), dedup by swapping the instance that is not the load-bearing phrase — but keep the branch structure that holds the top-level parallel. Swapping in a finite clause can reattach the conjunction to the nearer subject: `predict paths so a robot can plan …, or help models …` reads as the robot helping the models. Prefer a non-finite fix (`to let robots plan …, or help models …`) so `or` still parallels the top verb.

Test: after deduping, does the conjunction still join the two top-level branches, or has an intervening subject+verb captured it? If captured, the meaning has shifted; restructure with a non-finite clause.

Anchor: `predict object paths to help grasping robots plan …, or help image-to-video models capture …` (doubled `help`) → `to let grasping robots plan …, or help image-to-video models capture …` (one swap, parallel intact). A finite rewrite (`so a grasping robot can plan … or help …`) was rejected because `or help` then attached to the robot.

## CTAs

Segment CTAs by artifact and audience. Each CTA names the artifact and the action; do not bundle everything into a single sentence.

- Forms: `Read the paper at [link].`, `Browse the model on Hugging Face.`, `Run the training code at [repo].`, `Try the demo.`, `Join the discussion on Discord.`
- Place the main CTA at the end of the post. Mid-post CTAs are fine when a specific section invites action.
- Allowed: multiple CTAs grouped under audience headings (`for developers`, `for researchers`).
- Avoided: `request access`, `apply for early access`, `limited time`, `act now`, or any urgency manufacturing. Ai2 publishes openly; CTAs should reflect that.

## Em-Dash And Comma Discipline

Default to comma for soft appositives that read as a natural extension of the sentence: `instructions, an everyday capability that other benchmarks often miss`. Reserve the em-dash for genuine breaks — an aside that interrupts the sentence rhythm, or contains its own clause-internal punctuation.

Test: if the aside reads naturally with a comma, use the comma. The em-dash is for stronger interruption, not for default rhythmic flair. Many em-dashes in draft prose collapse to commas in revision; that is the expected direction.

The general em-dash rule from `references/voice-and-prose.md` still applies (no repetition or symmetric cadence-padding). Newsletter prose clusters more em-dashes than other formats; that is house style for that surface but does not change the comma-default rule for soft appositives.

### Dash spacing (house convention)

Spacing is fixed house-wide in published copy, independent of the when-to-use rule above:

- Em dash (—): closed, with no surrounding spaces, as in `motion—particularly the small movements`.
- En dash (–): spaced when used as a connector or aside; but number ranges are closed (`5–12`, `2,000–4,000 words`).

This is the dash-spacing convention for Ai2 copy. The spaced-hyphen device for technical parentheticals (next section, ` - text - `) is a separate tool and keeps its spaces. The internal skill-doc prose predates this convention and is not itself the deliverable; apply the rule to output copy and to new anchors.

## Spaced Hyphens For Technical Parentheticals

For mid-sentence explanatory asides that define a technical term or component, use spaced hyphens (` - text - `), not parentheses, not en-dashes, not em-dashes.

Example: `MolmoAct 2's action tokenizer - which translates robot motion into the discrete steps the model predicts - plus training scripts, evaluation rollouts, and a reference hardware setup`.

Spaced hyphens read as a quiet aside that lets the technical term sit in the sentence without parenthetical interruption. Parentheses read as supplementary; em-dashes read as a stronger break; spaced hyphens are the in-between form Ai2 reaches for when defining a component inline.

A spaced en dash (` – `) in the same slot is an author variant, not an error. Finals have shipped with it (`the underlying preference data – the prompts and paired responses used to train the model – along with ...`). When it appears in the author's own copy, leave it; do not convert it to spaced hyphens on a polish pass. The rule above governs what to draft, not what to correct.

## Partner Platform Naming

When naming a partner organization's product or platform, use the possessive form plus a product-type suffix:

- `Hugging Face's LeRobot platform`, not `Hugging Face LeRobot`.
- `Hugging Face's Hub`, not `Hugging Face Hub`.
- `NVIDIA's Blackwell Ultra`, not `NVIDIA Blackwell Ultra` (when used as a product reference, not a category).

The possessive acknowledges the partner relationship; the suffix (`platform`, `library`, `hub`, `model`) types the product. Direct competitor naming follows the same rule when the comparative performance is the news: `Physical Intelligence's π0.5`. When the product name is widely recognized as a standalone (e.g., GPT-4), the possessive can drop, but the safe default is possessive plus suffix.

## Multi-Org Attribution

When multiple organizations are involved in a single release or initiative, separate the roles explicitly rather than blending into one verb:

- Operator (active-verb subject): the org that actually did the thing.
- Funders: separate clause naming the financial backers.
- Infrastructure or partnership: named role with its own clause.

Worked shape: `Ai2 brought online the compute infrastructure for OMAI in partnership with Cirrascale, funded by a $152 million joint investment from NSF and NVIDIA`. Operator (`Ai2 brought online`) leads. Partnership (`in partnership with Cirrascale`) sits next. Funding (`funded by ...from NSF and NVIDIA`) closes.

Avoid: `NSF, NVIDIA, and Ai2 brought OMAI online`. The verb does not fit the funders; the actor structure is hidden.

## Word Choice Patterns

- `each setup` over `each task` or `each one` for zero-shot context. `Setup` refers to the robot configuration and environment; `each setup` is more specific than `each one`.
- `more efficient` over `smarter` (and similar) for model behavior. Avoid `the model learns to`, `figures out`, `knows when to`. Use measurable terms: `more efficient`, `more accurate`, `lower compute cost`, `trained to`. Models compute; they do not exercise agency.
- `you can` over `users can` when the roundup or section is directly addressing the reader as user. Reserve third person (`researchers can`, `the community can`) for mission framing.
- Indefinite article (`a`, `an`) when the reference is type-of-thing, not unique: `a cross-model leaderboard widely tracked across the industry` (there are multiple), `a user's own machine` (any user), `an initial analysis` (one of multiple possible). Use the definite article only when the reference is genuinely unique or already established in the surrounding text.
- Transitive verbs need their objects in compressed copy. `Build for [audience]` reads as incomplete; ask `build what?` and supply the object. Anchor: `to build for regulated industries` → `to build their own models for regulated industries`.

## Closing Patterns

The canonical newsletter and launch-post closing is two sentences: a directional claim about where the field is going, then Ai2's role in it.

`We think [X] is the future of the field. We're proud to make this strong contribution to it.`

The strengthener `strong` sits between bare `contribution` (weak) and `biggest` (overclaim — implies a designation Ai2 did not make). Measured strengtheners (`strong`, `important`, `major`) belong in self-characterization; superlatives (`biggest`, `best`, `definitive`) do not unless an external authority made the designation.

Variant: the longer form remains canonical for launch blogs — `We think [X] represents a promising direction for the field, and we want the community to be able to build on what we've found.` Use the longer form when the post is a research blog; the two-sentence form when the post is a newsletter or compressed launch.

Variant, aspirational reach (platform and infrastructure posts): when the close should name a bigger future scope or capability rather than restate the body, hedge the reach as a stated goal, then name one concrete future capability. The hedge frame lets the close describe a future end-state without claiming it ships today. Forms: `What we're building toward is [concrete future scope].`, `Our North star is [infrastructure a team can use to do the thing it cannot do today].`, `We aren't there yet.` Keep the named scope concrete (a resolution and cadence, a question a team could not previously ask), not a mood (`the possibilities are vast`, `we're just getting started`) or a grandiosity slot (`the future of`, `a new era`). The hedge (`building toward`, `North star`, `aren't there yet`) is what keeps an aspirational `a team can use` from reading as a present, shipped, self-serve claim.

Test: strip the hedge frame — does the sentence now assert a capability the product ships today, or a per-run figure as the price any future run faces? If so the reach is overclaiming; restore the hedge or scope the figure to the run.

Anchor: an OlmoEarth infrastructure post closed `What we're building toward is Earth observation at whatever resolution and cadence a team needs to accomplish their mission. Our North star is infrastructure a team can use to ask the questions it actually has, not just the ones its budget allows.` The two sentences name a concrete future scope (any resolution and cadence) hedged as a goal, not a shipped feature; earlier loop-back-to-the-opening and mood-only drafts were rejected for restating the body.

Variant, third-person enablement close (testimonials and adoption pieces where Ai2 stays in third person): name the value of the artifacts rather than a field direction, then what the openness let the outside team do, then a hedged forward sentence about their continuing work. Form: `That is the value of publishing more than [the narrow artifact]. Ai2's [stack] let researchers [verb], [verb], and [verb]. As [partner] continues [work], that openness could help make [this kind of analysis] a more practical part of [the reader's workflow].` The `we think X is the future` form does not fit here, because the piece has not been speaking as `we`; the value claim carries the same weight in the third person. Keep the forward sentence hedged (`could help make`) — the partner's roadmap is not ours to promise.

A single-sentence closing is too thin. Newsletters need at least the vision sentence plus Ai2's role. If the post warrants more, add a third sentence with a concrete handoff.

## Update Annotations

Post-release blog updates (new artifacts shipping, integrations landing, substantive corrections) appear inline at the top of the blog or in the relevant section. Format:

`**Update [M/D]:** *[short description of what changed]*`

- The `Update [M/D]:` prefix is bold.
- The date uses month/day numerals (`5/28`), not full-date form (`May 28, 2026`).
- The description after the colon is italicized, not bold.
- Do not use the full-date all-bold form (`**Update May 28, 2026: Code release + LeRobot integration**`).

Worked example:

`**Update 5/28:** *Code release + LeRobot integration*`

One line per update. Multiple updates stack chronologically; pick newest-on-top or newest-on-bottom and stay consistent across the suite of posts.

## Cascade And Rhetorical Patterns

Recurring structural patterns worth recognizing and reaching for:

- **Diminishing-quantifier cascade.** `Some teams behind them release weights, fewer release training data, and almost none publish enough for researchers to study, reproduce, or easily customize the models.` Works for the closed-vs-open landscape. Variants: `many / few / none`; `most / some / almost none`. The progression along one dimension does the rhetorical work.
- **`Since [date], [traction stat]`.** Temporal anchor plus traction claim. `Since May 5, MolmoAct 2 and its associated artifacts have been downloaded more than 400K times.` Works as standalone paragraph for visual lift, or as a paragraph closer. The date specificity gives the stat weight; vague anchors (`recently`, `lately`) read softer.
- **`Separately, we hired [validator] to independently validate`.** When Ai2 has paid for third-party validation, say so directly. The `separately` opener anchors the beat. The `independently` qualifier acknowledges the contractual relationship while affirming validation independence.
- **Needs list, then artifact map.** In adoption, enablement, and testimonial copy, spend one paragraph on what the outside team needed and the next on which Ai2 artifacts supplied it, one definitional sentence each, in the same order. The pairing makes the openness argument without asserting it: the reader matches the list to the list. Worked shape - needs: `Its researchers needed the underlying preference data ... along with intermediate checkpoints, the recipes for each stage of training, and evaluations that could show how the model's capabilities and behavior changed.` Map: `Ai2 makes all of those components public. Dolci is ... Olmo is ... OLMES is ...` A third paragraph then states what the pair made possible (`Together, these artifacts gave [partner] a controlled way to ...`). Keep the definitional sentences plain and short; this is where a reader who has never met Dolci learns what it is.
- **`Alongside [anchor], we've released [list] - making [thing] [characteristic]`.** Multi-artifact release with a characteristic tag. `Alongside the dataset and model weights, we've released MolmoAct 2's action tokenizer, training scripts, evaluation rollouts, and a reference hardware setup, making MolmoAct 2 fully open.` The `alongside` pivot is the smooth transition when one item gets its own paragraph and the rest stack.

For the broader anchor pattern library (canonical templates and worked before/after examples), see `references/anchor-patterns.md`.

## Voice-Register Matching

A single newsletter or launch post can use first, second, and third person across functions. Do not homogenize.

- First-person plural (`we`, `our`) for Ai2-owned actions.
- Third person (`the community`, `researchers can`, `developers can`) for mission framing and audience reference.
- Second person (`you can`, `try it now`) for direct reader-action items, especially in roundup items where the reader is the user.

Within one piece, all three appear by design. The voice changes function paragraph by paragraph.

Descriptor choice signals register:

- `leading proprietary robotics models` reads as a field-survey claim.
- `four other competing robotics models` reads as a comparative-evaluation claim on a specific cohort.
- `capable proprietary robotics models` reads as descriptive without ranking.

Pick the qualifier that matches the claim type. Do not swap registers mid-paragraph.

Transition word choice signals editorial flavor. Among `In practice`, `Already`, and `In the field`, prefer the one with the least editorial weight. `Already` carries the sharpest temporal punch; `In practice` reads more academic; `In the field` reads colloquial. Match the surrounding register.

## The Implicit Ai2 Voice

Three things the Ai2 voice consistently avoids:

- Marketing or press-release register (`excited to announce`, `pleased to share`, `today marks the launch of`).
- Anthropomorphic agency for models (`the model learns to`, `smart enough to`, `figures out`).
- Editorial framing of competitors (`trailing competitors`, `outdated approaches`, `opaque rivals`).

Three things it consistently favors:

- Source-aligned technical claims with named scope.
- Direct competitor naming when comparative performance is the substance.
- Concrete artifact lists when openness is the message.

The first-person plural is institutional, not personal. `We released MolmoAct 2` is Ai2 the institution; the implied speaker is the org, not a researcher or a team lead.

Claims about field direction beat claims about market share. Ai2 says `we think X is the future of the field`, not `we lead the field on X`. Directional language; not competitive-positioning language.

Frame releases as `what we built` or `our contribution`, not `what we own` or `what we created`. `Built`, `contributed`, `released`, and `worked on` carry the right register; `created`, `developed`, and `launched` lean proprietary.

The headline pattern recurs: `Introducing [product]—[descriptive phrase]`. The em-dash separator is consistent. The descriptive phrase echoes the source blog title with minor framing variation. The `Introducing` prefix signals announcement.

The closing pattern recurs (see Closing Patterns above): two sentences — vision plus Ai2's role.

## Product-Name And Common-Noun Collisions

When a product is named after a common term in its own domain, the product name and the common noun collide on the page: the tool `Pathways` next to biological `pathways`, and the like. Capitalization alone does not carry the distinction in running prose; the reader sees the same word twice. Vary the common-noun instances, never the product name: keep the product name fixed and swap the generic term for an accurate synonym.

Test: does a common noun in the copy share a stem with a product or feature name nearby? If so, the product name stays; the common noun moves.

Anchor: `Allen Institute immunologists are now piloting Pathways to map the immune pathways ...` → the biological term was changed (`immune mechanisms`, `immune-signaling systems`) while the tool name `Pathways` was left untouched.

## Difficulty Ramp For Technical Research Blogs

For a research blog explaining a technical method to a mixed audience, layer the canonical arc as a difficulty ramp: an accessible intro (plain-language problem and contribution, jargon glossed) → a high-level `the idea` section (the method in one or two intuitive moves) → the technically dense core (formalism, architecture, results) → limitations → a short recap → a forward-looking close. Difficulty should climb gradually; do not open the dense block with the most abstract result.

Test: could a non-specialist follow the first two sections, and does each later section assume only what the earlier ones established? Lead the dense block with the most intuitive technical result — the conceptual hinge the high-level section teased — not the most formal one.

Anchor: a density-and-score post opened with density-as-smoothed-histogram and score-as-direction-uphill (lay), then a `the idea` section (attention generalizes KDE), then the formal propositions, equivariance, architecture, and benchmark numbers, then limitations and a forward-looking close. Leading the dense block with the attention-to-KDE correspondence (intuitive, and pre-loaded by `the idea`) rather than the equivariance algebra kept the ramp gradual. Pairs with `references/voice-and-prose.md` (Technical-Register Research Blogs; Define Symbols And Acronyms On First Use).
