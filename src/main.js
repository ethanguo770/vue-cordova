import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCordova from 'vue-cordova'


Vue.use(VueCordova)
Vue.config.productionTip = false


if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
