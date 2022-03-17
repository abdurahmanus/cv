const path = require("path");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, cls, alt, sizes) {
  const source = path.join(__dirname, "src/_includes/", src);

  let metadata = await Image(source, {
    widths: [300, 600],
    formats: ["avif", "jpeg"],
    outputDir: "./_site/img/",
    urlPath: "img/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
    class: cls,
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

function generateImages(src, widths) {
  let source = path.join(__dirname, "src/_includes/", src);
  let options = {
    widths,
    formats: ["avif", "jpeg"],
    outputDir: "./_site/img",
    urlPath: "img/",
    useCache: true,
    sharpJpegOptions: {
      quality: 99,
      progressive: true,
    },
  };
  // genrate images, ! dont wait
  Image(source, options);
  // get metadata even the image are not fully generated
  return Image.statsSync(source, options);
}

function imageCssBackground(src, selector, widths) {
  const metadata = generateImages(src, widths);
  let markup = [
    `${selector} { background-image: url(${metadata.jpeg[0].url});} `,
  ];
  // i use always jpeg for backgrounds
  metadata.jpeg.slice(1).forEach((image, idx) => {
    markup.push(
      `@media (min-width: ${metadata.jpeg[idx].width}px) { ${selector} {background-image: url(${image.url});}}`
    );
  });
  return markup.join("");
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksShortcode("cssBackground", imageCssBackground);
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
    },
  };
};
