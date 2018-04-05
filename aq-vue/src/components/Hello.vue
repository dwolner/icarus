<template>
  <div>
    <div class="row hero">
      <img src="http://meanwhilela.com/img/aqface.png" style="height: 100%; width: auto; margin: 0 auto;" />
    </div>

    <div class="row">
      
      <div v-if="!singleCard" class="col-xs-12 col-sm-6 col-md-4 col-lg" v-for="card in cards" :key="card.title" style="padding: .5rem 0;" @click="singleCard = card">
        <q-card style="height: 100%;">
          <q-card-media>
            <img :src="'http://meanwhilela.com/img/' + card.image">
          </q-card-media>

          <q-card-title>
            {{card.title}}
          </q-card-title>
        </q-card>
      </div>

      <div v-if="singleCard" class="col-12">
        <q-card class="relative-position">
          <q-icon name="close" style="position: absolute; top: .5rem; right: .5rem; cursor: pointer; font-size: 1.5rem;" @click="singleCard = ''" />
          <q-card-title>
            {{singleCard.title}}
          </q-card-title>

          <q-card-main>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/334140649&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

            <p>{{singleCard.desc}}</p>
          </q-card-main>
        </q-card>
      </div>

    </div>
  </div>
</template>

<script>


export default {
  name: 'index',
  components: {
    
  },
  data () {
    return {
      singleCard: '',
      cards: [{
        image: 'creditcards.png',
        title: 'CREDIT CARDS',
        desc: "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?"
      }, {
        image: 'fuckwaves.png',
        title: 'FUCKWAVES',
        desc: "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?"
      }, {
        image: 'i-95.jpg',
        title: 'I-95',
        desc: "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?"
      }, {
        image: 'tesla.jpg',
        title: 'TESLA',
        desc: "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?"
      }, {
        image: 'lost.jpg',
        title: 'LOST',
        desc: "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?"
      }]
    }
  },
  computed: {
    
  },
  methods: {
    selectSingleCard(card) {
      this.singleCard = card
    }
  },
  mounted () {
    
  },
  beforeDestroy () {
    
  }
}
</script>

<style>
  .hero {
    height: 400px;
    background: #23A2A7;
  }
</style>
