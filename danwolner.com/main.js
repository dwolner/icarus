var port = 8080;
var serverUrl = "127.0.0.1";

var http = require("http");
var path = require("path"); 
var fs = require("fs"); 		

console.log("Starting web server at " + serverUrl + ":" + port);

var validExtensions = {
	".html" : "text/html",			
	".js": "application/javascript", 
	".css": "text/css",
	".txt": "text/plain",
	".jpg": "image/jpeg",
	".gif": "image/gif",
	".png": "image/png"
};
http.createServer( function(req, res) {

	var now = new Date();
	req.url = req.url.replace('/', '')
	var filename = req.url || "index.html";
	// console.log(filename)
	var ext = path.extname(filename);
	// console.log(ext)
	var localPath = __dirname;
	var isValidExt = true;


	if (isValidExt) {
		console.log(localPath, filename)
		localPath += '/app/' + filename
		console.log(localPath)
		fs.exists(localPath, function(exists) {
			if(exists) {
				console.log("Serving file: " + localPath);
				getFile(localPath, res, ext);
			} else {
				console.log("File not found: " + localPath);
				res.writeHead(404);
				res.end();
			}
		});

	} else {
		console.log("Invalid file extension detected: " + ext)
	}

}).listen(port, serverUrl);

function getFile(localPath, res, ext) {
	var mimeType = ext
	if (validExtensions[ext]) mimeType = validExtensions[ext]
	console.log(mimeType)
	fs.readFile(localPath, function(err, contents) {
		if(!err) {
			res.setHeader("Content-Length", contents.length);
			res.setHeader("Content-Type", mimeType);
			res.statusCode = 200;
			res.end(contents);
		} else {
			res.writeHead(500);
			res.end();
		}
	});
}