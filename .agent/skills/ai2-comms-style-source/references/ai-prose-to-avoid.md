# AI Prose To Avoid

Reference inspiration: Sam Kriss, May 25, 2026, https://samkriss.substack.com/p/if-you-let-ai-do-your-writing-i-will; TechCrunch, March 13, 2025, https://techcrunch.com/2025/03/13/openais-creative-writing-ai-evokes-that-annoying-kid-from-high-school-fiction-club/; Rebecca Winthrop, May 27, 2026, https://www.nytimes.com/2026/05/27/opinion/writing-creativity-ai.html; and The Economist, "How to spot AI writing," July 30, 2026, https://www.economist.com/culture/2026/07/30/how-to-spot-ai-writing. Use the pattern diagnosis, not any source's hostile, joking, or opinion-page register.

## Core Smell

AI-inflected prose often sounds polished while refusing to say the concrete thing. It substitutes texture for information, mood for stakes, and balanced cadences for thought. In Ai2 comms, treat that as a publication risk: it can blur claims, weaken trust, and make real research sound generic.

A related risk is idea narrowing: model-assisted brainstorming can make a draft sound more verbally expansive while pushing the underlying frame toward familiar categories. Treat the angle, premise, and first draft as part of the writing, not as disposable prep work.

The tells here come from two kinds of evidence. Most are editorial observation: a reviewer read the line and it rang false. Several are corpus-measured, from side-by-side comparisons of model prose against human writing — sentence length, clause-joining `and`, punctuation density, enumeration length, Latinate diction, nominalizations, and the `not X but Y` contrast.

Count the density tells rather than eyeballing them: sentence length, clause-joining `and`, punctuation, enumeration length, and nominalizations propped up by a weak verb. Each reads as clean prose in one sentence and shows up only in the tally across a draft. Two of the measured tells are not tally-only. The `not X but Y` contrast is the one pattern a reader flags on a single instance, and the Latinate hedges are read one at a time because each marks a specific missing number.

## Positive Counterpart

This file is diagnostic — read it when copy feels off. For the generative side (opening forms, canonical arc, heading conventions, signature phrases, hedging forms, comparison framing, CTA shapes), read `references/house-style-patterns.md`. The two files are meant to be read together: avoidance plus templates.

## Avoid These Patterns

