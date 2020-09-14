const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: './public',
		port: 666
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/public/index.html')
		}),
	],
	module: {
		rules: [
			{
				test: /\.css|s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
		]
	}
});