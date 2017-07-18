<template>
  <li :class="{done: todo.done}">
    <input type="checkbox" @change="toggleDone(todo.id)" :checked="todo.done" />
    {{todo.text}}
    <button @click="remove(todo.id)">X</button>
  </li>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  props: ['todo'],
  methods: {
    ...mapMutations('todo', [
      'toggleDone',
      'remove'
    ])
  }
};
</script>

