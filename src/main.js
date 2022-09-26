import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import ElementUI from 'element-ui';
import store from './store'
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
