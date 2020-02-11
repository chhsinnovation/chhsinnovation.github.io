const { DateTime } = require("luxon");
const htmlmin = require("html-minifier");
const yaml = require("js-yaml");
const markdownIt = require('markdown-it')();

module.exports = (eleventyConfig) => {

  eleventyConfig.addPassthroughCopy({ 
    "src/images": "assets/images",
    "src/compiled": "assets/compiled"
  });

  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform("compressHTML", (content, outputPath) => {
      if (outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true
        });
        return minified;
      };
      return content;
    });
  };

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (date) => {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat("LLLL d',' yyyy");
  });


  eleventyConfig.addFilter('markdownify', (string) => {
    return markdownIt.render(string);
  });

  // Add YAML support for data files.
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  eleventyConfig.addCollection("postsByAuthor", (collection) => {
    const posts = collection.getFilteredByTags("engagement");
    const people = collection.getFilteredByTags("person");
    let sorted = {};
    people.forEach((person) => {
      const authoredPosts = posts.filter((post) => {
        return post.data.author == person.fileSlug;
      });
      sorted[person.fileSlug] = authoredPosts;
    });
    return sorted;
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "md", "njk"],
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    passthroughFileCopy: true,
  };
};
