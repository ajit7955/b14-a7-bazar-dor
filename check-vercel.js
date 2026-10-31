const { spawnSync } = require("node:child_process");

const result = spawnSync(
  "npx.cmd",
  ["--yes", "vercel@latest", "--version"],
  {
    encoding: "utf8",
    shell: true,
    env: {
      ...process.env,
      CI: "1",
      NO_COLOR: "1"
    }
  }
);

console.log("Exit code:", result.status);
console.log("STDOUT:\n", result.stdout || "");
console.log("STDERR:\n", result.stderr || "");

if (result.error) {
  console.error("Execution error:", result.error.message);
}
