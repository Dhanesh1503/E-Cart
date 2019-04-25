/* webpack.config.js
 * Webpack config file to create bundle and place it in dist folder based on Node environment
 * @Author: Dhanesh Pant
 */

var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var DEBUG = false;
var NODE_APP_ENV = process.env.NODE_APP_ENV || 'local';
if(NODE_APP_ENV === 'local'){
  DEBUG = true;
}

var config = {
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  context: path.join(__dirname, 'app'),
  devServer: {
    outputPath: path.join(__dirname, 'dist')
  },
  entry: {
    app: './app',
    vendor: [
      'react',
      'react-router',
      'redux',
      'react-dom',
      'lodash',
      'bluebird',
      'react-bootstrap',
      'history'
    ]
  },
  resolve: {
    root: [ path.join(__dirname, 'app') ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: DEBUG ? '[name].js' : '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_APP_ENV': JSON.stringify(NODE_APP_ENV)
    }),
    new CopyWebpackPlugin([
      { from: 'images', to: 'images' },
      { from: 'styles/vendor', to: 'css/vendor' },
      { from: 'styles/fonts', to: 'css/fonts' }
    ],{
          ignore: [
              '*.scss',
          ],
      })
  ],
  module: {
    loaders: [
      {
        test : /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};


if (DEBUG) {
  config.entry.dev = [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
  ];

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filname: 'vendor.js'
    }),
    new AssetsPlugin({filename: 'assets-dev.json',path: path.join(__dirname, 'dist') })
  ]);
  config.output.publicPath = 'http://localhost:3001/static/';
  config.module.loaders[0].query = {
    "env": {
      "development": {
        "presets": ["react-hmre"]
      }
    }
  };
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filname: '[name].[chunkhash].js'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new AssetsPlugin({filename: 'assets-prod.json',path: path.join(__dirname, 'dist') })
  ]);
}

module.exports = config;
