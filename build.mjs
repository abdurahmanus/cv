import fs from "fs/promises";
import { marked } from "marked";
import makeDir from "make-dir";

const html = await marked.parse(await fs.readFile("./src/cv.md", "utf8"));

const template = await fs.readFile("./public/index.html", "utf-8");

const result = template.replace("{placeholder}", html);

await makeDir("build");

await fs.writeFile("./build/index.html", result, "utf-8");

const svgs = (await fs.readdir("./public")).filter((fn) => fn.endsWith(".svg"));

svgs.forEach(async (svg) => {
  await fs.copyFile(`./public/${svg}`, `./build/${svg}`);
});
