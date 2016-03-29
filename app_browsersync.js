var express = require('express'),
	path = require('path'),
	consolidate = require('consolidate');

var isDev = process.env.NODE_ENV !== 'production';
var app = express();
var port = 3000;

app.engine('html', consolidate.ejs);
app.set('view engine', 'html');
app.set('views', path.resolve('./server/views'));

app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = false;

if(isDev) {
	var webpack = require('webpack'),
		webpackDevMiddleware = require('webpack-dev-middleware'),
		webpackHotMiddleware = require('webpack-hot-middleware'),
		webpackDevConfig = require('./webpack.config.js');

	var compiler = webpack(webpackDevConfig);

	app.use(webpackDevMiddleware(compiler, {
		publicPath: webpackDevConfig.output.publicPath,
		noInfo: true,
		state: {
			colors: true
		}
	}));

	app.use(webpackHotMiddleware(compiler));

	require('./server/routes')(app);

	var bs = require('browser-sync').create();
	app.listen(port, function(){
		bs.init({
			open: false,
			ui: false,
			notify: false,
			proxy: 'localhost:3000',
			files: ['./server/views/**'],
			port: 8080
		});
		console.log('now is running on 8080')
	});
} else {
	app.use(express.static(path.join(__dirname, 'public')));
	require('./server/routes')(app);
	app.listen(port, function() {
		console.log('App (production) is now running on port 3000!');
	})
}

