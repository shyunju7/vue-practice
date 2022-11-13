<template>
  <div>
    <h1>Delete TODO...</h1>
  </div>
</template>

<script>
import { todoApi } from "@/util/api";
export default {
  name: "TodoDelete",
  methods: {
    moveList: function () {
      this.$router.push({ name: "list" });
    },
  },
  created: function () {
    console.log("Delete");
    todoApi
      .deleteTodo(this.$route.params.num)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    this.moveList();
  },
};
</script>

<style></style>
