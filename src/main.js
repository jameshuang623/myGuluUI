import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from "./components/Button";
import Icon from "./components/Icon";
import ButtonGroup from "./components/ButtonGroup";

Vue.config.productionTip = false

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
