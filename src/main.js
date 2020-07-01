import Vue from 'vue'
import App from './App'

import ophNavBar from './components/oph-nav-bar'
import ophNavCell from './components/oph-nav-cell'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.$adpid = "1111111111"

Vue.component('oph-nav-bar', ophNavBar)
Vue.component('oph-nav-cell', ophNavCell)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
