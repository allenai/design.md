# Approval Gates

Flag these before publication unless explicit approval is already present in the task context:

- Named partner institutions in public copy — medical centers, universities, government agencies, companies. Default-omit until approval.
- Named partner deployments in public copy. Default-omit until approval.
- Sensitive partner mentions.
- Named customers.
- External positioning claims about adoption, deployment, impact, or endorsement.
- Legal framing, copyright conclusions, safety claims, or compliance claims not backed by reviewed source text.

The list above is categorical by design. The current roster of specific gated partners, deployments, and customers is maintained by the Ai2 comms team and is not recorded in this repository; treat any named institution, deployment, or customer as gated until the task context shows explicit approval.

When a claim needs approval, do not remove it silently. Mark it as approval-gated and provide a safer fallback that preserves the known facts.

## Individual Attribution

Default: do not name individual non-Ai2 developers in roundup items or launch copy. Identify the project, the affiliated organization (if any), and what was built; omit the individual developer's name unless the individual is the story.

Worked case: an independent project called PointCheck that combines Molmo, MolmoWeb, and Olmo 3 should be described as `an independent project that combines Molmo, MolmoWeb, and Olmo 3` — not `an independent project by [Name] that combines ...`.

Exceptions, all requiring explicit approval:

- The individual is the story (a profile, an interview Q&A, a quoted partner researcher).
- The individual is a named partner deployment lead whose role is load-bearing for the claim (e.g., a named lab director when the partner deployment is the news).

When source material names individuals, the default still applies: strip the individual name in adaptation unless the approval gate has been cleared.

Event-page hosts: the names an event platform (Luma, Eventbrite, Partiful) lists as `hosts` are page managers, not announced speakers. Do not name them as panelists or speakers in promo copy — that is a factual error on top of the attribution gate. Name a speaker only when the organizer has announced them as such; until then, role language (`the research engineers and scientists building our open models`, `researchers`) carries the copy. Verify against the organizer, not the platform's host row.

Anchor: a Luma page for an Ai2 panel listed three staff under `hosts`; none were announced panelists. The promo copy named no one and said `the researchers behind Ai2's open models`.

## Mid-Session Approval Re-Check

Approval status can change during a drafting session. A name omitted in the first pass may be approved by the time of the closing pass. Re-check approval status before finalizing.

When adding sensitive content (named institutions, individual researchers, partner deployments, dollar figures, adoption claims) during revision, explicitly note the approval status next to the addition. If the gate has not been cleared, mark as `approval-gated` and supply the fallback.

Approval status can also change downward — content approved for the blog may not be approved for social or external surfaces. Surface-specific approval is the channel-adapter skill's concern; ask before broadcasting blog-approved claims to social.

## Reviewed Source vs. Provided Source

Source-supported is not the same as approval-cleared.

- Source-supported: the claim appears in the provided paper, blog, leaderboard, or internal document.
- Approval-cleared: the claim has been reviewed by the relevant Ai2 stakeholders for public communication.

A claim can be source-supported but not approval-cleared (a named customer mentioned in an internal report). A claim can be approval-cleared but not source-supported (a phrasing the team has signed off on but the paper does not literally contain). Mark both axes when the distinction matters.

## External Or Unofficial Artifact

Any artifact not owned by Ai2 — a demo, repo, site, or hosted system built by external authors — carries an explicit disclaimer in copy that promotes it: `not an official Ai2 release`, `built independently of Ai2`, or equivalent. This is a gate, not a stylistic preference.

The disclaimer applies whether the authors are unaffiliated, partially affiliated, or fully affiliated but acting outside their Ai2 role. The test is who owns the artifact, not who wrote it.

Placement: the disclaimer can live in the copy itself, in a pinned reply, on the demo page, or in an image caption — whatever the surface allows. Record the placement in the launch-engagement decision sheet so later revisions know where it lives.

## Disclaimer Stickiness

When an approval-gate condition is a release precondition — a stakeholder approved promotion only on the condition that a disclaimer appears — that disclaimer is sticky.

Test: was promotion approved conditionally on a disclaimer? Then absence of the disclaimer in a later draft is a regression to fix, not a user choice to honor silently.

Pattern: reinstate the disclaimer on every revision pass even when the user's pasted draft has dropped it. Flag the reinstatement explicitly each pass. Stop reinstating only when the user explicitly says the disclaimer lives elsewhere (demo page, quote-reply, image caption) and that placement is recorded in the decision sheet.

Anchor: an unofficial author-built demo whose disclaimer (`built independently of Ai2`) was dropped from successive pasted drafts. The correct behavior was to reinstate plus flag on each pass, because the original go-ahead was conditional on the disclaimer.
