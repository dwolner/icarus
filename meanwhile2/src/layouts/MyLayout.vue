<template>
  <q-layout view="lHh Lpr lFf" style="background: black;">
    <q-layout-header>
      <q-toolbar
        id="top"
        color="black"
        style="max-height: 75px;"
      >
        <a @click="$router.push('/')" style="cursor: pointer;">
            <img align="center" alt="Meanwhile logo" src="statics/media/MEANWHILE-GLITCH-slower_edit.gif" :style="`max-height: 100px; margin: -1rem;`">
            <img align="center" alt="Meanwhile logo" src="statics/media/Meanwhile_text_white_logo.png" :style="windowWidth < 768 ? 'max-height: 25px;' : 'max-height: 40px;'">
        </a>

        <q-toolbar-title>
            <!-- <h5 v-show="!showMenuModal" class="text-white" style="margin: 0; font-weight: 900; font-style: italic;">meanwhile</h5> -->
        </q-toolbar-title>

        <q-btn
            flat
            @click="showMenuModal = !showMenuModal"
            aria-label="Menu"
        >
            <q-icon name="fas fa-bars" color="white" style="font-size: 1.5rem;" />
        </q-btn>

      </q-toolbar>
    </q-layout-header>

    <q-modal
      v-model="showMenuModal"
      :content-css="{ minWidth: '100vw', minHeight: '100vh', background: 'rgba(0,0,0,.8)'}"
    >
        <q-modal-layout>
            <q-toolbar slot="header" style="background: rgba(0,0,0,0) !important; padding: 1rem;">
                <!-- <img align="center" alt="Meanwhile logo" src="statics/media/MEANWHILE-GLITCH-slower_edit.gif" style="max-height: 150px; margin: -2rem;"> -->

                <q-toolbar-title>
                </q-toolbar-title>

                <q-btn flat @click="showMenuModal = false">
                    <q-icon name="fas fa-times" color="white" style="font-size: 1.5rem;" />
                </q-btn>
            </q-toolbar>

            <div>
                <!-- <img align="center" alt="Meanwhile logo" src="statics/media/MEANWHILE-GLITCH-slower_edit.gif" style="max-height: 100px; margin: -1.5rem;"> -->

                <q-list
                    no-border
                >
                    <q-item class="justify-center">
                        <q-btn flat inverted v-ripple class="full-width" color="white" @click="$router.push('/'), showMenuModal = false">
                            <!-- <h4 class="text-white" style="margin: .25rem 0; text-transform: uppercase;">Home</h4> -->
                            <img src="statics/media/home.png" :style="`max-height: ${windowWidth > 768 ? '4rem' : '2rem'}; margin: 1rem 0;`" />
                        </q-btn>
                    </q-item>
                    <q-item class="justify-center">
                        <q-btn flat inverted v-ripple class="full-width" color="white" @click="$router.push('/about'), showMenuModal = false">
                            <!-- <h4 class="text-white" style="margin: .25rem 0; text-transform: uppercase;">About</h4> -->
                            <img src="statics/media/about.png" :style="`max-height: ${windowWidth > 768 ? '4rem' : '2rem'}; margin: 1rem 0;`" />
                        </q-btn>
                    </q-item>
                    <q-item class="justify-center">
                        <q-btn flat inverted v-ripple class="full-width" color="white" @click="$router.push('/contact'), showMenuModal = false">
                            <!-- <h4 class="text-white" style="margin: .25rem 0; text-transform: uppercase;">Contact</h4> -->
                            <img src="statics/media/contact.png" :style="`max-height: ${windowWidth > 768 ? '4rem' : '2rem'}; margin: 1rem 0; transform: scale(0.85);`" />
                        </q-btn>
                    </q-item>
                    <!-- <q-item class="justify-center" >
                        <q-btn flat inverted v-ripple class="full-width" color="white" @click="scrollTo(''), showMenuModal = false">
                            <h4 class="text-white" style="margin: .25rem 0; text-transform: uppercase;">Video</h4>
                        </q-btn>
                    </q-item>
                    <q-item class="justify-center">
                        <q-btn flat inverted v-ripple class="full-width" color="white" @click="scrollTo(''), showMenuModal = false">
                            <h4 class="text-white" style="margin: .25rem 0; text-transform: uppercase;">Design</h4>
                        </q-btn>
                    </q-item> -->
                    <q-item class="justify-center">
                        <q-btn flat inverted v-ripple class="full-width" color="white" @click="$router.push('/store'), showMenuModal = false">
                            <!-- <h4 class="text-white" style="margin: .25rem 0; text-transform: uppercase;">Store</h4> -->
                            <img src="statics/media/store.png" :style="`max-height: ${windowWidth > 768 ? '4rem' : '2rem'}; margin: 1rem 0; transform: scale(0.85);`" />
                        </q-btn>
                    </q-item>
                </q-list>
            </div>

            <div slot="footer" align="right" style="padding: 2rem;">
                <SocialMedia />
            </div>
        </q-modal-layout>
    </q-modal>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from "quasar";
import SocialMedia from "../components/SocialMedia";

export default {
  name: "MyLayout",

  components: {
    SocialMedia
  },

  data() {
    return {
      showMenuModal: false
    };
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },

  methods: {
    openURL,
    scrollTo(hash) {
      this.scrollIt(hash, "", 50);
    },
    scrollTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
.q-layout-header {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
