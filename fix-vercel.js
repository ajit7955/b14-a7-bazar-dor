const { spawnSync } = require("node:child_process");

console.log("Checking Vercel CLI...");

const result = spawnSync(
  "npx.cmd",
  ["--yes", "vercel@latest", "link"],
  {
    encoding: "utf8",
    shell: true,
    env: {
      ...process.env,
      CI: "1",
      NO_COLOR: "1"
    },
    timeout: 120000
  }
);

console.log("\nExit code:", result.status);
console.log("\nSTDOUT:\n", result.stdout || "(empty)");
console.log("\nSTDERR:\n", result.stderr || "(empty)");

if (result.error) {
  console.error("\nExecution error:", result.error.message);
}
