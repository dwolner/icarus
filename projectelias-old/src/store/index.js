import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function ( /* { ssrContext } */ ) {
	const Store = new Vuex.Store({
		modules: {
			// example
		},

		// enable strict mode (adds overhead!)
		// for dev mode only
		strict: process.env.DEV,

		state: {
			secret: 'eliasteam',
			globalInquiryType: 'General'
		},

		mutations: {
			globalInquiryType(state, payload) {
				state.globalInquiryType = payload
			}
		}
	})

	return Store
}
