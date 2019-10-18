const gulp  = require('gulp');
const cp = require("child_process");
const log = require('fancy-log');
const del = require('del');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')

const browsersync = require('browser-sync').create();

// Initialize BrowserSync.
function browserSync(done) {
  browsersync.init({
    server: './_site/',
    ghostMode: false,
    logFileChanges: true,
    logLevel: 'debug',
    open: true,
    port: 4000
  });
  done();
}

// Reload BrowserSync as needed.
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean up site assets.
function clean() {
  return del([
    './_site/assets/styles/full/',
    './_site/assets/styles/purged/'
  ]);
}

// Run the PostCSS pipeline, full-fat.
function css() {
  return gulp.src(['./_app/styles/styles.css'])
    .pipe(postcss([
      tailwindcss('./tailwind.config.js'),
      autoprefixer(),
    ]))
    .pipe(gulp.dest('./assets/styles/full/'))
    .pipe(gulp.dest('./_site/assets/styles/full/'))
    .on('error', log.error);
};

// Remove extraneous stuffs from PostCSS-generated files.
function tidyCSS() {
  return gulp.src(['./assets/styles/full/styles.css'])
    .pipe(postcss([
      purgecss({
        content: [
          './_site/**/*.html',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }),
    ]))
    .pipe(gulp.dest('./assets/styles/purged/'))
    .pipe(gulp.dest('./_site/assets/styles/purged/'))
    .on('error', log.error);
};

// The Jekyll build function.
function jekyll(configs) {
  cp.spawnSync(
    "bundle", 
    ["exec", "jekyll", "build", "--config", configs.join(',')], 
    { stdio: "inherit" }
  );
};

// Config files for the 'jekyll build' command, base files only.
function prodJekyll(done) {
  jekyll(['_config.yml']);
  done();
};

// Config files for the 'jekyll build' command, local development goodies included.
function localJekyll(done) {
  jekyll([
    '_config.yml',
    '_config.development.yml'
  ]);
  done();
};

// Watch files
function watchFiles() {
  gulp.watch(
    ["./_app/styles/**/*.css", 
    "./tailwind.config.js"], 
    gulp.series(css, browserSyncReload)
  );
  gulp.watch(
    [
      "./_authors/**/*",
      "./_data/**/*",
      "./_drafts/**/*",
      "./_includes/**/*",
      "./_layouts/**/*",
      "./_pages/**/*",
      "./_posts/**/*"
    ],
    gulp.series(localJekyll, browserSyncReload)
  );
};

const build = gulp.series(clean, gulp.parallel(css, prodJekyll), tidyCSS);
const watch = gulp.parallel(watchFiles, browserSync);

exports.css = css;
exports.tidyCSS = tidyCSS;
exports.localJekyll = localJekyll;
exports.prodJekyll = prodJekyll;
exports.build = build;
exports.watch = watch;


