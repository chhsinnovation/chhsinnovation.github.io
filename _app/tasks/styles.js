const paths = require('../config/paths');

const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const gulp = require('gulp');
const log = require('fancy-log');
const postcss = require('gulp-postcss');

const buildStyles = () => {
  return gulp.src([paths.cssFiles + '/styles.css'])
    .pipe(postcss([
        tailwindcss(paths.configFiles + '/tailwind.config.js'),
        autoprefixer()
    ]))
    .pipe(gulp.dest(paths.jekyllCssFiles))
    .pipe(gulp.dest(paths.siteCssFiles))
    .on('error', log.error);
};
gulp.task('build:styles', gulp.parallel(buildStyles));