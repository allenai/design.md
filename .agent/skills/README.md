# Agent skills

Portable, agent-agnostic **skills** for this repository — reusable task
instructions that any coding agent (Claude, Cursor, Copilot, Gemini, or
homegrown tooling) can discover and follow.

Skills here are intentionally *not* stored under `.claude/`, `.cursor/`, or any
vendor-specific location, and they never name a specific agent's tools. They
follow the same philosophy as this repo's `DESIGN.md` files: self-contained,
plain-text, and readable by any tool that cares to look.

> This folder is currently a scaffold. No skills are defined yet — add them
> following the convention below.

## Layout

Each skill is a directory containing a `SKILL.md`, plus any supporting files it
needs (scripts, templates, reference docs):

```
.agent/skills/
  README.md                  ← this file (the convention)
  <skill-name>/
    SKILL.md                 ← required: frontmatter + instructions
    ...                      ← optional supporting files, referenced by SKILL.md
```

- The directory name **is** the skill name: lowercase `kebab-case`, matching the
  `name` field in the frontmatter.
- One skill per directory. Keep each skill narrowly scoped to a single task.

## `SKILL.md` format

YAML frontmatter followed by markdown instructions:

```markdown
---
name: <kebab-case-name>          # required — matches the directory name
description: <one line>          # required — what the skill does + when to use it,
                                 #   written so an agent can decide relevance
version: 0.1.0                   # optional — semver
keywords: [design, tokens]       # optional — aids discovery/matching
---

# <Human-readable title>

Step-by-step instructions the agent should follow to accomplish the task.
Write for *any* agent: describe intent and outcomes, not a specific tool's API.
```

### Authoring rules

- **Agent-agnostic.** Don't reference a specific agent's tool names, slash
  commands, or config files. Describe *what* to do, not *which button to press*.
- **Self-contained.** A skill should stand alone. Inline the guidance an agent
  needs rather than assuming other context is loaded.
- **Repo-relative paths.** Reference files like `strata/DESIGN.md` or
  `spec-sheet.html` by their path from the repo root — never absolute machine
  paths.
- **Normative on tokens.** For anything touching colors, type, or components,
  point at the relevant `DESIGN.md` as the source of truth (see the root
  `CLAUDE.md` for the product → file mapping). Don't restate token values that
  belong in `DESIGN.md`.
- **Plain text.** Markdown only, no binary or vendor-proprietary formats, so the
  file is portable and diff-friendly.

## Discovery

Any agent can be pointed at this directory. Some examples of how a given tool
might surface these skills:

- Reference `.agent/skills/` from that agent's own config/instructions file
  (e.g. a `CLAUDE.md`, Cursor rule, or system prompt) so it reads the relevant
  `SKILL.md` before starting a matching task.
- Symlink or copy a skill into a vendor-specific location if a tool only scans
  its own folder.

The `name` + `description` frontmatter is what an agent reads first to decide
whether a skill applies, so keep the description concrete about *when* to use it.
