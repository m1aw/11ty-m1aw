module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy({"static": "."});

  return {
    dir: {
      input: "src",
    },
  };
};
