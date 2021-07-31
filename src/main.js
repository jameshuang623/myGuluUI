import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from "./components/Button";

Vue.config.productionTip = false

Vue.component('g-button', Button)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
