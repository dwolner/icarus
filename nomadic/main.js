'use strict';

const http = require("http");
const path = require("path"); 
const fs = require("fs"); 	
const express = require('express');
const mongoose = require('mongoose');
const mongoose_csv = require('mongoose-csv');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const rr = require('ractive-render');

// Constants
const PORT = 8087;
const serverUrl = "127.0.0.1";

// App
const app = express();

var inPath = path.join(__dirname + '/app/index.html')
console.log(inPath)
app.use(express.static(__dirname + '/app'));

// app.engine('html', rr.renderFile);

app.get('/', function (req, res) {
 	res.sendFile(inPath)
 	// var template = inPath
 	// var options = {}
 	// app.render(template, options, function(res) {
 	// 	console.log(res)
 	// });
});

app.get('/dev', function (req, res) {
 	res.sendFile(path.join(__dirname + '/app/index-dev.html'))
 	// var template = inPath
 	// var options = {}
 	// app.render(template, options, function(res) {
 	// 	console.log(res)
 	// });
});

// //api
// var apiRouter = express.Router(); 

// //db
// var dburl = 'mongodb://localhost:27017/nb';
// mongoose.connect(dburl)

// var Email;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!

//   	var emailSchema = mongoose.Schema({
// 	    email: String
// 	});

// 	emailSchema.plugin(mongoose_csv);

// 	Email = mongoose.model('Email', emailSchema);

// 	apiRouter.use(function(req, res, next) {
// 	    // do logging
// 	    console.log('Something is happening.');
// 	    next(); // make sure we go to the next routes and don't stop here
// 	});

// 	apiRouter.route('/saveEmail/:email')
// 	.get(function(req, res) {
// 		console.log(req.params.email)

// 		var newEmail = new Email({
// 			email: req.params.email
// 		})

// 		newEmail.save(function(err, newEmail) {
// 			if (err) return console.error(err);
// 	  		console.log(newEmail)
// 	    	res.json({ message: newEmail });   
// 		})

// 	});

// 	apiRouter.route('/emails')
// 	.get(function(req, res) {
//         Email.find(function(err, emails) {
//             if (err) res.send(err);

//             res.json(emails);
//         });
//     });

//     apiRouter.route('/csv')
// 	.get(function(req, res) {
//         res.writeHead(200, {
// 	        'Content-Type': 'text/csv',
// 	        'Content-Disposition': 'attachment; filename=sample.csv'
// 	    });
//         Email.find().sort({ _id : 1 }).limit(1000).csv(res)
//     });
// });

// app.use(session({ secret: 'thebigone' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session
// app.use('/api', apiRouter);

app.server = http.createServer(app);
app.server.listen(PORT, serverUrl);
console.log('Running on http://localhost:' + PORT);