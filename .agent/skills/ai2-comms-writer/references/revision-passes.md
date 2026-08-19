# Revision Passes

Discrete passes to run after a draft is complete. Each pass targets one class of failure; running them in order produces a tighter draft than running them mixed together.

## Pass 1 — Word Repetition Audit

### Root-level collisions, not just exact-word collisions

`Build on` (P1) and `is built to change that` (P3) share a root. Same-root repetition at paragraph-adjacent distance is a tic even when the grammatical roles differ.

Audit at the root level: `build / built / building / build-on`, `release / released / releases / releasing`, `study / studied / studies / studying`. Flag any non-functional root that repeats within two sentences or across adjacent paragraphs.

Worked fix: `MolmoAct 2 is built to change that` → `MolmoAct 2 changes that` once the cascade above used `build on`.

### Short-distance word repetition

A single non-functional word appearing more than once within two sentences is a flag, not a feature. `Tasks like ...` followed by `for each task` repeats the noun without paying for the repetition.

Run a word-repetition pass on every paragraph after drafting. Flag any non-functional word that appears more than once within two adjacent sentences.

### Distance-based tolerance

Distance tolerance is shorter than most drafts assume. `Fully open` appearing twice within a four-paragraph window is a flag. House-style canonical phrases (`fully open` paired with the artifact list) get one canonical use; descriptor uses elsewhere should swap to a shorter form (`open`).

Same applies to repeated `we released`, `we built`, `our contribution`. Once per piece for the canonical strong form; alternative forms elsewhere.

### Transitions are not exempt

A transition sentence picking up `tasks` from the prior paragraph and handing off to another `tasks` reference is a triple repetition no matter how natural the transition feels. After writing a transition sentence, re-scan it against both the prior paragraph and the next paragraph for word echoes.

### Edits are not exempt: re-scan the neighborhood after a cut or add

The audit above runs after drafting, but every later edit reopens it for the lines it touched. A cut can collide two phrases the removed clause held apart; an added word can double a noun or verb the neighboring sentence already uses. Re-scan the immediate neighborhood after each cut or insertion, not only after the first draft. This is the echo analog of the character-count re-check in `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (Re-count every edited post when smoothing pasted copy) — an edit reopens whichever check it can violate.

- Cutting a post's opening clause pulled the prior post's preview (`evaluates its own results & searches again when they fall short`) up against this post's mechanism (`evaluates whether the results actually answer it, & keeps searching`) — the cut created the echo, caught on re-scan.
- Applying `one click` produced `that's now one click. Click "Explore with Asta"` — the inserted phrase doubled `click` with the next sentence; fixed by swapping the verb to `Hit "Explore with Asta"`.

### X threads: each tweet counts as a paragraph

In an X or Bluesky thread, each tweet is a paragraph for the repetition audit. The product or system name appears once — usually in the opening tweet — then becomes `it` (or the named recast for ambiguity, per the pronoun rule) in subsequent tweets. A name that repeats across adjacent tweets reads as a hashtag, not a thread.

Same applies to the central noun: if tweet 1 is about a `graph`, tweet 2 should not also lead on `graph` unless the second mention is genuinely doing new work. Recast as contents (`the datasets and models behind it`) per the graph-theory vocab rule.

## Pass 2 — List And Example Discipline

### Vary list lengths across a piece

Do not default to triplets. Aim for variety across a piece: 1, 2, 3, 4, 5. A one-item example with `like` implies others without listing them.

Worked mix from a recent newsletter: one-item (`tasks like crop-type mapping`), two-item (closed-vs-open framing), three-item (P2 task examples), five-item (artifact list). The variety creates rhythm.

### Named-example specificity is editorial taste, not a rule

Named examples (test tube, popcorn, knife in box) can be added or removed across iterations depending on what the surface needs. Some surfaces benefit from named examples (technical blog, X thread); some do not (newsletter where the framing matters more than specifics).

Do not lock in early. Ask whether named examples serve the surface or distract from the framing.

### Default to 2 examples when grounding a quantitative claim

When a quantitative claim (`7 of 8 tasks`) gets example backing, the natural number is 2. Go to 3 only when the examples themselves show meaningful range (kitchen → lab → kitchen, not lab → lab → lab).

### Thematic fit of examples to surrounding text

When P2 uses `pipette into a tray` as an example, P3's `preparing the pipette tip` creates an unnecessary echo. Audit example choices for thematic collision with already-used examples. Pick examples that show range from established examples, not parallel ones.

### Count the triads across the piece, not one list at a time

The three-item list is a measured tell of model prose, and it survives review because each instance reads fine on its own. Tabulate every enumeration in the draft with its length. All-three is the flag; the number then came from cadence rather than from the source.

Trimming a triad rewrites the sentence around it, and Pass 4 audits sentence length, openers, and clause joins in whatever sentences survive — so run this pass first. The trim does not lower Pass 4's count on its own: it keeps its conjunction, and a list `and` is not a clause join (see Pass 4, Clause-joining `and`).

