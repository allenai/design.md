# Anchor Patterns

## Purpose

Canonical templates and before/after examples preserved from real Ai2 editing passes. Read alongside `references/house-style-patterns.md` (which gives the rules) when a concrete shape or worked example is more useful than the abstract rule.

The templates section catalogs recurring sentence shapes that show up across launches. The examples section preserves edits from real revision sessions so the rules stay anchored in worked cases rather than drifting toward abstraction.

## Templates

Twelve recurring shapes worth recognizing and reaching for. Each is a starting point; vary as the source warrants.

### `Earlier this month, we released [product], [descriptor]`

Canonical newsletter opener for a monthly recap. Variants: `This month, we released ...`, `Last week, we released ...`, `Today we released ...`. The temporal anchor places the release in the reader's calendar; the descriptor carries the one-clause framing.

### `Since [date], [traction stat]`

Time-anchored traction beat. `Since May 5, MolmoAct 2 and its associated artifacts have been downloaded more than 400K times.` The specific date gives the stat weight. Works as standalone paragraph (for visual lift) or as a paragraph closer (when integrated into prose).

### `Other [category] have stayed largely closed — some [X], fewer [Y], and almost none [Z]`

Diminishing-quantifier cascade for the closed-vs-open framing. The progression along one dimension does the rhetorical work. Pair with the contribution claim immediately after: `[Product] changes that, giving [audience] [foundation/tool/capability]`.

### `[Product] changes that, giving [audience] [foundation/tool/capability]`

Mission-pivot sentence after the closed-vs-open framing. Active-voice, single sentence, names the audience and the thing the audience now gets.

### `[Product] outperforms [class of competitors] on [scope] while [secondary advantage]`

Performance claim with scope qualifier and secondary advantage. `Outperforms leading proprietary robotics models on standard benchmarks while running up to 37× faster.` The `while` clause carries the second axis of the win.

### `It can [verb] tasks like [example list] - all without [constraint]`

Capability demonstration with examples and constraint relief. The `- all without` structure shows the wins (zero-shot, no retraining, no extra setup). Examples can be 0, 2, or 3; do not default to triplets without testing whether the examples show meaningful range.

### `Already, [product] has been [deployed | used | piloted] at [partner]`

Real-world deployment proof. `Already` emphasizes that the deployment is current, not aspirational. Pair with a one-clause description of what the partner is doing with the release.

### `Separately, we hired [validator] to independently validate`

Third-party validation attribution. Direct; does not obscure the contractual relationship. The `independently` qualifier acknowledges the relationship while affirming the validation's independence.

### `[Product] ships with [dataset/artifact], a [descriptor] - the [superlative claim]`

Dataset or artifact announcement with provenance. The `- the largest ...` landing carries the comparative claim if scope-supported.

### `Alongside [anchor], we've released [list], making [product] fully open`

Multi-artifact release with the house-style `fully open` landing. The `alongside` pivot is a smooth transition when one item (e.g., the dataset) gets its own paragraph and the rest are listed.

### `[Product] is also integrated into [partner's product platform]`

Integration or availability beat. Uses the possessive-plus-product-suffix partner naming rule (`Hugging Face's LeRobot platform`, not `Hugging Face LeRobot`).

### `We think [directional claim about the field]. We're proud to make this [strength descriptor] contribution to it.`

Canonical closing pattern. Two sentences: vision plus Ai2's role. Strengthener (`strong`, `important`, `major`) sits between bare `contribution` and superlatives (`biggest`, `best`).

## Before / After Examples

Twelve worked edits from the May 2026 newsletter pass. Each preserves a concrete case where a rule applied. Keep these anchored in the file so the rules do not drift toward abstraction.

### Root-level repetition

> Before: `Other robotics models have stayed largely closed... MolmoAct 2 is built to change that.`
>
> After: `Other robotics models have stayed largely closed... MolmoAct 2 changes that.`

