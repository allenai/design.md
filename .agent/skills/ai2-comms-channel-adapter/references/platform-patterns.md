# Platform Patterns

## X Thread

Use five to twelve posts for a technical launch. A reliable long-form order:

1. What changed and why it matters, carrying the link to the blog or paper (see Put the primary link in the opening post).
2. The core contribution.
3. Evidence or example.
4. Caveat or scope.
5. The artifact-link block: blog, paper, repo, demo, dataset, or leaderboard.

Short announcements (re-engagement posts, extensions, smaller updates) often run a three-tweet shape: news → what it does or why it differs → proof tweet (concrete, traceable use cases) plus CTA. A dedicated proof tweet strengthens a re-engagement thread; without it the announcement reads as a notice rather than an invitation.

Avoid hook formulas that sound profound but say nothing: not just X but Y, where X meets Y, more than a benchmark, a new era, a movement.

### Put the primary link in the opening post

The opening post carries the link to the canonical destination — the blog, or the paper when no blog ships. Holding every link for the last post was a reach-protection habit: X no longer discounts a post for carrying an external link, and Bluesky never did. Post 1 is what shows in-timeline, so a reader who never opens the thread should still be able to reach the blog or paper.

This is the default, not a rule for every thread. Put the link in post 1 when the thread points at one canonical destination the reader would want. Leave it out when there is no single destination (a standalone observation, a question to the community, a recap of work already published elsewhere), when the destination is not live yet — a placeholder or staging URL in post 1 is a publication blocker, not a fill-in-later (see `ai2-comms-claims-lector` SKILL.md, Internal or staging links as public CTAs) — or when the owner has a reason to hold it.

- One link, not the block. Post 1 carries the single canonical destination; the per-artifact index still belongs in the final post. Two or three URLs in a hook make it a link post rather than an opening.
- No resource-emoji label in post 1. The URL trails the hook text; `📝 Blog:` and its siblings label lines inside the artifact block, where a column of type-markers does real work.
- Keep the 🧵 marker and the URL together at the end of the post, with the URL last.
- Repeating the same blog URL in the closing artifact block is deliberate, not a duplication error. Post 1 serves the timeline reader; the closer serves the reader who got to the end.
- Budget the link from the first draft. The hook now spends 23 characters on X and the URL's full length on Bluesky. See Character-budget mechanics.

The link is a mechanic, not a beat. It does not turn a problem-first hook into an announcement, and it does not license spending post 1 on the payoff — the reveal still belongs mid-thread (see the next subsection).

Test: reading only post 1, can the reader reach what the thread is about? If the thread's whole point is a published artifact and post 1 offers no way to it, move the link up.

Source: owner direction, 2026-07-30 — a link in the first post no longer costs reach on X, so the links-only-at-the-end convention buys nothing. Confirmed in code by the 2026-08-13 open-sourcing of X's ranking pipeline (xai-org/x-algorithm): a link open is a small positive weight (+0.2) on every surface, and no link penalty exists in ranking. The same release adds two structural reasons the payload fronts: a whole conversation collapses to one feed slot per load, and only the thread root is ever retrieved for non-followers.

### Lead high-level, hold the payoff for a mid-thread reveal

On a thread, the first post earns the read; it does not have to deliver the finding. Open at the altitude a non-specialist can follow — the stakes, or the open question the work answers — and hold the specific result for a mid-thread post once the setup is in place. Spending the hook on the full payoff leaves the rest of the thread with nothing to reveal. This is the thread analog of the blog difficulty ramp (see `.agent/skills/ai2-comms-style-source/references/house-style-patterns.md`, Difficulty Ramp For Technical Research Blogs): high-level first, mechanism and specifics later.

Test: does post 1 state the headline finding in full, or pose the question and name the comparison? If the specific result (which tokens, which direction) is already spent in post 1, move it to the reveal and leave the hook with the stakes.

Anchor: a hook drafted as `... and each turned out better at a different kind of token` (finding spent up front) was reframed to pose the open question — `do they actually process language differently? We compared Olmo 3 & Olmo Hybrid token by token` — with the meaning-vs-copying split held back for a later post.

### Conjunction rendering: & and +

On X (and Bluesky), render `and` / `plus` as `&` / `+`. The character savings matter and the symbols read as native to the platform. Long-form surfaces (blog, newsletter, LinkedIn, Hugging Face blog) keep the conjunction spelled out.

- Use on X/Bluesky: `…20 years of marine data, & social-science findings…`, `weights + training code + eval harness`.
- Spell out elsewhere: `weights and training code and the eval harness`.

Judgment exception: a heavy clause join on an opening hook can keep a spelled-out `and` when readability outweighs two saved characters. Symbols sit most naturally in list joins and tight tweets, less naturally on the opening hook.

This is a rendering of the conjunction, not its omission. Comma-only joins (asyndeton) remain disallowed on every surface. See `ai2-comms-pipeline` Rule Interactions for the conjunction-rule and &/+ relationship.

Never open a clause with `—&`. An em dash followed by `&` launching a new clause (`our footprint—& gives it room to grow`, `an official Hub leaderboard—& integrated MolmoAct 2`) is the join readers stumble on: the symbol reads as a list join, but the dash hands it a full clause. On an em-dash or other heavy clause join, spell out `and` — the same judgment exception as opening hooks — or start a new sentence; a sentence-initial `And` is fine on X.

Anchor: two drafts in one thread carried `—&` clause openers (`leaderboard—& integrated`, `footprint—& gives it room to grow`); both were flagged hard to parse, and the final post used a spelled-out sentence-initial join instead: `And when HF brought MolmoAct 2 into LeRobot, their open-source robotics library, we released the training data in LeRobot's format.`

### Compression stacks clauses on the conjunction

The character budget pushes toward the clause-stacking tell, though not through the punctuation — between two clauses a `. ` split costs two characters and a ` & ` join costs three. The cost is the subject a second sentence usually has to repeat, so compression quietly converts sentence breaks into `&` joins.

