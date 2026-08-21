# Platform Positioning

## Purpose

Strategic framing for Olmo and other Ai2 efforts that have outgrown a single-model framing and become open AI research platforms. Read this when drafting any Olmo communication; the framing applies broadly to releases whose role is platform, not artifact.

The Tülu, Molmo, and OlmoEarth lines have similar platform character at varying stages of maturity. When a release is part of one of those lines, treat it as a platform contribution and apply the rules below; when a release is a one-off artifact (a single benchmark, a tooling utility, a research report), apply the standard release framing in `references/release-types.md`.

## Core Takeaway

Communicate Olmo as an open AI research platform, not a model release. A platform is a set of models, artifacts, process learnings, demos, reports, and community loops that helps people understand, use, and build better open AI. A model release ships weights and benchmarks and goes quiet; a platform sustains.

When the choice is available, frame the release in service of the platform: name what the platform now offers, what the new piece adds to the existing whole, and what people can build on top of it. Avoid framing the release as if it stands alone.

## Continue

What is already working and should keep going:

- High-quality technical blogs, reports, and transparent write-ups.
- Full openness on data, artifacts, process, and reproducibility.
- Strong models tied to concrete applications and research use cases — not models in the abstract.
- Expanding partnerships and individual researcher advocates.

When drafting, lean into these. They are the proof the platform framing rests on.

## Stop

Frames and habits that work against the platform framing:

- Framing Olmo as just another chatbot, or as a direct competitor to closed labs. Closed-lab comparisons that read as `we beat them` undermine the platform value proposition; the value is openness and reproducibility, not market position.
- Chasing proprietary models, generic benchmarks, or `best in class` claims that do not map to real user value. (The bare `state-of-the-art` blocker in `references/claims-and-benchmarks.md` already enforces this at the claim level; the platform framing reinforces it at the message level.)
- Treating releases as one-off moments followed by silence. A release that ships and never gets a follow-up reads as an artifact, not a platform component.
- Building demos, tools, or comms campaigns only at the end of the research cycle. Late-stage demos read as marketing wrappers; integrated demos read as platform capability.
- Presenting openness as self-evidently good without showing why it matters in practice. `Open` without a paired mechanism (the same rule as the house lexicon in `references/house-style-patterns.md`) reads as moral assertion; openness shown through reproducibility, inspection, education, or safety applications reads as platform value.

## Start

Habits and patterns to introduce or strengthen:

- Tell an integrated story across models, data, evaluations, tools, demos, and reports. Each release should name where it fits in the platform.
- Make explicit what each artifact is good for and what people can build with it. `Here is what you can do with this` beats `here is what we made`.
- Document the Olmo process more openly — decisions, failures, lessons, and progress over time. Process documentation is platform documentation.
- Build stronger feedback loops with researchers, developers, and community users. Surface community contributions, integrations, and follow-on work in launch and roundup copy.
- Invest in community management, advocates, hackathons, and Hugging Face-adjacent development. Newsletter roundup items and event coverage are natural surfaces for these.
- Highlight real-world advantages of openness in practice: science, safety, robustness, inspection, education, and public-interest applications. Each advantage needs a concrete mechanism or worked case, not a slogan.

## Strategic Framing

Olmo began as proof that fully open language modeling was possible at a time when frontier AI was becoming increasingly closed. It has become a trusted source of open models, artifacts, and process knowledge for researchers. The next phase positions Olmo as the premier fully open AI platform — not only competitive models, but a transparent ecosystem that helps the community learn, build, evaluate, and apply AI in domains that matter.

This framing should appear in lead-story openings for Olmo releases, in event coverage where Olmo is the marquee topic, and in any message where Olmo's role in the broader open AI ecosystem is the subject. It should not be repeated in every paragraph; it sets the stage, and the body proves the platform claim with concrete artifacts and use cases.

## How This Affects Copy

When drafting an Olmo-line release:

- Lead with what the platform now offers, not just what was released. Worked shape: `[Release] adds [capability] to the Olmo platform, alongside [existing pieces], so [audience] can [concrete action].`
- Pair every `open` or `fully open` claim with a mechanism that shows why the openness matters in practice (`inspect the training data`, `rerun the eval harness`, `audit failure modes`, `extend the recipe`).
- Cite specific community work, partner deployments, or research projects building on prior Olmo releases. The platform claim is supported by accumulated use, not by assertion.
- Name what comes next as a roadmap pointer, not a promise: `the next checkpoint targets X` is fine; `we will deliver X by [date]` is not unless explicitly approved.
- Avoid `we beat [closed model]` framings. Use factual descriptors (`matches the open-weight baselines`, `runs at lower cost`) and let openness carry the value proposition.

## See Also

- `references/release-types.md` — when a release is platform-aligned versus standalone, and the per-type positioning notes.
- `references/house-style-patterns.md` — house lexicon rules (`fully open`, `reproducible`, `transparency`, `community`) that the platform framing depends on.
- `references/ai-prose-to-avoid.md` — closed-model editorializing and moralized vagueness, both of which the platform framing must avoid.
- `references/claims-and-benchmarks.md` — comparison framing scaffold, which platform releases must use as carefully as single-model releases.
