const path = require('path');

module.exports = {
	entry: {
		app: './src/index.jsx'
	},
	module: {
		rules: [
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.png|jpe?g|gif|ttf|woff|woff2|eot|svg$/,
				use: {
					loader: 'file-loader'
				}
			}
		]
	},
	node: {
		module: 'empty',
		dgram: 'empty',
		dns: 'mock',
		fs: 'empty',
		http2: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		filename: 'js/[name].[chunkhash].js',
		chunkFilename: 'js/[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	}
};
