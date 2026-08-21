# Source Fidelity

## Source Alignment

Copy should track the source material closely. Do not swap formal terminology for easier synonyms in technical or academic claims. Accessible paraphrase is for framing, not for the formalism.

Preserve exactly:

- Paper terminology.
- Theorem, proposition, lemma, definition, and named-construct language.
- Benchmark, dataset, model, method, system, and metric names.
- Model versions and release names.
- Numbers, units, splits, run counts, and dataset sizes.
- The kind of count a number represents — relationship edges, distinct entities, direct only versus direct plus indirect — must be carried into the copy. A 512-edge count is not a 512-distinct-entity claim. See `references/claims-and-benchmarks.md` (Relationship Counts vs. Distinct-Entity Counts).
- The kind of metric a percentage represents — precision (verified / verified+refuted) is not accuracy (which implies recall). Do not render precision as `% accurate`. See `references/claims-and-benchmarks.md` (Precision Is Not Accuracy).

## Visible Changes

Flag substantive changes instead of silently substituting them. This includes:

- Changing the strength or scope of a claim.
- Changing a number or rounding in a way that affects interpretation.
- Replacing a technical term with a synonym.
- Moving from paper-supported wording to editorial interpretation.
- Introducing a comparison not present in the source.

## Mechanical Corrections

Mechanical corrections may be made silently — they are not substantive changes:

- Clear typos.
- Subject-verb and number agreement (e.g. `criterion` → `criteria` where plural is meant).
- Missing or wrong punctuation.

The flag-it requirement under Visible Changes applies to substantive wording, claim strength or scope, terminology swaps, and numbers. Fix mechanical errors in place.

## Collided Or Garbled Source Text

Source pasted from a doc with unresolved tracked changes sometimes arrives with collided edits — two or three alternative wordings fused into one token (`didn'tdiddoes not yet exist`, `wereare small`). Read through to the intended final wording, use the clean version, and flag the collision once for the long-form source. Do not propagate the garble, and do not silently pick one reading when the alternatives differ in meaning.

Test: does a word or phrase contain fused alternatives that do not parse as one word? Resolve to the intended meaning; if the alternatives carry different claims (a tense or polarity flip that changes the fact), surface the options rather than guessing.

Anchor: a launch source read `data that didn'tdiddoes not yet exist`, `datasets wereare small`, and `they didn'tdon'tit did not include` — collisions from overlapping edits. The compressed copy used the clean intended meaning ("data that didn't yet exist," "datasets are small," "didn't include 3D annotations"), and the collisions were flagged for cleanup in the long-form draft, not carried forward.

## Terminology Lock Within A Piece

One reader-facing term per concept; never one word with two senses. Bridge an API or source term to the reader term exactly once if both must appear (`a task is how you define a benchmark`); after that, keep the reader-facing term and let the API term sit behind it. This pairs with `references/voice-and-prose.md` (Terminology Lock) — that file is the writer-facing rule; this entry is the source-fidelity backing for it.

Test: does a single source concept appear under two reader-facing names in the same piece (e.g. `test` / `eval` / `benchmark` for the same thing)? Does one reader-facing word carry two senses (e.g. `example` as benchmark item AND as few-shot demonstration)? If yes, standardize or split.

Anchor: a draft used `test`, `eval`, `benchmark`, and `task` interchangeably; locked to `benchmark` (reader) with `task` bridged once for API readers, and split `example` into `question` and `examples it's shown before the real questions`.

## Lineage Facts And Naming Collisions

When a release is framed as a successor, extension, or replacement of prior work, verify the prior product's facts (name, acronym, paper, repo, what it actually did) against real sources — not memory. Acronyms and paper-vs-repo names sometimes drift; surface the mismatch rather than choose silently.

Also check whether the new name resolves publicly to something else — a retired predecessor, a sibling org's project, an established library — before the launch ships. A reversed-lineage trap (the new name already points to the thing the new release is replacing) is a positioning and approval flag, not an editorial nit.

