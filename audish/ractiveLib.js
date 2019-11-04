const Ractive = require('ractive');
const loginComp = require('./app/components/login.html');
const navComp = require('./app/components/nav.html');
const newEventComp = require('./app/components/newEvent.html');
const signupComp = require('./app/components/signup.html');
const timelineComp = require('./app/components/timeline.html');
const datePickerRangeComp = require('./app/components/datePickerRange.html');
const dateTimeComp = require('./app/components/dateTime.html');

modules.exports = {
	ractive: function() {
		return new Ractive(this.model)
	},
	model: {
		el: '#pageOutput',
        template: '#pageTemplate',
        partials: {
            loader: '<div class="ui large loader active"></div>',
            smallLoader: '<div class="ui mini inverted loader active"></div>'
        },
        components: {
			login: loginComp,
			nav: navComp,
			newEvent: newEventComp,
			signup: signupComp,
			timeline: timelineComp,
			datePickerRange: datePickerRangeComp,
			dateTime: dateTimeComp,
        },
        data: {
        	getComponent: function(scene) {
	            // console.log("scene: " + scene);
	            if (!scene) {
	                console.log('no scene, just show loader')
	                return 'loader';
	            }
	            if (!!this.partials[scene]) return scene;
	            this.partials[scene] = '<' + scene + '/>';
	            return scene;
	        },
	        rowWidth: function() {
	            var events = this.get('events');
	            return Object.keys(events).length * 304;
	        },
	        menuItem: [{
	            text: "timeline",
	            icon: "calendar",
	            active: true
	        },{
	            text: "profile",
	            icon: "user"
	        },{
	            text: "stats",
	            icon: "line chart"
	        },{
	            text: "tracker",
	            icon: "compass"
	        }]
        },
        data.events: {},
        api: {
        	get: function(route, cb) {
	            var route = 'http://getaudish.com/api/' + route

	            superagent
	                .get(route)
	                .set('Accept', 'application/json')
	                .end(function(err, res){
	                    // alert(res)
	                    if (err) {
	                        k("API ERR: ", err)
	                    }

	                    var text = JSON.parse(res.text)
	                    // k('RES FROM POST - ' + routeLabel + ':', text)
	                    // if (cb) cb(text);
	                    console.log(text)
	                    cb(text)
	                })
	        },
			post: function (route, request, cb) {
	            var route = 'http://getaudish.com/api/' + route

	            superagent
	                .post(route)
	                .send(request)
	                .set('Accept', 'application/json')
	                .end(function(err, res){
	                    // alert(res)
	                    if (err) {
	                        k("API ERR: ", err)
	                    }

	                    var text = JSON.parse(res.text)
	                    // k('RES FROM POST - ' + routeLabel + ':', text)
	                    // if (cb) cb(text);
	                    console.log(text)
	                    cb(text)
	                })
	        }
        },
        makeFakeEvents: function() {
            var tempArr = [];
            var tempObj = {};
            for (var i = 0; i < 6; i++) {
                var date = faker.fake("{{date.future}}");
                var newEvent = {}
                newEvent.title = "Beauty And The Beast"
                newEvent.when = moment(date).format("MM/DD/YY h:mm a")
                newEvent.role = faker.fake("{{name.jobType}}")
                newEvent.theater = "Fulton Theater - " + faker.fake("{{address.city}}")
                newEvent.img = "media/Fulton_Opera_House.jpg";
                newEvent.address = faker.fake("{{address.streetAddress}}");
                newEvent.url = faker.fake("{{internet.url}}");
                newEvent.call = "Open";
                newEvent.equity = "ECC";
                newEvent.contract = moment(faker.fake("{{date.future}}")).format("MM/DD/YY") + " - " + moment(faker.fake("{{date.future}}")).format("MM/DD/YY");
                newEvent.date = {};
                newEvent.date.full = date;
                newEvent.date.month = moment(date).format("MMM");
                newEvent.date.day = moment(date).format("Do");
                newEvent.date.year = moment(date).format("YYYY");
                
                tempArr.push(newEvent)
            }
            console.log(tempArr)
            tempArr.sort(function(a, b) {
                var a = moment(a.when).format('X')
                var b = moment(b.when).format('X')
                return a > b ? 1 : b > a ? -1 : 0
            })
            tempArr.forEach(function(event) {
                tempObj[faker.fake("{{random.words}}")] = event;
            })
            console.log(tempObj)
            return tempObj;
            
            // {
            //     b89293fb2839f: {
            //         title: "Beauty And The Beast",
            //         when: "Aug. 29th 2016 @ 2:45 PM",
            //         role: "Belle",
            //         theater: "Fulton Theater - Lancaster",
            //         img: 'media/Fulton_Opera_House.jpg',
            //         address: "1234 Broadway Flr: 5, Suite 506 New York, NY 12345",
            //         url: "Cnn.com",
            //         call: "Open",
            //         equity: "ECC",
            //         contract: "3/12/17-3/29/17",
            //         date: {
            //             month: "Dec.",
            //             day: "10",
            //             year: "2016"
            //         }
            //     },
            // }
        },
        oninit: function() {
            var self = this;
            
            // var events = self.makeFakeEvents()
            // this.set('events', events)

            var token = localStorage.getItem('loginToken')
            console.log(token)
            if (token) {
                this.set('scene', 'timeline')
            } else {
                this.set('scene', 'login')
            }
            
            this.on('*.menuTap', function(e) {
                console.log(e)
                self.set('menuItem.*.active', false)
                self.set('menuItem.' + e.keypath.split('.')[1] + '.active', true)
                self.set('scene', e.context.text)
            })
            
            this.on('*.newEvent', function(e) {
                console.log(e)
                self.set('scene', 'newEvent')
            })
            
            this.on('*.saveEvent', function(e) {
                console.log(e)
                var eventInfo = self.findComponent('newEvent').get('')
                k(eventInfo)
                var req = eventInfo
                self.api.post('newEvent', req, function(res) {
                    console.log(res)
                })
                self.set('scene', 'timeline')
            })
            
            this.on('*.cancelNewEvent', function(e) {
                console.log(e)
                self.set('scene', 'timeline')
            })

            if (window.innerWidth < 480) {
                this.set('isPhone', true)
            }

            window.onresize = function() {
                if (window.innerWidth < 480) {
                    self.set('isPhone', true)
                } else {
                    self.set('isPhone', false)
                }
            }

            this.observe('events', function(n, o) {
                if (n) localStorage.setItem('events', JSON.stringify(n))
            })

        }
	}
}