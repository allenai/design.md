---
name: ai2-comms-style-source
description: Use when writing, editing, or reviewing Ai2 communications (launches, newsletters, blogs, social, emails) where voice, source fidelity, approval constraints, benchmark caution, newsletter format, or brand consistency matters.
version: 1.0.0
keywords: [voice, style, source-fidelity, claims, approval, comms]
---

# Ai2 Comms Style Source

## Scope

These skills govern **outbound Ai2 communications** — launch blogs, newsletters, social posts,
research amplification, emails, captions. That is a different job from the in-product voice a
system uses when it talks to its own users, which lives in each product's `VOICE.md`
(`strata/VOICE.md`, `asta/VOICE.md`, `olmo-earth/VOICE.md`). When you are writing UI copy,
assistant responses, or anything the product itself says, read that product's `VOICE.md`
instead. The two are not interchangeable and neither overrides the other.

Sibling skills named below live at `.agent/skills/<name>/SKILL.md`. Read the file and apply it;
no particular invocation mechanism is assumed.

## Core Rule

Stay close to the source. Improve clarity, structure, and usefulness without quietly changing technical meaning, formal terminology, names, numbers, or approval-sensitive claims.

## Use This For

- Research blogs, launch copy, social posts, emails, Q&A, captions, decks, and internal notes.
- Copy that depends on papers, benchmark tables, leaderboards, charts, researcher input, or partner/customer claims.
- Any work that needs Ai2 voice, fully-open versus open-weight precision, benchmark caveats, or Ai2 chart/design defaults.

## References

Read only what the task needs:

- `references/voice-and-prose.md` for default prose style and editing posture.
- `references/source-fidelity.md` for paper/source handling and tracked wording changes.
- `references/claims-and-benchmarks.md` for numbers, comparisons, benchmark wording, and chart/data rules.
- `references/approval-gates.md` for sensitive partner, deployment, customer, and external-positioning claims.
- `references/ai-prose-to-avoid.md` when copy feels fluent but generic, metaphor-heavy, emotionally inflated, or AI-inflected.
- `references/house-style-patterns.md` for opening forms, the canonical long-form arc, heading conventions, the Ai2 house lexicon, hedging forms, comparison framing patterns, and CTA conventions.
- `references/newsletter-format.md` when drafting or reviewing an Ai2 newsletter (lead story plus news roundup plus event coverage).
- `references/worked-shapes.md` for the genre shapes — long-form research blog, testimonial, newsletter — distilled to the moves that make each work.
- `references/sunset-example.md` when a demo or application is being retired; it is the one fully worked example kept here.
- `references/release-types.md` to identify the release type before drafting and walk the per-type positioning notes (research platform, model release, benchmark, dataset, tool, application, update, research blog, newsletter recap).
- `references/platform-positioning.md` when communicating Olmo or another platform line (Tülu, Molmo, OlmoEarth at maturity) — the Continue/Stop/Start framing for the next phase of Ai2 platform comms.
- `references/anchor-patterns.md` for canonical templates and the before/after anchor library.

## Defaults

- Lead with what changed, why it matters, who it affects, and what is meaningfully different.
- Preserve exact formal terms such as stochastic, differentiable, theorem, proposition, benchmark names, model names, and dataset names.
- Use sentence case by default in headings, labels, captions and UI-adjacent copy. Avoid all caps except established acronyms, model names and literal source strings.
- Flag substantive wording changes, number changes, and any claim that moved beyond the provided source.
- Use restrained confidence. No hype, unsupported superlatives, broad model superiority claims, or legal framing without source support.
- Replace AI-smooth filler with concrete source detail: what changed, what it does, what evidence supports it, and why the reader should care.

## Pipeline

Style-source is the voice authority. The other Ai2 comms skills handle distinct phases of a comms task; route as needed:

- `ai2-comms-pipeline` — full-pipeline orchestrator. Use when the task needs every phase (engagement + draft + parallel review + charts + cross-posting).
- `ai2-comms-launch-engagement` — pre-draft coaching skill. Use when planning a release (arc placement, demo scope, asset staging, partner roles, audience, follow-up beat) before drafting.
- `ai2-comms-writer` — drafting and revision. Use for new copy or rewrites.
- `ai2-comms-structure-lector` — opening, arc, framing, and redundancy review.
- `ai2-comms-claims-lector` — comparison framing, benchmark scope, house-lexicon pairing, approval-sensitive claims.
- `ai2-comms-chart-designer` — benchmark charts, leaderboard tables, Pareto frontiers, scatterplots.
- `ai2-comms-channel-adapter` — adapt approved copy for X, LinkedIn, Reddit, Discord, Bluesky, Hugging Face blogs, or newsletters.

Each lives at `.agent/skills/<name>/SKILL.md`. Read the sibling's file and apply it; no particular invocation mechanism is assumed.

Typical task flow: writer → structure-lector and claims-lector in parallel → chart-designer when benchmark visuals are needed → channel-adapter when cross-posting. Any phase can be entered directly; route forward through the rest of the suite as the task requires.
