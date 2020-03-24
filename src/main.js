import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import '@/assets/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './utils/axios'
import cookie from './utils/cookie'
import '@/assets/global.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$ajax = axios;
Vue.prototype.$cookie = cookie;
Vue.prototype.$showMessage = function(message, type){
  this.$message({
    message,
    type,
    duration: 1500
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')