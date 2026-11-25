import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of the worst possible advice an AI could give (99 chars).
// Confident, tidy, specific, followable — and instantly regrettable.
const LINE =
  "If your Wi-Fi is slow, share your password with the whole street — more users means more bandwidth.";

// The gate requires UTF-8 text of 1 to 140 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
