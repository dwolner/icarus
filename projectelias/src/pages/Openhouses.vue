<template>
    <q-page class="flex flex-center">
        <div id="openhouses">
            
            <div class="row well q-pa-sm justify-center q-pt-xl q-px-lg">
                <div class="col-12 q-pa-md">
                    <h3 class="text-white Compass-Serif-Regular">Open Houses</h3>
                </div>

                <div v-for="(item, index) in neighborhoods" v-scroll-reveal.reset="{ delay: index * 75, scale: .75, opacity: 0, easing: 'ease-in-out'}" class="col-xs-12 col-sm-6 col-md-4 q-pa-sm cursor-pointer" @click="selectItem(item)">
                    <div class="shadow-4 relative-position" :style="`height: 100%; background-image: url('statics/photos/${item.filename}'); background-size: cover; background-position: 50%; height: 300px;`">
                        <div class="centerHeaderHold q-pa-md">
                            <div style="border: solid 2px white; height: 100%;">
                                <img v-if="item.overlayFilename" :src="`statics/media/${item.overlayFilename}`" style="height: 100%; width: auto; transform: scale(0.7);" />

                                <div v-else class="centerHeader q-pa-md" align="center">
                                    <h6 class="text-white" style="margin: 0; letter-spacing: 0.4rem; line-height: 1.5rem;">{{ item.title }}</h6>
                                    <q-chip v-for="(cat, index) in item.categories" :key="cat + index" size="sm" style="color: white; background: transparent;">
                                        <q-icon class="q-mr-xs" name="fas fa-tag" style="font-size: .6rem;" />
                                        {{ cat }}
                                    </q-chip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 q-pa-md q-my-xl" align="center">
                    <h6 class="text-white Compass-Serif-Regular q-my-md">Question about a propery you've seen? Interested in your own curated collection?</h6>
                    <q-btn class="bg-white" size="lg" @click="$store.commit('globalInquiryType', 'Other'), $root.$emit('showContactFormOverlay')">
                        <q-icon name="fas fa-envelope-open-text" class="q-mr-md" style="font-size: 1.25rem;" />
                        <h6 class="q-mt-xs">Contact Us</h6>
                    </q-btn>
                </div>
            </div>

            <q-dialog v-model="showSelectedItem" style="width: 100%;">
                <div class="relative-position" style="width: 100%; max-width: 1440px;">
                    <q-btn class="absolute" round flat @click="showSelectedItem = false" style="top: 0rem; right: 0; z-index: 999;">
                        <q-icon name="fas fa-times" color="black" style="font-size: 1rem;" />
                    </q-btn>
                    
                    <div class="bg-white q-px-md" style="padding-top: 2.5rem;">

                        <iframe
                            v-if="selectedItem"
                            :src="`https://www.compass.com/c/richard-elias/${ selectedItem.iframeSlug }?agent_id=5c05c8059474a81c5e6ca3a3`"
                            name="myiFrame"
                            width="100%"
                            :height="searchHeight"
                            frameborder="1"
                            marginwidth="0px"
                            marginheight="0px"
                            scrolling="yes"
                            allowfullscreen="allowfullscreen"
                            style="border: 0px #ffffff none;"
                        ></iframe>

                    </div>
                </div>
            </q-dialog>
            
        </div>
    </q-page>
</template>

<script>

export default {
    name: 'Openhouses',
    
    props: ['neighborhood'],

    components: {
        
    },

    data() {
        return {
            neighborhoods: [{
                id: 'downtown',
                title: 'Downtown San Diego',
                filename: 'Downtown.jpg',
                iframeSlug: 'downtown-san-diego-open-houses'
            }, {
                id: 'eastcounty',
                title: 'East County',
                filename: 'East_County.jpg',
                iframeSlug: 'east-county-open-houses'
            }, {
                id: 'lajolla',
                title: 'Exclusive La Jolla Pool Properties',
                filename: 'La_Jolla.jpg',
                iframeSlug: 'exclusive-la-jolla-pool-properties'
            }, {
                id: 'singlefamily',
                title: 'Single Family Homes Under 500k',
                filename: 'Single_Family_Homes.jpg',
                iframeSlug: 'single-family-homes-under-500k'
            }, {
                id: 'carmelvalley',
                title: 'Carmel Valley',
                filename: 'Carmel_Valley.jpg',
                iframeSlug: 'carmel-valley-open-houses'
            }, {
                id: 'northsouthpark',
                title: 'North Park and South Park',
                filename: 'North_Park.jpg',
                iframeSlug: 'north-park-and-south-park-open-houses'
            }],
            selectedItem: null,
            showSelectedItem: false
        }
    },

    computed: {
        searchHeight() {
            return this.$q.screen.height - 160
        }
    },

    methods: {
        selectItem(item) {
            // window.open(item.link, '_blank')

            this.selectedItem = item
            this.showSelectedItem = true
        }
    },

    created() {
        if (this.neighborhood) {
            k('neighborhood: ', this.neighborhood)
            // this.selectItem(this.neighborhoods.find(hood => {
            //     return hood.id === this.neighborhood
            // }))
        }
    }
}
</script>

<style scoped>
    #openhouses {
        width: 100%;
        min-height: calc(100vh - 50px);
        background: #080808;
        position: relative;
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

<style>
    .newsItemContent > h3 {
        font-size: 1rem;
    }

    .webfeedsFeaturedVisual {
        width: 100%;
    }
</style>
