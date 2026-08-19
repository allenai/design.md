---
name: ai2-comms-writer
description: Use when drafting or revising Ai2 research communications, launch copy, newsletters, technical blogs, emails, captions, social posts, researcher Q&A, or Hugging Face blog copy.
version: 1.0.0
keywords: [writing, drafting, revision, blog, newsletter, comms]
---

# Ai2 Comms Writer

## Writing Contract

Write clear, restrained, technically literate copy. Preserve source meaning and flag any change that affects claim scope, technical terminology, numbers, attribution, or approval-sensitive wording.

Avoid AI-inflected smoothness: generic experience language, empty "not just X but Y" contrasts, poetic abstraction without a referent, and polished sentences that could fit any launch.

## Workflow

1. Identify the channel, audience, source material, and decision the reader should understand.
2. Identify the release type. Walk `.agent/skills/ai2-comms-style-source/references/release-types.md` and pick the type that fits (research platform, model release, benchmark, dataset, tool, application, update, research blog, newsletter recap). Each type names the key reference files to consult. Then check that file's Genre Overlays for the document format the user asked for — a press release or a testimonial layers over the type and changes the format.
3. If the release is Olmo or another platform line, engage `.agent/skills/ai2-comms-style-source/references/platform-positioning.md` as the framing overlay.
4. If a launch-engagement decision sheet exists (from `ai2-comms-launch-engagement`), read it first. Treat it as settled — do not reopen arc placement, demo decisions, asset staging, partner roles, or follow-up beats. If a sheet is missing for a platform-line or multi-asset release, ask the user whether to run engagement scoping before drafting.
5. Draft or revise with the Ai2 voice: direct, specific, and grounded.
6. Keep technical terms exact when they come from the source.
7. Add caveats where comparisons need them.
8. Replace vague mood with concrete source detail: what changed, who it helps, what evidence supports it.
9. End with notes only when a claim, number, source, or approval issue needs the user's attention.

## Output Defaults

- For edits: provide the revised copy first, then a short `Notes` section for substantive changes or open source questions.
- For new drafts: provide a polished draft and list any assumptions.
- For technical posts: include concrete numbers only when they are provided or verified.
- For social posts: avoid carrying benchmark digits unless the user asks for them.
- For line-by-line iteration: when the user is refining copy across many turns and wants to see exactly what moved, offer an inline redline — deletions struck through, additions in brackets — not only a clean revision plus notes. The clean version still goes to the file; the redline is for review.

## Reference

Use `references/examples.md` for compact patterns. Use `ai2-comms-style-source` when the task depends on exact source fidelity, benchmark claims, approval gates, or avoiding AI-inflected prose.

For opening templates, the canonical long-form arc, heading conventions, the Ai2 house lexicon (`fully open`, `reproducible`, `transparency`, `community`), hedging forms, and comparison framing, see `.agent/skills/ai2-comms-style-source/references/house-style-patterns.md`. That file is the generative companion to `.agent/skills/ai2-comms-style-source/references/ai-prose-to-avoid.md`.

When the task is a newsletter (lead story plus news roundup plus optional event coverage), use `.agent/skills/ai2-comms-style-source/references/newsletter-format.md` for the format rules and `.agent/skills/ai2-comms-style-source/references/worked-shapes.md` (Newsletter) for the genre shape. Newsletters have a distinct headline form, paragraph rhythm, and roundup-item discipline that differs from the long-form launch blog.

When the task is a testimonial — a short profile of one outside team's work on Ai2 artifacts, built from their own interview answers — read `.agent/skills/ai2-comms-style-source/references/release-types.md` (Genre Overlays, Testimonial) before drafting. It runs 500–1,400 words, usually without headings, at enablement altitude rather than results altitude, with the artifact map in the first third. Drafting it as a launch post and trimming afterward produces the wrong shape. `.agent/skills/ai2-comms-style-source/references/worked-shapes.md` (Testimonial) carries the shape.

For a long-form technical research blog — especially one amplifying a co-authored paper — see `.agent/skills/ai2-comms-style-source/references/worked-shapes.md` (Long-form research blog): problem-first opening, lead-with-collaboration-credit voice, difficulty ramp, outputs named before uses, bare statistics glossed with their scale, inline limitation parity, and a resolvable paper-link CTA.

After drafting, run `references/revision-passes.md` — eight ordered passes covering word repetition, list and example discipline, punctuation specificity, sentence variety, paragraph topic discipline, AI-ism sweep, comparison framing, and a source re-diff after any plain-language rewrite. The pass order matters; earlier passes change material that later passes audit.

When adapting technical or research copy for a non-specialist audience, run the plain-language pass per `.agent/skills/ai2-comms-style-source/references/voice-and-prose.md` (Plain-Language Pass For Broad Audiences). Gloss undefined jargon; do not replace a precise statistical term with a folksy paraphrase — see `.agent/skills/ai2-comms-style-source/references/claims-and-benchmarks.md` (Precision With Gloss, Not Folksy Paraphrase). After any plain-language pass, run Pass 8 of `references/revision-passes.md` (Source Re-Diff After Plain-Language Edits) to catch drift-back.

## Related Skills

Before drafting, when applicable:

- `ai2-comms-launch-engagement` for the pre-draft decision sheet (arc placement, demo, asset staging, partners, audience, follow-up beat) on platform-line releases, multi-asset bundles, and demo-bearing releases.

After drafting, route as needed:

- `ai2-comms-structure-lector` for opening form, canonical arc, redundancy, and framing review.
- `ai2-comms-claims-lector` for comparison framing (absolute + delta + scope), house-lexicon pairing, benchmark scope, and approval-sensitive claims.
- `ai2-comms-chart-designer` when the draft includes benchmark charts, leaderboard tables, or score-vs-cost visuals.
- `ai2-comms-channel-adapter` to adapt the approved draft for X, LinkedIn, Reddit, Discord, Bluesky, or Hugging Face blogs.

`ai2-comms-style-source` is the voice authority for fidelity, approval gates, and house-style patterns.
