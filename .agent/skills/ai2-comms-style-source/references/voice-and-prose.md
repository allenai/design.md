# Voice And Prose

## Default Register

Use direct, natural prose. The copy should sound like a smart comms person wrote it: grounded, readable, specific, and technically literate. Tighten before embellishing.

Avoid:

- Scare quotes.
- Slang such as vibe.
- Generic AI launch language.
- Hype or unverifiable superlatives.
- Overusing not just.
- Journey, moment, movement, where X meets Y, and other experience-language filler.
- Poetic abstraction that is not grounded in a source fact.
- Punchy rhetorical openers that do not say anything concrete.
- Repeated em dash structures, symmetric em dash cadences, or em dashes used to pad rhythm. Em dashes are a legitimate Ai2 move for asides and emphasis; the failure mode is repetition, not the dash itself.
- Independent clauses strung on `and` where a period, a semicolon, or a subordinating word would say how they relate. Serial lists still take their conjunction; this is about clause joins.
- Latinate hedges where a number belongs: `significant`, `increasingly`, `substantial`, `robust`, `comprehensive`.
- Nominalizations propped up by a weak verb: `perform an evaluation of`, `there is a reduction in`.

Some of these are countable rather than audible, so a draft can read clean sentence by sentence and still show the pattern in the tally. See `references/ai-prose-to-avoid.md` (Rule Of Three As A Default, And-Chained Clauses And Thin Punctuation, Latinate Hedges, Nominalizations) for the counts and the fixes.

When copy sounds fluent but generic, read `references/ai-prose-to-avoid.md` and replace mood with concrete source detail. For positive opening forms, the canonical long-form arc, heading conventions, and the Ai2 house lexicon, see `references/house-style-patterns.md`.

## Openings

A strong intro quickly establishes:

1. What was released, found, or changed.
2. Why it matters.
3. Who it helps or affects.
4. What differs from prior work.

Start with the framework or concept when that is the contribution. Do not lead with experimental results if the real contribution is a method, benchmark, or conceptual reframing.

Do not open with broad claims about AI progress, research momentum, community, or experience. Open with the thing Ai2 released, measured, changed, or learned.

Three named opening forms cover almost all recent Ai2 launch posts: problem-first, announcement-first, and context-plus-stakes. See `references/house-style-patterns.md` for the patterns and selection rule.

## Long Form

Use clear sectioning and avoid the second-intro problem. Do not restate the same setup in the title, subtitle, caption, body, and footnote. Sharpen the so what instead.

For the canonical long-form arc, word budget, heading conventions, and audience segmentation, see `references/house-style-patterns.md`.

## Active Actor Vs. Static State

When the desired frame is a deliberate action (an extension, a launch, a commitment, a decision), put the org in the subject seat with an active verb. A static-state verb (`continues`, `is available`, `runs`) describes the world without crediting the decision behind it.

Choose the frame first, then choose the verb that carries it.

Test: is this a deliberate action you want the reader to register as such? Use an active verb with the org as subject. Genuinely just an ongoing state with no decision being announced? A state verb is fine.

Worked shape:

- Static state (often weak when the news is the decision): `[Program] early access continues.`
- Active actor (carries the decision): `We're extending [program] early access through [date].`

The static form fits a status page or a passive notice; the active form fits announcements, launches, and any copy whose news is that an action was taken. See `references/anchor-patterns.md` for a concrete worked example.

## Social Copy

Write platform-aware copy. X threads are concise and structured. LinkedIn can be more polished. Reddit and Discord should be less formal and invite technical discussion. Benchmark numbers usually belong in the blog and chart, not social copy.

For blog → cross-post adaptation, see `ai2-comms-channel-adapter`.

## Complete Sentences, Not Fragments

Every sentence carries a subject and a finite verb, on every surface — thread posts, captions, chart footnotes, roundup items. Verbless fragments read as punchy while drafting and as unfinished once published; they are the staccato form of the list-to-payoff cadence in `references/ai-prose-to-avoid.md`. Compression is not an exemption. When a fragment appears because a post is over budget, cut a different word and keep the verb.

