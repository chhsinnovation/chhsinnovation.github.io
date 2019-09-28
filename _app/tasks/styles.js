const paths = require('../config/paths');

const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const gulp = require('gulp');
const log = require('fancy-log');
const postcss = require('gulp-postcss');
const purgecss = require('@fullhuman/postcss-purgecss')

const buildStyles = () => {
  return gulp.src([paths.cssFiles + '/styles.css'])
    .pipe(postcss([
      tailwindcss(paths.configFiles + '/tailwind.config.js'),
      autoprefixer(),
    ]))
    .pipe(gulp.dest(paths.jekyllCssFiles + '/full'))
    .pipe(gulp.dest(paths.siteCssFiles + '/full'))
    .on('error', log.error);
};
gulp.task('build:styles', gulp.parallel(buildStyles));

const purgeStyles = () => {
  return gulp.src([paths.jekyllCssFiles + '/full/styles.css'])
    .pipe(postcss([
      purgecss({
        content: [
          paths.siteHtmlFilesGlob,
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }),
    ]))
    .pipe(gulp.dest(paths.jekyllCssFiles + '/purged'))
    .pipe(gulp.dest(paths.siteCssFiles + '/purged'))
    .on('error', log.error);
};
gulp.task('purge:styles', gulp.parallel(purgeStyles));