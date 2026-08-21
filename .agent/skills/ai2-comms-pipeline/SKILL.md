---
name: ai2-comms-pipeline
description: Use when running a complete Ai2 comms task through the full pipeline — drafting plus parallel lector review plus optional charts and cross-posting. Triggered by "run pipeline", "full pipeline", "ai2-comms pipeline", "pipeline for [task]", or any Ai2 comms request that needs every phase (newsletter, launch blog, multi-channel rollout). For a single phase, use ai2-comms-writer, ai2-comms-structure-lector, ai2-comms-claims-lector, ai2-comms-chart-designer, or ai2-comms-channel-adapter directly instead.
version: 1.0.0
keywords: [orchestration, pipeline, workflow, comms]
---

# Ai2 Comms Pipeline

You are orchestrating the Ai2 comms pipeline on the user's task. Walk the task through the relevant phases. Skip phases that do not apply.

This is the entry point for a whole-task run. Each phase below names a sibling skill; read that skill's `SKILL.md` under `.agent/skills/` and apply it, then continue. When only one phase is needed, read that skill directly instead of this one.

## Phase 0 — Scope

Read the task and decide which phases apply:

- Drafting (new copy needed) → run Phase 2.
- Review only (draft provided) → skip Phase 2, go to Phase 3.
- Benchmark chart work → include Phase 4.
- Cross-posting across more than one surface → include Phase 5.
- Newsletter → run Phase 2 with the newsletter format references engaged (`.agent/skills/ai2-comms-style-source/references/newsletter-format.md` and `.agent/skills/ai2-comms-style-source/references/newsletter-example.md`).

Then identify the release type. Walk `.agent/skills/ai2-comms-style-source/references/release-types.md` and pick the one that fits:

1. Research platform (Olmo, Tülu, Molmo, OlmoEarth — when communicating the line as a whole).
2. Model release within a platform.
3. Single model release (no platform line yet).
4. Benchmark release.
5. Dataset release.
6. Tool or library release.
7. Application release.
8. Update or extension.
9. Research blog or process write-up.
10. Newsletter recap.

Each type has its own positioning notes and key files in `.agent/skills/ai2-comms-style-source/references/release-types.md`. Engage the listed references for that type before drafting. For mixed cases (a platform-aligned model release being recapped in a newsletter), layer the types: platform positioning sets the framing, the model release fills the body, newsletter format compresses the result.

Then check the genre. `.agent/skills/ai2-comms-style-source/references/release-types.md` (Genre Overlays) holds the document formats that layer over any type — press release, testimonial. A testimonial in particular overrides the launch-post defaults on length, headings, altitude, and section order, so identify it before drafting rather than trimming a launch-shaped draft down afterward.

When the release is Olmo or any line covered by `.agent/skills/ai2-comms-style-source/references/platform-positioning.md`, engage that file as the framing overlay throughout the pipeline. The platform framing affects opening choice, lead paragraph emphasis, comparison handling, and closing position.

If the release type is ambiguous, ask the user once before starting. Otherwise infer from the request and proceed.

The router is extensible. New release types can be added to `.agent/skills/ai2-comms-style-source/references/release-types.md` (with the same structure: definition, positioning, avoid, key files, anchor) without changing this phase.

### Pre-draft engagement scoping

For platform-line releases, multi-asset bundles, demo-bearing releases, Type 9 process posts, and any release where partner attribution, demo scope, asset staging, or arc placement is unsettled, route to `ai2-comms-launch-engagement` BEFORE Phase 2. The engagement skill produces a decision sheet (prior anchor, the move, next pointer, audience, demo decision, asset staging matrix, claims-freeze date, partner roles, follow-up beat, approval flags). The writer reads the sheet first and drafts from it; settled questions do not reopen.

Skip engagement scoping for solo newsletter recaps and pure update notes.

## Phase 1 — Voice authority (overlay)

