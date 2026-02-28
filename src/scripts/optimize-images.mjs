import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const assetsRoot = path.join(projectRoot, 'src', 'assets');
const cacheFilePath = path.join(projectRoot, '.image-opt-cache.json');
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const MIN_SIZE_BYTES = 25 * 1024;
const MIN_SAVINGS_BYTES = 2 * 1024;
const MIN_SAVINGS_RATIO = 0.03;
const OPTIMIZER_VERSION = '1.0.0';

const settings = {
  jpeg: {
    quality: 72,
    mozjpeg: true,
    progressive: true,
    chromaSubsampling: '4:2:0',
  },
  png: {
    compressionLevel: 9,
    palette: true,
    quality: 70,
    effort: 9,
  },
};

async function walkFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? walkFiles(fullPath) : [fullPath];
    })
  );

  return files.flat();
}

async function loadCache() {
  try {
    const raw = await fs.readFile(cacheFilePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {
      version: OPTIMIZER_VERSION,
      files: {},
    };
  }
}

async function saveCache(cache) {
  await fs.writeFile(cacheFilePath, JSON.stringify(cache, null, 2));
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalBuffer = await fs.readFile(filePath);

  if (originalBuffer.byteLength < MIN_SIZE_BYTES) {
    return { changed: false, before: originalBuffer.byteLength, after: originalBuffer.byteLength };
  }

  let optimizedBuffer;

  if (ext === '.jpg' || ext === '.jpeg') {
    optimizedBuffer = await sharp(originalBuffer)
      .rotate()
      .jpeg(settings.jpeg)
      .toBuffer();
  } else if (ext === '.png') {
    optimizedBuffer = await sharp(originalBuffer)
      .rotate()
      .png(settings.png)
      .toBuffer();
  } else {
    return { changed: false, before: originalBuffer.byteLength, after: originalBuffer.byteLength };
  }

  const bytesSaved = originalBuffer.byteLength - optimizedBuffer.byteLength;
  const savingsRatio = bytesSaved / originalBuffer.byteLength;

  if (
    bytesSaved <= 0 ||
    bytesSaved < MIN_SAVINGS_BYTES ||
    savingsRatio < MIN_SAVINGS_RATIO
  ) {
    return { changed: false, before: originalBuffer.byteLength, after: originalBuffer.byteLength };
  }

  await fs.writeFile(filePath, optimizedBuffer);
  return { changed: true, before: originalBuffer.byteLength, after: optimizedBuffer.byteLength };
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function main() {
  const cache = await loadCache();
  if (cache.version !== OPTIMIZER_VERSION) {
    cache.version = OPTIMIZER_VERSION;
    cache.files = {};
  }

  const allFiles = await walkFiles(assetsRoot);
  const imageFiles = allFiles.filter((filePath) => IMAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase()));

  let changedFiles = 0;
  let skippedFiles = 0;
  let bytesBefore = 0;
  let bytesAfter = 0;

  for (const filePath of imageFiles) {
    const fileStat = await fs.stat(filePath);
    const relativePath = path.relative(projectRoot, filePath).replace(/\\/g, '/');
    const fingerprint = `${fileStat.mtimeMs}:${fileStat.size}`;
    const cachedFingerprint = cache.files[relativePath];

    if (cachedFingerprint === fingerprint) {
      skippedFiles += 1;
      bytesBefore += fileStat.size;
      bytesAfter += fileStat.size;
      continue;
    }

    const result = await optimizeFile(filePath);
    bytesBefore += result.before;
    bytesAfter += result.after;

    if (result.changed) {
      changedFiles += 1;
      console.log(`optimized: ${path.relative(projectRoot, filePath)} (${formatKb(result.before)} -> ${formatKb(result.after)})`);
    }

    const updatedStat = await fs.stat(filePath);
    cache.files[relativePath] = `${updatedStat.mtimeMs}:${updatedStat.size}`;
  }

  await saveCache(cache);

  const saved = bytesBefore - bytesAfter;
  console.log(`\nimage optimization complete`);
  console.log(`processed: ${imageFiles.length} files`);
  console.log(`skipped:   ${skippedFiles} files`);
  console.log(`updated:   ${changedFiles} files`);
  console.log(`saved:     ${formatKb(saved)}`);
}

main().catch((error) => {
  console.error('image optimization failed');
  console.error(error);
  process.exit(1);
});
