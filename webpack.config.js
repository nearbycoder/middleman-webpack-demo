// webpack.config.js
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    main: './assets/javascripts/main.js'
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'assets/javascript/[name].bundle.js',
  },

  module: {
    loaders: [
      {
        test: /assets\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
      },
      {
        test: /assets\/stylesheets\/.*\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader?sourceMap&includePaths[]=" + __dirname + "/node_modules"
        })
      },
      { test: /\.css$/, loader: "style!css" },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "assets/stylesheets/[name].bundle.css",
      allChunks: true
    }),
  ]
};