`ai2-comms-style-source` is the authority for fidelity, approval gates, the house lexicon (`fully open`, `reproducible`, `transparency`, `community`), the house-style patterns, and the newsletter format. Keep it in scope across the run; consult its references whenever any later phase needs voice arbitration. Do not skip — this is overlay, not a discrete step.

## Phase 1.5 — Engagement scoping (if applicable)

For platform-line releases, multi-asset bundles, demo-bearing releases, Type 9 process posts, and any release where partner attribution, demo scope, asset staging, or arc placement is unsettled, apply `ai2-comms-launch-engagement` before drafting.

The engagement skill produces a decision sheet covering: prior anchor on the platform line, the move this release makes, next pointer, primary audience, demo decision (with falsifiable claim), asset staging matrix (T-0 vs. staged), claims-freeze date, comms and Labs entry dates, partner roles (one per name), prior-release evidence, talent direction, and follow-up beat after T-0.

Hand the sheet to the writer at the start of Phase 2. The writer drafts from the sheet, not around it. Settled engagement questions do not reopen in the draft.

Skip this phase for solo newsletter recaps and pure update notes.

## Phase 2 — Draft

Apply `ai2-comms-writer`:

- One of three opening forms (problem-first, announcement-first, context-plus-stakes); pick the form that matches the contribution.
- Canonical arc: problem/context → announcement and core claims → technical deep dive → evaluation and results → artifacts and CTAs.
- For newsletters: announcement-first headline in `Introducing [Product]—[quantified benefit]` form; lead paragraph with absolute + delta + scope + `That means...` practical translation; canonical closing position `We think [X] represents a promising direction for the field, and we want the community to be able to build on what we've found.`; roundup items at two to three sentences with a single CTA each.
- Heading conventions: sentence case, descriptive, seven words or fewer.
- House lexicon paired to concrete mechanism on every use.
- Comparison framing scaffold (absolute + delta + scope) on every comparison.
- Inline limitation parity — surface constraints as findings, not quarantined into a closing limitations section.

## Phase 3 — Parallel review

Run both lectors. They are independent and can fire in parallel.

- `ai2-comms-structure-lector` — opening form, canonical arc, redundancy across title/subtitle/caption/body/footnote, mood-only headings, quarantined limitations, newsletter structure checks when applicable, framing fidelity to the actual contribution.
- `ai2-comms-claims-lector` — bare `state-of-the-art` (blocker), missing absolute/delta/scope on comparisons, unpaired house lexicon, editorialized closed-model framing, approval-gated mentions. Output uses Blocker / Caveat / Verify / Clean.

Hand findings back to the writer for revision. Loop Phase 2 ↔ Phase 3 until both lectors clear the draft.

## Phase 4 — Charts (if applicable)

Apply `ai2-comms-chart-designer` when the task involves benchmark charts, leaderboard tables, Pareto frontiers, or score-vs-cost scatterplots. Highlight the Ai2 system in pink; comparisons in neutral teal or gray. Captions are full-sentence insights, not axis labels. If the chart carries a claim that has not yet been reviewed, route it through `ai2-comms-claims-lector` first.

## Phase 5 — Cross-post (if applicable)

Apply `ai2-comms-channel-adapter` when the task spans more than one surface (X, LinkedIn, Reddit, Discord, Bluesky, Hugging Face blog, newsletter). Preserve the opening form from the cleared blog draft across surfaces; the one structural exception is the newsletter lead-story headline, which is always announcement-first with an em-dash quantified benefit regardless of the source blog's opening form. Confirm both lectors have cleared the source draft before adapting.

## Phase 6 — Deliver

Present the final copy (and any chart, platform-adapted variants). In a short Notes section, list:

- Blockers the lectors raised that you could not resolve from the provided source material.
- Approval-gated claims that need clearance before publication.
- Any substantive changes from the source you flagged during drafting or adaptation.