- Generic experience language: journey, moment, meaningful, authentic, crafted, human-centered, transformative, unlock, elevate, reimagine, delight, magic.
- Empty contrast formulas: `not just X but Y`, `more than X`, `where X meets Y`, `not a tool but a movement`, `it's not X, it's Y`.
- Poetic abstraction without referent: memory, silence, shadows, echoes, hidden stories, soul, texture, resonance, presence, possibility.
- Personified systems unless the source requires it: the benchmark remembers, the dataset speaks, the model understands, the landscape demands.
- Inflated sensory prose for non-sensory topics: taste, warmth, breath, heartbeat, hum, glow, pulse, unless literal.
- Symmetrical profundity: short fragments that sound decisive but do not add evidence.
- Moralized vagueness: responsible, trustworthy, open, safe, community-driven, unless tied to a concrete mechanism or decision. The Ai2 house lexicon — `fully open`, `reproducible`, `transparency`, `community` — is a legitimate signature when paired with the specific artifact, mechanism, or surface it points to; without that pairing it slides into the same vagueness. See `references/house-style-patterns.md` for the paired forms.
- Graph-theory vocabulary on general surfaces: `node`, `edge`, `vertex`, `graph traversal`. Describe the graph's contents in plain terms, not its structure. See `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (Graph-Theory Vocabulary).
- General enthusiasm before specifics: starting with broad claims about AI progress, open science, or changing the future instead of the actual release.
- Workshop profundity: straining for literary depth with liminal days, taste metaphors, grief metaphors, or "everywhere and nowhere" positioning.
- Self-conscious AI confession: copy that explains AI's inability to feel, remember, taste, grieve, or create instead of naming the actual product, result, limitation, or source.
- Homogeneous phrasing: lines that sound like many people got the same model output; generic cliches, common sentences, and familiar workshop cadences.
- Perspective or factual drift: a revision that changes point of view, invents an example, or introduces a factual error while sounding smoother.
- Verbal richness masking familiar ideas: varied adjectives, elegant transitions, and confident rhythm that make an ordinary frame look more original than it is.
- Suggestion lock-in: adopting the first model-suggested thesis, analogy, hook, or outline because it sounds plausible.
- Meanward revision: smoothing away the source's distinctive question, odd limitation, negative result, or researcher-specific perspective.
- Optics and instrument metaphors as verbs: `offer a lens into`, `a window into`, `shine a light on`, `greater magnification on`, `through the lens of`. They dress up a plain `show` / `reveal` / `isolate` and rarely do explanatory work. Replace with the plain verb (`the probes show where the gaps arise`, not `offer a lens into where the gaps arise`).
- Observation verbs drifting to surveillance: `monitor`, `surveil`, `keep watch over`, `observe` as the headline verb for what a product does. On an Earth-observation or remote-sensing product the connotation slides toward surveillance and away from the work. Prefer the plain action verb — `map`, `cover`, `measure`, `track [the metric]` — that names what the system actually produces.
- Empty momentum lines: a one-word rhetorical question used as a transition (`Why?`), a fronted intensifier that editorializes the result (`Most starkly,`), or a standalone line that re-asks the title or restates the prior sentence (`That is the question we set out to answer.`). They manufacture rhythm without adding a fact. Cut, or fold into the next sentence. (Concrete tells for the punchy-rhetorical-opener rule in `references/voice-and-prose.md`.)
- Setup-label colons: a fronted label capped by a colon that announces the point instead of stating it (`The split:`, `What we found:`, `The lesson:`, `The takeaway:`, `The intuition:`). It is the list-to-payoff move shrunk to one label. Cut the label and state the point. See Setup-Label Colons below.
- Clauses stacked on `and`: a long sentence carrying two or more clause-level `and`s, with the commas, semicolons, and parentheses that would mark the relation thinned out. See And-Chained Clauses And Thin Punctuation below.
- Default triads: a three-item list where the material has two parts or four. Distinct from the framed triplet under List-to-payoff cadence, which carries a summarizing payoff. See Rule Of Three As A Default below.
- Latinate hedges: `significant`, `increasingly`, `substantial`, `considerable`, `robust`, `comprehensive` standing where a number belongs. They underspecify rather than oversell, which is why they clear review. See Latinate Hedges below.
- Borrowed scientific jargon used figuratively: `rate-limiting`, `orthogonal`, `catalyze`, `inflection point`, `an order of magnitude` when the ratio is not ten, `parameter` outside an actual parameter count. See Borrowed Scientific Jargon below.
- Nominalizations propped up by a weak verb: `perform an evaluation of`, `provides an explanation of`, `there is a reduction in`. The action left the verb slot. See Nominalizations below.

## Replace With

- The concrete noun: model, benchmark, dataset, method, release, result, interface, policy, deployment, evaluation.
- The exact action: released, measured, trained, evaluated, open-sourced, compared, reproduced, reduced, increased.
- The scoped reason it matters: who can use it, what they can now inspect or reproduce, what changed from the prior baseline.
- The evidence: score, split, harness, cost method, source paper, leaderboard, run setting, example, limitation.
- The actual limitation: if AI cannot know, smell, remember, or feel something, do not stage that as a profound confession. State the product or evaluation boundary plainly.
- The source-first angle: write the claim, audience, and evidence before asking for style help.
- The distinctive detail: preserve the weird constraint, surprising failure, unpopular caveat, or narrow scope if it is what makes the work worth reading.
- The number the hedge stood in for: the delta, the count, the date, the scope. `Significant`, `increasingly`, and `comprehensive` each mark a spot where a figure belongs.
- The plain verb: `evaluated` for `performed an evaluation of`, `dropped` for `there was a reduction in`. The verb usually brings back the agent the nominalization dropped.

## Revision Test

For each sentence that sounds polished, ask:

1. What fact would be lost if this sentence were cut?
2. Could this sentence fit almost any AI launch?
3. Is the metaphor doing real explanatory work?
4. Can a reader tell what happened, who did it, and what evidence supports it?
5. Did the draft become more fluent while the idea became more familiar?
6. Did a model suggestion choose the angle before the source material did?