Two clause-level `&` / `and` joins in one post is the flag. The long-form rule sets that same number per sentence (`.agent/skills/ai2-comms-style-source/references/ai-prose-to-avoid.md`, And-Chained Clauses And Thin Punctuation); here the unit is the whole post, deliberately tighter, because a post runs one to three sentences and the budget is what stacked the clauses in the first place. Count joins inside sentences — a sentence-initial `And` after a full stop is the fix, not a join.

Fix: split the post, or keep the sentence break and drop a secondary specific to pay for it. When the clauses genuinely depend on each other, name the dependency (`so`, `after`, `because`) rather than flattening it to `&`.

Serial-list `&` is unaffected. `weights + training code + eval harness` is one list join, however many items it carries.

### Thread marker and functional emoji

A single 🧵 (or 👇) on the opening tweet is acceptable, standard thread-marking, and on-brand. The marker goes on tweet 1 only — mid-thread tweets and standalone posts carry none. 🧵 reads as `this is a thread`; 👇 reads as `keep reading below`. LinkedIn carries no thread marker; threads on Bluesky may use 🧵 the same way.

Ai2 uses functional emoji (📚, →, 🧵) sparingly. Avoid decorative or emotive emoji; keep emoji functional and one-at-a-time.

The end-of-thread link list is the one place a thread carries several emoji: one functional resource emoji per line, at the start of the line — `💻 Code:`, `📄 Paper:`, `📝 Blog:`, `🤗 Model:`, `📊 Leaderboard:`. Each labels a distinct artifact, so the set stays functional rather than decorative. One per line, resource-typed; do not stack two on a line, and do not add emoji to non-link lines.

Anchor: a launch thread's final post closed with `💻 Code: <repo>` / `📝 Blog: <post>` — one resource emoji per line. Count each at its real weight (most emoji are 2 on X) plus the link (23 on X) when checking the 280 budget.

### Character-budget mechanics

Verify counts before delivering a full thread, not only when a tweet looks long. Limits: X is 280, Bluesky is 300. In an X/Bluesky cross-post the limiting surface is X — size to 280 and Bluesky follows.

- Links: on X, any URL is shortened to a 23-character t.co link regardless of its real length — count it as 23, not as a literal placeholder like `[blog link]`. On Bluesky the full URL length counts toward 300.
- The opening post is now a link post too. Under the opening-post link default, budget 23 characters (X) or the full URL (Bluesky) into the hook from the first draft. A hook trimmed to fit and then handed its link is a hook that has to be trimmed twice.
- Emoji: 🧵 and most emoji count as 2 on X. Budget accordingly.
- Newlines count as characters; multi-line tweets include them in the total.

Test: substitute the real URL (or count 23 for X) and any emoji at their real weights before declaring a tweet under-budget. A draft that fits with a `[blog link]` placeholder can blow past 280 once the live URL replaces it.

Anchor: a thread's final tweet measured 180 characters of text but 203 on X with the real blog URL (text + 23). The literal `[blog link]` placeholder (191) under-counted the live post — always count the link as 23 on X.

Leave headroom while iterating. A post polished to exactly 280 cannot absorb the user's next edit — and on an actively iterated thread there is always a next edit. Prefer the trim that lands a few characters under, and when a final does land at 279–280, deliver it flagged as frozen (`279 of 280 — any added word needs an offsetting cut`) so the owner sees the budget is spent before touching it again.

Anchor: a CTA post that fit at exactly 280 was passed over for a 276 trim to preserve edit room; when its 279 successor shipped, the frozen flag went with it — and the owner's next hand-edit still pushed the post to 299, caught only because every edited post gets re-counted.

### Multi-link posts break "size to X, Bluesky follows"