Before delivering, scan the draft body for assistant commentary or meta-notes that leaked in. Any line that describes the edit (`The last line now names both ends ...`, `I've moved the ...`) rather than being the copy must be removed. Commentary belongs in the Notes section, not the draft.

Do not invent missing source. If a comparison, benchmark number, or claim cannot be supported from the provided material, mark it as `Verify` and request the source rather than filling from memory.

## Suite Dependencies

This pipeline assumes the rest of the Ai2 comms suite is available:

- `ai2-comms-launch-engagement` (with references: `.agent/skills/ai2-comms-launch-engagement/references/arc-ladders.md`, `.agent/skills/ai2-comms-launch-engagement/references/launch-readiness-checklist.md`) — pre-draft decision sheet producer; routed in Phase 0 before the writer.
- `ai2-comms-writer` (with reference `.agent/skills/ai2-comms-writer/references/revision-passes.md` for the eight-pass revision sequence)
- `ai2-comms-style-source` (with references: `.agent/skills/ai2-comms-style-source/references/voice-and-prose.md`, `.agent/skills/ai2-comms-style-source/references/ai-prose-to-avoid.md`, `.agent/skills/ai2-comms-style-source/references/claims-and-benchmarks.md`, `.agent/skills/ai2-comms-style-source/references/approval-gates.md`, `.agent/skills/ai2-comms-style-source/references/source-fidelity.md`, `.agent/skills/ai2-comms-style-source/references/house-style-patterns.md`, `.agent/skills/ai2-comms-style-source/references/newsletter-format.md`, `.agent/skills/ai2-comms-style-source/references/newsletter-example.md`, `.agent/skills/ai2-comms-style-source/references/worked-shapes.md`, `.agent/skills/ai2-comms-style-source/references/anchor-patterns.md`, `.agent/skills/ai2-comms-style-source/references/release-types.md`, `.agent/skills/ai2-comms-style-source/references/platform-positioning.md`)
- `ai2-comms-structure-lector`
- `ai2-comms-claims-lector`
- `ai2-comms-chart-designer`
- `ai2-comms-channel-adapter`

When an agent can only hold one skill at a time, read `ai2-comms-style-source` — it carries the voice, source-fidelity, claims, and approval rules the other skills build on.

## Process Discipline

### Do not lock in early format decisions

A stat that integrates into prose in one pass may land better as a standalone paragraph in another. A triplet that reads naturally early can collapse to two items by closing pass. Same content lands differently depending on visual rhythm, surrounding density, and the surface's compression target.

When format decisions feel context-dependent, surface that to the user rather than committing. The headline is a particular case — draft it as a working title early; finalize after the body settles.

### Verification that does not ship still sets the scope

Doing the source work and then cutting nearly all of it is a normal outcome, not wasted effort. On an enablement or testimonial piece the shipped copy may carry no figures at all, while the verification is what told you which claims were safe to make in plain words: that a partner's `~260,000 pairs` pins one specific dataset mixture, that an unqualified `R² = 0.9` belongs to one of two pipelines, that a finding came from base models rather than the released one. Those checks change the sentences that survive even when none of the digits do.

So verify first and decide altitude second, and keep the cut figures in the draft's comment header or the delivery notes rather than discarding them — the next reviewer, or the partner's own approval pass, will ask where a claim came from. What the verification does not license is smuggling the numbers back in because they were expensive to get.

### Respect user word choices

When the user pastes revised paragraph copy and asks to `smooth out`, default to minor polish, not structural changes. Their word choices are deliberate unless they explicitly flag something.

`Smooth out and beef up` is a composite instruction: tighten (smooth) and add substance (beef up). Identify each operation and apply each consciously. Do not interpret composite instructions as license for full restructure.

A word the lector flagged that the user then writes back in is settled: the reinstatement converts the flag to a sticky user choice; do not re-flag it on later passes. Anchor: `cutting-edge` was lector-flagged as marketing filler in an event draft; the user's hand-edit restored it, and it stayed.

