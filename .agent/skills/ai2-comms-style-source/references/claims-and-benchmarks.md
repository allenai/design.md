# Claims And Benchmarks

## Claims Discipline

Use narrow, source-backed claims. Prefer:

- In this benchmark...
- Under this harness...
- In these runs...
- Using this scoring setup...
- On this split...

Avoid broad claims such as best model, beats everything, or state of the art unless the source explicitly supports that scope.

## Comparison Framing

Every model or system comparison should carry three pieces:

1. The absolute score (`72.4 on the held-out split`).
2. The delta from a named baseline (`+3.3 over the prior open-weight checkpoint`).
3. The scope (`under the published harness on the v2 split`).

A delta without an absolute, or an absolute without scope, is incomplete.

`State-of-the-art` is permitted only with an explicit scope qualifier such as `state-of-the-art among fully open mixture-of-experts models at this parameter count`. Bare `state-of-the-art` is a blocker.

Closed-model competitors: use factual descriptors when their setup is relevant — `proprietary`, `closed weights`, `opaque training data`. Do not editorialize and do not use the comparison to diminish them. Empirical contrast is sufficient.

See `references/house-style-patterns.md` for matching prose patterns.

### Compressed Comparatives: Referent Or Rephrase

On a compressed surface (X, Bluesky, newsletter lead) the absolute and delta are often held off, but a comparative still needs its referent. A floating `more X` — `follows the action more closely`, `runs more efficiently` — reads as incomplete: more closely than what? Two valid fixes:

1. Restore the referent: `follows the requested action more closely than text prompting alone does`.
2. Rephrase as a non-comparative capability: `steers the model toward the requested motion`. A capability claim makes no comparison, so it carries no referent or scope obligation.

The implicit-referent allowance (see `references/ai-prose-to-avoid.md`, Comparative Qualifier Discipline) still holds when the construction supplies its own baseline: `help make the model capture motion more accurately` implies "more accurately than the model without this help." The failure is the bare floating comparative with no recoverable baseline.

Test: name the referent of every `more`/`-er` claim. If you cannot, either restore it or rephrase to a capability — do not ship the floating comparative.

Anchor: a video-generation line read `follows the requested action more closely` (bare comparative, flagged by the claims-lector). Fixed to `…more closely than text prompting alone does` (referent restored). A later pass that combined it into another post rephrased it to `steer the model toward the requested motion` — a capability, which legitimately drops the comparison and its scope requirement. Both fixes are correct; the only wrong state is the floating comparative.

### Peer And Open-Tool Comparisons

The closed-model rule above extends to peer and open-tool comparisons. Three additions when comparing to a peer or open competitor:

1. Define the other tool before comparing it. Lead with a one-line factual description of the peer (what it is, what it does); then compare.
2. Favor the home tool through framing plus factual axis contrasts plus an honest closing caveat — never editorialize or diminish. Open each axis with the home tool's fit (`built for this workflow`); close with an explicit `[Peer] is the better fit when ...` sentence covering where the peer wins.
3. Verify the peer's architecture, providers, and feature list against its own docs, not memory. Render non-exhaustive lists as examples (`such as ...`), not closed sets. Drop unverifiable names rather than guess.

Test: was the peer defined before the comparison? Does any sentence diminish rather than contrast? Is every descriptor of the peer sourced from the peer's own documentation?

Anchor: a peer comparison opened with `[Peer] is an open framework for evaluating AI agents in containerized sandboxes` (defined before compared), led each axis with the home tool's fit, closed with `[Peer] is the better fit when ...` (honest caveat), corrected a provider list to `such as [Provider 1] and [Provider 2]` (non-exhaustive), and dropped an unverifiable agent name rather than guessing.

### A Formal Result-Term Needs Its Numbers Or A Plain Rendering

`Pareto improvement`, `no trade-off`, `strictly dominates`, `matched at lower cost` are formal claims about a whole frontier, not descriptions. They need the numbers on the page. When the source asserts one but the supporting figures are not public, state the effect in plain words and let the paper carry the term. This is the mirror of the effect-verb rule in `ai2-comms-claims-lector` SKILL.md (do not escalate `reduces` to `eliminates`): here the source is the stronger party, and matching it without its evidence imports a claim the copy cannot show.

