"use strict";

const webpack = require("webpack");
const path = require("path");
const srcpath = "./src/js/";
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		index: srcpath + "index.coffee",
	},
	output: {
		path: __dirname + "/dist",
		filename: "./[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.coffee$/,
				use: [ "coffee-loader" ]
			},
			{
				test: /\.(scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
					publicPath: '/dist'
				})
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			},
      		{
				test: /\.modernizrrc.js$/,
				use: [ "modernizr-loader" ]
			},
			{
				test: /\.modernizrrc(\.json)?$/,
				use: [ "modernizr-loader", "json-loader" ]
			},
			{
				test: /favicon\.ico$/,
				loader: "url-loader",
					query: { 
					limit: 1,
					name: '[name].[ext]',
				},
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					"url-loader?limit=10000",
					{
						loader: "img-loader",
						options: {
							enabled: true,
							gifsicle: {
								interlaced: false
							},
							mozjpeg: {
								progressive: true,
								arithmetic: false
							},
							optipng: false, // disabled 
							pngquant: {
								floyd: 0.5,
								speed: 2
							},
							svgo: {
								plugins: [
									{ removeTitle: true },
									{ convertPathData: false }
								]
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			Popper: ["popper.js", "default"],

		}),
		new ExtractTextPlugin({
			filename: "style.bundle.css",
			allChunks: true
		})
	],
	resolve: {
		alias: {
			modernizr$: path.resolve(__dirname, ".modernizrrc")
		}
	},
	watch: true
};