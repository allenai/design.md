/**
 * Composes a product DESIGN.md by merging a base design system with a product overlay.
 *
 * Usage:
 *   bun run scripts/compose.ts --base strata/DESIGN.md --overlay asta/DESIGN.src.md --out asta/DESIGN.md
 *
 * Merge rules:
 *   - YAML tokens: deep merge at the AST level, preserving base comments and spacing.
 *     Overlay wins on conflicts; new overlay keys are appended.
 *   - Markdown sections: overlay sections replace matching base sections; new overlay sections append.
 */

import { parseDocument, isMap, isPair } from 'yaml';
import type { Document, YAMLMap, Pair, Node } from 'yaml';
import { readFileSync, writeFileSync } from 'fs';

// ── Argument parsing ───────────────────────────────────────────────

const args = process.argv.slice(2);
const get = (flag: string) => { const i = args.indexOf(flag); return i !== -1 ? args[i + 1] : undefined; };

const baseFile = get('--base');
const overlayFile = get('--overlay');
const outFile = get('--out');

if (!baseFile || !overlayFile) {
  console.error('Usage: compose.ts --base <file> --overlay <file> [--out <file>]');
  process.exit(1);
}

// ── Frontmatter splitting ──────────────────────────────────────────

function splitFrontmatter(content: string): { frontmatter: string; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error('No YAML frontmatter found.');
  return { frontmatter: match[1], body: match[2] };
}

// ── YAML AST deep merge ────────────────────────────────────────────
// Operates on the Document AST so comments and blank lines are preserved.

function mergeMapNodes(base: YAMLMap, overlay: YAMLMap): void {
  for (const pair of overlay.items as Pair[]) {
    const key = String((pair.key as Node).toString());
    const baseNode = base.get(key, true) as Node | undefined;

    if (baseNode && isMap(baseNode) && isMap(pair.value)) {
      // Both sides are maps — recurse to preserve base structure
      mergeMapNodes(baseNode as YAMLMap, pair.value as YAMLMap);
    } else {
      // Scalar or new key — overlay wins; set replaces or appends
      base.set(pair.key, pair.value);
    }
  }
}

function mergeDocuments(baseDoc: Document, overlayDoc: Document): Document {
  if (isMap(baseDoc.contents) && isMap(overlayDoc.contents)) {
    mergeMapNodes(baseDoc.contents as YAMLMap, overlayDoc.contents as YAMLMap);
  }
  return baseDoc;
}

// ── Markdown section merging ───────────────────────────────────────

function parseSections(body: string): Map<string, string> {
  const sections = new Map<string, string>();
  const parts = body.split(/(?=^## )/m);
  for (const part of parts) {
    const match = part.match(/^## (.+)/);
    if (match) {
      sections.set(match[1].trim(), part.trimEnd());
    } else if (part.trim()) {
      sections.set('__preamble__', part.trimEnd());
    }
  }
  return sections;
}

function mergeSections(base: Map<string, string>, overlay: Map<string, string>): string {
  const merged = new Map(base);
  for (const [key, value] of overlay) {
    merged.set(key, value);
  }
  return [...merged.values()].join('\n\n') + '\n';
}

// ── Main ───────────────────────────────────────────────────────────

const baseContent = readFileSync(baseFile, 'utf8');
const overlayContent = readFileSync(overlayFile, 'utf8');

const base = splitFrontmatter(baseContent);
const overlay = splitFrontmatter(overlayContent);

const baseDoc = parseDocument(base.frontmatter, { keepSourceTokens: true });
const overlayDoc = parseDocument(overlay.frontmatter);

const mergedDoc = mergeDocuments(baseDoc, overlayDoc);
const mergedYAML = mergedDoc.toString();

const mergedBody = mergeSections(parseSections(base.body), parseSections(overlay.body));

const output = `---\n${mergedYAML}---\n\n${mergedBody}`;

if (outFile) {
  writeFileSync(outFile, output);
  console.log(`Composed → ${outFile}`);
} else {
  process.stdout.write(output);
}
