/**
 * webpack2 config file for ng2 AOT compile
 * location : config/webpack.aot.js
 */
let  webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	path = require('path'),
	helpers = require('./helpers');

const ngToolsWebpack = require('@ngtools/webpack');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
console.log(helpers.root('src', 'app', 'app.module#AppModule'));
module.exports = {
  devtool: 'source-map',
  entry: {
    'polyfills': './src/polyfills.ts',
    'app': './src/main.ts',
	'vendor':'./src/vendor.ts'
  },
  resolve: {
    extensions: ['*', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, '../../ngBundle/dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: 'pages/[name].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    // If you want to use jquery in ng2 uncomment this
    /*
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),*/
    new ngToolsWebpack.AotPlugin({
      tsConfigPath: helpers.root('tsconfig-aot.json'),
      basePath: helpers.root(''),
      entryModule: helpers.root('src', 'app', 'app.module#AppModule'),
      mainPath: helpers.root('src', 'main.ts')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'polyfills']
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        htmlLoader: {
          minimize: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
/*    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
          drop_console: true
      },
      output: {
          comments: false
      }
    }),*/
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
};