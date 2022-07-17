const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/Application.js'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
	mode: 'development',
	devtool: 'inline-source-map',
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, './dist'),
		},
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: __dirname.split('\\')[__dirname.split('\\').length - 1],
			template: path.resolve(__dirname, './src/index.html'), // шаблон
			filename: 'index.html', // название выходного файла
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	
}