var r = null
var m = {}

function devMode() {
    var dev = null
        dev = true
    return dev
}

//code setup
window.k = function() {}
// window.k = console.log.bind(console)
if (console && devMode()) window.k = console.log.bind(console)
if (devMode()) Ractive.DEBUG = false

ractiveSetup(function() {
    initRactive()
})

function ractiveSetup(cb) {
    m = {
        scene: 'landing',
        menuItems: [{
        	title: 'WORK',
        	active: 'active',
        	scene: 'imageGrid'
        },{
        	title: 'ABOUT',
        	active: '',
        	scene: 'about'
        },{
        	title: 'CONTACT',
        	active: '',
        	scene: 'contact'
        },],
        workItems: [{
        	imageFilename: '1 TELEPORT.png',
        	title: 'TELEPORT',
            embedURL: 'https://player.vimeo.com/video/181953178?color=ffffff&autoplay=1',
        	description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        },{
        	imageFilename: '2 LUNA CYCLE.png',
        	title: 'LUNA CYCLE',
            embedURL: 'https://player.vimeo.com/video/167947401?color=ffffff&autoplay=1',
        	description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        },{
        	imageFilename: '3 ASICS.png',
        	title: 'ASICS',
            embedURL: 'https://player.vimeo.com/video/143774781?color=ffffff&autoplay=1',
        	description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        },{
        	imageFilename: '4 IN THE NIGHT.png',
        	title: 'THE RITUALS',
            embedURL: 'https://player.vimeo.com/video/134118911?color=ffffff&autoplay=1',
        	description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        },{
        	imageFilename: '5 LIGHTYEAR.png',
        	title: 'LIGHTYEAR',
            embedURL: 'https://player.vimeo.com/video/117845490?color=ffffff&autoplay=1',
        	description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        },{
        	imageFilename: '6 SLEEPING ALONE.png',
        	title: 'SLEEPING ALONE',
            embedURL: 'https://player.vimeo.com/video/157215044?color=ffffff&autoplay=1',
        	description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        },]
    }

    cb()
}

function initRactive() {

    r = new Ractive({
        el: '#pageOutput',
        template: '#pageTemplate',
        data: m,
        partials: {
            loader: '<div class="ui large active loader"></div>'
        },
        oninit: function() {
        	var self = this

            self.set({
                'windowWidth': window.innerWidth,
                'windowHeight': window.innerHeight
            })
            window.onresize = function() {
                self.set({
                    'windowWidth': window.innerWidth,
                    'windowHeight': window.innerHeight
                })
                // k('window size: ', m.windowWidth, m.windowHeight)
            }

        	self.on({
        		'goHome': function() {
        			self.set('scene', 'main')
        			self.set('innerScene', 'imageGrid')
        		},
        		'openCaseStudy': function(e) {
                    k(e.keypath)
        			self.set({
                        'currentCaseStudyIndex': e.keypath.split('.').pop(),
                        'singleInfo': e.context,
                        'innerScene': 'videoPlay'
                    })
        		},
        		'menuTap': function(e) {
        			k(e)
        			self.set('menuItems.*.active', '').then(function() {
        				self.set(e.keypath + '.active', 'active')
        				self.set('innerScene', e.context.scene)
        			})
        		}
        	})
        }
    })
}