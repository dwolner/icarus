function Bongo() {
    this.createStamp = Date.now()
    this.id = 'id' + m.data.randomAlphaNumeric(8) + m.data.randomAnimal()
    this.type = ''
    this.template = ''
}

m = {}
m.el = '#pageOutput';
m.template = '#pageTemplate';
m.partials = {
    loader: '<div class="ui large loader active"></div>',
    smallLoader: '<div class="ui mini inverted loader active"></div>'
}
m.data = {}
m.data.bongos = {}
m.data.bongoTypes = ['project', 'user', 'team', 'task', 'list']
m.data.bongoTemplates = {
    'project': 'projectCard', 
    'user': 'userCard', 
    'team': '', 
    'task': '', 
    'list': 'sortList'
}
m.data.fakelist = [
    { title: 'Firefox',           desc: 'firefox_64x64.png' },
      { title: 'Chrome',            desc: 'chrome_64x64.png'  },
      { title: 'Safari',            desc: 'safari_64x64.png'  },
      { title: 'Opera',             desc: 'opera_64x64.png'   },
      { title: 'Maxthon',           desc: 'maxthon_64x64.png' },
      { title: 'Internet Explorer', desc: 'ie10_64x64.png'    }
]
m.data.randomAnimal = function() {
    var animals = [ "aardvark", "alligator", "alpaca", "antelope", "ape", "armadillo", "baboon", "badger", "bat", "bear", "beaver", "bison", "boar", "buffalo", "bull", "camel", "canary", "capybara", "cat", "chameleon", "cheetah", "chimpanzee", "chinchilla", "chipmunk", "cougar", "cow", "coyote", "crocodile", "crow", "deer", "dingo", "dog", "donkey", "dromedary", "elephant", "elk", "ewe", "ferret", "finch", "fish", "fox", "frog", "gazelle", "gila monster", "giraffe", "gnu", "goat", "gopher", "gorilla", "grizzly bear", "ground hog", "guinea pig", "hamster", "hedgehog", "hippopotamus", "hog", "horse", "hyena", "ibex", "iguana", "impala", "jackal", "jaguar", "kangaroo", "koala", "lamb", "lemur", "leopard", "lion", "lizard", "llama", "lynx", "mandrill", "marmoset", "mink", "mole", "mongoose", "monkey", "moose", "mountain goat", "mouse", "mule", "muskrat", "mustang", "mynah bird", "newt", "ocelot", "opossum", "orangutan", "oryx", "otter", "ox", "panda", "panther", "parakeet", "parrot", "pig", "platypus", "polar bear", "porcupine", "porpoise", "prairie dog", "puma", "rabbit", "raccoon", "ram", "rat", "reindeer", "reptile", "rhinoceros", "salamander", "seal", "sheep", "shrew", "silver fox", "skunk", "sloth", "snake", "squirrel", "tapir", "tiger", "toad", "turtle", "walrus", "warthog", "weasel", "whale", "wildcat", "wolf", "wolverine", "wombat", "woodchuck", "yak", "zebra" ]
    return animals[Math.round(Math.random() * animals.length)]
}
m.data.randomAlphaNumeric = function(length) {
    var result = ''
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result
}
m.newBongo = function() {
    var bongoToAdd = new Bongo()
    bongoToAdd.title = self.get('newBongoTitle')
    bongoToAdd.type = self.get('newBongoType')
    bongoToAdd.template = m.data.bongoTemplates[self.get('newBongoType')]

    self.set('bongos.' + bongoToAdd.id, bongoToAdd)
}
m.oninit = function() {
    var self = this

    self.on({
        'newBongo': function(e) {
            console.log(e)
            //open bongo modal
            $('#newBongoDetail')
            .modal({
                onVisible: function() {
                    $('#bongoTypes').dropdown()
                }
            })
            .modal('show')
        },
        'expand': function(e) {
            console.log(e)
            self.toggle(e.keypath + '.expanded')
        },
        'openAddItemToList': function(e) {
            console.log(e)
            self.toggle(e.keypath + '.addingItem')
        },
        'checkItemOnList': function(e) {
            console.log(e)
            self.toggle(e.keypath + '.checked')
        },
        'addItemToList': function(e) {
            console.log(e)
            self.push('list', {
                'title': self.get('newItemTitle'),
                'desc': self.get('newItemDesc'),
            })
            self.toggle('addingItem')
            self.set({
                'newItemDesc': '',
                'newItemTitle': ''
            })
        }
    })
}
r = new Ractive(m)