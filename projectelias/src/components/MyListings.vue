<template>
    <div id="MyListings">
        <div class="row well container">
            <div class="col-xs-12">
                <div style="position: relative; top: 50%; transform: translateY(-50%);">
                    <div class="row">
                        <div class="col-12 q-pt-xl q-px-xl" style="padding-bottom: 0;">
                            <h3 class="text-white Compass-Serif-Regular">Listings</h3>
                        </div>

                        <div v-if="$q.screen.width > 767" class="col-12 row justify-center q-pt-xl q-px-xl">
                            <div v-for="(item, index) in listings" v-scroll-reveal.reset="{ delay: index * 75, scale: .75, easing: 'ease-in-out', rotate: { y: 90 }}" class="col-xs-12 col-sm-6 col-md-6 col-lg-4 q-pa-sm cursor-pointer" @click="selectListing(item)">
                                <div class="shadow-4 relative-position" :style="`height: 100%; background: url(' ${item.media[0].originalUrl}'; background-size: cover; background-position: 50%; height: 300px;`">
                                    <div class="centerHeaderHold q-pa-md">
                                        <div style="border: solid 2px white; height: 100%;">
                                            <img v-if="item.overlayFilename" :src="`statics/media/${item.overlayFilename}`" style="height: 100%; width: auto; transform: scale(0.7);" />

                                            <div v-else class="centerHeader q-pa-md">
                                                <h6 align="center" class="text-white" style="margin: 0; letter-spacing: 0.4rem; line-height: 1.5rem;">{{ item.location.prettyAddress }}</h6>
                                                <!-- <q-chip v-for="tag in item.tags" @click="selectTag(tag)" small style="margin: .5rem; cursor: pointer;">#{{tag}}</q-chip> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <template v-else>
                            <q-carousel
                                v-model="slideIndex"
                                class="col-12 rounded-borders"
                                control-color="white"
                                transition-prev="slide-right"
                                transition-next="slide-left"
                                dark
                                animated
                                swipeable
                                navigation
                                padding
                                arrows
                                infinite
                                style="background: #080808;"
                            >
                                <q-carousel-slide v-for="(item, index) in listings" :key="index" :name="item.location.prettyAddress" class="column no-wrap flex-center full-width" style="padding: 4rem 0 4rem;" @click="selectListing(item)">
                                    <div class="shadow-4 relative-position" :style="`height: 100%; width: 100%; background: url(' ${item.media[0].originalUrl}'; background-size: cover; background-position: 50%; height: 300px;`">
                                        <div class="centerHeaderHold q-pa-md">
                                            <div style="border: solid 2px white; height: 100%;">
                                                <img v-if="item.overlayFilename" :src="`statics/media/${item.overlayFilename}`" style="height: 100%; width: auto; transform: scale(0.7);" />

                                                <div v-else class="centerHeader">
                                                    <h6 align="center" class="text-white" style="margin: 0; letter-spacing: 0.4rem; line-height: 1.5rem;">{{ item.location.prettyAddress }}</h6>
                                                    <!-- <q-chip v-for="tag in item.tags" @click="selectTag(tag)" small style="margin: .5rem; cursor: pointer;">#{{tag}}</q-chip> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </q-carousel-slide>
                            </q-carousel>
                        </template>

                        <div class="col-12 q-pa-xl" align="center">
                            <q-btn class="bg-white" size="lg" @click="$router.push('/search')">
                                <q-icon size="sm" name="fas fa-search" class="q-mr-sm" />
                                <h6>Search for homes</h6>
                            </q-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <q-dialog v-model="showSingleListing">
            <q-card v-if="showSingleListing && singleListing" :style="`width: ${embedWidth}px;`">
                <q-card-section>
                    <q-btn class="absolute" round flat color="white" @click="showSingleListing = false" style="top: .5rem; right: .5rem; z-index: 999;">
                        <q-icon name="fas fa-times" color="black" />
                    </q-btn>

                    <!-- <iframe :src="`https://compass.com${ singleListing.pageLink }`" width="100%" :height="embedHeight" frameborder="0" allowfullscreen="1" referrer="no-referrer"></iframe> -->

                    <div class="row q-pt-lg q-pr-lg">
                        <div class="col-xs-12 col-sm-4">
                            <h6 style="line-height: 1.5rem;">{{ singleListing.location.prettyAddress }}</h6>
                            <p>{{ singleListing.location.city }}, {{ singleListing.location.state }} {{ singleListing.location.zipCode }}</p>
                        </div>
                        <div class="col-xs-6 col-sm-3" :align="$q.screen.width > 767 ? 'center' : 'left'">
                            <h6 style="line-height: 1.5rem;">{{ singleListing.price.formatted }}</h6>
                            <p>Last known price</p>
                        </div>
                        <div class="col-xs-3 col-sm-1" align="center">
                            <h6 style="line-height: 1.5rem;">{{ singleListing.size.bedrooms }}</h6>
                            <p>Beds</p>
                        </div>
                        <div class="col-xs-3 col-sm-1" align="center">
                            <h6 style="line-height: 1.5rem;">{{ singleListing.size.bathrooms }}</h6>
                            <p>Baths</p>
                        </div>
                        <div class="col-xs-12 col-sm-3" :align="$q.screen.width > 767 ? 'center' : 'left'">
                            <h6 style="line-height: 1.5rem;">{{ singleListing.size.squareFeet }} Sq. Ft.</h6>
                            <p>${{ singleListing.price.perSquareFoot.toFixed(0) }} / Sq. Ft.</p>
                        </div>
                    </div>

                    <q-img :src="singleListing.media[0].originalUrl" />

                    <div class="row q-mt-md">
                        <div class="q-pa-xs col-xs-12 col-sm-6">
                            <q-btn class="full-width" size="lg" @click="showSingleListing = false, $store.commit('globalInquiryType', 'Buying'), $root.$emit('showContactFormOverlay')">
                                <h6 class="q-mt-xs">Contact Us</h6>
                            </q-btn>
                        </div>

                        <div class="q-pa-xs col-xs-12 col-sm-6">
                            <q-btn color="black" class="full-width" size="lg" @click="openWindow(`https://compass.com${singleListing.pageLink}`)">
                                <h6 class="q-mt-xs">See More</h6>
                                <q-icon class="q-ml-md" name="fas fa-arrow-right" size="xs" />
                            </q-btn>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    name: 'Concierge',

    data() {
        return {
            listings: null,
            showSingleListing: false,
            singleListing: null,
            slideIndex: ''
        }
    },

    computed: {
        embedWidth() {
            return this.$q.screen.width > 768 ? this.$q.screen.width - 200 : this.$q.screen.width
        },

        embedHeight() {
            return this.$q.screen.height - 200
        },
    },

    methods: {
        getListings(cb) {
            // let req = {
            //     searchQuery: {
            //         start: 0,
            //         num: 24,
            //         sortOrder: 90,
            //         listingTypes: [2],
            //         agentSearch: true,
            //         saleStatuses: [9, 12],
            //         geography: 'san_diego',
            //         listingDetailsAllowPartialMatch: { 'Agent Name': { listValues: ['richard elias'] } },
            //     },
            //     relationTypes: [0]
            // }

            this.api.get('https://richardelias.com/api/listings', res => {
                console.log('listing res: ', res)

                if (res.success) {
                    cb(res.body)
                } else {
                    // error
                }
            })
        },

        formatListings(res) {
            console.log('formatListings: ', res)

            this.listings = res.listingRelations.map(listing => {
                return listing.listing
            })

            this.slideIndex = this.listings[0].location.prettyAddress

            console.log('listings: ', this.listings)
        },

        selectListing(item) {
            console.log('selectListing: ', item)

            this.singleListing = item
            this.showSingleListing = true
        },

        openWindow(link) {
            let options = {}
            window.open(link, '_blank')
        },
    },

    created() {
        // TODO: FOR DEV
        // this.formatListings(dummy)

        this.getListings(res => {
            this.formatListings(res)
        })
    },
}
</script>

<style scoped>
#MyListings {
    width: 100%;
    /* min-height: 100vh; */
    background: #080808;
    position: relative;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.centerHeaderHold {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
    -webkit-transition: background 0.5s, opacity 0.5s;
    transition: background 0.5s, opacity 0.5s;
}

.centerHeader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    padding: 1rem 2.5rem;
}

.centerHeaderHold:hover {
    opacity: 0;
}
</style>