The `build / built / build-on` collision was flagged across grammatical roles. Same root counts as repetition even when one use is a verb and another is an adjectival phrase.

### Subject-verb logic

> Before: `Other robotics models have stayed largely closed - some release weights ...`
>
> After: `Other robotics models have stayed largely closed - some teams behind them release weights ...`

Models do not release; teams do. The subject of `release` must be an entity capable of releasing. Pronoun anchored back to the prior clause's subject through `teams behind them`.

### False agency

> Before: `We're proud to make this our biggest open contribution to it yet.`
>
> After: `We're proud to make this strong contribution to it.`

`Biggest` implies Ai2 actively designated this as a top-rank contribution. Outcomes that are biggest-by-virtue-of-what-they-are get descriptive verbs (`stands as`, `turned out to be`) or measured strengtheners (`strong`, `important`). Designations get the agency verbs.

### Rhetorical contrast

> Before: `It can complete tasks like X, Y, and Z - all without any special training for each task. That's the difference between a robot you need to retool for every job and one you can put in front of a new tabletop setup and have working on day one.`
>
> After: `It can complete tasks like X, Y, and Z - all without special training for each setup.`

The `That's the difference between X and Y` structure constructs a forced binary contrast for rhetorical effect. The `- all without` clause already does the work. Cut.

### Tense framing — capability vs. report

> Before: `In real-world tests on a robot arm, it completed manipulation tasks ...`
>
> After: `It can complete tasks like ...`

Past-tense lab-report register reads as research paper. Wide-audience newsletter prefers present-tense capability framing. Reserve the lab-report form for technical blog or paper-aligned channels.

### Partner platform naming

> Before: `The model is also integrated into Hugging Face LeRobot.`
>
> After: `MolmoAct 2 is also integrated into Hugging Face's LeRobot platform.`

Possessive plus product-type suffix. Also: pronoun `the model` swapped for the explicit name `MolmoAct 2` after a long preceding sentence, where the pronoun's referent had drifted.

### Multi-org attribution chain

> Before: `NSF, NVIDIA, and Ai2 brought OMAI online, backed by a $152 million joint investment.`
>
> After: `Ai2 brought online the compute infrastructure for OMAI in partnership with Cirrascale, funded by a $152 million joint investment from NSF and NVIDIA.`

Operator (Ai2) subject; partnership (Cirrascale) in its own clause; funding (NSF + NVIDIA) attributed separately. The roles differ; the original verb blended them.

### Vague key noun

> Before: `Phase 1 includes the shared dataset and initial analysis of model submissions.`
>
> After: `Phase 1 includes eight model simulations of the global atmosphere and an initial analysis of how they performed.`

`The shared dataset` is vague — what dataset? Replaced with the concrete count and scope (`eight model simulations of the global atmosphere`). Indefinite article applied to `an initial analysis` since multiple analyses are possible.

### Open AI parse risk

> Before: `an open AI model designed to control robots in the real world`
>
> After: `an open model for controlling robots in the real world`

`Open AI` reads as `OpenAI` (the competitor) in the wrong eye-track. Context already establishes the AI nature; the `AI` is redundant and the adjacency is the problem.

Exception that remains valid: `open source AI artifacts` — `source` sits between `open` and `AI`, so the parse is unambiguous. The avoidance rule applies to the bare `open AI` adjacency, not to phrases where another word breaks the collision.

### Em-dash to comma

> Before: `instructions - an everyday capability that's often missed by other benchmarks`
>
> After: `instructions, an everyday capability that's often missed by other benchmarks`

Soft appositive that reads as a natural sentence extension. Comma is the default. Em-dash is for genuine breaks or clause-internal punctuation, not for default rhythmic flair.

### Anthropomorphic descriptor

> Before: `The savings come from a smarter way of processing satellite data.`
>
> After: `The savings come from a more efficient way of processing satellite data.`

`Smarter` is an anthropomorphic agency claim — models compute, they do not exercise intelligence. `More efficient` is a measurable property and matches the savings claim.