Test: every prior-work fact sourced against the real paper or repo? Does the new name resolve to something else when searched? If a collision exists, surface it as a positioning flag before drafting and route through `ai2-comms-launch-engagement` and `references/approval-gates.md`.

Anchor: a release framed as `successor to OLMES` — the acronym differs between the paper and the repo (verify both: paper at arXiv:2406.08446, repo at allenai/olmes), and the new name `olmo-eval` / `OLMo-Eval` already resolves publicly to the retired predecessor OLMES replaced. The collision was surfaced before drafting, not silently absorbed.

Internal name vs public identity: when the source uses an internal codename for a component that has a different public-facing identity, prefer the publicly verifiable name (or bridge the two), and flag the mismatch. The reader can act on the public identity, not the internal codename. Anchor: a source called the in-house crawler `Sponge`, but the org's public crawler identity is `AI2Bot` — the user-agent sites actually see, and the one a reader could filter. The copy tied the behavior claim to the public `AI2Bot` identity, kept the internal name only where it added nothing actionable, and flagged the discrepancy for confirmation rather than presenting an unrecognized codename as the public name.

## Scope Real-World Practice Claims To What The Source Covers

A claim about how the organization actually behaves — respecting robots.txt, honoring opt-outs, filtering PII, observing licenses — is a real-world assertion. Source it from first-party material and scope it to exactly what that material covers. A policy that applies to one part of the work does not automatically cover the rest: a respect-the-crawl-rules claim about the org's own crawler does not extend to data the org obtained from a third party. Do not generalize a narrow, well-supported claim into a broad one, and do not assert a mechanism (a full opt-out or takedown system) the source does not document.

Test: for each real-world practice claim, find the first-party source and check its scope. Does it cover only the org's own crawl, or all data? Only PII, or all content? If the copy states it more broadly than the source, narrow it (`for the data we gather ourselves, …`) or flag it as `Verify`.

Anchor: a draft wanted one line on respecting crawler rules. First-party sources support `we follow established web standards … our crawler identifies as AI2Bot, adheres to robots.txt, and doesn't collect from sites that disallow it, including paywalled content` only for the org's own in-house crawl; the bulk of the corpus came from Common Crawl and the Internet Archive, for which no such claim is made. The line was scoped to `for the data we gather ourselves` rather than asserted across the whole corpus, and no opt-out or takedown system was claimed beyond what the sources document.

## Which Open Artifact, And Which Generation

In adoption and ecosystem copy, `used [platform]` or `built on [platform]` is an umbrella that must not imply the wrong artifact. Distinguish: fine-tuned from the models (e.g. Olmo 2/3/3.1) vs. trained on the datasets (Dolma, Dolci) vs. started from the adopter's own base model. Match the verb and the named artifact to what the source says each party actually did.

Test: does the copy say or imply the adopter fine-tuned the model, when the source says they used a dataset and started from their own base? If so, name the dataset, or use a true umbrella (`Ai2's open releases`).

Family vs. generation: do not pin one generation (`Olmo 3`) as what an adopter used when the source lists several (Olmo 2, Olmo 3, Olmo 3.1) or names a dataset rather than the model. Name the family (`Olmo`) unless the source supports the specific generation for that specific claim.

A source's own loose umbrella (`Both chose Olmo`) does not license repeating the imprecision. On a compressed surface, the cover claim can sit at family or umbrella level while the per-party body lines carry the specifics.

See `references/anchor-patterns.md` for the worked Olmo / Dolma / Dolci anchor.

## Attribution

Be clear about who did what. Distinguish claims supported by a paper, benchmark, leaderboard, blog post, internal run, third-party eval, or direct team input.

If source material is missing, say what is needed rather than filling the gap from memory.

## Bylines And Credit

Ai2 blog posts almost always credit work collectively. Prefer `developed with [partner]`, `in collaboration with [team]`, `with contributions from [orgs]`. Flag `led by [name]`, `under the direction of [name]`, or personal blog bylines unless the source material explicitly supports that framing.

## Quotes