Test: does the copy use a frontier or dominance term? Are the two axes' numbers on the page? If not, render the effect plainly and hedge to what the source actually demonstrated.

Anchor: a partner's write-up claimed its interventions turned a performance-versus-safety tradeoff into `a Pareto improvement`, with the supporting comparison living only in an unlabeled figure. The shipped Ai2 copy read `Their strongest interventions retained the broader capability gains while recovering much of the lost safety performance` — the hedge (`much of`) and the plain rendering both stayed, and the formal term was left in the partner's paper.

### Scope By Keeping The Subject Generic, Not By Adding A Disclaimer

When a partner's finding is a regression in an Ai2 artifact, the scope problem is real: readers will hear it as a verdict on the shipped product. The fix is the subject, not an added sentence. Name the artifact under study (the dataset, the training stage) and keep the affected models generic — `the models`, `one set of experiments` — so the copy never claims the finding transfers to the released model. A defensive clause spelling out what the study did not cover reads as a hedge bolted on, and it re-raises the reading it was meant to prevent.

Test: could a reader take this as a claim about the shipped product? Check the subject of the finding sentence first. If it names the released model, generalize the subject; only add an explicit scope sentence when the subject cannot carry it.

Anchor: a study trained base models on the Dolci preference pairs and found DPO reduced robustness to some harmful requests. A draft added a scope sentence (`these runs trained base models on the preference data alone. They are not our full Olmo 3 post-training pipeline, which continues past DPO into RLVR`). The shipped version cut it and scoped by subject instead — `One set of experiments showed why that matters. Preference training improved the models' general capabilities, but also made them more likely to answer some harmful requests` — naming Dolci as the data traced but never naming a released model as the affected one.

### Precision With Gloss, Not Folksy Paraphrase

Accessibility is not vagueness. When a technical or statistical term carries information that a paraphrase cannot, keep the term and gloss it briefly. A folksy paraphrase that drops the term reads as unscientific and can mislead a technical reader who tries to recover the underlying concept.

Test: after paraphrasing a statistical or technical claim, can a technical reader recover the exact concept? If not, the paraphrase has dropped information; restore the term with a gloss.

Worked shapes:

- Folksy paraphrase: `cancels out the luck of which questions are easy or hard`. Precise-plus-gloss: `shared question difficulty affects both equally and cancels in the comparison`.
- Folksy paraphrase: `how much they might be off, and how large a gap it'd take`. Precise-plus-gloss: `a standard error and a minimum detectable effect (the smallest difference reliably distinguishable from noise)`.

This rule pairs with the plain-language pass in `references/voice-and-prose.md` (Plain-Language Pass For Broad Audiences) — that file says gloss undefined jargon; this file says do not replace a precise statistical term with a folksy paraphrase. Together: precise term plus gloss, not paraphrase instead of term. See `ai2-comms-pipeline` Rule Interactions for the resolution rule.

## Caveats To Surface

Flag comparisons affected by:

- Different harnesses.
- Different scoring models.
- Retrieval versus non-retrieval setups.
- Different run settings.
- Different cost assumptions.
- Cross-run or cross-date comparisons.
- Category-level variance hidden by aggregate scores.

### A Measurement-Caused Score Change Is Not A Capability Change

When a metric moves because of how it is measured — the evaluation does not cover the new data, regime, or language — attribute the change to the evaluation, not to the artifact. A coverage gap framed as a quality trade-off misreads a measurement artifact as a regression (or an improvement).

Test: when a score dips or rises after a change, ask whether the cause sits in the data/model or in what the benchmark measures. If the eval simply does not reward the change — new languages it does not test, a regime outside its split — name that (`the evaluation covers only X`) rather than implying the artifact itself got better or worse.

Anchor: extending a code pool from 15 to 50 languages lowered the measured score; the cause was that the evaluation suite covers only the original 15, not a quality regression in the 35 added languages. Rendered as `the one trade-off is in how performance is measured, not in the data itself … the evaluation covers only those original 15 and doesn't reward the broader coverage`, not as `bigger pool, lower quality`.

