<template>
    <q-layout view="hhh LpR fFf">
        <q-header reveal elevated>
            <q-toolbar style="height: 65px;">
                <q-btn
                    flat
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    icon="fas fa-bars"
                    aria-label="Menu"
                    style="font-size: .7rem;"
                />
                
                <q-toolbar-title></q-toolbar-title>

                <q-btn size="xs" icon="fab fa-instagram" @click="openWindow('https://www.instagram.com/richardeliasteam/')" />
                <q-btn size="xs" icon="fab fa-facebook" @click="openWindow('https://www.facebook.com/RichardEliasTeam/')" />

                <q-btn @click="nav(menuItems[0])">
                    <img
                        src="statics/logos/RichardElias_CompassLockupHorizontal-White.png"
                        style="max-height: 3.4rem;"
                    />
                </q-btn>

            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            overlay
            side="left"
        >
            <q-list class="navMenu" dark separator>
                <q-item
                    v-for="item in menuItems"
                    :key="item.title"
                    clickable
                    tag="a"
                    target="_blank"
                    @click="nav(item)"
                >
                    <!-- <q-item-section avatar>
            			<q-icon name="code" />
                    </q-item-section>-->
                    <q-item-section align="center">
                        <h6 style="font-size: .9rem;">{{ item.title }}</h6>
                    </q-item-section>
                </q-item>
            </q-list>

            <div class="full-width" align="center">
                <q-btn round outline @click="$root.$emit('showContactFormOverlay')">
                    <q-icon size="xs" name="far fa-envelope" />
                </q-btn>
            </div>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: 'MyLayout',

    data() {
        return {
            leftDrawerOpen: false,
            menuItems: [
                { title: 'Home', sectionID: 'top' },
                { title: 'Concierge', sectionID: 'Concierge' },
                { title: 'My Listings', sectionID: 'MyListings'},
                { title: 'Buyers & Sellers', sectionID: 'BuyersSellers'},
                { title: 'The Team', sectionID: 'Team' },
                { title: 'Testimonials', sectionID: 'Testimonials' },
                { title: 'Home Valuation', sectionID: 'Homebot' },
                { title: 'Contact', sectionID: 'Contact' },
                { title: 'Compass Search', route: '/search' }
            ],
        }
    },

    methods: {
        nav(item) {
            if (item.sectionID) {
                if (this.$router.currentRoute !== '/dev') this.$router.push('/dev')
                this.scrollIt(item.sectionID, null, -100)
                if (item.sectionID === 'Homebot') {
                    this.$root.$emit('goToHomebot', true)
                }
            }
            if (item.route) this.$router.push(item.route)

            this.leftDrawerOpen = false
        },

        openWindow(link) {
            let options = {}
            window.open(link, '_blank')
        }
    },

    mounted() {
        console.log('ROuter: ', this.$router.currentRoute)

        if (this.$router.currentRoute && this.$router.currentRoute.hash) {
            this.$nextTick(() => {
                this.scrollIt(this.$router.currentRoute.hash.replace('#', ''), null, -100)
            })
        }
    }
}
</script>

<style scoped>
    .navMenu {
        padding: 1rem;
    }
</style>