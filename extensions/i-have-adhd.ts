import { readFileSync } from "node:fs";

const outputStyleUrl = new URL("../output-styles/i-have-adhd.md", import.meta.url);
const outputStyleSource = readFileSync(outputStyleUrl, "utf8");
const outputStyleMatch = outputStyleSource.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)$/);

if (!outputStyleMatch) {
  throw new Error("Could not read the i-have-adhd output style frontmatter.");
}

const outputStyleInstructions = outputStyleMatch[1].trim();

export default function (pi) {
  pi.on("before_agent_start", (event) => {
    event.systemPromptOptions.sections["i-have-adhd-output-style"] = outputStyleInstructions;
  });
}
