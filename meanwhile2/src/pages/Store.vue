<template>
  <q-page style="background: url('statics/media/MW_repeat_bg.jpg'); background-size: cover;">
    <div align="center" style="padding: 2rem;">
      <h4 class="text-white">Coming soon...</h4>
    </div>

    <!-- <div class="row justify-center" style="padding: 1rem;">
      <div class="col-sm-6 col-md-4 col-lg-2" v-for="item in products" style="padding: .5rem;">
        <div class="cursor-pointer shadow-4 full-width" @click="openWindow(item)">
          <div>
            <img :src="item.image.src" style="max-width: 100%; border-radius: 1rem;" />
          </div>

          <h6 class="text-white" align="center">{{item.title}}</h6>
        </div>
      </div>
    </div>
     -->
  </q-page>
</template>

<style>
</style>

<script>
import SocialMedia from '../components/SocialMedia'

export default {
    name: 'Store',

    props: [''],

    components: {
        SocialMedia,
    },

    data() {
        return {
          products: []
        }
    },

    computed: {},

    methods: {
        getShopifyProducts() {
            this.$axios
                .get('https://meanwhilela.com/api')
                // .get('https://meanwhilelax:Meanwhile22!!@meanwhilela.myshopify.com/admin/api/2019-04/products.json')
                .then((response) => {
                    // handle success
                    console.log('getShopifyProducts: ', response)

                    if (response && response.data) {
                      this.products = response.data.products
                    }
                })
                .catch((error) => {
                    // handle error
                    console.log(error)
                })
        },

        openWindow(item) {
          window.open(`https://meanwhilela.myshopify.com/products/${item.handle}`, '_blank')
        }
    },

    watch: {},

    created() {
		    this.getShopifyProducts()
	  },
}
</script>
