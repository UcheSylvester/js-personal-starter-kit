// let express = require ('express');
import express from 'express';
import path from 'path';
import open from 'open';

import webpack from 'webpack';
import config from '../webpack.confg.dev';
/* eslint-disable no-console */

let port = 3000;
let app = express();
let compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname, '../src/index.html'));
})

app.get('/users', function(request, response) {
	response.json([
		// Hard coding in some data to serves as data from a database
		{
			"id": 1,
			"firstName": "Uchenna",
			"lastName": "Okoro",
			"email": "okorocode@gmail.com"
		},
		{
			"id": 2,
			"firstName": "Stanley",
			"lastName": "Ezeaku",
			"email": "iftech@gmail.com"
		},
		{
			"id": 3,
			"firstName": "Raphael",
			"lastName": "Ajima",
			"email": "ajima@gmail.com"
		}
	]);
});

app.listen(port, function(err) {
	err ? console.log(err) : open('http://localhost:' + port);
})

