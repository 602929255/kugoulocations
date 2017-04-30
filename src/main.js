// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/css/neat-mean.css'

Vue.use(MintUI)
Vue.use(VueResource)


Vue.config.productionTip = false

/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