### Offer multiple options on word-choice rejection

When the user rejects a word choice (`better word than in practice?`), offer three or four alternatives with brief reasoning rather than picking one. Lets the user choose by feel rather than accepting a single best guess.

Pattern for the response: `X (option), Y (option), or Z (option) — your call`.

Anchor: a single clause in a thread item absorbed roughly nine revision passes as the assistant guessed a single replacement per pass and the user kept rejecting. Surfacing (a)/(b)/(c) options with a recommendation each pass outperformed guessing — the user picks by feel, the loop closes faster.

### No sentence fragments, on any surface

Every sentence gets a subject and a finite verb — thread posts, captions, chart footnotes, and roundup items included. Verbless fragments read as punchy while drafting and as unfinished once published, and compression is not an exemption: when a fragment appears because a post is over budget, cut a different word and keep the verb.

The recurring shapes are a trailing attribution hung on a noun phrase (`Circumstantial support for a detector score, he says.`), a dash-hung payoff (`Circumstantial evidence, not proof.`), a label-plus-value line (`In award-winning or nominated literature: 19.1%.`), and staccato emphasis (`Faster. Cheaper. Simpler.`). Elliptical coordination inside one sentence and artifact-link labels (`📄 Paper: [link]`) are not fragments and stay.

Removing a trailing-attribution fragment often removes the attribution too. Check whether the claim landed in the house voice as a result, and flag it if so rather than absorbing the change silently — the fix that keeps both is a full attributing clause (`Chakrabarty calls those matches circumstantial support`).

For the full rule with worked fixes and the anchor, see `.agent/skills/ai2-comms-style-source/references/voice-and-prose.md` (Complete Sentences, Not Fragments).

### Strip typos and placeholders silently

User chat input often contains typos (`organicaly`, `robotivcs`, missing commas) and placeholders (`xxxxx`, `xxxxxx`, `[fill in]`). Fix typos and fill placeholders silently when applying to the doc. Do not comment or draw attention.

Exception: if a typo or placeholder creates genuine ambiguity (could mean two different things), ask for clarification. Otherwise, fix and move on.

Second exception: when the typo lives in copy the user will paste directly — their own locked final, not a draft you are transforming — flag it explicitly in addition to fixing your copies. A silent fix downstream does not save the version going live. Anchor: a locked thread's `whatever your building` needed the your→you're flag surfaced, because the user was posting from their own text, not from the reworked crosspost that had quietly fixed it.

### Paste artifacts vs deliberate cuts in long-form copy

When the user pastes a hand-edited long-form draft to smooth, separate formatting lost in the paste from content the user actually removed. Plain-text copy-paste strips markdown links, italics, and headings; treat those losses as artifacts and restore them (an inline source link the prior draft carried, a section heading that anchors parallel structure). But text the user cut — a paragraph, an example, a quote — is a deliberate edit: honor it and flag it rather than silently re-expanding. When a cut leaves a claim dangling (a referent with no antecedent, a `reproducible` whose mechanism is gone), restore the minimum to keep it coherent or accurate, and say what you put back.

Bracketed inline notes are drafting instructions, not stray text. `[is there a better quote to close this?]`, `(what's his group?)`, `[good closing quote here]`, `(earlier how?)` are questions to answer or slots to fill from source — handle them like the substantive content slots above; do not strip them silently, and do not leave them in.

