<template>
    <div id="Concierge" class="row container cx-dotGridBackground" style="min-height: 100vh;">
        <div class="col-sm-12 col-md-6 q-pa-xl">
            <div style="position: relative; top: 50%; transform: translateY(-50%);">
                <div class="q-pa-md">
                    <h3 class="Compass-Serif-Regular">Compass Concierge</h3>
                    <p>Get fronted for the cost of home improvement services with no interest — ever.</p>
                    <p>Compass Concierge is the hassle-free way to sell your home faster and for a higher price with services like staging, flooring, painting, and more.</p>
                </div>
                <div id="contact-profile" class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4 q-pa-md">
                        <img src="https://d2787ndpv5cwhz.cloudfront.net/d2557d28756d2818f42b4c7e4bf61bf9712ddcf0/300x300.jpg" style="max-width: 100%;" />
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-8 q-pa-md">
                        <h5>Learn how Richard can help sell your home faster and for a higher price with Concierge.</h5>
                        <div>
                            <p class="q-my-sm"><strong>Richard Elias</strong> | Realtor</p>
                            <p class="q-my-sm">richard.elias@compass.com</p>
                            <p class="q-my-sm">M: 619.672.2020</p>
                        </div>
                    </div>
                    <div class="col-12">
                        <q-form @submit="onSubmit" @reset="onReset" class="row">
                            <q-input v-model="name" class="col-6 q-pa-md bg-white" filled lazy-rules label="Your name" :rules="[val => (val && val.length > 0) || 'Please type something']" />

                            <q-input v-model="zip" class="col-6 q-pa-md bg-white" filled lazy-rules label="Your zip" :rules="[val => (val && val.length > 0) || 'Please type something']" />

                            <q-input v-model="email" class="col-6 q-pa-md bg-white" filled lazy-rules label="Your email" :rules="[val => (val && val.length > 0) || 'Please type something']" />

                            <q-input v-model="phone" class="col-6 q-pa-md bg-white" filled lazy-rules label="Your number" :rules="[val => (val && val.length > 0) || 'Please type something']" />

                            <div class="q-pa-md">
                                <q-btn label="Work with Richard" type="submit" color="primary" />
                                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                            </div>
                        </q-form>

                        <p v-if="conciergeFormSuccess" class="q-my-md">Thank you! Richard will be in touch soon.</p>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="col-sm-12 col-md-6 relative-position"
            style="min-height: 300px; background: url('//images.ctfassets.net/qaddfuc6mowj/6tU1J1fJ9F62gwS3H7xs2Q/f8653385d2bc8a04e2c881b9d254001b/Concierge2.gif'); background-size: cover; background-repeat: no-repeat; background-position: 50%;"
        >
            <div class="center">
                <q-btn flat @click="showConciergePromo = true">
                    <q-icon name="fas fa-play-circle" color="white" style="font-size: 4rem;" />
                </q-btn>
            </div>
        </div>

        <q-dialog v-model="showConciergePromo" @show="showVideo = true" @hide="showVideo = false">
            <q-card>
                <q-card-section>
                    <q-btn class="absolute" round size="sm" color="white" @click="showConciergePromo = false" style="top: .5rem; right: .5rem;">
                        <q-icon name="fas fa-times" color="black" />
                    </q-btn>
                    <video v-if="showVideo" autoplay controls src="statics/30secondprogramoverview.mp4" style="width: 100%;" />
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
            name: '',
            zip: '',
            email: '',
            phone: '',
            conciergeFormSuccess: false,
            showConciergePromo: false,
            showVideo: false,
        }
    },

    methods: {
        onSubmit() {
            // email richard and steve
            this.conciergeFormSuccess = true
        },

        onReset() {
            this.name = ''
            this.zip = ''
            this.email = ''
            this.phone = ''
        },
    },
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
