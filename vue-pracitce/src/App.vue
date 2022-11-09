<template>
  <div id="app">
    <TodoTemplate></TodoTemplate>
  </div>
</template>

<script>
import TodoTemplate from "./components/TodoTemplate.vue";

export default {
  name: "App",
  components: {
    TodoTemplate,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
