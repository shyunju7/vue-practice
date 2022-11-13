<template>
  <header>
    <img src="..//assets/logo.png" width="200px" />
    <h1>TODO LIST - ROUTER</h1>
    <b-nav>
      <router-link to="/list">목록</router-link> |
      <router-link to="/input">추가</router-link>
    </b-nav>
  </header>
</template>

<script>
export default {
  name: "TodoHeader",
};
</script>

<style></style>
