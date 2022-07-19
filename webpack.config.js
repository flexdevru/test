const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

//const URL_LOADER_LIMIT = 8192

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/Application.ts'),
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			}
		]
    },
	//devtool: 'inline-source-map',
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
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html',
		}),
		new CleanWebpackPlugin({
			dry: false,
			verbose: true,
			dangerouslyAllowCleanPatternsOutsideProject: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: '**/*',
					context: path.resolve(__dirname, './fonts'),
					to: './fonts',
					noErrorOnMissing: true,
				},
				{
					from: '**/*',
					context: path.resolve(__dirname, './data/images'),
					to: './data/images',
					noErrorOnMissing: true,
				},
				{
					from: '**/*',
					context: path.resolve(__dirname, './data/sounds'),
					to: './data/sounds',
					noErrorOnMissing: true,
				}
			],
		})
	],
	
}