<template>
    <q-layout view="hhh LpR fFf">
        <q-header reveal elevated>
            <q-toolbar>
                <!-- <q-btn
                    flat
                    dense
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    icon="fas fa-bars"
                    aria-label="Menu"
                    style="font-size: .7rem;"
                /> -->

                <div class="absolute" style="top: 2px; left: 0%;">
                    <img
                        src="statics/logos/RichardElias_LogoLockup-White.png"
                        style="max-height: 3rem;"
                    />
                </div>

                <div class="full-width" align="right"><p class="text-white q-ma-md" style="opacity: .25;">DRE 01104411</p></div>
            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            overlay
            side="left"
            content-css="width: 100px;"
        >
            <q-list>
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
                    <q-item-section>
                        <q-item-label>{{ item.title }}</q-item-label>
                        <!-- <q-item-label caption>github.com/quasarframework</q-item-label> -->
                    </q-item-section>
                </q-item>
            </q-list>

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
                { title: 'Contact', sectionID: 'Contact' },
                { title: 'Compass Search', sectionID: 'CompassSearch' },
            ],
        }
    },

    methods: {
        nav(item) {
            if (item.sectionID) this.scrollIt(item.sectionID, null, -100)

            this.leftDrawerOpen = false
        }
    }
}
</script>
