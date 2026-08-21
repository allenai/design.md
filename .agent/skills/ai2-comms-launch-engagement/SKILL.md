---
name: ai2-comms-launch-engagement
description: Use when planning an Ai2 release before drafting — locating it on the Olmo/Tulu/Molmo/OlmoEarth arc, deciding demo scope, staging supplementary materials (paper, code, leaderboard, video, technical report), surfacing partner roles, identifying the primary audience, naming the next pointer, and scoping the between-release follow-up. Fires pre-draft alongside writer, not after. Triggered by "launch plan", "where does this fit", "next pointer", "do we need a demo", "what ships at T-0", "stagger this launch", "partner attribution", "between releases", "process post cadence", "is this a chapter or a one-off", "follow-up beat", "launch engagement", or any release where upstream decisions (assets, demo, partners, arc placement, audience) are unsettled. Decision-side, not prose-side — does not draft, review, chart, or adapt to channels.
version: 1.0.0
keywords: [launch, planning, release-arc, assets, partners, comms]
---

# ai2-comms-launch-engagement

Pre-draft coaching skill. Treats each Ai2 release as a chapter in a continuing platform arc, not a standalone artifact. Surfaces the upstream decisions — prior anchor, the move, next pointer, audience, demo scope, asset staging, partner roles, talent direction, comms-entry timing, follow-up beat — before the writer touches the page.

Decision-side. You do not draft, review, chart, or cross-post. You produce a structured decision sheet the writer reads first.

## When to fire

Fire pre-draft on:

- Platform-line releases (Olmo, Tülu, Molmo, OlmoEarth) — arc placement is load-bearing.
- Model, benchmark, dataset, tool, or application releases with a multi-asset bundle (paper plus code plus weights plus leaderboard plus video plus technical report).
- Releases that include or might include a demo.
- Type 9 process posts and between-release continuity beats.
- Type 11 external or affiliated research amplification — ownership posture and unofficial-artifact disclaimers must be settled before any draft.
- Any release where partner attribution is unsettled or approval-sensitive.

Skip on:

- Solo newsletter recaps with no new artifact — `ai2-comms-style-source` overlays `.agent/skills/ai2-comms-style-source/references/newsletter-format.md` already.
- Pure update notes that ship inside an existing thread.

If you are unsure, fire. The cost of one decision sheet is low; the cost of a launch that reopens settled questions mid-draft is high.

## The arc, not the artifact

Before answering anything else, restate the through-line. Every Ai2 release sits on a line that has prior chapters and future chapters. The writer's first paragraph either acknowledges that line or pretends the release exists alone. The decision sheet exists to make sure the writer has the line.

Consult `.agent/skills/ai2-comms-style-source/references/platform-positioning.md` for Olmo/Tülu/Molmo/OlmoEarth Continue/Stop/Start framing. Do not duplicate it here. Consult `.agent/skills/ai2-comms-style-source/references/release-types.md` for the release-type router and for Type 9 (process post) framing.

## Locate this release on the ladder

You produce three answers, in order:

1. **Prior anchor.** Which specific prior release does this one continue? One sentence on what that release established. If the answer is `none, this opens a new line`, say so plainly and flag for `ai2-comms-style-source` review.
2. **The move.** What does this release change about the line's story? Capability, openness, scale, accessibility, or evaluation. Pick one. More than one means the release is doing too much; consider splitting or restating.
3. **Next pointer.** What does this release set up that a future release will deliver? If no next pointer exists, record that explicitly in the sheet as an intentional choice.

Cross-reference `references/arc-ladders.md` for the current state of each platform line.

## Audience

Identify the primary audience before drafting:

- **Scientists and researchers** — domain users; the AI-for-science angle. When scientist input shaped the work (survey responses, advisory conversations, partner research), surface that in the sheet so the writer can ground the claim in input rather than assumption.
- **Open-source developers and builders** — practitioners who can pick up artifacts and build on them.
- **The broader research community** — peers who will cite, replicate, or extend.
- **Policymakers, educators, public-interest stakeholders** — when openness or downstream impact is the story.

Pick one primary audience. Secondary audiences can be addressed in cross-posted variants via `ai2-comms-channel-adapter`. Audience identity changes the lead, the evidence the draft cites, and which CTAs land.

## Demo discipline

If a demo is on the table, answer in this order:

- Is a demo required? A demo is required when there is a release-specific claim a chart cannot prove. A demo is not required because the calendar said `include video`.
- What specific claim does it prove? Name the claim in terms a chart could falsify — a measurable behavior, a named comparison, a capability that can be shown failing as well as succeeding.
- Would a stranger who watched it muted know this is not a generic LLM product? If no, the demo is not ready.

A generic chat demo does not ship. Either the demo shows the release-specific artifact — leaderboard updating, eval harness firing, dataset slice loading, a capability that is on-platform-line — or it does not exist for this release.

## Supplementary asset staging

Produce the staging matrix. For each potential asset, mark **ship-at-T-0** or **staged** with a target week:

- Paper or preprint
- Code or repository
- Weights or checkpoints
- Leaderboard entry or eval harness output
- Video or demo
- Technical report
- Blog post(s)
- Data card or model card

Anything not on the matrix is not promised in copy. The writer does not invent a `coming soon` item the matrix does not list. If an asset is staged, you give the writer the language to point forward without overpromising — `in the coming weeks`, not a date that has not cleared.

