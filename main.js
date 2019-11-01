import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
import directives from './zidingyi/directives';
import 'font-awesome/css/font-awesome.css'
Vue.use(directives)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')