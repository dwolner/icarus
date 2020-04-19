<template>
    <q-page style="background: url('statics/media/MW_repeat_bg.jpg'); background-size: cover; padding: 2rem 1rem;">
        <div class="row justify-center" align="center" style="background: black; padding: 2rem; max-width: 1100px; width: 100%; margin: 0 auto;">
            <div class="col-sm-12 col-md-6" style="padding: 1rem 2rem;">
                <img src="statics/media/AboutPhoto.png" align="center" style="max-width: 20rem; width: 100%;" />
            </div>
            <div class="col-sm-12 col-md-6" :align="windowWidth < 768 ? 'center' : 'left'" style="padding: 1rem 0;">
                <h6 class="text-white">
                    MEANWHILE is a Los Angeles based Film, Commercial and Music Video company -- creating content with cinematic, colorful storytelling.
                </h6>
                <h6 class="text-white">
                    Specializing in music, commercial, promotional, and narrative videos with a focus on colorful art direction, branding, VFX, and originality.
                </h6>
                <h6 class="text-white">
                    Brian Lipko & Kyle P. Nolan (Creative Director and Managing Producer respectively) perfect each aspect in-house -- valuing integrity, passion, excellence and execution.
                </h6>
            </div>
            <div class="col-12" align="center" style="padding: 2rem;">
                <SocialMedia />
            </div>
        </div>

        <div class="row justify-center" align="center" style="background: black; padding: 1rem 0; max-width: 1100px; width: 100%; margin: 1rem auto;">
            <h6 class="text-white uppercase">Clients</h6>
            
            <div class="col-12">
                <div class="slider">
                    <div class="slideTrack" :style="`width: calc(${ slideWidth }px * ${ clients.length * 1.5 });`">
                    
                        <div class="slide" v-for="(item, index) in clients" :style="`width: ${ slideWidth }px;`">
                            <img :src="`statics/media/clients/${ item.filename }`" />
                        </div>
                        <div class="slide" v-for="(item, index) in clients" :style="`width: ${ slideWidth }px;`">
                            <img :src="`statics/media/clients/${ item.filename }`" />
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-center" align="center" style="background: black; padding: 1rem 0; max-width: 1100px; width: 100%; margin: 1rem auto;">
            <h6 class="text-white uppercase">Awards</h6>

            <div class="col-12">
                <div class="slider">
                    <div class="slideTrack" :style="`width: calc(${ slideWidth }px * ${ laurels.length * 1.5 });`">
                    
                        <div class="slide" v-for="(item, index) in laurels" :style="`width: ${ slideWidth }px;`">
                            <img :src="`statics/media/laurels/${ item.filename }`" />
                        </div>
                        
                        <div class="slide" v-for="(item, index) in laurels" :style="`width: ${ slideWidth }px;`">
                            <img :src="`statics/media/laurels/${ item.filename }`" />
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<style>
.slider {
    height: auto;
	overflow: hidden;
	position: relative;
}

.slideTrack {
    display: flex;
    animation: scroll 60s linear infinite;
}

.slide {
    height: auto;
    padding: 0 3rem
}

.slide img {
    transform: translateY(-50%);
    position: relative;
    top: 50%;
    max-width: 100%;
}

@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-300px * 10))}
}
</style>

<script>
import SocialMedia from '../components/SocialMedia'

export default {
    name: 'About',

    props: [''],

    components: {
        SocialMedia,
    },

    data() {
        return {
            slideWidth: 300
        }
    },

    computed: {
        windowWidth() {
            return this.$store.state.windowWidth
        },

        laurels() {
            return this.$store.state.laurels
        },

        clients() {
            return this.$store.state.clients
        },
    },

    methods: {},

    watch: {},

    mounted() {

    },
}
</script>