### Vague pronoun reference

> Before: `The model is also integrated into Hugging Face LeRobot.`
>
> After: `MolmoAct 2 is also integrated into Hugging Face's LeRobot platform.`

Long preceding sentence had drifted the antecedent for `the model`. Replacing with the explicit name removes referent ambiguity. Pair with the partner platform naming fix above.

### Active actor vs. static state

> Before: `AutoDiscovery early access continues.`
>
> After: `We're extending AutoDiscovery early access through July 31.`

A static-state verb (`continues`) describes the world without crediting the decision. When the news is the decision, put the org in the subject seat with an active verb. The active form reads as an announcement; the static form reads as a status notice.

### X conjunction rendering

> Before (on X): `combining 20 years of marine data and social-science findings and historical climate records`
>
> After (on X): `combining 20 years of marine data, & social-science findings, & historical climate records`

X (and Bluesky) renders `and` / `plus` as `&` / `+` for character savings and native-platform fit. The rule preserves the conjunction; comma-only joins remain disallowed. Long-form surfaces keep the spelled-out form.

Heavy clause join on an opening hook can keep a spelled-out `and` when readability outweighs two characters: `(one credit = one hypothesis), and any credits you already have still work` reads cleaner with `and` than with `&`. Symbols sit most naturally in list joins and tight tweets.

### X thread marker

> Before: a multi-tweet thread with 🧵 on tweets 1, 2, and 3.
>
> After: a multi-tweet thread with 🧵 on tweet 1 only; tweets 2 and 3 carry no marker.

The marker reads as `this is a thread` and goes on the opening tweet. Mid-thread tweets and standalone posts carry none. LinkedIn carries no thread marker.

### Link placement in an X or Bluesky thread

> Before: post 1 carries the hook alone; the blog URL waits for the final post.
>
> After: post 1 carries the hook plus the blog URL; the final post keeps the per-artifact index, blog line included.

