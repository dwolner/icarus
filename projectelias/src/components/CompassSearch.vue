<template>
    <div id="compasssearch">
        <div class="row well container">
            <div class="col-xs-12 q-pa-md" align="right">
                <iframe
                    style="border: 0px #ffffff none;"
                    src="https://www.compass.com/homes-for-sale/san-diego-ca/"
                    name="myiFrame"
                    width="100%"
                    :height="searchHeight"
                    frameborder="1"
                    marginwidth="0px"
                    marginheight="0px"
                    scrolling="no"
                    allowfullscreen="allowfullscreen"
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompassSearch',

    data() {
        return {}
    },

    computed: {
        searchHeight() {
            return this.$q.screen.height - 105
        }
    },

    methods: {
        openWindow(link) {
            let options = {}
            window.open(link, '_blank')
        },
    },
}
</script>

<style scoped>
#compasssearch {
    width: 100%;
    min-height: calc(100vh - 65px);
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
