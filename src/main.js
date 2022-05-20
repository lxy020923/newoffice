import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import lottie from 'vue-lottie'
// Vue.component('lottie', lottie)

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  // store,
  // moment,
  render: (h) => h(App),
}).$mount('#app')