Never fabricate a quotation. If the provided source contains no quote and the format needs one (press release, Q&A, pull quote), supply a clearly-labeled proposed draft for a named, approved spokesperson to revise or approve; do not present an invented line as something a person said. Keep proposed-quote slots visibly marked (`PROPOSED, draft for [role] to approve; not an actual statement`) with a bracketed `[Name, title]` until real attribution and sign-off land.

Test: is every quotation either present in the source or explicitly labeled as a proposed draft awaiting approval? An unlabeled quotation that is not in the source is a fabrication, not a draft.

Anchor: a press-release source contained no quotes; two proposed quotes were drafted, each labeled a draft for a spokesperson to approve, with `[Name, title]` placeholders, never represented as actual statements.

## Paraphrase-Forward Handling Of Interview And Researcher Quotes

When a piece is built from a researcher's interview answers, the default is paraphrase-forward: carry the substance in third-person narrative and reserve a small number of short, distinctive verbatim quotes for voice or precision. Raw answers are conversational and uneven; quoting them at length, or sandwiching short quotes between non-quote fragments, reads as a transcript and flows poorly. Paraphrase the connective tissue; quote the lines that would lose their voice or their exactness if reworded.

A separate allowance governs the quotes you keep: normalize mechanics silently (spelling, a misspelled tool name, obvious typos, light punctuation; a one-word grammar fix is acceptable and worth a quiet flag), but never add, complete, or sharpen content the speaker did not say. Extending a quote with a clause the source never uttered is fabrication, not smoothing (see Quotes above).

Test: count the verbatim quotes — is the section narrative with a few quotes carrying weight, or a run of quote-sandwiches? For each retained quote, is every word the speaker's (mechanics aside), with no added content?

Anchor: a researcher Q&A first rendered as ~10 sandwiched quote fragments read choppy; rebuilt to ~3-4 short verbatim quotes (the distinctive lines — `a snapshot of the internet but not the whole internet`, `super fun`) with the rest reported in third person. A draft that closed one answer with a sentence the researcher never said (`The mechanisms aren't the same …`) was cut: added content is fabrication even inside an otherwise-faithful quote.

## Relayed Or Unattributed Q&A

Partner answers often arrive through a comms lead who collected them from several researchers, with no per-answer speaker. Attribute those quotes to the organization's team — `says the [Partner] team`, `the team says` — which is publishable as it stands. Ask for a named attributee if the piece wants one, but do not hold the draft for it, and do not guess which researcher said which answer from the author list.

Watch for a person-mismatch inside a relayed answer, where the relayer's summary and the researcher's own words collide in one sentence (`The team's first priority is to broaden the range of issues we can fix`). Paraphrase that answer rather than quoting it; a quote cannot carry two speakers.

Test: does the source establish who said this specific answer? If not, attribute to the team, and check each retained quote for a first-person/third-person clash.

