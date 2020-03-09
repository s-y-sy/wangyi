import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from 'vant'
import './tools/rem'
import {  Tabbar,
          TabbarItem,
          Button,Search,
          Swipe, 
          SwipeItem,
          Lazyload,
          Sidebar, 
          SidebarItem
          }
          from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload,{
  lazyComponent: true
})
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.config.productionTip = false

new Vue({
  router,
  render:h=>h(App)
}).$mount("#app")