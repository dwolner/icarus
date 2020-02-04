<template>
    <div id="BuyersSellers" class="cx-dotGridBackground" style="width: 100%;">
        <div class="row well container" style="min-height: 100vh; ">
            <div class="col-xs-12 q-pa-xl">
                <div style="position: relative; top: 50%; transform: translateY(-50%);">
                    <div class="row justify-center">
                        <div class="col-sm-12 q-pa-sm q-mb-md">
                            <h3 class="Compass-Serif-Regular">Buying Or Selling?</h3>
                        </div>

                        <div v-for="item in features" align="center" class="col-xs-12 col-sm-6 col-md-4 q-pa-sm">
                            <div class="bg-white q-pa-md full-height">
                                <q-icon :name="item.icon" style="font-size: 3rem;" />
                                <h5 class="q-my-lg">{{ item.title }}</h5>
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-center">
                        <div class="col-xs-12 col-sm-6 q-px-sm q-py-md" align="center">
                            <q-btn class="full-width" color="primary" size="lg" @click="toggleMoreInfo('Buyers')">
                                I am a buyer
                            </q-btn>
                        </div>

                        <div class="col-xs-12 col-sm-6 q-px-sm q-py-md" align="center">
                            <q-btn class="full-width" color="primary" size="lg" @click="toggleMoreInfo('Sellers')">
                                I am a seller
                            </q-btn>
                        </div>
                    </div>

                    <div v-if="showMoreInfo" class="row justify-center relative-position q-mt-lg">
                        <div class="col-xs-12 q-pa-sm" align="center">
                            <h5>Top Videos For {{currentMoreInfoType}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-4 q-pa-sm" v-for="item in currentMoreInfo">
                            <iframe sandbox="allow-scripts" :src="item" frameborder="0" allowfullscreen :width="videoEmbedWidth" :height="videoEmbedHeight"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Team',

    data() {
        return {
            features: [{
                icon: 'far fa-file',
                title: 'Contracts',
                desc: 'We help with all disclosures and contracts necessary in today’s heavily regulated environment.'
            }, {
                icon: 'fas fa-graduation-cap',
                title: 'Experience',
                desc: 'We are well educated in and experienced with the entire sales process.'
            }, {
                icon: 'far fa-handshake',
                title: 'Negotiations',
                desc: 'We act as a “buffer” in negotiations with all parties throughout the entire transaction.'
            }, {
                icon: 'fas fa-dollar-sign',
                title: 'Pricing',
                desc: 'We help you understand today’s real estate values when setting the price of a listing or an offer to purchase.'
            }, {
                icon: 'fas fa-search',
                title: 'Market Conditions',
                desc: 'We simply and effectively explain today’s real estate headlines and decipher what they mean to you.'
            }],

            showMoreInfo: false,
            currentMoreInfoType: null,
            Buyers: ['https://www.simplifyingthemarket.com/en/videos/embed/35238-70afc3829d7f0cdac24400a255ace4ba/60914e4b', 'https://www.simplifyingthemarket.com/en/videos/embed/35238-70afc3829d7f0cdac24400a255ace4ba/7accfd4a', 'https://www.simplifyingthemarket.com/en/videos/embed/35238-70afc3829d7f0cdac24400a255ace4ba/ef5b50ed'],
            Sellers: ['https://www.simplifyingthemarket.com/en/videos/embed/35238-70afc3829d7f0cdac24400a255ace4ba/a19b2bc9', 'https://www.simplifyingthemarket.com/en/videos/embed/35238-70afc3829d7f0cdac24400a255ace4ba/ed23d645', 'https://www.simplifyingthemarket.com/en/videos/embed/35238-70afc3829d7f0cdac24400a255ace4ba/1c3d0d96']
        }
    },

    computed: {
        currentMoreInfo() {
            return this[this.currentMoreInfoType]
        },

        videoEmbedWidth() {
            let width = this.$q.screen.width < 1344 ? this.$q.screen.width : 1344
            return this.$q.screen.width > 599 ? (width - 128) / 3 : (width - 112)
        },

        videoEmbedHeight() {
            return this.videoEmbedWidth * .5625
        }
    },

    methods: {
        toggleMoreInfo(type) {
            if (this.showMoreInfo && type === this.currentMoreInfoType) {
                this.showMoreInfo = !this.showMoreInfo
            }
            if (this.showMoreInfo && type !== this.currentMoreInfoType) {
                this.currentMoreInfoType = type
            } 
            if (!this.showMoreInfo) {
                this.currentMoreInfoType = type
                this.showMoreInfo = !this.showMoreInfo
            }
        }
    }
}
</script>

<style scoped>
#BuyersSellers {
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