The opening post is what shows in-timeline, and a link there no longer costs reach on X. Give the reader of post 1 a way to the canonical destination, and keep the artifact block at the end for everyone who reads through. One URL in the hook, not the whole block. See `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (Put the primary link in the opening post).

### Compressed-surface payoff over half-named mechanism

> Before (on X): `surfacing the findings that most change what it expected`
>
> After (on X): `surfacing the most surprising results — the ones most likely to be genuine discoveries`

The before version gestures at a mechanism (Bayesian surprise / surprisal) without naming it, becoming abstraction without a referent. On compressed social surfaces, state the payoff in plain language. In a technical blog or paper, name the construct properly instead.

### State verb vs. action verb in subject-verb agency

> Before: `Every account keeps its 500 Hypothesis Credits.`
>
> After: `You keep your 500 Hypothesis Credits.` or `New accounts start with 500 Hypothesis Credits.`

An account `has` or `holds` a value (state verbs, fine with an inanimate subject), but `keeps`, `receives`, `spends`, `claims` are actions that need an agent (the user). The fix moves the user into the subject seat or swaps the verb to a state form.

### Population scope on a quantified claim

> Before: `Every user keeps their 500 credits.`
>
> After: `New accounts start with 500 Hypothesis Credits` (the population that receives the grant) plus `any credits you already have still work` (the population that already holds a balance).

The number does not hold across all populations: new users receive, existing users hold, lapsed users may hold less. Split the populations and use the verb that matches each.

### Verb tier vs. evidentiary status

> Before: `AutoDiscovery discovered mutual-exclusivity patterns in cancer data.`
>
> After: `AutoDiscovery surfaced mutual-exclusivity patterns in cancer data that researchers can review for follow-up.`

`Discovered` belongs to the validated tier; `surfaced` belongs to the candidate tier. A pattern flagged for oncologist follow-up is a candidate signal, not an externally confirmed finding. Pick the verb at the source's evidentiary tier; do not promote.

### Window vs. cliff

> Before: `Sign up before July 31 to keep your credits.`
>
> After: `Early access runs through July 31` plus `any credits you already have still work`.

The before version manufactures a cutoff the source does not support. The after version describes the window the source actually establishes (terms hold through a date) and the operational fact (existing credits continue to work).

### Robust phrasing under an unconfirmed operational fact

> Before: `You keep your 500 Hypothesis Credits.` (Asserts existing balances were not reset, which may not be confirmed.)
>
> After: `Any credits you already have still work.` (True whether balances were reset or not.)

When an operational fact is unconfirmed, phrase the claim so it holds under either branch. Flag the open fact as `Verify` for tightening later. Do not assert the unconfirmed version.

### Superseded body line after an update banner

> Banner: `Update 5/28: Early access extended through July 31. New accounts start with 500 Hypothesis Credits.`
>
> Body (still live, but now contradicted): `1,000 Hypothesis Credits available through Feb. 28, 2026.`

After an update banner supersedes prior facts, the body below it can still carry a now-false number, date, or allocation. Even when framed as `Original post follows`, a skimmer hits the live contradiction. Scan the body and flag the contradicted line as `Verify` or reconcile.

### Update banner replace vs. stack

> Before: a post that stacks `Update 3/2: Extended for three more months` on top of `Update 4/15: Extended again` on top of `Update 5/28: Extended through July 31`.
>
> After: a single current banner that replaces the prior banners — `Update 5/28: Extended through July 31`.

Each new banner that supersedes the prior one should replace it, not stack on top of it. Visible stacks of `extended again` notices on logistics or credit posts signal an unsettled model. Stack only when the prior banner is independently true and a useful changelog entry; weigh the churn optics.

### Headline owns the central fact

> Before: headline `Extended through July 31`, body `Early access is extended through July 31, giving more time ...`
>
> After: headline `Extended through July 31`, body `Early access stays open until then, giving more time ...`

When a headline or update banner states the central fact, the body should not restate it. Use the body for substance; refer back only if the reader genuinely needs the reminder.

### External / affiliated research amplification (Type 11)

> Before: `Introducing [System] — our latest demo for tracing model dependencies. In our testing, it handled the full graph.`
>
> After: `[Authors at Institution + Ai2] released [System], a tool for tracing model dependencies. In the paper's evaluation, it handled the verified subset of the graph. The demo was built independently of Ai2.`

When Ai2 amplifies external or partially-affiliated research it did not solely produce, voice shifts to arms-length third person. The authors did the research and the evaluation; Ai2 amplifies. Co-ownership framing (partnership, funding acknowledgment) waits for approval. Unofficial author-built artifacts carry an explicit disclaimer.

Tag: release-types.md Type 11; house-style-patterns.md First-Person Plural Voice second exception.

### Precision is not accuracy

> Before: `[System] was 96.8% accurate.`
>
> After: `96.8% of the dependencies [system] found held up when checked against public evidence.`

A precision figure (verified / verified+refuted) is not accuracy. Accuracy implies recall is measured. When the source paper cannot measure recall — because no ground-truth list of misses exists — `accurate` overstates. Conservative-true language: `held up when checked`.

Tag: claims-and-benchmarks.md Precision Is Not Accuracy.

### Verification-independence fidelity

> Before: `independently verified` and `manually verified` applied to a system whose verifier was a model from the same family as the extractor, with humans only on escalated cases.
>
> After: `held up when checked against public evidence`.

Verification-independence modifiers must match the verifier. Same model family is not independent; an automated process is not manual. Drop the modifier or rephrase to match the actual evidence source.

Tag: claim-review-patterns.md Verification-Independence Fidelity.

### Relationship counts vs. distinct-entity counts

> Before: `[Model] depends on 512 models.`
>
> After: `512 model dependencies.`

When the source table counts edges or relationships (an upstream model can appear in several edges), `depends on N models` claims N distinct models and is wrong. Match the noun to what is counted. Also label `direct only` vs. `direct plus indirect` when the source distinguishes them.

