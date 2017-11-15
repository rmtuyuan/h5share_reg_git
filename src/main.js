// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import './element-variables.scss'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store.js'
import getUrl from './js/getUrlParms.js'
// import ""
// import Element from 'element-ui'
// import ""
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$utils = getUrl
Vue.use(Vuex)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
