<template>
    <q-layout view="hhh LpR fFf">
        <q-header reveal elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    icon="fas fa-bars"
                    aria-label="Menu"
                    style="font-size: .7rem;"
                />

                <div class="absolute" style="top: 2px; left: 50%; transform: translateX(-50%);">
                    <img
                        src="statics/logos/RichardElias_LogoLockup-White.png"
                        style="max-height: 3rem;"
                    />
                </div>

                <!-- <div>Quasar v{{ $q.version }}</div> -->
            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            side="left"
            content-class="bg-black text-white"
            content-css="width: 100px;"
        >
            <q-list>
                <q-item
                    v-for="item in menuItems"
                    :key="item.title"
                    clickable
                    tag="a"
                    target="_blank"
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
                { title: 'Home' },
                { title: 'My Listings' },
                { title: 'Concierge' },
                { title: 'Buyers' },
                { title: 'Sellers' },
                { title: 'The Team' },
                { title: 'Testimonials' },
                { title: 'Contact' },
                { title: 'Compass Search' },
            ],
        }
    },
}
</script>
