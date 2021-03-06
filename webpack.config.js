const path = require('path');
const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const postcss = require('postcss');
const doiuse = require('doiuse');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');
const webpack = require('webpack');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
console.log(`isDev: ${isDev}; isProd: ${isProd}`);

const pages = [];

fs
  .readdirSync(path.resolve(__dirname, 'src', 'pages'))
  .forEach((file) => {
    pages.push(file.split('/', 2));
  });

const htmlPlugins = pages.map(fileName => new HTMLWebpackPlugin(
  {
    filename: `${fileName}.html`,
    template: `./pages/${fileName}/${fileName}.pug`,
    minify: {
      collapseWhitespace: isProd
      // collapseWhitespace: false
    }
  }
));

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ];
  }
  return config;
};

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    }
  }];
  if (isDev) {
    loaders.push('eslint-loader');
  }
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './main.js',
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'docs')
  },
  resolve: {
    alias: {
      '@fonts': path.resolve(__dirname, 'src/theme/fonts'),
      // Force all modules to use the same jquery version.
      'jquery': path.join(__dirname, 'node_modules/jquery/src/jquery'),
    },
    // modules: ['node_modules'],
    extensions: ['.js', '.json'],
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: true,
  },
  devtool: isDev ? 'source-map' : false,
  plugins: [
    new HtmlWebpackPugPlugin({
      adjustIndent: true
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/theme/favicon.png'),
        to: path.resolve(__dirname, 'docs')
      }]
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ].concat(htmlPlugins),
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
          }
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
          }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  autoprefixer({
                    browsers: ['last 2 versions']
                  }),
                ];
              },
            },
          },
          'resolve-url-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              syntax: postcss,
              plugins: function () {
                return [
                  stylelint(),
                  doiuse({
                    browsers: ['ie >= 9', 'last 2 Chrome versions', 'Firefox > 20'],
                    ignore: ['flexbox', 'rem', 'css-resize', 'css-masks', 'object-fit'],
                    ignoreFiles: ['**/normalize.css'],
                    onFeatureUsage: function (usageInfo) {
                      console.log(usageInfo.message);
                    }
                  })
                ];
              },
            },
          },
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(ttf|woff(2)?|eot|svg)$/,
        use: ['file-loader']
      }     
    ]
  }
};