If the answer is weak, cut the sentence or rewrite it with source-specific detail.

Then run the counts once over the whole draft, since the measured tells do not show up sentence by sentence: clause-joining `and`s, the length of every enumeration, sentences under twelve words, and nominalizations paired with `perform` / `provide` / `there is`. A draft can pass all six questions line by line and still read as machine prose in the tally.

## Slop-To-Specific Examples

Weak: This work lives in the liminal space between open science and human creativity.

Stronger: Ai2 released the dataset, harness, and model outputs so researchers can inspect where the system fails and rerun the comparison.

Weak: The model forgets like a person, but in parameters.

Stronger: The update changed the model's outputs on the sampled prompts; compare the before/after examples before making any memory claim.

Weak: More than a benchmark, it is a meditation on trust.

Stronger: The benchmark tests whether agents keep following instructions after earlier steps create conflicting habits.

Weak: This work opens a bold new conversation about intelligence, creativity, and how AI helps us think.

Stronger: Lead with the source-backed contribution: what Ai2 released or measured, which setup produced the result, and what claim the evidence does not support.

Weak: Let's make the post more expansive by framing the model as a collaborator.

Stronger: Before using AI for copyediting, write three source-backed angles. Keep the angle with the most specific evidence, even if it is less familiar.

Weak: We performed an evaluation of the new checkpoint across the suite and the results show a significant improvement over the prior release, and the gains were increasingly clear on the harder splits.

Stronger: We evaluated the new checkpoint across all 42 tasks in the suite. It scored 72.4, up 3.3 points from the prior release, with the largest gains on the four hardest splits. (Four tells at once: a nominalization with `performed`, two clause-level `and`s, `significant` where the delta belongs, and `increasingly` where the split count belongs.)

## AI-Ism Taxonomy

Five subcategories of AI-inflected prose, each with a distinct tell and a distinct fix. When flagging AI-speak, name the subcategory so the fix is targeted.

### Rhetorical contrast structures

Forced binary comparisons that sound insightful but are constructed for rhetorical effect. Tells:

- `That's the difference between X and Y.`
- `Not just X but Y.`
- `X isn't just A — it's B.`
- `More than X, this is Y.`
- `It's not X, it's Y.` (the bare form, with no `just` — the shape that outside analyses name first when identifying model-written copy).

Fix: state the practical implication directly without the contrast structure. Often the surrounding sentence already does the work; the contrast is redundant. Cut.

Reader-cost note: of everything in this file, this is the pattern a general reader is most likely to recognize on sight as machine phrasing. It is also cheap to remove, since the fix is a deletion. Treat it as the first thing to cut when a draft has several flags. The close-position variant, where the contrast carries the final payoff, is in Aspirational And Forward-Looking Closes below.

### Empty intensifiers

Adjectives that signal importance without supplying information. Tells:

- `Powerful new model.`
- `Cutting-edge research.`
- `Game-changing approach.`
- `Revolutionary technique.`
- Authenticity adverbs on a finding: `a genuinely open question`, `genuinely new`, `truly novel`, `really surprising` — `genuinely` / `truly` / `really` assert that a result is real or novel instead of showing it.

Fix: replace with a measurable claim (`a 7B model that trains in 3x less compute`) or cut the adjective. If the noun stands without the intensifier, the intensifier was doing rhetorical work, not informational work. For the authenticity adverbs, cut the adverb — if the question is open or the result is new, the facts on the page show it.

### Mood-only sentences

Sentences that exist to set tone rather than convey information. Tells:

