# Release Types

## Purpose

Typology of Ai2 release types with per-type positioning notes. Read this when scoping a comms task — what kind of release is this, and which framing applies? The pipeline skill's release-type router walks this file as its dispatch table.

Designed to be extended. New release types can be added below without changing any skill SKILL.md. Each type carries: short definition, positioning frame, key files to consult, and one anchor case.

## Type 1 — Research platform

Definition: a sustained line of work that bundles models, artifacts, process learnings, demos, and community loops. Communicated as a platform, not as individual releases.

Positioning: see `references/platform-positioning.md` for the full framing. Lead with what the platform now offers; name what each new piece adds to the whole; cite accumulated community use.

Avoid: framing the release as standalone; closed-model `we beat them` comparisons; openness as self-evident value.

Key files: `references/platform-positioning.md`, `references/house-style-patterns.md` (house lexicon), `references/ai-prose-to-avoid.md` (closed-model editorializing).

Anchor lines: Olmo, Tülu, Molmo, OlmoEarth (the line-level framings; specific model releases within these lines are Type 2 contributions to the platform).

## Type 2 — Model release within a platform

Definition: a new model, checkpoint, or variant that contributes to an existing platform line.

Positioning: lead with what the model adds to the platform. The model is the body's substance; the platform is the framing. Worked shape: `[Model] adds [capability] to the [platform] line, joining [prior pieces], with [concrete improvement under scope].`

Avoid: launching the model as if it stands alone; redundant restatement of platform identity (the platform framing is set by the opening; do not repeat it in every paragraph).

Key files: `references/platform-positioning.md`, `references/house-style-patterns.md` (opening forms, canonical arc, comparison framing), `references/claims-and-benchmarks.md`.

Anchor: a new OLMoE checkpoint, a new Molmo variant, a new Tülu post-training stage.

## Type 3 — Single model release (no platform line)

Definition: a model that does not currently sit inside a platform line. Treated as a standalone artifact; may become Type 1 or Type 2 over time.

Positioning: standard launch-blog or newsletter framing. Use the canonical arc and opening forms from `references/house-style-patterns.md`. No platform framing required.

Key files: `references/house-style-patterns.md`, `references/newsletter-format.md`, `references/claims-and-benchmarks.md`.

Anchor: early Olmo (before it had grown into a platform); a first-of-line model with no follow-on yet.

## Type 4 — Benchmark release

Definition: a new evaluation harness, leaderboard, or scoring artifact.

Positioning: lead with the evaluation gap the benchmark fills. Frame contribution as `the field lacked a way to measure X; this benchmark measures it`. Comparison framing should focus on benchmark correlation with downstream behavior, not on which models score highest.

Avoid: bare `state-of-the-art` claims about the benchmark itself; claims that the benchmark `proves` model quality (a benchmark is a measurement, not a verdict).

Key files: `references/claims-and-benchmarks.md` (comparison framing scaffold, scope qualifiers), `references/house-style-patterns.md` (opening forms — problem-first usually fits best).

Anchor: IFBench, AstaBench, DocReason, PreScience.

## Type 5 — Dataset release

Definition: a new training, evaluation, or curated data artifact.

Positioning: lead with what the dataset enables that was not possible before. Scale matters (number of examples, hours of data, breadth of coverage); pair the scale claim with what researchers can do with it. The `fully open` lexicon usually applies — pair with the artifact list (data, schema, license, data card). When the release is a curated *pool* or partitioned resource rather than a ready-to-use set — quality-tiered partitions from which users derive their own training mixes — lead with the choose-your-own-mix framing (`a pool you sample from`, not `a fixed mixture`), say what the partitions let researchers build, and do not imply a finished training recipe. If the optimal mix or the mixing/ablation study is future work, state that as a finding (`we provide the partitions; the calibration study is the next step`), not a gap to paper over.

