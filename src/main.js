import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from "./plugin";
import Button from "./components/Button/Button";
import Icon from "./components/Icon";
import ButtonGroup from "./components/Button/ButtonGroup";
import Input from "./components/Input/Input";
import Tabs from "./components/Tab/Tabs";
import TabsHead from "./components/Tab/TabsHead";
import TabsBody from "./components/Tab/TabsBody";
import TabsItem from "./components/Tab/TabsItem";
import TabsPanel from "./components/Tab/TabsPanel";
import Toast from "./components/Toast/Toast";

Vue.config.productionTip = false

Vue.use(plugin)

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-panel', TabsPanel)
Vue.component('g-toast', Toast)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
