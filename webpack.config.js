
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

function getHtmlPluginConfig(name, title) {
	return {
		title: title,
		template: './src/view/'+ name +'.html',
		filename: 'view/'+ name +'.html',
		inject: true,
		hash: true,
		chunks: ['commons', name],
	};
}

// 环境变量设置

var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

var config = {
	entry: {
		'commons': ['./src/pages/common/index.js'],
		'index': ['./src/pages/index/index.js'],
		'login': ['./src/pages/login/login.js'],
	},
	output: {
		path: './dist',
		publicPath: '/dist',
		filename: 'js/[name].js'
	},
	externals: {
		'jquery': 'window.jQuery',
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
			{ test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100000&name=img/[name].[ext]' }
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: 'js/base.js'
		}),
		new ExtractTextPlugin('css/[name].css'),
		new HtmlWebpackPlugin(getHtmlPluginConfig('index', '首页')),
	],
}

if(WEBPACK_ENV === 'dev') {
	config.entry.commons.push('webpack-dev-server/client?http://localhost:8088/')
}

module.exports = config;