Avoid: scale claims without scope (`largest dataset ever` is a blocker; `largest open dataset for [task] under [license]` is fine); `clean` or `unbiased` claims without explicit methodology; implying a pool is a ready-to-train recipe when the mixing decisions are left to the user or deferred to future work.

Key files: `references/claims-and-benchmarks.md`, `references/house-style-patterns.md` (house lexicon, comparison framing), `references/source-fidelity.md` (terminology preservation for dataset names).

Anchor: Dolma, MolmoSpaces, YAM, the data mix in Olmix.

## Type 6 — Tool or library release

Definition: a library, configuration tool, training recipe collection, or developer-facing utility.

Positioning: lead with the workflow problem the tool solves. Frame audience explicitly (`for developers`, `for post-training researchers`). Show what the tool replaces or simplifies. Direct second-person voice (`you can`) fits.

Avoid: framing the tool as a research artifact when the audience is developers; technical mechanism without payoff on developer-facing surfaces.

Key files: `references/house-style-patterns.md` (audience segmentation, reader-action voice), `references/newsletter-format.md` (CTAs and short-item discipline for roundups), `references/ai-prose-to-avoid.md` (anthropomorphic descriptors of tool behavior).

Anchor: Tülu Cookbook, Olmix data-mixing utilities.

## Type 7 — Application release

Definition: an end-user or vertical application built on Ai2 research (`autonomous research agent`, `embodied AI demo`, `interactive scoring tool`).

Positioning: lead with the user task or research workflow the application supports. Cite real research partners or use cases when approved. The verb tier rule from `.agent/skills/ai2-comms-claims-lector/references/claim-review-patterns.md` matters here — applications that surface candidate signals must use surfaced/flagged language, not discovered/proved.

Avoid: validated-finding language for candidate signals; deployment claims without approval; press-release register on launch.

Key files: `.agent/skills/ai2-comms-claims-lector/references/claim-review-patterns.md` (verb tier, evidentiary status), `references/approval-gates.md` (partner deployments, named customers), `references/platform-positioning.md` (when the application is part of a platform line).

Anchor: AutoDiscovery, PointCheck, How2Everything.

## Type 8 — Update or extension

Definition: a post-release follow-up — extended access, integration added, code shipped, eval harness updated, scope expanded.

Positioning: use the update-annotation format from `references/house-style-patterns.md` (`**Update [M/D]:** *[description]*`). Distinguish window from cliff — extensions extend a window; they do not necessarily reset balances or grant new allocations.

Avoid: manufactured urgency (cliff framing when source supports window); stacked banner sequences (`extended again, extended again`); body lines that contradict the banner.

Key files: `references/house-style-patterns.md` (update annotations), `.agent/skills/ai2-comms-claims-lector/references/claim-review-patterns.md` (window vs. cliff, robust phrasing under unconfirmed facts, superseded body lines), `.agent/skills/ai2-comms-structure-lector/references/review-checklist.md` (replace-vs-stack banner discipline, headline-owns-central-fact).

Anchor: AutoDiscovery early-access extensions; an integration-shipped update on a model post.

## Type 9 — Research blog or process write-up

Definition: a longer-form post documenting methodology, decisions, failures, lessons, or progress — not tied to a specific artifact release.

Positioning: this is part of the `Continue` and `Start` lists for the platform framing — process documentation is platform documentation. Lead with the question or decision being documented. Hedging is appropriate (`we observe`, `our results suggest`) since process posts often share preliminary findings.

Avoid: launch-blog framing on what is actually a process post; over-resolution of open questions; presenting a single experiment as a generalizable result.

Key files: `references/house-style-patterns.md` (hedging forms, problem-first opening), `references/voice-and-prose.md` (long-form discipline).

Anchor: a `what we learned` post on training data mixing; a methodology note on post-training stability.

## Type 10 — Newsletter recap

Definition: monthly or themed bundling of recent releases, updates, and events. Has its own format and discipline.

Positioning: see `references/newsletter-format.md` for the full format. Lead story is one current release framed for the newsletter audience; roundup items are signals, not launches; event coverage carries practical specifics.

