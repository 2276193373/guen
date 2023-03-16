import App from './App'
import Vue from 'vue'
import CustomBar from './component/CustomBar/CustomBar'
import BarBg from './component/BarBg/BarBg'
import Selects from './component/Selects/Selects'
Vue.component('CustomBar',CustomBar)
Vue.component('BarBg',BarBg)
Vue.component('select-lay',Selects)

// #ifndef VUE3
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif



