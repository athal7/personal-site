const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');

const templates = fs.readdirSync(__dirname + '/app/assets')
                    .filter(f => !f.startsWith('_') && f.endsWith('.jade'))
                    .map(f => f.split('.')[0])

module.exports = {
  mode: 'production',
  entry: {
    app: './app/initialize.js',
    remark: './app/assets/remark.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',         
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      },
      {
        test: /\.jade$/,
        use: ['pug-loader']
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
    publicPath: '/',
  },
  plugins: [
    ...templates.map(name => (
      new HtmlWebpackPlugin({
        inject: false,
        minify: false,
        template: `!!pug-loader!app/assets/${name}.jade`,
        filename: `${name}.html`
      })
    )),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'app/assets/images', 
        to: 'images',
      },
      {
        from: 'app/assets/remark.css',
        to: 'remark.css',
      }
      ]
    }),
  ],
  devServer: {
    contentBase: './public',
    writeToDisk: true
  }
};