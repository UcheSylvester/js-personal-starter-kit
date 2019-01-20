import path from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackMD5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')

	},
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
		// Generating an external css file with hash in filename
		new ExtractTextPlugin('[name].[chunkhash].css'),
		// Hash the files using MD5 so that their names change when the contents change
		new WebpackMD5Hash(),
		// Use CommonsChunkPlugin to create seperate bundles/chunks
		// of vendor libaries so that they're cached separately
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify : {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			inject: true,

			trackJsToken: "61da20d4a2ef4230870b0538954e4a5c"

		}),

		// Eliminate any duplicate package
		// new webpack.optimize.DeDupePlugin(),
		// Minify JS
		// new webpack.optimize.UglifyJsPlugin()
	],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			// {test: /\.css$/, loaders: ['style','css']}
			// redirecting to use the extracted css file
			{test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
