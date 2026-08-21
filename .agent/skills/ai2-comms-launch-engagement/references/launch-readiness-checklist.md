# Launch Readiness Checklist

Fillable worksheet. Hand the completed sheet to `ai2-comms-writer` before drafting. The writer drafts from the sheet, not around it.

Three gates: **T-14** (scope), **T-0** (ship), **T+30** (follow-up). Each gate has decisions that must be answered before passing through it. Anything unanswered is a known gap, not a hidden one.

## T-14: scope gate

Scope must be settled fourteen days out. Numbers can still move; positioning cannot.

### Ownership posture

- [ ] Posture identified (Ai2-produced / co-produced / amplified-external)
- [ ] If amplified-external or any non-Ai2 artifact ships alongside (demo, repo, site): the exact disclaimer text recorded (e.g. `built independently of Ai2`)
- [ ] Disclaimer placement recorded (in copy / on demo page / in image caption / in pinned reply)
- [ ] Co-ownership framing (partnership, OMAI/NSF, funding acknowledgment) approval status confirmed before any such framing enters copy

### Arc placement

- [ ] Platform line identified (Olmo / Tülu / Molmo / OlmoEarth / new line / external-amplification)
- [ ] Prior anchor named (specific release, one-sentence summary)
- [ ] The move named (one of: capability, openness, scale, accessibility, evaluation)
- [ ] Next pointer named (or absence noted intentionally)

### Audience

- [ ] Primary audience named (scientists/researchers, developers/builders, research community, policymakers/educators/public-interest)
- [ ] Secondary audiences listed (for cross-post variants via `ai2-comms-channel-adapter`)
- [ ] If scientists shaped this release, surfaced as input (survey, advisory, partner conversation)

### Asset matrix

For each asset, mark T-0 or staged with target week. Leave unmarked if it is not shipping at all.

- [ ] Paper or preprint — T-0 / T+__ / not shipping
- [ ] Code or repository — T-0 / T+__ / not shipping
- [ ] Weights or checkpoints — T-0 / T+__ / not shipping
- [ ] Leaderboard or eval harness output — T-0 / T+__ / not shipping
- [ ] Video or demo — T-0 / T+__ / not shipping
- [ ] Technical report — T-0 / T+__ / not shipping
- [ ] Blog post(s) — T-0 / T+__ / not shipping
- [ ] Data card or model card — T-0 / T+__ / not shipping

### Demo decision

- [ ] Demo required? (yes / no)
- [ ] If yes, the falsifiable release-specific claim the demo proves
- [ ] Muted-stranger test passed (a viewer with sound off can identify this release)
- [ ] Demo owner named

If the demo cannot pass the muted-stranger test, mark it no-ship and route the claim to a chart via `ai2-comms-chart-designer`.

### Comms-entry timing

- [ ] First research-comms conversation date (target: T-30 or earlier)
- [ ] First research-Labs demo/Playground conversation date (target: T-21 or earlier)
- [ ] Supplementary-material owner assignment date (target: T-21 or earlier)

Late entries: note the date and surface to the planner for next-cycle adjustment. Do not characterize lateness in launch copy.

### Partners

For each named collaborator:

- [ ] Name
- [ ] Single role (co-author / integration partner / dataset contributor / evaluation contributor / compute or infrastructure provider / advisor)
- [ ] Approval-sensitive? (yes / no) — if yes, route to `ai2-comms-style-source`

### Prior-release evidence

- [ ] Builder, researcher, or external developer using the prior anchor — name + artifact link
- [ ] Or: noted gap (no evidence available)

### Talent direction

- [ ] Surface researchers/engineers individually (with their approval) — yes / no
- [ ] Include hiring CTAs in release page or follow-up — yes / no

Pick one direction; do not mix mid-launch.

## T-0: ship gate

Ship gate is the lock. Past this, changes route through `ai2-comms-claims-lector`.

### Claims freeze

- [ ] Claims-freeze date set (and past)
- [ ] Locked-claims manifest produced
- [ ] Numbers, scores, comparisons, named entities all in the manifest
- [ ] Anything not in the manifest is not in the copy

### Approval-sensitive flags

- [ ] All deployment names, dates, multipliers, medical/safety/clinical framings routed to `ai2-comms-style-source`
- [ ] Resolutions returned to the sheet
- [ ] Unresolved flags blocked from copy (writer does not write around them)

### Channel-surface list

The deliberate list goes to `ai2-comms-channel-adapter`. You confirm it exists; the adapter allocates.

- [ ] Surfaces named (which platforms get tailored, which get crossposts, which get skipped)
- [ ] Owner per surface
- [ ] Canonical destination URL live and public (blog, or paper when no blog ships) — the opening post of every X and Bluesky thread carries it, so an unresolved URL blocks post 1, not just the closer

## T+30: follow-up gate

The release does not end at T-0. The follow-up gate is the next chapter beat.

### Follow-up beat

- [ ] Single follow-up beat identified (process post / eval deep-dive / integration update / community recap)
- [ ] Target week set
- [ ] Owner named
- [ ] Or: noted silence (intentional, recorded)

### Staged-asset shipping

For each asset marked staged at T-14:

- [ ] Target week confirmed
- [ ] Owner named
- [ ] Claims-freeze applied at each stage release

### Community evidence capture

- [ ] Builder use, researcher citation, external integration of this release captured for the next anchor's prior-release evidence slot

### Distribution audit

- [ ] X Under the Hood report checked for the launch month (x.com/i/under_the_hood, lands ~10 days after month-end) — suppression labels are invisible from the account's own view, so this report is the only way to see whether launch posts were hidden from non-followers (spam, malicious-URL, do-not-amplify labels)

### Arc ladder update

- [ ] Anchor chapter added to `references/arc-ladders.md` for this platform line
- [ ] Next pointer carried forward to the next planning cycle

## Handoff

When all three gates have passed (T-14 and T-0; T+30 is forward-looking), the sheet is final for the launch itself. Hand it to `ai2-comms-writer`. The writer drafts from the sheet, not around it.

At T+30, the follow-up beat is either shipping or has been intentionally declined. Either way, the sheet closes the loop on this chapter and seeds the next one.
