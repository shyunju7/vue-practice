<template>
  <div>
    <ul>
      <li><TodoItem text="오늘 할 일1"></TodoItem></li>
      <li><TodoItem text="오늘 할 일2"></TodoItem></li>
      <li><TodoItem text="오늘 할 일3"></TodoItem></li>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  comments: {
    TodoItem: TodoItem,
  },
  components: { TodoItem },
};
</script>

<style>
input[type="text"] {
  border: none;
  border-bottom: 1px solid #ddd;
}
ul {
  list-style: none;
}
</style>