Anchor: across several smoothing passes the user's plain-text pastes dropped a source link and a section heading (restored as artifacts), cut a worked example and an aspirational paragraph (honored as deliberate, flagged as available to restore), and left bracketed slots (`[closing quote?]`, `(what's his group?)`) — filled from the researcher's own answers, with the un-nameable group left generic and flagged.

A bracketed note that proposes an answer — `(more closely integrates?)`, `(click?)` — is still a proposal to weigh, not a decision to adopt. Judge each for overclaim, redundancy, and accuracy: keep the ones that sharpen the copy, decline the ones that over-reach or repeat, and say why. In one session `(more closely integrates?)` was accepted (more accurate than `connects`) and `(click?)` became `one click`, while `(handles ambiguous phrasing better?)` was declined as an escalation and `(to asta?)` was declined for doubling `Asta` in one sentence.

### Smoothing pasted thread copy

When the user pastes a revised thread and asks to "smooth," three operations beyond word-polish are in scope and expected:

- **Re-count every edited post against the surface budget.** User edits routinely push a post over the limit — an added clause, a swapped word, a restored adjective. A post that left at 263 comes back at 292. Re-verify each pasted post (links at 23 on X, emoji at real weight) before returning it; never assume a hand-edited post still fits. See `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (Re-count every edited post when smoothing pasted copy).
- **Split a budget-busting bundled post.** When the user bundles several beats into one "post" that runs 2–3× the limit, splitting it into posts that fit is a budget-forced mechanical fix, not a structural override of "smooth = minor polish." Keep the order and content; flag the split so it reads as forced, not as a liberty taken.
- **Draft substantive content slots from source.** A slot like `this should be about the X dataset` or a `Prediction is valuable because xxxxx` lead is a drafting instruction, not a throwaway placeholder. Draft it from the source material, scoped and source-faithful, like any other beat — this differs from the silent fill for trivial placeholders (`xxxxx`, `[fill in]`) above.

Anchor: in one smoothing session the user's pasted posts measured 292, 302, and 284 against a 280 limit, each needing a trim; a single "Tweet 2" bundling a motivation plus two applications ran ~520 characters and had to be split into separate posts; and two slots (`Prediction is valuable because xxxxx`, `this should be about the dataset`) were drafted from source rather than silently stripped.

## Iteration Discipline

### Sticky vs. provisional decisions

Some decisions persist across iterations; others can flip pass by pass.

- Sticky: headline form, mission framing, factual claims, attribution chains, approval-gated content.
- Provisional: list length (2 vs. 3), transition words, em-dash vs. comma, specific verb pairs, named-example specificity.

When a user changes a provisional decision, apply it without re-litigating. When a user changes a sticky decision (a claim, an attribution), confirm the underlying fact before applying. The cost of getting a sticky decision wrong is higher.

### Surface uncertainty with options

When a fact, claim, or framing is uncertain, surface the uncertainty with explicit options. `Could be: (a) the blog has an error, (b) the task names were rephrased, or (c) the evaluation got updated.` Multi-option phrasing invites the user to disambiguate without forcing a defensive response.

Pattern: `I see X; possible interpretations are A, B, C — which fits?`

### Push back on user pushback when source supports prior

When the user says `this isn't correct`, fetch the source before reverting. If the source supports the prior text, surface the source passage and ask for clarification rather than auto-deferring.

Pattern: `Source says X; if X is wrong, please correct me — but I want to flag what the source says before reverting.` Revert to a safe version while awaiting clarification; do not keep contested copy live.

### Expect long iteration cycles

A substantial newsletter or launch piece runs 10–30 iteration cycles. The editorial conversation is the work, not preparation for the work. The final draft is the conversation distilled.

Do not optimize for two-pass closure on a complex piece. Plan for sustained back-and-forth; each cycle adds a small refinement.

## Rule Interactions

When multiple rules apply, watch for these specific interactions:

### Conjunction rule plus triplet variation

The conjunction rule requires `and`/`or` in lists; the triplet variation rule says do not default to three-item lists. These do not conflict — the conjunction rule is about HOW lists are punctuated, the triplet rule is about LENGTH.

When trimming a triplet to two items, you MUST add the explicit conjunction. `Inspect, adapt, and improve` → `inspect and adapt`. Comma-only construction (`inspect, adapt`) is asyndeton and violates the conjunction rule.

### Conjunction rule plus clause-joining `and` discipline

The conjunction rule requires `and` / `or` in lists. The clause-join rule flags two clause-level `and`s in one sentence — three independent clauses strung together. These do not conflict, because they govern different `and`s.

