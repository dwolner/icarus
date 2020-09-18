<template>
  <q-page style="background: url('statics/media/MW_repeat_bg.jpg'); background-size: cover;">

     <div class="row" align="center" style="max-width: 640px; margin: 0 auto;">
         <div class="col-12" style="padding: 1rem;">
             <h4 class="text-white" style="margin: 1rem 0;">CONTACT</h4>

             <SocialMedia />
         </div>

         <div class="col-6" style="padding: 1rem;">
             <q-btn class="full-width" color="white" outline @click="selectForm('partner')">
                 <h6 class="text-white" style="margin: 1rem;">Partner</h6>
             </q-btn>
         </div>

         <div class="col-6" style="padding: 1rem;">
             <q-btn class="full-width" color="white" outline @click="selectForm('client')">
                 <h6 class="text-white" style="margin: 1rem;">Client</h6>
             </q-btn>
         </div>

         <div class="col-12">
             <iframe :src="formSrc" width="650" height="1500" frameborder="0" style="margin: 0 auto; width: 100%;">Loading...</iframe>
         </div>

     </div>

  </q-page>
</template>

<style>

</style>

<script>
import SocialMedia from '../components/SocialMedia';

export default {
  name: "Contact",

  props: [""],

  components: {
      SocialMedia
  },

  data() {
    return {
        formSelection: 'partner',
        forms: {
            partner: 'https://docs.google.com/forms/d/e/1FAIpQLScDlaAHeDXPu2v7YRg7pYr9uOwLXDyWlK4n4gEUxQ3Byt2FzA/viewform?embedded=true',
            client: 'https://docs.google.com/forms/d/e/1FAIpQLSecI8_6hpwDUIUXtV7PmQEtnYolbb_oM-4jhjg_D4Xmp1L9Qg/viewform?embedded=true'
        }
    };
  },

  computed: {
      formSrc() {
          return this.forms[this.formSelection]
      }
  },

  methods: {
      selectForm(id) {
          this.formSelection = id
      }
  },

  watch: {

  },

  created() {

  }
};
</script>
