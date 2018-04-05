<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
  	<q-layout
    ref="layout"
    view="lHh Lpr fff"
    sides="sides"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" color="white">
      <q-toolbar-title>
        <img src="./assets/aq.png" style="height: 40px;" />
      </q-toolbar-title>
      <q-btn
        flat
        @click="$refs.layout.toggleRight()"
      >
        <q-icon name="menu" color="black" />
      </q-btn>
    </q-toolbar>
    
    <router-view />

    <div slot="right">
      <q-list link style="height: 100%;">
      
        <q-item v-for="item in navData" :key="item.id" exact @click="navAction(item)">
          <q-item-side>
            <q-icon :name="item.icon" />
          </q-item-side>
          <q-item-main style="margin: 0; text-align: center;">
            {{item.title}}
          </q-item-main>
        </q-item>

      </q-list>
    </div>

  </q-layout>
    
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
  computed: {

  },

  data () {
    return {
      sides: {
        right: false
      },
      navData: [{
        pageRoute: '/',
        icon: 'home',
        title: 'Home',
        id: 'home'
      }, {
        pageRoute: '/about',
        icon: 'play_circle_outline',
        title: 'About',
        id: 'about'
      }, {
        pageRoute: '/shop',
        icon: 'credit_card',
        title: 'Shop',
        id: 'shop'
      }]
    }
  },
}
</script>

<style>
  .hero {
    height: 400px;
    background: #23A2A7;
  }
</style>
