import fs from 'node:fs';
import path from 'node:path';

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (entry.isFile() && fullPath.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }

  return files;
}

export function getDirectoryLinks(): string[] {
  const docsRoot = path.resolve(process.cwd(), 'src/content/docs/blogs');
  const files = walk(docsRoot);
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