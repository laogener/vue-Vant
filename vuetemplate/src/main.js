import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import "./registerServiceWorker";
// import Vant from "vant";

// 这里是动态注册全局组件
// import index from "@/components/index";
// rem适配
import 'lib-flexible/flexible.js'
import 'vant/lib/index.css'
// Vue.use(index);
// 引入vant\
import {
  Toast,
  Tab,
  Tabs,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Collapse,
  CollapseItem,
  Dialog,
  RadioGroup,
  Radio,
  Overlay,
  Swipe,
  SwipeItem,
  Lazyload,
  Search,
  Icon,
  DropdownMenu,
  ActionSheet,
  Button
} from 'vant'
import apiAll from './utils/index'
// Vue.use(VueAwesomeSwiper);
Vue.use(Toast)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(GoodsAction)
Vue.use(GoodsActionIcon)
Vue.use(GoodsActionButton)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Dialog)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Overlay)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Search)
Vue.use(Icon)
Vue.use(DropdownMenu)
Vue.use(ActionSheet)
Vue.use(Button)
// Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$fetch = apiAll // 将api挂载到vue的原型上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
