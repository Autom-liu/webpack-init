
var webpack = require('webpack');

module.exports = {
	entry: {
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

}