# Writer Examples

## Opening Form Examples

Three named opening forms cover almost all recent Ai2 launch posts. Match the form to the contribution. Distilled templates:

Problem-first (most common):

- `Existing instruction-following benchmarks measure single-step prompts. Real agents run multi-step workflows where later steps conflict with earlier ones. Ai2 released IFBench to measure that gap.`

Announcement-first:

- `Ai2 released IFBench, a benchmark that tests whether agents keep following instructions after the easy part of a task is over.`

Context-plus-stakes:

- `Open-weight post-training has stalled on instruction-following over long chains. Ai2 released IFBench so researchers can measure where chains break and rerun the harness.`

For the selection rule and longer discussion, see `.agent/skills/ai2-comms-style-source/references/house-style-patterns.md`.

## Newsletter Opening Examples

Newsletter lead stories use announcement-first with an em-dash quantified benefit in both the headline and the first sentence. Distilled templates:

Headline:

- `Introducing IFBench—measuring whether agents stay on instructions through long chains`

Opening sentence:

- `Today we're releasing IFBench, a new benchmark for measuring whether agents keep following instructions after the easy part of a task is over—and the results show open-weight post-training has more headroom than the prior benchmarks suggested.`

Lead paragraph (first body, with the strongest result + practical translation):

- `On our held-out evaluation, IFBench scores correlate with downstream multi-step agent success at +0.7, compared with +0.3 for the prior generation of instruction benchmarks—delivering a far sharper signal for post-training research. That means teams can use IFBench to iterate on long-chain instruction following without first running expensive end-to-end agent evaluations.`

For full newsletter format rules, see `.agent/skills/ai2-comms-style-source/references/newsletter-format.md`; for the genre shape, `.agent/skills/ai2-comms-style-source/references/worked-shapes.md`.

## Intro Pattern

Weak: This post introduces an exciting new benchmark for AI agents.

Stronger: Ai2 released IFBench, a benchmark for measuring whether agents can keep following instructions after the easy part of a task is over.

## Source-Faithful Revision Note

Use notes like this when a revision changes substance:

- Flag: Changed "outperforms open models" to "scores higher than the compared open-weight baselines in these runs" because the source only supports the listed comparison set.

## Benchmark-Safe Framing

Use:

- Under this harness, Model A scored 72.4 on the held-out split.
- In these runs, Model A was within 5.1 points of Model B at less than half the measured average cost.

Avoid:

- Model A is the best agent.
- Model A is cheaper and better across the board.

## AI-Smooth Revision

Weak: This release is more than a benchmark; it is a meaningful step toward trustworthy AI experiences.

Stronger: Ai2 released IFBench to test whether agents keep following instructions after the first subtask, including cases where later steps conflict with earlier habits.

Weak: Where open science meets real-world impact.

Stronger: The benchmark is open, so researchers can inspect the tasks, rerun the harness, and compare failure modes directly.

## Workshop Slop Revision

Weak: This result sits in the liminal space between automation and trust.

Stronger: In these runs, the agent kept the instruction active across later subtasks that were designed to distract it.

Weak: The model forgets in the only way a model can: by becoming slightly less itself.

Stronger: The updated model produced different answers on the same sampled prompts; include the before/after examples before describing the change.

## Idea Narrowing Revision

Weak: This research opens a bold new conversation about creativity, intelligence, and what it means for AI to help us think.

Stronger: Start from the source-backed premise: what changed, which setup showed it, and which claim the evidence does not support.

Weak: Let's brainstorm around "AI as collaborator" and make the piece more expansive.

Stronger: Write three source-backed angles before using AI for copyediting. Keep the angle with the most specific evidence, even if it is less familiar.
