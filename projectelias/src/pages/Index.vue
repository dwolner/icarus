<template>
    <q-page class="flex flex-center">
        <div class="hero">
            <div class="container text-white" align="center">
				<img src="statics/logos/RichardElias_LogoLockup-White.png" style="max-width: 20rem;" />
                <h1 class="q-ma-lg">Richard Elias Group</h1>
                <h5>Helping you find your place in San Diego.</h5>
                <q-btn flat color="light">
                    <div class="full-width" style="font-size: 1.2rem;">See More</div>
                    <q-icon name="fas fa-chevron-down" size="xs" />
                </q-btn>
            </div>
            <video
                id="bgvid"
                autoplay="autoplay"
                preload="metadata"
                loop="loop"
                muted
                class="playing"
            >
                <source
                    src="//luxuryp.s3.amazonaws.com/2c7cb697773f62c41aeef634a325fdf9.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'PageIndex',
}
</script>

<style scoped>
.hero {
    width: 100%;
    height: 100%;
    height: calc(100vh - 50px);
    background: #171819;
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