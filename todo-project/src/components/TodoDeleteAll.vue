<template>
  <div>
    <h1>Delete TODO...</h1>
  </div>
</template>

<script>
import { todoApi } from "@/util/api";
export default {
  name: "TodoDeleteAll",
  methods: {
    moveList: function () {
      this.$router.push({ name: "list" });
    },
  },
  created: function () {
    console.log("deleteAllTodo");
    todoApi
      .deleteAllTodo()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    this.moveList();
  },
};
</script>

<style></style>
