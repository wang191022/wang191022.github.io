import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'
import 'default-passive-events'
// import { config } from 'vue/types/umd'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.prototype.$axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization')
    }

    return config
  },
  error => {
    if (error.status === 200) {
      localStorage.removeItem('Authorization');
      this.$router.push('/login');
    }
    return Promise.reject(error)
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
