import Vue from 'vue';
import BaiduMap from 'vue-baidu-map';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(BaiduMap, {
  ak: 'FS2UP1Bcz6IlO22wyH3hcUT2bCg8qvQy',
});
Vue.use(ElementUI);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
