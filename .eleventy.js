const { DateTime } = require("luxon");
const htmlmin = require("html-minifier");
const yaml = require("js-yaml");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require('markdown-it');
const markdownItEmoji = require('markdown-it-emoji');
const markdownItAnchor = require('markdown-it-anchor');

// We need more fancier markdowns!
// Add IDs to headings so we can anchor-link to specific sections on pages.
let markdownAnchorOpts = {
  slugify: (str) => {
    return encodeURIComponent(
      String(str)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g,''));
  },
};

// Assemble the new markdown processor.
let markdownLib = markdownIt({ 
  html: true 
}).use(markdownItAnchor, markdownAnchorOpts).use(markdownItEmoji);


module.exports = (eleventyConfig) => {

  // Just copy these files over to "dist", no processing.
  eleventyConfig.addPassthroughCopy({ 
    "src/images": "assets/images",
    "src/compiled": "assets/compiled"
  });

  // Compress HTML files for production builds.
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

  // Adds syntax highlighting to code blocks.
  eleventyConfig.addPlugin(syntaxHighlight);

  // Ignores the .gitignore file, so 11ty will process our "compiled" folder.
  eleventyConfig.setUseGitIgnore(false);

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (date) => {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat("LLLL d',' yyyy");
  });

  // Set up our custom markdown processor.
  eleventyConfig.setLibrary("md", markdownLib);

  // Template filter for explicit processing of data as markdown.
  eleventyConfig.addFilter('markdownify', (string) => {
    return markdownLib.render(string);
  });

  // Add YAML support for data files.
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  // Sorts posts by author.
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
