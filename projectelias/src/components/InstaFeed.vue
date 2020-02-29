<template>
    <div id="instafeed">
        <div id="instagram-feed-demo" class="instagram_feed"></div>
    </div>
</template>

<script>
var Instafeed = require("instafeed.js");

export default {
    name: 'InstaFeed',

    data() {
        return {}
    },

    methods: {},

    created() {
        var feed = new Instafeed({
            get: 'user',
            userId: '1133942097',
            template: '<a href="{{link}}"><img src="{{image}}" /></a>'
        });
        feed.run();
    }
}
</script>

<style scoped></style>
