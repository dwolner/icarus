<template>
    <div id="InstaFeed">
        <div id="instagram-feed-demo" class="instagram_feed"></div>
    </div>
</template>

<script src="../js/InstagramFeed.min.js"></script>

<script>

export default {
    name: 'InstaFeed',

    data() {
        return {}
    },

    methods: {},

    created() {
        new InstagramFeed({
            'username': 'richardeliasteam',
            'container': "#instagram-feed-demo"
        });
    }
}
</script>

<style scoped></style>