Tag: claims-and-benchmarks.md Relationship Counts vs. Distinct-Entity Counts; source-fidelity.md Numbers.

### Totality words vs. coverage caveats (intra-piece)

> Before: tweet 1 says `maps & identifies ALL a model's dependencies`; tweet 4 says `what it surfaces is a lower bound`.
>
> After: tweet 1 says `maps & identifies a model's dependencies`; tweet 4 unchanged.

`All`, `every`, `complete`, `full` cannot coexist with `lower bound` or partial-coverage caveats on the same quantity in the same piece. Drop the totality word.

Tag: claims-lector SKILL.md intra-piece consistency check; claim-review-patterns.md Totality Vs. Coverage Caveats.

### Jargon with no referent (third failure mode)

> Before (cycling, all wrong on a compressed surface): `scored its candidate answers during training` → `training candidates` → `responses during RL`.
>
> After: plain altitude (`the models used to judge its outputs during training`) or cut from the list and give the concept its own setup beat (`It even catches models grading the very systems they helped train`).

When a reader calls a compressed item `vague`, the cause is often missing context, not insufficient precision. Escalating jargon is the wrong fix. Drop to plain altitude or break the concept out into its own beat.

Tag: platform-patterns.md Third Failure Mode: Jargon With No Referent; pipeline Rule Interactions (Exact-Formalism Plus Compressed-Copy Payoff).

### Graph-theory vocabulary on general surfaces

> Before: `Each node is a model or dataset; each edge shows how one shaped another.`
>
> After: `the datasets a model trained on, and every model used to generate or filter that data.`

`Node`, `edge`, `vertex`, `graph traversal` are jargon on general social surfaces. Describe the graph's contents in plain terms, not its structure.

Tag: platform-patterns.md Graph-Theory Vocabulary; ai-prose-to-avoid.md jargon list.

### Sticky disclaimers

> Before: a user's pasted draft drops the `built independently of Ai2` disclaimer from an unofficial author-built demo across four consecutive revision passes; assistant honors the omission silently each pass.
>
> After: assistant reinstates the disclaimer on every pass and flags the reinstatement, because the original promotion approval was conditional on the disclaimer's presence.

When an approval-gate condition is a release precondition, the disclaimer is sticky. Stop reinstating only when the user explicitly says the disclaimer lives elsewhere (demo page, pinned reply, image caption) and that placement is recorded in the decision sheet.

Tag: approval-gates.md External Or Unofficial Artifact + Disclaimer Stickiness.

### Ownership posture for amplified work

> Before: `Introducing [System]` and `in our testing` and `our collaborators' demo` — all drifting toward co-presentation while the OMAI/NSF question was still open.
>
> After: arms-length verbs and the authors' agency — `[Institution + Ai2] released [System]`, `in the paper's evaluation`, `the authors' demo` (with the unofficial-artifact disclaimer).

Voice choices signal ownership level. `Introducing`, `our`, and `we` claim ownership. When Ai2 amplifies work it did not solely produce, default to arms-length verbs and the authors' agency until co-ownership framing is approved and settled.

Tag: house-style-patterns.md First-Person Plural Voice (second exception); release-types.md Type 11.

### Pronoun ambiguity with multiple same-type entities

> Before: `the models that judged its outputs` (in a sentence with three model entities in play).
>
> After: `the judge models used during the system's training` (entity named, ambiguity removed).

In any sentence with two or more entities of the same type (multiple models, multiple datasets), `it`, `its`, or `they` becomes ambiguous about which one. Name the entity explicitly or restructure so the possessor is unambiguous.

Tag: claim-review-patterns.md Pronoun Referent Drift > Extension — Multiple Same-Type Entities.

### Image–claim correspondence

> Before: a tweet about one system's verified-dependency counts (512 / 1,047 for that system) paired with a screenshot from a different system's graph view.
>
> After: the screenshot pulls the matching system's view, so the image depicts the tweet's actual subject.

