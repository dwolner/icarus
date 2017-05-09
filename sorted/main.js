'use strict';

const http = require("http");
const path = require("path"); 
const fs = require("fs"); 	
const express = require('express');

// Constants
const PORT = 8086;
const serverUrl = "127.0.0.1";

// App
const app = express();

var inPath = path.join(__dirname + '/index.html')
console.log(inPath)
app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
 	res.sendFile(inPath)
 	// var template = inPath
 	// var options = {}
 	// app.render(template, options, function(res) {
 	// 	console.log(res)
 	// });
});

app.server = http.createServer(app);
app.server.listen(PORT, serverUrl);
console.log('Running on http://localhost:' + PORT);