<template>
    <div id="Contact" style="background-image: url('statics/Luxury-LA.jpg'); background-size: cover; background-position: 50%;"> 
        <div class="overlay"></div>

        <div class="well row container q-pa-xl" style="position: absolute; z-index: 999; color: white;">
            <div class="col-sm-12 col-md-4 q-pa-sm" align="center">
                <h6 class="Compass-Serif-Regular q-my-md">COMPASS</h6>
                <p>San Diego Real Estate</p>
                <p>Richard Elias Team | Compass</p>
                <p>Realtor® DRE #01104411</p>
            </div>
            <div class="col-sm-12 col-md-4 q-pa-sm" align="center">
                <h6 class="Compass-Serif-Regular q-my-md">LOCATION</h6>
                <iframe width="300" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=655+W+Broadway+Ste.+1650,+San+Diego,+CA,+92101&key=AIzaSyBe1MCdquXljVHyTzXwD194J8Eq6ubdaTs" allowfullscreen></iframe>
            </div>
            <div class="col-sm-12 col-md-4 q-pa-sm" align="center">
                <h6 class="Compass-Serif-Regular q-my-md">CONTACT US</h6>
                <p>619.672.2020</p>
                <p>richard.elias@compass.com</p>
            </div>
            <div class="col-sm-12 q-pt-md q-px-xl" align="center">
                <img src="statics/logos/RichardElias_CompassLockupHorizontal-White.png" style="max-width: 20rem;" />
                <p>While some of the listings on this site may not be our exclusive listings, we have ongoing relationships with all of the listing agents.</p>
                <p>Designed and developed by Daniel Wolner.</p>
            </div>
            <div class="col-sm-6 q-py-xl q-px-md" align="left">
                <p style="font-size: .8rem;">© COPYRIGHT 2020 | PRIVACY POLICY</p>
            </div>
            <div class="col-sm-6 q-py-xl q-px-md" align="right">
                <p style="font-size: .8rem;">THE RICHARD ELIAS TEAM</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',

    data() {
        return {
            
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

    .overlay {
        background: rgba(0, 0, 0, .5);
        height: 100%;
        width: 100%;
        position: absolute;
    }
</style>
