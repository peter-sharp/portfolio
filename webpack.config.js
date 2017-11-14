const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 * We've enabled ExtractTextPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/extract-text-webpack-plugin
 *
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./src/index.js',
		'./scss/app.scss'
  ],

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '.')
	},
	resolve: {
		modules: [path.resolve(__dirname, "src"), "node_modules"]
	},
	module: {
		rules: [
			{
			 test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg)$/,
			 loader: "file-loader",
			 options: {
				 name: '[name].[ext]'
			 }

		 },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.(scss|css)$/,

				use: ExtractTextPlugin.extract([
          'css-loader?sourceMap&sourceMapContents',
          'resolve-url-loader', 'sass-loader?sourceMap&sourceMapContents'])
			}
		]
	},
	devServer: {
	  contentBase: path.resolve(__dirname, "."),
	  compress: true,
	  port: 9000
	},
	plugins: [
		// new UglifyJSPlugin(),
		new ExtractTextPlugin('[name].bundle.css')
	],
	devtool: 'source-map'
};
