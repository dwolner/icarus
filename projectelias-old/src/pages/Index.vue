<template>
    <q-page class="flex flex-center">
        <!-- <div id="top" class="hero">
            <div class="container text-white" align="center">
                <img src="statics/logos/RichardElias_CompassLockupHorizontal-White.png" style="max-width: 20rem;" />
                <h2 class="q-my-sm" style="letter-spacing: 2px; text-transform: uppercase;">Richard Elias Team</h2>
                <h5 class="q-my-md">Helping you find your place in San Diego.</h5>
                <q-btn flat color="light">
                    <div class="full-width" style="font-size: .8rem;">See More</div>
                    <q-icon name="fas fa-chevron-down" size="xs" style="font-size: .8rem;" />
                </q-btn>
            </div>
            <video id="bgvid" autoplay="autoplay" preload="metadata" loop="loop" muted class="playing">
                <source src="//videos.ctfassets.net/3xf6g0o5qdho/1uc2E01DTu8ASyAKYoq4oK/40e19ac85c90529f143fec0f001b1cda/MV_About_Header_1080p_.mp4" type="video/mp4" />
            </video>
        </div> -->

        <div id="top" class="hero">
            <div class="container text-white" align="center">
                <img src="statics/logos/RichardElias_CompassLockupHorizontal-White.png" style="max-width: 20rem;" />
                <h2 class="q-my-sm" style="letter-spacing: 2px; text-transform: uppercase;">Richard Elias Team</h2>
                <h5 class="q-my-lg">Coming soon!</h5>
            </div>
            <video id="bgvid" autoplay="autoplay" preload="metadata" loop="loop" muted class="playing">
                <source src="//videos.ctfassets.net/3xf6g0o5qdho/1uc2E01DTu8ASyAKYoq4oK/40e19ac85c90529f143fec0f001b1cda/MV_About_Header_1080p_.mp4" type="video/mp4" />
            </video>
        </div>

        <!-- <Concierge /> -->
        
        <MyListings />
    </q-page>
</template>

<script>
import Concierge from '../components/Concierge'
import MyListings from '../components/MyListings'

export default {
    name: 'PageIndex',

    components: {
        Concierge,
        MyListings
    },

    data() {
        return {
            name: '',
            zip: '',
            email: '',
            phone: ''
        }
    },

    methods: {
        onSubmit() {
            // email richard and steve

        },
        
        onReset() {
            this.name = ''
            this.zip = ''
            this.email = ''
            this.phone = ''
        }
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
    height: 100&;
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

@media (min-width: 768px) {
    .hero {
        min-height: 600px;
    }
}

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
