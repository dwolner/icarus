<template>
  <q-page style="background: url('statics/media/MW_repeat_bg.jpg'); background-size: cover; padding-top: 2rem;">

     <div class="row justify-center" align="center" style="background: black; padding: 2rem; max-width: 1100px; width: 100%; margin: 0 auto;">
         <div class="col-sm-12 col-md-6" style="padding: 1rem 2rem;">
             <img src="statics/media/AboutPhoto.png" align="center" style="max-width: 20rem; width: 100%;" />
         </div>
         <div class="col-sm-12 col-md-6" :align="windowWidth < 768 ? 'center' : 'left'" style="padding: 1rem 0;">
             <h6 class="text-white">
                 MEANWHILE is a Film, Commercial and Music Video company -- creating content with cinematic, colorful storytelling.
             </h6>
             <h6 class="text-white">
                 Brian Lipko & Kyle P. Nolan (Creative Director and Managing Producer respectively) perfect each aspect in-house -- valuing originality, integrity, passion, excellence and execution.
             </h6>
         </div>
         <div class="col-12" align="center" style="padding: 2rem;">
             <SocialMedia />
         </div>
     </div>

  </q-page>
</template>

<style>

</style>

<script>
import SocialMedia from '../components/SocialMedia';

export default {
  name: "About",

  props: [""],

  components: {
      SocialMedia
  },

  data() {
    return {

    };
  },

  computed: {
      windowWidth() {
        return this.$store.state.windowWidth;
      },
  },

  methods: {

  },

  watch: {

  },

  created() {

  }
};
</script>