Key files: `references/newsletter-format.md`, `references/newsletter-example.md`.

Anchor: any monthly Ai2 newsletter.

## Type 11 — External or affiliated research amplification

Definition: Ai2 promotes research it did not solely produce and is not officially releasing — a paper by external or partially-affiliated authors, work done mostly outside Ai2, or a third-party project aligned with Ai2's mission. Ai2 is the amplifier, not the releasing entity.

Positioning: arms-length amplification. Usually problem-first opening — these tend to be transparency, evaluation, or method contributions that fit the mission. Credit the actual producers by institution. Lead on the contribution, not on Ai2.

Voice: third person for the work and any system it introduces (`the authors`, `the paper finds`, `the system`). Do not use `we built`, `we released`, `we tested`. Distinguish what Ai2 did (amplify) from what the authors did (the research, the evaluation, the demo). `In our testing` is wrong when the evaluation was the authors'; use `in the paper's evaluation` or `in the authors' testing`.

First-party exception (Ai2 co-authored): when Ai2 researchers are co-authors and Ai2 is publishing the post as its own research communication, treat it as first-party — first-person joint-team `we`, leading with the collaboration credit so `we` reads as the joint team rather than Ai2 alone (`Together with collaborators at [institution], we introduce [X]`), in an academic/technical register faithful to the paper. The arms-length third person above applies only when Ai2 did not co-author. See `references/house-style-patterns.md` (First-Person Plural Voice) and `references/voice-and-prose.md` (Technical-Register Research Blogs).

Avoid: `we` absorbing the authors' actions; `our research/paper/demo/testing` when Ai2 is not the producer; co-ownership framing (partnership, OMAI/NSF, funding acknowledgment) on affiliations that are not yet approved and settled; dropping the unofficial-artifact disclaimer required by approval gates (see `references/approval-gates.md`, External Or Unofficial Artifact).

Key files: `references/approval-gates.md` (External Or Unofficial Artifact, stickiness rule), `references/house-style-patterns.md` (First-Person Plural Voice exception for amplified work), `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (surface-specific approval gates).

Anchor: an external paper where some authors are Ai2-affiliated, the work was done mostly outside Ai2, an unofficial author-built demo exists, and co-ownership framing (OMAI/NSF/partnership) is still unsettled. Amplify at arms length, credit the institutions, keep the `built independently of Ai2` disclaimer on the demo, omit unsettled co-ownership.

## Type 12 — Ecosystem adoption (third-party build-on)

Definition: Ai2 documents how external or independent organizations built their own products on Ai2's open releases (models, datasets, recipes). Ai2 authored the upstream artifacts and is narrating downstream adoption; the adopters and what they shipped are third-party.

Distinct from Type 11: in Type 11 Ai2 amplifies work it did not produce, so the work, the system, and the evaluation are the authors' (`the paper finds`, `the authors' demo`). In Type 12 the upstream artifacts are Ai2's own, so they take first-person plural (`we released Dolci`, `our Dolma and Dolci datasets`), while the adopters and their products stay third person (`[Adopter] built [their product]`, `[Adopter] released [their model]`). Keep the adopters' independence explicit when the source states it (`independent`, `unaffiliated`).

Positioning: this is platform proof. It belongs to the Continue and Start lists in `references/platform-positioning.md` — accumulated partner and community use is the evidence the platform framing rests on. Lead on the adopters and the concrete problem the openness solved; pair every openness claim with the mechanism that made it matter (auditability, procurement review, regulatory-summary requirements), never openness as self-evident good.

Avoid: implying Ai2 co-built, endorses, or partnered on the adopters' products; absorbing the adopters' actions into `we`; co-ownership or partnership framing unless approved and settled; conflating which Ai2 artifact each adopter actually used (see `references/source-fidelity.md`, Which Open Artifact, And Which Generation).

