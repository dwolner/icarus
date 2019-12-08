<template>
    <div id="MyListings" class="row container">
        <div v-for="item in listings" class="col-xs-12 col-sm-6 col-md-3 shadow-4"></div>
    </div>
</template>

<script>
export default {
    name: 'Concierge',

    data() {
        return {
            listings: null,
        }
    },

    methods: {
        getListings() {
            let req = {
                searchQuery: {
                    start: 0,
                    num: 24,
                    sortOrder: 90,
                    listingTypes: [2],
                    agentSearch: true,
                    saleStatuses: [9, 12],
                    geography: 'san_diego',
                    listingDetailsAllowPartialMatch: { 'Agent Name': { listValues: ['richard elias'] } },
                },
                relationTypes: [0]
            }

            this.api.post('/listings', req, res => {
                k('listing res: ', res)
            })
        },
    },

    created() {
        this.getListings()
    },
}
</script>

<style scoped>
.MyListings {
    width: 100%;
    /* height: calc(100vh - 50px); */
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
