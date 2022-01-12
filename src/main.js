import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./plugins/element.js";
import "default-passive-events";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("Authorization")) {
      config.headers.Authorization = localStorage.getItem("Authorization");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 跳转登录页面
        case 401:
          this.$router.replace({name: 'Login'})
          break;

        // 403: token失效
        // 清除本地token
        // 跳转登录页面
        case 403:
          localStorage.removeItem('Authorization');
          router.push({name: 'Login'})
          break;
        // 其他错误
        default:
          console.log(error.response.data.message);
      }
    }
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
