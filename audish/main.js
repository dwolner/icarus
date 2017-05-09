'use strict';

const http = require("http");
const path = require("path"); 
const fs = require("fs"); 	
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const rr = require('ractive-render');
const bcrypt = require('bcrypt');

// const appLib = require('./appLib.js');
// const ractiveLib = require('./ractiveLib.js');

// Constants
const PORT = 8082;
const serverUrl = "127.0.0.1";

// App
const app = express();

var inPath = path.join(__dirname + '/app/index.html')
console.log(inPath)

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.engine('html', rr.renderFile);

//api
var apiRouter = express.Router()

app.get('/', function (req, res) {
		res.sendFile(inPath)
 	// var options = {}
 	// app.render(inPath, options, function(res) {
 	// 	console.log(res)
 	// });
})

apiRouter.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
})

app.use('/api', apiRouter)

app.server = http.createServer(app);
app.server.listen(PORT, serverUrl);
console.log('Running on http://localhost:' + PORT);