<template>
  <div>
    <input type="checkbox" />
    <input type="text" readonly :value="text" />
    <input type="button" value="수정" />
    <input type="button" value="삭제" />
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    text: String,
  },
  data: function () {},
};
</script>

<style></style>