## Numbers

Check numbers against the source paper, leaderboard, or provided data before shipping. If a number changes in revision, flag it. Do not quietly swap updated values into otherwise approved copy.

Delta language (`+3.2 over baseline`) must travel with the absolute number, not replace it. A delta alone hides where the comparison started.

### Citation Discipline For Statistical Methods

When a paper or method is cited as the source of a statistical technique, the citation attributes the method, not specific illustrative numbers. If the cited paper does not contain the exact figures used in the copy, the figures must be marked as illustrative (or sourced separately) and the citation must point only to the method.

Test: does the cited source actually contain these exact numbers? If yes, cite normally. If no, cite the source for the method and mark the numbers as illustrative — or pull real numbers from a source you can name.

Also: every citation needs a resolvable reference. A bare `(Author, Year)` without an arXiv ID, DOI, or URL is incomplete on a blog or social surface; the reader cannot follow it.

Anchor: standard-error figures were attributed to `(Miller, 2024)` but were not in that paper. Fix: cite Miller for the paired-comparison method only, mark the specific standard-error and minimum-detectable-effect numbers as illustrative, and add the full arXiv reference so a reader can verify.

### When the source gives only a delta

The rule above assumes an absolute exists. When the source itself reports only a gain (a contribution from a dataset or a training stage) and never states the final or absolute score, report the delta with its source-stated scope, do not invent the absolute, and note that the source gives the gain rather than the final number. The figure can still appear when the user asks for it; benchmark digits otherwise stay off social by default, and named adoption figures still carry the surface-specific approval gate.

Test: does the source give a final or absolute score, or only the gain? If only the gain, the delta stands with scope plus a `source gives gain, not final score` note.

Anchor: a source blog states that a dataset added 10.1 points to a model on a graduate-level reasoning benchmark — the biggest single jump in the model's post-training pipeline — but never states the model's final score on that benchmark. Correct rendering: report the +10.1 delta with the benchmark name, scope, and a note that the source gives the gain. The absolute was not invented; its absence was flagged. The digit entered the social thread only when the user asked, and still carried social approval.

### Precision is not accuracy

A precision figure — verified divided by (verified + refuted) — must not be rendered as `accuracy` or `% accurate`. Accuracy implies recall is measured; if recall is unmeasured, `accurate` overstates. Plain-language rendering of precision: `X% of what it found held up when checked`, not `X% accurate`.

Test: is the metric a precision or verification rate with no recall measurement? Then ban `accurate`, `accuracy`, `correct rate`.

Anchor: a system reports 96.8% precision — `held up when checked against public evidence`. Recall cannot be measured because no ground-truth list of all the things the system might have missed exists. `96.8% accurate` overclaims; `96.8% of what it found held up when checked` is conservative-true.

### Relationship counts vs. distinct-entity counts

When a number counts relationships (edges, dependencies, mentions, references), do not phrase it as a count of distinct entities. Match the noun to what is counted. Also know whether a source figure is `direct only` versus `direct plus indirect` and label accordingly.

Test: does the source table count edges or relationships, or unique nodes? `depends on 512 models` claims 512 distinct models; if the table counts dependency edges (and one model can recur across edges), the correct phrasing is `512 model dependencies`.

Anchor: a source table reports 512 verified direct model-dependency edges for one release (one upstream model can appear in several edges). `depends on 512 models` is wrong; `512 model dependencies` is correct. Graph-wide distinct counts (e.g., 1,138 models, 1,706 datasets) and direct-plus-indirect totals are separate figures with their own labels.

### A bare comparison number needs its referent

A number stated as a comparison (`X against 781`) loses its referent when the comparison's subject shifts mid-sentence, even though an earlier clause named the baseline. Re-attach the baseline to each number when the metric changes.

Test: for every `against [number]`, can the reader say what that number measures and whose it is? If a prior clause established the baseline for a different metric, name it again.

Anchor: `a score MSE of 0.167 against the best KDE bandwidth's 1.090, and a log-density MSE of 20.8 against 781` — the `781` floats, because the named baseline attached to the score-MSE comparison, not the log-density one. Fixed to `against the same baseline's 781`.