Key files: `references/platform-positioning.md`, `references/source-fidelity.md` (artifact and generation precision), `references/approval-gates.md` (named-partner adoption, dollar figures, external positioning), `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (Surface-Specific Approval Gates).

Anchor: an Ai2 blog about two independent labs that built their own models on Ai2's fully open releases — one lab fine-tuned its model family from Ai2's open models, the other built its own reasoning model on Ai2's open datasets starting from its own base. `we`/`our` for the Ai2 artifacts; third person for the adopters' products; independence stated, no partnership framing.

## Type 13 — Open-ecosystem research enablement

Definition: Ai2 documents research that external or independent researchers did using Ai2's open artifacts and tooling — open models and data (Olmo, Dolma) plus the tools that make them inspectable (infini-gram, OLMoTrace). The story is what the openness made measurable, not a product. One post can bundle several researchers or studies on a shared spine.

Distinct from Type 11 and Type 12: Type 11 amplifies a paper Ai2 did not produce (the work and its framing are the authors'); Type 12 narrates third-party products built on Ai2 releases. Type 13 narrates third-party research enabled by the open stack, and the tooling is as central as the models and data — `open data and tooling`, not just open weights. Like Type 12, the upstream artifacts are Ai2's, so they take first person (`our infini-gram engine`); the researchers and their studies stay third person (`Mozafari's team`, `Chakrabarty's group`).

Voice register (per-piece call, confirm it): the researchers and their findings are always third person. For Ai2's own artifacts, both registers ship. First person fits when the piece narrates researchers using a tool the reader already knows (`our infini-gram engine`, `our fully open Olmo`). Third person fits when the post's job is to explain what the stack provides — each artifact getting a definitional sentence for a reader who has not met it — and when the finding is a flaw in an Ai2 artifact, where `we` narrating a regression in our own data reads either as absorbing the researchers' finding or as self-flagellation. Ask which of those the piece is doing before drafting; do not carry the last piece's register over as settled. Anchors: first person in the infini-gram and Malenfant pieces (the second one the user's own edit); third person throughout a testimonial whose artifact-map paragraphs each define an Ai2 artifact for a reader who has not met it, and whose central finding is a regression in one of those artifacts.

Positioning: platform proof through science — what becomes answerable when the training data and the tools to search it are open. The spine is estimate-vs-measure: a closed model puts the question out of reach (you can only estimate exposure or provenance indirectly); the open stack lets researchers measure it directly. Pair every openness claim with the capability it unlocks (count entity exposure directly; trace a phrase to its source), never openness as self-evident good.

Structural shape that recurs: stakes (a model's behavior is shaped by its training data, but you can't see inside almost any model) → `Olmo is the exception` (fully open, plus the tools) → one section per research thread, each led by its researcher → a `Why it takes an open model` synthesis (estimate vs measure; neither result could have come from a closed model) → close on Olmo's open-modeling mission. Interview-sourced threads are paraphrase-forward (see `references/source-fidelity.md`, Paraphrase-Forward Handling Of Interview And Researcher Quotes).

Avoid: crediting Ai2 with the researchers' findings (`we found` for their result); conflating the tools (see `references/claims-and-benchmarks.md`, Name The Right Tool For The Capability); asserting contested third-party claims as fact (Contested Or Alleged Attribution Stays Hedged); openness as a virtue without the unlocked capability.

Key files: `references/claims-and-benchmarks.md` (tool naming, contested attribution), `references/source-fidelity.md` (paraphrase-forward quotes, attribution), `references/platform-positioning.md` (platform proof), `references/house-style-patterns.md` (house lexicon, `fully open` pairing).

Anchor: an Ai2 blog on two external teams using the open stack — one counting how often entities appear in Olmo's training data with infini-gram to explain popularity bias, the other using infini-gram to trace AI-generated phrases to their web sources. First person for infini-gram/OLMoTrace/Olmo/Dolma; third person for the researchers; a `Why it takes an open model` synthesis; close on the open-modeling mission.

## Type 14 — Event or program recap (partner-hosted; outside participants use an Ai2 tool)

Definition: a recap of a hackathon, course challenge, or fellowship co-run with a partner, where outside participants (students, fellows) use an Ai2 tool across many independent projects and Ai2 publishes the writeup. The tool is the through-line; the projects and findings are the participants'.

Positioning: lead on the participants' rigor and findings, not on the tool. Name the partner, the event, the selectivity, and the winners — but treat all of these as logistics that must come from the organizer, not inferred from participant materials. Attribute the projects and findings as the participants' own; Ai2's role is the supporting one it actually played (made the tool available, gave lectures). Frame the tool's value as surfacing non-obvious leads with a human in the loop, not autonomous discovery. Let what the event rewarded drive the emphasis — if a project won for rigorously mapping where the tool falls short, that is the story, not a tool-success spin. The close can invite readers to try the tool.

Keep the honesty even when leaning celebratory: at least one genuine limitation of the tool survives, and the synthesis stays two-sided (what it was good for, where it fell short). A favorable-framing steer is itself an overclaim risk.

Distinct from Type 11 (Ai2 amplifies a paper it did not produce) and Type 13 (third-party research on the open stack): here it is an event, with a partner and many outside teams, the tool is the shared instrument rather than the models or data, and the win and selection facts are logistics to confirm. Voice: first person for Ai2's tool and role; third person for the participants and their projects.

Avoid: tool-cheerleading that erases the limitations; naming a contest, winners, selection counts, or a presentation venue the provided materials do not establish; absorbing the participants' findings into `we`; partner co-branding framing that is not approved.

Key files: `ai2-comms-claims-lector` SKILL.md (Unconfirmed event or program facts; Favorable-framing re-diff), `ai2-comms-structure-lector` SKILL.md (Balance survives a positive lean), `references/house-style-patterns.md` (house lexicon), `references/approval-gates.md` (named partner, external positioning).

Anchor: the Ai2–UW Materials Challenge recap — a UW MSE hackathon where 25 teams pitched, 10 were selected, and each used Ai2's AutoDiscovery on a different scientific dataset. Led with the two winning teams (one won by mapping where the tool falls short on simulated data), balanced a `what they agreed on` verdict (good at surfacing leads; not foolproof; needs an expert), credited the UW MSE department, and confirmed the contest and winners with the organizer before naming them.

## Type 15 — Application or demo sunset (EOL) with learnings recap

Definition: a hosted application, interactive demo, or leaderboard is being retired, and the retirement notice doubles as a short recap of what the project found. Communicated as an update block prepended to the original launch post, which becomes the standing record while the live URL redirects to it.

Positioning: prepend the update block — a retirement notice, then a brief `What we learned` — above the untouched original post (an `Original post follows.` divider marks the original as historical). The notice states what is retiring, the date, where the URL will point, which artifacts remain, and a thanks; keep a forward-tense version to post before the date and a past-tense version to swap in after. In the recap, explain the mechanic before the metric (give `votes`, `runs`, or `sessions` their meaning before citing counts), and lead with the durable, field-useful finding rather than the perishable ranking (which system `won` is already in the body and any screenshot). When the demo itself is going away, you can preserve the experience by describing the full interface flow in prose and embedding only a couple of screenshots. Surface limitations (hallucinated citations, stale sources) as ranked findings, not a quarantined caveat.

Avoid: re-tensing or rewriting the original body when you are prepending an update block (the divider already frames it as historical); claiming an artifact `remains available` when it is hosted on the domain being retired — re-host it to a durable home first (this is a blocker, not a caveat); conflating a public-run count with an earlier internal-study count (scope each: `after the platform opened to the public, …`); inventing the denominator or method behind analysis percentages the source did not specify (phrase the number so it is true under either reading and flag it for the analysis owner, rather than asserting a share-of-what it may not be); dropping or reordering a competitor's exact checkpoint label when reporting leaderboard standings (`Gemini 3 Pro Preview`, not `Gemini 3 Pro`), plus any editorialized closed-model framing when naming the systems a result out-ranked.

Key files: `references/house-style-patterns.md` (update annotations, opening forms), `references/claims-and-benchmarks.md` (competitor comparison framing, scope qualifiers, metric-name caution), `references/source-fidelity.md` (public-run vs. internal-study scoping, exact model and checkpoint names, artifact hosting), `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (cross-posting the recap). Worked example: `references/sunset-example.md`.

