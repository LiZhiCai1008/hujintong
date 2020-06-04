import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/axios'

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

NutUI.install(Vue);
Vue.config.productionTip = false
Vue.prototype = Object.assign(Vue.prototype, {
  "$axios": axios
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
