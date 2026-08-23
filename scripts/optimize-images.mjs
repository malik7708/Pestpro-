import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const publicRoot = path.join(projectRoot, "public");
const optimizedRoot = path.join(publicRoot, "images", "optimized");
const allowedExtensions = new Set([".png", ".jpg", ".jpeg"]);
// The site never renders these source files wider than 1600px. Lowering the
// source ceiling and quality keeps CSS background downloads affordable on mobile.
const maxWidth = 1600;
const webpQuality = 72;

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".next" ||
        entry.name === ".git"
      )
        continue;
      walk(fullPath, results);
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function optimizeImages() {
  fs.mkdirSync(optimizedRoot, { recursive: true });

  const sourceFiles = walk(publicRoot).filter((file) => {
    const ext = path.extname(file).toLowerCase();
    if (!allowedExtensions.has(ext)) return false;
    return !toPosix(file).includes("/images/optimized/");
  });

  const summary = {
    totalImagesProcessed: sourceFiles.length,
    originalTotalSize: 0,
    optimizedTotalSize: 0,
    cssBackgroundImagesOptimized: 0,
    imgReferencesUpdated: 0,
    cssReferencesUpdated: 0,
    jsComponentTemplateReferencesUpdated: 0,
    brokenImagePathsFound: 0,
    brokenImagePathsFixed: 0,
  };

  const mapping = new Map();

  for (const originalFile of sourceFiles) {
    const relativeOriginal = toPosix(path.relative(publicRoot, originalFile));
    const ext = path.extname(originalFile).toLowerCase();
    const baseName = path.basename(originalFile, ext);
    const optimizedRelative = relativeOriginal.replace(
      new RegExp(`${escapeRegExp(ext)}$`, "i"),
      ".webp",
    );
    const destPath = path.join(
      publicRoot,
      "images",
      "optimized",
      optimizedRelative,
    );
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    const originalSize = fs.statSync(originalFile).size;
    summary.originalTotalSize += originalSize;

    await sharp(originalFile)
      .rotate()
      .resize({ width: maxWidth, withoutEnlargement: true, fit: "inside" })
      .webp({ quality: webpQuality, effort: 6 })
      .toFile(destPath);

    const optimizedSize = fs.statSync(destPath).size;
    summary.optimizedTotalSize += optimizedSize;

    const webpPublicPath = `/${toPosix(path.relative(publicRoot, destPath))}`;
    const basePublicPath = `/${relativeOriginal}`;
    mapping.set(basePublicPath, webpPublicPath);
    mapping.set(relativeOriginal, webpPublicPath);
    mapping.set(baseName + ext, webpPublicPath);
    mapping.set(baseName.toLowerCase() + ext.toLowerCase(), webpPublicPath);

    const publicPathWithLeadingSlash = `/${relativeOriginal}`;
    mapping.set(publicPathWithLeadingSlash, webpPublicPath);
    mapping.set(`/${baseName}${ext}`, webpPublicPath);
    mapping.set(
      `/${baseName.toLowerCase()}${ext.toLowerCase()}`,
      webpPublicPath,
    );

    const rootName = path.basename(relativeOriginal);
    mapping.set(rootName, `/${toPosix(path.relative(publicRoot, destPath))}`);
    mapping.set(
      `/${rootName}`,
      `/${toPosix(path.relative(publicRoot, destPath))}`,
    );
  }

  const codeFiles = [];
  for (const directory of ["app", "components", "lib"]) {
    const dirPath = path.join(projectRoot, directory);
    if (fs.existsSync(dirPath)) {
      codeFiles.push(
        ...walk(dirPath).filter((file) => /\.(ts|tsx|js|jsx|css)$/.test(file)),
      );
    }
  }

  for (const file of codeFiles) {
    let content = fs.readFileSync(file, "utf8");
    const before = content;

    const sortedMappings = [...mapping.entries()].sort(
      (a, b) => b[0].length - a[0].length,
    );
    for (const [from, to] of sortedMappings) {
      const escapedFrom = escapeRegExp(from);
      content = content.replace(new RegExp(escapedFrom, "g"), to);
    }

    content = content.replace(/<Image\s+([^>]*?)>/g, (match, attrs) => {
      if (
        attrs.includes("priority") ||
        attrs.includes("preload") ||
        attrs.includes("loading=") ||
        attrs.includes("decoding=")
      )
        return match;
      return `<Image ${attrs} loading="lazy" decoding="async">`;
    });

    content = content.replace(
      /<img\b(?![^>]*\bloading=)(?![^>]*\bdecoding=)([^>]*)>/gi,
      (match, attrs) => {
        return `<img${attrs} loading="lazy" decoding="async">`;
      },
    );

    if (content !== before) {
      fs.writeFileSync(file, content);
    }
  }

  return summary;
}

try {
  const summary = await optimizeImages();
  console.log(JSON.stringify(summary, null, 2));
} catch (error) {
  console.error(error);
  process.exit(1);
}
