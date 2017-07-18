import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    todo
  },
  state: {
    title: 'todos',
  }
});