Common shapes and their fixes:

- Trailing attribution on a noun phrase: `Circumstantial support for a detector score, he says.` → `Those matches are circumstantial support for a detector score.`
- Dash-hung or standalone payoff: `Circumstantial evidence, not proof.` → `The match is circumstantial evidence, not proof.`
- Label plus value: `In award-winning or nominated literature: 19.1%.` → `In award-winning or nominated literature, they covered 19.1%.`
- Staccato emphasis: `Faster. Cheaper. Simpler.` → one sentence naming what got faster and by how much.

Test: does every sentence have a subject and a finite verb? A trailing `, he says` or `, not proof` hung off a verbless noun phrase does not supply one.

Two things are not fragments and stay: elliptical coordination inside a single sentence (`which expressions also appear in existing sources, or where` — the verb carries across the `or`), and labels in an artifact-link block (`📄 Paper: [link]`), which are labels rather than prose.

When attribution is load-bearing, the fix is a full attributing clause, not a trailing tag: `Chakrabarty calls those matches circumstantial support for a detector score.` Dropping the fragment must not silently drop the attribution with it — check whether the claim is now in the house voice, and if it is, confirm that is intended.

Anchor: a thread post closed `Circumstantial support for a detector score, he says.` It was flagged as a fragment and rewritten to `Those matches are circumstantial support for a detector score.`, which cost the attribution — surfaced as a claims note rather than absorbed silently.

See also `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (Keep The Subject Chain Resolvable Within A Post), which flags the same failure at thread compression.

## Plain-Language Pass For Broad Audiences

When adapting research or technical copy for non-specialists, translate or gloss jargon on first use; do not lean on undefined terms. Common offenders: database and engineering verbs (`persist`, `stub`, `scaffold`, `sandbox`, `in-process`, `sweep`), harness language, shorthand like `controlled runtime`, pretraining-data jargon (`shards`, `bits-per-byte`, `microanneal`, `vigintile`, `data pool` vs `fixed training mixture`, `ladder-climb`, `deduplication`), physical-science jargon across materials, chemistry, and biology (`valence electrons`, `simulated`/`synthetic data`, `superconductor`, `polymer`, `intein`/`insertion site`, `folds into its 3D shape`, `Bayesian surprise`/`surprisal`), and climate-modeling jargon (`mean state`, `internal variability`, `forcings`/`boundary conditions`, `pre-industrial control run`, `coupled`, plus ML terms like `rollout` riding along in science copy).

Test: would a reader outside the subfield know what this refers to without a definition? If not, gloss it on first use or replace with a plain-language equivalent.

Worked shapes:

- `schema that persists runs` → `records every run`.
- `stubbing them out` → `substituting pre-written results`.
- `browsing through a controlled interface` → `browsing the web through an interface the framework controls`.
- `deduplicated within shards` → `removed near-duplicates within separate chunks of the data, called shards`.
- `a data pool, not a fixed training mixture` → `the sorted raw material in quality tiers, so teams choose the blend instead of inheriting one ready-to-train mixture`.
- `a quality score comparable across languages` → name what the comparability buys: `… so files sort into the same quality tiers regardless of language`.
- `valence electrons` → `the outer-shell electrons that form chemical bonds`; `a superconductor` → `a material that carries electricity with no loss`; `polymer molecules` → `the long molecules that make up plastics`.
- `simulated data` vs `real-world measurements` → `readings from a computer model rather than physical experiments`.
- A protein-engineering chain: don't drop `intein`/`insertion site`/`folds` cold — `the team inserts a light-sensitive segment into a host protein … a protein works only when it folds into the right 3D shape, and a bad insertion point ruins the fold`.
- Bridge across scales in a clause rather than asserting a sweeping rule: `a protein is a molecular machine that carries out a specific job inside a cell` (then a light-switch controls that one job), not `proteins control what cells do`.
- `the mean state comes out faithful` → `its average climate holds up` — the time-averaged outputs; let the next clause specify which averages (`temperature & precipitation biases are smaller than ...`).
- `internal variability` → keep the concept, gloss it as the payoff: `the climate's own natural swings`.
- `"perfect" forcings` → `"perfect" inputs taken straight from E3SM data` — the scare quotes carry the idea; the plain noun loses nothing.
- `across the 400-year rollout` → `across its 400-year run` — `rollout` is ML jargon that rides along in science copy.

