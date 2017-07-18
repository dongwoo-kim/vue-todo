import Vue from 'vue';
import store from './store';
import router from './router';
import App from './components/App.vue';

var app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