## Benchmark Charts

Charts should support the argument, not decorate it. The visual should show the thing the prose is arguing: durability, efficiency, headroom, cost/score tradeoff, category spread, or benchmark-specific performance.

Every chart should make these clear:

1. What is being compared.
2. Which model or system leads under the stated setup.
3. How large the gap is.
4. What caveat affects interpretation.

Social copy can point to benchmark results, but benchmark digits usually stay in the blog and chart.

## Lead With The Plain Takeaway; Digits Can Live In The Chart

On a broad-audience blog, open a results paragraph with the plain-language takeaway, then support it. The comparison scaffold (absolute + delta + scope) must still be present, but it does not all have to sit in the prose: the prose can state the takeaway and the load-bearing number (a yield, a headline delta), while the precise per-suite digits (BPB, accuracy, raw scores) move to the chart, which carries the full absolute + delta + scope. The failure mode is a results paragraph that opens with a string of digits and leaves the reader to infer the point.

Test: does the first sentence of the results paragraph state what the numbers mean, or only report them? If only report, lead with the takeaway and let the chart hold the digits — but first confirm the chart actually carries absolute + delta + scope before dropping them from the prose.

Anchor: a code-data result opened with `0.454 versus 0.455 bits-per-byte at 1B, and 22.6 versus 22.0 at 7B`. Reframed to lead `the expanded code pool doesn't sacrifice quality for size`, keep the load-bearing yield (`486B usable tokens to 137B, about 3.5× more at the same quality`), and move the per-suite BPB/score digits to the chart. This pairs with the plain-language pass in `references/voice-and-prose.md`: lead plain, keep the precise figure where rigor lives (here, the chart).

## A Per-Run Cost Is Not A Standing Price

A cost figure for one run scopes to that run, not to what an arbitrary future run or partner would pay. Per-run cost is a knob — area covered, resolution, model size, caching all move it — so `$X for this run` must not become `$X to run [system]` or an implied price list. Scope the figure to the run that produced it. And name the constraint that actually binds: when the limit is compute or cloud cost, do not write `data budget` if the underlying data is largely open — that misnames an adjacent resource as the binding one.

Test: does a dollar figure describe one specific run (area, resolution, model size, caching all fixed), or is it phrased as the price of the system in general? Is the named constraint (`data budget`, `compute cost`) the one that actually binds, given what the data costs?

Anchor: a per-run figure for one OlmoEarth run was generalized toward `what a team would pay to run it`; scoped back to the run that produced it, with area/resolution/model-size/caching named as the knobs that move it. A close that framed the limit as `data budget` was corrected because the satellite data is largely open and the binding constraint is compute/cloud cost.

## Prototype vs. Routine Capability

Do not present a one-time prototype or first test as a standing, routine capability. `[Agents] now run inside [system]` implies ongoing, repeatable operation; when the source says `prototyped`, `piloted`, or `ran for the first time`, scope the claim to the test (`in an early test`, `in a prototype`, past tense). This is the system-capability counterpart to the verb-tier discipline on findings (surfaced/candidate, not discovered/proved).

Test: does the source describe a demonstrated-once prototype, or a deployed capability? If once, the copy must not use habitual present tense or `now [does X]` framing that reads as routine.

Anchor: source said `we prototyped running [agents] inside [system]`; draft copy read `the agents now run inside [system]` (routine) and was corrected to `in an early test, [agents] ran inside ...`.

## Name The Right Checkpoint For The Result

Match the model checkpoint to the kind of result. A pretraining diagnostic — next-token loss, perplexity, token-level NLL on raw text — comes from the base/pretrained checkpoint, before instruction tuning or RL; an instruction-following, chat, or post-training benchmark comes from the post-trained variant. Naming the wrong one misattributes the result.

A bare self-superlative compounds this: `our strongest 7B model` both editorializes (strongest by what measure?) and, for a base-model diagnostic, points the reader at the wrong checkpoint — the post-trained "strongest" variant is not the one that produced a next-token-loss comparison. Name the checkpoint the result actually came from (`the base 7B checkpoint`), not the most capable one in the family.

