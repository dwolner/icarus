'use strict';

const http = require("http");
const path = require("path"); 
const fs = require("fs"); 	
const express = require('express');
const rr = require('ractive-render');

// Constants
const PORT = 8085;
const serverUrl = "127.0.0.1";

// App
const app = express();

var inPath = path.join(__dirname + '/index.html')
var inPathDev = path.join(__dirname + '/indexDev.html')
console.log(inPath)

app.use(express.static(__dirname + '/app'));
app.engine('html', rr.renderFile);

app.get('/', function (req, res) {
	res.sendFile(inPath)
	// res.sendFile(inPathDev)
})

app.get('/dev', function (req, res) {
	res.sendFile(inPathDev)
})

app.server = http.createServer(app);
app.server.listen(PORT, serverUrl);
console.log('Running on http://localhost:' + PORT);