<template>
    <q-page class="flex flex-center">

        <div id="top" class="hero">
            <div class="container text-white q-pa-lg" align="center">
                <img src="statics/logos/RichardElias_CompassLockupHorizontal-White.png" style="max-width: 18rem;" />
                <h2 class="q-my-sm" style="letter-spacing: 2px; text-transform: uppercase;">Richard Elias Team</h2>
                <h5 class="q-my-md">Helping you find your place in San Diego.</h5>
                <q-btn flat color="light" @click="scrollIt('Concierge', null, -50)">
                    <div class="full-width" style="font-size: .8rem;">See More</div>
                    <q-icon name="fas fa-chevron-down" size="xs" style="font-size: .8rem;" />
                </q-btn>
            </div>
            <video id="bgvid" autoplay="autoplay" preload="metadata" loop="loop" muted class="playing">
                <source src="//videos.ctfassets.net/3xf6g0o5qdho/1uc2E01DTu8ASyAKYoq4oK/40e19ac85c90529f143fec0f001b1cda/MV_About_Header_1080p_.mp4" type="video/mp4" />
            </video>
        </div>

        <Team />

        <BuyersSellers />
        
        <MyListings />

        <Concierge />
        
        <!-- <Homebot /> -->

        <Testimonials />

        <!-- <Lender /> -->
        
        <Contact />

        <q-dialog v-model="showContactFormOverlay" @hide="$store.commit('globalInquiryType', 'General')" style="width: 100%; padding: 1rem;">
            <div class="bg-white relative-position" style="width: 100%; max-width: 750px;">
                <q-btn class="absolute" round flat color="white" @click="showContactFormOverlay = false" style="top: .5rem; right: .5rem; z-index: 999;">
                    <q-icon name="fas fa-times" color="black" />
                </q-btn>
                
                <div class="row q-pa-md">
                    <div class="col-12 q-pa-md">
                        <h6 class="q-my-sm" style="letter-spacing: 2px; text-transform: uppercase;">Richard Elias Team</h6>
                        <h2 class="Compass-Serif-Regular ">Contact</h2>
                    </div>

                    <div class="col-12">
                        <div class="q-mx-md" :style="`border-bottom: 1px solid #999;`"></div>
                    </div>

                    <ContactForm v-if="showContactFormOverlay" class="col-12 q-my-sm q-pa-sm" />

                    <!-- <div class="col-xs-12 col-md-6 q-pa-md" align="center">
                        <h6 class="Compass-Serif-Regular q-my-md">COMPASS</h6>
                        <p>San Diego Real Estate</p>
                        <p>Richard Elias Team | Compass</p>
                        <p>Realtor® DRE #01104411</p>
                    </div>

                    <div class="col-xs-12 col-md-6 q-pa-md" align="center">
                        <h6 class="Compass-Serif-Regular q-my-md">LOCATION</h6>
                        <p style="margin-bottom: 0;">655 W Broadway #1650, San Diego, CA, 92101</p>
                        <p><a @click="showMap = true">Get directions</a></p>
                        <p>619.672.2020</p>
                        <p>richard.elias@compass.com</p>
                    </div> -->
                </div>
            </div>
        </q-dialog>
        
    </q-page>
</template>

<script>
import Concierge from '../components/Concierge'
import MyListings from '../components/MyListings'
import BuyersSellers from '../components/BuyersSellers'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Homebot from '../components/Homebot'
import Lender from '../components/Lender'
import Contact from '../components/Contact'
import ContactForm from '../components/ContactForm'

export default {
    name: 'PageIndex',

    components: {
        Concierge,
        MyListings,
        BuyersSellers,
        Team,
        Testimonials,
        Lender,
        Homebot,
        Contact,
        ContactForm
    },

    data() {
        return {
            showContactFormOverlay: false
        }
    },

    methods: {
        
    },

    mounted() {
        this.$root.$on('showContactFormOverlay', () => { this.showContactFormOverlay = true })
    }
}
</script>

<style scoped>
.hero {
    width: 100%;
    height: calc(100vh - 50px);
    background: #171819;
    position: relative;
    overflow: hidden;
}

.container {
    width: 100%;
    overflow: hidden;
}

.object-fit {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

/* @media (min-width: 768px) {
    .hero {
        min-height: 600px;
    }
} */

.hero .container {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: relative;
    z-index: 100;
}

.hero video {
    -webkit-transition: all 2s cubic-bezier(0.835, 0, 0.19, 1);
    -o-transition: all 2s cubic-bezier(0.835, 0, 0.19, 1);
    transition: all 2s cubic-bezier(0.835, 0, 0.19, 1);
    opacity: 0.75;
    filter: alpha(opacity=0);
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 1;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    background: #171819;
    background-size: cover;
    display: inline-block;
}
</style>
