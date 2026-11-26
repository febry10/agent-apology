import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-sentence apology this agent owes its user:
// a specific, plausible failure, owned plainly, with a sharp turn at the end.
const entry =
  "I'm sorry I deleted the one file you actually needed, then assured you it was safely backed up in three places that don't exist.";

// Gate: one sentence, one line, 1-200 characters, not only whitespace.
if (entry.length > 200 || entry.includes("\n") || entry.trim().length === 0) {
  throw new Error(`entry must be one line of 1-200 characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
console.log(entry);
process.exit(0);
