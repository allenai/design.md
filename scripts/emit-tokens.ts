/**
 * Emits a product's design tokens as JSON, so consumers don't each write a
 * frontmatter parser.
 *
 * Usage:
 *   bun run scripts/emit-tokens.ts --spec olmo-earth/DESIGN.md --out olmo-earth/tokens.json
 *
 * What it does and deliberately does not do:
 *   - Resolves `"{colors.teal}"` references to literal values, following chains
 *     (link -> interactive-primary -> pink) and rejecting cycles. Every value in
 *     the output is a literal, so a consumer never implements the reference
 *     syntax.
 *   - Keeps the spec's key names verbatim (`2xs`, `extra-dark-teal`) and its
 *     values verbatim (`8px`, not `8`). Renaming keys to language identifiers and
 *     converting units are consumer concerns — a CSS consumer wants `8px`, a
 *     JS consumer may want `8`, and this file has to serve both.
 *   - Includes the `components` section, which `@google/design.md export` omits
 *     from every format it supports.
 *
 * With `--types` it also writes a `.d.ts` of named types for the same tokens.
 * TypeScript already infers the JSON's shape precisely; what it can't give you is
 * a name to write in your own signatures, which is what these are for. They are
 * derived from the emitted values rather than hand-written, because products
 * don't share a shape — earthranger nests its colors and typography where the
 * others are flat.
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
const typesFile = get('--types');

if (!specFile) {
  console.error('Usage: emit-tokens.ts --spec <file> [--out <file>] [--types <file>]');
  process.exit(1);
}

// Emitted in this order; `assets` is excluded because its values are file paths,
// not style tokens.
const GROUPS = ['colors', 'typography', 'spacing', 'rounded', 'components'] as const;

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

// ── Type emission ──────────────────────────────────────────────────

type Group = (typeof GROUPS)[number];

const TYPE_NAMES: Record<Group, { collection: string; key: string }> = {
  colors: { collection: 'Colors', key: 'ColorName' },
  typography: { collection: 'Typography', key: 'TypographyName' },
  spacing: { collection: 'Spacing', key: 'SpacingName' },
  rounded: { collection: 'Rounded', key: 'RoundedName' },
  components: { collection: 'Components', key: 'ComponentName' },
};

const isIdentifier = (key: string) => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key);

function printType(value: unknown, indent: string): string {
  if (value === null) return 'null';
  if (Array.isArray(value)) {
    const members = [...new Set(value.map((item) => printType(item, indent)))];
    return `readonly (${members.join(' | ')})[]`;
  }
  if (typeof value === 'object') {
    const inner = `${indent}  `;
    const fields = Object.entries(value as Tree).map(
      ([key, nested]) =>
        `${inner}${isIdentifier(key) ? key : JSON.stringify(key)}: ${printType(nested, inner)};`,
    );
    return `{\n${fields.join('\n')}\n${indent}}`;
  }
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'
    ? typeof value
    : 'unknown';
}

const isPlainObject = (value: unknown): value is Tree =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

/** Every sub-token any member defines, optional where not every member defines it.
 *  Only meaningful for a group whose members disagree — a hover state carries just
 *  the properties it changes, so no single property is common to all components and
 *  the plain union of their shapes can't be read from. */
function printPermissiveType(members: Tree[]): string {
  const keys = [...new Set(members.flatMap((member) => Object.keys(member)))];
  const fields = keys.map((key) => {
    const owner = members.find((member) => key in member)!;
    const optional = members.some((member) => !(key in member)) ? '?' : '';
    const name = isIdentifier(key) ? key : JSON.stringify(key);
    return `  ${name}${optional}: ${printType(owner[key], '  ')};`;
  });
  return `{\n${fields.join('\n')}\n}`;
}

function emitTypes(tokens: Tree, present: readonly Group[]): string {
  const blocks = [`// Generated from ${specFile} by scripts/emit-tokens.ts. Do not edit.`];

  for (const group of present) {
    const { collection, key } = TYPE_NAMES[group];
    const singular = key.replace(/Name$/, '');
    blocks.push(`export interface ${collection} ${printType(tokens[group], '')}`);
    blocks.push(`export type ${key} = keyof ${collection};`);

    const members = Object.values(tokens[group]);
    if (!members.every(isPlainObject)) continue;

    const shapes = new Set(members.map((member) => Object.keys(member).sort().join(',')));
    if (shapes.size === 1) {
      blocks.push(`export type ${singular}Token = ${collection}[${key}];`);
    } else {
      blocks.push(`export type ${singular}Token<K extends ${key}> = ${collection}[K];`);
      blocks.push(`export interface Any${singular}Token ${printPermissiveType(members)}`);
    }
  }

  blocks.push(`export type GroupName = ${present.map((g) => JSON.stringify(g)).join(' | ')};`);
  blocks.push(
    [
      'export interface Tokens {',
      '  $name: string;',
      '  $version: string | null;',
      '  $description: string | null;',
      '  $groups: readonly string[];',
      ...present.map((group) => `  ${group}: ${TYPE_NAMES[group].collection};`),
      '}',
    ].join('\n'),
  );

  return `${blocks.join('\n\n')}\n`;
}

// ── Main ───────────────────────────────────────────────────────────

const spec = readFileSync(specFile, 'utf8');
const tree = parseDocument(splitFrontmatter(spec)).toJS() as Tree;

// Products define different subsets — earthranger currently has colors and
// typography only — so emit what exists and name what doesn't rather than
// refusing to build.
const present = GROUPS.filter((group) => tree[group]);
const absent = GROUPS.filter((group) => !tree[group]);

const tokens: Tree = {
  $name: tree.name,
  $version: tree.version ?? null,
  $description: tree.description ?? null,
  $groups: present,
};
for (const group of present) {
  tokens[group] = Object.fromEntries(
    Object.entries(tree[group]).map(([key, value]) => [key, resolveValue(value, tree)]),
  );
}

const output = JSON.stringify(tokens, null, 2) + '\n';
const count = present.reduce((total, group) => total + Object.keys(tokens[group]).length, 0);
if (absent.length) {
  console.warn(`emit-tokens: ${specFile} defines no ${absent.join(', ')} — omitted from the output`);
}

if (outFile) {
  writeFileSync(outFile, output);
  console.log(`Emitted ${count} tokens → ${outFile}`);
} else {
  process.stdout.write(output);
}

if (typesFile) {
  writeFileSync(typesFile, emitTypes(tokens, present));
  console.log(`Emitted types → ${typesFile}`);
}
