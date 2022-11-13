<template>
  <div class="todo">
    <TodoHeader></TodoHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoHeader from "../components/TodoHeader.vue";
export default {
  name: "TodoView",

  components: {
    TodoHeader,
  },
};
</script>
