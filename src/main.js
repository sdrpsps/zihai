import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import i18n from './i18n/index.js'

Vue.use(VueI18n)
Vue.config.productionTip = false

// new Vue({
//   router,
//   i18n,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})