<template>
    <div>
        <h6 class="text-white" style="margin: 0;">Follow</h6>
        <q-btn v-for="link in links" flat style="padding: .5rem;">
            <q-icon color="white" :name="link.icon" />
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
            link: ''
        }, {
            icon: 'fab fa-instagram',
            link: ''
        }, {
            icon: 'fab fa-twitter',
            link: ''
        }, {
            icon: 'fab fa-facebook',
            link: ''
        }]
    };
  },

  computed: {

  },

  methods: {

  },

  watch: {

  },

  created() {

  }
};
</script>
