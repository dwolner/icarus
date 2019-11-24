<template>
  <q-page style="background: url('statics/media/MW_repeat_bg.jpg'); background-size: cover;">
    <div align="center" style="padding: 1rem;">
      <img src="statics/media/store.png" :style="`max-height: ${windowWidth > 768 ? '4rem' : '2rem'}; margin: 1rem 0; transform: scale(0.85);`" />
    </div>

    <div style="padding: 1rem; margin: 0 auto; max-width: 1280px;">
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
                                img: false,
                                imgWithCarousel: true,
                                variantTitle: false,
                                description: false,
                                buttonWithQuantity: false,
                                quantity: false,
                            },
                            classes: {
                                mainImageWrapper: 'main-image-wrapper',
                                carouselButton: 'carousel-button',
                                carouselButtonArrow: 'carousel-button-arrow',
                                carouselItem: 'shopify-buy__carousel-item'
                            },
                            styles: {
                                product: {
                                    'max-width': 'calc(25% - 20px)',
                                    // 'min-width': 'unset',
                                    'margin': '.5rem',
                                    'border-radius': '.25rem',
                                    background: '#fff',
                                    padding: '1rem',
                                    display: 'flex',
                                    'flex-wrap': 'wrap',

                                    imgWrapper: {
                                        position: 'relative',
                                        height: '0',
                                        width: '100%',
                                        'padding-top': 'calc(100% + 4rem)',
                                    },

                                    img: {
                                        width: '100%',
                                        height: 'auto',
                                        position: 'absolute',
                                        left: '0',
                                        right: '0',
                                        top: '0',
                                        'padding': '1rem',
                                    },

                                    prices: {
                                        width: '100%',
                                    },

                                    buttonWrapper: {
                                        width: '100%',
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
                                mainImageWrapper: {
                                    'position': 'absolute',
                                    'top': 0,
                                    'width': '100%',
                                    'height': '100%'
                                },
                                carouselButton: {
                                    width: '20px',
                                    padding: 0,
                                    'z-index': 999
                                },
                                carouselButtonArrow: {
                                    width: '17px',
                                    'margin-left': 'unset'
                                },
                                'carousel': {
                                    'margin-left': 'unset',
                                    'margin-top': 'unset',
                                    'min-height': '50px',
                                    'position': 'absolute',
                                    'bottom': 0,
                                    'width': '100%'
                                },
                                'carouselItem': {
                                    margin: '0 7px'
                                },
                                'btn-wrapper': {
                                    width: '100%',
                                },
                                title: {
                                    color: '#000',
                                    width: '100%',
                                },
                                price: {
                                    'font-size': '26px',
                                    color: '#000',
                                    width: '100%',
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
                                    display: 'flex',
                                    'flex-wrap': 'wrap',
                                    'margin-left': 0,
                                    'justify-content': 'center'
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
