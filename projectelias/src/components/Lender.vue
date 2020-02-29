<template>
    <div id="lender" class="q-pa-xl">
        <div class="row well container">
            <div class="col-xs-6" align="right">
                <q-img src="statics/team/Tom_lender.jpg" style="max-width: 7.5rem;" />
            </div>

            <div class="col-xs-6 q-pl-md">
                <h6 class="text-white Compass-Serif-Regular">Lender</h6>
                <q-img src="statics/logos/GuildLogo.png" style="max-width: 7rem;" />
                <h5 class="text-white q-my-sm">Tom Weikel</h5>
                <p class="text-white" style="margin: 0; font-size: .8rem;">NMLS # 243656</p>
                <p class="text-white" style="margin: 0; font-size: .8rem;">Phone 858.597.3772</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Lender',

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

<style scoped>
#lender {
    width: 100%;
    /* min-height: 100vh; */
    background: #080808;
    position: relative;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
