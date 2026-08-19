# Claim Review Patterns

## Overbroad Benchmark Claim

Issue: "Model A is the best open model."

Safer: "In this benchmark, Model A scored highest among the compared open-weight models."

Needed source: benchmark name, harness, comparison set, model versions, and score table.

## Cost Claim

Issue: "Model A is much cheaper."

Safer: "In these runs, Model A had a lower measured average cost per problem than Model B."

Needed source: cost method, date, provider pricing assumptions, task count, and whether failed runs are included.

## Approval-Gated Mention

Issue: Public copy names a sensitive deployment or customer.

Action: Mark as approval-gated. Provide a fallback such as "a clinical partner" or "a deployment partner" only if that wording is approved or source-supported.

### Extension — relationship-tier wording: check the whole source first

Issue: flagging `expanding our partnership` as an unapproved upgrade because the source's headline says `expands collaboration`.

Action: before flagging relationship-tier wording (`partnership`, `collaboration`, `alliance`) as an upgrade, check the full source — the body may license the stronger term (the same approved blog's body opened `Ai2 and Hugging Face are expanding their partnership …`). The cleared source's own wording, wherever it appears in that source, is usable on other surfaces; flag only a tier that appears nowhere in it.

## Bare State-Of-The-Art

Issue: "Model A is state-of-the-art."

Safer: "Model A is state-of-the-art among fully open mixture-of-experts models at this parameter count, under the published harness on the held-out split."

Needed source: scope (model class, parameter range, openness category), harness or eval setup, comparison set, and the score that justifies the claim.

Blocker if scope cannot be supplied.

## Comparison Missing Absolute Or Delta

Issue: "Model A improves over the baseline by 3 points." (delta without absolute)

Safer: "Model A scored 72.4 on the held-out split, +3.3 over the prior open-weight checkpoint, under the published harness."

Needed source: absolute score, named baseline, scope. Every comparison should carry all three.

## House Lexicon Without Mechanism

Issue: "Ai2's commitment to transparency and community drives this release."

Safer: "Ai2 released the weights, training code, eval harness, and intermediate checkpoints on Hugging Face, and is collecting external evaluations through a public leaderboard."

Needed source: the concrete artifact, repo, or surface that the lexicon phrase points to. Without it, treat as moralized vagueness.

## Closed-Model Editorializing

Issue: "Unlike opaque, closed-off competitors who hide their methods..."

Safer: "Compared with proprietary closed-weight models, Ai2 publishes the training data and harness."

Needed source: the factual setup difference. Empirical contrast suffices; do not editorialize.

## Subject-Verb Agency

Issue: "Other robotics models have stayed largely closed - some release weights ..."

Safer: "Other robotics models have stayed largely closed - some teams behind them release weights ..."

Reasoning: models do not release; teams do. The subject of `release` must be an entity capable of releasing. Audit every active-voice clause for whether the subject has agency for the verb. The fix often requires an explicit subject inserted between the original subject and the verb.

Extension — state verbs vs. action/retention verbs. An account, ledger, or balance can `have` or `hold` a value (state verbs, fine with an inanimate subject), but `keeps`, `receives`, `spends`, `claims` are actions that require an agent. The person performs the action; the account does not.

Test: can the subject perform the verb as an action? State verbs (`has`, `holds`, `contains`) accept an inanimate subject; action and retention verbs need an agent.

Issue: `[Container] keeps [its allocation].`

Safer: `[User] keeps [their allocation].` Or, for a setup statement: `[New containers] start with [allocation].`

The fix moves the agent into the subject seat or swaps the verb for a state form. See `.agent/skills/ai2-comms-style-source/references/anchor-patterns.md` for a concrete worked anchor.

Extension — abstractions in operational copy. A `response` cannot decline a question; the agent declines. A `scenario` does not spin up a session; the plugin does. When the subject is an abstraction (a response, a scenario, a criterion, a benchmark), name the verb's real actor.

Issue: "When a scenario runs, it spins up a fresh session."

Safer: "When a scenario runs, the plugin spins up a fresh session."

## Pronoun Referent Drift

Issue: "The model is also integrated into Hugging Face LeRobot." (After a long preceding sentence, `the model` has drifted from its antecedent.)

Safer: "MolmoAct 2 is also integrated into Hugging Face's LeRobot platform."

Reasoning: long sentences and paragraph breaks drift pronoun antecedents. When `the model`, `it`, `they`, `them`, or `those` could ambiguously refer to multiple prior nouns, replace with the explicit name. Pair with the partner platform naming rule when relevant.

### Extension — multiple same-type entities

In any sentence with two or more model or dataset entities (e.g. a model, the models that generated its training data, the judge model), `it`, `its`, or `they` becomes ambiguous about which entity is meant. Name the entity explicitly or restructure so the possessor is unambiguous.

Test: are there two or more entities of the same type in scope? Then `it/its/they` is a blocker; name or recast.

Anchor: `the models that judged its outputs` — `its` could point to any of three models in play (the system under analysis, the models that produced its training data, the judges). Name it: `the models that judged the system's outputs`, or recast: `the judge models used during the system's training`.

### Extension — re-check after a paragraph or post split

A hand-edit that splits one paragraph or thread post into two can push an antecedent out of reach: a pronoun or definite noun that resolved fine in the combined text now sits a full paragraph — or a whole post — from the noun it points to. This is distance, not ambiguity: the referent can be the only sensible one and still read as `X what?` once the split moves it away. Treat any split as a trigger to re-run the resolution check, and name the noun if the referent no longer resolves within reach. Applies to definite nouns (`the handoff`) as well as pronouns.

Test: after a split, does every `it` / `they` / `the X` still resolve within reach of a reader who did not see the pre-split version?

Anchor: splitting a post left `leave the field blank & it will suggest lines of inquiry`, with `it` a full paragraph from DataVoyager — reviewer flagged `it (what?)`; fixed by naming DataVoyager. In the same edit `The handoff has been the most requested feature` drew `(what handoff)` and was fixed to `That one-click handoff ...`.

## Multi-Org Attribution Blend

Issue: "NSF, NVIDIA, and Ai2 brought OMAI online, backed by a $152 million joint investment."

Safer: "Ai2 brought online the compute infrastructure for OMAI in partnership with Cirrascale, funded by a $152 million joint investment from NSF and NVIDIA."

Reasoning: NSF and NVIDIA funded; Ai2 operated; Cirrascale provided infrastructure. The original verb (`brought online`) does not fit the funders. Separate the roles explicitly: operator subject leads, partnership and funding attributed in subordinate clauses.

### Extension — action hung off the partner's verb in a combine

Issue: compressing two orgs' actions into one sentence hangs the second org's action off the first org's verb as a prepositional phrase: "Hugging Face brought MolmoAct 2 into LeRobot … with our training data in LeRobot's format" (the source: Ai2 released the training data).

Safer: each org keeps its own verb — "And when they brought MolmoAct 2 into LeRobot, we released the training data in LeRobot's format."

Reasoning: the possessive (`our`) still names the owner but the release action has transferred to the partner's verb. Possessives don't carry actions; verbs do. Re-check attribution specifically after combining posts or sentences — the blend arrives during compression, not in the first draft.

Issue: "The cross-model leaderboard widely tracked across the industry."

Safer: "A cross-model leaderboard widely tracked across the industry."

Reasoning: definite article implies a unique referent. Multiple cross-model leaderboards exist; indefinite article matches the reality. Same pattern: `a user's own machine` (any user), `an initial analysis` (one of several possible). Use definite article only when the reference is genuinely unique or already established in surrounding text.

## Bare Comparative Without Referent

Issue: "Making the model more flexible and cheaper to deploy."

Safer: "Making the model more flexible and cheaper to deploy than most."

Reasoning: bare comparatives lack a referent. `Than most`, `than competing systems`, or an explicit named baseline anchors the comparison. The referent can be implicit when surrounding context establishes it (a prior sentence naming the comparison set); otherwise it must appear in the same sentence.

## Source-Figure Discrepancy

Issue: source blog intro reports `720 hours` for a dataset; source body reports `700 hours` for the same dataset.

Action: surface the discrepancy. Do not silently choose. Ask the user which figure is canonical. If the discrepancy persists in the published source, flag it back to the team for cleanup rather than burying the inconsistency.

Pattern: when pulling stats, cross-reference the same figure across all source sections. If they disagree, surface the disagreement with both numbers and the source passages.

### Extension — superseded body lines after an update banner

When a post carries an update banner that supersedes prior facts, the body below the banner can still contain the now-false number, date, or allocation. Even when the body is framed as historical (`Original post follows`), a skimmer hits the live contradiction before reaching the frame.

Issue: banner states a new allocation and a new window; body still reads a prior allocation and a prior date.

Action: after writing or approving an update banner, scan the body for now-contradictory numbers, dates, or allocations. Flag each as `Verify` or reconcile. The banner does not relieve the body of internal consistency.

Test: does any line below the banner still state a now-false number, date, or allocation? Flag each.

See `.agent/skills/ai2-comms-style-source/references/anchor-patterns.md` for a concrete worked anchor.

## Source Pushback Verification

When a user flags a fact as wrong, fetch the source rather than auto-deferring. The source may support your prior text; in that case, quote the supporting passage and ask for clarification before reverting.

Pattern: cite the source passage, then ask the user to clarify if the source itself is in error. Revert to a safe version while awaiting clarification — do not keep contested copy live.

## Outcome Claimed As Designation

Issue: "We made this our biggest open contribution to it yet."

Safer: "We're proud to make this strong contribution to it."

Reasoning: `biggest` implies Ai2 actively designated this release as top-rank. Emergent outcomes get descriptive verbs (`is`, `stands as`, `turned out to be`) or measured strengtheners (`strong`, `important`, `major`). Deliberate choices get agency verbs (`we built this to`, `we designed it to`). Audit verbs of agency against whether the outcome was deliberate or emergent.

## Verification-Independence Fidelity

Issue: `independently verified`, `third-party verified`, `manually verified`, or `human verified` applied to a verifier that does not match the modifier.

Safer: conservative-true phrasing — `held up when checked against [the actual evidence source]`, or name the verifier without the modifier.

Reasoning: verification-independence modifiers must match who or what actually did the verifying. A verifier from the same model family as the system under test is not `independent` (shared training, shared blind spots). An automated verifier is not `manual` or `human`. Strip the modifier or rephrase to match the evidence source.

Test: name the verifier. Does the modifier match it? If the verifier is the same model family, drop `independent`. If it is a model, drop `manual` / `human`. If a mix (mostly automated, humans only on escalation), drop both and describe the process.

Anchor: a system uses a verifier in the same model family as its extractor; the process is mostly automated with humans only on escalated cases. `independently verified` and `manually verified` both overstate. Conservative-true: `held up when checked against public evidence`.

## Totality Vs. Coverage Caveats (Intra-Piece)

Issue: a piece that says `maps and identifies ALL a model's dependencies` in one tweet and `what it surfaces is a lower bound` in another tweet.

Safer: drop the totality word — `maps and identifies a model's dependencies` — or rewrite the caveat to remove the contradiction.

Reasoning: totality words (`all`, `every`, `complete`, `full`) cannot coexist with a lower-bound or partial-coverage caveat on the same quantity in the same piece. The lectoral hierarchy puts factual accuracy first; the totality word is the one that fails.

Test: does the piece anywhere say `lower bound`, `likely higher`, `what we could recover`, or similar partial-coverage caveat? Then it cannot also claim `all`, `every`, `complete`, or `full` of the same quantity.

Anchor: a thread that opens with `maps & identifies ALL a model's dependencies` and four tweets later says `what it surfaces is a lower bound` — the two claims about coverage cannot both stand. Drop `ALL`.

## Aspirational Cadence Vs. Actual Cadence

Issue: "Evaluations run continuously, the way end-to-end tests do." (The suite actually reruns when the skills or the model change.)

Safer: "We rerun the evaluation suite whenever the skills or the model change."

Reasoning: cadence words assert how often something happens. `Continuous`, `continuously`, `real-time`, `always-on`, and `ongoing` claim an automatic, uninterrupted cadence. An on-change or ad hoc trigger is not continuous. Match the word to the actual trigger.

Test: what actually triggers the action — a clock or stream (continuous, real-time), a change event (on-change), a human decision (ad hoc), or a schedule (periodic)? Use the word at that tier, not above it. When in doubt, name the trigger instead of using a frequency word.

## Sibling-Product Description From Memory

Issue: public copy describes another Ai2 product from memory — calling OlmoEarth "our Earth-observation models" when it is also a platform, or describing EarthRanger without checking its current scope.

Safer: verify the one-line description against the product's own Ai2 page, then use the verified scope — e.g. "OlmoEarth, our open Earth-observation foundation models and platform."

Needed source: the product's current Ai2 page (allenai.org or the product blog).

Action: treat an unverified sibling-product gloss as `Verify`, not `Clean`. Covers Skylight, EarthRanger, OlmoEarth, Olmo, Tulu, Molmo, and any other Ai2 line named in passing.

## Anthropomorphic Descriptor

Issue: "The savings come from a smarter way of processing satellite data."

Safer: "The savings come from a more efficient way of processing satellite data."

Reasoning: `smarter` is an anthropomorphic agency claim. Models compute; they do not exercise intelligence. Replace with measurable terms (`more efficient`, `more accurate`, `lower compute cost`, `trained to`). The fix is at the descriptor level; the surrounding claim usually stands.

## Latinate Hedge Standing In For A Number

Issue: "The new checkpoint shows a significant improvement, and teams are increasingly adopting it."

Safer: "The new checkpoint scored 72.4 on the held-out split, up 3.3 points from the prior release. Since May 5 it has been downloaded more than 400K times."

Reasoning: two Latinate hedges each assert something the draft has not shown. `Significant` names a statistical test — it borrows the authority of a p-value or confidence interval the source may never have produced. `Increasingly` asserts a trend, which needs two points and a direction. Both read as measured rather than promotional, so they clear a style pass; the claim is missing underneath. Same family: `substantial`, `considerable`, `robust`, `comprehensive`, `extensive`.

Test: name the number the word stands in for. If the source has it, use it. If the source does not, the word is concealing a gap — flag `Verify` rather than letting the adjective carry the claim. For `significant` specifically, ask whether the source ran a test; keep the word only alongside the test, and treat bare `statistically significant` with no test named as a `Verify`.

Exceptions, so the check does not fire on exact wording: `significant` alongside the test it names is correct and stays (`significant at the reported p-value, though only at large N and with a tiny effect size`). `Robust` with a named property is exact (`robust to prompt perturbation`), as is the `robust phrasing` sense used in this file. `Increasingly` on a sourceable field-level trend in positioning copy holds; the flag is `increasingly` attached to an Ai2 capability, result, or adoption figure.

Related: borrowed scientific jargon can hide the same gap. `Rate-limiting`, `an order of magnitude`, and `parameter` used figuratively sound quantitative and carry no quantity. `An order of magnitude faster` is a numeric claim and needs a ratio near ten; at 3x it is false. See `.agent/skills/ai2-comms-style-source/references/ai-prose-to-avoid.md` (Latinate Hedges, Borrowed Scientific Jargon).

## Population Scope On Quantified Claims

Issue: `Every user keeps their [N tokens].`

Safer: split into `[New users] start with [N tokens]` (the population that receives the grant) and `any [tokens] you already have still work` (the population that already holds a balance).

Reasoning: when a claim hinges on a number tied to a group, name the right population. The same number rarely holds for every group at once. New members may receive; existing members may hold more or less depending on prior activity. Asserting one number across all populations creates a false universal.

Test: does the number hold for every member of the named population? If not, split the populations or soften the claim to a form that holds under either branch.

See `.agent/skills/ai2-comms-style-source/references/anchor-patterns.md` for a concrete worked anchor.

## Verb Tier And Evidentiary Status

Issue: `[System] has discovered [pattern] in [domain] data that suggests [new direction].`

Safer: `[System] has surfaced [pattern] in [domain] data that researchers can review for follow-up.`

Reasoning: verbs sit at different evidentiary tiers. `Surfaced` and `flagged` denote a candidate signal — the system surfaced a pattern worth checking. `Found` and `identified` denote an in-data result. `Validated` and `proved` denote externally confirmed findings. Promoting a candidate signal to a confirmed finding (`discovered`, `proved`, `confirmed`) overstates the evidentiary status.

Test: what is the evidentiary status in the source — candidate signal, in-data result, or externally validated? Pick the verb at that tier, not above it. When in doubt, drop one tier.

Tier ordering: `surfaced / flagged` < `found / identified` < `validated / confirmed / proved`.

See `.agent/skills/ai2-comms-style-source/references/anchor-patterns.md` for a concrete worked anchor.

## Unsupported Expiry, Cutoff, Or Urgency

Issue: `Sign up before [date] to keep your [allocation].`

Safer: `[Program] runs through [date]` plus `any [allocation] you already have still works`.

Reasoning: distinguish a window from a cliff. A date can mark when the current setup or terms hold (a window, a floor) rather than when access ends (a cliff). Asserting an expiry or cutoff the source does not support manufactures urgency that does not exist.

Test: does the source say access ends on the date, or that current terms hold through it? Phrase to match. If the source is ambiguous, phrase to the safer interpretation (window) and flag as `Verify`.

See `.agent/skills/ai2-comms-style-source/references/anchor-patterns.md` for a concrete worked anchor.

## Robust Phrasing Under Unconfirmed Operational Facts

Issue: `[User] keeps [exact prior balance] past [date].` (Asserts that balances were not reset, which may not be confirmed.)

Safer: `Any [allocation] you already have still works.` (True whether balances were reset or not.)

Reasoning: when an operational fact is unconfirmed (whether balances were reset, whether a feature shipped, whether a deployment is live), phrase the claim so it holds under either branch rather than asserting the unconfirmed version. Flag the open fact as `Verify` so it can be tightened later.

Test: does the claim depend on a fact you cannot confirm? Can you rephrase so it is true regardless? Prefer the robust phrasing. Do not assert the unconfirmed version.

See `.agent/skills/ai2-comms-style-source/references/anchor-patterns.md` for a concrete worked anchor.