Plain-language is not vagueness. When a technical or statistical term carries information that a paraphrase cannot, keep the term and gloss it briefly — see `references/claims-and-benchmarks.md` (Precision With Gloss, Not Folksy Paraphrase). Resolve the tension by precise-term-plus-gloss, not by replacing the term with a folksy paraphrase.

A separate case needs no gloss at all: a scientific term used as a figure of speech outside its field (`the rate-limiting step` of a workflow, `orthogonal to` for unrelated, `the parameters of the release`). This pass exists for terms that carry information the reader lacks. A borrowed metaphor carries none, so the fix is the plain word rather than a gloss. Keep every literal use — `a 7B-parameter model` is exact. See `references/ai-prose-to-avoid.md` (Borrowed Scientific Jargon).

After a plain-language pass, re-diff against the source for drift-back (overclaim, dropped capabilities, meaning-changing synonyms). See `.agent/skills/ai2-comms-writer/references/revision-passes.md` (Pass 8 — Source Re-Diff After Plain-Language Edits).

## Terminology Lock

Lock one reader-facing term per concept across a piece; bridge an API or source term to the reader term exactly once; never let one word carry two senses.

Test: list the nouns used for each core concept. If a concept has two or more words, standardize on one. If a word has two or more senses in the same piece, split them.

Worked shapes:

- A draft interchanged `test`, `eval`, `benchmark`, and `task` for the same concept → standardize on `benchmark` (reader-facing) plus `task` (API-facing, bridged once: `a task is how you define a benchmark`).
- A draft used `example` for both a benchmark item and a few-shot demonstration → split into `question` (the benchmark item) and `examples it's shown before the real questions` (the few-shot demos).
- A draft led on the paper's term, `direct preference optimization (DPO)`, and then used the acronym throughout. The shipped version locked the reader term instead: `preference training`, glossed on first use (`uses examples of better and worse responses to shape how a model behaves - for instance, how helpful, safe, concise, or compliant it becomes`), with `direct preference optimization` bridged exactly once, mid-body, where the mechanics are described. When a source term and a plain term name the same thing, the plain one is the reader term and the source term is the bridge, not the reverse.

For preservation of source-defined names (paper terminology, theorem names, benchmark names, model versions), see `references/source-fidelity.md` (Source Alignment).

## Stepped Sentences For Dense Explanation

When a correct-but-dense causal or statistical explanation packs two or more abstract nominalizations or two or more linked clauses into a single sentence, split it into short sentences that move one step at a time. Open with a concrete intuition.

Test: does the explanatory sentence pack two or more abstract nominalizations or two or more linked clauses? Split.

Worked shape:

- Dense: a one-sentence variance-reduction explanation chaining `paired comparison`, `shared difficulty`, and `residual signal`.
- Stepped: `Both answer the same questions, so a hard question is hard for both. Comparing them question by question cancels that shared difficulty. What's left is the real difference.`

Pairs with `.agent/skills/ai2-comms-writer/references/revision-passes.md` Pass 4 (Sentence Structure Variety).

## Name The Referent

A term can be plain and still be empty if the reader cannot say what it points to. Every word that prompts "what?" needs its referent on the page, especially when simplifying for a broad audience: a candidate (for what?), a lead (to what?), a rule (which one?), recordings (of what?), a link (between what?). This is the accessibility counterpart to `references/claims-and-benchmarks.md` (Compressed Comparatives: Referent Or Rephrase): there the floating term is a comparative; here it is any noun whose meaning lives off-page.

Test: read each load-bearing noun and ask `X what?`, `for what?`, or `between what?`. If the surrounding sentence does not answer it, name the referent or cut the term. Watch for terms that sound technical and specific but resolve to nothing concrete for the reader.

