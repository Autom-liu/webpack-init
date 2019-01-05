
var webpack = require('webpack');

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
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: 'js/base.js'
		})
	],
}