When a visual accompanies a post making a specific claim, the visual must depict that claim's subject. A mismatched image is a flag for the image to be replaced or the claim to be rescoped.

Tag: structure-lector review-checklist.md Image-Claim Correspondence; platform-patterns.md Image-Claim Correspondence.

### X threads: name then `it`

> Before: tweet 1 leads on the product name; tweet 2 leads on the product name again; tweet 3 leads on the product name a third time.
>
> After: tweet 1 names the product; tweets 2 and 3 use `it` (or the named recast when ambiguity is in scope).

Each tweet in a thread counts as a paragraph for the repetition audit. The product name appears once, usually in the opening tweet, then becomes `it` in subsequent tweets. A name that repeats across adjacent tweets reads as a hashtag, not a thread.

Tag: revision-passes.md Pass 1 > X Threads: Each Tweet Counts As A Paragraph.

### Multiple options on word-choice rejection

> Before: a single clause absorbs ~9 revision passes as the assistant guesses a single replacement and the user keeps rejecting.
>
> After: each rejection triggers (a)/(b)/(c) options with a recommendation; the user picks by feel, the loop closes in two or three passes.

When the user rejects a word choice, offer three or four alternatives with brief reasoning rather than guessing a single replacement. Lets the user choose by feel.

Tag: pipeline SKILL.md Process Discipline > Offer Multiple Options On Word-Choice Rejection.

### Artifact and generation precision in adoption copy

> Before (hook tweet on a Type 12 adoption thread): `AISquared & Domyn used Olmo 3 to build their own models for regulated industries ...`
>
> After (hook tweet, family-level umbrella; body tweets disaggregate): `AISquared & Domyn used Olmo, our family of fully open language models, to build their own models for regulated industries ...` Followed by per-lab body: `AISquared fine-tuned Bolt ... from Olmo. Domyn took a different route, building Domyn-Small ... on its own Italia 10B base + our open Dolma & Dolci datasets.`

`Used Olmo 3` failed on two counts: one adopter fine-tuned from multiple Olmo generations (2, 3, 3.1), and the other did not use the Olmo model at all — they used the Dolma and Dolci datasets and started from their own base model. The fix uses a true family-level umbrella in the hook and lets the per-party body lines carry the specifics (which model versus dataset, which generation, which base). A source's own loose umbrella (`Both chose Olmo`) does not license repeating the imprecision.

Tag: source-fidelity.md Which Open Artifact, And Which Generation; claims-lector SKILL.md Adoption-Artifact Precision; release-types.md Type 12.

### Source-limited delta (gain given, absolute absent)

> Before: assistant invents or fabricates the absolute score to pair with a source-given gain.
>
> After: `our Dolci dataset added 10.1 points to Domyn-Small on GPQA-Diamond, a graduate-level science reasoning benchmark — its biggest single post-training gain.` (Source gives the gain and scope; final/absolute score is not stated in the source and is not invented.)

When the source itself reports only a gain (a contribution from a dataset or training stage) and never states the final or absolute score, report the delta with its source-stated scope, do not invent the absolute, and flag the absence. The digit may still ship when the user asks for it and the surface-specific approval gate clears.

Tag: claims-and-benchmarks.md Numbers > When The Source Gives Only A Delta.

### Abstract verb with no concrete action

> Before: `models companies can trace & approve` — `trace` is too abstract to picture as an action.
>
> After: `models companies can fully inspect` — names a concrete action a reader can do.

`Trace` was flagged as vague, options were offered (`audit`, `vet`, `inspect`, `verify`) with brief reasoning, and `fully inspect` won on the editor's ear. This is the inverse of jargon-with-no-referent (over-precision): the fix here is more concreteness, not less.

Tag: platform-patterns.md X Thread > Fourth Failure Mode: Abstract Verb With No Concrete Action; pipeline Process Discipline > Offer Multiple Options On Word-Choice Rejection.

