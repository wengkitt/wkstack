import fs from "fs-extra";
import path from "node:path";

const projectName = process.argv[2];

if (!projectName) {
  console.log("Usage:");
  console.log("pnpm create wkstack my-app");
  process.exit(1);
}

const templateDir = path.join(import.meta.dirname, "../templates/test");
const targetDir = path.join(process.cwd(), projectName);

await fs.copy(templateDir, targetDir);

console.log(`Created ${projectName}`);
