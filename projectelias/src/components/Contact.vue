<template>
    <div id="Contact" style="background-image: url('statics/Luxury-LA.jpg'); background-size: cover; background-position: 50%;"> 
        <div class="overlay"></div>

        <div class="well row container q-pa-xl" style="position: relative; z-index: 999; color: white;">
            <div class="col-xs-12 q-pt-md q-px-md" align="center">
                <img src="statics/logos/RichardElias_CompassLockupHorizontal-White.png" style="max-width: 20rem; width: 100%;" />
            </div>
            <div class="col-xs-12 q-pa-sm" align="center">
                <!-- <h6 class="Compass-Serif-Regular q-my-md">COMPASS</h6> -->
                <p>San Diego Real Estate</p>
                <p>Richard Elias Team | Compass</p>
                <p>Realtor® DRE #01104411</p>
                <p style="margin-bottom: 0;">655 W Broadway #1650, San Diego, CA, 92101</p>
                <p><a @click="showMap = true">Get directions</a></p>
            </div>
            <div class="col-xs-12 q-pa-sm" align="center">
                <span v-for="(item, index) in compassLocations"><a :href="item.url" target="_blank">{{ item.title }}</a> <span v-if="(index + 1) !== compassLocations.length"> • </span></span>
            </div>
            <div class="col-xs-12 q-py-md q-px-md" align="center">
                <p>While some of the listings on this site may not be our exclusive listings, we have ongoing relationships with all of the listing agents.</p>
                <p class="q-my-lg"><span style="font-style: italic;">Designed and developed by </span> <a href="http://danwolner.com/">Daniel Wolner.</a></p>
            </div>
            <div class="col-xs-6 q-pt-xl q-px-sm" align="left">
                <p style="font-size: .8rem;">© COPYRIGHT 2020 | PRIVACY POLICY</p>
            </div>
            <div class="col-xs-6 q-pt-xl q-px-sm" align="right">
                <p style="font-size: .8rem;">THE RICHARD ELIAS TEAM</p>
            </div>
        </div>

        <q-dialog v-model="showMap">
            <q-card>
                <q-card-section>
                    <q-btn class="absolute" round size="sm" color="white" @click="showMap = false" style="top: .5rem; right: .5rem; z-index: 999;">
                        <q-icon name="fas fa-times" color="black" />
                    </q-btn>
                    <iframe :width="mapWidth" :height="mapWidth" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=655+W+Broadway+Ste.+1650,+San+Diego,+CA,+92101&key=AIzaSyBe1MCdquXljVHyTzXwD194J8Eq6ubdaTs" allowfullscreen></iframe>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    name: 'Contact',

    data() {
        return {
            mapOffset: 150,
            showMap: false,

            compassLocations: [
                { title: 'Carmel Valley', url: 'https://goo.gl/maps/ctwZ8TRrRyT3otcE7' },
                { title: 'Downtown San Diego', url: 'https://goo.gl/maps/13TsfmWnC5P81jMx7' },
                { title: 'La Jolla', url: 'https://goo.gl/maps/bnEd8AawhDhS3CgV6' },
                { title: 'Rancho Santa Fe', url: 'https://goo.gl/maps/K6J9fmxHn7TT6Wbp9' },
                { title: 'Encinitas', url: 'https://goo.gl/maps/8twVKAsvHXxGvNTr6' },
                { title: 'Cardiff', url: 'https://goo.gl/maps/ioJn3YpXu6rWGH8H7' },
            ]
        }
    },

    computed: {
        mapWidth() {
            let width = this.$q.screen.width - this.mapOffset
            return width < 300 ? width : 300
        }
    },

    methods: {
        
    }
}
</script>

<style scoped>
    #Contact {
        width: 100%;
        height: 100%;
        /* min-height: 100vh; */
        background: #171819;
        position: relative;
        overflow: hidden;
    }

    .container {
        width: 100%;
        height: 100&;
        overflow: hidden;
    }

    .overlay {
        background: rgba(0, 0, 0, .5);
        height: 100%;
        width: 100%;
        position: absolute;
    }
</style>
