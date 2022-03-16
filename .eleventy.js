module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
