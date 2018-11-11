<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        id="top"
      >
        <img v-show="!showMenuModal" align="center" alt="Meanwhile logo" src="statics/media/MEANWHILE-GLITCH-slower_edit.gif" style="max-height: 100px; margin: -1.5rem;">

        <q-toolbar-title>
            <h5 v-show="!showMenuModal" class="text-white" style="margin: 0; font-weight: 900; font-style: italic;">meanwhile</h5>
        </q-toolbar-title>

        <q-btn
            flat
            @click="showMenuModal = !showMenuModal"
            aria-label="Menu"
            v-show="!showMenuModal"
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
                <img align="center" alt="Meanwhile logo" src="statics/media/MEANWHILE-GLITCH-slower_edit.gif" style="max-height: 100px; margin: -1.5rem;">

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
                    link
                    inset-delimiter
                >
                    <q-item class="justify-center" @click.native="$router.push('/')">
                        <h4 class="text-white" style="margin: .5rem 0;">Home</h4>
                    </q-item>
                    <q-item class="justify-center" @click.native="scrollTo('')">
                        <h4 class="text-white" style="margin: .5rem 0;">Video</h4>
                    </q-item>
                    <q-item class="justify-center" @click.native="scrollTo('')">
                        <h4 class="text-white" style="margin: .5rem 0;">Design</h4>
                    </q-item>
                    <q-item class="justify-center" @click.native="scrollTo('')">
                        <h4 class="text-white" style="margin: .5rem 0;">Store</h4>
                    </q-item>
                    <q-item class="justify-center" @click.native="$router.push('/contact')">
                        <h4 class="text-white" style="margin: .5rem 0;">Contact</h4>
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
import SocialMedia from '../components/SocialMedia';

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
