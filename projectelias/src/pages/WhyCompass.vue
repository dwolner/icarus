<template>
    <q-page class="flex flex-center">
        <div id="WhyCompass">
            <div v-if="!auth" class="bg-white q-pa-md" align="center" style="max-width: 500px; margin: 2rem auto;">
                <q-input 
                    v-model="password"
                    class="q-pa-md bg-white"
                    filled 
                    lazy-rules 
                    label="Password"
                />

                <div class="q-pa-md">
                    <q-btn label="Submit" type="submit" color="primary" @click="submitPassword()" />
                </div>
            </div>

            <iframe v-else src="https://www.icloud.com/keynote/0vgIMl_O9q7XSNfKpfAWsP0dQ?embed=true" width="100%" :height="embedHeight" frameborder="0" allowfullscreen="1" referrer="no-referrer"></iframe>
        </div>
    </q-page>
</template>

<script>

export default {
    name: 'WhyCompass',

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
    #WhyCompass {
        width: 100%;
        min-height: calc(100vh - 50px);
        /* padding-top: 50px; */
        background: #080808;
        position: relative;
        overflow: hidden;
    }
</style>
