import Vue from 'vue'
import axios from 'axios'
import {
	Platform
} from 'quasar'

Vue.prototype.scrollIt = (id, selectorToScroll, customOffset) => {
	var element = id ? document.getElementById(id) : false
	//   k('element: ', element)

	var elementToScroll = selectorToScroll ? document.querySelector(selectorToScroll) : window
	//   k('elementToScroll: ', elementToScroll)

	var elementOffsetTop = element ? element.offsetTop : 0
	var leftScrollPos = 0
	var topScrollPos = elementOffsetTop - (customOffset || 25)

	//   k('scrollIt platform: ', Platform.is.mobile, Platform.is.ios)
	// scrollToOptions doesnt work on mobile safari iOS
	if (Platform.is.mobile && Platform.is.ios) {
		elementToScroll.scrollTo(leftScrollPos, topScrollPos)
	} else {
		elementToScroll.scrollTo({
			'behavior': 'smooth',
			'left': leftScrollPos,
			'top': topScrollPos
		})
	}
}
