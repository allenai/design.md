# Sunset Example — SciArena

A worked example of a Type 15 release (application/demo sunset with a learnings recap). Use it as a concrete shape reference, not a template to fill in; `references/worked-shapes.md` describes the other genres the same way. Source: the SciArena interactive model-evaluation arena, retired July 15, 2026; this block was prepended to the original launch post (`allenai.org/blog/sciarena`), which the live URL redirects to.

Release type: Type 15 (application/demo sunset + learnings recap). See `references/release-types.md`.

Moves it demonstrates:
- Update block prepended above the untouched original post; a dated retirement notice, then a `What we learned` recap. The original body is left as-is (an `Original post follows.` divider marks it historical), so no live-tense lines had to be re-tensed.
- Notice states the five things a retirement notice needs: what is retiring, the date, where the URL will point, which artifacts remain, and a thanks. (A past-tense variant swaps in after the date.)
- Mechanic before metric: the head-to-head blind-vote flow is explained before the `3,919 votes` count, so the number has meaning. The full choice set is preserved (better / tie / both insufficient), not silently collapsed to one alternative.
- Public-run participation scoped as such (`By July 15, 1,693 users had cast …`) so it does not read as contradicting the original body's internal-study count.
- Leads with the durable finding (what researchers valued) and treats the perishable leaderboard result (which model won) as secondary — the winner is already in the body and the screenshot.
- Competitor standings reported with exact checkpoint labels and neutral maker attribution (`Google's Gemini 3 Pro Preview`, `OpenAI's own GPT-5`); `like`/`such as`/`plus` signal a non-exhaustive list; no editorialized closed-model framing.
- Analysis percentages explained without inventing the denominator (`how frequently that reason came up in researchers' explanations … the numbers don't add up to 100%`) — phrased to be true whether the source counted comments once each or counted mentions; the exact method was flagged for the analysis owner.
- Limitations surfaced as ranked findings inline (factual accuracy 5.0%, recency 4.8%), not quarantined.
- Forward close scoped to what the data supports (`what researchers reward`, `signals worth taking`), not a claim about where models rank weakest.

Open items this example carried (typical of the type): the paper PDF was hosted on the retiring domain, so `remains available` was a pre-publish blocker until re-hosted; and the rationale-category denominator needed confirmation from the analysis owner.

---

**Update 7/15: SciArena sunsetting—and learnings**

The interactive SciArena demo is being retired on July 15, 2026. This post will remain online as the record of the project, and sciarena.allen.ai will point here once the demo goes offline. The paper, code, and dataset remain available below—thanks to everyone who submitted questions and voted while the platform was live.

## What we learned

SciArena was built to help study how well today's foundation models handle real scientific-literature tasks—like answering an open research question with a cited synthesis of the relevant literature—as judged by the researchers who do that work. For each question, the platform showed two models' answers side by side with their names concealed, and a researcher chose the better answer, called it a tie, or judged both to be insufficient. They could add a comment, and the models were revealed only after the vote.

By July 15, 1,693 users had cast 3,919 votes and left 985 written explanations of why they voted as they did. Every vote fed into the SciArena leaderboard.

Notably, OpenAI's o3 topped the final leaderboard, ahead of flagship systems like Anthropic's Claude Opus 4.1, Google's Gemini 3 Pro Preview, and OpenAI's own GPT-5, plus open-weights models such as DeepSeek-R1 and Qwen3—the same top spot o3 held in our June 2025 SciArena technical report. Users found o3's answers more detailed and more to the point than the alternatives.

Perhaps the most useful finding, though, was what researchers valued when they chose one model's answer over another's: citation quality came up in the comments more often than any other single factor. Grouped by theme, here are the top reasons researchers gave for their model preferences (each percentage is how frequently that reason came up in researchers' explanations; less common reasons aren't shown, so the numbers don't add up to 100%):

- **Citation and reference quality (23.4%)**—whether the papers a model cites actually exist, address the question being asked, point to original research rather than secondhand summaries, and can be looked up and verified.
- **Completeness and depth (19.1%)**—broader coverage, deeper explanation of mechanisms, and more technical specificity.
- **Directly answering the question (16.3%)**—an answer to the specific question asked, not a generic overview of the literature.
- **Structure and readability (13.2%)**—clear organization, synthesis, and flow.
- **Factual accuracy (5.0%)**—cases where a model invented references, made wrong claims, or misattributed work.
- **Recency (4.8%)**—a preference for newer work, often from 2023–2025, over older references.

The through-line is that in scientific literature tasks, fluent prose is not enough. Researchers reward answers they can trace and verify, and they notice when a model hallucinates a reference or leans on outdated work.

We believe that for anyone building models to work with scientific literature, these are signals worth taking from SciArena.
