<template>
  <div>
    <div v-if="!waiting">
      <input type="text" v-model="text" @keypress.enter="addTodo" />
      <button @click="addTodo">ADD!</button>
    </div>
    <div v-else>......waiting</div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data: () => ({
      text: ''
  }),
  computed: mapState('todo', ['waiting']),
  methods: {
    addTodo() {
      this.$store.dispatch('todo/add', this.text);
      this.text = '';
    }
  }
}
</script>

