const path = require('path')
const { createConfig } = require('@vue-devtools/build-tools')

const target = {
  chrome: 52,
  firefox: 48,
  safari: 9,
  ie: 11,
}

module.exports = createConfig({
  devtool: 'source-map',
  entry: {
    devtools: './src/devtools.js',
  },
  output: {
    path: path.join(__dirname, '/dist/devtools'),
    publicPath: '/build/',
    filename: '[name].js',
  },
}, target)