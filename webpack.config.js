var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
	entry: {
		page1: ['./client/page1', hotMiddlewareScript]
		// page2: ['./client/page2', hotMiddlewareScript]
	},
	output: {
		filename: './[name]/bundle.js',
		path: path.resolve('./public'),
		publicPath: publicPath
	},
	devtool: 'eval-source-map',
	module: {
		loaders: [{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.scss$/,
            loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
        },{
	      	test: /\.(js|jsx)$/,
	      	loaders: [ 'babel' ],
	      	exclude: /node_modules/
	    }]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
	
};

module.exports = devConfig;