- List-item `and` joins nouns or phrases inside one clause: `weights, training code, and the eval harness`. Required. Comma-only is asyndeton and stays disallowed.
- Clause-level `and` joins two sentences that could each stand alone: `we released the weights and the harness is on GitHub`. Two of these in one sentence is the flag.

Resolution: audit the two separately. Count only the clause joins, and leave every serial list intact. The fix for a clause join is a period, a semicolon, or a subordinating word (`because`, `after`, `so`, `which`, `while`) — never dropping the conjunction from a list, and never an em-dash pass. On X and Bluesky the `&` rendering applies to list joins; a clause-level `&` gets split or spelled out (see `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md`, Compression stacks clauses on the conjunction).

### Triplet variation plus the measured rule-of-three tell

The triplet-variation rule is filed under editorial taste in the lectoral hierarchy below. The three-item list is also a corpus-measured tell of model prose, which raises its weight when several other measured tells are present in the same draft.

Resolution: the default tier holds, and the escalation is per draft. One triad in an otherwise varied draft is taste, and a reviewer can leave it. Uniform triads across a piece, alongside stacked `and`s and no short sentences, are a measured pattern — in that draft, raise the flag from taste to house style and fix the uniformity.

### `Fully open` canonical pairing plus `open AI` adjacency avoidance

`Fully open` pairs once with the concrete artifact list. Other openness descriptors must avoid the bare `open AI` adjacency (parses as OpenAI).

Place `fully open` plus artifact list first. Then audit other `open` instances; if any are followed by `AI`, restructure (`open model`, `open foundation`, `open robotics model`, or insert another word between `open` and `AI`).

Exception: `open source AI` is safe because `source` breaks the adjacency.

### Triplet variation plus named-example specificity

When a quantitative claim gets named-example backing, the natural number is 2. Go to 3 only when the examples themselves show meaningful range (kitchen → lab → kitchen, not lab → lab → lab).

### Approval gates plus factual accuracy

Approval gates restrict naming certain entities; factual accuracy requires correct attribution. When approval is denied but the entity is factually load-bearing, restructure rather than omit. A named lab at a named medical school becomes `a clinical research lab` when the institution's gate is not cleared; restructure the surrounding clause so it carries the claim without the named institution rather than dropping the claim.

### Conjunction rule plus channel &/+ rendering

The conjunction rule requires a conjunction in lists (not comma-only); the X/Bluesky convention renders that conjunction as `&` or `+`. These do not conflict — one is about the presence of a conjunction, the other about its rendering per surface. On X and Bluesky, satisfy the conjunction rule with `&` / `+`; spell it out everywhere else.

Comma-only joins remain asyndeton on every surface, including X and Bluesky. `weights, training code, eval harness` is still wrong on X; the correct compressed form is `weights, training code, & eval harness` or `weights + training code + eval harness`.

See `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (X Thread and Bluesky sections) for the surface rendering. See `.agent/skills/ai2-comms-style-source/references/house-style-patterns.md` (Conjunctions And List Joins) for the underlying rule.

### Opening-post link plus hook discipline and character budget

The channel rule puts the canonical destination link in post 1 of an X or Bluesky thread. The hook rules say post 1 leads high-level and holds the specific finding for a mid-thread reveal, and the budget rules cap that post at 280 (X) or 300 (Bluesky). None of these conflict — the link is a mechanic, the hook rules govern content.

Resolution: draft the hook to its own rules, then count it with the link already in place (23 on X, the full URL on Bluesky). When it runs over, trim the hook rather than drop the link. A problem-first hook stays problem-first with a URL at the end; carrying a link does not make post 1 announcement-first, and it does not license spending the hook on the payoff.

The one case where the link goes: the destination is not live. A staging or placeholder URL in a public post is a claims-lector Blocker, so post 1 ships linkless and the thread waits.

See `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (Put the primary link in the opening post) for the default and its exceptions.