Keep a triad when the three items move along a real dimension (`some / fewer / almost none`) or show genuine range. Cut it when the items are interchangeable. See `.agent/skills/ai2-comms-style-source/references/ai-prose-to-avoid.md` (Rule Of Three As A Default).

### Conjunction discipline when trimming triplets

House style requires conjunctions in lists (`and`, `or`); avoid asyndeton. When trimming a triplet to two items, add the explicit conjunction: `inspect, adapt, and improve` → `inspect and adapt`. Comma-only construction (`inspect, adapt`) is asyndeton and is not a valid trim.

## Pass 3 — Punctuation Specificity

### Confirm dash type when user references "dashes"

Em-dash (—), en-dash (–), hyphen (-) — three different characters with different uses. When a user mentions `dash` or pastes a dash character, confirm which one before applying doc-wide.

Recent house preference: spaced hyphens (` - `) for parenthetical asides defining technical terms; em-dashes acceptable for stronger breaks; commas for soft appositives.

### Em-dash to comma threshold

Default to comma for soft appositives. Reserve em-dash for genuine breaks: an aside that interrupts the sentence rhythm or contains its own clause-internal punctuation.

If the aside reads naturally with a comma, use the comma. Many em-dashes in draft prose collapse to commas in revision; that is the expected direction.

### Spaced hyphens vs. parentheses for technical asides

For tokenizer-style `what this does` parentheticals, prefer spaced hyphens over parentheses.

- Avoid: `(which translates X into Y)`.
- Prefer: ` - which translates X into Y - `.

Spaced hyphens read as quiet aside; parentheses read as supplementary; em-dashes read as a stronger break.

## Pass 4 — Sentence Structure Variety

### Length variety

Short sentences punch: `MolmoAct 2 changes that.` `Already, MolmoAct 2 has been piloted ...`.

Long sentences accumulate: `Earlier this month, we released MolmoAct 2, an open model for controlling robots in the real world.`

Mix both within a paragraph. Avoid all-long or all-short.

Make this countable rather than felt: in any paragraph of two or more sentences, count the sentences under twelve words. Zero is the flag. A deliberately single-sentence paragraph — the standalone traction stat in Pass 5 — is out of scope, since one sentence has no variety to audit. Model prose defaults to a uniform mid-length sentence, so a paragraph can read smoothly and still have no variety in it.

### Punctuation density and clause-joining `and`

Model prose joins independent clauses with `and`, thinning out the commas, semicolons, and parentheses that would mark how the clauses relate. Audit `and` at the clause level: two clause-joining `and`s in one sentence is the flag.

Fix by cutting the sentence at the join, or by naming the dependency the `and` left implicit (`because`, `after`, `so`, `which`, `while`).

This does not touch the conjunction rule in Pass 2. Serial lists keep `and` or `or` before the final item, and comma-only joins stay disallowed. The two rules govern different `and`s — one joins list items, the other joins clauses.

Do not answer thin punctuation with an em-dash pass. The dash is not the tell; splitting the sentence is the fix. See `.agent/skills/ai2-comms-style-source/references/ai-prose-to-avoid.md` (And-Chained Clauses And Thin Punctuation).

### Opener variety

Vary sentence openers across the lead. Do not open consecutive sentences with the same word.

Common shapes:

- `[Product] [verb]`
- `Already, [subject + verb]`
- `Since [date], [subject + verb]`
- `Alongside [anchor], we [verb]`
- `[Connector], [subject + verb]`

### Voice variety

Active voice is the default. Passive voice is acceptable when:

- The action matters more than the actor (`MolmoAct 2 has been piloted`).
- Avoiding noisy attribution chains in a long sentence.
- The actor is contextually obvious (so not naming Ai2 in every sentence about Ai2 actions).

### Stepped sentences for dense explanation

When a correct-but-dense causal or statistical explanation packs two or more abstract nominalizations or two or more linked clauses into a single sentence, split it into short sentences that move one step at a time, opening with a concrete intuition.

Test: does the explanatory sentence pack two or more abstract nominalizations or two or more linked clauses? Split.

Worked shape: a one-sentence variance-reduction explanation chaining paired comparison, shared difficulty, and residual signal → `Both answer the same questions, so a hard question is hard for both. Comparing them question by question cancels that shared difficulty. What's left is the real difference.`

See `.agent/skills/ai2-comms-style-source/references/voice-and-prose.md` (Stepped Sentences For Dense Explanation) for the matching long-form rule.

## Pass 5 — Paragraph Topic Discipline

### Every paragraph has one topic

Each paragraph in the lead has one clear topic; supporting sentences serve that topic. A newsletter lead with the canonical six paragraphs:

