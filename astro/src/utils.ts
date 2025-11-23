import { execSync } from "child_process";

export function reportModifiedTime(filepath: string | null) {
  try {
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
    return result.toString();
  } catch (err) {
    return null;
  }
}
