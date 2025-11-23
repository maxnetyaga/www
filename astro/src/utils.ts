import { execSync } from "child_process";
import fs from "node:fs";

/**
 * @param {string} page - /path/to/some/page/
 */
export function reportPageModifiedTime(page: string) {
  let gitRoot;
  try {
    gitRoot = execSync("git rev-parse --show-toplevel").toString().trim();
  } catch (err) {
    throw new Error("Git repository required", { cause: err });
  }

  const simplePagePath =
    gitRoot +
    "/astro/src/pages/" +
    (page === "/" ? "index" : page.replace(/^\/+|\/+$/g, "")) +
    ".astro";
  const isSimplePage = fs.existsSync(simplePagePath);

  if (!isSimplePage) {
    throw new Error(
      `Can't report modified time for any pages but simple (single .astro file)\nPage: ${simplePagePath}`,
    );
  }

  const filePath = simplePagePath;

  const errorMsg = "file wasn't commited yet";
  try {
    const result = execSync(`git log -1 --pretty="format:%cI" "${filePath}"`);
    return result.toString() || errorMsg;
  } catch {
    return errorMsg;
  }
}
