<template>
  <div>
    <todo-input />
    <ul>
      <li
        is="todo-item"
        v-for="todo in filteredItems" 
        :todo="todo"
        :key="todo.id" />
    </ul>
    <ul class="filter-btns">
      <li><router-link to="/">All</router-link></li>
      <li><router-link to="/active">Active</router-link></li>
      <li><router-link to="/completed">Completed</router-link></li>
    </ul>
  </div>
</template>

<script>
import todoItem from './TodoItem.vue';
import todoInput from './TodoInput.vue';
import {mapState} from 'vuex';

export default {
  props: ['filter'],
  components: {
    todoItem,
    todoInput
  },
  computed: {
    todo() {
      return this.$store.state.todo;
    },
    filteredItems() {
      const items = this.todo.items;
      switch (this.filter) {
        case 'active':
          return items.filter(item => !item.done);
        case 'completed':
          return items.filter(item => item.done);
        default:
          return items;
      }
    }

  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through
}
.filter-btns {
  display: flex;
  margin: 0;
  padding: 0;
}
.filter-btns li {
  list-style-type: none;
  margin: 0 5px;
}
.filter-btns .router-link-active {
  font-weight: bold;
}
</style>
