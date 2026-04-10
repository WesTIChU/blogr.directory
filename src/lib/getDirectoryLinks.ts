import fs from 'node:fs';
import path from 'node:path';

const ALLOWED_FILES = new Set([
  'personal-writing.mdx',
]);

export function getDirectoryLinks(): string[] {
  const docsRoot = path.resolve(process.cwd(), 'src/content/docs/blogs');

  const files = fs
    .readdirSync(docsRoot, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .filter((entry) => ALLOWED_FILES.has(entry.name))
    .map((entry) => path.join(docsRoot, entry.name));

  const urls = new Set<string>();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.matchAll(/<BlogSection\s+links=\{`([\s\S]*?)`\}\s*\/>/g);

    for (const match of matches) {
      const block = match[1];

      for (const rawLine of block.split('\n')) {
        const line = rawLine.trim();
        if (!line.startsWith('http')) continue;

        const [url] = line.split('|');
        if (url?.trim()) {
          urls.add(url.trim());
        }
      }
    }
  }

  return Array.from(urls);
}