import fs from "fs/promises";
import { marked } from "marked";
import makeDir from "make-dir";

const html = await marked.parse(await fs.readFile("./src/cv.md", "utf8"));

const template = await fs.readFile("./public/index.html", "utf-8");

const result = template.replace("{placeholder}", html);

await makeDir("build");

await fs.writeFile("./build/index.html", result, "utf-8");

// copy assets
await makeDir("build/assets");

const assets = await fs.readdir("./public/assets");

assets.forEach(async (asset) => {
  await fs.copyFile(`./public/assets/${asset}`, `./build/assets/${asset}`);
});
