/**
 * Emits a product's design tokens as W3C Design Tokens (DTCG), the format
 * `@google/design.md export --format dtcg` targets.
 *
 * This exists because that exporter is currently lossy: it omits the whole
 * `components` section, drops `lineHeight` from every typography role, and emits
 * alpha colours without an `alpha` channel, so its output fails the schema it
 * declares (google-labs-code/design.md#172). Matching its structure means that
 * when those are fixed upstream, this script deletes and the CLI's output takes
 * its place with no change for consumers.
 *
 * Usage:
 *   bun run scripts/emit-tokens.ts --spec olmo-earth/DESIGN.md --out olmo-earth/tokens.json
 *
 * What it does:
 *   - Resolves `{colors.teal}` references to literals, following chains
 *     (link -> interactive-primary -> pink) and rejecting cycles, so a consumer
 *     never implements the reference syntax. Same behaviour as the CLI.
 *   - Keeps the spec's key names verbatim: `2xs` and `extra-dark-teal` stay as
 *     written, because they are what the design team says out loud.
 *   - Emits `components` as DTCG groups. The format has no component concept, so
 *     each sub-token is typed by what it is: colours as `color`, dimensions as
 *     `dimension`, and a component's `typography` as a nested composite.
 */

import { readFileSync, writeFileSync } from 'fs';
import { parseDocument } from 'yaml';

// ── Argument parsing ───────────────────────────────────────────────

const args = process.argv.slice(2);
const get = (flag: string) => {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : undefined;
};

const specFile = get('--spec');
const outFile = get('--out');

if (!specFile) {
  console.error('Usage: emit-tokens.ts --spec <file> [--out <file>]');
  process.exit(1);
}

const DTCG_SCHEMA = 'https://www.designtokens.org/schemas/2025.10/format.json';

function fail(message: string): never {
  console.error(`emit-tokens: ${message}`);
  process.exit(1);
}

function splitFrontmatter(content: string): string {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) fail(`No YAML frontmatter in ${specFile}`);
  return match[1];
}

type Tree = Record<string, any>;

// ── Reference resolution ───────────────────────────────────────────

const isReference = (value: unknown): value is string =>
  typeof value === 'string' && /^\{[\w.-]+\}$/.test(value);

function resolveReference(value: unknown, tree: Tree, seen = new Set<string>()): unknown {
  if (!isReference(value)) return value;
  const path = value.slice(1, -1);
  if (seen.has(path)) fail(`Circular reference at {${path}}`);
  seen.add(path);

  const [group, ...rest] = path.split('.');
  const target = tree[group]?.[rest.join('.')];
  if (target === undefined) fail(`Unresolved reference {${path}}`);

  return resolveReference(target, tree, seen);
}

/** Resolve at every depth, so a reference inside a referenced object (for
 *  example a component pointing at `{typography.body-sm}`) is followed too. */
function resolveValue(value: unknown, tree: Tree): unknown {
  const resolved = resolveReference(value, tree);
  if (resolved === null || typeof resolved !== 'object') return resolved;
  return Object.fromEntries(
    Object.entries(resolved as Tree).map(([key, nested]) => [key, resolveValue(nested, tree)]),
  );
}

// ── DTCG values ────────────────────────────────────────────────────

/** DTCG wants sRGB channels as 0-1 numbers, alpha separately, and `hex` at six
 *  digits — an eight-digit hex would contradict the alpha channel, so the spec's
 *  `#0326291a` becomes components + alpha: 0.102. */
