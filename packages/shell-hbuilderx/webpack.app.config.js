const path = require('path')
const webpack = require('webpack')
const { createConfig } = require('@vue-devtools/build-tools')

const target = {
  chrome: 52,
  firefox: 48,
  safari: 9,
  ie: 11,
}

module.exports = createConfig({
  experiments: {
    outputModule: true,
  },
  entry: {
    // devtools: './src/devtools.js',
    backend: './src/backend.ts',
    hook: './src/hook.ts',
  },
  output: {
    path: path.join(__dirname, '/build/app'),
    publicPath: '/build/',
    filename: '[name].js',
    library: {
      type: 'module',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __PLATFORM__: JSON.stringify('app'),
      __global__: 'global',
    }),
  ],
}, target)
