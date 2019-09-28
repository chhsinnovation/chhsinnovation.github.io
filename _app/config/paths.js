let paths = {};

// Directory locations.
paths.appDir = '_app/'; // The files Gulp will handle.
paths.jekyllDir = ''; // The files Jekyll will handle.
paths.jekyllAssetsDir = 'assets/'; // The asset files Jekyll will handle.
paths.siteDir = '_site/'; // The resulting static site.
paths.siteAssetsDir = '_site/assets/'; // The resulting static site's assets.

// Folder naming conventions.
paths.postFolderName = '_posts';
paths.draftFolderName = '_drafts';
paths.fontFolderName = 'fonts';
paths.imageFolderName = 'images';
paths.scriptFolderName = 'scripts';
paths.stylesFolderName = 'styles';
paths.configFolderName = 'config';

// App files locations.
paths.cssFiles = paths.appDir + paths.stylesFolderName;
paths.jsFiles = paths.appDir + paths.scriptFolderName;
paths.imageFiles = paths.appDir + paths.imageFolderName;
paths.fontFiles = paths.appDir + paths.fontFolderName;
paths.configFiles = paths.appDir + paths.configFolderName;

// Jekyll files locations.
paths.jekyllPostFiles = paths.jekyllDir + paths.postFolderName;
paths.jekyllDraftFiles = paths.jekyllDir + paths.draftFolderName;
paths.jekyllCssFiles = paths.jekyllAssetsDir + paths.stylesFolderName;
paths.jekyllJsFiles = paths.jekyllAssetsDir + paths.scriptFolderName;
paths.jekyllImageFiles = paths.jekyllAssetsDir + paths.imageFolderName;
paths.jekyllFontFiles = paths.jekyllAssetsDir + paths.fontFolderName;

// Site files locations.
paths.siteCssFiles = paths.siteAssetsDir + paths.stylesFolderName;
paths.siteJsFiles = paths.siteAssetsDir + paths.scriptFolderName;
paths.siteImageFiles = paths.siteAssetsDir + paths.imageFolderName;
paths.siteFontFiles = paths.siteAssetsDir + paths.fontFolderName;
paths.siteStyleGuide = paths.siteDir + paths.styleGuideDir;

// Glob patterns by file type.
paths.cssPattern = '/**/*.css';
paths.jsPattern = '/**/*.js';
paths.imagePattern = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';
paths.markdownPattern = '/**/*.+(md|MD|markdown|MARKDOWN)';
paths.htmlPattern = '/**/*.html';
paths.xmlPattern = '/**/*.xml';

// APP files globs
paths.cssFilesGlob = paths.cssFiles + paths.cssPattern;
paths.jsFilesGlob = paths.jsFiles + paths.jsPattern;
paths.imageFilesGlob = paths.imageFiles + paths.imagePattern;

// Jekyll files globs
paths.jekyllPostFilesGlob = paths.jekyllPostFiles + paths.markdownPattern;
paths.jekyllDraftFilesGlob = paths.jekyllDraftFiles + paths.markdownPattern;
paths.jekyllHtmlFilesGlob = paths.jekyllDir + paths.htmlPattern;
paths.jekyllXmlFilesGlob = paths.jekyllDir + paths.xmlPattern;
paths.jekyllImageFilesGlob = paths.jekyllImageFiles + paths.imagePattern;

// Site files globs
paths.siteHtmlFilesGlob = paths.siteDir + paths.htmlPattern;

module.exports = paths;