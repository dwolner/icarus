window.k = function () {
    if (console) {
        //comment out to stop k logging
        console.log.apply(console, arguments);
    }
}

var r
var m = {}

m.el = '#pageOutput';
m.template = '#pageTemplate';
m.partials = {
    loader: '<div class="ui large loader active"></div>',
    smallLoader: '<div class="ui mini inverted loader active"></div>'
}

m.data = {}

m.data.scene = 'loader'

m.data.theaterList = theaterData

m.data.getComponent = function(scene) {
    // k("scene: " + scene);
    if (!scene) {
        k('no scene, just show loader')
        return 'loader';
    }
    if (!!this.partials[scene]) return scene;
    this.partials[scene] = '<' + scene + '/>';
    return scene;
}
m.data.rowWidth = function() {
    var events = this.get('events');
    return Object.keys(events).length * 304;
}
m.data.momentMonth = function(date) {
    date = Number(date)
    return moment(date).format('MMM')
}
m.data.momentDay = function(date) {
    date = Number(date)
    return moment(date).format('D')
}
m.data.momentYear = function(date) {
    date = Number(date)
    return moment(date).format('YYYY')
}
m.data.calendar = function(date) {
    date = Number(date)
    return moment(date).format('MMMM Do YYYY')
}
m.data.menuItem = [{
    text: "timeline",
    icon: "calendar",
    active: true
},{
    text: "profile",
    icon: "user"
}, {
    text: "settings",
    icon: "settings"
// },{
//     text: "stats",
//     icon: "line chart"
// },{
//     text: "tracker",
//     icon: "compass"
},]

m.data.events = '';
m.makeFakeEvents = function() {
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
    k(tempArr)
    tempArr.sort(function(a, b) {
        var a = moment(a.when).format('X')
        var b = moment(b.when).format('X')
        return a > b ? 1 : b > a ? -1 : 0
    })
    tempArr.forEach(function(event) {
        tempObj[faker.fake("{{random.words}}")] = event;
    })
    k(tempObj)
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
}

m.makeShowList = function() {
    var self = this

    var shows = TRWshows.concat(MTIshows)
    shows.sort()
    k('SHOWS! ', shows)
    this.set('showList', shows)
}

m.grabEvents = function() {
    var self = this;

    self.set('appState.grabbingEvents', true)

    var uid = m.data.userData.uid
    firebase.database().ref('/events/' + uid).once('value').then(function(snapshot) {
        var events = snapshot.val()
        k('SNAPSHOT: ', events)
        // ...
        if (events) {
            // var events = self.hashEvents(res.events)
            self.set('events', events).then(function() {
                self.set('appState.grabbingEvents', false)
            })
        }
    });
}

m.hashEvents = function(events) {
    var tempObj = {};
    events.sort(function(a, b) {
        var a = moment(a.when).format('X')
        var b = moment(b.when).format('X')
        return a > b ? 1 : b > a ? -1 : 0
    })
    events.forEach(function(event) {
        tempObj[event.eventKey] = event;
    })

    return tempObj;
}

m.checkIfUserHasData = function() {
    var uid = null
    if (localStorage.getItem('userData')) uid = JSON.parse(localStorage.getItem('userData')).uid
    k("uid: ", uid)
    return uid
}
    
m.oninit = function() {
    var self = this;
    // var events = self.makeFakeEvents()
    // this.set('events', events)

    if (!self.checkIfUserHasData()) self.set('scene', 'login')
    
    var database = firebase.database();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            k('userData: ', user)
            self.set('userData', user)
            self.set('scene', 'timeline')

            var events = database.ref('events/' + user.uid);
            events.on('child_added', authStateChanged());

            events.on('child_changed', authStateChanged());

            events.on('child_removed', authStateChanged());

        } else {
            // No user is signed in.
            k('bs user')
        }

        function authStateChanged(data) {
            k('authStateChanged! ', data.key, data.val().text, data.val().author);
            self.grabEvents()
        }
    })

    this.on({
        '*.menuTap': function(e) {
            k('menuTap: ',e)
            self.set('menuItem.*.active', false)
            self.set('menuItem.' + e.keypath.split('.')[1] + '.active', true)
            self.set('scene', e.context.text)
        },
        '*.newEvent': function(e) {
            k('newEvent: ',e)
            self.set('scene', 'newEvent')
        }, 
        '*.saveEvent': function(e) {
            k('saveEvent: ',e)
            var eventInfo = self.findComponent('newEvent').get('')
            eventInfo.userID = m.data.userData.uid
            eventInfo.where = eventInfo.streetAddress + ' ' + eventInfo.city + ' ' + eventInfo.state + ' ' + eventInfo.zip
            k('eventInfo: ', eventInfo)

            if (m.data.updateExistingEvent) {
                database
                    .ref('events/' + m.data.userData.uid + '/' + m.data.updateExistingEvent)
                    .update(eventInfo)
                    .then(function(res) {
                        k('update event response: ', res.val())
                        self.set({
                            'scene': 'timeline',
                            'updateExistingEvent': false
                        })
                    })
            } else {
                database
                    .ref('events/' + m.data.userData.uid)
                    .push(eventInfo)
                    .then(function(res) {
                        k('new event response: ', res.val())
                        self.set('scene', 'timeline')
                    })
            }
        }, 
        '*.editEvent': function(e) {
            k('editEvent: ', e)

            self.set({
                'scene': 'newEvent',
                'updateExistingEvent': e.keypath.split('.')[1]
            }).then(function() {
                self.findComponent('newEvent').set(e.context)
            })

        },
        '*.deleteEvent': function(e) {
            k('deleteEvent: ', e)
            database
                .ref('events/' + m.data.userData.uid + '/' + m.data.updateExistingEvent)
                .remove()
        },
        '*.cancelNewEvent': function(e) {
            k('cancelNewEvent: ',e)
            self.set('scene', 'timeline')
        }
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

    this.observe('userData', function(n, o) {
        if (n) localStorage.setItem('userData', JSON.stringify(n))
    })

    this.observe('events', function(n, o) {
        if (n) localStorage.setItem('events', JSON.stringify(n))
    })

    this.makeShowList()

}
// Ractive.load().then(function() { 
    k('init ractive')
    r = new Ractive(m) 
// })