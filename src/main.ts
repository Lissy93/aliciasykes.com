import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueHead from 'vue-head';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueHead);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
