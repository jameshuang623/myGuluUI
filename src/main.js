import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from "./components/Button";
import Icon from "./components/Icon";
import ButtonGroup from "./components/ButtonGroup";
import Input from "./components/Input";
import Tabs from "./components/Tabs";
import TabsHead from "./components/TabsHead";
import TabsBody from "./components/TabsBody";
import TabsItem from "./components/TabsItem";
import TabsPanel from "./components/TabsPanel";

Vue.config.productionTip = false

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-panel', TabsPanel)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
