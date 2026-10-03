import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "images-src");
const outDir = path.join(root, "public", "images");

const MAX_BYTES = 40 * 1024;
const START_QUALITY = 65;
const MIN_QUALITY = 50;

/** @type {Record<string, { width: number; hero: boolean }>} */
const TARGETS = {
  "hero-refinery": { width: 1920, hero: true },
  "energy-grid": { width: 1600, hero: false },
  "energy-solar": { width: 1600, hero: false },
  "construction-steel": { width: 1600, hero: false },
  "refinery-pipes": { width: 1600, hero: false },
  "automation-robot": { width: 1200, hero: false },
  "automation-control-room": { width: 1200, hero: false },
  "about-industrial": { width: 1200, hero: false },
};

/**
 * @param {string} inputPath
 * @param {number} width
 * @param {number} quality
 */
function encode(inputPath, width, quality) {
  return sharp(inputPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({
      quality,
      effort: 6,
      chromaSubsampling: "4:2:0",
    })
    .toBuffer({ resolveWithObject: true });
}

/**
 * @param {string} inputPath
 * @param {{ width: number; hero: boolean }} spec
 */
async function optimizeOne(inputPath, spec) {
  const minWidth = spec.hero ? 1000 : 800;
  let width = spec.width;
  let quality = START_QUALITY;

  let result = await encode(inputPath, width, quality);

  while (result.data.length >= MAX_BYTES) {
    const nextWidth = Math.floor(width * 0.8);
    if (nextWidth >= minWidth && nextWidth < width) {
      width = nextWidth;
      result = await encode(inputPath, width, quality);
      continue;
    }
    if (width > minWidth) {
      width = minWidth;
      result = await encode(inputPath, width, quality);
      continue;
    }
    break;
  }

  while (result.data.length >= MAX_BYTES && quality - 5 >= MIN_QUALITY) {
    quality -= 5;
    result = await encode(inputPath, width, quality);
  }

  if (result.data.length >= MAX_BYTES) {
    const kb = (result.data.length / 1024).toFixed(1);
    throw new Error(
      `Still ${kb}KB at ${result.info.width}px and quality ${quality}. ` +
        `Floors reached (width ${minWidth}px, quality ${MIN_QUALITY}). ` +
        `Use a simpler crop or a less detailed source image.`,
    );
  }

  return { ...result, quality };
}

async function main() {
  let entries;
  try {
    entries = await readdir(srcDir);
  } catch {
    console.error(`Missing folder: ${srcDir}`);
    console.error("Create /images-src and add the source .jpg files, then run npm run images.");
    process.exit(1);
  }

  await mkdir(outDir, { recursive: true });

  const expected = Object.keys(TARGETS);
  const missing = expected.filter((name) => !entries.includes(`${name}.jpg`));
  if (missing.length > 0) {
    console.error("Missing source files in /images-src:");
    for (const name of missing) console.error(`  - ${name}.jpg`);
    process.exit(1);
  }

  /** @type {{ name: string; width: number; kb: number; quality: number }[]} */
  const rows = [];

  for (const name of expected) {
    const spec = TARGETS[name];
    if (!spec) continue;
    const inputPath = path.join(srcDir, `${name}.jpg`);
    let optimized;
    try {
      optimized = await optimizeOne(inputPath, spec);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`${name}: ${message}`);
    }
    const outPath = path.join(outDir, `${name}.webp`);
    await writeFile(outPath, optimized.data);
    rows.push({
      name: `${name}.webp`,
      width: optimized.info.width,
      kb: optimized.data.length / 1024,
      quality: optimized.quality,
    });
  }

  const nameWidth = Math.max(...rows.map((row) => row.name.length), 4);
  console.log("");
  console.log(
    `${"name".padEnd(nameWidth)}  ${"width".padStart(6)}  ${"KB".padStart(6)}  quality`,
  );
  console.log(`${"-".repeat(nameWidth)}  ${"-".repeat(6)}  ${"-".repeat(6)}  -------`);
  for (const row of rows) {
    console.log(
      `${row.name.padEnd(nameWidth)}  ${String(row.width).padStart(6)}  ${row.kb.toFixed(1).padStart(6)}  ${String(row.quality).padStart(7)}`,
    );
  }
  console.log("");

  const overweight = rows.filter((row) => row.kb >= 40);
  if (overweight.length > 0) {
    console.error("These files are still at or above 40KB:");
    for (const row of overweight) console.error(`  - ${row.name} (${row.kb.toFixed(1)}KB)`);
    process.exit(1);
  }

  console.log(`Wrote ${rows.length} WebP files to /public/images. All under 40KB.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
