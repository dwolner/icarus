<template>
    <div id="Testimonials" :class="`container cx-dotGridBackground q-px-md q-py-xl`">
        <div class="row well">
            <div class="col-sm-12 q-py-sm q-px-lg">
                <h3 class="Compass-Serif-Regular q-mb-md" :style="$q.screen.width < 768 ? 'font-size: 2.5rem;' : ''">Testimonials</h3>
            </div>

            <div class="col-xs-12 q-pa-sm q-mb-md">
                <q-carousel 
                    v-model="slideIndex" 
                    class="rounded-borders"
                    control-color="primary"
                    transition-prev="slide-right" 
                    transition-next="slide-left" 
                    animated 
                    swipeable 
                    navigation 
                    padding 
                    arrows
                    infinite
                >
                    <q-carousel-slide v-for="(slide, index) in textSlides" :key="index" :name="slide.author" class="column no-wrap flex-center">
                        <q-icon name="fas fa-quote-right" color="primary" size="md" />
                        <div class="q-mt-md text-center">
                            <p>{{ slide.text }}</p>
                            <h6>
                                <span style="font-weight: bold;">{{ slide.author }}</span> - {{ slide.date }}
                            </h6>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>

            <div class="col-xs-12 q-pa-sm">
                <q-carousel 
                    v-model="videoSlideIndex" 
                    class="rounded-borders"
                    control-color="primary"
                    transition-prev="slide-right" 
                    transition-next="slide-left" 
                    animated 
                    swipeable 
                    navigation 
                    padding 
                    arrows
                    infinite
                    style="height: 100%;"
                >
                    <q-carousel-slide v-for="(slide, index) in videoSlides" :key="index" :name="slide.id" class="column no-wrap flex-center">
                        <div class="text-center" :style="`max-width: 100%; margin: 0 auto;`">
                            <iframe :width="videoWidth" :height="videoHeight" :src="`https://www.youtube.com/embed/${ slide.id }`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Testimonials',

    data() {
        return {
            slideIndex: 'Tiffany Lien',
            textSlides: [
                {
                    text: 'Richard Elias was nothing short of a super hero when it came to selling our Carmel Valley home! Trust me, he is your go-to person to get the job done! ',
                    author: 'Tiffany Lien',
                    date: '08/15/2018',
                },
                {
                    text:
                        'Christina is an excellent relator and great asset! Her dedication and patience were extremely helpful in our search. We spent many nights and weekends looking for the perfect home and she was always willing to be there. She also accommodated our price point concerns and answered any questions we  had. Not only did she help in our home search, she also referred us to a great mortgage broker which made our home buying process much easier. We would highly recommend her to any potential home buyer.',
                    author: 'Martino Michael',
                    date: '04/08/2019',
                },
                {
                    text:
                        'So grateful to have found Mari Rosas when we started our relocating process to San Diego. Our first impression was that she was very friendly and prepared. She spent all the time we needed to get familiar with our new city and make sure we found exactly what we needed. It was quite the journey to  get into our dream home and thanks to her, it was made possible. She was always there to answer our calls and texts,even if was just to vent! Her professionalism, hard work, and dedication are much respected and appreciated. We consider Mari a friend for life and highly recommend her to anyone we know.',
                    author: 'Jessica Garcia',
                    date: '01/23/2019',
                },
                {
                    text:
                        'Samantha was very knowledgeable, patient and flexible with her availability to show us houses at our convenience.  She answered all our questions and made us feel at ease while searching for our forever home. If you are buying or selling your home I highly recommend Samantha Lopez.',
                    author: 'Roxanne Granados',
                    date: '01/17/2019',
                },
            ],
            videoSlideIndex: 'Z0qWj-aqhII',
            videoSlides: [
                {
                    id: 'Z0qWj-aqhII'
                },
                {
                    id: 'x0my8qD-x4U'
                },
                {
                    id: '_35q8_RBLYc'
                },
                {
                    id: 'NVArUyrNXzw'
                },
            ],

            videoOffset: 160
        }
    },

    computed: {
        videoWidth() {
            let width = this.$q.screen.width - this.videoOffset
            return width < 1312 ? width : 1312
        },

        videoHeight() {
            return this.videoWidth * .5625
        }
    },

    methods: {},
}
</script>

<style scoped>
#Testimonials {
    width: 100%;
    /* min-height: 100vh; */
    position: relative;
    overflow: hidden;
}

.hero {
    width: 100%;
    min-height: 100vh;
    background: #171819;
    position: relative;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100&;
    overflow: hidden;
}
</style>
