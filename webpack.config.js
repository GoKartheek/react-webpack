const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');

// const srcFolder = path.join(__dirname, 'src', 'components');
// console.log('srcFolder ', srcFolder)
// const components = fs.readdirSync(srcFolder);
// const files = [];
// const entries = {};

// components.forEach(component => {
//   const name = component.split('.')[0];
//   const file = `./src/components/${name}`;
//   files.push(file);
//   entries[name] = file;
// });

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/components'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: __dirname + '/src/', to: __dirname + '/dist/' },
      ],
    }),
  ],
};