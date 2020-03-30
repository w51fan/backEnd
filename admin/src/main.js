import Vue from 'vue';
import BaiduMap from 'vue-baidu-map';
import ElementUI from 'element-ui';
import i18n from '@/common/i18n/i18n'
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(BaiduMap, {
  ak: 'FS2UP1Bcz6IlO22wyH3hcUT2bCg8qvQy',
});
Vue.use(ElementUI);


// Vue.use(VueI18n)
Vue.config.productionTip = false;
// const vuei18n = new VueI18n({
//   locale: 'zh',
//   messages: {
//     'zh': require('./common/i18n/lang/zh'),
//     'en': require('./common/i18n/lang/en')
//   }
// })
i18n.t('...')
new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
