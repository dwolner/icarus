<template>
    <div id="Team" class="q-pa-xl">
        <div class="row well container">
            <div class="col-xs-12 q-pa-sm q-mb-md">
                <h3 class="text-white Compass-Serif-Regular q-mb-md">The Team</h3>
            </div>

            <div v-for="item in team" align="center" class="col-xs-12 col-sm-6 col-md-4 col-lg q-pa-sm">
                <div class="bg-white q-pa-md full-height">
                    <q-img :src="`statics/team/${ item.filename }`" />
                    <h5 class="q-my-lg">{{ item.name }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Team',

    data() {
        return {
            team: [{
                filename: 'Diego.jpg',
                name: 'Diego'
            }, {
                filename: 'Jane.jpg',
                name: 'Jane'
            }, {
                filename: 'John.jpg',
                name: 'John'
            }, {
                filename: 'Mari.jpg',
                name: 'Mari'
            }, {
                filename: 'Richard.jpg',
                name: 'Richard'
            }, {
                filename: 'Sammie.jpg',
                name: 'Sammie'
            }]
        }
    },

    methods: {
        
    }
}
</script>

<style scoped>
#Team {
    width: 100%;
    min-height: 100vh;
    background: #080808;
    position: relative;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100&;
    overflow: hidden;
}
</style>
