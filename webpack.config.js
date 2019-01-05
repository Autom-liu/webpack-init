
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'commons': ['./src/pages/common/index.js'],
		'index': ['./src/pages/index/index.js'],
		'login': ['./src/pages/login/login.js'],
	},
	output: {
		path: './dist',
		filename: 'js/[name].js'
	},
	externals: {
		'jquery': 'window.jQuery',
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: 'js/base.js'
		}),
		new ExtractTextPlugin('css/[name].css'),
	],
}