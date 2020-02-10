<template>
    <div id="Homebot">
        <div class="row well container">
            <div class="col-xs-12 q-pa-xl">
                <div id="homebot_homeowner"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Homebot',

    data() {
        return {
            
        }
    },

    methods: {
        openWindow(link) {
            let options = {}
            window.open(link, '_blank')
        }
    }
}
</script>

<script> (function (h,b) { var w = window, d = document, s = 'script', x, y; w['__hb_namespace'] = h; w[h] = w[h] || function () { (w[h].q=w[h].q||[]).push(arguments) }; y = d.createElement(s); x = d.getElementsByTagName(s)[0]; y.async = 1; y.src = b; x.parentNode.insertBefore(y,x) })('Homebot','https://embed.homebotapp.com/lgw/v1/widget.js'); Homebot('#homebot_homeowner', '926161d8746a94461a4f2df4afa8ef7a1186cea8f0be1ff3') </script>

<style scoped>
#Homebot {
    width: 100%;
    /* min-height: 100vh; */
    background: #fff;
    position: relative;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
