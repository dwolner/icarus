<template>
  <q-page style="background: url('statics/media/MW_repeat_bg.jpg'); background-size: cover;">
    <div align="center" style="padding: 1rem;">
      <img src="statics/media/store.png" :style="`max-height: ${windowWidth > 768 ? '4rem' : '2rem'}; margin: 1rem 0; transform: scale(0.85);`" />
    </div>

    <div style="padding: 1rem;">
      <div id="collection-component-dd682f01e24"></div>
    </div>
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
            products: [],
        }
    },

    computed: {
        windowWidth() {
            return this.$store.state.windowWidth;
        }
    },

    methods: {
        getShopifyProducts() {
            this.$axios
                .get('https://meanwhilela.com/api')
                // .get('https://meanwhilelax:Meanwhile22!!@meanwhilela.myshopify.com/admin/api/2019-04/products.json')
                .then(response => {
                    // handle success
                    console.log('getShopifyProducts: ', response)

                    if (response && response.data) {
                        this.products = response.data.products
                    }
                })
                .catch(error => {
                    // handle error
                    console.log(error)
                })
        },

        setupShopifyBuy() {
            var client = ShopifyBuy.buildClient({
                domain: 'meanwhilela.myshopify.com',
                storefrontAccessToken: '483459b396f8a6e77eb8a7aeaf0580fb',
            })

            ShopifyBuy.UI.onReady(client).then(function(ui) {
                ui.createComponent('collection', {
                    id: 135599521856,
                    node: document.getElementById('collection-component-dd682f01e24'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        product: {
                            variantId: 'all',
                            contents: {
                                imgWithCarousel: false,
                                variantTitle: false,
                                description: false,
                                buttonWithQuantity: false,
                                quantity: false,
                            },
                            styles: {
                                product: {
                                    'max-width': 'calc(25% - 20px)',
                                    'margin-left': '20px',
                                    'margin-bottom': '50px',
                                    'border-radius': '.5rem',
                                    background: '#fff',
                                    padding: '1rem',

                                    imgWrapper: {
                                        position: 'relative',
                                        height: '0',
                                        'padding-top': 'calc(75% + 15px)',
                                    },

                                    img: {
                                        height: 'calc(100% - 15px)',
                                        position: 'absolute',
                                        left: '0',
                                        right: '0',
                                        top: '0',
                                    },
                                },
                                button: {
                                    'background-color': '#000',
                                    color: '#fff',
                                    'border-radius': '.5rem',
                                    ':hover': {
                                        'background-color': '#333',
                                        color: '#fff',
                                    },
                                    ':focus': {
                                        'background-color': '#e6e6e6',
                                    },
                                },
                                title: {
                                    color: '#000',
                                },
                                price: {
                                    'font-size': '26px',
                                    color: '#000',
                                },
                                compareAt: {
                                    color: '#000',
                                    'font-size': '22.099999999999998px',
                                },
                            },
                        },
                        cart: {
                            contents: {
                                button: true,
                            },
                            styles: {
                                button: {
                                    'background-color': '#ffffff',
                                    color: '#000000',
                                    ':hover': {
                                        'background-color': '#e6e6e6',
                                        color: '#000000',
                                    },
                                    ':focus': {
                                        'background-color': '#e6e6e6',
                                    },
                                },
                                footer: {
                                    'background-color': '#ffffff',
                                },
                            },
                        },
                        modalProduct: {
                            contents: {
                                img: false,
                                imgWithCarousel: true,
                                variantTitle: false,
                                buttonWithQuantity: true,
                                button: false,
                                quantity: false,
                            },
                            styles: {
                                product: {
                                    'max-width': '100%',
                                    'margin-left': '0px',
                                    'margin-bottom': '0px',
                                },
                                button: {
                                    'background-color': '#ffffff',
                                    color: '#000000',
                                    ':hover': {
                                        'background-color': '#e6e6e6',
                                        color: '#000000',
                                    },
                                    ':focus': {
                                        'background-color': '#e6e6e6',
                                    },
                                },
                            },
                        },
                        toggle: {
                            styles: {
                                toggle: {
                                    'background-color': '#ffffff',
                                    ':hover': {
                                        'background-color': '#e6e6e6',
                                    },
                                    ':focus': {
                                        'background-color': '#e6e6e6',
                                    },
                                },
                                count: {
                                    color: '#000000',
                                    ':hover': {
                                        color: '#000000',
                                    },
                                },
                                iconPath: {
                                    fill: '#000000',
                                },
                            },
                        },
                        productSet: {
                            styles: {
                                products: {
                                    '@media (min-width: 601px)': {
                                        'margin-left': '-20px',
                                    },
                                },
                            },
                        },
                    },
                })
            })
        },

        openWindow(item) {
            window.open(`https://meanwhilela.myshopify.com/products/${item.handle}`, '_blank')
        },
    },

    watch: {},

    created() {
        // this.getShopifyProducts()

        this.setupShopifyBuy()
    },
}
</script>