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
		filename: "./[name].js"
	},
	module: {
		rules: [
			{
				test: /\.coffee$/,
				use: [ "coffee-loader" ]
			},
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: "style-loader", // inject CSS to page
					}, {
						loader: "css-loader", // translates CSS into CommonJS modules
					}, {
						loader: "postcss-loader", // Run post css actions
						options: {
							plugins: function () { // post css plugins, can be exported to postcss.config.js
								return [
									require("precss"),
									require("autoprefixer")
								];
							}
					}
					}, {
						loader: "sass-loader", // compiles SASS to CSS
					}, {
						loader: "resolve-url-loader", // compiles SASS to CSS
					}
				]
			},
			{
				test: /bootstrap\/js\//,
				loader: "imports?jQuery=jquery"
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
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					"url-loader?limit=10000",
					{
						loader: 'img-loader',
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
		new ExtractTextPlugin("style.css")

	],
	resolve: {
		alias: {
			modernizr$: path.resolve(__dirname, ".modernizrrc")
		}
	},
	watch: true
}