Worked shapes:

- `candidate neurons` (candidate for what?) → `neurons whose activity appeared to follow the task: which sense the mouse should be attending to, and whether its choices earned rewards`.
- `promising leads` (leads to what?) → `promising hypotheses`, the thing the analysis actually produces.
- `as the rule changes` (which rule?) → `rewarded for responding to sounds in some stretches and to sights in others`.
- `its recordings` (of what?) → `its brain-activity recordings`.
- `each causal link it draws` (between what?) → `each causal link it draws between two biological factors`.

Anchor: across one press-release edit the reviewer flagged `candidate for what?`, `leads for what?`, `the rule is too vague`, and `recordings, what?` on four separate terms. Each was fixed by naming the referent inline, not by adding more abstraction.

## Define Symbols And Acronyms On First Use

A symbol or acronym is empty until the reader is told what it stands for. Define every load-bearing symbol (`n`, `d`, `h`, `w_j`), acronym (`MSE`, `KDE`, `SD-KDE`), and named quantity (`bandwidth`, `score`) at its first appearance, in the reader's terms — even in a technical post. A bare `n = 2¹⁷` or `reweighted by w_j` with no gloss is a defect, not concision.

Test: read each symbol and acronym in order; the first occurrence must carry a gloss or definition. Lock one plain phrasing per concept and reuse it (`bandwidth` → `how far each data point's influence reaches`).