Anchor: the SciArena demo retirement — an interactive model-evaluation arena sunset on a fixed date, its URL redirected to the original launch post, with a prepended `What we learned` recap that explained the head-to-head blind-vote mechanic, scoped the public-run participation, named the leaderboard winner against the competitors it out-ranked (exact checkpoint labels preserved), and ranked what researchers valued with citation quality first. The paper PDF lived on the retiring domain, so re-hosting it was a pre-publish blocker; the rationale percentages' denominator was left to the analysis owner to confirm. See `references/sunset-example.md`.

## Type 16 — Upcoming-event promotion (Ai2-hosted, RSVP funnel)

Definition: promo copy for an event Ai2 hosts before it happens — a panel, office session, meetup, or talk, often under an umbrella program (Seattle Tech Week, a conference's community week). Nothing ships; the deliverable is attendance via an RSVP link.

Positioning: lead with the substantive question the event answers, not the invitation (`What does it actually take to build frontier AI systems?` beats `Join us for...`). The topic list from the approved event copy is the substance — carry it close to verbatim; it does the work that hype adjectives (`transformative`, `cutting-edge` from the event platform's own blurb) cannot. Logistics (date, time, venue, cost, RSVP mechanics) are organizer facts: compressible but not contradictable (`free, RSVP required, subject to host approval` can compress to `It's free—RSVP to save your spot` but not become `open to all`). Mention the umbrella program once near the top for context; its presenting-sponsor credit attaches to the umbrella, not to the event (see `references/source-fidelity.md`, Sponsor And Umbrella-Program Credit Scope). Name no speakers unless the organizer has announced them as such (see `references/approval-gates.md`, Individual Attribution — event-page hosts).

Distinct from Type 14 (the recap after a partner-hosted event) and from the `We're at [conference]` presence post in `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (someone else's event, no RSVP funnel). Newsletter event coverage compresses this type per `references/newsletter-format.md`.

Avoid: naming event-page `hosts` as panelists; a sponsor credit drifting onto the event; `join us` as the hook; benchmark or model claims (nothing is being released); urgency or scarcity the organizer's page does not state.

Key files: `references/approval-gates.md` (Individual Attribution), `references/source-fidelity.md` (Sponsor And Umbrella-Program Credit Scope), `.agent/skills/ai2-comms-channel-adapter/references/platform-patterns.md` (Hosted-event RSVP thread).

Anchor: the `How AI Gets Built at Ai2` Seattle Tech Week panel — hook question + `#SeattleTechWeek` + date in post 1, the training-runs-to-release topic list in post 2, an RSVP CTA closer; the Luma page's three `hosts` were page managers, not announced panelists, so the copy named no one; `Part of Seattle Tech Week, presented by Madrona` kept the credit scoped to the umbrella.

## How To Use This File

Identify the release type before drafting. For mixed cases (a platform-aligned model release that is also being recapped in this month's newsletter), apply the types in layers: platform positioning sets the framing, model release fills the body, newsletter format compresses the result.

When in doubt about type, ask. The cost of mis-typing is real — a platform release framed as standalone, or an extension framed as a cliff, both produce copy that misses the strategic intent.

## Extending This File

When a new release type emerges that does not fit the existing set, add it here with the same structure: definition, positioning, avoid, key files, anchor. The pipeline skill's router walks this file; new types become routable without changing the router.

Do not add product-specific facts to the type entries. Each type description should generalize across products. The Anchor lines are concrete cases for orientation; the framing rules should be product-independent.

## Genre Overlays (Orthogonal To Type)

A release type (above) describes what the contribution is; a genre describes the document format the user asked for. The two are orthogonal: a partnership announcement (often a Type 7 application or a Type 8 update) can be requested as a press release, a blog, or a newsletter. Identify the type for framing, then layer the requested genre's format over it.

### Press release

Deliver the genre's structure (headline, dek, dateline, body, quotes, an `About` boilerplate per named org, media contact, and an end mark, `###`) but in Ai2's house voice, not press-release register. "Press-release register" (`pleased to announce`, `today marks the launch of`) is a banned AI-ism; see `references/ai-prose-to-avoid.md` (Press-Release Register). Lead with the news directly.

Genre flags, all of which apply because the whole document is external-facing:

- Quotes: never fabricate. If the source has no quotation, supply a clearly-labeled proposed draft for a named, approved spokesperson to revise; never present an invented line as something a person said. See `references/source-fidelity.md` (Quotes).
- Boilerplate and dateline: the `About` blurbs, founding facts, and the dateline city and date are usually not in the provided source. Mark them Verify and confirm against each org's approved boilerplate.
- External positioning: partnership framing, named partners, and disclosure of a partner's in-progress work are approval-gated (see `references/approval-gates.md`). An internal source such as a monthly newsletter is not cleared for external use by default.

Anchor: a press release built from an internal monthly newsletter was delivered as press-release structure in house voice, with two proposed (not fabricated) quotes, boilerplate and dateline flagged Verify, and the partnership framing flagged for both orgs' comms sign-off.

### Testimonial

A short profile of one outside team's work on Ai2 artifacts, built from that team's own interview or emailed answers. Usually layered over Type 13 (open-ecosystem research enablement), sometimes Type 11 or Type 12. The deliverable is an enablement story: what those researchers needed, which Ai2 artifacts supplied it, and what they could then do.

Format, distinct from the launch-post defaults above:

- Length 500–1,400 words, well under the 1,500–4,000 launch range. Continuous prose with no section headings under roughly 1,000 words; add headings only past that. (`references/house-style-patterns.md`, Canonical Long-Form Arc, states the launch-post budget; this overlay overrides it.)
- Enablement altitude, not a results recap. The load-bearing content is the artifacts and what they made possible. Benchmark digits, correlation values, model rosters, validation experiments, and secondary case studies are supporting detail and are routinely cut in full — the method gets one plain sentence, not a paragraph with a mechanism gloss. Verify all of it anyway: the numbers you cut are what tell you whether a scope caveat is needed (see `ai2-comms-pipeline`, Verification that does not ship still sets the scope).
- Artifacts early, method second. Lead with the researchers' question, then what they needed, then the Ai2 artifacts that supplied it, and only then the method they built. This inverts the Type 13 shape below, where the openness argument lands as a closing synthesis; in a testimonial the artifact map is the third and fourth paragraphs.
- Keep one weird, specific finding. The distinctive detail is what makes the piece readable; the exhaustive findings list is not.
- Quotes: paraphrase-forward, three or four short verbatim lines. When the Q&A arrives relayed with no per-answer speaker, organizational attribution (`says the [Partner] team`) is publishable — see `references/source-fidelity.md` (Relayed Or Unattributed Q&A).
- The artifact-link footer is often added at publication rather than written into the draft; ask rather than treating its absence as a blocker.

Voice: the partner and their findings stay third person. Ai2's own artifacts can take either register, and it is a per-piece call to confirm, not a default — see Type 13 (Voice register).

Worked shape: `references/worked-shapes.md` (Testimonial).

Anchor: an interpretability company's study of Ai2's open post-training stack. ~640 words, no headings, third-person Ai2, zero numbers in the shipped copy — the dataset size, the headline metric and its weaker counterpart, the model roster, and a validation experiment were all verified during drafting and all cut. What shipped: what the team needed (preference data, intermediate checkpoints, per-stage recipes, evaluations), the artifact map with one definitional sentence each, the method in two sentences, one finding, one concrete detail, and a value close.


