const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [
				'dist'
			]
		}),
		new MiniCssExtractPlugin({
            filename: "css/index.css"
        }),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/public/index.html')
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.join(__dirname, 'public'),
					to: path.join(__dirname, 'dist')
				},
			],
		})
	],
	module: {
		rules: [
			{
				test: /\.css|s[ac]ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name(module) {
						const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
						return `d4z.${packageName.replace('@', '')}`;
					},
				},
			},
		},
	}
});