Anchor: across one technical-blog edit the reviewer flagged `n =` (sample size), `d` (variables per point), `MSE` (mean squared error), `bandwidth`, and `w_j` (a per-point factor that depends only on each context point's norm), each undefined on first use. Each was fixed by glossing on first use, not by dropping the symbol.

## Circular Or Tautological Explanation

When two quantities are related by definition, do not explain them as `linked through` a third thing when that third thing is the definition of one of them. State the identity directly, then its consequence.

Test: does a sentence say `A and B are linked through C`, where C is what A or B already is? If so it is circular; replace with the plain identity.

Anchor: `density and score are linked through the gradient of the log-density` — but the score *is* the gradient of the log-density, so the sentence links a thing to itself. Fixed to `since the score is the gradient of the log-density, we predict both from a shared backbone …` (identity stated plainly, then the architectural consequence).

## Watch For Unintended Phrasal Verbs

When a scalar or directional verb abuts a preposition, the pair can read as a phrasal verb with a different meaning. Separate the two senses.

Test: does a `verb + preposition` pair (`falls out`, `drops off`, `runs out`) read as an idiom where you meant literal scalar motion? Rephrase so the preposition attaches to the intended object.

Anchor: `its error keeps falling out to n = 2¹⁷` reads as `fall out` (drop out, quarrel); the meaning was that the error keeps decreasing as the sample extends to 2¹⁷. Fixed to `its error keeps falling as the sample grows to n = 2¹⁷`.

## Technical-Register Research Blogs

When the post explains a technical method, especially a paper Ai2 co-authored, sustain an academic, source-faithful register in the dense sections: include the key equations and named constructs, and keep the paper's exact terminology rather than swapping formal terms for casual synonyms. Cut breezy asides that editorialize the contribution instead of stating it.

Test: would a researcher recognize the construct and the term? Did an aside replace a fact with mood?

Anchor: `the result that makes this more than an engineering trick is a theoretical one` and `not a black box bolted onto a statistics problem` were struck for stating the structural-alignment claim directly. This pairs with the accessible intro through the difficulty ramp (`references/house-style-patterns.md`, Difficulty Ramp For Technical Research Blogs) — plain language up front, formalism in the core — and defers to `references/source-fidelity.md` (Source Alignment) on terminology. The first-person voice for an Ai2-co-authored paper is in `references/house-style-patterns.md` (First-Person Plural Voice, third exception) and `references/release-types.md` Type 11.

## Grant Agency Only To Agents

Inanimate artifacts — tokens, files, datasets, layers, columns — do not perform actions; they are acted on, or they sit in a state. Watch for an artifact in the subject seat of an action verb it cannot do: `tokens that require tracking`, `tokens that simply repeat text`, `the dataset decides`, `the column knows`. The model (or a person) does the requiring, tracking, or deciding; the token is, at most, a repeat or a copy.

Fix one of two ways: attribute the action to the real agent (`predicting these tokens requires tracking ...`), or describe the artifact's state with a stative verb or adjective (`repeated tokens`, `a token that is a copy of one earlier in the input`). This is the writer-facing counterpart to the claims-lector's state-verb-vs-action-verb check (`an account has a value; the user spends it`); it differs from the model-anthropomorphism move in `references/ai-prose-to-avoid.md` (Anthropomorphic descriptors), which grants a model cognition — here the artifact has no agency at all.

Test: for every action verb, can its subject actually perform the action? If the subject is a unit of data or text, recast to the model or person as agent, or to a stative description.

Anchor: `On tokens that require tracking meaning-bearing words ...` and `On tokens that simply repeat text already in the input` were flagged (`do tokens require? do tokens repeat?`) and fixed to `On meaning-bearing tokens that aren't repeats ...` and `On repeated tokens ...`.

Anchor: `Those scores train lightweight per-language classifiers` was flagged (`scores don't train`) and fixed to `we train lightweight per-language classifiers on those scores` — the scores are training data, not the trainer; the team trains.

## Frame Tolerance As Accommodation, Not A Demand On The Reader

A flexibility or tolerance feature is the tool accommodating the reader; frame it that way, not as the tool relaxing a demand it places on the reader. Phrasing that seats the reader as the constrained or deficient party — the one whose behavior the tool was policing — is a framing error even when the underlying fact is correct. `less rigid about how you phrase things` says the tool was rigid about the reader's phrasing, and a tool has no standing to police how someone phrases a request; the sentence quietly blames the reader for a limit that was the tool's. This is the same subject-seat discipline as Grant Agency Only To Agents above and the claims-lector's Subject-verb agency check, applied between two real agents: keep the accommodation seated in the tool, not the burden on the reader.

Test: does the sentence describe the tool accommodating the reader, or the reader having to conform to the tool? If the subject-object framing implies the tool was constraining or policing the reader, flip agency to the tool's own tolerance.

Anchor: `more conversational—better with follow-up questions, less rigid about how you phrase things` was flagged (`why would it be rigid about the user?`) and fixed to `more forgiving of how you phrase things` — the tolerance stays, but it now describes what the tool accepts rather than what it demanded of the reader.

## Introduce A Process Before Its Participle

Do not refer to a thing by the participle of a process the reader has not yet been told about. `the reprocessed pool` lands as a question — reprocessed how, from what? — if the passage has not yet said the work involved reprocessing. Name the action, or what was acted on, before using its participial label.

Test: for each participial descriptor used as a given (`reprocessed`, `deduplicated`, `distilled`, `calibrated`, `filtered`), has the process been introduced earlier in the passage? If not, introduce it first, then refer to its output.

Anchor: `the reprocessed code pool grows from 137B … We built it by reprocessing The Stack v2` — `reprocessed` appeared before the reprocessing was explained. Reordered to introduce `reprocessing The Stack v2 … from scratch` first, so `the reprocessed pool` then has its referent.

## Avoid Noun Pile-Ups

Three or more nouns stacked as modifiers force the reader to re-parse where the chain ends and the head noun begins. Unstack the longest runs into a prepositional phrase, and drop any modifier the others already imply. `best-selling Amazon Kindle ebook titles` → `best-selling titles on Amazon Kindle` (and `Kindle ebook` is redundant — Kindle already means ebooks). The same move clears `open web database` and the like once the stack gets long enough to stall.

Test: count the consecutive noun modifiers before the head noun. At three or more, move the platform or qualifier into a `… on/of/for …` phrase, and cut any modifier another already implies.

Anchor: `the best-selling Amazon Kindle ebook titles` (Amazon + Kindle + ebook + titles) became `the best-selling titles on Amazon Kindle`.
