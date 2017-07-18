import Vue from 'vue';
import VueRouter from 'vue-router';
import Todos from '../components/Todos.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Todos},
    {path: '/:filter', component: Todos, props: true}
  ]
});