Test: for each result, which checkpoint produced it — base or post-trained — and does the copy name that one? Does a superlative (`strongest`, `best`) stand in for the specific checkpoint?

Anchor: a token-level next-token-loss comparison was described as running on `our strongest 7B transformer, Olmo 3`; the comparison is a pretraining diagnostic, so it runs on the base pretrained 7B, not the strongest post-trained variant. Corrected to `the base 7B checkpoints of our ... transformer, Olmo 3`.

## Name The Right Tool For The Capability

When two tools sit in a stack — a primitive and a feature built on it — name the one that actually performs the capability; do not let an umbrella absorb the distinction. The recurring Ai2 case: infini-gram is the lookup engine (it counts how often any phrase appears across the corpora it indexes and returns where it occurs); OLMoTrace is the feature built on infini-gram that traces a model's own output back to its own training data and surfaces the source documents. Crediting infini-gram with OLMoTrace's output-to-training-data tracing is a mechanism error. A second scope trap: infini-gram searches large public corpora, not a given model's private training set — a third party running infini-gram on some other model's output is matching against public text, not reading that model's training data. This is the tooling-specific case of Mechanism-Description Fidelity (claims-lector).

Test: does the copy credit infini-gram with output→training-data tracing (that is OLMoTrace), or imply infini-gram is searching a specific model's private training set (it searches public corpora)? Name the tool that does the verb.

Anchor: a draft read `our infini-gram engine … traces Olmo's outputs back to the documents it was trained on, surfacing their source documents in real time` — OLMoTrace's job, credited to infini-gram. Fixed by naming OLMoTrace as the tracer (built on infini-gram) and keeping infini-gram as the lookup primitive. Where a third party ran a non-Olmo story through infini-gram, the phrases turned up `in the public corpora it indexes`, not in any model's training set.

## infini-gram Is The Engine, Not The Data

Tied to the tool-naming rule above: infini-gram is the search engine, and the corpus it searches — a multi-trillion-token snapshot of public text — is a separate thing. Do not call infini-gram itself `a snapshot`, `the open web`, or `a database`; it builds a suffix-array index over corpora and answers lookups against it, so building the index and querying it are distinct steps (it does not `build an index by running lookups`). Coverage is a snapshot, not the whole internet: a phrase infini-gram cannot find is `absent from that snapshot`, not proven absent from the web — which is why a provenance inference stays hedged in the narrator's voice (`almost certainly drawn from a book`), with any `one can say with certainty` framing left to a researcher's attributed quote (see Contested Or Alleged Attribution Stays Hedged). And credit the corpus a study actually used: a third-party analysis that ran infini-gram over a public web snapshot plus Google Books was not enabled by `Olmo's open training data like Dolma` — naming Dolma there credits an artifact the work never touched.

Test: does the copy treat infini-gram as the engine (not the snapshot/database it searches)? Does a zero count read as `absent from that snapshot` rather than proof a phrase is nowhere on the web? Is any analysis credited to a corpus (Dolma) it did not use?

Anchor: `the open web that infini-gram searches` was scoped to `a vast snapshot of the open web`; `infini-gram, which searches a vast snapshot …` kept engine and corpus distinct; `builds this kind of index … then answers n-gram lookups against it` separated building from querying; and a conclusion crediting `infini-gram — and Olmo's open training datasets like Dolma` was flagged because those analyses ran on a web snapshot plus Google Books, not Dolma.

## An Illustrative Example Stays Hypothetical

A worked example invented to explain a method — `say an AI passage contains a line like '…'` — must read as illustrative, never as a real, traced instance. The risk sharpens when the inference is legally loaded: presenting a specific phrase as actually lifted from a real, identifiable book is an unproven plagiarism claim about a real author, not a teaching aid. Frame it hypothetically (`a line like`, `say`, `for instance`) and keep the inference hedged (`very likely drawn from one of those books`) — the same restraint Contested Or Alleged Attribution Stays Hedged applies to real cases. Use a real, sourced example only when the team supplies one and the attribution is theirs to make.

Test: could a reader take the example phrase as a real finding the study traced to a real book? If so, mark it hypothetical and hedge the inference.