The size-to-X default (X is the limiting surface, so a post that fits 280 fits Bluesky's 300) holds only while text dominates. It inverts on a post carrying several links. X shortens every URL to a 23-character t.co; Bluesky counts the full URL. So an artifact-link block with four or five real Hugging Face / arXiv URLs can sit well under 280 on X (each link counted as 23) and still blow past Bluesky's 300 (each link counted in full).

Size a multi-link post to Bluesky, not X: count the real URLs in full, and if the total exceeds 300, split the post (e.g. weights + dataset / benchmark + paper) or shorten the URLs. Text-only posts in the same thread still follow the X-limiting default.

The same inversion reaches the opening post at one link's scale. A hook sized to 280 on X — where its blog URL counts 23 — can pass 300 on Bluesky once a long allenai.org path counts in full. Count post 1 on both surfaces whenever it carries a link, and trim the Bluesky version separately rather than assuming the X count covers it.

Anchor: a four-link artifact post measured ~239 on X (text ~147 + 4×23) but the same four full URLs pushed it over 300 on Bluesky. The fix was to split the link block on Bluesky while keeping the single combined post on X.

### Re-count every edited post when smoothing pasted copy

When the user pastes a hand-revised thread and asks to smooth it, re-measure every edited post before returning it. A user edit routinely pushes a post over the limit — an added clause, a swapped word, a restored adjective — and the user cannot see the count. A post that left at 263 comes back at 292. Do not assume a hand-edited post still fits; count it with links at 23 (X) and emoji at their real weight.

Anchor: in one smoothing pass the user's pasted posts measured 292, 302, and 284 against a 280 limit — each had read fine to the user but needed a trim once counted.

### Verify a partner tag before drafting it

When the plan calls for tagging a collaborator (`tag them`), verify the partner actually has an account on the target surface before a handle goes into copy. Large research collaborations — national-lab projects, academic consortia — often have no X presence at all; their channels are a newsletter, YouTube, or GitHub. Never pattern-match a plausible handle from the project name, and never substitute a parent-org or member-lab handle without the partner's sign-off — tagging a lab that hosts the project escalates the attribution beyond what the source supports.

Fallbacks, in order: name the partner untagged; ask the partner co-authors for a preferred handle (personal or lab); coordinate with the partner's comms before tagging any institutional account.

Test: has the handle been verified against the partner's own site or a live account lookup, not inferred from the project name?

Anchor: a coupled-climate-emulator thread's `With the E3SM team (tag them)` note could not be satisfied — e3sm.org links only GitHub, docs, and DOE labs, and no official E3SM X account exists. The thread named `the E3SM team` untagged, with the handle question routed back to the co-authors.

### Artifact-link block (the final post)

A launch thread's last post is the artifact index: a compressed CTA lead, then one link per line, each prefixed by a single functional emoji that types the artifact. Order the links to mirror the CTA verbs (download → inspect → evaluate), with the paper last.

- Drop the artifact enumeration from the lead if the links name each one. Listing `the weights, the dataset, & the benchmark` in the sentence and again as line labels is the second-intro problem in miniature — lead with the action and let the labels carry the names.
- Keep the emoji functional and one-at-a-time, per the functional-emoji rule above: 🤗 weights/model, 📊 dataset, 📈 benchmark/leaderboard, 📄 paper, 💻 code, 🌐 blog. A column of type-markers is functional, not decorative.
- Mind the multi-link Bluesky budget above — this is the post most likely to bust 300 on Bluesky.
- The block keeps the blog or paper URL even though post 1 already carried it. The opening-post link default adds a link; it does not move one. Drop the repeat only when the closer is already at budget and the blog is the least useful line in it.

Worked shape — lead `Everything is fully open: download the weights, inspect the data, & evaluate your own methods.` then one line each: `🤗 Weights: [link]`, `📊 Dataset: [link]`, `📈 Benchmark: [link]`, `📄 Paper: [link]`.

Anchor: a CTA originally read `Everything is fully open: the model weights, the [dataset], & the [benchmark]. Download the weights, inspect the training data, & evaluate your own methods: [link]` — one link, artifacts named twice. Reworked to the action-lead plus a four-line emoji-labeled link block; the enumeration moved into the labels, and the single trailing link became the per-artifact set.

### Don't frame the CTA as a release when nothing new ships

A study or process post often discusses models, datasets, or tools that are already public. The CTA must not imply those artifacts are launching here — `explore the models`, an artifact-link block of model cards, or release-flavored verbs read as a launch the post is not making. Point to what the post actually adds (the report, the paper, the analysis); name the existing artifacts as references, not as the drop.

Test: does the CTA imply the reader is getting something newly released? If the only new thing is the write-up, lead the CTA with the write-up and link any prior artifacts plainly, without launch framing.

Anchor: a token-level analysis of two already-released models drafted its close as `explore the models` with 🤗 model-card links; since no model shipped, it became `Read more in our report: 📄 [link]`, with the models named in-thread but not link-blocked as a release.

### Amplify by quote post, never plain repost

X's ranking pipeline makes the quote post the only amplification format that travels. A plain repost or reply never enters non-followers' For You pools, and even to the amplifier's own followers both score at 0.75× a fresh post; a quote post counts as an original everywhere — full weight, recommendation-eligible. Coordinated amplification compounds this: any number of accounts reposting one launch post collapse to a single feed candidate, while the same accounts quote-posting are that many independent candidates.

Two requirements on the quote post itself:

- It carries at least a sentence of the amplifier's own reading, or its own visual. A bare `Big news!` quote embeds nearly identically to the original, and the feed's final rerank collapses near-duplicates to one winner per feed.
- It quotes a stable, official post. The quote post inherits the quoted account's visibility labels, and if the quoted post is deleted, the quote post loses its in-network distribution with it.

Test: does any planned amplification ask a partner or researcher to `RT`? Replace with a quote post carrying their own sentence.

Source: xai-org/x-algorithm production code, 2026-08-13 release — out-of-network repost/reply filter and 0.75× in-network rescore in `home-mixer`; repost/reply exclusion from the retrieval index in `phoenix-rankall-strato`; near-duplicate rerank in `vm-ranker`.

### Launch amplification lands in the first hours

The feed's clocks all run short: a post enters out-of-network discovery only after its first like; its community reach decays on an 8-hour half-life; every algorithmic surface drops it at 48 hours; and each follower gets one algorithmic impression of it, with no re-serve. Stage researcher and partner quote-posts for the first hours after the announcement, not across the week. Follow-up beats are new posts or quote posts of the root — a late reply added to the launch thread gets no distribution once the root has aged.

Test: does the launch plan schedule amplification beyond day one? Move it into the first hours, or attach it to a fresh post.

Source: same release — first-favorite index gate in `phoenix-rankall`, SimClusters 8-hour half-life, 48-hour `AgeFilter` and seen-posts filters in `home-mixer`.

### Link hygiene: the card is the content, the domain is the risk

URLs are stripped from a post before the feed embeds its content, so a bare link contributes nothing — the OpenGraph card (title, description, image) and the post's own text carry all the semantic signal that decides who the post can reach. Never post `New blog: [link]` bare; keep the destination's OG metadata strong; use a clean card image (a flagged card image blurs the preview and removes the post from recommendations).

The domain itself is a labeling surface: a low-quality reputation verdict on any hop of a redirect chain hides the post from all non-followers, a bad verdict hides it from everyone, and verdicts apply retroactively to every existing post linking to that domain. Link first-party (allenai.org, arxiv.org, huggingface.co); no shorteners or tracking redirects. Two specific traps: a bad link in the pinned post earns an account-wide week-long spam label, and a post that @-mentions non-followers while carrying a merely low-quality link is itself a labeling rule.

Test: is every URL in the thread a first-party domain reached with no redirect chain — including the pinned post's?

Source: same release — URL verdict rules and retroactive backfill in `botmaker-rules`; card-image labels in `visibility-filtering`; URL stripping in the multimodal post renderer in `grox`.

### Engagement-bait mechanics are labeled at any reputation

`Like/repost to enter`, tag-a-friend, follow-trains: engagement-baiting and engagement-farming are the one spam category X labels unconditionally — account credibility and verification exempt every other spam subtype, but not this one. The label hides the post from all non-followers while it still renders normally to the author, so the failure is silent. Ai2 copy never uses engagement-bait mechanics, including for giveaways or event promotion.

Source: same release — the engagement-bait carve-out in `grox`'s label sink; author-exempt recommendation drop rules in `visibility-filtering`.

### Identical copy across posts or accounts reads as copypasta

Clustering jobs label repeated post text as copypasta spam, and a separate pipeline can enforce on an entire cluster of near-identical posts at once. This extends the per-surface adaptation rule to per-account on the same surface: when several team or partner accounts post the same launch, each writes its own copy. Reusing one blurb verbatim across model-card posts or team accounts is the exact pattern the jobs cluster.

Test: would two of our posts, or two team accounts' posts, tokenize to the same text? Reword one.

Source: same release — duplicate-text cluster jobs in `botmaker-rules`; cluster-anchor enforcement in `grox`.

### Native video is the only format that outlives 48 hours

Text, image, and link posts leave every algorithmic surface at 48 hours. Native video earns 2–30-day discovery windows plus a multi-year evergreen lane — the only Ai2 X artifact with shelf life. To qualify: native upload, a standalone single-media post (mixing images into the post disqualifies the video), longer than 10 seconds, not a reply.

Test: is the demo video its own post, native, and over 10 seconds?

Source: same release — video index gates and retention windows in `phoenix-rankall`; 10-second quality-view gate in `home-mixer`.

### Account levers: follow-backs and a monthly label audit

Two standing account practices the code rewards:

- Follow the community back. Predicted replies from mutual followers carry 4× weight (20 vs 5) on original posts — the largest relationship boost in the scorer — and it applies only to accounts the org follows back.
- Audit monthly at x.com/i/under_the_hood (the report lands ~10 days after month-end). Nearly every suppression label exempts the author's own view, so browsing the account proves nothing; the report lists exactly which visibility-limiting labels landed on the month's posts. Check it after every launch month.

Source: same release — bidirectional-follow reply boost in `home-mixer`; author-exempt rules in `visibility-filtering`; report jobs in `under-the-hood`.

### Compressed-surface payoff over half-named mechanism

In social and other compressed copy, either name a technical mechanism properly or state its plain-language payoff. A phrase that half-gestures at a mechanism without naming it becomes abstraction without a referent — the reader cannot tell what is meant.

Test: would a non-specialist know what the phrase points to? If it gestures at an unnamed mechanism, replace it with the payoff (on social) or name the construct properly (in the technical blog or paper). This is not a conflict with the source-fidelity rule for named constructs; it is a surface-driven default. See `ai2-comms-pipeline` Rule Interactions.

Worked shape:

- Avoid: `surfacing the findings that most change what it expected` (gestures at a mechanism without naming it).
- Prefer: `surfacing the most surprising results — the ones most likely to be genuine discoveries` (states the payoff in plain language, traceable to the same source rationale).

Anchor: a paper-search feature drafted as `paper search that checks its own work` → flagged vague (a verb phrase gesturing at self-checking without naming the mechanism) → `paper search that evaluates its own results & searches again when they fall short`, taken verbatim from the source email's own summary line.

### Third failure mode: jargon with no referent

There is a third failure beyond `half-gesture` and `name it properly`: naming a mechanism so precisely that it becomes jargon with no referent for a general reader. When a reader calls a compressed item `vague`, the cause is often missing context, not insufficient precision — and the fix is a plainer altitude or a dedicated setup beat, not a more technical term.

Test: would a non-specialist need a sentence of background to parse this term? Then either state it at plain altitude (accepting mild vagueness as the feature) or cut it and give it its own beat. A mechanism that needs a sentence of setup cannot be compressed into a single list item. Do not respond to `vague` feedback by escalating jargon.

Anchor: a thread item cycled through `scored its candidate answers during training` → `training candidates` → `responses during RL` — each more precise and each more jargony, because the RL-grading concept has no setup in the thread. Resolutions: plain altitude (`the models used to judge its outputs during training`) or cut from the list and give the concept its own beat later (`It even catches models grading the very systems they helped train`).

### Fourth failure mode: abstract verb with no concrete action

On compressed surfaces an abstract verb (`trace`, `leverage`, `address`, `enable`) can read as vague — not because it is too technical, but because it does not name an action the reader can picture or do. Prefer a concrete verb that names the action: `inspect`, `audit`, `rerun`, `download`, `read`.

Test: does the verb name a concrete action the reader could picture? If it gestures abstractly, replace it with the action. This is the inverse of jargon-with-no-referent (over-precision) — here the fix is more concreteness, not less.

On verb rejection, offer three or four options with brief reasoning rather than guessing a single replacement (see `ai2-comms-pipeline` Process Discipline, Offer Multiple Options On Word-Choice Rejection).

Anchor: `models companies can trace & approve` → `trace` flagged as vague → options offered (`audit`, `vet`, `inspect`, `verify`) → landed on `models companies can fully inspect`. `audit` was the first pick because it echoed `auditability` elsewhere in the thread; `fully inspect` won on the editor's ear.

### Elliptical shorthand: name what the phrase is short for

A truncated technical phrase reads fine to the writer, who completes it from the source, and dangles for the reader, who cannot. `Running the full physics` (of what?), `400 independent years` (independent how?), a versioned acronym with no appositive (`E3SMv3` — what is this?). Each is shorthand whose completing noun lives only in the source. Reader-side question marks in review (`of what?`, `independent how?`) are the reliable tell.

Fix: name the completion — often more concrete and no longer than the abstraction. `before running the full physics` → `before running E3SM itself`; `400 independent years of E3SM data` → `400 years of E3SM data the emulator never trained on`; a versioned acronym gets a first-use appositive (`E3SMv3, the Earth system model it learns from`). This is the compressed-surface case of `.agent/skills/ai2-comms-style-source/references/voice-and-prose.md` (Name The Referent).

Anchor: a climate-emulator thread drew four such queries in one owner pass — `the full physics (of what?)`, `independent (independent how?)`, `E3SMv3 (what is this)`, `average climate (as in, outputs or?)` — each resolved by naming the completing noun in-post, not by defining the term more technically.

### Teaching a mechanism across a thread: gloss at first use

The failure modes above are about avoiding jargon. A technical-update thread sometimes has the opposite job — to explain a mechanism. When it does, gloss each term the first time it appears and keep one concept per tweet; an unglossed term reads as jargon even to a technical reader skimming a timeline.

- Gloss at first use: `tiles (patches)`, `an embedding, a numerical representation`. Plain word then the term in parentheses, or the term then a comma-gloss.
- One concept per tweet: split `what it is` (patches → embeddings) from `the problem` (a position signal that left artifacts) from `the fix` (rotation), rather than stacking all three.
- One word per concept: once `embedding` is glossed, reuse it; do not alternate `embedding` / `representation` / `features` for the same thing across tweets.

Test: does every term get its plain-language gloss the first time the thread uses it, and is each concept named with one consistent word throughout?

Anchor: a RoPE-update thread glossed `tiles (patches)` and `an embedding, a numerical representation` at first use, gave the position-signal artifact its own tweet, and reused `embeddings` rather than rotating synonyms so the fix tweet landed.

### Concrete uses over abstract capability nouns

On social, a list of capability nouns (`scene classification, segmentation, & change detection`) reads more legibly as concrete uses (`track deforestation across the Amazon, map crops in Kenya, monitor mangrove loss`). The concrete version shows what the capability is for; the abstract version asks the reader to translate. Lead with, or add, the concrete uses on social surfaces.

Test: would a non-specialist picture what the capability does from this line? If it is a list of task-category nouns, swap in or add the real-world uses.

Anchor: a background tweet paired both — the task categories in one sentence, then `It's already helping track deforestation across the Amazon, map crops in Kenya, monitor mangrove loss, & estimate wildfire fuel moisture` — with the concrete uses doing the legibility work.

### Frame a removed limit as the gained capability

When the source states a lifted restriction (`no longer subject to rate limits`, `the cap is gone`, `no longer requires X`), compressed copy should state what the reader gains, not what was removed — `no longer rate-limited` reads as a reminder of the old problem. State the payoff (`downloads now run at high speed`) and let the long surface carry the mechanism; dropping the mechanism entirely is fair compression when the blog states it.

Two guardrails:

- The payoff stays at or below the source's own ceiling. `Download at full throughput` supports `full speed` / `top speed` / `high speed`; it does not support `instantly` or an invented number. A positive reframe is a favorable-framing move — re-diff it against the source (see `ai2-comms-claims-lector` SKILL.md, Favorable-framing re-diff).
- Offer the intensity ladder, not one option. Owners often want a notch below the maximum the source licenses: `faster` < `high speed` < `top speed` / `full speed` (= the source's `full throughput`). When a first pick is rejected and then its synonym is too, the request is usually for a softer register, not a different fact.

Test: does the line name what the reader gets, or what stopped happening to them? And is the stated gain within what the source claims?

Anchor: `our traffic is no longer rate-limited, so even our largest datasets & multi-checkpoint models download at full speed` was flagged (`this sounds negative, we want to position it as improving`) → `our downloads now run at high speed—even for our largest datasets & multi-checkpoint models`, with `full speed` and `top speed` each rejected before `high speed` landed.

### Graph-theory vocabulary is jargon on general surfaces

`Node`, `edge`, `vertex`, `graph traversal` are jargon on general social surfaces. Describe the graph's contents in plain terms, not its structure.

Test: would a general reader know what `each node` or `each edge` refers to without a graph-theory background? If not, rewrite as contents.

Anchor: `Each node is a model or dataset; each edge shows how one shaped another` → `the datasets a model trained on, and every model used to generate or filter that data`.

### Keep the subject chain resolvable within a post

Two adjacent sentences in one post that switch subjects without a bridge read as broken — `They'll get into [topics]. Then meet the people who do it` jumps from third person to a bare imperative with nothing introducing the reader. And a verbless fragment is not a sentence even at thread compression (`Then time to meet the people who do it`). Fixes, in rough order of preference: resolve the chain backward with a pronoun (`Afterward, you can chat with the team` — `the team` picks up `they`), keep one subject throughout, or recast around the event or artifact noun (`the panel covers X; then it's networking with the people who do it` — which also lets a `they`-blocked phrase back in).

Test: read the post's sentences in sequence — does each subject either continue the previous one or get introduced? A bare imperative directly after a third-person subject fails the read.

Anchor: `They'll get into [topics]. Then meet the people who do it.` was rejected (`they'll, then you?`); it landed as `Afterward, you can chat with the team about whatever you're building.` — `you` enters properly and `the team` resolves the prior `they`.

### Grammar and linguistics vocabulary is jargon on general surfaces

`pronoun`, `antecedent`, `referent`, `entity`, `attribute`, `delimiter`, `token type` are linguistics jargon on general social surfaces. Name the thing in plain words, and prefer a concrete example over an abstract category — the example carries the meaning the category name only points at.

Test: would a general reader picture what `which entity has which trait` or `which a pronoun refers to` means without a parse? If it names a grammatical category, rewrite as the plain idea, and quote the actual word where it helps (`who "she" or "they" points back to`, not `pronoun resolution`).

When a reader calls one of these phrases `vague`, the fix is a plainer altitude or a concrete example, not a more precise linguistics term — escalating the jargon makes it worse. See Third Failure Mode above.

Anchor: `the hybrid keeps track of who a pronoun refers to & which entity has which trait` → `the hybrid keeps track of who's who. Long after a name first appears, it still knows who "she" or "they" points back to, and it doesn't mix up which of two characters did what`. The grammatical categories (`pronoun`, `entity`, `attribute`) become the plain idea plus a quoted example.

## Image–Claim Correspondence

When a visual accompanies a post making a specific claim, the visual must depict that claim's subject.

Test: name the claim's subject. Does the image show that subject specifically? If the post is about one system's numbers and the image shows a different system's graph, the image is wrong.

Anchor: a thread tweet about one model's verified-dependency counts paired with a screenshot from a different model's graph view — the image must match the tweet's subject; pull the matching view.

## LinkedIn

Use a polished but grounded register. Pseudo-bold Unicode may be used for emphasis when requested. Do not turn benchmark results into broad superiority claims.

Polished does not mean abstract. Prefer "researchers can inspect the harness and rerun the tasks" over "a meaningful step toward trustworthy AI."

## Bluesky

Single post or short thread. The conjunction rendering rule from the X section applies (`&` / `+` for character savings). Thread markers (🧵, 👇) are acceptable on the opening post of a Bluesky thread the same way as on X. Spell out conjunctions only on opening hooks where readability matters more than two saved characters.

The compressed-payoff rule applies: either name the mechanism or state the payoff; do not half-gesture.

The opening-post link default carries over from X: the first post links to the blog or paper whenever the thread has one canonical destination. Bluesky never discounted a post for an outbound link, so the only thing to weigh here is the budget.

Character budget: Bluesky is 300 (vs. 280 on X). In an X/Bluesky cross-post, size to X's 280 and Bluesky follows — but note that on Bluesky the full URL length counts toward 300, while on X any URL is a 23-character t.co. That gap now lands on the opening post as well as the artifact block; count post 1 against 300 with the real URL. See the Character-Budget Mechanics subsection under X Thread for the full counting rules.

## Reddit And Discord

Use less polished copy. Lead with what the community can inspect, reproduce, or challenge. Invite questions that researchers or PMs can answer.

Do not sanitize every edge into launch copy. Keep caveats, limitations, and concrete examples visible.

## Hugging Face Blog

Hugging Face renders posts from Markdown. Keep the formatting clean and standard — the platform supports a defined syntax set, and nothing more exotic renders reliably.

### Supported syntax

Use only what the platform documents:

- Headers `#` through `######` (H1 to H6).
- Emphasis: `*italics*` or `_italics_`; `**bold**`.
- Links: `[text](https://…)`.
- Unordered lists with `*` or `-`; ordered lists with `1.`, `2.`, ….
- Blockquotes with `>`.
- Inline code with single backticks; fenced code blocks with triple backticks.
- Tables only when the data needs them.

### Start with the H1 — it becomes the title

The post must open with a single `#` header on the first line; Hugging Face lifts it as the article title. Do not put a byline, date, or image above it — anything before the H1 breaks title detection, and the platform stamps its own author and publication date. If the source carried a date worth keeping, add it as a line under the H1, never above.

### Math with LaTeX

Only when the technical argument needs it. Inline uses escaped parentheses — `\(a = b + c\)`; displayed equations use `$$…$$` on their own lines. A post with no equations needs no LaTeX.

### Converting a published Ai2 blog to a Hugging Face post

Porting an already-published allenai.org post (or its saved HTML) to Hugging Face is extraction, not rewriting. The approved copy is frozen; carry the text verbatim.

- Take the article body only. Drop site chrome: nav, the "Join us"/careers block, the newsletter-subscribe footer, related-post cards.
- Preserve every word, number, and dash exactly. This is a format conversion — running the text back through the writer or re-smoothing the prose re-opens settled copy.
- Collapse responsive image variants. A saved page stores each figure several times (a blur-up data URI, a local copy, the hosted URL). Keep one canonical hosted URL per figure. Hugging Face renders `![alt](https://…)`; external URLs work, but uploading the figures into the blog repo is the more durable option — flag it and let the owner choose.
- Give every figure real alt text, and keep any figcaption as an italic line under the image.
- Do not invent inline links. If the source body had none, add none — adding links editorializes past a conversion.

Test: does the post start with a single `#` line? Is the body text identical to the published source (a character-stream diff is the surest check)? Does each figure resolve to one hosted URL with alt text?

Flag, do not fix: when the frozen text disagrees with a figure — the North America run reads `roughly 19,600 CPUs and 994 GPUs` in the prose while the stat-grid graphic shows 19,592 CPUs and 987 GPUs — surface the mismatch for the owner. A conversion never silently reconciles the copy to the artwork or the reverse.

## Newsletter

A newsletter bundles a lead story, a news roundup of three to five items, and optional event coverage. It is not a cross-post of any single blog; it is its own surface with its own rhythm.

- Lead story: compressed launch blog, full canonical arc in one to two paragraphs per phase, headline in `Introducing [Product]—[quantified benefit]` form, closing position in the canonical `We think [X] represents a promising direction for the field, and we want the community to be able to build on what we've found.` form.
- News roundup: two to three sentences per item, bold project name, the biggest concrete number, one CTA (`Try it now` or `Read more`).
- Event coverage: practical specifics (day, date, time, speakers, partners, booth numbers), closing with `We look forward to seeing you there!`.

For the full rules, use `.agent/skills/ai2-comms-style-source/references/newsletter-format.md`. Do not improvise the format from the launch-blog pattern alone — newsletters have distinct headline, paragraph, and roundup-item discipline.

## Conference / Event Promotion

X and Bluesky share one short-post format for conference and event promotion. Default to a single post on each surface, not a thread. Promote to a short thread only when there is enough to stage — multiple talks, a daily schedule, named papers worth linking, or a booth plus demos plus a marquee panel.

Template:

`We're at [#ConferenceYear] with [what we have there — papers & talks / a booth / demos] across the conference. [CTA — come say hello, find us at booth N, catch the talk].`

Anchor: `We're at #ICLR2026 with papers & talks across the conference. Come say hello and learn about our latest research!`

Conventions:

- One conference hashtag (`#ConferenceYear`), placed naturally. No hashtag stacking.
- Conjunctions: apply the `&` / `+` list-join rule from the X Thread section on list joins inside `what we have there` (`papers & talks`, `talks + a booth + demos`). Keep the readability exception for CTA clause joins (`say hello and learn`, not `say hello & learn`) — clause joins in a CTA prioritize readability over character savings, matching the existing X Thread judgment exception for opening hooks. The anchor follows exactly this split: list-join `papers & talks`, clause-join `say hello and learn`. Treat the template's literal `and` in the CTA slot as preserved on fill-in; do not mechanically convert.
- Functional emoji sparingly per the existing rule; a conference promo usually needs none. No 🧵 unless it really is a thread.
- CTA names a concrete action at the event (`come say hello`, `find us at booth N`, `catch the talk on day X`), not a generic `learn more`.
- Size to X's 280; Bluesky follows. Count links and paper handles per the existing Character-Budget Mechanics subsection.
- Voice consistent with the newsletter Event-Coverage convention (day, date, time, speakers, partners, booth) when those specifics exist, compressed for the social surface. See `.agent/skills/ai2-comms-style-source/references/newsletter-format.md` for the long-form event coverage this compresses.

The two opening words (`We're at`) carry the institutional first-person plural; the CTA carries the warm directive. Do not lead with the hashtag.

### Hosted-event RSVP thread (our event, registration funnel)

The single-post format above covers presence at someone else's event. An event Ai2 hosts with an RSVP link gets a short thread (3–4 posts) — see `.agent/skills/ai2-comms-style-source/references/release-types.md` (Type 16) for the framing rules:

1. Hook + context + date: the substantive question the event answers (not `join us`), the umbrella program once (`During #SeattleTechWeek`), and the date. 🧵 per the thread-marker rule. The RSVP link is this thread's canonical destination, so post 1 carries it under the opening-post link default — budget it against 280 (X) and the real URL against 300 (Bluesky).
2. Substance: the topic list from the approved event copy (`&`/`+` list joins), then what the attendee gets (`Afterward, you can chat with the team about whatever you're building`).
3. Optional audience post — the first cut when compressing.
4. CTA closer, self-sufficient: time + venue + cost + RSVP link (`Join us 3–4 p.m. at Ai2's Northlake office. It's free—RSVP to save your spot ↓ [link]`). Once the date moves to post 1, do not repeat it here. The RSVP link does repeat — the closer stays self-sufficient for a reader who arrives at the end of the thread.

The sponsor credit stays scoped to the umbrella program (see `.agent/skills/ai2-comms-style-source/references/source-fidelity.md`, Sponsor And Umbrella-Program Credit Scope), and RSVP mechanics compress without contradicting the organizer's terms. On the long single-post surfaces (LinkedIn, Reddit, Discord), the logistics land as an emoji-labeled block, one per line — 📅 date, 🕒 time, 📍 venue, 🔗 RSVP — the event analog of the artifact-link block.

Anchor: a Seattle Tech Week panel thread landed at three posts — hook + `#SeattleTechWeek` + `Thursday, July 30` in post 1; the training-runs-to-release topic list plus the chat-with-the-team beat in post 2; the time-venue-free-RSVP closer as post 3. The audience post was the cut.

### Reworking a sibling surface from locked copy

When the user locks one surface's copy (a final thread) and asks to rework a sibling surface `based on` it, the locked copy becomes the voice source: carry its hook, its key phrases, and its cuts. Distinguish two kinds of cut when deciding what the longer surface keeps:

- Deliberate content cuts — the user struck a detail from the locked copy (an RSVP condition, a qualifier): mirror the cut on the sibling surface, and flag it if accuracy or a gate is at stake.
- Budget-forced cuts — a beat that fell out of the thread for character reasons (an audience line): the longer surface may restore it; it was never rejected, only squeezed out.

Test: would the cut have survived if the surface had room? If yes, it is budget-forced and can return on the long surface; if no, mirror it.

Anchor: a locked event thread cut `subject to host approval` (deliberate — mirrored in the LinkedIn/Reddit/Discord post, with a flag) but had lost its audience line to compression (budget-forced — restored on the long surface, where the user's original announcement copy also carried it).

## Blog To Cross-Post Mapping

A blog post moving to other channels should compress, not rewrite, the canonical arc (problem/context → announcement → technical → evaluation → artifacts). Preserve the opening form. Aim for the same claim scope at each surface.

- X thread (5–12 posts): problem hook carrying the blog link, announcement, one core technical detail, one concrete result with scope, caveat, artifact-link block. Benchmark digits stay out unless the user asks.
- LinkedIn (1 post): announcement plus stakes (why it matters and to whom), one or two concrete artifact references, link to the blog. Polished but not abstract.
- Bluesky (1–3 posts): announcement plus one concrete detail and the artifact link, with the blog link in the first post as on X. Less threaded than X unless the topic genuinely needs steps.
- Reddit and Discord: open with what the community can inspect, reproduce, or challenge. Leave caveats and limitations visible. Invite questions a researcher can answer.
- Hugging Face blog: carries the full arc when the post is technical and the audience expects depth. Headings stay sentence case and descriptive (per `.agent/skills/ai2-comms-style-source/references/house-style-patterns.md`).
- Newsletter: lead story compresses the canonical arc into one to two paragraphs per phase; the launch becomes a single newsletter item, not the whole newsletter. See `.agent/skills/ai2-comms-style-source/references/newsletter-format.md`.

If the source blog used the problem-first opening, the X hook should also lead with the problem. If announcement-first, the hook should name the release. Do not silently change the form across channels. The one structural exception is the newsletter lead-story headline, which is always announcement-first with an em-dash quantified benefit regardless of the source blog's opening form.

A second, narrower deviation applies to X and Bluesky: the first post is what shows in-timeline, so naming the release in the opening post is usually worth a light announcement-lean even when the blog opens problem-first. Keep the problem as the first line, then name the product in the same post (`[problem sentence]. We're releasing X, a workbench for ...`). This is a deliberate, owner-approved choice, not a silent reframe — the problem still leads the post; the product just becomes visible without a scroll. Move a supporting reference (e.g., the standard or prior work the release builds on) to post 2 if the opening post gets crowded.

## Introduce The Umbrella Product And Each Named Tool For A Broad Audience

Copy written for a product's existing users names the umbrella product and its component tools without glossing them — the readers already know what they are. Moving that copy to a GA or broad-audience surface widens the reader base past those users, and every unglossed name becomes an unexplained term. Add a one-line gloss for the umbrella product and for each named component tool it references. Source each gloss from the product's own page, not from memory — the sibling-product sourcing rule (`.agent/skills/ai2-comms-claims-lector/references/claim-review-patterns.md`, Sibling-Product Description From Memory) applied to a product's own family, where scope drifts between suite, agent, and feature just as it does between model and platform.

Test: would a reader outside the product's existing user base know what the umbrella product and each named tool are from the copy alone? Is each gloss traceable to the product's own page rather than written from memory?

Anchor: an insider draft named `Asta`, `Find papers`, `AutoDiscovery`, and `DataVoyager` with no glosses. On the request to introduce the product and each tool, the broad-audience version added a gloss per name — Asta as the ecosystem of AI agents for science, Find papers as its literature search, AutoDiscovery as the tool that explores your datasets and surfaces hypotheses worth investigating, DataVoyager as its agent for data-driven discovery and analysis — each verified against the product's own pages (allenai.org/blog/asta, /asta-datavoyager, /autodiscovery) rather than written from memory.

## Combining And Compressing Without Silent Loss

When combining tweets or compressing a beat, preserve the load-bearing contrast or claim, drop secondary specifics, and flag what was cut so the editor can restore it. Silent loss is the failure mode — every compression cut should be visible.

Test: after a combine, is the distinguishing point still present? Did any approval-relevant or fidelity-relevant detail get dropped silently? If yes, surface the cut with the cleared draft.

Anchors:

- Combining two case-study tweets kept the load-bearing contrast — one adopter fine-tuned the models, the other built on the datasets from its own base — while dropping product use cases (RAG, document processing) and sizes (1B/7B/32B). Each cut was flagged, not silent.
- Replacing two `why openness mattered` tweets with a single line dropped the relicensing and procurement-clearance payoffs — the concrete mechanism behind why regulated buyers care. That was flagged as a thesis-relevant loss, with an offer to restore it.
- Combining two adjacent thread posts (~520 characters) into one ≤280 post is compression, not concatenation: keep each beat's load-bearing claim, drop secondary specifics, and flag the cuts. When a dropped specific is a comparison's referent, rephrasing the comparison as a plain capability (`steer the model toward the requested motion`) cleanly sheds it — but flag that the comparison framing is gone. See `.agent/skills/ai2-comms-style-source/references/claims-and-benchmarks.md` (Compressed Comparatives: Referent Or Rephrase).

See `ai2-comms-pipeline` Process Discipline (Offer Multiple Options On Word-Choice Rejection) for the matching pattern on word-level edits.

## Combined Partner Actions: Flow And Attribution

Compressing two organizations' linked actions into one post has two failure modes beyond silent content loss:

- Attribution transfer: hanging the second org's action off the first org's verb as a prepositional phrase erases the actor. `They brought MolmoAct 2 into LeRobot … with our training data in LeRobot's format` makes the partner appear to have shipped the data too, when the source says we released it. A possessive (`our`) does not carry an action; a verb does — each org keeps its own verb through the combine. Claims-side companion: `.agent/skills/ai2-comms-claims-lector/references/claim-review-patterns.md` (Multi-Org Attribution Blend, combine extension).
- Staccato flow: grammatically complete but clipped sentences standing next to each other read stilted at thread compression — and the editor's fix request is flow, not more cuts. When the two actions are causally or temporally linked, a subordinate join carries both actors in one motion: `And when they brought MolmoAct 2 into LeRobot, their open-source robotics library, we released the training data in LeRobot's format` — each party keeps its verb, and the join is truer to how the exchange happened.

Test: after a combine, does each organization still own its action's verb? And do the sentences read as one motion or as fragments beside each other?

Anchor: `They brought MolmoAct 2 into LeRobot, their open-source robotics library. We released the training data in LeRobot's format.` — attribution correct but flagged (`we don't need too stilted with this … make tweet flow better`) → the when-clause join above, which fixed both at once.

## Cross-Surface Density Matrix

Surfaces differ in how much technical claim density they can carry, how many named competitors they name, and how much mechanism explanation belongs.

| Surface | Benchmark numbers | Named competitors | Technical mechanism | Word count target |
|---------|-------------------|-------------------|---------------------|-------------------|
| Technical blog | All | All | All | 2,000–4,000 |
| Hugging Face blog | Most | Most | Most | 1,500–3,000 |
| Newsletter lead | Few (anchor stats only) | One or two most recognizable | None | 300–400 |
| Newsletter roundup item | None or one anchor | None | None | 50–65 |
| X thread | Few (lead post anchor) | Optional | None | 12–15 tweets |
| Reddit (r/LocalLLaMA) | All (audience appreciates) | All | Most | 200–500 |
| Discord post | Few | Optional | None | 100–300 |
| Bluesky | Few | Optional | None | Single post or short thread |

When adapting, the source claim does not change; the density does. A blog claim with absolute + delta + scope + caveats compresses on X to absolute + scope only; on newsletter lead to absolute + delta + scope (the `That means ...` translation may carry the caveat).

## Voice Variation By Surface

The same source claim takes different voice registers across surfaces.

- Technical blog: `we` plus active voice; technical register; full hedges (`we expect`, `preliminary results suggest`).
- Newsletter: `we` plus active voice; wide-audience register; lighter hedges (`we think`, `early signs show`).
- Social (X, Bluesky, LinkedIn): `we` or implicit; tight register; minimal hedges (`X outperforms Y` with link to evidence).
- Reddit and Discord: looser register; technical candor; minimal marketing tone.

The `we` is consistent across surfaces; what changes is hedge density, sentence length, and technical depth.

## Surface-Specific Approval Gates

Approval is not a single gate. Content approved for the blog may not be approved for social or external surfaces.

- Named partner deployments: blog approval does not transfer automatically to social. Re-check.
- Specific dollar figures: blog OK by default; social may require additional clearance.
- Individual non-Ai2 developers: default-omit across all surfaces (see `.agent/skills/ai2-comms-style-source/references/approval-gates.md`).
- Adoption claims (`X is being used by Y`): re-confirm approval status when adapting from blog to social.

Surface adaptation is not just compression. It is also re-applying the approval gates appropriate to the broader reach of the new surface. Ask before broadcasting blog claims to external channels.

## Compression From Blog To Each Surface

Compression ratios from a 2,000–4,000 word blog source:

- Newsletter lead: ~85–90% (300–400 words).
- Newsletter roundup item: ~98% (50–65 words).
- X thread: ~90% across all tweets combined.
- LinkedIn single post: ~95% (one paragraph).
- Reddit post: ~80% (200–500 words).
- Bluesky single post: ~98%.

These ratios are reference points. The actual compression depends on what the source carries that the surface can support, not on a fixed percentage. Use the cross-surface density matrix above to decide what stays.
