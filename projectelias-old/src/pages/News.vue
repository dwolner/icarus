<template>
    <q-page class="flex flex-center">
        <div id="News" class="row">
            
        </div>
    </q-page>
</template>

<script>

export default {
    name: 'News',

    components: {
        
    },

    data() {
        return {
           auth: false,
           password: '',
           pageLoad: false
        }
    },

    computed: {
        embedHeight() {
            return this.$q.screen.height - 50
        },

        secret() {
            return this.$store.state.secret
        }
    },

    methods: {
        submitPassword() {
            if (this.password === this.secret) {
                this.auth = true
                // this.$q.loading.show({
                //     delay: 0 // ms
                // })
            }
        }
    }
}
</script>

<style scoped>
    #News {
        width: 100%;
        min-height: calc(100vh - 50px);
        /* padding-top: 50px; */
        background: #080808;
        position: relative;
        overflow: hidden;
    }
</style>