### Plain-language pass plus statistical precision

The plain-language pass (`.agent/skills/ai2-comms-style-source/references/voice-and-prose.md`, Plain-Language Pass For Broad Audiences) authorizes glossing undefined jargon for a broad audience. The precision rule (`.agent/skills/ai2-comms-style-source/references/claims-and-benchmarks.md`, Precision With Gloss, Not Folksy Paraphrase) bans replacing a precise statistical term with a folksy paraphrase that drops information.

Resolution: precise term plus gloss, not paraphrase instead of term. When a term carries information a paraphrase cannot recover (`standard error`, `minimum detectable effect`, `paired comparison`, `variance reduction`), keep the term and gloss it briefly on first use. When a term is engineering jargon without statistical content (`persist`, `stub`, `sandbox`), replace with a plain-language equivalent.

After any plain-language pass, run Pass 8 (Source Re-Diff After Plain-Language Edits) to catch drift-back: overclaim, dropped facts, meaning-changing synonym swaps.

### Exact-formalism plus compressed-copy payoff

Source-fidelity wants the source's exact term for named constructs (`bimanual manipulation`, `mixture-of-experts routing`, `Bayesian surprise`); the compressed-copy rule wants the plain-language payoff on social and other short surfaces (`two-armed`, `sparse routing`, `the most surprising results`).

Resolve by surface, not by rule preference:

- Technical blog, Hugging Face blog, paper-aligned channels → match the source formalism. The audience expects the named construct.
- Compressed social (X, Bluesky, newsletter lead, LinkedIn) → state the payoff in plain language. The audience cannot decode the named construct without explanation.

Three failure modes to watch for on compressed surfaces:

1. **Half-gesture** — pointing at a mechanism without naming it (`surfacing the findings that most change what it expected`). Fix: state the payoff.
2. **Jargon with no referent** — naming the mechanism so precisely it becomes jargon for a reader with no setup (`responses during RL`). Fix: drop to plain altitude, or cut from the list and give the concept its own setup beat.
3. **Wrong-noun count** — counting relationships but using distinct-entity language (`depends on 512 models` when the table counts edges). Fix: match the noun to what the source counts.

When a reader calls a compressed item `vague`, the cause is often missing context, not insufficient precision. Escalating jargon is the wrong fix. See `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (Third Failure Mode: Jargon With No Referent) and `.agent/skills/ai2-comms-style-source/references/source-fidelity.md`.

## Meta-Rules

### Lectoral hierarchy

When multiple rules conflict, priority order:

1. Factual accuracy (claims-lector primary domain).
2. Approval gates (some names and claims cannot appear regardless of other rules).
3. Source fidelity (preserve source language for technical claims).
4. House style (`fully open` pairing, conjunction rule, etc.).
5. Editorial taste (triplet variation, em-dash threshold, etc.).
6. Rhythmic flow (paragraph length, sentence variety).

Escalate factual concerns. Defer editorial taste. When in doubt, ask.

### User memory and project preferences override skill defaults

Standing user or project instructions — whatever persistent memory, project config, or session context the agent has been given — describe preferences. Skill rules describe defaults. Check those standing instructions first; skill defaults apply only where they are silent.

### Skills should encode editorial reasoning, not just patterns

`Use comma instead of em-dash for soft appositives` is a pattern. `Use comma when the aside reads naturally as a sentence extension; use em-dash when the aside is a stronger interruption` is the reasoning. Reasoning generalizes better than patterns when an unfamiliar case shows up.

For each rule referenced in this pipeline, the underlying skill file should include both the pattern AND the test for when it applies.

### Anchor examples preserve rules from drift

Rules without worked examples drift over time. Each major rule in the suite should preserve at least one concrete before/after pair from a real edit. See `.agent/skills/ai2-comms-style-source/references/anchor-patterns.md` for the canonical anchor examples library.
