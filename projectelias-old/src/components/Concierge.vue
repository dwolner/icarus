<template>
    <div id="Concierge" class="cx-dotGridBackground" style="width: 100%;">
        <div class="row well container" style="min-height: 100vh; ">
            <div class="col-xs-12 col-md-6 q-pa-xl">
                <div style="position: relative; top: 50%; transform: translateY(-50%);">
                    <div class="q-pa-sm">
                        <h3 class="Compass-Serif-Regular q-mb-md">Compass Concierge</h3>
                        <p>Get fronted for the cost of home improvement services with no interest — ever.</p>
                        <p>Compass Concierge is the hassle-free way to sell your home faster and for a higher price with services like staging, flooring, painting, and more.</p>
                    </div>
                    <div id="contact-profile" class="row">
                        <div class="col-xs-12 col-sm-6 col-md-4 q-pa-sm">
                            <img src="statics/team/richard_square.jpg" style="max-width: 100%;" />
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-8 q-pa-sm">
                            <h5 class="q-mb-md">Learn how Richard can help sell your home faster and for a higher price with Concierge.</h5>
                            <div>
                                <p class="q-my-sm"><strong>Richard Elias</strong> | Realtor</p>
                                <p class="q-my-sm">richard.elias@compass.com</p>
                                <p class="q-my-sm">M: 619.672.2020</p>
                            </div>
                        </div>
                        <div class="col-12 bg-white">
                            <ContactForm inquiryTypeInput="Concierge" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="col-xs-12 col-md-6 relative-position"
                style="min-height: 300px; background: url('//images.ctfassets.net/qaddfuc6mowj/6tU1J1fJ9F62gwS3H7xs2Q/f8653385d2bc8a04e2c881b9d254001b/Concierge2.gif'); background-size: cover; background-repeat: no-repeat; background-position: 50%;"
            >
                <div class="center">
                    <q-btn flat @click="showConciergePromo = true">
                        <q-icon name="fas fa-play-circle" color="white" style="font-size: 4rem;" />
                    </q-btn>
                </div>
            </div>
        </div>

        <q-dialog v-model="showConciergePromo" @show="showVideo = true" @hide="showVideo = false">
            <q-card>
                <q-card-section>
                    <q-btn class="absolute" round size="sm" color="white" @click="showConciergePromo = false" style="top: .5rem; right: .5rem; z-index: 999;">
                        <q-icon name="fas fa-times" color="black" />
                    </q-btn>
                    <video v-if="showVideo" autoplay controls src="statics/30secondprogramoverview.mp4" style="width: 100%;" />
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import ContactForm from './ContactForm'

export default {
    name: 'Concierge',

    components: {
        ContactForm
    },

    data() {
        return {
            showConciergePromo: false,
            showVideo: false
        }
    },

    methods: {
        
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

.center {
    position: relative;
    width: fit-content;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.hero .container {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
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
