# Benchmark Chart Language

## Subtitle Patterns

Use patterns like:

- Performance on RoboEval. Higher is better.
- Average 3D ADE on PointMotionBench. Lower is better.
- Success rate on WebVoyager under the reported harness. Higher is better.
- Average cost per problem in these runs. Lower is better.

## Footnotes

Footnotes should handle:

- Source paper, leaderboard, or internal run.
- Scoring model or harness.
- Split name.
- Number of tasks, runs, or problems.
- Cost assumptions.
- Retrieval or tool-use setup.
- Non-apples-to-apples comparisons.

## Claim Scope

Use benchmark-specific language. Avoid universal claims that the chart does not support.

## Caption Convention

Captions should be full sentences that name the insight the chart supports, not labels that restate the axes. The reader should be able to read only the caption and the title and know what the chart is arguing.

Use:

- `Model A matches Model B on the held-out split at one third the measured average cost per problem.`
- `EMO keeps competitive accuracy on MMLU with roughly 12 percent of the full-model active parameter count.`
- `Across the four reasoning benchmarks, the open-weight checkpoints close most of the gap to the proprietary baseline; the gap remains on long-context retrieval.`

Avoid:

- `Benchmark results.`
- `Comparison of models on RoboEval.`
- `Cost vs. score.`

## Highlighting

Highlight the Ai2 model or focal system in Strata pink (`#f0529c`). Comparison systems use neutral teal (`#105257`), dark teal (`#0a3235`), or muted gray. One highlight per chart unless the chart is explicitly about a family of Ai2 models, in which case the family shares the highlight color and outside systems stay neutral.

In tables, the winning value in each column is bold and underlined. Do not also color it; let the typographic mark carry the emphasis.

## Pareto Frontiers

Use a Pareto frontier when the contribution is a favorable position on a tradeoff curve rather than a single-axis win. Common Ai2 pairings: accuracy vs. memory, accuracy vs. measured cost per problem, accuracy vs. active parameter count.

Draw the frontier as a thin connecting line through the dominant points. Label the focal Ai2 system clearly. State the direction explicitly: `higher score and lower cost are better`. Cost or memory axes carry units in the axis label, not in a footnote alone.