Anchor: a ten-question Q&A relayed by a partner's content lead shipped with every quote attributed to `the [company] team`. One answer that mixed `the team's` and `we` was paraphrased instead of quoted.

## Attribution In Collaboration Copy

When two organizations collaborate and one's tool runs on the other's data, name who actually did the action. `[Partner] uses [Org]'s tool to [do X]` can overstate when the source says the tool's owner ran it on the partner's data. Distinguish three roles: operator (who ran it), data or research provider, and tool owner. When the operator is contested, or naming one side would over-credit it, the neutral and accurate fallback is to make the tool or agent the grammatical subject (`[Org]'s agent analyzed [partner] data and surfaced ...`).

Test: does the copy credit a party with an action the source attributes to someone else? Match the verb's subject to who the source says performed it.

Anchor: a source read `we [the agent's team] prototyped running [agent] on a pilot [partner] dataset`; copy that said `[partner] is using [Org]'s agent to surface ...` was reframed to the agent as subject, so neither side was miscredited.

When the collaborator's name is also the system's name (the E3SM project vs. the E3SM model), attribute to the people — `with the E3SM team` — not the bare name. `With E3SM, we took that step` reads instrumentally, as if the model were a tool used, and the collaboration credit vanishes.

Anchor: `Researchers from Ai2 ... and E3SM have now taken that step` compressed to `With E3SM, we've taken that step` — ambiguous between partner and model, since the same post had just used E3SM as the comparison model — and was pinned as `With the E3SM team, we took that step`.

## Sponsor And Umbrella-Program Credit Scope

A presenting-sponsor credit attaches to the thing it presents. `Part of [Umbrella], presented by [Sponsor]` credits the sponsor with the umbrella program, not with the event or release being promoted. Compressing or deduplicating must not re-scope it: `presented by [Sponsor]` standing alone under an event reads as the sponsor presenting that event. When the umbrella appears twice (a context mention up top, a formal credit line at the bottom) and the user cuts the duplicate, keep the credit attached to the umbrella name — inline works (`During [#Umbrella] (presented by [Sponsor])`) — or drop the credit whole; never leave the bare `presented by` behind.

Test: after the edit, what noun does `presented by` sit next to? If it is the event or the org's own release rather than the umbrella, the credit has drifted.

Anchor: `Part of Seattle Tech Week, presented by Madrona.` — Madrona presents Seattle Tech Week, not the Ai2 panel. When the duplicate umbrella mention was cut from a thread, the credit either moved inline (`During #SeattleTechWeek (presented by Madrona)`) or was dropped with the line; `presented by Madrona` never stood alone.

## Keep The Load-Bearing Term When Condensing Formalism

When compressing a derivation or a formal claim for length, keep the term that carries the argument and drop only the incidental detail. Condensing can silently delete the word the whole point rests on, or leave a symbol undefined.

Test: after cutting, does the remaining sentence still name the construct the claim depends on? Is every symbol it still references defined on the page?

Anchor: condensing Proposition 3.3 to `the weights are reweighted by a per-point factor` dropped `Gaussian kernel` — the very thing that makes attention equal to KDE — so the next sentence (`the only obstruction to recovering KDE`) had nothing to attach to. Restored to `the weights rewrite as a Gaussian kernel reweighted by a per-point factor …`. The explicit `w_j = exp(½‖x_j‖²_B)` formula was the right thing to cut; the words `Gaussian kernel` were not. Pairs with the exact-formalism-vs-compressed-payoff rule in `ai2-comms-pipeline` and `references/claims-and-benchmarks.md` (Formalism fidelity, via the claims-lector).

## Keep Hedges, Scope Qualifiers, And Units When Condensing

Condensing for length silently strengthens or broadens a claim when it drops the word that bounds it. Two recurring losses:

- Hedges and scope qualifiers. A source's `essentially perfectly`, `in most cases`, `typically`, or a scoping adjective (`expressive`, `structured`, `sufficiently large`) is load-bearing — it marks near-but-not-quite, or a specific subclass, not the general case. Dropping it flips a bounded claim into an absolute or universal one. `expressive recurrent layers solve it essentially perfectly` is not `recurrent layers solve it perfectly`: the first names a subclass and hedges the result, the second claims all recurrence, exactly. A dropped hedge IS a strength change under `Visible Changes`, so restore it or flag it; do not condense it away.
- Units, against the piece's own framing. Keep the source's unit even when the piece is built around a different one. A token-level piece tempts a `words → tokens` swap for consistency, but if the source measures a quantity in words (e.g. a figure's `Distance (words)` axis), converting it to tokens to match the framing introduces an error. Terminology lock and internal consistency (`references/voice-and-prose.md`, Terminology Lock) never override the source's actual unit; when they pull apart, keep the source unit and note the mismatch if needed.

Test: after condensing, does the sentence claim more (less hedged, broader scope) than the source, or state a quantity in a unit the source did not use? Restore the hedge, qualifier, or source unit.

Anchor: `which expressive recurrent layers already solve essentially perfectly` was condensed to `which recurrent layers already solve perfectly` — dropping the subclass (`expressive`) and the hedge (`essentially`) and overstating the paper; restored. Separately, a probe distance the paper plots in words was kept as `32 to 1,024 words` rather than "fixed" to tokens to match the token-level framing — a consistency reviewer's `→ tokens` suggestion was the change that would have introduced the error.
