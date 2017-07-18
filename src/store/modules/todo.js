let lastId = 2;

export default {
  namespaced: true,
  mutations: {
    toggleDone(state, id) {
      const target = state.items.find(item => item.id === id);
      target.done = !target.done;
    },
    remove(state, id) {
      const targetIdx = state.items.findIndex(todo => todo.id === id);
      state.items.splice(targetIdx, 1);
    },
    add(state, text) {
      lastId += 1;
      state.items.push({
        id: lastId,
        done: false,
        text
      })
    },
    setWaiting(state, waiting) {
      state.waiting = waiting;
    }
  },
  actions: {
    add({commit}, text) {
      commit('setWaiting', true);
      setTimeout(() => {
        commit('add', text);
        commit('setWaiting', false);
      }, 1000);
    }
  },
  state: {
    waiting: false,
    items: [
      {
        id: 1,
        text: 'TODO1',
        done: true 
      },
      {
        id: 2,
        text: 'TODO2',
        done: false
      }
    ]
  }
};