function colorValue(raw: string): Tree {
  const hex = raw.trim();
  // `rgba(0, 0, 0, 0.08)` — the only way to state an alpha that eight-digit hex
  // can't reach, and several values here are MUI's, which use exactly those.
  const rgba = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/.exec(hex);
  if (rgba) {
    const [r, g, b] = [1, 2, 3].map((i) => Number(rgba[i]));
    const value: Tree = {
      colorSpace: 'srgb',
      components: [r, g, b].map((c) => Math.round((c / 255) * 1000) / 1000),
    };
    if (rgba[4] !== undefined) value.alpha = Number(rgba[4]);
    value.hex = `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
    return value;
  }
  // The one keyword the specs use. DTCG has no keywords, so it is fully
  // transparent black — which is what `transparent` computes to in CSS.
  if (hex === 'transparent') {
    return { colorSpace: 'srgb', components: [0, 0, 0], alpha: 0, hex: '#000000' };
  }
  const match = /^#([0-9a-fA-F]{6})([0-9a-fA-F]{2})?$/.exec(hex);
  if (!match) fail(`Colour ${raw} is not 6- or 8-digit hex`);

  const [r, g, b] = [0, 2, 4].map(
    (i) => Math.round((parseInt(match[1].slice(i, i + 2), 16) / 255) * 1000) / 1000,
  );
  const value: Tree = { colorSpace: 'srgb', components: [r, g, b] };
  if (match[2]) {
    value.alpha = Math.round((parseInt(match[2], 16) / 255) * 1000) / 1000;
  }
  value.hex = `#${match[1].toLowerCase()}`;
  return value;
}

/** `16px` and `1.5rem` split into DTCG's dimension shape. Unitless numbers are
 *  px, matching how the spec writes spacing and radii. */
function dimensionValue(raw: string | number): Tree {
  if (typeof raw === 'number') return { value: raw, unit: 'px' };
  const match = /^(-?[\d.]+)(px|rem)$/.exec(raw.trim());
  if (!match) fail(`Dimension ${raw} is not a number of px or rem`);
  return { value: Number(match[1]), unit: match[2] };
}

/** The composite `typography` type requires all five sub-values, and reads
 *  lineHeight as a multiplier of fontSize. The DESIGN.md format has no
 *  letterSpacing, so it is emitted as 0 — that is what these roles render as
 *  today, and the alternative is an invalid token. */
function typographyValue(role: Tree): Tree {
  return {
    fontFamily: role.fontFamily,
    fontSize: dimensionValue(role.fontSize),
    fontWeight: role.fontWeight,
    letterSpacing: { value: 0, unit: 'px' },
    lineHeight: role.lineHeight,
  };
}

/** A role can only be a composite if it has everything the composite needs. When
 *  it doesn't — EarthRanger writes `fontStyle: Regular` rather than a weight, and
 *  an absolute `lineHeight: 28.8px` rather than a multiplier — it becomes a group
 *  of primitive tokens instead. That stays valid and loses nothing, where turning
 *  28.8px into a multiplier would mean inventing a number the spec never states. */
function isCompositeTypography(role: Tree): boolean {
  return (
    typeof role.fontFamily === 'string' &&
    role.fontSize !== undefined &&
    role.fontWeight !== undefined &&
    typeof role.lineHeight === 'number'
  );
}

const isTypography = (value: unknown): value is Tree =>
  typeof value === 'object' && value !== null && 'fontFamily' in (value as Tree);

/** Sub-tokens ending in `Color` are colours whatever their value looks like, so a
 *  keyword or a malformed hex fails loudly rather than being emitted as a
 *  dimension. Everything else is a dimension unless it looks like typography. */
function componentToken(name: string, value: unknown): Tree {
  if (name.toLowerCase().endsWith('color')) {
    return { $type: 'color', $value: colorValue(value as string) };
  }
  if (isTypography(value)) return { $type: 'typography', $value: typographyValue(value) };
  return { $type: 'dimension', $value: dimensionValue(value as string | number) };
}

/** Spec group -> DTCG group name. `colors` is `color` in DTCG, matching what the
 *  CLI emits; everything else keeps its name. */
const GROUPS_TO_EMIT: Record<string, string> = {
  colors: 'color',
  typography: 'typography',
  spacing: 'spacing',
  rounded: 'rounded',
  components: 'components',
};

/** Emits a token for a leaf and a group for anything nested, so a product that
 *  nests (EarthRanger's per-platform font families, its light/dark pairs) works
 *  without special-casing. `hint` carries the enclosing group's type so a bare
 *  `8px` under `spacing` is a dimension rather than a guess. */
function walk(node: Tree, hint?: string): { tree: Tree; count: number } {
  const out: Tree = {};
  let count = 0;
  for (const [key, value] of Object.entries(node)) {
    if (isTypography(value) && isCompositeTypography(value as Tree)) {
      out[key] = { $type: 'typography', $value: typographyValue(value as Tree) };
      count += 1;
    } else if (value !== null && typeof value === 'object') {
      const nested = walk(value as Tree, hint);
      out[key] = nested.tree;
      count += nested.count;
    } else {
      out[key] = leafToken(key, value, hint);
      count += 1;
    }
  }
  return { tree: out, count };
}

/** A leaf is a colour if its name or the group says so, a dimension if it parses
 *  as one, and a font family otherwise — EarthRanger's `web-fonts: Roboto`. */
function leafToken(name: string, value: unknown, hint?: string): Tree {
  // `fontStyle: Regular` and `fontStyle: Bold` are weights by another name.
  if (name === 'fontWeight' || name === 'fontStyle') {
    const weight = typeof value === 'number' ? value : String(value).toLowerCase();
    return { $type: 'fontWeight', $value: weight };
  }
  if (name === 'lineHeight' && typeof value === 'number') {
    return { $type: 'number', $value: value };
  }
  const looksLikeColor =
    name.toLowerCase().endsWith('color') ||
    (hint === 'color' && typeof value === 'string');
  if (looksLikeColor) return { $type: 'color', $value: colorValue(value as string) };
  if (typeof value === 'number' || /^-?[\d.]+(px|rem)$/.test(String(value).trim())) {
    return { $type: 'dimension', $value: dimensionValue(value as string | number) };
  }
  return { $type: 'fontFamily', $value: String(value) };
}

// ── Main ───────────────────────────────────────────────────────────

const spec = readFileSync(specFile, 'utf8');
const tree = parseDocument(splitFrontmatter(spec)).toJS() as Tree;

const resolved = (group: string): Tree =>
  Object.fromEntries(
    Object.entries(tree[group] ?? {}).map(([key, value]) => [key, resolveValue(value, tree)]),
  );

const tokens: Tree = { $schema: DTCG_SCHEMA };
if (tree.description) tokens.$description = tree.description;

let count = 0;
const absent: string[] = [];

// Group names DTCG has a type for. Anything else the spec defines is emitted as a
// plain group, which the format explicitly allows.
const GROUP_TYPES: Record<string, string> = {
  colors: 'color',
  spacing: 'dimension',
  rounded: 'dimension',
  typography: 'typography',
};

for (const [name, group] of Object.entries(GROUPS_TO_EMIT)) {
  if (!tree[name]) {
    absent.push(name);
    continue;
  }
  const emitted = walk(resolved(name), GROUP_TYPES[name]);
  tokens[group] = emitted.tree;
  count += emitted.count;
}

const output = JSON.stringify(tokens, null, 2) + '\n';
if (absent.length) {
  console.warn(`emit-tokens: ${specFile} defines no ${absent.join(', ')} — omitted from the output`);
}

if (outFile) {
  writeFileSync(outFile, output);
  console.log(`Emitted ${count} tokens → ${outFile}`);
} else {
  process.stdout.write(output);
}