### Character-budget mechanics (links count as 23 on X)

> Before: tweet measures 180 characters of text and 191 with the `[blog link]` placeholder — assistant declares it under-budget.
>
> After: tweet measures 203 characters on X with the real blog URL (text + 23-character t.co), still under 280 but with much less headroom; the count was verified against the real link, not the placeholder.

On X, any URL is shortened to a 23-character t.co link regardless of its real length. Count it as 23, not as the placeholder string. On Bluesky the full URL length counts toward 300. Emoji (including 🧵) count as 2 on X. Verify counts before delivery on every tweet of a thread, not only when one looks long.

Tag: platform-patterns.md X Thread > Character-Budget Mechanics.

### Combine without silent loss

> Before: a draft combines two case-study tweets into one and silently drops product use cases (RAG, document processing) and sizes (1B/7B/32B); the editor cannot tell what was cut.
>
> After: the combine keeps the load-bearing contrast — one adopter fine-tuned the models, the other built on the datasets from its own base — and flags the dropped specifics (use cases, sizes, the relicensing and procurement-clearance payoffs) for the editor to restore if needed.

When combining tweets or compressing a beat, preserve the load-bearing contrast or claim, drop secondary specifics, and flag what was cut. Silent loss is the failure mode; visible loss is recoverable.

Tag: platform-patterns.md Combining And Compressing Without Silent Loss.

### Plain-language pass: gloss undefined jargon

> Before: `a schema that persists runs`; `stubbing them out`; `browsing through a controlled interface`.
>
> After: `records every run`; `substituting pre-written results`; `browsing the web through an interface the framework controls`.

When adapting research or technical copy for a broad audience, translate or gloss jargon (database/engineering verbs, harness language, in-process shorthand) on first use. Do not lean on undefined terms.

Tag: voice-and-prose.md Plain-Language Pass For Broad Audiences; channel-adapter SKILL.md Defaults; writer SKILL.md Workflow.

### Terminology lock: one word per concept, no word with two senses

> Before: a draft used `test`, `eval`, `benchmark`, and `task` interchangeably for the same concept, and used `example` for both a benchmark item and a few-shot demonstration.
>
> After: locked to `benchmark` (reader-facing) plus `task` (API-facing, bridged once: `a task is how you define a benchmark`); split `example` into `question` (the benchmark item) and `examples it's shown before the real questions` (the few-shot demos).

Lock one reader-facing term per concept across a piece; bridge an API or source term to the reader term exactly once; never let one word carry two meanings.

Tag: source-fidelity.md Terminology Lock Within A Piece; voice-and-prose.md Terminology Lock.

### Precision with gloss, not folksy paraphrase

> Before: `cancels out the luck of which questions are easy or hard`; `how much they might be off, and how large a gap it'd take`.
>
> After: `shared question difficulty affects both equally and cancels in the comparison`; `a standard error and a minimum detectable effect (the smallest difference reliably distinguishable from noise)`.

Accessibility is not vagueness. Keep the precise statistical term and gloss it briefly; do not replace it with a folksy paraphrase that drops the information a technical reader needs to recover the concept.

Tag: claims-and-benchmarks.md Precision With Gloss, Not Folksy Paraphrase; pipeline Rule Interactions (Plain-Language Pass Plus Statistical Precision).

### Drift-back after a plain-language pass

> Before (drift introduced by a plain-language rewrite): `realistic runtime conditions` → `real-world conditions` (overclaim); `sealed/isolated containers` → `secure containers` (wrong attribute, isolation is not security); `small integration project / none overly burdensome` → `formidable integration project` (claim reversed); three authoring paths in the source silently became two; `reusable across harnesses` → `reusable across benchmarks` (meaning change, harness ≠ benchmark).
>
> After (Pass 8 catches and reverts each): restore the source-faithful term, restore the dropped capability, flag the swap to the editor.

