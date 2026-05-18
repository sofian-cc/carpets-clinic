import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '..', 'public', 'assets');
const QUALITY = 82;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(entry => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? getFiles(full) : full;
  }));
  return files.flat();
}

async function compress() {
  const allFiles = await getFiles(ASSETS_DIR);
  const images = allFiles.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  let totalBefore = 0;
  let totalAfter = 0;

  for (const src of images) {
    const ext = extname(src);
    const dest = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

    // Skip if webp already exists and is newer
    if (existsSync(dest)) {
      const srcStat = await stat(src);
      const destStat = await stat(dest);
      if (destStat.mtimeMs > srcStat.mtimeMs) {
        console.log(`  skip  ${basename(src)} (already converted)`);
        continue;
      }
    }

    const srcStat = await stat(src);
    totalBefore += srcStat.size;

    await sharp(src).rotate().webp({ quality: QUALITY }).toFile(dest);

    const destStat = await stat(dest);
    totalAfter += destStat.size;

    const saving = Math.round((1 - destStat.size / srcStat.size) * 100);
    console.log(`  ${saving > 0 ? '✓' : '~'} ${src.replace(ASSETS_DIR + '/', '')} → webp  ${(srcStat.size/1024).toFixed(0)}KB → ${(destStat.size/1024).toFixed(0)}KB  (${saving}% saving)`);
  }

  if (totalBefore > 0) {
    const totalSaving = Math.round((1 - totalAfter / totalBefore) * 100);
    console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB  (${totalSaving}% reduction)`);
  }
}

compress().catch(console.error);