1. Identity plus closed-model gap.
2. Traction stat (often standalone).
3. Performance plus capability.
4. Deployment plus validation.
5. Dataset specifically.
6. Artifacts plus integration.
7. Closing.

### Topic-sentence test

Read the first sentence of each paragraph. They should map cleanly to `what this paragraph is about`. If a first sentence does not telegraph the paragraph's content, restructure.

### Lead-in transitions, sparingly

Some paragraphs need an explicit lead-in adverb or phrase to bridge from the prior paragraph: `Already,`, `Separately,`, `Alongside the dataset,`, `In practice`. Use sparingly. Not every paragraph needs one. When choosing transition words, prefer the one with the least editorial weight (`Already` over `In practice` for temporal punch).

## Pass 6 — AI-Ism Sweep

Cross-reference `.agent/skills/ai2-comms-style-source/references/ai-prose-to-avoid.md` and run its AI-Ism Taxonomy (rhetorical contrast, empty intensifiers, mood-only sentences, anthropomorphic descriptors, press-release register, list-to-payoff cadence) over the full draft. Apply the named fix per category; do not lump all AI-ism into one revision pass. Take rhetorical contrast first: `it's not X, it's Y` and its siblings are the cheapest fix in the file, and the pattern a general reader most often recognizes as machine phrasing.

Then sweep the word-level tells from the same file, which sit outside the taxonomy:

- Latinate hedges — `significant`, `increasingly`, `substantial`, `robust`, `comprehensive` where a number belongs. Route `significant` and `increasingly` to the claims pass as well; one implies a test, the other a trend. Keep `robust` with a named property, and `increasingly` on a sourceable field-level trend.
- Borrowed scientific jargon used figuratively — `rate-limiting`, `orthogonal`, `catalyze`, `inflection point`, `parameter` outside a parameter count. Literal uses stay.
- Nominalizations propped by a weak verb — `perform an evaluation of`, `there is a reduction in`. Artifact names (`the evaluation harness`, `ablation`, `deduplication`) stay.

Passes 2 and 4 already handled the two counting tells (enumeration length, clause-joining `and`). If either pass was collapsed or skipped, run its count here.

## Pass 7 — Comparison Framing And House Lexicon

For every comparison: confirm absolute + delta + scope (see `.agent/skills/ai2-comms-style-source/references/claims-and-benchmarks.md`).

For every use of `fully open`, `reproducible`, `transparency`, `community`: confirm the paired concrete mechanism appears in the same sentence or the immediately surrounding text (see `.agent/skills/ai2-comms-style-source/references/house-style-patterns.md` for the paired forms).

## Pass 8 — Source Re-Diff After Plain-Language Edits

A plain-language pass that translates jargon for a broad audience can drift back into source-infidelity in three ways: (a) creep into overclaim, (b) silently drop a capability or fact, (c) swap a precise term for a meaning-changing synonym. After any accessibility or plain-language rewrite, diff the new copy against the source for these three failure modes.

Test for each change the pass made: is this the same claim as the source, just clearer? Or did the rewrite change the claim's strength, drop a fact, or swap a term that meant something else?

Three failure modes, with anchors:

- **Overclaim creep.** A neutral term hardens into an absolute or intensifier. Anchor: `realistic runtime conditions` → `real-world conditions` (overclaim — `real-world` implies production deployment, not a runtime).
- **Dropped facts or capabilities.** A list of options or features silently shortens. Anchor: three authoring paths in the source silently became two in the rewrite; restore the third or note it was cut.
- **Meaning-changing synonym swap.** A precise term is replaced with a near-synonym that means something else. Anchors: `sealed/isolated containers` → `secure containers` (wrong attribute — isolation is not security); `reusable across harnesses` → `reusable across benchmarks` (harness and benchmark name different things); `small integration project / none overly burdensome` → `formidable integration project` (the rewrite reversed the claim).

This pass pairs with `.agent/skills/ai2-comms-style-source/references/voice-and-prose.md` (Plain-Language Pass For Broad Audiences) — that file authorizes the plain-language pass; this pass guards the source-fidelity reset after.

Pair with `ai2-comms-claims-lector` (drift-back check on accessibility rewrites) and `ai2-comms-structure-lector` (whether a capability list silently shortened).

## Pass Ordering

Run in this order. Earlier passes change material that later passes audit; reordering can produce drift.

1. Word repetition audit (Pass 1).
2. List and example discipline (Pass 2).
3. Punctuation specificity (Pass 3).
4. Sentence structure variety (Pass 4).
5. Paragraph topic discipline (Pass 5).
6. AI-ism sweep (Pass 6).
7. Comparison framing and house lexicon (Pass 7).
8. Source re-diff after plain-language edits (Pass 8).

If the draft is short or the revision scope is narrow, collapse adjacent passes. Do not skip Pass 7 for any draft that includes a comparison or a house-lexicon phrase. Do not skip Pass 8 for any draft that ran through a plain-language or accessibility rewrite.