Anchor: a method explanation illustrated a rare borrowed phrase with `the warmth of his touch seeped through the thin fabric of her dress`. Kept as `say an AI passage contains a line like '…'` with a `very likely drawn from one of those books` inference — an illustration, not an asserted trace; the stronger `one can say with certainty` claim stayed inside the researcher's attributed quote.

## A Category Label Means Its Threshold

A bucket label carries its own threshold; do not inflate it. `majority-AI` means a majority of the text is machine-generated (mostly), not `almost entirely`; `AI-assisted` is not `AI-written`. And when the source does not name the tool that produced a label, attribute it to the study rather than inventing a classifier: `books the study classifies as majority-AI`, not `a [named detector] flagged`. Over-reading the threshold is overstatement; naming a classifier the source never named is fabrication.

Test: does a category word claim more than its threshold (`majority` rendered as `almost entirely`)? Is a classification credited to a named tool the source actually names, or should it read `the study classifies as`?

Anchor: `books that are almost entirely AI-generated` was corrected to `mostly AI-generated`; `those a [classifier] judges …` (the source named no classifier) became `books the study classifies as majority-AI`.

## Contested Or Alleged Attribution Stays Hedged

When a piece reports a contested public claim — a work `flagged as AI-generated`, an authorship dispute, an alleged copy — keep it at the evidentiary level the source supports and the parties accept. `Widely flagged as AI-generated` and `detectors scored it as machine-written` are reportable; `the AI-written story` asserts as settled fact something that is disputed. The same restraint applies to copying: an n-gram match is `circumstantial evidence` that `corroborates` a suspicion, never proof that a model `copied` or `plagiarized` — those are causal claims a phrase match cannot carry. This is the attribution-side companion to Verb Tier vs. Evidentiary Status (flagged/alleged < found < proved) in the claims-lector.

Test: does the copy state a contested attribution as fact, or assert copying/plagiarism from a match? Keep it at `flagged`/`alleged`/`scored as`, and frame a match as corroboration, not proof.

Anchor: a prize-winning story disputed by its publisher was rendered `widely flagged as AI-generated; detectors had scored it as machine-written`, not `the AI-generated story`. The infini-gram matches were `circumstantial evidence … a snapshot of the internet but not the whole internet`, never `the model copied`.

## Gloss A Bare Statistic With Its Scale

A correlation, coefficient, or similarity score is uninterpretable to a general reader without the scale it lives on. Pair the number with what its endpoints mean on first use — a Pearson `r`, a Tucker congruence coefficient, an F1 — so `0.62` reads as a strong link and `−0.12` as essentially none, rather than as arbitrary digits. This is the statistical case of Precision With Gloss, Not Folksy Paraphrase: keep the number and add the scale; do not drop the number for a vague `closely related`.

Test: would a reader outside statistics know whether the number is high or low? If not, name the scale (`where 1 is a perfect match and 0 is none`) or translate it (`nearly identical`).

Anchor: `a correlation of 0.62` and a bare `(−0.12)` were glossed to `a correlation of 0.62, where 1 is a perfect match and 0 is none ... and unrelated to the reasoning score (−0.12)`; a stability figure that `ran from 0.78 to 1.00 across three runs` was read as `the same two dimensions came back nearly unchanged`.

## Scope An Emergent Finding To Its Inputs

An unsupervised or discovered result is a finding about the data it was computed on, not a universal law. When a method surfaces structure on its own (factors, clusters, dimensions), say those are what the inputs surfaced — not that they are the only structure that could exist. Hedge the universal reading without hedging the result itself.

Test: could a reader take an emergent result (`the two dimensions turn out to be reasoning and safety`) as a claim that these are the only dimensions of the thing, for any inputs? If so, scope it to the data.

Anchor: after `those turn out to correspond to general reasoning ability and safety`, the draft added `We don't claim those are the only two dimensions of model behavior — just the two that best explain these patterns`. An earlier wording tied the caveat to the benchmark set (`not proof that any other set would resolve into the same two`), but that named `16 benchmarks` before they were introduced; scoping to `the patterns we measured` keeps the hedge without the forward reference.
