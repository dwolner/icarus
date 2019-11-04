const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

modules.exports = {
	_User: null,
	_Events: null,
	apiRouter: express.Router(),
	initSchema: function() {
		this._User = mongoose.model('User', mongoose.Schema({
	  		userID: String,
		    email: String,
		    password: String
		}));

		this._Events = mongoose.model('Event', mongoose.Schema({
	  		title: String,
	        when: String,
	        role: String,
	        theater: String,
	        img: String,
	        address: String,
	        url: String,
	        call: String,
	        equity: String,
	        contract: String
	    }));
	},
	initRoutes: function() {
		this.apiRouter.use(this.apiLog);

		this.initSchema()

		this.apiRouter.route('/checkUser').post(this.handleCheckUser);
		
		this.apiRouter.route('/newUser').post(this.handleNewUser);

		this.apiRouter.route('/users').get(this.handleGetUsers);

		this.apiRouter.route('/events/:token').get(this.handleGetEvents);

		this.apiRouter.route('/newEvent').post(this.handleNewEvent);

		app.use('/api', apiRouter);

    },
    apiLog: function(req, res, next) {
	    // do logging
	    console.log('Something is happening.');
	    next(); // make sure we go to the next routes and don't stop here
	},
    handleNewUser: function(req, res) {
		console.log(req.body.email, req.body.password)

		this.getAndHashUsers(function(userList) {	
			if (!userList[req.body.email] && req.body.email.indexOf('@') > -1) {
				//check password
				var passHash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
				console.log(passHash)
				
				var newUser = new this._User({
					fullName: req.body.fullName,
					email: req.body.email,
					password: passHash
				})

				newUser.save(function(err, newUser) {
					if (err) {
						res.json( { error: true, errorID: 'saveError'} );
						return console.error(err);
					}
			  		console.log(newUser)
			    	res.json({ error: false, user: newUser });   
				})
			} else {
				//no go
				res.json( { error: true, errorID: 'notValidEmail'} );
			}
		});
	},
	handleGetEvents: function(req, res) {
		console.log(req.params.token)

		this.getAndHashEventsByUser(function(events) {
			if (events[req.params.token]) {
				res.json({ error: false, events: events[req.params.token] });  
			} else {
				res.json( { error: true, errorID: 'notFound'} );
			}
		})
	},
	handleCheckUser: function(req, res) {
		this.getAndHashUsers(function(userList) {
			if (userList[req.body.email]) {
				//check password
				var valid = bcrypt.compareSync(req.body.password, userList[req.body.email].password);
				// console.log(valid)
				if (valid) res.json({ error: false, userID: userList[req.body.email].id })
				if (!valid) res.json({ error: true, errorID: 'passwordInvalid'})
			} else {
				//no go
				res.json( { error: true, errorID: 'notFound'} );
			}
        });
	},
	handleNewEvent: function(req, res) {
		console.log(req.body)
		
		if (req.body.userID) {
			var newEvent = new _Event({
				userID: req.body.userID,
				title: req.body.title,
			    when: req.body.when,
			    role: req.body.role,
			    theater: req.body.theater,
			    img: req.body.img,
			    address: req.body.address,
			    url: req.body.url,
			    call: req.body.call,
			    equity: req.body.equity,
			    contract: req.body.contract
			})

			newEvent.save(function(err, newEvent) {
				if (err) {
					res.json( { error: true, errorID: 'saveError'} );
					return console.error(err);
				}
		  		console.log(newEvent)
		    	res.json({ error: false, newEvent: newEvent });   
			})
		}		
	},
	handleGetUsers: function(req, res) {
        this._User.find(function(err, users) {
            if (err) res.send(err);

            res.json(users);
        });
    },
    getAndHashUsers: function(cb) {
		this.handleGetUsers(function(users) {
	        var userList = {}
	        users.forEach(function(user) {
	        	userList[user.email] = user
	        })
	        cb(userList)
		})
	},
	getAndHashEventsByUser: function(cb) {
		this._Events.find(function(err, events) {
            if (err) res.send(err);
	        var eventList = {}
	        events.forEach(function(event) {
	        	eventList[event.userID] = event
	        })
	        console.log(eventList)
	        cb(eventList)	
	    });
	}

}