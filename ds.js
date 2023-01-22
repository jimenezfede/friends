const express = require('express');
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const WebpackBar = require('webpackbar');

const { HMR = false } = process.env;

const SRC_DIR = path.resolve(__dirname, 'client');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = () => {
  const Dev = express.Router();
  if (HMR === 'true') {
    const compiler = webpack(webpackConfig);

    Dev.use(
      webpackDev(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
          excludeModules: /node_modules/,
          all: false,
          colors: true,
          modules: true,
          errorDetails: true,
        },
        writeToDisk: true,
      }),
    );

    Dev.use(
      webpackHot(compiler, {
        log: console.log,
        path: '/__live_reload',
        heartbeat: 1000,
      }),
    );
  }

  return Dev;
};

const webpackConfig = {
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: [
      path.resolve(SRC_DIR, 'index.jsx'),
      'webpack-hot-middleware/client?path=/__live_reload&timeout=100&reload=true',
    ],
  },
  output: {
    path: DIST_DIR,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    publicPath: '*',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // Creates a loading bar
    new WebpackBar(),
    // Clears files in ./dist
    new CleanWebpackPlugin(),
    // generates an html file from template
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_DIR, 'index.ejs'),
    }),
    // Enables Hot Module Replacement [HMR]
    new HotModuleReplacementPlugin(),
    // Allows HMR to work with react 18
    new ReactRefreshPlugin(),
  ],
};