After any plain-language or accessibility rewrite, re-diff against the source for three failure modes: overclaim creep, dropped facts or capabilities, meaning-changing synonym swaps.

Tag: revision-passes.md Pass 8 — Source Re-Diff After Plain-Language Edits; claims-lector SKILL.md (drift-back check); structure-lector SKILL.md (capability-list shorten check).

### Peer / open-tool comparison: define before compare, honest caveat to close

> Before: a peer comparison opened with an axis sentence (`Our tool is faster than [Peer] for X workflow`) without defining [Peer] first, and the comparison stayed one-sided.
>
> After: opens with `[Peer] is an open framework for evaluating AI agents in containerized sandboxes` (defined before compared), leads each axis with the home tool's fit (`built for this workflow`), closes with `[Peer] is the better fit when ...` (honest caveat). Provider list rendered as `such as [Provider 1] and [Provider 2]` rather than a closed set; unverifiable agent name dropped rather than guessed.

Define the peer before comparing. Favor the home tool via framing plus factual axis contrasts plus an honest closing caveat. Verify every descriptor of the peer against its own docs; render non-exhaustive lists as `such as ...`.

Tag: claims-and-benchmarks.md Peer And Open-Tool Comparisons; structure-lector SKILL.md (peer-comparison check); claims-lector SKILL.md (peer-tool descriptor sourcing).

### Lineage facts and naming-collision check

> Before: `successor to OLMES` shipped with the prior-work facts unverified (acronym, paper ID, repo) and without checking whether the new release name resolves publicly to something else.
>
> After: prior-work facts verified against the real paper (arXiv:2406.08446) and repo (allenai/olmes); naming collision surfaced — `olmo-eval` / `OLMo-Eval` already publicly resolves to the retired predecessor OLMES replaced (reversed-lineage trap) — and routed to launch-engagement as a positioning flag before drafting.

When a release is framed as a successor or extension, verify every prior-work fact against the real source and check whether the new name resolves publicly to something else. Surface collisions as positioning flags, not editorial nits.

Tag: source-fidelity.md Lineage Facts And Naming Collisions; claims-lector SKILL.md (lineage check); launch-engagement decision sheet (naming and lineage flags).

### Citation discipline: method, not illustrative numbers

> Before: standard-error figures attributed to `(Miller, 2024)` — but the cited paper does not contain those exact figures.
>
> After: cite Miller for the paired-comparison method only; mark the specific standard-error and minimum-detectable-effect numbers as illustrative; add the full arXiv reference so the reader can verify the method.

When a paper is cited as the source of a method, the citation attributes the method, not specific figures the paper does not contain. Mark representative numbers as illustrative and add a resolvable reference.

Tag: claims-and-benchmarks.md Citation Discipline For Statistical Methods.

### Stepped sentences for dense explanation

> Before (one sentence, dense): a variance-reduction explanation chaining `paired comparison`, `shared question difficulty`, and `residual signal` into a single clause.
>
> After (stepped): `Both answer the same questions, so a hard question is hard for both. Comparing them question by question cancels that shared difficulty. What's left is the real difference.`

When a causal or statistical explanation packs two or more abstract nominalizations or two or more linked clauses into a single sentence, split it into short sentences that move one step at a time, opening with a concrete intuition.

Tag: voice-and-prose.md Stepped Sentences For Dense Explanation; revision-passes.md Pass 4 (Stepped Sentences For Dense Explanation).

### Handoff hygiene: commentary leak

> Before: a line beginning `The last line now names both ends ...` is found pasted into the draft body, where the assistant's meta-note about the edit slipped in alongside the copy.
>
> After: the meta-note is removed from the body and (if useful) moved to the Notes section that travels with the deliverable.

Before delivering, scan the draft body for assistant commentary or meta-notes that leaked in. Any line that describes the edit rather than being the copy must be removed. Commentary belongs in Notes, not the draft.

Tag: pipeline SKILL.md Phase 6 — Deliver; editor SKILL.md Output Defaults.