- `We're excited to share ...`
- `Today is a big day ...`
- `We can't wait to see ...`
- `It's been an incredible journey ...`
- `What we're most excited about is ...` (a selection frame riding on Ai2's excitement rather than the capability it points to).

Fix: cut entirely. Let the substance carry the tone. The reader gets the importance from the content, not from the announcement that this is important. For the selection-frame variant (`what we're most excited about is X`), keep X but drop the frame and lead with the capability: `olmo-eval lines two checkpoints up question by question` beats `What we're most excited about: lining two checkpoints up ...`.

### Anthropomorphic descriptors

Language that implies cognition or agency where there is computation. Tells:

- `Smarter way of processing.`
- `The model learns to ...`
- `Figures out how to ...`
- `Knows when to ...`

Fix: replace with measurable or technical terms (`more efficient`, `more accurate`, `lower compute cost`, `trained to`). Models compute; they do not exercise intelligence. Reserve agency verbs for actors that have agency.

### Press-release register

Corporate-announcement diction. Tells:

- `We are pleased to announce ...`
- `Today marks the launch of ...`
- `In our continued commitment to ...`
- `Building on our previous work ...`

Fix: lead with the news directly. `Earlier this month, we released X.` Not `We are pleased to announce X.` The announcement verb adds nothing the date and release verb do not.

### List-to-payoff cadence

A fronted parallel list — usually three items, often anaphoric — capped by an em-dash or colon and a summarizing clause. It sounds like building insight; it is a constructed rhythm that adds nothing the surrounding sentence lacks. Tells:

- `A new hyperparameter, a different data mix, or a step up in scale—every checkpoint sends you back through the loop.`
- `Not the data, not the architecture, not the scale—all of it matters.`
- `Faster. Cheaper. Simpler.` (staccato fragments are the same move without the list).
- A trailing dash-hung negation pair: `stays realistic across the 400-year run—no drift, no collapse.` (the payoff compressed to two negated nouns — same constructed punch, hung off the end of the sentence instead of fronted).

Fix: state the point as ordinary cause-and-effect prose, or weave one or two concrete examples into the sentence instead of fronting a list. The list-then-dash is the tell, not the examples — a factual enumeration introduced by a colon (`swappable: the model, its tools, and the sandbox`) is fine, because it names real parts rather than building cadence toward a payoff.

Anchor: `A new hyperparameter, a different data mix, or a step up in scale—every new checkpoint sends you back through the same loop.` → `Tweak a hyperparameter or scale the model up, and every new checkpoint sends you back through the same loop.` The fronted triplet and its dash-payoff are gone; two examples now sit inside a do-this-and-that-happens sentence.

Anchor (negation pair): `El Niño stays realistic across the full 400-year rollout—no drift, no collapse.` — flagged by the editor as AI phrasing — became `El Niño (ENSO) stays realistic across its 400-year run without drifting or collapsing.` The pair folds back into the sentence as ordinary grammar; nothing is lost but the punch.

## Comparative Qualifier Discipline

Bare comparative claims need a referent. Adding `than most` or `than competing systems` is acceptable when it grounds the comparison.

Use: `making the model more flexible and cheaper to deploy than most`.

Do not leave bare: `making the model more flexible and cheaper to deploy`. Without a referent, the comparison is unanchored — flexible compared to what?

The referent can be implicit when context establishes it (`outperforms leading proprietary robotics models` carries `proprietary models` as the implicit referent for the secondary advantage in the same sentence). When context does not anchor the comparison, add the explicit referent.

## Indefinite Article Preference

`A` or `an` when the reference is type-of-thing, not unique. `The` only when the reference is genuinely unique or already established in the surrounding text.

- `a cross-model leaderboard widely tracked across the AI industry` (multiple leaderboards exist).
- `a user's own machine` (any user, not a specific one).
- `an initial analysis` (one of multiple possible analyses).

Definite article (`the cross-model leaderboard`, `the user's machine`) implies uniqueness or superlative status. Audit definite articles: would the reader assume there is only one of these? If not, switch to indefinite.

## Outcome vs. Designation

Do not claim emergent outcomes as deliberate choices. `We made this our biggest contribution` implies Ai2 actively designated it; in reality it is biggest-by-virtue-of-what-it-is.

- Deliberate choices get agency verbs: `we built this to`, `we designed it to`, `we chose to`.
- Emergent outcomes get descriptive verbs: `is`, `turned out to be`, `stands as`, `landed as`.

The audit: did Ai2 actually decide this, or is it being characterized in hindsight? Use the verb that matches the actual epistemology.

## Measured Strengtheners

For self-characterization, prefer measured strengtheners between bare nouns and superlatives:

- Bare: `our contribution` (weak; reads as humble to the point of vague).
- Measured: `our strong contribution`, `our important contribution`, `our major contribution`.
- Superlative: `our biggest contribution`, `our best contribution`, `our definitive contribution` (implies external designation Ai2 did not make).

Use the measured form for closings and self-positioning. Reserve superlatives for cases where an external authority made the designation (`the top-ranked model on the cross-model leaderboard`, where the leaderboard, not Ai2, did the ranking).

## List-To-Payoff Cadence: Function-Triplet Variant

(Extends List-to-payoff cadence under AI-Ism Taxonomy.) A frequent variant describes a system's behavior as three balanced verb-phrases in a row, what it "does", that sound like accumulating insight but are constructed cadence. It often pairs with quiet anthropomorphism, a phrase that hands the system a mental act. Collapse the triplet to one plain claim plus the concrete specifics, and cut the anthropomorphic verb.

Anchor: `neurons that may track which sense currently counts, hold that in mind, and register whether the mouse got it right or wrong` → `neurons whose activity appeared to follow the task: which sense the mouse should be attending to, and whether its choices earned rewards`. The three-part parallel becomes one claim plus two specifics; `hold that in mind`, which anthropomorphizes the neurons, is gone.

## Rule Of Three As A Default

Three-item lists arrive whether or not the material has three parts. Each one carries an `and`, which is part of why `and` tops the frequency counts, so this pattern and And-Chained Clauses And Thin Punctuation usually show up together. The two counts stay separate, though: a serial `and` is not a clause join, and trimming a triad keeps its conjunction.

Two other sections cover the framed version. List-to-payoff cadence catches the fronted triplet capped by a dash and a summary; its function-triplet variant catches three balanced verb-phrases describing what a system does. This section covers the bare triad — three items, no payoff clause — which reads as ordinary prose one instance at a time and as a tic across a draft.

A triad earns its place when the three items move along a real dimension or show real range. `Some teams release weights, fewer release training data, and almost none publish enough to reproduce the result` progresses along one dimension, and that diminishing-quantifier cascade is a house pattern (`references/house-style-patterns.md`, Cascade And Rhetorical Patterns). Three interchangeable items in a row are rhythm.

Fix: cut to the two items that carry the most, or add the fourth when the material has four. Keep the conjunction on the trim — `inspect, adapt, and improve` → `inspect and adapt`, never the comma-only `inspect, adapt`.

Test: list every enumeration in the draft with its length. If they are all three long, the number came from cadence rather than from the source. House guidance already asks for a mix of 1, 2, 3, 4, and 5 across a piece (`.agent/skills/ai2-comms-writer/references/revision-passes.md`, Pass 2).

## And-Chained Clauses And Thin Punctuation

Model prose runs longer sentences joined by `and`, with fewer commas, semicolons, and parentheses to break them up. `And` is its most overused word. Length by itself is not the tell — Ai2 house style wants long sentences in the mix. The tell is the flat join: independent clauses strung on `and` where a period, a semicolon, or a subordinating word would say how they relate.

Scope: this covers `and` as a clause connective. It leaves the house conjunction rule untouched. Serial lists still carry `and` or `or` before the final item, and comma-only joins are still disallowed on every surface (`references/house-style-patterns.md`, Conjunctions And List Joins).

Fix: cut the sentence at the join. When the clauses do depend on each other, use the word that names the dependency — `because`, `after`, `so`, `which`, `while` — in place of the neutral `and`.

Test: two clause-level `and`s in one sentence is the flag. At the paragraph level, count clause-joining `and`s, then count sentences under twelve words. A paragraph with an `and` in every long sentence and no short sentence has the pattern however clean each line reads.

Anchor: `We released the weights and the training code and the eval harness is on GitHub, and the paper covers every ablation.` → `We released the weights and the training code. The eval harness is on GitHub; the paper covers every ablation.` The first `and` stays, because it joins two list items. The two clause-level `and`s become a period and a semicolon.

Watch-out: do not treat thin punctuation as a cue to scatter em dashes. The Economist's tally reports ChatGPT using fewer em dashes than any human comparison group it measured, with Claude the one model above them, so the dash is not the tell and a dash pass is not the remedy. Split the sentence or subordinate the clause. The em-dash and comma discipline in `references/house-style-patterns.md` is unchanged.

## Latinate Hedges

Long Latinate adjectives and adverbs that sound analytic while committing to nothing: `significant`, `increasingly`, `substantial`, `considerable`, `notable`, `robust`, `comprehensive`, `extensive`. They are the mirror image of the empty intensifiers above. `Powerful` and `game-changing` oversell; these underspecify, in a quiet and credible register, which is why they survive review.

Two of them assert something the copy usually cannot support:

- `significant` names a statistical test. Bare `a significant improvement` borrows that authority with no p-value, interval, or test the source ran. Keep the word when the source reports a test and cite the test; otherwise give the delta.
- `increasingly` asserts a trend. `Increasingly capable` or `increasingly, teams need ...` needs two points and a direction from the source. Without them it is a claims gap wearing an adverb.

Two exceptions, so the rule does not fire on legitimate house wording:

- `Robust` with a named property is exact and stays — `robust to prompt perturbation`, a robust statistical estimator, the `robust phrasing` that holds under either branch in `.agent/skills/ai2-comms-claims-lector/references/claim-review-patterns.md`. The hedge is bare `robust` as a quality claim.
- `Increasingly` describing a field-level trend the piece can source is defensible in positioning copy, as in `frontier AI was becoming increasingly closed` (`references/platform-positioning.md`). The flag is `increasingly` attached to an Ai2 capability, result, or adoption number, where a figure exists and belongs there instead.

Fix: put the number where the adjective is. `A significant improvement` → `+3.3 points on the held-out split`. `Increasingly capable` → the capability, plus the checkpoint where it showed up. `Comprehensive` → the count (`all 42 tasks in the suite`).

Test: read the adjective and name the number it stands in for. If the number exists, use it. If none exists, the word was smoothing over a gap the claims pass needs to see.

Routing: `significant` and `increasingly` are claims flags, not only style flags. See `.agent/skills/ai2-comms-claims-lector/references/claim-review-patterns.md` (Latinate Hedge Standing In For A Number).

## Borrowed Scientific Jargon

A technical term lifted out of its field and used as a figure of speech: `the rate-limiting step` of a workflow, `orthogonal to` for unrelated, `an order of magnitude` where the ratio is not ten, `a parameter of the discussion`, `catalyze`, `inflection point`, `signal-to-noise` about attention, `bandwidth` about someone's time. The borrowed term sounds rigorous and says less than the plain word it displaced.

For Ai2 the line is sharp, because most of these terms are literal somewhere in our own work. `Parameter` is exact in `a 7B-parameter model` and empty in `the parameters of the release`. `Order of magnitude` is exact at 10x and false at 3x. `Rate-limited` is exact about an API or a throughput cap and figurative about a workflow's slowest step. Keep every literal use; cut the figurative ones. Literal is not automatically publishable — on a compressed surface a lifted rate limit is stated as the gained capability instead (`.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md`, Frame A Removed Limit As The Gained Capability).

This differs from the plain-language pass in `references/voice-and-prose.md`, which glosses real jargon for a broad audience. There the term carries information the reader lacks. Here it carries none, so cut it rather than gloss it.

Fix: use the plain word. `Rate-limiting` → `the slowest step` or `the bottleneck`. `Orthogonal` → `unrelated`. `Catalyze` → `speed up`. `Inflection point` → name what changed, and when.

Test: is the term literal in this sentence — an actual parameter count, an actual factor of ten, an actual reaction rate? Keep it. Is it a metaphor? Swap in the plain word and check what the sentence lost.

## Nominalizations

A verb turned into a noun, then propped up by a weak verb: `perform an evaluation of` for `evaluate`, `provides an explanation of` for `explains`, `there is a reduction in` for `drops`, `achieved an improvement` for `improved`. The action leaves the verb slot, so the sentence recruits `perform`, `provide`, `conduct`, `achieve`, or `there is` to fill it. The sentence gets longer and vaguer, and the agent often disappears with the verb.

Ai2 copy has real exceptions. Some nominalizations name the artifact or the method: `evaluation` in `the evaluation harness`, plus `ablation`, `distillation`, `quantization`, `deduplication`, `annotation`. Those are the paper's terms and they stay, under source fidelity. The tell is a nominalization with a live verb sitting next to it doing nothing.

Fix: put the action back in the verb, which usually restores the agent too. `We performed an evaluation of the checkpoints` → `we evaluated the checkpoints`. `There was a reduction in inference cost` → `inference cost dropped 40%`, and the rewrite exposes that the number was missing.

Test: scan for `-tion`, `-ment`, `-ance`, and `-ity` nouns next to `perform`, `provide`, `conduct`, `achieve`, `carry out`, or `there is`. Each pair is a verb waiting to be freed. Two or more abstract nominalizations in one explanatory sentence is separately the trigger to split it (`references/voice-and-prose.md`, Stepped Sentences For Dense Explanation).

## Empty Impact Verbs

`impact`, `affect`, `influence` used as a vague stand-in for the concrete effect. `without negatively impacting X`, `to positively impact Y`, `this impacts performance` — the verb gestures at a result without naming what actually changes. It reads as careful while saying less than the plain version, and it often hides the very point the sentence was meant to make.

Fix: name the concrete effect — what got cleaner, faster, larger, or worse, and to what. If the effect is genuinely unspecified, that is a claims gap to flag, not a verb to smooth over.

Test: replace `impact` / `affect` with the specific outcome. If you cannot, the sentence was concealing that the effect is unstated.

Anchor: `encoding location without negatively impacting embeddings` → `encoding location without leaving a mark on the embeddings` — the concrete effect being that the old positional signal left artifacts and the new one does not. The vague `negatively impacting` had dropped the whole point of the change.

## Setup-Label Colons

A fronted label or short noun-phrase, capped by a colon, that announces a point before stating it: `The split:`, `What we found:`, `The lesson:`, `The takeaway:`, `The intuition:`, `Here's the thing:`. It is the list-to-payoff cadence shrunk to a single label — the colon promises a reveal the sentence then delivers, so the label adds rhythm, not information. Frequent in social and thread copy, where it reads as punchy but spends a line on packaging.

Fix: cut the label and state the point as a plain sentence. The reader does not need to be told a split or a lesson is coming; the sentence is the split or the lesson.

Test: is the text before the colon a real category the reader needs — a genuine enumeration intro (`three text types: articles, code, and markup`) or a resource label (`📄 Report: [link]`) — or only an announcement of a payoff (`The split:`, `What we found:`)? Real intros and labels stay; announcement labels go.

Anchor: `The split: the hybrid predicts meaning-bearing tokens better ...` → `The hybrid predicts meaning-bearing tokens better ...`; `What we found, on prose: the hybrid's edge is largest on content words` → `In prose, the hybrid's edge is largest on content words`; `The lesson: a single overall loss is too blunt ...` → `A single overall loss is too blunt ...`.

## Aspirational And Forward-Looking Closes

The reaching close — the last paragraph that names where the work is headed — is the single highest-risk site for AI-speak, because the writer is no longer pinned to a result. The same tells flagged elsewhere cluster here: grandiosity (`the future of`, `a new era`, `transform how we understand X`, `limitless`, `endless possibilities`); mood-only reach (`we're just getting started`, `the possibilities are vast`) — see Mood-only sentences; a sloganeering antithesis used as the payoff (`X stops being a project and becomes a service`, `one fewer thing to own`) — see Rhetorical contrast structures and List-to-payoff cadence; and optics or observation verbs in the payoff line — see the verb bullets above. A good aspirational close names a concrete bigger scope or capability and hedges it honestly as future, rather than substituting mood for it.

Antithesis nuance: even a substantive `X, not Y` line is a watch-out when it carries the whole payoff. Keep it only if both halves are concrete and load-bearing; if either half is mood or slogan, cut to a plain forward sentence. Always have an antithesis-free version of the payoff ready, and prefer it unless the contrast is doing real work.

Fix: state the future scope as a stated goal, not a present fact — `What we're building toward is ...`, `Our [goal] is [infrastructure / a system] a team can use to ...`. The hedge frame lets the sentence describe a future end-state without claiming it ships today. For the positive close templates, see `references/house-style-patterns.md` (Closing Patterns).

Test: strip the close to its claim. If what remains is a mood, a slogan, or a restatement of the body's numbers, the reach was decoration. If it names a concrete capability the product does not yet have, hedge it as a goal and keep it.
