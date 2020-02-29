import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */


const Router = new VueRouter({
	scrollBehavior(to, from, savedPosition) {
		console.log('scrollbehave: ', to)

		// if (to.hash) {
		// 	return {
		// 		selector: to.hash
		// 		// , offset: { x: 0, y: 10 }
		// 	}
		// }
	},

	routes,

	// Leave these as is and change from quasar.conf.js instead!
	// quasar.conf.js -> build -> vueRouterMode
	// quasar.conf.js -> build -> publicPath
	mode: 'history',
	base: process.env.VUE_ROUTER_BASE
})

Router.beforeEach((to, from, next) => {
	console.log('before route: ', to, from)
	next()
})

Router.afterEach((to, from, next) => {
	console.log('after route: ', to, from)
})

export default Router