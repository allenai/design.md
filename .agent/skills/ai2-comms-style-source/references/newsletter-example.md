# Newsletter Example

Concrete shape and rhythm reference. The product specifics (Olmo Hybrid, MolmoSpaces, How2Everything, Olmix, PreScience, GTC 2026) may go stale; the format is what matters. Read alongside `references/newsletter-format.md` for the distilled rules.

This example contains all three newsletter parts: a lead story, a news roundup with four items, and event coverage. Use it to confirm headline form, em-dash density, paragraph length, and the practical-close rhythm at the end of event coverage.

Punctuation caveat: this is copy as it shipped, so its dash spacing is not uniform. The house convention in `references/house-style-patterns.md` (Dash spacing) governs new copy and overrides what you see here. Take the shape and rhythm from this file, not its punctuation.

---

## Lead Story

**Introducing Olmo Hybrid—2× data efficiency by rethinking the architecture**

Today we're releasing Olmo Hybrid, a new 7B-parameter fully open model family that combines transformer attention with linear recurrent layers—and the results make a strong case for hybrid architectures. On MMLU, a widely used benchmark for general knowledge and reasoning, Olmo Hybrid reaches the same accuracy as Olmo 3 using 49% fewer tokens—delivering roughly 2× the data efficiency in controlled pretraining studies. That means you can train a model to the same capability with half the data, or train on the same data and get a meaningfully better model.

[Image placeholder: HCqNxNlWEAAx1tZ]

Hybrid language models have been gaining momentum across the field, with recent efforts from projects like Samba, Nemotron-H, Qwen3-Next, Kimi Linear, and Qwen 3.5. By combining transformers' ability to recall precise details from earlier in a sequence with recurrent layers' efficiency at tracking evolving state, hybrids promise to be both more capable and cheaper to run at long context lengths. But the community has lacked consensus on whether the purported benefits justify the cost of scaling them up. Olmo Hybrid provides compelling evidence that they do.

Pretrained on 6 trillion tokens using an improved data mix, Olmo Hybrid matches Olmo 3 in training throughput—meaning the efficiency gains come from the architecture itself, not from trading speed for performance. After mid-training, Olmo Hybrid outperforms Olmo 3 across all primary evaluation domains. And scaling-law analysis predicts the token-savings factor grows with model size.

The benefits extend beyond efficiency. Our theoretical and empirical results suggest hybrid architectures offer an expressivity advantage—they can learn patterns that neither pure transformers nor pure linear RNNs capture well on their own, which translates to more efficient scaling as models get larger.

We're releasing base, supervised fine-tuning (SFT), and direct preference optimization (DPO) stages, along with all weights, intermediate checkpoints, and training code—plus a technical report covering the empirical results and scaling-law analysis. We think hybrid models represent a promising direction for the field, and we want the community to be able to build on what we've found.

**Learn more**

[Image placeholder]

Join our Discord | We're now on Reddit!

---

## News Roundup

[Image placeholder: HA5sJBWX0AAoPti]

**MolmoSpaces**

A fully open, large-scale platform for embodied AI research, MolmoSpaces unifies over 230,000 indoor scenes, more than 130,000 physics-ready object assets, and over 42 million annotated robotic grasps—all compatible with MuJoCo, ManiSkill, and NVIDIA Isaac Lab/Sim. It also includes MolmoSpaces-Bench, a suite of 8 tasks with strong sim-to-real correlation.

Try it now

[Image placeholder]

**How2Everything**

People ask chatbots how to do things all the time, but measuring whether the instructions would actually work has been an open problem. How2Everything is a framework for evaluating and improving LLM-generated procedures—including a pipeline that extracted 351K real-world procedures from nearly a million web pages, a 7,000-example benchmark, and an open evaluation model.

Try it now

[Image placeholder]

**Olmix**

Data mixing — how much web text, code, math, and other domains to blend during language model training — is a first-order lever on model quality. Olmix provides empirically grounded defaults so you're not guessing at configuration choices, plus mixture reuse techniques that let you efficiently update your mix as data evolves during development.

Read more

[Image placeholder: HCBLmw5XIAAbNRf]

**PreScience**

Can AI forecast how science unfolds? PreScience is a benchmark that decomposes the research process into four generative tasks: collaborator prediction, prior work selection, contribution generation, and impact prediction. Built on 98K recent AI papers with disambiguated authors and temporal metadata, it offers a structured way to evaluate whether AI systems can anticipate which scientific problems and methods will become central to the field next.

Read more

---

## Event Coverage

[Image placeholder]

**Ai2 at NVIDIA GTC 2026**

We'll be at GTC 2026 in San Jose from March 16–19 with panels, talks, demos, and a marquee conversation on the future of open models.

On Tuesday, March 17 (4:00–4:40 PM PT), Ranjay Krishna, Director of PRIOR at Ai2 and the team behind the Molmo family of multimodal models, joins Jonathan Cohen and Vartika Singh (NVIDIA) and Ying Sheng (RadixArk) for The State of Open-Source AI—a conversation about where open is heading next and what it takes to make open ecosystems trustworthy, scalable, and production-ready.

Ai2's Hanna Hajishirzi, Senior Director of AI and Co-Lead of the Olmo and Tulu projects, joins Jensen Huang and leaders from across the industry for a conversation on the state and future of open models. If you're at GTC, don't miss this one.

Also on Wednesday (2:00–2:40 PM PT), Hanna joins Percy Liang (Together AI) for Build Trust and Discovery Through Open-Source AI in Research—focusing on how open-source AI can strengthen scientific workflows by making methods inspectable, results repeatable, and tools easier to build on across labs.

Find us at the Cirrascale booth (238), where members of our AutoDiscovery team will be there to give demos and answer your burning questions. AutoDiscovery is our AI-powered tool that explores your datasets autonomously—generating hypotheses, running experiments, and surfacing findings you might never have thought to look for.

And throughout GTC, stop by Lambda's booth (1507) to watch a live demo of supervised fine-tuning on Olmo Hybrid with real-time observability metrics streaming on screen.

We look forward to seeing you there!

---

## Notes On This Example

Patterns to observe:

- The lead headline is announcement-first with an em-dash quantified benefit: `Introducing [Product]—[benefit].`
- The opening sentence uses the same form at the sentence level: announcement, em-dash, direct claim.
- The first body paragraph spends three sentences entirely on the strongest benchmark comparison (MMLU, 49% fewer tokens, same accuracy) and ends with a `That means...` practical translation.
- Peer projects (Samba, Nemotron-H, Qwen3-Next, Kimi Linear, Qwen 3.5) are named neutrally, in a single inline list. No editorial color.
- `Fully open` appears with the artifact mechanism attached: `base, supervised fine-tuning (SFT), and direct preference optimization (DPO) stages, along with all weights, intermediate checkpoints, and training code—plus a technical report`.
- The closing position uses the canonical form: `We think [X] represents a promising direction for the field, and we want the community to be able to build on what we've found.`
- Each roundup item front-loads its biggest number and ends with a single short CTA.
- Event coverage front-loads day, date, and time for each session; speakers carry their roles and affiliations; the close is the practical `We look forward to seeing you there!`