Weigh video's X shelf life in the ship-at-T-0 decision: a native, standalone demo video longer than 10 seconds is the only X asset with algorithmic distribution past 48 hours (multi-week discovery windows plus an evergreen lane); text, image, and link posts all age out at 48. See `ai2-comms-channel-adapter` platform-patterns (Native video is the only format that outlives 48 hours).

Set a **claims-freeze date.** Past that date, any change to numbers, scores, comparisons, or named entities routes back through `ai2-comms-claims-lector` before shipping.

## Comms-entry timing

Record when comms and Labs entered the release plan:

- First conversation between research and comms on this release (target: T-30 or earlier).
- First conversation between research and Labs on demo or Playground integration (target: T-21 or earlier).
- Date the supplementary-material owners were assigned (target: T-21 or earlier).

Late entries shrink the window for high-quality video, visualizations, and supporting materials. Surface late entries in the sheet so the next cycle can adjust. Do not characterize the lateness in launch copy.

## Partners, advocates, and roles

For every collaborator named in the launch, pick one role:

- Co-author
- Integration partner
- Dataset contributor
- Evaluation contributor
- Compute or infrastructure provider
- Advisor

No vague `with support from`. No partner mentioned in copy without a named role in the decision sheet.

Advocate amplification on X is quote posts, not reposts, staged for the first hours after T-0: X's ranking pipeline never shows reposts or replies to non-followers and collapses any number of reposts into one feed candidate, while each quote post carrying the advocate's own sentence is an independent, recommendation-eligible post. A post's discovery also decays within hours and ends at 48, so day-one quote-posts outweigh a week of trickle. See `ai2-comms-channel-adapter` platform-patterns (Amplify by quote post, never plain repost).

Surface evidence of the prior release in the wild. If a builder, researcher, or external developer has used the prior anchor release, name them and link the artifact. This is how the writer shows the line matters without claiming impact the team has not earned. If the gap is real, note the gap — do not invent the evidence.

Flag partner names, deployment names, and any clinical, medical, or safety framing to `ai2-comms-style-source` for approval-gate review. Surface, do not resolve.

## Talent and recruiting

Web presence between releases affects recruiting. Record:

- Whether this release will surface researchers or engineers individually (with their approval), or stay institutional. Both are valid; the choice is deliberate.
- Whether the release page or follow-up content will include hiring CTAs.

Pick one direction per release; do not bolt hiring CTAs onto research releases that did not plan for them.

## Between-release cadence

Between-release beats keep the line legible to readers who missed T-0. Type 9 process posts, integration updates, evaluation deep-dives, and community recaps are how a line stays alive between anchors.

Answer:

- What is the single follow-up beat after T-0? Process post, eval deep-dive, integration update, community recap.
- When does it ship? A target week, not `soon`.
- Who owns the follow-up?

If no follow-up exists, the launch ends silent. Record that explicitly in the sheet as an intentional choice.

## Handoff to writer

The decision sheet you produce contains:

- Ownership posture (Ai2-produced / co-produced / amplified-external) and the disclaimer required for any non-Ai2 artifact (e.g. `built independently of Ai2` on an unofficial author-built demo)
- Prior anchor (release + one-sentence summary)
- The move (one of: capability, openness, scale, accessibility, evaluation)
- Next pointer (or noted absence)
- Audience (primary + any secondaries for cross-post variants)
- Demo decision (ship / no-ship / staged) and the falsifiable claim it proves
- Asset staging matrix (T-0 vs. staged with target weeks)
- Claims-freeze date
- Comms and Labs entry dates
- Partner roles (one role per name)
- Prior-release evidence (name + link, or noted gap)
- Talent direction (individual / institutional; hiring CTA y/n)
- Follow-up beat (type, target week, owner) or noted silence
- Naming and lineage flags — does the new release name resolve publicly to something else (a retired predecessor, a sibling library)? Does every prior-work fact (acronym, paper, repo) check out against the real source? Surface naming collisions and unverified lineage facts as positioning flags before drafting, not during revision. See `.agent/skills/ai2-comms-style-source/references/source-fidelity.md` (Lineage Facts And Naming Collisions).
- Approval-sensitive flags routed to `ai2-comms-style-source`

Front-load ownership posture and unofficial-artifact disclaimers. Settling them at T-14 prevents disclaimer drift across draft revisions — once a stakeholder approved promotion conditionally on a disclaimer, the disclaimer is sticky (see `.agent/skills/ai2-comms-style-source/references/approval-gates.md`).

The writer reads the sheet before drafting. Settled questions do not reopen. Invented attribution does not appear.

## Cross-links

- `ai2-comms-pipeline` routes here at scope phase, before writer.
- `ai2-comms-writer` receives the decision sheet; does not redo arc placement.
- `ai2-comms-claims-lector` receives the claims-freeze date and locked-claims manifest; gates anything that changes after.
- `ai2-comms-channel-adapter` receives the deliberate community-surface list (which platforms get tailored versions, which get crossposts, which get skipped). Channel allocation is its job; you only confirm the list exists.
- `ai2-comms-style-source` resolves approval-sensitive flags. You surface, it decides.
- `ai2-comms-structure-lector` and `ai2-comms-chart-designer` do not interact with this skill — they fire after draft.

Consult `.agent/skills/ai2-comms-style-source/references/platform-positioning.md`, `.agent/skills/ai2-comms-style-source/references/release-types.md`, and `.agent/skills/ai2-comms-style-source/references/house-style-patterns.md` for framing. Do not duplicate them.

## References

- `references/arc-ladders.md` — ordered milestones per platform line; populate before first use.
- `references/launch-readiness-checklist.md` — fillable T-14 / T-0 / T+30 worksheet; the artifact handed to the writer.
