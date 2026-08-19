---
name: ai2-comms-channel-adapter
description: Use when adapting approved Ai2 copy for X, LinkedIn, Reddit, Discord, Bluesky, Hugging Face blogs, newsletters, launch posts, or post-release community follow-up.
version: 1.0.0
keywords: [social, channels, cross-posting, adaptation, comms]
---

# Ai2 Comms Channel Adapter

## Channel Rule

Adapt the same source truth to each platform. Do not make a generic version and lightly reword it. Preserve claim scope and move benchmark details to the right surface.

Do not add platform gloss: no generic journeys, moments, movements, "where X meets Y," or "not just X but Y" unless the source itself uses that framing and it earns its place.

## Defaults

- X: concise hook, structured thread when technical, benchmark digits only when requested. The opening post carries the link to the canonical destination (blog, or paper when no blog ships) whenever the thread has one — a link in the first post no longer costs reach — and the closing post keeps the artifact-link block for the rest. See `references/platform-patterns.md` (Put the primary link in the opening post). Amplification is quote posts carrying the amplifier's own sentence, never plain reposts, staged for the first hours after the announcement; links go to first-party domains with strong OG cards; never engagement-bait. See platform-patterns (Amplify by quote post; Launch amplification lands in the first hours; Link hygiene) — all read from X's open-sourced ranking code, 2026-08-13.
- LinkedIn: polished and direct, foreground why the work matters to researchers, developers, institutions, or the open ecosystem.
- Reddit and Discord: conversational, technically candid, invites questions, avoids launch gloss.
- Hugging Face blog: clean, standard Markdown; a single H1 on the first line (it becomes the article title); basic links, lists, blockquotes, and code; figures as `![alt](url)`; LaTeX only when needed. For the full supported-syntax set and the rules for porting a published Ai2 blog to a Hugging Face post, see `references/platform-patterns.md` (Hugging Face Blog).
- Bluesky: shorter than LinkedIn, less threaded than X unless the topic requires steps. Follows X's opening-post link default; count the full URL against its 300 rather than X's 23.
- Newsletter: distinct format with a lead story (compressed launch blog), a three-to-five-item news roundup, and optional event coverage. See `.agent/skills/ai2-comms-style-source/references/newsletter-format.md` and `.agent/skills/ai2-comms-style-source/references/newsletter-example.md` for the rules and shape.
- Conference / Event promotion: single short post by default on X and Bluesky, using the shared format `We're at [#ConferenceYear] with [what we have there] across the conference. [CTA].` Promote to a thread only when there is enough to stage. See `references/platform-patterns.md` Conference / Event Promotion.
- All channels: lead with a concrete release, result, artifact, or question the community can inspect.
- When adapting from a technical blog to a broader-audience channel, run the plain-language pass per `.agent/skills/ai2-comms-style-source/references/voice-and-prose.md` (Plain-Language Pass For Broad Audiences): gloss undefined jargon, but keep precise statistical terms with a brief gloss rather than replacing them with folksy paraphrase. See `.agent/skills/ai2-comms-style-source/references/claims-and-benchmarks.md` (Precision With Gloss).
- When adapting from a blog, preserve the opening form the blog used (problem-first, announcement-first, or context-plus-stakes). Cross-posts should feel like the same piece compressed for the platform, not a different angle. When adapting to or from a newsletter, the lead-story headline takes the announcement-first form with an em-dash quantified benefit; see the newsletter format reference.

## Output

Name the platform and provide ready-to-post copy. Include character counts for X when close to the limit. Add claim or approval notes only when needed.

Use `references/platform-patterns.md` for platform-specific shapes. For the canonical blog arc and opening forms that drive cross-post compression, see `.agent/skills/ai2-comms-style-source/references/house-style-patterns.md`.

## Related Skills

The source draft should come from `ai2-comms-writer`. Before cross-posting, the draft should clear `ai2-comms-claims-lector` (so claim scope, comparison framing, and approval-sensitive copy do not drift across surfaces) and `ai2-comms-structure-lector` (so the opening form transfers correctly to the compressed surfaces).

If the cross-post carries a benchmark chart or table, route the visual through `ai2-comms-chart-designer`. Voice authority for the underlying copy is `ai2-comms-style-source`.
