const webpack = require('webpack');
const FileListPlugin = require('./CustomPlugin');

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [new FileListPlugin()]
};
