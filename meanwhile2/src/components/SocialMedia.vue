<template>
    <div>
        <!-- <h6 class="text-white" style="margin: 0;">Follow</h6> -->
        <q-btn v-for="link in links" flat style="padding: .5rem;" @click="goto(link.link)">
            <q-icon color="white" :name="link.icon" style="font-size: 1.5rem;" />
        </q-btn>
    </div>
</template>

<style>

</style>

<script>
export default {
  name: "SocialMedia",

  props: ["urlTag"],

  data() {
    return {
        links: [{
            icon: 'fas fa-envelope',
            link: 'mailto:info@meanwhilela.com'
        }, {
            icon: 'fab fa-instagram',
            link: 'https://www.instagram.com/meanwhilelax/'
        }, {
            icon: 'fab fa-twitter',
            link: 'https://twitter.com/MeanwhileLA'
        // }, {
        //     icon: 'fab fa-facebook',
        //     link: ''
        }]
    };
  },

  computed: {

  },

  methods: {
      goto(link) {
          console.log('goto: ', link)
          window.open(link, '_blank')
      }
  },

  watch: {

  },

  created() {

  }
};
</script>
