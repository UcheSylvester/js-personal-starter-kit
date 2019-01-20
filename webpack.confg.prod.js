import path from 'path';
// import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true
		})
		// Eliminate any duplicate package
		// new webpack.optimize.deDupePlugin(),
		// Minify JS
		// new webpack.optimize.uglifyJsPlugin()
	],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
