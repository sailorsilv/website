import Vue from 'vue';
import VueYouTubeEmbed from 'vue-youtube-embed';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import VueLazyLoad from 'vue-lazyload';
import './registerServiceWorker';


Vue.config.productionTip = false;
Vue.use(VueYouTubeEmbed);
Vue.use(VueLazyLoad);

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
