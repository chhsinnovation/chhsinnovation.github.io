module.exports = {
  mode: process.env.ELEVENTY_ENV || 'development',
  entry: {
    app: __dirname + '/src/javascript/app.js',
  },
  output: {
    path: __dirname + '/src/compiled', // `/dist` is the destination
    filename: 'app.compiled.js',
  },
  module: {
    rules: [{
        test: /\.js$/, // rule for .js files
        exclude: /node_modules/,
        loader: "babel-loader" // apply this loader for js files
      }
    ]
  }
};