import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import ElementUI from 'element-ui';
import store from './store'
Vue.config.productionTip = false
import '@roo/roo-vue';
import VueForm from '@lljj/vue-json-schema-form';
import 'element-ui/lib/theme-chalk/index.css';
Vue.component('VueForm', VueForm);
Vue.use(ElementUI)
// 蓝色主题
import '@roo/roo-vue/dist/css/theme/blue/roo-vue.css';
new Vue({
  router,

  store,
  render: h => h(App)
}).$mount('#app')
