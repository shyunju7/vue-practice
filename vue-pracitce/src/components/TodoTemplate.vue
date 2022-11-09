<template>
  <div>
    <h2>Title</h2>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import TodoInput from "./TodoInput.vue";
export default {
  name: "TodoTemplate",
  components: {
    TodoList: TodoList,
    TodoInput: TodoInput,
  },
};
</script>

<style></style>
