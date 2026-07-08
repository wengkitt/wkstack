import fs from "fs-extra";
import path from "node:path";
import { intro, outro, text, select, spinner, isCancel, cancel } from "@clack/prompts";
import pc from "picocolors";

const templatesDir = path.join(import.meta.dirname, "../templates");

function parseArgs(argv: string[]) {
  const opts: Record<string, string | boolean> = {};
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") opts.help = true;
    else if (arg === "--version" || arg === "-v") opts.version = true;
    else if ((arg === "--template" || arg === "-t") && i + 1 < argv.length) opts.template = argv[++i];
    else if (!arg.startsWith("-")) opts.projectName = arg;
  }
  return opts as { projectName?: string; template?: string; help: boolean; version: boolean };
}

async function getAvailableTemplates() {
  try {
    const entries = await fs.readdir(templatesDir);
    const result: string[] = [];
    for (const entry of entries) {
      if ((await fs.stat(path.join(templatesDir, entry))).isDirectory()) result.push(entry);
    }
    return result;
  } catch {
    return [];
  }
}

function showHelp(version: string) {
  console.log(`\n  ${pc.bold("create-wkstack")} ${pc.dim(`v${version}`)}\n  ${pc.dim("Scaffold a wkstack project")}\n\n  ${pc.bold("Usage:")}\n    ${pc.cyan("pnpm create wkstack")} ${pc.dim("[project-name] [options]")}\n\n  ${pc.bold("Options:")}\n    ${pc.cyan("-t, --template <name>")}  ${pc.dim("Template to use")}\n    ${pc.cyan("-h, --help")}             ${pc.dim("Show help")}\n    ${pc.cyan("-v, --version")}          ${pc.dim("Show version number")}\n`);
}

async function main() {
  const opts = parseArgs(process.argv);
  const pkg = await fs.readJSON(path.join(import.meta.dirname, "../package.json"));

  if (opts.help) { showHelp(pkg.version); return; }
  if (opts.version) { console.log(pkg.version); return; }

  intro(pc.inverse(` create-wkstack ${pc.dim(`v${pkg.version}`)} `));

  let projectName = opts.projectName;
  if (!projectName) {
    projectName = await text({
      message: "What is your project name?",
      placeholder: "my-app",
      validate: (v) => {
        if (!v?.trim()) return "Project name is required";
        if (fs.existsSync(path.join(process.cwd(), v))) return `Directory "${v}" already exists`;
      },
    });
    if (isCancel(projectName)) { cancel("Operation cancelled"); process.exit(0); }
  }

  const templates = await getAvailableTemplates();
  if (templates.length === 0) { cancel("No templates found"); process.exit(1); }

  let templateName = opts.template;
  if (templateName && !templates.includes(templateName)) {
    cancel(`Template "${templateName}" not found. Available: ${templates.join(", ")}`);
    process.exit(1);
  }
  if (!templateName) {
    templateName = await select({
      message: "Pick a template",
      options: templates.map((t) => ({ value: t, label: t })),
    });
    if (isCancel(templateName)) { cancel("Operation cancelled"); process.exit(0); }
  }

  const s = spinner();
  s.start("Creating project...");
  await fs.copy(path.join(templatesDir, templateName), path.join(process.cwd(), projectName));
  s.stop("Project created!");

  outro(
    ` ${pc.bold("Next steps:")}\n  ${pc.cyan(`cd ${projectName}`)}\n  ${pc.cyan("pnpm install")}\n  ${pc.cyan("pnpm dev")}`,
  );
}

main().catch((err) => { console.error(err); process.exit(1); });
